/*
 * WARNING THIS FILE IS AUTO-GENERATED DO NOT MODIFY YOUR CHANGES WILL BE OVERWRITTEN!
 */
import type { AccountGetResponseDto } from '@models/swagger/App/Presentation/Api/Client/Common/Accounts/Dtos/AccountGetResponseDto';
import type { AccountUpdateRequestDto } from '@models/swagger/App/Presentation/Api/Client/Common/Accounts/Dtos/AccountUpdateRequestDto';
import type { AppTranslationKeysForStringsPostRequestDto } from '@models/swagger/App/Presentation/Api/Client/Common/AppTranslations/Dtos/AppTranslationKeysForStringsPostRequestDto';
import type { AppTranslationKeysForStringsPostResponseDto } from '@models/swagger/App/Presentation/Api/Client/Common/AppTranslations/Dtos/AppTranslationKeysForStringsPostResponseDto';
import type { AuthLoginPostRequestDto } from '@models/swagger/App/Presentation/Api/Client/Common/Auth/Dtos/AuthLoginPostRequestDto';
import type { AuthPostApiAccountRequestDto } from '@models/swagger/App/Presentation/Api/Client/Common/Auth/Dtos/AuthPostApiAccountRequestDto';
import type { AuthPostForceAccountRequestDto } from '@models/swagger/App/Presentation/Api/Client/Common/Auth/Dtos/AuthPostForceAccountRequestDto';
import type { AuthPostResponseDto } from '@models/swagger/App/Presentation/Api/Client/Common/Auth/Dtos/AuthPostResponseDto';
import type { AuthRefreshPostRequestDto } from '@models/swagger/App/Presentation/Api/Client/Common/Auth/Dtos/AuthRefreshPostRequestDto';
import type { CacheScopeInvalidationPostRequestDto } from '@models/swagger/App/Presentation/Api/Client/Common/Cache/Dtos/CacheScopeInvalidationPostRequestDto';
import type { CacheScopeInvalidationPostResponseDto } from '@models/swagger/App/Presentation/Api/Client/Common/Cache/Dtos/CacheScopeInvalidationPostResponseDto';
import type { GeoDataAddressGeocodeGetResponseDto } from '@models/swagger/App/Presentation/Api/Client/Common/GeoData/Dtos/GeoDataAddressGeocodeGetResponseDto';
import type { GeoDataCountriesGetResponseDto } from '@models/swagger/App/Presentation/Api/Client/Common/GeoData/Dtos/GeoDataCountriesGetResponseDto';
import type { ProjectGetResponseDto } from '@models/swagger/App/Presentation/Api/Client/Common/Projects/Dtos/ProjectGetResponseDto';
import type { ShortUrlGetResponseDto } from '@models/swagger/App/Presentation/Api/Client/Common/ShortUrls/Dtos/ShortUrlGetResponseDto';
import type { ShortUrlsBatchCreateRequestDto } from '@models/swagger/App/Presentation/Api/Client/Common/ShortUrls/Dtos/ShortUrlsBatchCreateRequestDto';
import type { ShortUrlsBatchCreateResponseDto } from '@models/swagger/App/Presentation/Api/Client/Common/ShortUrls/Dtos/ShortUrlsBatchCreateResponseDto';
import type { ShortUrlUpdateRequestDto } from '@models/swagger/App/Presentation/Api/Client/Common/ShortUrls/Dtos/ShortUrlUpdateRequestDto';
import type { ShortUrlUpdateResponseDto } from '@models/swagger/App/Presentation/Api/Client/Common/ShortUrls/Dtos/ShortUrlUpdateResponseDto';
import type { BadRequestException } from '@models/swagger/DDD/Infrastructure/Exceptions/BadRequestException';
import type { InternalErrorException } from '@models/swagger/DDD/Infrastructure/Exceptions/InternalErrorException';
import type { NotFoundException } from '@models/swagger/DDD/Infrastructure/Exceptions/NotFoundException';
import type { UnauthorizedException } from '@models/swagger/DDD/Infrastructure/Exceptions/UnauthorizedException';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { firstValueFrom, Observable } from 'rxjs';

import { EndPoint } from '../../../api-config';
import { HttpStore } from '../../http.store';
import { AbortControllersManager } from '../../store-helpers/abort-controllers-manager';

export type GetClientCommonAccountsOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
  /**
   * Number of results to be skipped / offsetted
   */
  skip?: number;
  /**
   * The number of results to be returned
   */
  top?: number;
  /**
   * Definition of orderBy follwing the syntax:
   * <details><summary>Definitions and examples:</summary>
   *
   * `<property> <direction>?, <property> <direction>? ... ]?`
   *
   * **Examples:**
   * - `priority asc, creationDate desc, price?`
   * Direction one of: [`asc`, `desc`]
   * </details>
   *
   * <details><summary>Allowed orderBy properties:</summary>
   *
   * </details>
   */
  orderBy?: string;
  /**
   * Definition of filters follwing the syntax:
   * <details><summary>Definitions and examples:</summary>
   *
   * `<property> <operator> <value> [ <and|or> <property> <operator> <value> ... ]`
   * Value can be either `numeric`, (e.g. 10 or 10.4231) or `string` (e.g. 'active') or a JSON `array` format (e.g. ['ACTIVE','DELETED']) or `null` (null or 'null')
   *
   * **Examples:**
   * - `price lt 10`
   * - `price ge 10.8 and price le 20 or categoryId eq 12`
   * - `city eq 'Berlin'`
   * - `city in ['Berlin','Paris']`
   * Strings have to be put in quotes `'` If values contain single quotes, they need to be escaped. E.g. `location eq 'llocnou d\'en fenollet'`
   * Supported operators: `lt` lower then, `gt` greater then, `le` lower equal, `ge` greater equal, `eq` equal, `ne` not equal, `in` in and `bw` between.
   * `null`-value supports only `eq` and `ne`, `array`-value supports only `in` and `bw` operators.
   * </details>
   *
   * <details><summary>Allowed filter properties:</summary>
   *
   * </details>
   */
  filters?: string;
  /**
   * Definition of expanding options (properties to be loaded alongside with entity) follwing the syntax:
   * <details><summary>Definitions and examples:</summary>
   *
   * `<property> (<expandDefinitions>)?, <property> (<expandDefinitions)? ... ]`
   * `<expandDefinitions>` is defined as:
   * `<expandDefinition>,<expandDefinition>, ...`
   * `<expandDefinition>` is defined as:
   * `<filterDefinitions>` or `<orderByDefinitions>` or `<topDefinition>` or `<skipDefinition>` or `<expandDefinition>`
   *
   * *Examples:*
   * - `openingHours, competitors`
   * - `openingHours, competitors(filters=type eq 'GOOGLE';orderBy=KWS desc;top=10;skip=20)`
   * - `projects(expand=business(expand=locations(expand=website)))`
   * </details>
   *
   * <details><summary>Allowed expand properties:</summary>
   *
   *
   * - `reseller`
   * - `apiAccount`
   * - `projects`
   *   - Allowed filter properties are:
   *   - Allowed orderBy properties are:
   * - `roles`
   * - `settings`
   * - `locale`
   * - `features`
   * - `subscriptions`
   *   - Allowed filter properties are:
   *     - `externalId`
   *   - Allowed orderBy properties are:
   *     - `externalId`
   * - `setupSequenceCompletions`
   *   - Allowed filter properties are:
   *   - Allowed orderBy properties are:
   * - `aiCosts`
   * - `totalNumberOfActiveProjects`</details>
   */
  expand?: string;
};
export type GetClientCommonAccountsByAccountIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
  /**
   * Number of results to be skipped / offsetted
   */
  skip?: number;
  /**
   * The number of results to be returned
   */
  top?: number;
  /**
   * Definition of orderBy follwing the syntax:
   * <details><summary>Definitions and examples:</summary>
   *
   * `<property> <direction>?, <property> <direction>? ... ]?`
   *
   * **Examples:**
   * - `priority asc, creationDate desc, price?`
   * Direction one of: [`asc`, `desc`]
   * </details>
   *
   * <details><summary>Allowed orderBy properties:</summary>
   *
   * </details>
   */
  orderBy?: string;
  /**
   * Definition of filters follwing the syntax:
   * <details><summary>Definitions and examples:</summary>
   *
   * `<property> <operator> <value> [ <and|or> <property> <operator> <value> ... ]`
   * Value can be either `numeric`, (e.g. 10 or 10.4231) or `string` (e.g. 'active') or a JSON `array` format (e.g. ['ACTIVE','DELETED']) or `null` (null or 'null')
   *
   * **Examples:**
   * - `price lt 10`
   * - `price ge 10.8 and price le 20 or categoryId eq 12`
   * - `city eq 'Berlin'`
   * - `city in ['Berlin','Paris']`
   * Strings have to be put in quotes `'` If values contain single quotes, they need to be escaped. E.g. `location eq 'llocnou d\'en fenollet'`
   * Supported operators: `lt` lower then, `gt` greater then, `le` lower equal, `ge` greater equal, `eq` equal, `ne` not equal, `in` in and `bw` between.
   * `null`-value supports only `eq` and `ne`, `array`-value supports only `in` and `bw` operators.
   * </details>
   *
   * <details><summary>Allowed filter properties:</summary>
   *
   * </details>
   */
  filters?: string;
  /**
   * Definition of expanding options (properties to be loaded alongside with entity) follwing the syntax:
   * <details><summary>Definitions and examples:</summary>
   *
   * `<property> (<expandDefinitions>)?, <property> (<expandDefinitions)? ... ]`
   * `<expandDefinitions>` is defined as:
   * `<expandDefinition>,<expandDefinition>, ...`
   * `<expandDefinition>` is defined as:
   * `<filterDefinitions>` or `<orderByDefinitions>` or `<topDefinition>` or `<skipDefinition>` or `<expandDefinition>`
   *
   * *Examples:*
   * - `openingHours, competitors`
   * - `openingHours, competitors(filters=type eq 'GOOGLE';orderBy=KWS desc;top=10;skip=20)`
   * - `projects(expand=business(expand=locations(expand=website)))`
   * </details>
   *
   * <details><summary>Allowed expand properties:</summary>
   *
   *
   * - `reseller`
   * - `apiAccount`
   * - `projects`
   *   - Allowed filter properties are:
   *   - Allowed orderBy properties are:
   * - `roles`
   * - `settings`
   * - `locale`
   * - `features`
   * - `subscriptions`
   *   - Allowed filter properties are:
   *     - `externalId`
   *   - Allowed orderBy properties are:
   *     - `externalId`
   * - `setupSequenceCompletions`
   *   - Allowed filter properties are:
   *   - Allowed orderBy properties are:
   * - `aiCosts`
   * - `totalNumberOfActiveProjects`</details>
   */
  expand?: string;
};
export type PatchClientCommonAccountsByAccountIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PostClientCommonAppTranslationsGetAppTranslationsForKeysByLanguageCodeOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * The preferred countryShortCode Style
   */
  preferredCountryShortCode?: string;
  /**
   * The preferred writing Style
   * Allowed Values:
   * -   `FORMAL`
   * -   `INFORMAL`
   *
   */
  preferredWritingStyle?: string;
  /**
   * The preferred writing Style
   * Allowed Values:
   * -   `AUTO`
   * -   `MANUAL`
   *
   */
  preferredTranslationMode?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PostClientCommonAuthLoginOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PostClientCommonAuthRefreshOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PostClientCommonAuthApiAccountOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PostClientCommonAuthForceAccountOpts = {
  FE_UNIQUE_ID?: string;

  isShortLived?: boolean;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PostClientCommonCacheCacheScopeInvalidationOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientCommonGeodataCountriesOpts = { FE_UNIQUE_ID?: string };
export type GetClientCommonGeodataAddressGeocodeOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * The address string to geocode
   * Lincoln Rd, Brooklyn, NY 11225
   */
  inputAddress: string;
  /**
   * 2-letter code language, relevant to localize location names
   */
  languageCode: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientCommonGeodataGeoPointReverseGeocodeOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * Geographical latitude
   */
  lat: number;
  /**
   * Geographical longitude
   */
  lng: number;
  /**
   * 2-letter code language, relevant to localize location names
   */
  languageCode: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientCommonProjectsByProjectIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
  /**
   * Number of results to be skipped / offsetted
   */
  skip?: number;
  /**
   * The number of results to be returned
   */
  top?: number;
  /**
   * Definition of orderBy follwing the syntax:
   * <details><summary>Definitions and examples:</summary>
   *
   * `<property> <direction>?, <property> <direction>? ... ]?`
   *
   * **Examples:**
   * - `priority asc, creationDate desc, price?`
   * Direction one of: [`asc`, `desc`]
   * </details>
   *
   * <details><summary>Allowed orderBy properties:</summary>
   *
   * </details>
   */
  orderBy?: string;
  /**
   * Definition of filters follwing the syntax:
   * <details><summary>Definitions and examples:</summary>
   *
   * `<property> <operator> <value> [ <and|or> <property> <operator> <value> ... ]`
   * Value can be either `numeric`, (e.g. 10 or 10.4231) or `string` (e.g. 'active') or a JSON `array` format (e.g. ['ACTIVE','DELETED']) or `null` (null or 'null')
   *
   * **Examples:**
   * - `price lt 10`
   * - `price ge 10.8 and price le 20 or categoryId eq 12`
   * - `city eq 'Berlin'`
   * - `city in ['Berlin','Paris']`
   * Strings have to be put in quotes `'` If values contain single quotes, they need to be escaped. E.g. `location eq 'llocnou d\'en fenollet'`
   * Supported operators: `lt` lower then, `gt` greater then, `le` lower equal, `ge` greater equal, `eq` equal, `ne` not equal, `in` in and `bw` between.
   * `null`-value supports only `eq` and `ne`, `array`-value supports only `in` and `bw` operators.
   * </details>
   *
   * <details><summary>Allowed filter properties:</summary>
   *
   * </details>
   */
  filters?: string;
  /**
   * Definition of expanding options (properties to be loaded alongside with entity) follwing the syntax:
   * <details><summary>Definitions and examples:</summary>
   *
   * `<property> (<expandDefinitions>)?, <property> (<expandDefinitions)? ... ]`
   * `<expandDefinitions>` is defined as:
   * `<expandDefinition>,<expandDefinition>, ...`
   * `<expandDefinition>` is defined as:
   * `<filterDefinitions>` or `<orderByDefinitions>` or `<topDefinition>` or `<skipDefinition>` or `<expandDefinition>`
   *
   * *Examples:*
   * - `openingHours, competitors`
   * - `openingHours, competitors(filters=type eq 'GOOGLE';orderBy=KWS desc;top=10;skip=20)`
   * - `projects(expand=business(expand=locations(expand=website)))`
   * </details>
   *
   * <details><summary>Allowed expand properties:</summary>
   *
   *
   * - `business`
   *   - Allowed filter properties are:
   *   - Allowed orderBy properties are:
   * - `adAccount`
   *   - Allowed filter properties are:
   *   - Allowed orderBy properties are:
   * - `features`
   * - `subscriptions`
   *   - Allowed filter properties are:
   *     - `externalId`
   *   - Allowed orderBy properties are:
   *     - `externalId`
   * - `productRatePlans`
   * - `settings`
   *   - Allowed filter properties are:
   *   - Allowed orderBy properties are:
   * - `featureFlags`</details>
   */
  expand?: string;
};
export type GetClientCommonShortUrlsByShortUrlIdByLocationIdOpts = {
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
  /**
   * Number of results to be skipped / offsetted
   */
  skip?: number;
  /**
   * The number of results to be returned
   */
  top?: number;
  /**
   * Definition of orderBy follwing the syntax:
   * <details><summary>Definitions and examples:</summary>
   *
   * `<property> <direction>?, <property> <direction>? ... ]?`
   *
   * **Examples:**
   * - `priority asc, creationDate desc, price?`
   * Direction one of: [`asc`, `desc`]
   * </details>
   *
   * <details><summary>Allowed orderBy properties:</summary>
   *
   *
   * - `shortUrlIdentifier`
   * - `targetUrl`
   * - `externalId`
   * - `description`
   * - `parentEntityId`
   * - `locationId`
   * - `parentEntityType`
   * - `shortenedUrl`
   * - `id`
   * - `created`
   * - `updated`</details>
   */
  orderBy?: string;
  /**
   * Definition of filters follwing the syntax:
   * <details><summary>Definitions and examples:</summary>
   *
   * `<property> <operator> <value> [ <and|or> <property> <operator> <value> ... ]`
   * Value can be either `numeric`, (e.g. 10 or 10.4231) or `string` (e.g. 'active') or a JSON `array` format (e.g. ['ACTIVE','DELETED']) or `null` (null or 'null')
   *
   * **Examples:**
   * - `price lt 10`
   * - `price ge 10.8 and price le 20 or categoryId eq 12`
   * - `city eq 'Berlin'`
   * - `city in ['Berlin','Paris']`
   * Strings have to be put in quotes `'` If values contain single quotes, they need to be escaped. E.g. `location eq 'llocnou d\'en fenollet'`
   * Supported operators: `lt` lower then, `gt` greater then, `le` lower equal, `ge` greater equal, `eq` equal, `ne` not equal, `in` in and `bw` between.
   * `null`-value supports only `eq` and `ne`, `array`-value supports only `in` and `bw` operators.
   * </details>
   *
   * <details><summary>Allowed filter properties:</summary>
   *
   *
   * - `shortUrlIdentifier`
   * - `targetUrl`
   * - `externalId`
   * - `description`
   * - `parentEntityId`
   * - `locationId`
   * - `parentEntityType`
   * - `shortenedUrl`
   * - `id`
   * - `created`
   * - `updated`</details>
   */
  filters?: string;
};
export type PatchClientCommonShortUrlsByLocationIdOpts = {
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PostClientCommonShortUrlsByLocationIdOpts = {
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PostClientCommonShortUrlsBatchByLocationIdOpts = {
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};

export class CommonStore extends HttpStore {
  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientCommonAccountsAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * Returns account details of authenticated account
   */

  /**
   * Current Account Details
   * Returns account details of authenticated account
   */
  getClientCommonAccounts(
    queryParams: GetClientCommonAccountsOpts,
    signal?: AbortSignal,
  ): Observable<AccountGetResponseDto> {
    return this.get(new EndPoint('/app/api/client/common/accounts'), queryParams, signal);
  }

  static getClientCommonAccountsThunk = createAsyncThunk<
    AccountGetResponseDto,
    GetClientCommonAccountsOpts,
    {
      rejectValue: BadRequestException | NotFoundException;
    }
  >(
    /**
     * Current Account Details
     * Returns account details of authenticated account
     */
    'getClientCommonAccounts',
    async (queryParams: GetClientCommonAccountsOpts, { rejectWithValue } = {} as any) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientCommonAccountsAbortManager._push(requestId, controller);

        const result = await firstValueFrom(commonStore.getClientCommonAccounts(queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientCommonAccountsAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientCommonAccountsAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientCommonAccountsUrlRegEx = new RegExp('/app/api/client/common/accounts');
  static getClientCommonAccountsUrlMockRequest = '/app/api/client/common/accounts(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientCommonAccountsByAccountIdAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * Return Account details
   */

  /**
   * Account Details
   * Return Account details
   */
  getClientCommonAccountsByAccountId(
    accountId: string,
    queryParams: GetClientCommonAccountsByAccountIdOpts,
    signal?: AbortSignal,
  ): Observable<AccountGetResponseDto> {
    return this.get(new EndPoint(`/app/api/client/common/accounts/${accountId}`), queryParams, signal);
  }

  static getClientCommonAccountsByAccountIdThunk = createAsyncThunk<
    AccountGetResponseDto,
    { accountId: string; queryParams: GetClientCommonAccountsByAccountIdOpts },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Account Details
     * Return Account details
     */
    'getClientCommonAccountsByAccountId',
    async (
      { accountId, queryParams }: { accountId: string; queryParams: GetClientCommonAccountsByAccountIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientCommonAccountsByAccountIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          commonStore.getClientCommonAccountsByAccountId(accountId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientCommonAccountsByAccountIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientCommonAccountsByAccountIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientCommonAccountsByAccountIdUrlRegEx = new RegExp('/app/api/client/common/accounts/{accountId}');
  static getClientCommonAccountsByAccountIdUrlMockRequest = '/app/api/client/common/accounts/{accountId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static patchClientCommonAccountsByAccountIdAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * Updates Account
   */

  /**
   * Account Update
   * Updates Account
   */
  patchClientCommonAccountsByAccountId(
    accountId: number,
    requestBody: AccountUpdateRequestDto,
    queryParams: PatchClientCommonAccountsByAccountIdOpts,
    signal?: AbortSignal,
  ): Observable<AccountGetResponseDto> {
    return this.patch(new EndPoint(`/app/api/client/common/accounts/${accountId}`), requestBody, queryParams, signal);
  }

  static patchClientCommonAccountsByAccountIdThunk = createAsyncThunk<
    AccountGetResponseDto,
    { accountId: number; requestBody: AccountUpdateRequestDto; queryParams: PatchClientCommonAccountsByAccountIdOpts },
    {
      rejectValue: BadRequestException | InternalErrorException;
    }
  >(
    /**
     * Account Update
     * Updates Account
     */
    'patchClientCommonAccountsByAccountId',
    async (
      {
        accountId,
        requestBody,
        queryParams,
      }: {
        accountId: number;
        requestBody: AccountUpdateRequestDto;
        queryParams: PatchClientCommonAccountsByAccountIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.patchClientCommonAccountsByAccountIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          commonStore.patchClientCommonAccountsByAccountId(accountId, requestBody, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchClientCommonAccountsByAccountIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchClientCommonAccountsByAccountIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static patchClientCommonAccountsByAccountIdUrlRegEx = new RegExp('/app/api/client/common/accounts/{accountId}');
  static patchClientCommonAccountsByAccountIdUrlMockRequest = '/app/api/client/common/accounts/{accountId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postClientCommonAppTranslationsGetAppTranslationsForKeysByLanguageCodeAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Returns AppTranslationKeys with values, based on given given string array of AppTranslationKeys, and preferences
   * It is prioritizing if set:
   * - preferredWritingStyle
   * - preferredCountryShortCode
   * - preferredTranslationMode
   * But if e.g. no translations are present with the preferredWriting style, than it still will return any writing style
   */

  /**
   * AppTranslationKeys get
   * Returns AppTranslationKeys with values, based on given given string array of AppTranslationKeys, and preferences
   * It is prioritizing if set:
   * - preferredWritingStyle
   * - preferredCountryShortCode
   * - preferredTranslationMode
   * But if e.g. no translations are present with the preferredWriting style, than it still will return any writing style
   */
  postClientCommonAppTranslationsGetAppTranslationsForKeysByLanguageCode(
    languageCode: string,
    requestBody: AppTranslationKeysForStringsPostRequestDto,
    queryParams: PostClientCommonAppTranslationsGetAppTranslationsForKeysByLanguageCodeOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<AppTranslationKeysForStringsPostResponseDto> {
    return this.post(
      new EndPoint(`/app/api/client/common/appTranslations/getAppTranslationsForKeys/${languageCode}`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postClientCommonAppTranslationsGetAppTranslationsForKeysByLanguageCodeThunk = createAsyncThunk<
    AppTranslationKeysForStringsPostResponseDto,
    {
      languageCode: string;
      requestBody: AppTranslationKeysForStringsPostRequestDto;
      queryParams: PostClientCommonAppTranslationsGetAppTranslationsForKeysByLanguageCodeOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: BadRequestException | InternalErrorException;
    }
  >(
    /**
     * AppTranslationKeys get
     * Returns AppTranslationKeys with values, based on given given string array of AppTranslationKeys, and preferences
     * It is prioritizing if set:
     * - preferredWritingStyle
     * - preferredCountryShortCode
     * - preferredTranslationMode
     * But if e.g. no translations are present with the preferredWriting style, than it still will return any writing style
     */
    'postClientCommonAppTranslationsGetAppTranslationsForKeysByLanguageCode',
    async (
      {
        languageCode,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        languageCode: string;
        requestBody: AppTranslationKeysForStringsPostRequestDto;
        queryParams: PostClientCommonAppTranslationsGetAppTranslationsForKeysByLanguageCodeOpts;
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
        this.postClientCommonAppTranslationsGetAppTranslationsForKeysByLanguageCodeAbortManager._push(
          requestId,
          controller,
        );

        const result = await firstValueFrom(
          commonStore.postClientCommonAppTranslationsGetAppTranslationsForKeysByLanguageCode(
            languageCode,
            requestBody,
            queryParams,
            signal,
            contentType,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientCommonAppTranslationsGetAppTranslationsForKeysByLanguageCodeAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientCommonAppTranslationsGetAppTranslationsForKeysByLanguageCodeAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postClientCommonAppTranslationsGetAppTranslationsForKeysByLanguageCodeUrlRegEx = new RegExp(
    '/app/api/client/common/appTranslations/getAppTranslationsForKeys/{languageCode}',
  );
  static postClientCommonAppTranslationsGetAppTranslationsForKeysByLanguageCodeUrlMockRequest =
    '/app/api/client/common/appTranslations/getAppTranslationsForKeys/{languageCode}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postClientCommonAuthLoginAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * Authenticates the account and returns long-lived refresh token and short-lived access token
   */

  /**
   * Account login
   * Authenticates the account and returns long-lived refresh token and short-lived access token
   */
  postClientCommonAuthLogin(
    requestBody: AuthLoginPostRequestDto,
    queryParams: PostClientCommonAuthLoginOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<AuthPostResponseDto> {
    return this.post(new EndPoint('/app/api/client/common/auth/login'), requestBody, queryParams, signal, contentType);
  }

  static postClientCommonAuthLoginThunk = createAsyncThunk<
    AuthPostResponseDto,
    {
      requestBody: AuthLoginPostRequestDto;
      queryParams: PostClientCommonAuthLoginOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: BadRequestException | UnauthorizedException | InternalErrorException;
    }
  >(
    /**
     * Account login
     * Authenticates the account and returns long-lived refresh token and short-lived access token
     */
    'postClientCommonAuthLogin',
    async (
      {
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        requestBody: AuthLoginPostRequestDto;
        queryParams: PostClientCommonAuthLoginOpts;
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
        this.postClientCommonAuthLoginAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          commonStore.postClientCommonAuthLogin(requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientCommonAuthLoginAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientCommonAuthLoginAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postClientCommonAuthLoginUrlRegEx = new RegExp('/app/api/client/common/auth/login');
  static postClientCommonAuthLoginUrlMockRequest = '/app/api/client/common/auth/login(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postClientCommonAuthRefreshAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * Returns new refresh and access token with fresh lifetime based on current refresh token
   */

  /**
   * Account extend refresh token
   * Returns new refresh and access token with fresh lifetime based on current refresh token
   */
  postClientCommonAuthRefresh(
    requestBody: AuthRefreshPostRequestDto,
    queryParams: PostClientCommonAuthRefreshOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<AuthPostResponseDto> {
    return this.post(
      new EndPoint('/app/api/client/common/auth/refresh'),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postClientCommonAuthRefreshThunk = createAsyncThunk<
    AuthPostResponseDto,
    {
      requestBody: AuthRefreshPostRequestDto;
      queryParams: PostClientCommonAuthRefreshOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: BadRequestException | UnauthorizedException | InternalErrorException;
    }
  >(
    /**
     * Account extend refresh token
     * Returns new refresh and access token with fresh lifetime based on current refresh token
     */
    'postClientCommonAuthRefresh',
    async (
      {
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        requestBody: AuthRefreshPostRequestDto;
        queryParams: PostClientCommonAuthRefreshOpts;
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
        this.postClientCommonAuthRefreshAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          commonStore.postClientCommonAuthRefresh(requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientCommonAuthRefreshAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientCommonAuthRefreshAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postClientCommonAuthRefreshUrlRegEx = new RegExp('/app/api/client/common/auth/refresh');
  static postClientCommonAuthRefreshUrlMockRequest = '/app/api/client/common/auth/refresh(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postClientCommonAuthApiAccountAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * Authentication of an ApiAccount, returns a bearer authentication token
   */

  /**
   * ApiAccount Authentication
   * Authentication of an ApiAccount, returns a bearer authentication token
   */
  postClientCommonAuthApiAccount(
    requestBody: AuthPostApiAccountRequestDto,
    queryParams: PostClientCommonAuthApiAccountOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<AuthPostResponseDto> {
    return this.post(
      new EndPoint('/app/api/client/common/auth/apiAccount'),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postClientCommonAuthApiAccountThunk = createAsyncThunk<
    AuthPostResponseDto,
    {
      requestBody: AuthPostApiAccountRequestDto;
      queryParams: PostClientCommonAuthApiAccountOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: BadRequestException | UnauthorizedException | InternalErrorException;
    }
  >(
    /**
     * ApiAccount Authentication
     * Authentication of an ApiAccount, returns a bearer authentication token
     */
    'postClientCommonAuthApiAccount',
    async (
      {
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        requestBody: AuthPostApiAccountRequestDto;
        queryParams: PostClientCommonAuthApiAccountOpts;
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
        this.postClientCommonAuthApiAccountAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          commonStore.postClientCommonAuthApiAccount(requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientCommonAuthApiAccountAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientCommonAuthApiAccountAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postClientCommonAuthApiAccountUrlRegEx = new RegExp('/app/api/client/common/auth/apiAccount');
  static postClientCommonAuthApiAccountUrlMockRequest = '/app/api/client/common/auth/apiAccount(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postClientCommonAuthForceAccountAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * Forced authentication of a regular Account with accountId and hashed password, returns a bearer authentication token
   */

  /**
   * Force Account Authentication
   * Forced authentication of a regular Account with accountId and hashed password, returns a bearer authentication token
   */
  postClientCommonAuthForceAccount(
    requestBody: AuthPostForceAccountRequestDto,
    queryParams: PostClientCommonAuthForceAccountOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<AuthPostResponseDto> {
    return this.post(
      new EndPoint('/app/api/client/common/auth/forceAccount'),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postClientCommonAuthForceAccountThunk = createAsyncThunk<
    AuthPostResponseDto,
    {
      requestBody: AuthPostForceAccountRequestDto;
      queryParams: PostClientCommonAuthForceAccountOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: BadRequestException | UnauthorizedException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Force Account Authentication
     * Forced authentication of a regular Account with accountId and hashed password, returns a bearer authentication token
     */
    'postClientCommonAuthForceAccount',
    async (
      {
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        requestBody: AuthPostForceAccountRequestDto;
        queryParams: PostClientCommonAuthForceAccountOpts;
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
        this.postClientCommonAuthForceAccountAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          commonStore.postClientCommonAuthForceAccount(requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientCommonAuthForceAccountAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientCommonAuthForceAccountAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postClientCommonAuthForceAccountUrlRegEx = new RegExp('/app/api/client/common/auth/forceAccount');
  static postClientCommonAuthForceAccountUrlMockRequest = '/app/api/client/common/auth/forceAccount(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postClientCommonCacheCacheScopeInvalidationAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Returns active countries
   */

  /**
   * CacheScopeInvalidation create
   * Returns active countries
   */
  postClientCommonCacheCacheScopeInvalidation(
    requestBody: CacheScopeInvalidationPostRequestDto,
    queryParams: PostClientCommonCacheCacheScopeInvalidationOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<CacheScopeInvalidationPostResponseDto> {
    return this.post(
      new EndPoint('/app/api/client/common/cache/cacheScopeInvalidation'),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postClientCommonCacheCacheScopeInvalidationThunk = createAsyncThunk<
    CacheScopeInvalidationPostResponseDto,
    {
      requestBody: CacheScopeInvalidationPostRequestDto;
      queryParams: PostClientCommonCacheCacheScopeInvalidationOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: BadRequestException;
    }
  >(
    /**
     * CacheScopeInvalidation create
     * Returns active countries
     */
    'postClientCommonCacheCacheScopeInvalidation',
    async (
      {
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        requestBody: CacheScopeInvalidationPostRequestDto;
        queryParams: PostClientCommonCacheCacheScopeInvalidationOpts;
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
        this.postClientCommonCacheCacheScopeInvalidationAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          commonStore.postClientCommonCacheCacheScopeInvalidation(requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientCommonCacheCacheScopeInvalidationAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientCommonCacheCacheScopeInvalidationAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postClientCommonCacheCacheScopeInvalidationUrlRegEx = new RegExp(
    '/app/api/client/common/cache/cacheScopeInvalidation',
  );
  static postClientCommonCacheCacheScopeInvalidationUrlMockRequest =
    '/app/api/client/common/cache/cacheScopeInvalidation(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientCommonGeodataCountriesAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * Returns active countries
   */

  /**
   * Countries list
   * Returns active countries
   */
  getClientCommonGeodataCountries(
    queryParams?: GetClientCommonGeodataCountriesOpts,
    signal?: AbortSignal,
  ): Observable<GeoDataCountriesGetResponseDto> {
    return this.get(new EndPoint('/app/api/client/common/geodata/countries'), queryParams, signal);
  }

  static getClientCommonGeodataCountriesThunk = createAsyncThunk<
    GeoDataCountriesGetResponseDto,
    GetClientCommonGeodataCountriesOpts,
    {
      rejectValue: any;
    }
  >(
    /**
     * Countries list
     * Returns active countries
     */
    'getClientCommonGeodataCountries',
    async (queryParams?: GetClientCommonGeodataCountriesOpts, { rejectWithValue } = {} as any) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientCommonGeodataCountriesAbortManager._push(requestId, controller);

        const result = await firstValueFrom(commonStore.getClientCommonGeodataCountries(queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientCommonGeodataCountriesAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientCommonGeodataCountriesAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientCommonGeodataCountriesUrlRegEx = new RegExp('/app/api/client/common/geodata/countries');
  static getClientCommonGeodataCountriesUrlMockRequest = '/app/api/client/common/geodata/countries(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientCommonGeodataAddressGeocodeAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * Geocodes address based on addressInput search string.
   * For better success, use comma as delimiter between address components.
   */

  /**
   * Address geocode
   * Geocodes address based on addressInput search string.
   * For better success, use comma as delimiter between address components.
   */
  getClientCommonGeodataAddressGeocode(
    queryParams: GetClientCommonGeodataAddressGeocodeOpts,
    signal?: AbortSignal,
  ): Observable<GeoDataAddressGeocodeGetResponseDto> {
    return this.get(new EndPoint('/app/api/client/common/geodata/address/geocode'), queryParams, signal);
  }

  static getClientCommonGeodataAddressGeocodeThunk = createAsyncThunk<
    GeoDataAddressGeocodeGetResponseDto,
    GetClientCommonGeodataAddressGeocodeOpts,
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Address geocode
     * Geocodes address based on addressInput search string.
     * For better success, use comma as delimiter between address components.
     */
    'getClientCommonGeodataAddressGeocode',
    async (queryParams: GetClientCommonGeodataAddressGeocodeOpts, { rejectWithValue } = {} as any) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientCommonGeodataAddressGeocodeAbortManager._push(requestId, controller);

        const result = await firstValueFrom(commonStore.getClientCommonGeodataAddressGeocode(queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientCommonGeodataAddressGeocodeAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientCommonGeodataAddressGeocodeAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientCommonGeodataAddressGeocodeUrlRegEx = new RegExp('/app/api/client/common/geodata/address/geocode');
  static getClientCommonGeodataAddressGeocodeUrlMockRequest = '/app/api/client/common/geodata/address/geocode(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientCommonGeodataGeoPointReverseGeocodeAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Reverse geocodes Coordinates and returns address
   */

  /**
   * GeoPoint reverse geocode
   * Reverse geocodes Coordinates and returns address
   */
  getClientCommonGeodataGeoPointReverseGeocode(
    queryParams: GetClientCommonGeodataGeoPointReverseGeocodeOpts,
    signal?: AbortSignal,
  ): Observable<GeoDataAddressGeocodeGetResponseDto> {
    return this.get(new EndPoint('/app/api/client/common/geodata/geoPoint/reverseGeocode'), queryParams, signal);
  }

  static getClientCommonGeodataGeoPointReverseGeocodeThunk = createAsyncThunk<
    GeoDataAddressGeocodeGetResponseDto,
    GetClientCommonGeodataGeoPointReverseGeocodeOpts,
    {
      rejectValue: BadRequestException | NotFoundException;
    }
  >(
    /**
     * GeoPoint reverse geocode
     * Reverse geocodes Coordinates and returns address
     */
    'getClientCommonGeodataGeoPointReverseGeocode',
    async (queryParams: GetClientCommonGeodataGeoPointReverseGeocodeOpts, { rejectWithValue } = {} as any) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientCommonGeodataGeoPointReverseGeocodeAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          commonStore.getClientCommonGeodataGeoPointReverseGeocode(queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientCommonGeodataGeoPointReverseGeocodeAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientCommonGeodataGeoPointReverseGeocodeAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientCommonGeodataGeoPointReverseGeocodeUrlRegEx = new RegExp(
    '/app/api/client/common/geodata/geoPoint/reverseGeocode',
  );
  static getClientCommonGeodataGeoPointReverseGeocodeUrlMockRequest =
    '/app/api/client/common/geodata/geoPoint/reverseGeocode(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientCommonProjectsByProjectIdAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * Returns project details
   */

  /**
   * Project Details
   * Returns project details
   */
  getClientCommonProjectsByProjectId(
    projectId: number,
    queryParams: GetClientCommonProjectsByProjectIdOpts,
    signal?: AbortSignal,
  ): Observable<ProjectGetResponseDto> {
    return this.get(new EndPoint(`/app/api/client/common/projects/${projectId}`), queryParams, signal);
  }

  static getClientCommonProjectsByProjectIdThunk = createAsyncThunk<
    ProjectGetResponseDto,
    { projectId: number; queryParams: GetClientCommonProjectsByProjectIdOpts },
    {
      rejectValue: BadRequestException | InternalErrorException;
    }
  >(
    /**
     * Project Details
     * Returns project details
     */
    'getClientCommonProjectsByProjectId',
    async (
      { projectId, queryParams }: { projectId: number; queryParams: GetClientCommonProjectsByProjectIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientCommonProjectsByProjectIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          commonStore.getClientCommonProjectsByProjectId(projectId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientCommonProjectsByProjectIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientCommonProjectsByProjectIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientCommonProjectsByProjectIdUrlRegEx = new RegExp('/app/api/client/common/projects/{projectId}');
  static getClientCommonProjectsByProjectIdUrlMockRequest = '/app/api/client/common/projects/{projectId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientCommonShortUrlsByShortUrlIdByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Get ShortUrl
   * Returns the ShortUrl Entity
   */

  /**
   * ShortUrl Get
   * Get ShortUrl
   * Returns the ShortUrl Entity
   */
  getClientCommonShortUrlsByShortUrlIdByLocationId(
    shortUrlId: number,
    locationId: number,
    queryParams: GetClientCommonShortUrlsByShortUrlIdByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<ShortUrlGetResponseDto> {
    return this.get(new EndPoint(`/app/api/client/common/shortUrls/${locationId}/${shortUrlId}`), queryParams, signal);
  }

  static getClientCommonShortUrlsByShortUrlIdByLocationIdThunk = createAsyncThunk<
    ShortUrlGetResponseDto,
    { shortUrlId: number; locationId: number; queryParams: GetClientCommonShortUrlsByShortUrlIdByLocationIdOpts },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * ShortUrl Get
     * Get ShortUrl
     * Returns the ShortUrl Entity
     */
    'getClientCommonShortUrlsByShortUrlIdByLocationId',
    async (
      {
        shortUrlId,
        locationId,
        queryParams,
      }: { shortUrlId: number; locationId: number; queryParams: GetClientCommonShortUrlsByShortUrlIdByLocationIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientCommonShortUrlsByShortUrlIdByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          commonStore.getClientCommonShortUrlsByShortUrlIdByLocationId(shortUrlId, locationId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientCommonShortUrlsByShortUrlIdByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientCommonShortUrlsByShortUrlIdByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientCommonShortUrlsByShortUrlIdByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/common/shortUrls/{locationId}/{shortUrlId}',
  );
  static getClientCommonShortUrlsByShortUrlIdByLocationIdUrlMockRequest =
    '/app/api/client/common/shortUrls/{locationId}/{shortUrlId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static patchClientCommonShortUrlsByLocationIdAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * ShortUrl Update
   * Updates the ShortUrl Entity
   */

  /**
   * ShortUrl Update
   * ShortUrl Update
   * Updates the ShortUrl Entity
   */
  patchClientCommonShortUrlsByLocationId(
    locationId: number,
    requestBody: ShortUrlUpdateRequestDto,
    queryParams: PatchClientCommonShortUrlsByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<ShortUrlUpdateResponseDto> {
    return this.patch(new EndPoint(`/app/api/client/common/shortUrls/${locationId}`), requestBody, queryParams, signal);
  }

  static patchClientCommonShortUrlsByLocationIdThunk = createAsyncThunk<
    ShortUrlUpdateResponseDto,
    {
      locationId: number;
      requestBody: ShortUrlUpdateRequestDto;
      queryParams: PatchClientCommonShortUrlsByLocationIdOpts;
    },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * ShortUrl Update
     * ShortUrl Update
     * Updates the ShortUrl Entity
     */
    'patchClientCommonShortUrlsByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
      }: {
        locationId: number;
        requestBody: ShortUrlUpdateRequestDto;
        queryParams: PatchClientCommonShortUrlsByLocationIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.patchClientCommonShortUrlsByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          commonStore.patchClientCommonShortUrlsByLocationId(locationId, requestBody, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchClientCommonShortUrlsByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchClientCommonShortUrlsByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static patchClientCommonShortUrlsByLocationIdUrlRegEx = new RegExp('/app/api/client/common/shortUrls/{locationId}');
  static patchClientCommonShortUrlsByLocationIdUrlMockRequest = '/app/api/client/common/shortUrls/{locationId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postClientCommonShortUrlsByLocationIdAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * ShortUrl Update
   * Updates the ShortUrl Entity
   */

  /**
   * ShortUrl Update
   * ShortUrl Update
   * Updates the ShortUrl Entity
   */
  postClientCommonShortUrlsByLocationId(
    locationId: number,
    requestBody: ShortUrlUpdateRequestDto,
    queryParams: PostClientCommonShortUrlsByLocationIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<ShortUrlUpdateResponseDto> {
    return this.post(
      new EndPoint(`/app/api/client/common/shortUrls/${locationId}`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postClientCommonShortUrlsByLocationIdThunk = createAsyncThunk<
    ShortUrlUpdateResponseDto,
    {
      locationId: number;
      requestBody: ShortUrlUpdateRequestDto;
      queryParams: PostClientCommonShortUrlsByLocationIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * ShortUrl Update
     * ShortUrl Update
     * Updates the ShortUrl Entity
     */
    'postClientCommonShortUrlsByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        locationId: number;
        requestBody: ShortUrlUpdateRequestDto;
        queryParams: PostClientCommonShortUrlsByLocationIdOpts;
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
        this.postClientCommonShortUrlsByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          commonStore.postClientCommonShortUrlsByLocationId(locationId, requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientCommonShortUrlsByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientCommonShortUrlsByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postClientCommonShortUrlsByLocationIdUrlRegEx = new RegExp('/app/api/client/common/shortUrls/{locationId}');
  static postClientCommonShortUrlsByLocationIdUrlMockRequest = '/app/api/client/common/shortUrls/{locationId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postClientCommonShortUrlsBatchByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Batch create short urls
   */

  /**
   * ShortUrls Batch Create
   * Batch create short urls
   */
  postClientCommonShortUrlsBatchByLocationId(
    locationId: number,
    requestBody: ShortUrlsBatchCreateRequestDto,
    queryParams: PostClientCommonShortUrlsBatchByLocationIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<ShortUrlsBatchCreateResponseDto> {
    return this.post(
      new EndPoint(`/app/api/client/common/shortUrls/${locationId}/batch`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postClientCommonShortUrlsBatchByLocationIdThunk = createAsyncThunk<
    ShortUrlsBatchCreateResponseDto,
    {
      locationId: number;
      requestBody: ShortUrlsBatchCreateRequestDto;
      queryParams: PostClientCommonShortUrlsBatchByLocationIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * ShortUrls Batch Create
     * Batch create short urls
     */
    'postClientCommonShortUrlsBatchByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        locationId: number;
        requestBody: ShortUrlsBatchCreateRequestDto;
        queryParams: PostClientCommonShortUrlsBatchByLocationIdOpts;
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
        this.postClientCommonShortUrlsBatchByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          commonStore.postClientCommonShortUrlsBatchByLocationId(
            locationId,
            requestBody,
            queryParams,
            signal,
            contentType,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientCommonShortUrlsBatchByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientCommonShortUrlsBatchByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postClientCommonShortUrlsBatchByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/common/shortUrls/{locationId}/batch',
  );
  static postClientCommonShortUrlsBatchByLocationIdUrlMockRequest =
    '/app/api/client/common/shortUrls/{locationId}/batch(.*)';
}
export const commonStore = new CommonStore();
