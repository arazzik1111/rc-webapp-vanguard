import { StatusesList } from '../StatusesList';

export type BusinessProcessorBaseResponse<T> = {
  data: T;
  message: 'done' | string; // What other data types do we have ?
  status: StatusesList;
};
