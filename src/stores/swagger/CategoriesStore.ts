/*
 * WARNING THIS FILE IS AUTO-GENERATED DO NOT MODIFY YOUR CHANGES WILL BE OVERWRITTEN!
 */
import type { BusinessCategoriesResponse } from '@models/swagger/BusinessCategoriesResponse';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { firstValueFrom, Observable } from 'rxjs';

import { EndPoint } from '../../api-config';
import { HttpStore } from '../http.store';
import { AbortControllersManager } from '../store-helpers/abort-controllers-manager';

export type GetCategoriesOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * How many categories to respond with
   */
  limit?: number;
  /**
   * The autocomplete text to search with
   */
  query: string;
  /**
   * Should select restricted categories
   */
  isRestrictedCategory?: boolean;
};

export class CategoriesStore extends HttpStore {
  /**
   * Manager of list of AbortControllers for the Request
   */
  static getCategoriesAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * Get list of available categories in webapp
   */

  /**
   * Categories list
   * Get list of available categories in webapp
   */
  getCategories(queryParams: GetCategoriesOpts, signal?: AbortSignal): Observable<BusinessCategoriesResponse> {
    return this.get(new EndPoint('/rest_api/v1/categories'), queryParams, signal);
  }

  static getCategoriesThunk = createAsyncThunk<
    BusinessCategoriesResponse,
    GetCategoriesOpts,
    {
      rejectValue: any | any | any | any | any;
    }
  >(
    /**
     * Categories list
     * Get list of available categories in webapp
     */
    'getCategories',
    async (queryParams: GetCategoriesOpts, { rejectWithValue } = {} as any) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getCategoriesAbortManager._push(requestId, controller);

        const result = await firstValueFrom(categoriesStore.getCategories(queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getCategoriesAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getCategoriesAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getCategoriesUrlRegEx = new RegExp('/rest_api/v1/categories');
  static getCategoriesUrlMockRequest = '/rest_api/v1/categories(.*)';
}
export const categoriesStore = new CategoriesStore();
