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

const Dot = ({ className }: { className: string }) => <span className={`size-1.5 shrink-0 rounded-full ${className}`} aria-hidden="true" />;

export function ScheduleCard({ dict, rows }: { dict: UiDictionary; rows: ScheduleRow[] }) {
  const s = dict.schedule;
  return (
    <Card className="gap-0 py-0 shadow-xs">
      {/* Mobile: one compact row per city */}
      <ul className="divide-y sm:hidden">
        {rows.map((row) => (
          <li key={row.city} className="flex items-center justify-between gap-3 px-4 py-3">
            <span className="min-w-0">
              <span className="block truncate font-medium">{row.city}</span>
              <span className="block text-xs text-muted-foreground">{row.utcOffset}</span>
            </span>
            <span className="flex items-center gap-1.5 font-mono text-sm tabular-nums">
              <Dot className="bg-destructive" />
              {row.peak}
            </span>
          </li>
        ))}
      </ul>

      <div className="hidden sm:block">
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
                <TableCell className="font-mono tabular-nums">
                  <span className="flex items-center gap-2">
                    <Dot className="bg-destructive" />
                    {row.peak}
                  </span>
                </TableCell>
                <TableCell className="pr-4 font-mono tabular-nums">
                  <span className="flex items-center gap-2">
                    <Dot className="bg-success" />
                    {row.offPeak}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p className="border-t bg-muted/30 px-4 py-3 text-sm text-muted-foreground">{s.weekendLabel}</p>
    </Card>
  );
}
