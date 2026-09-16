import { pad2, type Countdown as CountdownValue } from "@/lib/time";

interface Props {
  value: CountdownValue;
  labels: { days: string; hours: string; minutes: string; seconds: string };
}

export default function Countdown({ value, labels }: Props) {
  const units = [
    ...(value.days > 0 ? [{ n: value.days, label: labels.days }] : []),
    { n: value.hours, label: labels.hours },
    { n: value.minutes, label: labels.minutes },
    { n: value.seconds, label: labels.seconds },
  ];
  return (
    <div className="grid auto-cols-fr grid-flow-col gap-2" role="timer">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center gap-1 rounded-lg border bg-muted/40 px-2 py-3">
          <span className="font-mono text-3xl font-semibold tracking-tight tabular-nums sm:text-4xl">{pad2(unit.n)}</span>
          <span className="text-[11px] font-medium text-muted-foreground uppercase">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}
