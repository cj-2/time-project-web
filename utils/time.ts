import { format, getDayOfYear, intervalToDuration } from "date-fns";

export const periodLabel = (count?: number) => {
  const countText = count === 1 ? " período" : " períodos";
  return !count ? "Nenhum" : count + countText;
};

export const recordLocalToForm = (
  obj: Partial<RecordLocal> & { isSync?: boolean; isBind?: boolean },
  callback = () => {},
): RecordForm => {
  return {
    id: obj.id || undefined,
    title: obj.title || "",
    description: obj.description || "",
    code: obj.code || "",
    category: "",
    periods: obj.periods || [],
    isSync: Boolean(obj.isSync),
    isBind: Boolean(obj.isBind),
    timerSessionType: obj.timerSessionType || "",
    timerSessionFrom: obj.timerSessionFrom || "",
    callback,
  };
};

export const formatPeriodPopper = (
  period: PeriodMap | PeriodLocal,
): { formatted: string; date: string } => {
  const fullFormat = "dd/MM/yyyy HH:mm::ss";
  const onlyTime = "HH:mm:ss";
  const onlyDate = "dd/MM/yyyy";

  const milliseconds =
    new Date(period.end).getTime() - new Date(period.start).getTime();

  if (getDayOfYear(period.start) === getDayOfYear(period.end)) {
    return {
      formatted: millisecondsToString(milliseconds),
      date: `${format(period.start, onlyTime)} até ${format(
        period.end,
        onlyTime,
      )} de ${format(period.start, onlyDate)}`,
    };
  }

  return {
    formatted: millisecondsToString(milliseconds),
    date: `${format(period.start, fullFormat)} até ${format(
      period.end,
      fullFormat,
    )}`,
  };
};

export const formatPeriodListToString = (periods: PeriodLocal[]) => {
  let totalMilliseconds = 0;

  for (let i = 0; periods.length > i; i++) {
    const calc =
      new Date(periods[i].end).getTime() - new Date(periods[i].start).getTime();

    totalMilliseconds += calc;
  }

  return millisecondsToString(totalMilliseconds);
};

export const millisecondsToString = (milliseconds: number) => {
  const duration = intervalToDuration({ start: 0, end: milliseconds });
  const { days, hours, minutes, seconds } = duration;

  let fString = "";

  if (days != undefined) fString += days + "d ";
  if (hours != undefined) fString += hours + "h ";
  if (minutes != undefined) fString += minutes + "m ";
  if (seconds != undefined) fString += seconds + "s ";

  return fString.trim() || "0s";
};
