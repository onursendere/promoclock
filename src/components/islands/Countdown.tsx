import { cn } from "@/lib/utils";
import { pad2, type Countdown as CountdownValue } from "@/lib/time";

export type CountdownTone = "success" | "destructive" | "primary";

const toneClasses: Record<CountdownTone, string> = {
  success: "border-success/25 bg-success/8 text-success",
  destructive: "border-destructive/25 bg-destructive/8 text-destructive",
  primary: "border-primary/25 bg-primary/8 text-primary",
};

interface Props {
  value: CountdownValue;
  labels: { days: string; hours: string; minutes: string; seconds: string };
  tone: CountdownTone;
}

export default function Countdown({ value, labels, tone }: Props) {
  const units = [
    ...(value.days > 0 ? [{ n: value.days, label: labels.days }] : []),
    { n: value.hours, label: labels.hours },
    { n: value.minutes, label: labels.minutes },
    { n: value.seconds, label: labels.seconds },
  ];
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4" role="timer">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div
            className={cn(
              "flex size-16 items-center justify-center rounded-2xl border shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:size-24",
              toneClasses[tone],
            )}
          >
            <span className="text-2xl font-bold tabular-nums sm:text-4xl">{pad2(unit.n)}</span>
          </div>
          <span className="mt-2 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
