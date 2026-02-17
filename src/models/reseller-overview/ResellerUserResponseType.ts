import { StatusesList } from '../StatusesList';

export type ResellerUserResponseType<T> = {
  data: T;
  message: 'OK' | string;
  status: StatusesList;
};
