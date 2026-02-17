export type BusinessCategory = {
  _key: string;
  _id: string;
  _rev: string;
  updated_time: number;
  updated_day: string;
  source: string;
  id: string;
  values: Array<{
    key: string;
    value: string;
  }>;
};
