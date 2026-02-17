import { BusinessCategoriesResponseItem } from '@models/swagger//BusinessCategoriesResponseItem';

export type BusinessCategoriesResponse = {
  status?: string;
  data?: BusinessCategoriesResponseItem[];
};
