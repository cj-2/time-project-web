import { format, getDayOfYear, intervalToDuration } from "date-fns";

export const timePeriodLabel = (count?: number) => {
  const countText = count === 1 ? " período" : " períodos";
  return !count ? "Nenhum" : count + countText;
};

export const timeRecordLocalToForm = (
  obj: Partial<TimeRecordLocal> & { isSync?: boolean; isBind?: boolean },
  callback = () => {},
): TimeRecordForm => {
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
  timePeriod: PeriodMap | PeriodLocal,
): { formatted: string; date: string } => {
  const fullFormat = "dd/MM/yyyy HH:mm::ss";
  const onlyTime = "HH:mm:ss";
  const onlyDate = "dd/MM/yyyy";

  const milliseconds =
    new Date(timePeriod.end).getTime() - new Date(timePeriod.start).getTime();

  if (getDayOfYear(timePeriod.start) === getDayOfYear(timePeriod.end)) {
    return {
      formatted: millisecondsToString(milliseconds),
      date: `${format(timePeriod.start, onlyTime)} até ${format(
        timePeriod.end,
        onlyTime,
      )} de ${format(timePeriod.start, onlyDate)}`,
    };
  }

  return {
    formatted: millisecondsToString(milliseconds),
    date: `${format(timePeriod.start, fullFormat)} até ${format(
      timePeriod.end,
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
