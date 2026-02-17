/*
 * WARNING THIS FILE IS AUTO-GENERATED DO NOT MODIFY YOUR CHANGES WILL BE OVERWRITTEN!
 */
import type { ProductRatePlanGetResponseDto } from '@models/swagger/App/Presentation/Api/Client/Product/Dtos/ProductRatePlanGetResponseDto';
import type { BadRequestException } from '@models/swagger/DDD/Infrastructure/Exceptions/BadRequestException';
import type { NotFoundException } from '@models/swagger/DDD/Infrastructure/Exceptions/NotFoundException';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { firstValueFrom, Observable } from 'rxjs';

import { EndPoint } from '../../../api-config';
import { HttpStore } from '../../http.store';
import { AbortControllersManager } from '../../store-helpers/abort-controllers-manager';

export type GetClientProductProductRatePlansByProductRatePlanIdOpts = {
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
   * - `apiUser`
   * - `reseller`
   * - `defaultCountry`
   * - `upgradeProductRatePlans`
   * - `productRatePlanUpgrades`
   *   - Allowed filter properties are:
   *     - `currentProductRatePlanId`
   *     - `upgradeProductRatePlanId`
   *     - `upgradeMethod.upsellingLinkType`
   *     - `upgradeMethod.upsellingLink`
   *     - `id`
   *     - `created`
   *     - `updated`
   *   - Allowed orderBy properties are:
   *     - `currentProductRatePlanId`
   *     - `upgradeProductRatePlanId`
   *     - `upgradeMethod.upsellingLinkType`
   *     - `upgradeMethod.upsellingLink`
   *     - `id`
   *     - `created`
   *     - `updated`
   * - `features`
   * - `productRatePlanProducts`
   * - `productRatePlanFeatureFlags`
   * - `productRatePlanFeatureFlagsBundles`
   * - `featureFlags`</details>
   */
  expand?: string;
};

export class ProductStore extends HttpStore {
  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientProductProductRatePlansByProductRatePlanIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Return ProductRatePlan details
   */

  /**
   * ProductRatePlan Details
   * Return ProductRatePlan details
   */
  getClientProductProductRatePlansByProductRatePlanId(
    productRatePlanId: number,
    queryParams: GetClientProductProductRatePlansByProductRatePlanIdOpts,
    signal?: AbortSignal,
  ): Observable<ProductRatePlanGetResponseDto> {
    return this.get(new EndPoint(`/app/api/client/product/productRatePlans/${productRatePlanId}`), queryParams, signal);
  }

  static getClientProductProductRatePlansByProductRatePlanIdThunk = createAsyncThunk<
    ProductRatePlanGetResponseDto,
    { productRatePlanId: number; queryParams: GetClientProductProductRatePlansByProductRatePlanIdOpts },
    {
      rejectValue: BadRequestException | NotFoundException;
    }
  >(
    /**
     * ProductRatePlan Details
     * Return ProductRatePlan details
     */
    'getClientProductProductRatePlansByProductRatePlanId',
    async (
      {
        productRatePlanId,
        queryParams,
      }: { productRatePlanId: number; queryParams: GetClientProductProductRatePlansByProductRatePlanIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientProductProductRatePlansByProductRatePlanIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          productStore.getClientProductProductRatePlansByProductRatePlanId(productRatePlanId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientProductProductRatePlansByProductRatePlanIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientProductProductRatePlansByProductRatePlanIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientProductProductRatePlansByProductRatePlanIdUrlRegEx = new RegExp(
    '/app/api/client/product/productRatePlans/{productRatePlanId}',
  );
  static getClientProductProductRatePlansByProductRatePlanIdUrlMockRequest =
    '/app/api/client/product/productRatePlans/{productRatePlanId}(.*)';
}
export const productStore = new ProductStore();
