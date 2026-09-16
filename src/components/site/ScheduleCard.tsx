import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { UiDictionary } from "@/lib/i18n/dictionaries";

export interface ScheduleRow {
  city: string;
  timezone: string;
  utcOffset: string;
  peak: string;
  offPeak: string;
}

export function ScheduleCard({ dict, rows }: { dict: UiDictionary; rows: ScheduleRow[] }) {
  const s = dict.schedule;
  return (
    <Card className="gap-0 py-0 shadow-xs">
      <Table>
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead className="pl-4">{s.tableHeaders.city}</TableHead>
            <TableHead>{s.tableHeaders.timezone}</TableHead>
            <TableHead>{s.tableHeaders.peakHours}</TableHead>
            <TableHead className="pr-4">{s.tableHeaders.offPeakHours}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.city}>
              <TableCell className="pl-4 font-medium">{row.city}</TableCell>
              <TableCell className="text-muted-foreground">
                {row.timezone} <span className="text-xs">({row.utcOffset})</span>
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="gap-1.5 font-mono tabular-nums">
                  <span className="size-1.5 rounded-full bg-destructive" aria-hidden="true" />
                  {row.peak}
                </Badge>
              </TableCell>
              <TableCell className="pr-4">
                <Badge variant="outline" className="gap-1.5 font-mono tabular-nums">
                  <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
                  {row.offPeak}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between gap-3 border-t bg-muted/30 px-4 py-3 text-sm text-muted-foreground">
        <span>{s.weekdayLabel}</span>
        <span>{s.weekendLabel}</span>
      </div>
    </Card>
  );
}
