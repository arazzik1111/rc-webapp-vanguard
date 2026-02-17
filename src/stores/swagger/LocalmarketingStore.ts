/*
 * WARNING THIS FILE IS AUTO-GENERATED DO NOT MODIFY YOUR CHANGES WILL BE OVERWRITTEN!
 */
import type { BusinessProfilePageSchema } from '@models/swagger/BusinessProfilePageSchema';
import type { CategoriesSchema } from '@models/swagger/CategoriesSchema';
import type { Ddd_Localmarketing_Domain_Dtos_Photos_Request } from '@models/swagger/Ddd_Localmarketing_Domain_Dtos_Photos_Request';
import type { Ddd_Localmarketing_Domain_Dtos_Profilepage_Openinghours_Request } from '@models/swagger/Ddd_Localmarketing_Domain_Dtos_Profilepage_Openinghours_Request';
import type { Ddd_Localmarketing_Domain_Dtos_Profilepage_Request } from '@models/swagger/Ddd_Localmarketing_Domain_Dtos_Profilepage_Request';
import type { GeoCodeSchema } from '@models/swagger/GeoCodeSchema';
import type { ProfilePageOpeningHoursSchema } from '@models/swagger/ProfilePageOpeningHoursSchema';
import type { ProfilePagePhotosSchema } from '@models/swagger/ProfilePagePhotosSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { firstValueFrom, Observable } from 'rxjs';

import { EndPoint } from '../../api-config';
import { HttpStore } from '../http.store';
import { AbortControllersManager } from '../store-helpers/abort-controllers-manager';

export type GetLocalmarketingCategoriesAutocompleteOpts = {
  FE_UNIQUE_ID?: string;

  searchString: string;
};
export type GetLocalmarketingGeocodeOpts = {
  FE_UNIQUE_ID?: string;

  address: string;

  language: string;

  region: string;

  siteId: number;
};
export type PutLocalmarketingOpeninghoursOpts = { FE_UNIQUE_ID?: string };
export type GetLocalmarketingPhotoOpts = {
  FE_UNIQUE_ID?: string;

  siteId: number;

  name: string;

  asBase64?: boolean;
};
export type PostLocalmarketingPhotosOpts = { FE_UNIQUE_ID?: string };
export type DeleteLocalmarketingPhotosOpts = { FE_UNIQUE_ID?: string };
export type GetLocalmarketingProfilepageOpts = {
  FE_UNIQUE_ID?: string;

  siteId: number;
};
export type PatchLocalmarketingProfilepageOpts = { FE_UNIQUE_ID?: string };

export class LocalmarketingStore extends HttpStore {
  /**
   * Manager of list of AbortControllers for the Request
   */
  static getLocalmarketingCategoriesAutocompleteAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Categories autocomplete search
   *
   */
  getLocalmarketingCategoriesAutocomplete(
    queryParams: GetLocalmarketingCategoriesAutocompleteOpts,
    signal?: AbortSignal,
  ): Observable<CategoriesSchema> {
    return this.get(new EndPoint('/rest_api/v1/localmarketing/categories/autocomplete'), queryParams, signal);
  }

  static getLocalmarketingCategoriesAutocompleteThunk = createAsyncThunk<
    CategoriesSchema,
    GetLocalmarketingCategoriesAutocompleteOpts,
    {
      rejectValue: any;
    }
  >(
    /**
     * Categories autocomplete search
     *
     */
    'getLocalmarketingCategoriesAutocomplete',
    async (queryParams: GetLocalmarketingCategoriesAutocompleteOpts, { rejectWithValue } = {} as any) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getLocalmarketingCategoriesAutocompleteAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          localmarketingStore.getLocalmarketingCategoriesAutocomplete(queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getLocalmarketingCategoriesAutocompleteAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getLocalmarketingCategoriesAutocompleteAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getLocalmarketingCategoriesAutocompleteUrlRegEx = new RegExp(
    '/rest_api/v1/localmarketing/categories/autocomplete',
  );
  static getLocalmarketingCategoriesAutocompleteUrlMockRequest =
    '/rest_api/v1/localmarketing/categories/autocomplete(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getLocalmarketingGeocodeAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get geocode data
   *
   */
  getLocalmarketingGeocode(queryParams: GetLocalmarketingGeocodeOpts, signal?: AbortSignal): Observable<GeoCodeSchema> {
    return this.get(new EndPoint('/rest_api/v1/localmarketing/geocode'), queryParams, signal);
  }

  static getLocalmarketingGeocodeThunk = createAsyncThunk<
    GeoCodeSchema,
    GetLocalmarketingGeocodeOpts,
    {
      rejectValue: any;
    }
  >(
    /**
     * Get geocode data
     *
     */
    'getLocalmarketingGeocode',
    async (queryParams: GetLocalmarketingGeocodeOpts, { rejectWithValue } = {} as any) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getLocalmarketingGeocodeAbortManager._push(requestId, controller);

        const result = await firstValueFrom(localmarketingStore.getLocalmarketingGeocode(queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getLocalmarketingGeocodeAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getLocalmarketingGeocodeAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getLocalmarketingGeocodeUrlRegEx = new RegExp('/rest_api/v1/localmarketing/geocode');
  static getLocalmarketingGeocodeUrlMockRequest = '/rest_api/v1/localmarketing/geocode(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static putLocalmarketingOpeninghoursAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Update Local Marketing Opening Hours Data
   *
   */
  putLocalmarketingOpeninghours(
    requestBody: Ddd_Localmarketing_Domain_Dtos_Profilepage_Openinghours_Request,
    queryParams?: PutLocalmarketingOpeninghoursOpts,
    signal?: AbortSignal,
  ): Observable<ProfilePageOpeningHoursSchema> {
    return this.put(new EndPoint('/rest_api/v1/localmarketing/openinghours'), requestBody, queryParams, signal);
  }

  static putLocalmarketingOpeninghoursThunk = createAsyncThunk<
    ProfilePageOpeningHoursSchema,
    {
      requestBody: Ddd_Localmarketing_Domain_Dtos_Profilepage_Openinghours_Request;
      queryParams?: PutLocalmarketingOpeninghoursOpts;
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Update Local Marketing Opening Hours Data
     *
     */
    'putLocalmarketingOpeninghours',
    async (
      {
        requestBody,
        queryParams,
      }: {
        requestBody: Ddd_Localmarketing_Domain_Dtos_Profilepage_Openinghours_Request;
        queryParams?: PutLocalmarketingOpeninghoursOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.putLocalmarketingOpeninghoursAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          localmarketingStore.putLocalmarketingOpeninghours(requestBody, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.putLocalmarketingOpeninghoursAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.putLocalmarketingOpeninghoursAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static putLocalmarketingOpeninghoursUrlRegEx = new RegExp('/rest_api/v1/localmarketing/openinghours');
  static putLocalmarketingOpeninghoursUrlMockRequest = '/rest_api/v1/localmarketing/openinghours';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getLocalmarketingPhotoAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * Returns the base64 encoded photo
   */

  /**
   * Get Photo
   * Returns the base64 encoded photo
   */
  getLocalmarketingPhoto(queryParams: GetLocalmarketingPhotoOpts, signal?: AbortSignal): Observable<any> {
    return this.get(new EndPoint('/rest_api/v1/localmarketing/photo'), queryParams, signal);
  }

  static getLocalmarketingPhotoThunk = createAsyncThunk<
    any,
    GetLocalmarketingPhotoOpts,
    {
      rejectValue: any;
    }
  >(
    /**
     * Get Photo
     * Returns the base64 encoded photo
     */
    'getLocalmarketingPhoto',
    async (queryParams: GetLocalmarketingPhotoOpts, { rejectWithValue } = {} as any) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getLocalmarketingPhotoAbortManager._push(requestId, controller);

        const result = await firstValueFrom(localmarketingStore.getLocalmarketingPhoto(queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getLocalmarketingPhotoAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getLocalmarketingPhotoAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getLocalmarketingPhotoUrlRegEx = new RegExp('/rest_api/v1/localmarketing/photo');
  static getLocalmarketingPhotoUrlMockRequest = '/rest_api/v1/localmarketing/photo(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postLocalmarketingPhotosAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Upload Photos
   *
   */
  postLocalmarketingPhotos(
    requestBody: Ddd_Localmarketing_Domain_Dtos_Photos_Request,
    queryParams?: PostLocalmarketingPhotosOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<ProfilePagePhotosSchema> {
    return this.post(new EndPoint('/rest_api/v1/localmarketing/photos'), requestBody, queryParams, signal, contentType);
  }

  static postLocalmarketingPhotosThunk = createAsyncThunk<
    ProfilePagePhotosSchema,
    {
      requestBody: Ddd_Localmarketing_Domain_Dtos_Photos_Request;
      queryParams?: PostLocalmarketingPhotosOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Upload Photos
     *
     */
    'postLocalmarketingPhotos',
    async (
      {
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        requestBody: Ddd_Localmarketing_Domain_Dtos_Photos_Request;
        queryParams?: PostLocalmarketingPhotosOpts;
        contentType?: 'application/json';
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.postLocalmarketingPhotosAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          localmarketingStore.postLocalmarketingPhotos(requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postLocalmarketingPhotosAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postLocalmarketingPhotosAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postLocalmarketingPhotosUrlRegEx = new RegExp('/rest_api/v1/localmarketing/photos');
  static postLocalmarketingPhotosUrlMockRequest = '/rest_api/v1/localmarketing/photos';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static deleteLocalmarketingPhotosAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Delete Photos
   *
   */
  deleteLocalmarketingPhotos(
    requestBody: Ddd_Localmarketing_Domain_Dtos_Photos_Request,
    queryParams?: DeleteLocalmarketingPhotosOpts,
    signal?: AbortSignal,
  ): Observable<ProfilePagePhotosSchema> {
    return this.delete(new EndPoint('/rest_api/v1/localmarketing/photos'), requestBody, queryParams, signal);
  }

  static deleteLocalmarketingPhotosThunk = createAsyncThunk<
    ProfilePagePhotosSchema,
    { requestBody: Ddd_Localmarketing_Domain_Dtos_Photos_Request; queryParams?: DeleteLocalmarketingPhotosOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Delete Photos
     *
     */
    'deleteLocalmarketingPhotos',
    async (
      {
        requestBody,
        queryParams,
      }: { requestBody: Ddd_Localmarketing_Domain_Dtos_Photos_Request; queryParams?: DeleteLocalmarketingPhotosOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.deleteLocalmarketingPhotosAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          localmarketingStore.deleteLocalmarketingPhotos(requestBody, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.deleteLocalmarketingPhotosAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.deleteLocalmarketingPhotosAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static deleteLocalmarketingPhotosUrlRegEx = new RegExp('/rest_api/v1/localmarketing/photos');
  static deleteLocalmarketingPhotosUrlMockRequest = '/rest_api/v1/localmarketing/photos';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getLocalmarketingProfilepageAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get localmarketing profile page data
   *
   */
  getLocalmarketingProfilepage(
    queryParams: GetLocalmarketingProfilepageOpts,
    signal?: AbortSignal,
  ): Observable<BusinessProfilePageSchema> {
    return this.get(new EndPoint('/rest_api/v1/localmarketing/profilepage'), queryParams, signal);
  }

  static getLocalmarketingProfilepageThunk = createAsyncThunk<
    BusinessProfilePageSchema,
    GetLocalmarketingProfilepageOpts,
    {
      rejectValue: any;
    }
  >(
    /**
     * Get localmarketing profile page data
     *
     */
    'getLocalmarketingProfilepage',
    async (queryParams: GetLocalmarketingProfilepageOpts, { rejectWithValue } = {} as any) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getLocalmarketingProfilepageAbortManager._push(requestId, controller);

        const result = await firstValueFrom(localmarketingStore.getLocalmarketingProfilepage(queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getLocalmarketingProfilepageAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getLocalmarketingProfilepageAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getLocalmarketingProfilepageUrlRegEx = new RegExp('/rest_api/v1/localmarketing/profilepage');
  static getLocalmarketingProfilepageUrlMockRequest = '/rest_api/v1/localmarketing/profilepage(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static patchLocalmarketingProfilepageAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Update Local Marketing Profile Page Data
   *
   */
  patchLocalmarketingProfilepage(
    requestBody: Ddd_Localmarketing_Domain_Dtos_Profilepage_Request,
    queryParams?: PatchLocalmarketingProfilepageOpts,
    signal?: AbortSignal,
  ): Observable<BusinessProfilePageSchema> {
    return this.patch(new EndPoint('/rest_api/v1/localmarketing/profilepage'), requestBody, queryParams, signal);
  }

  static patchLocalmarketingProfilepageThunk = createAsyncThunk<
    BusinessProfilePageSchema,
    {
      requestBody: Ddd_Localmarketing_Domain_Dtos_Profilepage_Request;
      queryParams?: PatchLocalmarketingProfilepageOpts;
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Update Local Marketing Profile Page Data
     *
     */
    'patchLocalmarketingProfilepage',
    async (
      {
        requestBody,
        queryParams,
      }: {
        requestBody: Ddd_Localmarketing_Domain_Dtos_Profilepage_Request;
        queryParams?: PatchLocalmarketingProfilepageOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.patchLocalmarketingProfilepageAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          localmarketingStore.patchLocalmarketingProfilepage(requestBody, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchLocalmarketingProfilepageAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchLocalmarketingProfilepageAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static patchLocalmarketingProfilepageUrlRegEx = new RegExp('/rest_api/v1/localmarketing/profilepage');
  static patchLocalmarketingProfilepageUrlMockRequest = '/rest_api/v1/localmarketing/profilepage';
}
export const localmarketingStore = new LocalmarketingStore();
