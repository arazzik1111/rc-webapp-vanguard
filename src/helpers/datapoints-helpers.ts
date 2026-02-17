type DataPoint<X> = [X, number];

interface SeriesAndLabels {
  series: DataPoint<number>[];
  labels: string[];
}

export function reduceDatapointsBySkipping<X>(data: DataPoint<X>[], targetPoints: number): DataPoint<X>[] {
  // If the current data length is less than or equal to the target, return the original data
  if (data.length <= targetPoints) {
    return data;
  }

  const sampleRate = Math.ceil(data.length / targetPoints);
  const sampledData: DataPoint<X>[] = [];

  for (let i = 0; i < data.length; i += sampleRate) {
    sampledData.push(data[i]);
  }

  return sampledData;
}

export function reduceDatapointsBySumming(data: DataPoint<number>[]): SeriesAndLabels {
  const monthsMap = new Map<string, number>();
  const weeksMap = new Map<number, { sum: number; startDate: Date; endDate: Date; daysCount: number }>();

  data.forEach(([timestamp, value]) => {
    const date = new Date(timestamp);
    const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`;
    monthsMap.set(monthKey, (monthsMap.get(monthKey) || 0) + value);

    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1)); // adjust to start from Monday

    const oneDay = 1000 * 60 * 60 * 24;
    const endOfWeek = new Date(startOfWeek.getTime() + 6 * oneDay);

    const weekTimestamp = startOfWeek.getTime();
    if (!weeksMap.has(weekTimestamp)) {
      weeksMap.set(weekTimestamp, { sum: 0, startDate: startOfWeek, endDate: endOfWeek, daysCount: 0 });
    }

    const weekData = weeksMap.get(weekTimestamp)!;
    weekData.sum += value;
    weekData.daysCount += 1;

    // Handling the start and end of data for partial weeks
    const firstDataPointDate = new Date(data[0][0]);
    const lastDataPointDate = new Date(data[data.length - 1][0]);
    // Adjust the first week's start date or the last week's end date
    if (startOfWeek < firstDataPointDate) {
      weekData.startDate = firstDataPointDate;
    }
    if (endOfWeek > lastDataPointDate) {
      weekData.endDate = lastDataPointDate;
    }
  });

  let labels: string[] = [];
  let series: DataPoint<number>[] = [];

  if (monthsMap.size >= 12) {
    /**
     * MONTHLY
     */
    series = Array.from(monthsMap).map(([key, value]) => {
      const [year, month] = key.split('-');
      const timestamp = new Date(parseInt(year), parseInt(month) - 1, 1).getTime();
      return [timestamp, value] as DataPoint<number>;
    });
    labels = series.map(([timestamp]) => {
      const d = new Date(timestamp);
      return `${d.toLocaleString('default', { month: 'long' })}, ${d.getFullYear()}`;
    });
  } else if (monthsMap.size >= 3) {
    /**
     * WEEKLY
     */
    weeksMap.forEach(({ sum, startDate, endDate }) => {
      const timestamp = startDate.getTime();
      series.push([timestamp, sum]);
      let label = `${startDate.toLocaleDateString()}–${endDate.toLocaleDateString()}`;
      if (startDate.toLocaleDateString() === endDate.toLocaleDateString()) {
        label = startDate.toLocaleDateString();
      }
      labels.push(`${startDate.toLocaleDateString()}–${endDate.toLocaleDateString()}`);
    });
    // // Sorting series by date as map iteration does not guarantee order
    // series.sort((a, b) => a[0] - b[0]);
    // labels.sort((a, b) => new Date(a.split(" - ")[0]).getTime() - new Date(b.split(" - ")[0]).getTime());
  } else {
    /**
     * DAILY
     */
    series = data;
  }

  return { series, labels };
}
