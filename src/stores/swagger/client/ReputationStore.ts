/*
 * WARNING THIS FILE IS AUTO-GENERATED DO NOT MODIFY YOUR CHANGES WILL BE OVERWRITTEN!
 */
import type { DeleteResponseDto } from '@models/swagger/App/Presentation/Api/Admin/Common/Dtos/DeleteResponseDto';
import type { ReputationCompetitorsGetResponseDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReputationCompetitorsGetResponseDto';
import type { ReputationCompetitorsGroupsGetResponseDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReputationCompetitorsGroupsGetResponseDto';
import type { ReputationGenerateReplyRequestDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReputationGenerateReplyRequestDto';
import type { ReputationGenerateReplyResponseDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReputationGenerateReplyResponseDto';
import type { ReputationGetResponseDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReputationGetResponseDto';
import type { ReputationReplyDeleteResponseDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReputationReplyDeleteResponseDto';
import type { ReputationReplyPostRequestDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReputationReplyPostRequestDto';
import type { ReputationReplyPostResponseDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReputationReplyPostResponseDto';
import type { ReputationReviewGetResponseDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReputationReviewGetResponseDto';
import type { ReputationReviewsGetResponseDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReputationReviewsGetResponseDto';
import type { ReputationReviewRequestEmailCreateRequestDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReviewsRequests/ReputationReviewRequestEmailCreateRequestDto';
import type { ReputationReviewRequestEmailCreateResponsetDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReviewsRequests/ReputationReviewRequestEmailCreateResponsetDto';
import type { ReputationReviewRequestEmailsCreateRequestDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReviewsRequests/ReputationReviewRequestEmailsCreateRequestDto';
import type { ReputationReviewRequestEmailsCreateResponsetDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReviewsRequests/ReputationReviewRequestEmailsCreateResponsetDto';
import type { ReputationReviewRequestEmailsDeleteMultipleRequestDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReviewsRequests/ReputationReviewRequestEmailsDeleteMultipleRequestDto';
import type { ReputationReviewRequestEmailsDeleteMultipleResponsetDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReviewsRequests/ReputationReviewRequestEmailsDeleteMultipleResponsetDto';
import type { ReputationReviewRequestEmailSendResponsetDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReviewsRequests/ReputationReviewRequestEmailSendResponsetDto';
import type { ReputationReviewRequestEmailsSendRequestDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReviewsRequests/ReputationReviewRequestEmailsSendRequestDto';
import type { ReputationReviewRequestEmailsSendResponsetDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReviewsRequests/ReputationReviewRequestEmailsSendResponsetDto';
import type { ReputationReviewRequestEmailsThisMonthGetResponseDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReviewsRequests/ReputationReviewRequestEmailsThisMonthGetResponseDto';
import type { ReputationReviewRequestEmailsTotalNoResponsetDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReviewsRequests/ReputationReviewRequestEmailsTotalNoResponsetDto';
import type { ReputationReviewRequestEmailUpdateRequestDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReviewsRequests/ReputationReviewRequestEmailUpdateRequestDto';
import type { ReputationReviewRequestGetResponseDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReviewsRequests/ReputationReviewRequestGetResponseDto';
import type { ReputationReviewRequestPostRequestDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReviewsRequests/ReputationReviewRequestPostRequestDto';
import type { ReputationReviewRequestsGetResponseDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReviewsRequests/ReputationReviewRequestsGetResponseDto';
import type { ReputationReviewRequestShortUrlLinkGetResponsetDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReviewsRequests/ReputationReviewRequestShortUrlLinkGetResponsetDto';
import type { ReputationReviewRequestUpdateRequestDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReviewsRequests/ReputationReviewRequestUpdateRequestDto';
import type { ReputationReviewRequestUpdateResponseDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReviewsRequests/ReputationReviewRequestUpdateResponseDto';
import type { ReviewsWidgetGetResponseDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReviewsWidgetGetResponseDto';
import type { ReviewsWidgetStatisticsGetResponseDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReviewsWidgetStatisticsGetResponseDto';
import type { ReviewsWidgetUpdateRequestDto } from '@models/swagger/App/Presentation/Api/Client/Reputation/Locations/Dtos/ReviewsWidgetUpdateRequestDto';
import type { BadRequestException } from '@models/swagger/DDD/Infrastructure/Exceptions/BadRequestException';
import type { ForbiddenException } from '@models/swagger/DDD/Infrastructure/Exceptions/ForbiddenException';
import type { InternalErrorException } from '@models/swagger/DDD/Infrastructure/Exceptions/InternalErrorException';
import type { MethodNotAllowedException } from '@models/swagger/DDD/Infrastructure/Exceptions/MethodNotAllowedException';
import type { NotFoundException } from '@models/swagger/DDD/Infrastructure/Exceptions/NotFoundException';
import type { UnauthorizedException } from '@models/swagger/DDD/Infrastructure/Exceptions/UnauthorizedException';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { firstValueFrom, Observable } from 'rxjs';

import { EndPoint } from '../../../api-config';
import { HttpStore } from '../../http.store';
import { AbortControllersManager } from '../../store-helpers/abort-controllers-manager';

export type GetClientReputationLocationsReviewsRequestsByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientReputationLocationsReviewsRequestsByChannelByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * The Channel for which to get LocationReviewRequests
   */
  channel: string;
  /**
   * The TargetDirectory used to generate the LocationReviewRequest in case default ones are not available
   */
  targetDirectory?: string;
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
   * - `locationReviewRequestUrlId`
   * - `locationReviewRequestTemplateId`
   * - `identifier`
   * - `qrCode.qrCodeContent`
   * - `qrCode.text`
   * - `qrCode.settings.type`
   * - `qrCode.settings.version`
   * - `qrCode.settings.errorCorrectionLevel`
   * - `qrCode.settings.maskPattern`
   * - `qrCode.settings.margin`
   * - `qrCode.settings.scale`
   * - `qrCode.settings.width`
   * - `qrCode.settings.matrix`
   * - `qrCode.settings.background`
   * - `locationReviewRequestImage.content`
   * - `locationReviewRequestPdf.content`
   * - `id`
   * - `created`
   * - `updated`
   * - `shortUrl.shortUrlIdentifier`
   * - `shortUrl.targetUrl`
   * - `shortUrl.externalId`
   * - `shortUrl.description`
   * - `shortUrl.parentEntityId`
   * - `shortUrl.locationId`
   * - `shortUrl.parentEntityType`
   * - `shortUrl.shortenedUrl`
   * - `shortUrl.id`
   * - `shortUrl.created`
   * - `shortUrl.updated`</details>
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
   * - `locationReviewRequestUrlId`
   * - `locationReviewRequestTemplateId`
   * - `identifier`
   * - `qrCode.qrCodeContent`
   * - `qrCode.text`
   * - `qrCode.settings.type`
   * - `qrCode.settings.version`
   * - `qrCode.settings.errorCorrectionLevel`
   * - `qrCode.settings.maskPattern`
   * - `qrCode.settings.margin`
   * - `qrCode.settings.scale`
   * - `qrCode.settings.width`
   * - `qrCode.settings.matrix`
   * - `qrCode.settings.background`
   * - `locationReviewRequestImage.content`
   * - `locationReviewRequestPdf.content`
   * - `id`
   * - `created`
   * - `updated`
   * - `shortUrl.shortUrlIdentifier`
   * - `shortUrl.targetUrl`
   * - `shortUrl.externalId`
   * - `shortUrl.description`
   * - `shortUrl.parentEntityId`
   * - `shortUrl.locationId`
   * - `shortUrl.parentEntityType`
   * - `shortUrl.shortenedUrl`
   * - `shortUrl.id`
   * - `shortUrl.created`
   * - `shortUrl.updated`</details>
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
   * - `shortUrl`
   *   - Allowed filter properties are:
   *     - `shortUrlIdentifier`
   *     - `targetUrl`
   *     - `externalId`
   *     - `description`
   *     - `parentEntityId`
   *     - `locationId`
   *     - `parentEntityType`
   *     - `shortenedUrl`
   *     - `id`
   *     - `created`
   *     - `updated`
   *   - Allowed orderBy properties are:
   *     - `shortUrlIdentifier`
   *     - `targetUrl`
   *     - `externalId`
   *     - `description`
   *     - `parentEntityId`
   *     - `locationId`
   *     - `parentEntityType`
   *     - `shortenedUrl`
   *     - `id`
   *     - `created`
   *     - `updated`
   * - `qrCode`
   * - `locationReviewRequestUrl`
   * - `locationReviewRequestTemplate`
   * - `locationReviewRequestImage`
   * - `locationReviewRequestPdf`</details>
   */
  expand?: string;
};
export type GetClientReputationLocationsReviewsRequestsByLocationReviewRequestIdByLocationIdOpts = {
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
   *
   * - `locationReviewRequestUrlId`
   * - `locationReviewRequestTemplateId`
   * - `identifier`
   * - `qrCode.qrCodeContent`
   * - `qrCode.text`
   * - `qrCode.settings.type`
   * - `qrCode.settings.version`
   * - `qrCode.settings.errorCorrectionLevel`
   * - `qrCode.settings.maskPattern`
   * - `qrCode.settings.margin`
   * - `qrCode.settings.scale`
   * - `qrCode.settings.width`
   * - `qrCode.settings.matrix`
   * - `qrCode.settings.background`
   * - `locationReviewRequestImage.content`
   * - `locationReviewRequestPdf.content`
   * - `id`
   * - `created`
   * - `updated`
   * - `shortUrl.shortUrlIdentifier`
   * - `shortUrl.targetUrl`
   * - `shortUrl.externalId`
   * - `shortUrl.description`
   * - `shortUrl.parentEntityId`
   * - `shortUrl.locationId`
   * - `shortUrl.parentEntityType`
   * - `shortUrl.shortenedUrl`
   * - `shortUrl.id`
   * - `shortUrl.created`
   * - `shortUrl.updated`</details>
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
   * - `locationReviewRequestUrlId`
   * - `locationReviewRequestTemplateId`
   * - `identifier`
   * - `qrCode.qrCodeContent`
   * - `qrCode.text`
   * - `qrCode.settings.type`
   * - `qrCode.settings.version`
   * - `qrCode.settings.errorCorrectionLevel`
   * - `qrCode.settings.maskPattern`
   * - `qrCode.settings.margin`
   * - `qrCode.settings.scale`
   * - `qrCode.settings.width`
   * - `qrCode.settings.matrix`
   * - `qrCode.settings.background`
   * - `locationReviewRequestImage.content`
   * - `locationReviewRequestPdf.content`
   * - `id`
   * - `created`
   * - `updated`
   * - `shortUrl.shortUrlIdentifier`
   * - `shortUrl.targetUrl`
   * - `shortUrl.externalId`
   * - `shortUrl.description`
   * - `shortUrl.parentEntityId`
   * - `shortUrl.locationId`
   * - `shortUrl.parentEntityType`
   * - `shortUrl.shortenedUrl`
   * - `shortUrl.id`
   * - `shortUrl.created`
   * - `shortUrl.updated`</details>
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
   * - `shortUrl`
   *   - Allowed filter properties are:
   *     - `shortUrlIdentifier`
   *     - `targetUrl`
   *     - `externalId`
   *     - `description`
   *     - `parentEntityId`
   *     - `locationId`
   *     - `parentEntityType`
   *     - `shortenedUrl`
   *     - `id`
   *     - `created`
   *     - `updated`
   *   - Allowed orderBy properties are:
   *     - `shortUrlIdentifier`
   *     - `targetUrl`
   *     - `externalId`
   *     - `description`
   *     - `parentEntityId`
   *     - `locationId`
   *     - `parentEntityType`
   *     - `shortenedUrl`
   *     - `id`
   *     - `created`
   *     - `updated`
   * - `qrCode`
   * - `locationReviewRequestUrl`
   * - `locationReviewRequestTemplate`
   * - `locationReviewRequestImage`
   * - `locationReviewRequestPdf`</details>
   */
  expand?: string;
};
export type PatchClientReputationLocationsReviewsRequestsUpdateByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PostClientReputationLocationsReviewsRequestsUpdateByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PostClientReputationLocationsReviewsRequestsCreateByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientReputationLocationsReviewsRequestsGetHtmlTemplateByLocationReviewRequestIdOpts = {
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
   *
   * - `locationReviewRequestUrlId`
   * - `locationReviewRequestTemplateId`
   * - `identifier`
   * - `qrCode.qrCodeContent`
   * - `qrCode.text`
   * - `qrCode.settings.type`
   * - `qrCode.settings.version`
   * - `qrCode.settings.errorCorrectionLevel`
   * - `qrCode.settings.maskPattern`
   * - `qrCode.settings.margin`
   * - `qrCode.settings.scale`
   * - `qrCode.settings.width`
   * - `qrCode.settings.matrix`
   * - `qrCode.settings.background`
   * - `locationReviewRequestImage.content`
   * - `locationReviewRequestPdf.content`
   * - `id`
   * - `created`
   * - `updated`
   * - `shortUrl.shortUrlIdentifier`
   * - `shortUrl.targetUrl`
   * - `shortUrl.externalId`
   * - `shortUrl.description`
   * - `shortUrl.parentEntityId`
   * - `shortUrl.locationId`
   * - `shortUrl.parentEntityType`
   * - `shortUrl.shortenedUrl`
   * - `shortUrl.id`
   * - `shortUrl.created`
   * - `shortUrl.updated`</details>
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
   * - `locationReviewRequestUrlId`
   * - `locationReviewRequestTemplateId`
   * - `identifier`
   * - `qrCode.qrCodeContent`
   * - `qrCode.text`
   * - `qrCode.settings.type`
   * - `qrCode.settings.version`
   * - `qrCode.settings.errorCorrectionLevel`
   * - `qrCode.settings.maskPattern`
   * - `qrCode.settings.margin`
   * - `qrCode.settings.scale`
   * - `qrCode.settings.width`
   * - `qrCode.settings.matrix`
   * - `qrCode.settings.background`
   * - `locationReviewRequestImage.content`
   * - `locationReviewRequestPdf.content`
   * - `id`
   * - `created`
   * - `updated`
   * - `shortUrl.shortUrlIdentifier`
   * - `shortUrl.targetUrl`
   * - `shortUrl.externalId`
   * - `shortUrl.description`
   * - `shortUrl.parentEntityId`
   * - `shortUrl.locationId`
   * - `shortUrl.parentEntityType`
   * - `shortUrl.shortenedUrl`
   * - `shortUrl.id`
   * - `shortUrl.created`
   * - `shortUrl.updated`</details>
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
   * - `shortUrl`
   *   - Allowed filter properties are:
   *     - `shortUrlIdentifier`
   *     - `targetUrl`
   *     - `externalId`
   *     - `description`
   *     - `parentEntityId`
   *     - `locationId`
   *     - `parentEntityType`
   *     - `shortenedUrl`
   *     - `id`
   *     - `created`
   *     - `updated`
   *   - Allowed orderBy properties are:
   *     - `shortUrlIdentifier`
   *     - `targetUrl`
   *     - `externalId`
   *     - `description`
   *     - `parentEntityId`
   *     - `locationId`
   *     - `parentEntityType`
   *     - `shortenedUrl`
   *     - `id`
   *     - `created`
   *     - `updated`
   * - `qrCode`
   * - `locationReviewRequestUrl`
   * - `locationReviewRequestTemplate`
   * - `locationReviewRequestImage`
   * - `locationReviewRequestPdf`</details>
   */
  expand?: string;
};
export type GetClientReputationLocationsReviewsRequestsDownloadPrintMaterialsByLocationReviewRequestIdOpts = {
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
   *
   * - `locationReviewRequestUrlId`
   * - `locationReviewRequestTemplateId`
   * - `identifier`
   * - `qrCode.qrCodeContent`
   * - `qrCode.text`
   * - `qrCode.settings.type`
   * - `qrCode.settings.version`
   * - `qrCode.settings.errorCorrectionLevel`
   * - `qrCode.settings.maskPattern`
   * - `qrCode.settings.margin`
   * - `qrCode.settings.scale`
   * - `qrCode.settings.width`
   * - `qrCode.settings.matrix`
   * - `qrCode.settings.background`
   * - `locationReviewRequestImage.content`
   * - `locationReviewRequestPdf.content`
   * - `id`
   * - `created`
   * - `updated`
   * - `shortUrl.shortUrlIdentifier`
   * - `shortUrl.targetUrl`
   * - `shortUrl.externalId`
   * - `shortUrl.description`
   * - `shortUrl.parentEntityId`
   * - `shortUrl.locationId`
   * - `shortUrl.parentEntityType`
   * - `shortUrl.shortenedUrl`
   * - `shortUrl.id`
   * - `shortUrl.created`
   * - `shortUrl.updated`</details>
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
   * - `locationReviewRequestUrlId`
   * - `locationReviewRequestTemplateId`
   * - `identifier`
   * - `qrCode.qrCodeContent`
   * - `qrCode.text`
   * - `qrCode.settings.type`
   * - `qrCode.settings.version`
   * - `qrCode.settings.errorCorrectionLevel`
   * - `qrCode.settings.maskPattern`
   * - `qrCode.settings.margin`
   * - `qrCode.settings.scale`
   * - `qrCode.settings.width`
   * - `qrCode.settings.matrix`
   * - `qrCode.settings.background`
   * - `locationReviewRequestImage.content`
   * - `locationReviewRequestPdf.content`
   * - `id`
   * - `created`
   * - `updated`
   * - `shortUrl.shortUrlIdentifier`
   * - `shortUrl.targetUrl`
   * - `shortUrl.externalId`
   * - `shortUrl.description`
   * - `shortUrl.parentEntityId`
   * - `shortUrl.locationId`
   * - `shortUrl.parentEntityType`
   * - `shortUrl.shortenedUrl`
   * - `shortUrl.id`
   * - `shortUrl.created`
   * - `shortUrl.updated`</details>
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
   * - `shortUrl`
   *   - Allowed filter properties are:
   *     - `shortUrlIdentifier`
   *     - `targetUrl`
   *     - `externalId`
   *     - `description`
   *     - `parentEntityId`
   *     - `locationId`
   *     - `parentEntityType`
   *     - `shortenedUrl`
   *     - `id`
   *     - `created`
   *     - `updated`
   *   - Allowed orderBy properties are:
   *     - `shortUrlIdentifier`
   *     - `targetUrl`
   *     - `externalId`
   *     - `description`
   *     - `parentEntityId`
   *     - `locationId`
   *     - `parentEntityType`
   *     - `shortenedUrl`
   *     - `id`
   *     - `created`
   *     - `updated`
   * - `qrCode`
   * - `locationReviewRequestUrl`
   * - `locationReviewRequestTemplate`
   * - `locationReviewRequestImage`
   * - `locationReviewRequestPdf`</details>
   */
  expand?: string;
};
export type GetClientReputationLocationsReviewsRequestsDownloadPrintMaterialsByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientReputationLocationsReviewsRequestsEmailsByLocationReviewRequestEmailIdByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * The writing style of the emails content
   * Allowed Values:
   * -   `FORMAL`
   * -   `PROFESSIONAL`
   * -   `INFORMATIVE`
   * -   `FRIENDLY`
   * -   `BOLD`
   * -   `WITTY`
   *
   */
  writingStyle?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type DeleteClientReputationLocationsReviewsRequestsEmailsByLocationReviewRequestEmailIdByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientReputationLocationsReviewsRequestsEmailsByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * Whether to include deleted ReviewRequestEmails
   */
  includeDeleted?: boolean;
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
   * - `customerEmail`
   * - `customerName`
   * - `isOptIn`
   * - `status`
   * - `sendAt`
   * - `locationReviewRequestId`
   * - `locationId`
   * - `isActive`
   * - `writingStyle`
   * - `emailMessage.location.businessId`
   * - `emailMessage.location.company.legalEntity.name`
   * - `emailMessage.location.company.legalEntity.fullName`
   * - `emailMessage.location.company.legalEntity.type`
   * - `emailMessage.location.company.registrationNumber.number`
   * - `emailMessage.location.company.registrationNumber.commercialRegistryOffice`
   * - `emailMessage.location.company.taxIdentificationNumber.number`
   * - `emailMessage.location.company.vatId.vatId`
   * - `emailMessage.location.company.doingBusinessAsName`
   * - `emailMessage.location.address.premise`
   * - `emailMessage.location.address.subpremise`
   * - `emailMessage.location.address.streetNo`
   * - `emailMessage.location.address.street`
   * - `emailMessage.location.address.addressLine1`
   * - `emailMessage.location.address.addressLine2`
   * - `emailMessage.location.address.postalCode`
   * - `emailMessage.location.address.postalCodeSuffix`
   * - `emailMessage.location.address.sublocality`
   * - `emailMessage.location.address.city.name`
   * - `emailMessage.location.address.city.alias`
   * - `emailMessage.location.address.city.stateId`
   * - `emailMessage.location.address.city.countryId`
   * - `emailMessage.location.address.city.languageCode`
   * - `emailMessage.location.address.city.geoPoint.lat`
   * - `emailMessage.location.address.city.geoPoint.lng`
   * - `emailMessage.location.address.city.hasCoordinates`
   * - `emailMessage.location.address.city.branchCount`
   * - `emailMessage.location.address.city.id`
   * - `emailMessage.location.address.city.created`
   * - `emailMessage.location.address.city.updated`
   * - `emailMessage.location.address.subCounty.name`
   * - `emailMessage.location.address.subCounty.shortCode`
   * - `emailMessage.location.address.county.name`
   * - `emailMessage.location.address.county.shortCode`
   * - `emailMessage.location.address.state.name`
   * - `emailMessage.location.address.state.alias`
   * - `emailMessage.location.address.state.shortCode`
   * - `emailMessage.location.address.state.countryId`
   * - `emailMessage.location.address.state.id`
   * - `emailMessage.location.address.country.name`
   * - `emailMessage.location.address.country.alias`
   * - `emailMessage.location.address.country.parentCountryId`
   * - `emailMessage.location.address.country.type`
   * - `emailMessage.location.address.country.tld`
   * - `emailMessage.location.address.country.commonTld`
   * - `emailMessage.location.address.country.shortCode`
   * - `emailMessage.location.address.country.isoCode`
   * - `emailMessage.location.address.country.phonePrefix`
   * - `emailMessage.location.address.country.googleLocationName`
   * - `emailMessage.location.address.country.currency.isoCode`
   * - `emailMessage.location.address.country.currency.symbol`
   * - `emailMessage.location.address.country.currency.displaySymbolBeforeAmount`
   * - `emailMessage.location.address.country.vatRate`
   * - `emailMessage.location.address.country.euMember`
   * - `emailMessage.location.address.country.taxKey`
   * - `emailMessage.location.address.country.accountOfProceeds`
   * - `emailMessage.location.address.country.locale`
   * - `emailMessage.location.address.country.unitSystem`
   * - `emailMessage.location.address.country.timeSystem`
   * - `emailMessage.location.address.country.firstDayOfWeek`
   * - `emailMessage.location.address.country.addressFormat`
   * - `emailMessage.location.address.country.appDefaultLanguageCode`
   * - `emailMessage.location.address.country.nativeLanguageCode`
   * - `emailMessage.location.address.country.languageCode`
   * - `emailMessage.location.address.country.isActive`
   * - `emailMessage.location.address.country.priority`
   * - `emailMessage.location.address.country.setting.type`
   * - `emailMessage.location.address.country.setting.firstnameBeforeLastname`
   * - `emailMessage.location.address.country.setting.showTitleField`
   * - `emailMessage.location.address.country.setting.showCookieNotice`
   * - `emailMessage.location.address.country.setting.availableCreditCards`
   * - `emailMessage.location.address.country.setting.defaultTrialMode`
   * - `emailMessage.location.address.country.setting.isActiveForPartners`
   * - `emailMessage.location.address.country.addressSetting.type`
   * - `emailMessage.location.address.country.addressSetting.streetNoIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.streetIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.cityIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.stateIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.countyIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.subCountyIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.location.address.country.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.location.address.country.addressSetting.streetNoFormat`
   * - `emailMessage.location.address.country.addressSetting.addressFormat`
   * - `emailMessage.location.address.country.id`
   * - `emailMessage.location.address.geoPoint.lat`
   * - `emailMessage.location.address.geoPoint.lng`
   * - `emailMessage.location.address.customerSelectedGeoPoint.lat`
   * - `emailMessage.location.address.customerSelectedGeoPoint.lng`
   * - `emailMessage.location.address.geoBounds.northeast.lat`
   * - `emailMessage.location.address.geoBounds.northeast.lng`
   * - `emailMessage.location.address.geoBounds.southwest.lat`
   * - `emailMessage.location.address.geoBounds.southwest.lng`
   * - `emailMessage.location.address.formattedAddress`
   * - `emailMessage.location.address.languageCode`
   * - `emailMessage.location.address.displayAddress`
   * - `emailMessage.location.address.inputAddress`
   * - `emailMessage.location.address.precision`
   * - `emailMessage.location.languageCode`
   * - `emailMessage.location.description.long`
   * - `emailMessage.location.description.short`
   * - `emailMessage.location.description.shortDescriptionMaxLength`
   * - `emailMessage.location.description.longDescriptionMaxLength`
   * - `emailMessage.location.isLocallyFocused`
   * - `emailMessage.location.serviceAreaType`
   * - `emailMessage.location.radius`
   * - `emailMessage.location.websiteId`
   * - `emailMessage.location.name`
   * - `emailMessage.location.seo.rankingsBusiness.domain.name`
   * - `emailMessage.location.seo.rankingsBusiness.domain.path`
   * - `emailMessage.location.seo.rankingsBusiness.domain.needsWww`
   * - `emailMessage.location.seo.rankingsBusiness.domain.needsHttps`
   * - `emailMessage.location.seo.rankingsBusiness.domain.excludePathInPageUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.unknownProtocol`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.status`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.isValid`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.validateWithoutProtocol`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.needsWww`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.needsNoWww`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.needsHttps`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.httpCode`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.contentLength`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.wordsCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.redirectCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.retryCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.initialUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.redirectUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.retryUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.filteredUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.timeout`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.countryShortCode`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.validationMode`
   * - `emailMessage.location.seo.rankingsBusiness.domain.content.content`
   * - `emailMessage.location.seo.rankingsBusiness.domain.content.objectiveSummary.objectiveSummaryText`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.domain`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.insufficientFundsIncidentCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.intentionalFailedPaymentIncidentCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.isCommonDomain`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.phishingTargetId`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.commonDomainRiskScore`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.id`
   * - `emailMessage.location.seo.rankingsBusiness.domain.id`
   * - `emailMessage.location.seo.rankingsBusiness.googleMapsId`
   * - `emailMessage.location.settings.googleConnection.connectionToken.tokenSetupState`
   * - `emailMessage.location.settings.googleConnection.connectionToken.expiresAt`
   * - `emailMessage.location.settings.googleConnection.connectionToken.issuedAt`
   * - `emailMessage.location.settings.googleConnection.connectionToken.token`
   * - `emailMessage.location.settings.googleConnection.connectionToken.refreshToken`
   * - `emailMessage.location.settings.googleConnection.connectionToken.apiScope`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.id`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.email`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.emailVerified`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.fullName`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.profilePicture`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.locale`
   * - `emailMessage.location.settings.googleConnection.connectionToken.locationInfo.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.googleConnection.connectionToken.locationInfo.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.googleConnection.connectionToken.locationInfo.googleIds.googleMapsId`
   * - `emailMessage.location.settings.googleConnection.connectionToken.locationInfo.locale`
   * - `emailMessage.location.settings.googleConnection.connectionToken.isActive`
   * - `emailMessage.location.settings.googleConnection.googleTokenConnectFlowInitUrl`
   * - `emailMessage.location.settings.googleConnection.connectionState`
   * - `emailMessage.location.settings.googleConnection.connectionType`
   * - `emailMessage.location.settings.googleConnection.profileState`
   * - `emailMessage.location.settings.googleConnection.syncState`
   * - `emailMessage.location.settings.googleConnection.prevConnectedExternalId`
   * - `emailMessage.location.settings.googleConnection.syncSettings.syncLocation`
   * - `emailMessage.location.settings.googleConnection.syncSettings.syncRequirementsSatisfied`
   * - `emailMessage.location.settings.googleConnection.syncSettings.syncLogoAndMainPhoto`
   * - `emailMessage.location.settings.googleConnection.syncSettings.syncGallery`
   * - `emailMessage.location.settings.googleConnection.syncSettings.lastSyncDate`
   * - `emailMessage.location.settings.googleConnection.syncSettings.numberOfSyncs`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.postalAddress`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.contactInfos`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.openingHours`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.website`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.company`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.categories`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.description`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.mediaitems`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.locationServiceAreas`
   * - `emailMessage.location.settings.googleConnection.throttleTimeLeft`
   * - `emailMessage.location.settings.googleConnection.profile.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.googleConnection.profile.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.googleConnection.profile.googleIds.googleMapsId`
   * - `emailMessage.location.settings.googleConnection.profile.googleMapsUrl`
   * - `emailMessage.location.settings.googleConnection.profile.newReviewUrl`
   * - `emailMessage.location.settings.googleConnection.profile.placesSearchForPotentialProfileTriedOnce`
   * - `emailMessage.location.settings.googleConnection.lastConnectionDate`
   * - `emailMessage.location.settings.uberallConnection.connectionState`
   * - `emailMessage.location.settings.uberallConnection.connectionType`
   * - `emailMessage.location.settings.uberallConnection.profileState`
   * - `emailMessage.location.settings.uberallConnection.syncState`
   * - `emailMessage.location.settings.uberallConnection.prevConnectedExternalId`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.syncLocation`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.syncRequirementsSatisfied`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.syncLogoAndMainPhoto`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.syncGallery`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.lastSyncDate`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.numberOfSyncs`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.postalAddress`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.contactInfos`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.openingHours`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.website`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.company`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.categories`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.description`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.mediaitems`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.locationServiceAreas`
   * - `emailMessage.location.settings.uberallConnection.throttleTimeLeft`
   * - `emailMessage.location.settings.uberallConnection.profile.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.uberallConnection.profile.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.uberallConnection.profile.googleIds.googleMapsId`
   * - `emailMessage.location.settings.uberallConnection.profile.googleMapsUrl`
   * - `emailMessage.location.settings.uberallConnection.profile.newReviewUrl`
   * - `emailMessage.location.settings.uberallConnection.profile.placesSearchForPotentialProfileTriedOnce`
   * - `emailMessage.location.settings.uberallConnection.lastConnectionDate`
   * - `emailMessage.location.settings.yextConnection.connectionState`
   * - `emailMessage.location.settings.yextConnection.connectionType`
   * - `emailMessage.location.settings.yextConnection.profileState`
   * - `emailMessage.location.settings.yextConnection.syncState`
   * - `emailMessage.location.settings.yextConnection.prevConnectedExternalId`
   * - `emailMessage.location.settings.yextConnection.syncSettings.syncLocation`
   * - `emailMessage.location.settings.yextConnection.syncSettings.syncRequirementsSatisfied`
   * - `emailMessage.location.settings.yextConnection.syncSettings.syncLogoAndMainPhoto`
   * - `emailMessage.location.settings.yextConnection.syncSettings.syncGallery`
   * - `emailMessage.location.settings.yextConnection.syncSettings.lastSyncDate`
   * - `emailMessage.location.settings.yextConnection.syncSettings.numberOfSyncs`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.postalAddress`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.contactInfos`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.openingHours`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.website`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.company`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.categories`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.description`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.mediaitems`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.locationServiceAreas`
   * - `emailMessage.location.settings.yextConnection.throttleTimeLeft`
   * - `emailMessage.location.settings.yextConnection.profile.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.yextConnection.profile.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.yextConnection.profile.googleIds.googleMapsId`
   * - `emailMessage.location.settings.yextConnection.profile.googleMapsUrl`
   * - `emailMessage.location.settings.yextConnection.profile.newReviewUrl`
   * - `emailMessage.location.settings.yextConnection.profile.placesSearchForPotentialProfileTriedOnce`
   * - `emailMessage.location.settings.yextConnection.lastConnectionDate`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.accessTokenState`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.expiresAt`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.issuedAt`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.isActive`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.isValid`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.isConnectedWithInstagram`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.tokenLifetime`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.token`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.apiScopes`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.id`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.profilePicture`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.lastName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.firstName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.title`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.academicTitle`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.jobTitle`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.gender.gender`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.locationId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.locationName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.primaryPhone`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.websiteUrl`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.primaryCategoryName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.languageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.premise`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.subpremise`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.streetNo`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.street`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.addressLine1`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.addressLine2`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.postalCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.postalCodeSuffix`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.sublocality`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.alias`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.stateId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.countryId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.languageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.geoPoint.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.geoPoint.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.hasCoordinates`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.branchCount`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.id`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.created`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.updated`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.subCounty.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.subCounty.shortCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.county.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.county.shortCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.alias`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.shortCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.countryId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.id`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.alias`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.parentCountryId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.type`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.tld`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.commonTld`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.shortCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.isoCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.phonePrefix`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.googleLocationName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.currency.isoCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.currency.symbol`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.currency.displaySymbolBeforeAmount`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.vatRate`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.euMember`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.taxKey`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.accountOfProceeds`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.locale`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.unitSystem`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.timeSystem`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.firstDayOfWeek`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressFormat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.appDefaultLanguageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.nativeLanguageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.languageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.isActive`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.priority`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.type`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.firstnameBeforeLastname`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.showTitleField`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.showCookieNotice`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.availableCreditCards`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.defaultTrialMode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.isActiveForPartners`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.type`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.streetNoIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.streetIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.cityIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.stateIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.countyIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.subCountyIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.streetNoFormat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.addressFormat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.id`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoPoint.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoPoint.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.customerSelectedGeoPoint.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.customerSelectedGeoPoint.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoBounds.northeast.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoBounds.northeast.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoBounds.southwest.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoBounds.southwest.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.formattedAddress`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.languageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.displayAddress`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.inputAddress`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.precision`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.locationUrl`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.locationProfilePictureUrl`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.pageToken`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.hasBaseScopes`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.hasInstagramScopes`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.hasBoostsScopes`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.hasBusinessManagrScopes`
   * - `emailMessage.location.settings.facebookConnection.facebookTokenConnectFlowInitUrl`
   * - `emailMessage.location.settings.facebookConnection.connectionState`
   * - `emailMessage.location.settings.facebookConnection.connectionType`
   * - `emailMessage.location.settings.facebookConnection.profileState`
   * - `emailMessage.location.settings.facebookConnection.syncState`
   * - `emailMessage.location.settings.facebookConnection.prevConnectedExternalId`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.syncLocation`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.syncRequirementsSatisfied`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.syncLogoAndMainPhoto`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.syncGallery`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.lastSyncDate`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.numberOfSyncs`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.postalAddress`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.contactInfos`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.openingHours`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.website`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.company`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.categories`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.description`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.mediaitems`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.locationServiceAreas`
   * - `emailMessage.location.settings.facebookConnection.throttleTimeLeft`
   * - `emailMessage.location.settings.facebookConnection.profile.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.facebookConnection.profile.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.facebookConnection.profile.googleIds.googleMapsId`
   * - `emailMessage.location.settings.facebookConnection.profile.googleMapsUrl`
   * - `emailMessage.location.settings.facebookConnection.profile.newReviewUrl`
   * - `emailMessage.location.settings.facebookConnection.profile.placesSearchForPotentialProfileTriedOnce`
   * - `emailMessage.location.settings.facebookConnection.lastConnectionDate`
   * - `emailMessage.location.settings.tasksSettings.reassignTasks`
   * - `emailMessage.location.settings.tasksSettings.initiallyValidated`
   * - `emailMessage.location.reputation.totalReviews`
   * - `emailMessage.location.reputation.averageRating`
   * - `emailMessage.location.reputation.reviewsWithoutReplies`
   * - `emailMessage.location.reputation.reputationScores.reputationScore.weight`
   * - `emailMessage.location.reputation.reputationScores.reputationScore.score`
   * - `emailMessage.location.reputation.reputationScores.averageRatingScore.averageRating`
   * - `emailMessage.location.reputation.reputationScores.averageRatingScore.weight`
   * - `emailMessage.location.reputation.reputationScores.averageRatingScore.score`
   * - `emailMessage.location.reputation.reputationScores.totalReviewsScore.totalReviews`
   * - `emailMessage.location.reputation.reputationScores.totalReviewsScore.weight`
   * - `emailMessage.location.reputation.reputationScores.totalReviewsScore.score`
   * - `emailMessage.location.reputation.reputationScores.repliesRateScore.reviewsRepliesPercentage`
   * - `emailMessage.location.reputation.reputationScores.repliesRateScore.weight`
   * - `emailMessage.location.reputation.reputationScores.repliesRateScore.score`
   * - `emailMessage.location.reputation.reputationScores.reviewsLengthScore.averageReviewsLength`
   * - `emailMessage.location.reputation.reputationScores.reviewsLengthScore.weight`
   * - `emailMessage.location.reputation.reputationScores.reviewsLengthScore.score`
   * - `emailMessage.location.reputation.reputationScores.reviewsRecencyScore.averageReviewsRecency`
   * - `emailMessage.location.reputation.reputationScores.reviewsRecencyScore.weight`
   * - `emailMessage.location.reputation.reputationScores.reviewsRecencyScore.score`
   * - `emailMessage.location.reputation.reputationScores.id`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithOneStar`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithTwoStars`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithThreeStars`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithFourStars`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithFiveStars`
   * - `emailMessage.location.reputation.reviewsDistribution.badReviews`
   * - `emailMessage.location.reputation.reviewsDistribution.neutralReviews`
   * - `emailMessage.location.reputation.reviewsDistribution.goodReviews`
   * - `emailMessage.location.reputation.reviewsDistribution.totalReviews`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithOneStar`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithTwoStars`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithThreeStars`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithFourStars`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithFiveStars`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.badReviews`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.neutralReviews`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.goodReviews`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.totalReviews`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithOneStar`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithTwoStars`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithThreeStars`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithFourStars`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithFiveStars`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.badReviews`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.neutralReviews`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.goodReviews`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.totalReviews`
   * - `emailMessage.location.reputation.hasReviews`
   * - `emailMessage.location.engagement.postsSummary.totalCount`
   * - `emailMessage.location.engagement.postsSummary.scheduledCount`
   * - `emailMessage.location.engagement.postsSummary.publishedCount`
   * - `emailMessage.location.engagement.postsSummary.publishingCount`
   * - `emailMessage.location.engagement.postsSummary.notApprovedCount`
   * - `emailMessage.location.engagement.postsSummary.draftCount`
   * - `emailMessage.location.engagement.postsSummary.errorCount`
   * - `emailMessage.location.engagement.eventsSummary.pendingVerificationCount`
   * - `emailMessage.location.engagement.eventsSummary.pastCount`
   * - `emailMessage.location.engagement.eventsSummary.totalCount`
   * - `emailMessage.location.engagement.eventsSummary.scheduledCount`
   * - `emailMessage.location.engagement.eventsSummary.publishedCount`
   * - `emailMessage.location.engagement.eventsSummary.publishingCount`
   * - `emailMessage.location.engagement.eventsSummary.notApprovedCount`
   * - `emailMessage.location.engagement.eventsSummary.draftCount`
   * - `emailMessage.location.engagement.eventsSummary.errorCount`
   * - `emailMessage.location.id`
   * - `emailMessage.location.created`
   * - `emailMessage.location.updated`
   * - `emailMessage.project.accountId`
   * - `emailMessage.project.status`
   * - `emailMessage.project.settings.setup.featureFlagSetting.allowedCountryShortCodes`
   * - `emailMessage.project.settings.setup.featureFlagSetting.lockCountrySelectionAfterSetup`
   * - `emailMessage.project.settings.setup.featureFlagSetting.allowProjectPrefill`
   * - `emailMessage.project.settings.setup.featureFlagSetting.stepsToHide`
   * - `emailMessage.project.settings.setup.featureFlagSetting.notAllowAnyUpsellTriggersForType`
   * - `emailMessage.project.settings.setup.featureFlagSetting.allowUserToChangeDomain`
   * - `emailMessage.project.settings.setup.keywordsFeatureFlagSetting.keywordsAvailable`
   * - `emailMessage.project.settings.setup.locationsFeatureFlagSetting.locationsAvailable`
   * - `emailMessage.project.settings.setup.competitorsFeatureFlagSetting.competitorsAvailable`
   * - `emailMessage.project.settings.seo.seoRankingsFeatureFlagSetting.keywordsDisplayed`
   * - `emailMessage.project.settings.seo.displayKeywordVisibilityComparison`
   * - `emailMessage.project.settings.seo.displayTopKeywords`
   * - `emailMessage.project.settings.seo.hasCustomCMSTypeOrder`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMin.currency.isoCode`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMin.currency.symbol`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMin.currency.displaySymbolBeforeAmount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMin.amount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMax.currency.isoCode`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMax.currency.symbol`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMax.currency.displaySymbolBeforeAmount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMax.amount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMin.currency.isoCode`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMin.currency.symbol`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMin.currency.displaySymbolBeforeAmount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMin.amount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMax.currency.isoCode`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMax.currency.symbol`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMax.currency.displaySymbolBeforeAmount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMax.amount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.isPreviewFeatureFlagSetting`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.durationOfInitialBudgetRestrictions`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.handlingFee.appliedAfter`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.handlingFee.ownShare`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.handlingFee.resellerShare`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.voucherDistributionMethod`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.voucherDistributionMethodStartDate`
   * - `emailMessage.project.settings.presence.analysis`
   * - `emailMessage.project.settings.rights.delete`
   * - `emailMessage.project.settings.rights.update`
   * - `emailMessage.project.settings.aiBudget.aiBudgetFeatureFlagSetting.monthlyAIBudgetPerProjectInUSD`
   * - `emailMessage.project.id`
   * - `emailMessage.project.created`
   * - `emailMessage.project.updated`
   * - `emailMessage.account.status`
   * - `emailMessage.account.owner.lastName`
   * - `emailMessage.account.owner.firstName`
   * - `emailMessage.account.owner.title`
   * - `emailMessage.account.owner.academicTitle`
   * - `emailMessage.account.owner.jobTitle`
   * - `emailMessage.account.owner.gender.gender`
   * - `emailMessage.account.invoiceCountry.name`
   * - `emailMessage.account.invoiceCountry.alias`
   * - `emailMessage.account.invoiceCountry.parentCountryId`
   * - `emailMessage.account.invoiceCountry.type`
   * - `emailMessage.account.invoiceCountry.tld`
   * - `emailMessage.account.invoiceCountry.commonTld`
   * - `emailMessage.account.invoiceCountry.shortCode`
   * - `emailMessage.account.invoiceCountry.isoCode`
   * - `emailMessage.account.invoiceCountry.phonePrefix`
   * - `emailMessage.account.invoiceCountry.googleLocationName`
   * - `emailMessage.account.invoiceCountry.currency.isoCode`
   * - `emailMessage.account.invoiceCountry.currency.symbol`
   * - `emailMessage.account.invoiceCountry.currency.displaySymbolBeforeAmount`
   * - `emailMessage.account.invoiceCountry.vatRate`
   * - `emailMessage.account.invoiceCountry.euMember`
   * - `emailMessage.account.invoiceCountry.taxKey`
   * - `emailMessage.account.invoiceCountry.accountOfProceeds`
   * - `emailMessage.account.invoiceCountry.locale`
   * - `emailMessage.account.invoiceCountry.unitSystem`
   * - `emailMessage.account.invoiceCountry.timeSystem`
   * - `emailMessage.account.invoiceCountry.firstDayOfWeek`
   * - `emailMessage.account.invoiceCountry.addressFormat`
   * - `emailMessage.account.invoiceCountry.appDefaultLanguageCode`
   * - `emailMessage.account.invoiceCountry.nativeLanguageCode`
   * - `emailMessage.account.invoiceCountry.languageCode`
   * - `emailMessage.account.invoiceCountry.isActive`
   * - `emailMessage.account.invoiceCountry.priority`
   * - `emailMessage.account.invoiceCountry.setting.type`
   * - `emailMessage.account.invoiceCountry.setting.firstnameBeforeLastname`
   * - `emailMessage.account.invoiceCountry.setting.showTitleField`
   * - `emailMessage.account.invoiceCountry.setting.showCookieNotice`
   * - `emailMessage.account.invoiceCountry.setting.availableCreditCards`
   * - `emailMessage.account.invoiceCountry.setting.defaultTrialMode`
   * - `emailMessage.account.invoiceCountry.setting.isActiveForPartners`
   * - `emailMessage.account.invoiceCountry.addressSetting.type`
   * - `emailMessage.account.invoiceCountry.addressSetting.streetNoIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.streetIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.cityIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.stateIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.countyIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.subCountyIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.account.invoiceCountry.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.account.invoiceCountry.addressSetting.streetNoFormat`
   * - `emailMessage.account.invoiceCountry.addressSetting.addressFormat`
   * - `emailMessage.account.invoiceCountry.id`
   * - `emailMessage.account.invoiceCountryId`
   * - `emailMessage.account.resellerId`
   * - `emailMessage.account.affiliate.name`
   * - `emailMessage.account.affiliate.id`
   * - `emailMessage.account.apiAccountId`
   * - `emailMessage.account.parentAccountId`
   * - `emailMessage.account.isSandboxAccount`
   * - `emailMessage.account.isSpecialAccount`
   * - `emailMessage.account.type`
   * - `emailMessage.account.password`
   * - `emailMessage.account.billingCompany.legalEntity.name`
   * - `emailMessage.account.billingCompany.legalEntity.fullName`
   * - `emailMessage.account.billingCompany.legalEntity.type`
   * - `emailMessage.account.billingCompany.registrationNumber.number`
   * - `emailMessage.account.billingCompany.registrationNumber.commercialRegistryOffice`
   * - `emailMessage.account.billingCompany.taxIdentificationNumber.number`
   * - `emailMessage.account.billingCompany.vatId.vatId`
   * - `emailMessage.account.billingCompany.doingBusinessAsName`
   * - `emailMessage.account.billingAddress.premise`
   * - `emailMessage.account.billingAddress.subpremise`
   * - `emailMessage.account.billingAddress.streetNo`
   * - `emailMessage.account.billingAddress.street`
   * - `emailMessage.account.billingAddress.addressLine1`
   * - `emailMessage.account.billingAddress.addressLine2`
   * - `emailMessage.account.billingAddress.postalCode`
   * - `emailMessage.account.billingAddress.postalCodeSuffix`
   * - `emailMessage.account.billingAddress.sublocality`
   * - `emailMessage.account.billingAddress.city.name`
   * - `emailMessage.account.billingAddress.city.alias`
   * - `emailMessage.account.billingAddress.city.stateId`
   * - `emailMessage.account.billingAddress.city.countryId`
   * - `emailMessage.account.billingAddress.city.languageCode`
   * - `emailMessage.account.billingAddress.city.geoPoint.lat`
   * - `emailMessage.account.billingAddress.city.geoPoint.lng`
   * - `emailMessage.account.billingAddress.city.hasCoordinates`
   * - `emailMessage.account.billingAddress.city.branchCount`
   * - `emailMessage.account.billingAddress.city.id`
   * - `emailMessage.account.billingAddress.city.created`
   * - `emailMessage.account.billingAddress.city.updated`
   * - `emailMessage.account.billingAddress.subCounty.name`
   * - `emailMessage.account.billingAddress.subCounty.shortCode`
   * - `emailMessage.account.billingAddress.county.name`
   * - `emailMessage.account.billingAddress.county.shortCode`
   * - `emailMessage.account.billingAddress.state.name`
   * - `emailMessage.account.billingAddress.state.alias`
   * - `emailMessage.account.billingAddress.state.shortCode`
   * - `emailMessage.account.billingAddress.state.countryId`
   * - `emailMessage.account.billingAddress.state.id`
   * - `emailMessage.account.billingAddress.country.name`
   * - `emailMessage.account.billingAddress.country.alias`
   * - `emailMessage.account.billingAddress.country.parentCountryId`
   * - `emailMessage.account.billingAddress.country.type`
   * - `emailMessage.account.billingAddress.country.tld`
   * - `emailMessage.account.billingAddress.country.commonTld`
   * - `emailMessage.account.billingAddress.country.shortCode`
   * - `emailMessage.account.billingAddress.country.isoCode`
   * - `emailMessage.account.billingAddress.country.phonePrefix`
   * - `emailMessage.account.billingAddress.country.googleLocationName`
   * - `emailMessage.account.billingAddress.country.currency.isoCode`
   * - `emailMessage.account.billingAddress.country.currency.symbol`
   * - `emailMessage.account.billingAddress.country.currency.displaySymbolBeforeAmount`
   * - `emailMessage.account.billingAddress.country.vatRate`
   * - `emailMessage.account.billingAddress.country.euMember`
   * - `emailMessage.account.billingAddress.country.taxKey`
   * - `emailMessage.account.billingAddress.country.accountOfProceeds`
   * - `emailMessage.account.billingAddress.country.locale`
   * - `emailMessage.account.billingAddress.country.unitSystem`
   * - `emailMessage.account.billingAddress.country.timeSystem`
   * - `emailMessage.account.billingAddress.country.firstDayOfWeek`
   * - `emailMessage.account.billingAddress.country.addressFormat`
   * - `emailMessage.account.billingAddress.country.appDefaultLanguageCode`
   * - `emailMessage.account.billingAddress.country.nativeLanguageCode`
   * - `emailMessage.account.billingAddress.country.languageCode`
   * - `emailMessage.account.billingAddress.country.isActive`
   * - `emailMessage.account.billingAddress.country.priority`
   * - `emailMessage.account.billingAddress.country.setting.type`
   * - `emailMessage.account.billingAddress.country.setting.firstnameBeforeLastname`
   * - `emailMessage.account.billingAddress.country.setting.showTitleField`
   * - `emailMessage.account.billingAddress.country.setting.showCookieNotice`
   * - `emailMessage.account.billingAddress.country.setting.availableCreditCards`
   * - `emailMessage.account.billingAddress.country.setting.defaultTrialMode`
   * - `emailMessage.account.billingAddress.country.setting.isActiveForPartners`
   * - `emailMessage.account.billingAddress.country.addressSetting.type`
   * - `emailMessage.account.billingAddress.country.addressSetting.streetNoIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.streetIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.cityIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.stateIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.countyIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.subCountyIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.account.billingAddress.country.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.account.billingAddress.country.addressSetting.streetNoFormat`
   * - `emailMessage.account.billingAddress.country.addressSetting.addressFormat`
   * - `emailMessage.account.billingAddress.country.id`
   * - `emailMessage.account.billingAddress.geoPoint.lat`
   * - `emailMessage.account.billingAddress.geoPoint.lng`
   * - `emailMessage.account.billingAddress.customerSelectedGeoPoint.lat`
   * - `emailMessage.account.billingAddress.customerSelectedGeoPoint.lng`
   * - `emailMessage.account.billingAddress.geoBounds.northeast.lat`
   * - `emailMessage.account.billingAddress.geoBounds.northeast.lng`
   * - `emailMessage.account.billingAddress.geoBounds.southwest.lat`
   * - `emailMessage.account.billingAddress.geoBounds.southwest.lng`
   * - `emailMessage.account.billingAddress.formattedAddress`
   * - `emailMessage.account.billingAddress.languageCode`
   * - `emailMessage.account.billingAddress.displayAddress`
   * - `emailMessage.account.billingAddress.inputAddress`
   * - `emailMessage.account.billingAddress.precision`
   * - `emailMessage.account.languageCode`
   * - `emailMessage.account.totalNumberOfActiveProjects`
   * - `emailMessage.account.email`
   * - `emailMessage.account.id`
   * - `emailMessage.partnerCompanySetting.company.legalEntity.name`
   * - `emailMessage.partnerCompanySetting.company.legalEntity.fullName`
   * - `emailMessage.partnerCompanySetting.company.legalEntity.type`
   * - `emailMessage.partnerCompanySetting.company.registrationNumber.number`
   * - `emailMessage.partnerCompanySetting.company.registrationNumber.commercialRegistryOffice`
   * - `emailMessage.partnerCompanySetting.company.taxIdentificationNumber.number`
   * - `emailMessage.partnerCompanySetting.company.vatId.vatId`
   * - `emailMessage.partnerCompanySetting.company.doingBusinessAsName`
   * - `emailMessage.partnerCompanySetting.footerLegalData`
   * - `emailMessage.partnerCompanySetting.address.premise`
   * - `emailMessage.partnerCompanySetting.address.subpremise`
   * - `emailMessage.partnerCompanySetting.address.streetNo`
   * - `emailMessage.partnerCompanySetting.address.street`
   * - `emailMessage.partnerCompanySetting.address.addressLine1`
   * - `emailMessage.partnerCompanySetting.address.addressLine2`
   * - `emailMessage.partnerCompanySetting.address.postalCode`
   * - `emailMessage.partnerCompanySetting.address.postalCodeSuffix`
   * - `emailMessage.partnerCompanySetting.address.sublocality`
   * - `emailMessage.partnerCompanySetting.address.city.name`
   * - `emailMessage.partnerCompanySetting.address.city.alias`
   * - `emailMessage.partnerCompanySetting.address.city.stateId`
   * - `emailMessage.partnerCompanySetting.address.city.countryId`
   * - `emailMessage.partnerCompanySetting.address.city.languageCode`
   * - `emailMessage.partnerCompanySetting.address.city.geoPoint.lat`
   * - `emailMessage.partnerCompanySetting.address.city.geoPoint.lng`
   * - `emailMessage.partnerCompanySetting.address.city.hasCoordinates`
   * - `emailMessage.partnerCompanySetting.address.city.branchCount`
   * - `emailMessage.partnerCompanySetting.address.city.id`
   * - `emailMessage.partnerCompanySetting.address.city.created`
   * - `emailMessage.partnerCompanySetting.address.city.updated`
   * - `emailMessage.partnerCompanySetting.address.subCounty.name`
   * - `emailMessage.partnerCompanySetting.address.subCounty.shortCode`
   * - `emailMessage.partnerCompanySetting.address.county.name`
   * - `emailMessage.partnerCompanySetting.address.county.shortCode`
   * - `emailMessage.partnerCompanySetting.address.state.name`
   * - `emailMessage.partnerCompanySetting.address.state.alias`
   * - `emailMessage.partnerCompanySetting.address.state.shortCode`
   * - `emailMessage.partnerCompanySetting.address.state.countryId`
   * - `emailMessage.partnerCompanySetting.address.state.id`
   * - `emailMessage.partnerCompanySetting.address.country.name`
   * - `emailMessage.partnerCompanySetting.address.country.alias`
   * - `emailMessage.partnerCompanySetting.address.country.parentCountryId`
   * - `emailMessage.partnerCompanySetting.address.country.type`
   * - `emailMessage.partnerCompanySetting.address.country.tld`
   * - `emailMessage.partnerCompanySetting.address.country.commonTld`
   * - `emailMessage.partnerCompanySetting.address.country.shortCode`
   * - `emailMessage.partnerCompanySetting.address.country.isoCode`
   * - `emailMessage.partnerCompanySetting.address.country.phonePrefix`
   * - `emailMessage.partnerCompanySetting.address.country.googleLocationName`
   * - `emailMessage.partnerCompanySetting.address.country.currency.isoCode`
   * - `emailMessage.partnerCompanySetting.address.country.currency.symbol`
   * - `emailMessage.partnerCompanySetting.address.country.currency.displaySymbolBeforeAmount`
   * - `emailMessage.partnerCompanySetting.address.country.vatRate`
   * - `emailMessage.partnerCompanySetting.address.country.euMember`
   * - `emailMessage.partnerCompanySetting.address.country.taxKey`
   * - `emailMessage.partnerCompanySetting.address.country.accountOfProceeds`
   * - `emailMessage.partnerCompanySetting.address.country.locale`
   * - `emailMessage.partnerCompanySetting.address.country.unitSystem`
   * - `emailMessage.partnerCompanySetting.address.country.timeSystem`
   * - `emailMessage.partnerCompanySetting.address.country.firstDayOfWeek`
   * - `emailMessage.partnerCompanySetting.address.country.addressFormat`
   * - `emailMessage.partnerCompanySetting.address.country.appDefaultLanguageCode`
   * - `emailMessage.partnerCompanySetting.address.country.nativeLanguageCode`
   * - `emailMessage.partnerCompanySetting.address.country.languageCode`
   * - `emailMessage.partnerCompanySetting.address.country.isActive`
   * - `emailMessage.partnerCompanySetting.address.country.priority`
   * - `emailMessage.partnerCompanySetting.address.country.setting.type`
   * - `emailMessage.partnerCompanySetting.address.country.setting.firstnameBeforeLastname`
   * - `emailMessage.partnerCompanySetting.address.country.setting.showTitleField`
   * - `emailMessage.partnerCompanySetting.address.country.setting.showCookieNotice`
   * - `emailMessage.partnerCompanySetting.address.country.setting.availableCreditCards`
   * - `emailMessage.partnerCompanySetting.address.country.setting.defaultTrialMode`
   * - `emailMessage.partnerCompanySetting.address.country.setting.isActiveForPartners`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.type`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.streetNoIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.streetIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.cityIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.stateIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.countyIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.subCountyIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.streetNoFormat`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.addressFormat`
   * - `emailMessage.partnerCompanySetting.address.country.id`
   * - `emailMessage.partnerCompanySetting.address.geoPoint.lat`
   * - `emailMessage.partnerCompanySetting.address.geoPoint.lng`
   * - `emailMessage.partnerCompanySetting.address.customerSelectedGeoPoint.lat`
   * - `emailMessage.partnerCompanySetting.address.customerSelectedGeoPoint.lng`
   * - `emailMessage.partnerCompanySetting.address.geoBounds.northeast.lat`
   * - `emailMessage.partnerCompanySetting.address.geoBounds.northeast.lng`
   * - `emailMessage.partnerCompanySetting.address.geoBounds.southwest.lat`
   * - `emailMessage.partnerCompanySetting.address.geoBounds.southwest.lng`
   * - `emailMessage.partnerCompanySetting.address.formattedAddress`
   * - `emailMessage.partnerCompanySetting.address.languageCode`
   * - `emailMessage.partnerCompanySetting.address.displayAddress`
   * - `emailMessage.partnerCompanySetting.address.inputAddress`
   * - `emailMessage.partnerCompanySetting.address.precision`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.instagram`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.facebook`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.youtube`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.twitter`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.tiktok`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.linkedin`
   * - `emailMessage.partnerCompanySetting.websiteURLs.legalDataURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.termsAndConditionsURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.customerSupportURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.manageNotificationURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.privacyURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.blogOrNewsURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.aboutURL`
   * - `emailMessage.productThemeSetting.logo.publicUrl`
   * - `emailMessage.productThemeSetting.logo.description`
   * - `emailMessage.productThemeSetting.logo.type`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.base64EncodedContent`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.height`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.width`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.fileSize`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.fileFormat`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.body`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.name`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.compression`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.externalId`
   * - `emailMessage.productThemeSetting.primaryShades.displayPrefix`
   * - `emailMessage.productThemeSetting.secondaryShades.displayPrefix`
   * - `emailMessage.partnerEmailSetting.sendReports`
   * - `emailMessage.partnerEmailSetting.sender.name`
   * - `emailMessage.partnerEmailSetting.sender.email`
   * - `emailMessage.partnerEmailSetting.mediaRootUrl`
   * - `emailMessage.partnerEmailSetting.customDomain`
   * - `emailMessage.partnerEmailSetting.useProductNameAsSenderName`
   * - `emailMessage.partnerEmailSetting.passIntercomMailsThroughTemplatingSystem`
   * - `emailMessage.partnerEmailSetting.sendIntercomActivationCampaign`
   * - `emailMessage.partnerProductSetting.additionalLicenseFee`
   * - `emailMessage.partnerProductSetting.initialSetupFee`
   * - `emailMessage.partnerProductSetting.initialSetupFeeInclVat`
   * - `emailMessage.partnerProductSetting.billOnlyIfSetupCompleted`
   * - `emailMessage.partnerProductSetting.useInvoiceCountryCurrencyForBilling`
   * - `emailMessage.partnerProductSetting.logoutUrl`
   * - `emailMessage.partnerProductSetting.productUrl`
   * - `emailMessage.partnerProductSetting.redirectLoggedInAccountsToApplication`
   * - `emailMessage.partnerProductSetting.partnerSubbrand`
   * - `emailMessage.partnerProductSetting.customSupportSystemType`
   * - `emailMessage.partnerProductSetting.billOnlyIfSetupCompletedRuleAppliedAfterDate`
   * - `emailMessage.partnerProductSetting.externalId`
   * - `emailMessage.partnerProductSetting.disableDefaultReviewsReplySuggestions`
   * - `emailMessage.mjmlContent.content`
   * - `emailMessage.htmlContent.content`
   * - `emailMessage.from.name`
   * - `emailMessage.from.email`
   * - `emailMessage.subject`
   * - `emailMessage.campaignId`
   * - `handlingError`
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
   * - `customerEmail`
   * - `customerName`
   * - `isOptIn`
   * - `status`
   * - `sendAt`
   * - `locationReviewRequestId`
   * - `locationId`
   * - `isActive`
   * - `writingStyle`
   * - `emailMessage.location.businessId`
   * - `emailMessage.location.company.legalEntity.name`
   * - `emailMessage.location.company.legalEntity.fullName`
   * - `emailMessage.location.company.legalEntity.type`
   * - `emailMessage.location.company.registrationNumber.number`
   * - `emailMessage.location.company.registrationNumber.commercialRegistryOffice`
   * - `emailMessage.location.company.taxIdentificationNumber.number`
   * - `emailMessage.location.company.vatId.vatId`
   * - `emailMessage.location.company.doingBusinessAsName`
   * - `emailMessage.location.address.premise`
   * - `emailMessage.location.address.subpremise`
   * - `emailMessage.location.address.streetNo`
   * - `emailMessage.location.address.street`
   * - `emailMessage.location.address.addressLine1`
   * - `emailMessage.location.address.addressLine2`
   * - `emailMessage.location.address.postalCode`
   * - `emailMessage.location.address.postalCodeSuffix`
   * - `emailMessage.location.address.sublocality`
   * - `emailMessage.location.address.city.name`
   * - `emailMessage.location.address.city.alias`
   * - `emailMessage.location.address.city.stateId`
   * - `emailMessage.location.address.city.countryId`
   * - `emailMessage.location.address.city.languageCode`
   * - `emailMessage.location.address.city.geoPoint.lat`
   * - `emailMessage.location.address.city.geoPoint.lng`
   * - `emailMessage.location.address.city.hasCoordinates`
   * - `emailMessage.location.address.city.branchCount`
   * - `emailMessage.location.address.city.id`
   * - `emailMessage.location.address.city.created`
   * - `emailMessage.location.address.city.updated`
   * - `emailMessage.location.address.subCounty.name`
   * - `emailMessage.location.address.subCounty.shortCode`
   * - `emailMessage.location.address.county.name`
   * - `emailMessage.location.address.county.shortCode`
   * - `emailMessage.location.address.state.name`
   * - `emailMessage.location.address.state.alias`
   * - `emailMessage.location.address.state.shortCode`
   * - `emailMessage.location.address.state.countryId`
   * - `emailMessage.location.address.state.id`
   * - `emailMessage.location.address.country.name`
   * - `emailMessage.location.address.country.alias`
   * - `emailMessage.location.address.country.parentCountryId`
   * - `emailMessage.location.address.country.type`
   * - `emailMessage.location.address.country.tld`
   * - `emailMessage.location.address.country.commonTld`
   * - `emailMessage.location.address.country.shortCode`
   * - `emailMessage.location.address.country.isoCode`
   * - `emailMessage.location.address.country.phonePrefix`
   * - `emailMessage.location.address.country.googleLocationName`
   * - `emailMessage.location.address.country.currency.isoCode`
   * - `emailMessage.location.address.country.currency.symbol`
   * - `emailMessage.location.address.country.currency.displaySymbolBeforeAmount`
   * - `emailMessage.location.address.country.vatRate`
   * - `emailMessage.location.address.country.euMember`
   * - `emailMessage.location.address.country.taxKey`
   * - `emailMessage.location.address.country.accountOfProceeds`
   * - `emailMessage.location.address.country.locale`
   * - `emailMessage.location.address.country.unitSystem`
   * - `emailMessage.location.address.country.timeSystem`
   * - `emailMessage.location.address.country.firstDayOfWeek`
   * - `emailMessage.location.address.country.addressFormat`
   * - `emailMessage.location.address.country.appDefaultLanguageCode`
   * - `emailMessage.location.address.country.nativeLanguageCode`
   * - `emailMessage.location.address.country.languageCode`
   * - `emailMessage.location.address.country.isActive`
   * - `emailMessage.location.address.country.priority`
   * - `emailMessage.location.address.country.setting.type`
   * - `emailMessage.location.address.country.setting.firstnameBeforeLastname`
   * - `emailMessage.location.address.country.setting.showTitleField`
   * - `emailMessage.location.address.country.setting.showCookieNotice`
   * - `emailMessage.location.address.country.setting.availableCreditCards`
   * - `emailMessage.location.address.country.setting.defaultTrialMode`
   * - `emailMessage.location.address.country.setting.isActiveForPartners`
   * - `emailMessage.location.address.country.addressSetting.type`
   * - `emailMessage.location.address.country.addressSetting.streetNoIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.streetIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.cityIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.stateIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.countyIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.subCountyIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.location.address.country.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.location.address.country.addressSetting.streetNoFormat`
   * - `emailMessage.location.address.country.addressSetting.addressFormat`
   * - `emailMessage.location.address.country.id`
   * - `emailMessage.location.address.geoPoint.lat`
   * - `emailMessage.location.address.geoPoint.lng`
   * - `emailMessage.location.address.customerSelectedGeoPoint.lat`
   * - `emailMessage.location.address.customerSelectedGeoPoint.lng`
   * - `emailMessage.location.address.geoBounds.northeast.lat`
   * - `emailMessage.location.address.geoBounds.northeast.lng`
   * - `emailMessage.location.address.geoBounds.southwest.lat`
   * - `emailMessage.location.address.geoBounds.southwest.lng`
   * - `emailMessage.location.address.formattedAddress`
   * - `emailMessage.location.address.languageCode`
   * - `emailMessage.location.address.displayAddress`
   * - `emailMessage.location.address.inputAddress`
   * - `emailMessage.location.address.precision`
   * - `emailMessage.location.languageCode`
   * - `emailMessage.location.description.long`
   * - `emailMessage.location.description.short`
   * - `emailMessage.location.description.shortDescriptionMaxLength`
   * - `emailMessage.location.description.longDescriptionMaxLength`
   * - `emailMessage.location.isLocallyFocused`
   * - `emailMessage.location.serviceAreaType`
   * - `emailMessage.location.radius`
   * - `emailMessage.location.websiteId`
   * - `emailMessage.location.name`
   * - `emailMessage.location.seo.rankingsBusiness.domain.name`
   * - `emailMessage.location.seo.rankingsBusiness.domain.path`
   * - `emailMessage.location.seo.rankingsBusiness.domain.needsWww`
   * - `emailMessage.location.seo.rankingsBusiness.domain.needsHttps`
   * - `emailMessage.location.seo.rankingsBusiness.domain.excludePathInPageUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.unknownProtocol`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.status`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.isValid`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.validateWithoutProtocol`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.needsWww`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.needsNoWww`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.needsHttps`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.httpCode`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.contentLength`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.wordsCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.redirectCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.retryCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.initialUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.redirectUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.retryUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.filteredUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.timeout`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.countryShortCode`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.validationMode`
   * - `emailMessage.location.seo.rankingsBusiness.domain.content.content`
   * - `emailMessage.location.seo.rankingsBusiness.domain.content.objectiveSummary.objectiveSummaryText`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.domain`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.insufficientFundsIncidentCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.intentionalFailedPaymentIncidentCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.isCommonDomain`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.phishingTargetId`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.commonDomainRiskScore`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.id`
   * - `emailMessage.location.seo.rankingsBusiness.domain.id`
   * - `emailMessage.location.seo.rankingsBusiness.googleMapsId`
   * - `emailMessage.location.settings.googleConnection.connectionToken.tokenSetupState`
   * - `emailMessage.location.settings.googleConnection.connectionToken.expiresAt`
   * - `emailMessage.location.settings.googleConnection.connectionToken.issuedAt`
   * - `emailMessage.location.settings.googleConnection.connectionToken.token`
   * - `emailMessage.location.settings.googleConnection.connectionToken.refreshToken`
   * - `emailMessage.location.settings.googleConnection.connectionToken.apiScope`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.id`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.email`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.emailVerified`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.fullName`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.profilePicture`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.locale`
   * - `emailMessage.location.settings.googleConnection.connectionToken.locationInfo.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.googleConnection.connectionToken.locationInfo.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.googleConnection.connectionToken.locationInfo.googleIds.googleMapsId`
   * - `emailMessage.location.settings.googleConnection.connectionToken.locationInfo.locale`
   * - `emailMessage.location.settings.googleConnection.connectionToken.isActive`
   * - `emailMessage.location.settings.googleConnection.googleTokenConnectFlowInitUrl`
   * - `emailMessage.location.settings.googleConnection.connectionState`
   * - `emailMessage.location.settings.googleConnection.connectionType`
   * - `emailMessage.location.settings.googleConnection.profileState`
   * - `emailMessage.location.settings.googleConnection.syncState`
   * - `emailMessage.location.settings.googleConnection.prevConnectedExternalId`
   * - `emailMessage.location.settings.googleConnection.syncSettings.syncLocation`
   * - `emailMessage.location.settings.googleConnection.syncSettings.syncRequirementsSatisfied`
   * - `emailMessage.location.settings.googleConnection.syncSettings.syncLogoAndMainPhoto`
   * - `emailMessage.location.settings.googleConnection.syncSettings.syncGallery`
   * - `emailMessage.location.settings.googleConnection.syncSettings.lastSyncDate`
   * - `emailMessage.location.settings.googleConnection.syncSettings.numberOfSyncs`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.postalAddress`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.contactInfos`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.openingHours`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.website`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.company`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.categories`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.description`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.mediaitems`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.locationServiceAreas`
   * - `emailMessage.location.settings.googleConnection.throttleTimeLeft`
   * - `emailMessage.location.settings.googleConnection.profile.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.googleConnection.profile.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.googleConnection.profile.googleIds.googleMapsId`
   * - `emailMessage.location.settings.googleConnection.profile.googleMapsUrl`
   * - `emailMessage.location.settings.googleConnection.profile.newReviewUrl`
   * - `emailMessage.location.settings.googleConnection.profile.placesSearchForPotentialProfileTriedOnce`
   * - `emailMessage.location.settings.googleConnection.lastConnectionDate`
   * - `emailMessage.location.settings.uberallConnection.connectionState`
   * - `emailMessage.location.settings.uberallConnection.connectionType`
   * - `emailMessage.location.settings.uberallConnection.profileState`
   * - `emailMessage.location.settings.uberallConnection.syncState`
   * - `emailMessage.location.settings.uberallConnection.prevConnectedExternalId`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.syncLocation`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.syncRequirementsSatisfied`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.syncLogoAndMainPhoto`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.syncGallery`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.lastSyncDate`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.numberOfSyncs`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.postalAddress`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.contactInfos`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.openingHours`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.website`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.company`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.categories`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.description`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.mediaitems`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.locationServiceAreas`
   * - `emailMessage.location.settings.uberallConnection.throttleTimeLeft`
   * - `emailMessage.location.settings.uberallConnection.profile.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.uberallConnection.profile.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.uberallConnection.profile.googleIds.googleMapsId`
   * - `emailMessage.location.settings.uberallConnection.profile.googleMapsUrl`
   * - `emailMessage.location.settings.uberallConnection.profile.newReviewUrl`
   * - `emailMessage.location.settings.uberallConnection.profile.placesSearchForPotentialProfileTriedOnce`
   * - `emailMessage.location.settings.uberallConnection.lastConnectionDate`
   * - `emailMessage.location.settings.yextConnection.connectionState`
   * - `emailMessage.location.settings.yextConnection.connectionType`
   * - `emailMessage.location.settings.yextConnection.profileState`
   * - `emailMessage.location.settings.yextConnection.syncState`
   * - `emailMessage.location.settings.yextConnection.prevConnectedExternalId`
   * - `emailMessage.location.settings.yextConnection.syncSettings.syncLocation`
   * - `emailMessage.location.settings.yextConnection.syncSettings.syncRequirementsSatisfied`
   * - `emailMessage.location.settings.yextConnection.syncSettings.syncLogoAndMainPhoto`
   * - `emailMessage.location.settings.yextConnection.syncSettings.syncGallery`
   * - `emailMessage.location.settings.yextConnection.syncSettings.lastSyncDate`
   * - `emailMessage.location.settings.yextConnection.syncSettings.numberOfSyncs`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.postalAddress`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.contactInfos`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.openingHours`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.website`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.company`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.categories`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.description`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.mediaitems`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.locationServiceAreas`
   * - `emailMessage.location.settings.yextConnection.throttleTimeLeft`
   * - `emailMessage.location.settings.yextConnection.profile.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.yextConnection.profile.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.yextConnection.profile.googleIds.googleMapsId`
   * - `emailMessage.location.settings.yextConnection.profile.googleMapsUrl`
   * - `emailMessage.location.settings.yextConnection.profile.newReviewUrl`
   * - `emailMessage.location.settings.yextConnection.profile.placesSearchForPotentialProfileTriedOnce`
   * - `emailMessage.location.settings.yextConnection.lastConnectionDate`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.accessTokenState`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.expiresAt`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.issuedAt`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.isActive`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.isValid`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.isConnectedWithInstagram`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.tokenLifetime`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.token`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.apiScopes`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.id`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.profilePicture`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.lastName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.firstName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.title`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.academicTitle`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.jobTitle`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.gender.gender`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.locationId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.locationName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.primaryPhone`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.websiteUrl`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.primaryCategoryName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.languageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.premise`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.subpremise`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.streetNo`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.street`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.addressLine1`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.addressLine2`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.postalCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.postalCodeSuffix`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.sublocality`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.alias`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.stateId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.countryId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.languageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.geoPoint.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.geoPoint.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.hasCoordinates`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.branchCount`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.id`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.created`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.updated`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.subCounty.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.subCounty.shortCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.county.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.county.shortCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.alias`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.shortCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.countryId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.id`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.alias`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.parentCountryId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.type`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.tld`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.commonTld`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.shortCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.isoCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.phonePrefix`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.googleLocationName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.currency.isoCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.currency.symbol`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.currency.displaySymbolBeforeAmount`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.vatRate`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.euMember`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.taxKey`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.accountOfProceeds`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.locale`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.unitSystem`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.timeSystem`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.firstDayOfWeek`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressFormat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.appDefaultLanguageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.nativeLanguageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.languageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.isActive`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.priority`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.type`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.firstnameBeforeLastname`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.showTitleField`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.showCookieNotice`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.availableCreditCards`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.defaultTrialMode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.isActiveForPartners`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.type`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.streetNoIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.streetIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.cityIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.stateIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.countyIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.subCountyIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.streetNoFormat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.addressFormat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.id`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoPoint.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoPoint.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.customerSelectedGeoPoint.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.customerSelectedGeoPoint.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoBounds.northeast.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoBounds.northeast.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoBounds.southwest.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoBounds.southwest.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.formattedAddress`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.languageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.displayAddress`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.inputAddress`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.precision`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.locationUrl`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.locationProfilePictureUrl`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.pageToken`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.hasBaseScopes`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.hasInstagramScopes`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.hasBoostsScopes`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.hasBusinessManagrScopes`
   * - `emailMessage.location.settings.facebookConnection.facebookTokenConnectFlowInitUrl`
   * - `emailMessage.location.settings.facebookConnection.connectionState`
   * - `emailMessage.location.settings.facebookConnection.connectionType`
   * - `emailMessage.location.settings.facebookConnection.profileState`
   * - `emailMessage.location.settings.facebookConnection.syncState`
   * - `emailMessage.location.settings.facebookConnection.prevConnectedExternalId`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.syncLocation`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.syncRequirementsSatisfied`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.syncLogoAndMainPhoto`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.syncGallery`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.lastSyncDate`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.numberOfSyncs`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.postalAddress`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.contactInfos`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.openingHours`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.website`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.company`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.categories`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.description`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.mediaitems`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.locationServiceAreas`
   * - `emailMessage.location.settings.facebookConnection.throttleTimeLeft`
   * - `emailMessage.location.settings.facebookConnection.profile.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.facebookConnection.profile.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.facebookConnection.profile.googleIds.googleMapsId`
   * - `emailMessage.location.settings.facebookConnection.profile.googleMapsUrl`
   * - `emailMessage.location.settings.facebookConnection.profile.newReviewUrl`
   * - `emailMessage.location.settings.facebookConnection.profile.placesSearchForPotentialProfileTriedOnce`
   * - `emailMessage.location.settings.facebookConnection.lastConnectionDate`
   * - `emailMessage.location.settings.tasksSettings.reassignTasks`
   * - `emailMessage.location.settings.tasksSettings.initiallyValidated`
   * - `emailMessage.location.reputation.totalReviews`
   * - `emailMessage.location.reputation.averageRating`
   * - `emailMessage.location.reputation.reviewsWithoutReplies`
   * - `emailMessage.location.reputation.reputationScores.reputationScore.weight`
   * - `emailMessage.location.reputation.reputationScores.reputationScore.score`
   * - `emailMessage.location.reputation.reputationScores.averageRatingScore.averageRating`
   * - `emailMessage.location.reputation.reputationScores.averageRatingScore.weight`
   * - `emailMessage.location.reputation.reputationScores.averageRatingScore.score`
   * - `emailMessage.location.reputation.reputationScores.totalReviewsScore.totalReviews`
   * - `emailMessage.location.reputation.reputationScores.totalReviewsScore.weight`
   * - `emailMessage.location.reputation.reputationScores.totalReviewsScore.score`
   * - `emailMessage.location.reputation.reputationScores.repliesRateScore.reviewsRepliesPercentage`
   * - `emailMessage.location.reputation.reputationScores.repliesRateScore.weight`
   * - `emailMessage.location.reputation.reputationScores.repliesRateScore.score`
   * - `emailMessage.location.reputation.reputationScores.reviewsLengthScore.averageReviewsLength`
   * - `emailMessage.location.reputation.reputationScores.reviewsLengthScore.weight`
   * - `emailMessage.location.reputation.reputationScores.reviewsLengthScore.score`
   * - `emailMessage.location.reputation.reputationScores.reviewsRecencyScore.averageReviewsRecency`
   * - `emailMessage.location.reputation.reputationScores.reviewsRecencyScore.weight`
   * - `emailMessage.location.reputation.reputationScores.reviewsRecencyScore.score`
   * - `emailMessage.location.reputation.reputationScores.id`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithOneStar`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithTwoStars`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithThreeStars`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithFourStars`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithFiveStars`
   * - `emailMessage.location.reputation.reviewsDistribution.badReviews`
   * - `emailMessage.location.reputation.reviewsDistribution.neutralReviews`
   * - `emailMessage.location.reputation.reviewsDistribution.goodReviews`
   * - `emailMessage.location.reputation.reviewsDistribution.totalReviews`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithOneStar`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithTwoStars`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithThreeStars`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithFourStars`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithFiveStars`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.badReviews`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.neutralReviews`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.goodReviews`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.totalReviews`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithOneStar`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithTwoStars`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithThreeStars`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithFourStars`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithFiveStars`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.badReviews`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.neutralReviews`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.goodReviews`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.totalReviews`
   * - `emailMessage.location.reputation.hasReviews`
   * - `emailMessage.location.engagement.postsSummary.totalCount`
   * - `emailMessage.location.engagement.postsSummary.scheduledCount`
   * - `emailMessage.location.engagement.postsSummary.publishedCount`
   * - `emailMessage.location.engagement.postsSummary.publishingCount`
   * - `emailMessage.location.engagement.postsSummary.notApprovedCount`
   * - `emailMessage.location.engagement.postsSummary.draftCount`
   * - `emailMessage.location.engagement.postsSummary.errorCount`
   * - `emailMessage.location.engagement.eventsSummary.pendingVerificationCount`
   * - `emailMessage.location.engagement.eventsSummary.pastCount`
   * - `emailMessage.location.engagement.eventsSummary.totalCount`
   * - `emailMessage.location.engagement.eventsSummary.scheduledCount`
   * - `emailMessage.location.engagement.eventsSummary.publishedCount`
   * - `emailMessage.location.engagement.eventsSummary.publishingCount`
   * - `emailMessage.location.engagement.eventsSummary.notApprovedCount`
   * - `emailMessage.location.engagement.eventsSummary.draftCount`
   * - `emailMessage.location.engagement.eventsSummary.errorCount`
   * - `emailMessage.location.id`
   * - `emailMessage.location.created`
   * - `emailMessage.location.updated`
   * - `emailMessage.project.accountId`
   * - `emailMessage.project.status`
   * - `emailMessage.project.settings.setup.featureFlagSetting.allowedCountryShortCodes`
   * - `emailMessage.project.settings.setup.featureFlagSetting.lockCountrySelectionAfterSetup`
   * - `emailMessage.project.settings.setup.featureFlagSetting.allowProjectPrefill`
   * - `emailMessage.project.settings.setup.featureFlagSetting.stepsToHide`
   * - `emailMessage.project.settings.setup.featureFlagSetting.notAllowAnyUpsellTriggersForType`
   * - `emailMessage.project.settings.setup.featureFlagSetting.allowUserToChangeDomain`
   * - `emailMessage.project.settings.setup.keywordsFeatureFlagSetting.keywordsAvailable`
   * - `emailMessage.project.settings.setup.locationsFeatureFlagSetting.locationsAvailable`
   * - `emailMessage.project.settings.setup.competitorsFeatureFlagSetting.competitorsAvailable`
   * - `emailMessage.project.settings.seo.seoRankingsFeatureFlagSetting.keywordsDisplayed`
   * - `emailMessage.project.settings.seo.displayKeywordVisibilityComparison`
   * - `emailMessage.project.settings.seo.displayTopKeywords`
   * - `emailMessage.project.settings.seo.hasCustomCMSTypeOrder`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMin.currency.isoCode`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMin.currency.symbol`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMin.currency.displaySymbolBeforeAmount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMin.amount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMax.currency.isoCode`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMax.currency.symbol`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMax.currency.displaySymbolBeforeAmount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMax.amount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMin.currency.isoCode`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMin.currency.symbol`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMin.currency.displaySymbolBeforeAmount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMin.amount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMax.currency.isoCode`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMax.currency.symbol`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMax.currency.displaySymbolBeforeAmount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMax.amount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.isPreviewFeatureFlagSetting`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.durationOfInitialBudgetRestrictions`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.handlingFee.appliedAfter`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.handlingFee.ownShare`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.handlingFee.resellerShare`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.voucherDistributionMethod`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.voucherDistributionMethodStartDate`
   * - `emailMessage.project.settings.presence.analysis`
   * - `emailMessage.project.settings.rights.delete`
   * - `emailMessage.project.settings.rights.update`
   * - `emailMessage.project.settings.aiBudget.aiBudgetFeatureFlagSetting.monthlyAIBudgetPerProjectInUSD`
   * - `emailMessage.project.id`
   * - `emailMessage.project.created`
   * - `emailMessage.project.updated`
   * - `emailMessage.account.status`
   * - `emailMessage.account.owner.lastName`
   * - `emailMessage.account.owner.firstName`
   * - `emailMessage.account.owner.title`
   * - `emailMessage.account.owner.academicTitle`
   * - `emailMessage.account.owner.jobTitle`
   * - `emailMessage.account.owner.gender.gender`
   * - `emailMessage.account.invoiceCountry.name`
   * - `emailMessage.account.invoiceCountry.alias`
   * - `emailMessage.account.invoiceCountry.parentCountryId`
   * - `emailMessage.account.invoiceCountry.type`
   * - `emailMessage.account.invoiceCountry.tld`
   * - `emailMessage.account.invoiceCountry.commonTld`
   * - `emailMessage.account.invoiceCountry.shortCode`
   * - `emailMessage.account.invoiceCountry.isoCode`
   * - `emailMessage.account.invoiceCountry.phonePrefix`
   * - `emailMessage.account.invoiceCountry.googleLocationName`
   * - `emailMessage.account.invoiceCountry.currency.isoCode`
   * - `emailMessage.account.invoiceCountry.currency.symbol`
   * - `emailMessage.account.invoiceCountry.currency.displaySymbolBeforeAmount`
   * - `emailMessage.account.invoiceCountry.vatRate`
   * - `emailMessage.account.invoiceCountry.euMember`
   * - `emailMessage.account.invoiceCountry.taxKey`
   * - `emailMessage.account.invoiceCountry.accountOfProceeds`
   * - `emailMessage.account.invoiceCountry.locale`
   * - `emailMessage.account.invoiceCountry.unitSystem`
   * - `emailMessage.account.invoiceCountry.timeSystem`
   * - `emailMessage.account.invoiceCountry.firstDayOfWeek`
   * - `emailMessage.account.invoiceCountry.addressFormat`
   * - `emailMessage.account.invoiceCountry.appDefaultLanguageCode`
   * - `emailMessage.account.invoiceCountry.nativeLanguageCode`
   * - `emailMessage.account.invoiceCountry.languageCode`
   * - `emailMessage.account.invoiceCountry.isActive`
   * - `emailMessage.account.invoiceCountry.priority`
   * - `emailMessage.account.invoiceCountry.setting.type`
   * - `emailMessage.account.invoiceCountry.setting.firstnameBeforeLastname`
   * - `emailMessage.account.invoiceCountry.setting.showTitleField`
   * - `emailMessage.account.invoiceCountry.setting.showCookieNotice`
   * - `emailMessage.account.invoiceCountry.setting.availableCreditCards`
   * - `emailMessage.account.invoiceCountry.setting.defaultTrialMode`
   * - `emailMessage.account.invoiceCountry.setting.isActiveForPartners`
   * - `emailMessage.account.invoiceCountry.addressSetting.type`
   * - `emailMessage.account.invoiceCountry.addressSetting.streetNoIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.streetIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.cityIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.stateIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.countyIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.subCountyIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.account.invoiceCountry.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.account.invoiceCountry.addressSetting.streetNoFormat`
   * - `emailMessage.account.invoiceCountry.addressSetting.addressFormat`
   * - `emailMessage.account.invoiceCountry.id`
   * - `emailMessage.account.invoiceCountryId`
   * - `emailMessage.account.resellerId`
   * - `emailMessage.account.affiliate.name`
   * - `emailMessage.account.affiliate.id`
   * - `emailMessage.account.apiAccountId`
   * - `emailMessage.account.parentAccountId`
   * - `emailMessage.account.isSandboxAccount`
   * - `emailMessage.account.isSpecialAccount`
   * - `emailMessage.account.type`
   * - `emailMessage.account.password`
   * - `emailMessage.account.billingCompany.legalEntity.name`
   * - `emailMessage.account.billingCompany.legalEntity.fullName`
   * - `emailMessage.account.billingCompany.legalEntity.type`
   * - `emailMessage.account.billingCompany.registrationNumber.number`
   * - `emailMessage.account.billingCompany.registrationNumber.commercialRegistryOffice`
   * - `emailMessage.account.billingCompany.taxIdentificationNumber.number`
   * - `emailMessage.account.billingCompany.vatId.vatId`
   * - `emailMessage.account.billingCompany.doingBusinessAsName`
   * - `emailMessage.account.billingAddress.premise`
   * - `emailMessage.account.billingAddress.subpremise`
   * - `emailMessage.account.billingAddress.streetNo`
   * - `emailMessage.account.billingAddress.street`
   * - `emailMessage.account.billingAddress.addressLine1`
   * - `emailMessage.account.billingAddress.addressLine2`
   * - `emailMessage.account.billingAddress.postalCode`
   * - `emailMessage.account.billingAddress.postalCodeSuffix`
   * - `emailMessage.account.billingAddress.sublocality`
   * - `emailMessage.account.billingAddress.city.name`
   * - `emailMessage.account.billingAddress.city.alias`
   * - `emailMessage.account.billingAddress.city.stateId`
   * - `emailMessage.account.billingAddress.city.countryId`
   * - `emailMessage.account.billingAddress.city.languageCode`
   * - `emailMessage.account.billingAddress.city.geoPoint.lat`
   * - `emailMessage.account.billingAddress.city.geoPoint.lng`
   * - `emailMessage.account.billingAddress.city.hasCoordinates`
   * - `emailMessage.account.billingAddress.city.branchCount`
   * - `emailMessage.account.billingAddress.city.id`
   * - `emailMessage.account.billingAddress.city.created`
   * - `emailMessage.account.billingAddress.city.updated`
   * - `emailMessage.account.billingAddress.subCounty.name`
   * - `emailMessage.account.billingAddress.subCounty.shortCode`
   * - `emailMessage.account.billingAddress.county.name`
   * - `emailMessage.account.billingAddress.county.shortCode`
   * - `emailMessage.account.billingAddress.state.name`
   * - `emailMessage.account.billingAddress.state.alias`
   * - `emailMessage.account.billingAddress.state.shortCode`
   * - `emailMessage.account.billingAddress.state.countryId`
   * - `emailMessage.account.billingAddress.state.id`
   * - `emailMessage.account.billingAddress.country.name`
   * - `emailMessage.account.billingAddress.country.alias`
   * - `emailMessage.account.billingAddress.country.parentCountryId`
   * - `emailMessage.account.billingAddress.country.type`
   * - `emailMessage.account.billingAddress.country.tld`
   * - `emailMessage.account.billingAddress.country.commonTld`
   * - `emailMessage.account.billingAddress.country.shortCode`
   * - `emailMessage.account.billingAddress.country.isoCode`
   * - `emailMessage.account.billingAddress.country.phonePrefix`
   * - `emailMessage.account.billingAddress.country.googleLocationName`
   * - `emailMessage.account.billingAddress.country.currency.isoCode`
   * - `emailMessage.account.billingAddress.country.currency.symbol`
   * - `emailMessage.account.billingAddress.country.currency.displaySymbolBeforeAmount`
   * - `emailMessage.account.billingAddress.country.vatRate`
   * - `emailMessage.account.billingAddress.country.euMember`
   * - `emailMessage.account.billingAddress.country.taxKey`
   * - `emailMessage.account.billingAddress.country.accountOfProceeds`
   * - `emailMessage.account.billingAddress.country.locale`
   * - `emailMessage.account.billingAddress.country.unitSystem`
   * - `emailMessage.account.billingAddress.country.timeSystem`
   * - `emailMessage.account.billingAddress.country.firstDayOfWeek`
   * - `emailMessage.account.billingAddress.country.addressFormat`
   * - `emailMessage.account.billingAddress.country.appDefaultLanguageCode`
   * - `emailMessage.account.billingAddress.country.nativeLanguageCode`
   * - `emailMessage.account.billingAddress.country.languageCode`
   * - `emailMessage.account.billingAddress.country.isActive`
   * - `emailMessage.account.billingAddress.country.priority`
   * - `emailMessage.account.billingAddress.country.setting.type`
   * - `emailMessage.account.billingAddress.country.setting.firstnameBeforeLastname`
   * - `emailMessage.account.billingAddress.country.setting.showTitleField`
   * - `emailMessage.account.billingAddress.country.setting.showCookieNotice`
   * - `emailMessage.account.billingAddress.country.setting.availableCreditCards`
   * - `emailMessage.account.billingAddress.country.setting.defaultTrialMode`
   * - `emailMessage.account.billingAddress.country.setting.isActiveForPartners`
   * - `emailMessage.account.billingAddress.country.addressSetting.type`
   * - `emailMessage.account.billingAddress.country.addressSetting.streetNoIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.streetIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.cityIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.stateIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.countyIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.subCountyIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.account.billingAddress.country.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.account.billingAddress.country.addressSetting.streetNoFormat`
   * - `emailMessage.account.billingAddress.country.addressSetting.addressFormat`
   * - `emailMessage.account.billingAddress.country.id`
   * - `emailMessage.account.billingAddress.geoPoint.lat`
   * - `emailMessage.account.billingAddress.geoPoint.lng`
   * - `emailMessage.account.billingAddress.customerSelectedGeoPoint.lat`
   * - `emailMessage.account.billingAddress.customerSelectedGeoPoint.lng`
   * - `emailMessage.account.billingAddress.geoBounds.northeast.lat`
   * - `emailMessage.account.billingAddress.geoBounds.northeast.lng`
   * - `emailMessage.account.billingAddress.geoBounds.southwest.lat`
   * - `emailMessage.account.billingAddress.geoBounds.southwest.lng`
   * - `emailMessage.account.billingAddress.formattedAddress`
   * - `emailMessage.account.billingAddress.languageCode`
   * - `emailMessage.account.billingAddress.displayAddress`
   * - `emailMessage.account.billingAddress.inputAddress`
   * - `emailMessage.account.billingAddress.precision`
   * - `emailMessage.account.languageCode`
   * - `emailMessage.account.totalNumberOfActiveProjects`
   * - `emailMessage.account.email`
   * - `emailMessage.account.id`
   * - `emailMessage.partnerCompanySetting.company.legalEntity.name`
   * - `emailMessage.partnerCompanySetting.company.legalEntity.fullName`
   * - `emailMessage.partnerCompanySetting.company.legalEntity.type`
   * - `emailMessage.partnerCompanySetting.company.registrationNumber.number`
   * - `emailMessage.partnerCompanySetting.company.registrationNumber.commercialRegistryOffice`
   * - `emailMessage.partnerCompanySetting.company.taxIdentificationNumber.number`
   * - `emailMessage.partnerCompanySetting.company.vatId.vatId`
   * - `emailMessage.partnerCompanySetting.company.doingBusinessAsName`
   * - `emailMessage.partnerCompanySetting.footerLegalData`
   * - `emailMessage.partnerCompanySetting.address.premise`
   * - `emailMessage.partnerCompanySetting.address.subpremise`
   * - `emailMessage.partnerCompanySetting.address.streetNo`
   * - `emailMessage.partnerCompanySetting.address.street`
   * - `emailMessage.partnerCompanySetting.address.addressLine1`
   * - `emailMessage.partnerCompanySetting.address.addressLine2`
   * - `emailMessage.partnerCompanySetting.address.postalCode`
   * - `emailMessage.partnerCompanySetting.address.postalCodeSuffix`
   * - `emailMessage.partnerCompanySetting.address.sublocality`
   * - `emailMessage.partnerCompanySetting.address.city.name`
   * - `emailMessage.partnerCompanySetting.address.city.alias`
   * - `emailMessage.partnerCompanySetting.address.city.stateId`
   * - `emailMessage.partnerCompanySetting.address.city.countryId`
   * - `emailMessage.partnerCompanySetting.address.city.languageCode`
   * - `emailMessage.partnerCompanySetting.address.city.geoPoint.lat`
   * - `emailMessage.partnerCompanySetting.address.city.geoPoint.lng`
   * - `emailMessage.partnerCompanySetting.address.city.hasCoordinates`
   * - `emailMessage.partnerCompanySetting.address.city.branchCount`
   * - `emailMessage.partnerCompanySetting.address.city.id`
   * - `emailMessage.partnerCompanySetting.address.city.created`
   * - `emailMessage.partnerCompanySetting.address.city.updated`
   * - `emailMessage.partnerCompanySetting.address.subCounty.name`
   * - `emailMessage.partnerCompanySetting.address.subCounty.shortCode`
   * - `emailMessage.partnerCompanySetting.address.county.name`
   * - `emailMessage.partnerCompanySetting.address.county.shortCode`
   * - `emailMessage.partnerCompanySetting.address.state.name`
   * - `emailMessage.partnerCompanySetting.address.state.alias`
   * - `emailMessage.partnerCompanySetting.address.state.shortCode`
   * - `emailMessage.partnerCompanySetting.address.state.countryId`
   * - `emailMessage.partnerCompanySetting.address.state.id`
   * - `emailMessage.partnerCompanySetting.address.country.name`
   * - `emailMessage.partnerCompanySetting.address.country.alias`
   * - `emailMessage.partnerCompanySetting.address.country.parentCountryId`
   * - `emailMessage.partnerCompanySetting.address.country.type`
   * - `emailMessage.partnerCompanySetting.address.country.tld`
   * - `emailMessage.partnerCompanySetting.address.country.commonTld`
   * - `emailMessage.partnerCompanySetting.address.country.shortCode`
   * - `emailMessage.partnerCompanySetting.address.country.isoCode`
   * - `emailMessage.partnerCompanySetting.address.country.phonePrefix`
   * - `emailMessage.partnerCompanySetting.address.country.googleLocationName`
   * - `emailMessage.partnerCompanySetting.address.country.currency.isoCode`
   * - `emailMessage.partnerCompanySetting.address.country.currency.symbol`
   * - `emailMessage.partnerCompanySetting.address.country.currency.displaySymbolBeforeAmount`
   * - `emailMessage.partnerCompanySetting.address.country.vatRate`
   * - `emailMessage.partnerCompanySetting.address.country.euMember`
   * - `emailMessage.partnerCompanySetting.address.country.taxKey`
   * - `emailMessage.partnerCompanySetting.address.country.accountOfProceeds`
   * - `emailMessage.partnerCompanySetting.address.country.locale`
   * - `emailMessage.partnerCompanySetting.address.country.unitSystem`
   * - `emailMessage.partnerCompanySetting.address.country.timeSystem`
   * - `emailMessage.partnerCompanySetting.address.country.firstDayOfWeek`
   * - `emailMessage.partnerCompanySetting.address.country.addressFormat`
   * - `emailMessage.partnerCompanySetting.address.country.appDefaultLanguageCode`
   * - `emailMessage.partnerCompanySetting.address.country.nativeLanguageCode`
   * - `emailMessage.partnerCompanySetting.address.country.languageCode`
   * - `emailMessage.partnerCompanySetting.address.country.isActive`
   * - `emailMessage.partnerCompanySetting.address.country.priority`
   * - `emailMessage.partnerCompanySetting.address.country.setting.type`
   * - `emailMessage.partnerCompanySetting.address.country.setting.firstnameBeforeLastname`
   * - `emailMessage.partnerCompanySetting.address.country.setting.showTitleField`
   * - `emailMessage.partnerCompanySetting.address.country.setting.showCookieNotice`
   * - `emailMessage.partnerCompanySetting.address.country.setting.availableCreditCards`
   * - `emailMessage.partnerCompanySetting.address.country.setting.defaultTrialMode`
   * - `emailMessage.partnerCompanySetting.address.country.setting.isActiveForPartners`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.type`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.streetNoIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.streetIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.cityIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.stateIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.countyIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.subCountyIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.streetNoFormat`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.addressFormat`
   * - `emailMessage.partnerCompanySetting.address.country.id`
   * - `emailMessage.partnerCompanySetting.address.geoPoint.lat`
   * - `emailMessage.partnerCompanySetting.address.geoPoint.lng`
   * - `emailMessage.partnerCompanySetting.address.customerSelectedGeoPoint.lat`
   * - `emailMessage.partnerCompanySetting.address.customerSelectedGeoPoint.lng`
   * - `emailMessage.partnerCompanySetting.address.geoBounds.northeast.lat`
   * - `emailMessage.partnerCompanySetting.address.geoBounds.northeast.lng`
   * - `emailMessage.partnerCompanySetting.address.geoBounds.southwest.lat`
   * - `emailMessage.partnerCompanySetting.address.geoBounds.southwest.lng`
   * - `emailMessage.partnerCompanySetting.address.formattedAddress`
   * - `emailMessage.partnerCompanySetting.address.languageCode`
   * - `emailMessage.partnerCompanySetting.address.displayAddress`
   * - `emailMessage.partnerCompanySetting.address.inputAddress`
   * - `emailMessage.partnerCompanySetting.address.precision`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.instagram`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.facebook`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.youtube`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.twitter`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.tiktok`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.linkedin`
   * - `emailMessage.partnerCompanySetting.websiteURLs.legalDataURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.termsAndConditionsURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.customerSupportURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.manageNotificationURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.privacyURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.blogOrNewsURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.aboutURL`
   * - `emailMessage.productThemeSetting.logo.publicUrl`
   * - `emailMessage.productThemeSetting.logo.description`
   * - `emailMessage.productThemeSetting.logo.type`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.base64EncodedContent`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.height`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.width`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.fileSize`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.fileFormat`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.body`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.name`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.compression`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.externalId`
   * - `emailMessage.productThemeSetting.primaryShades.displayPrefix`
   * - `emailMessage.productThemeSetting.secondaryShades.displayPrefix`
   * - `emailMessage.partnerEmailSetting.sendReports`
   * - `emailMessage.partnerEmailSetting.sender.name`
   * - `emailMessage.partnerEmailSetting.sender.email`
   * - `emailMessage.partnerEmailSetting.mediaRootUrl`
   * - `emailMessage.partnerEmailSetting.customDomain`
   * - `emailMessage.partnerEmailSetting.useProductNameAsSenderName`
   * - `emailMessage.partnerEmailSetting.passIntercomMailsThroughTemplatingSystem`
   * - `emailMessage.partnerEmailSetting.sendIntercomActivationCampaign`
   * - `emailMessage.partnerProductSetting.additionalLicenseFee`
   * - `emailMessage.partnerProductSetting.initialSetupFee`
   * - `emailMessage.partnerProductSetting.initialSetupFeeInclVat`
   * - `emailMessage.partnerProductSetting.billOnlyIfSetupCompleted`
   * - `emailMessage.partnerProductSetting.useInvoiceCountryCurrencyForBilling`
   * - `emailMessage.partnerProductSetting.logoutUrl`
   * - `emailMessage.partnerProductSetting.productUrl`
   * - `emailMessage.partnerProductSetting.redirectLoggedInAccountsToApplication`
   * - `emailMessage.partnerProductSetting.partnerSubbrand`
   * - `emailMessage.partnerProductSetting.customSupportSystemType`
   * - `emailMessage.partnerProductSetting.billOnlyIfSetupCompletedRuleAppliedAfterDate`
   * - `emailMessage.partnerProductSetting.externalId`
   * - `emailMessage.partnerProductSetting.disableDefaultReviewsReplySuggestions`
   * - `emailMessage.mjmlContent.content`
   * - `emailMessage.htmlContent.content`
   * - `emailMessage.from.name`
   * - `emailMessage.from.email`
   * - `emailMessage.subject`
   * - `emailMessage.campaignId`
   * - `handlingError`
   * - `id`
   * - `created`
   * - `updated`</details>
   */
  filters?: string;
};
export type PostClientReputationLocationsReviewsRequestsEmailsByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientReputationLocationsReviewsRequestsEmailsCountByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * Whether to include deleted ReviewRequestEmails
   */
  includeDeleted?: boolean;
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
   * - `customerEmail`
   * - `customerName`
   * - `isOptIn`
   * - `status`
   * - `sendAt`
   * - `locationReviewRequestId`
   * - `locationId`
   * - `isActive`
   * - `writingStyle`
   * - `emailMessage.location.businessId`
   * - `emailMessage.location.company.legalEntity.name`
   * - `emailMessage.location.company.legalEntity.fullName`
   * - `emailMessage.location.company.legalEntity.type`
   * - `emailMessage.location.company.registrationNumber.number`
   * - `emailMessage.location.company.registrationNumber.commercialRegistryOffice`
   * - `emailMessage.location.company.taxIdentificationNumber.number`
   * - `emailMessage.location.company.vatId.vatId`
   * - `emailMessage.location.company.doingBusinessAsName`
   * - `emailMessage.location.address.premise`
   * - `emailMessage.location.address.subpremise`
   * - `emailMessage.location.address.streetNo`
   * - `emailMessage.location.address.street`
   * - `emailMessage.location.address.addressLine1`
   * - `emailMessage.location.address.addressLine2`
   * - `emailMessage.location.address.postalCode`
   * - `emailMessage.location.address.postalCodeSuffix`
   * - `emailMessage.location.address.sublocality`
   * - `emailMessage.location.address.city.name`
   * - `emailMessage.location.address.city.alias`
   * - `emailMessage.location.address.city.stateId`
   * - `emailMessage.location.address.city.countryId`
   * - `emailMessage.location.address.city.languageCode`
   * - `emailMessage.location.address.city.geoPoint.lat`
   * - `emailMessage.location.address.city.geoPoint.lng`
   * - `emailMessage.location.address.city.hasCoordinates`
   * - `emailMessage.location.address.city.branchCount`
   * - `emailMessage.location.address.city.id`
   * - `emailMessage.location.address.city.created`
   * - `emailMessage.location.address.city.updated`
   * - `emailMessage.location.address.subCounty.name`
   * - `emailMessage.location.address.subCounty.shortCode`
   * - `emailMessage.location.address.county.name`
   * - `emailMessage.location.address.county.shortCode`
   * - `emailMessage.location.address.state.name`
   * - `emailMessage.location.address.state.alias`
   * - `emailMessage.location.address.state.shortCode`
   * - `emailMessage.location.address.state.countryId`
   * - `emailMessage.location.address.state.id`
   * - `emailMessage.location.address.country.name`
   * - `emailMessage.location.address.country.alias`
   * - `emailMessage.location.address.country.parentCountryId`
   * - `emailMessage.location.address.country.type`
   * - `emailMessage.location.address.country.tld`
   * - `emailMessage.location.address.country.commonTld`
   * - `emailMessage.location.address.country.shortCode`
   * - `emailMessage.location.address.country.isoCode`
   * - `emailMessage.location.address.country.phonePrefix`
   * - `emailMessage.location.address.country.googleLocationName`
   * - `emailMessage.location.address.country.currency.isoCode`
   * - `emailMessage.location.address.country.currency.symbol`
   * - `emailMessage.location.address.country.currency.displaySymbolBeforeAmount`
   * - `emailMessage.location.address.country.vatRate`
   * - `emailMessage.location.address.country.euMember`
   * - `emailMessage.location.address.country.taxKey`
   * - `emailMessage.location.address.country.accountOfProceeds`
   * - `emailMessage.location.address.country.locale`
   * - `emailMessage.location.address.country.unitSystem`
   * - `emailMessage.location.address.country.timeSystem`
   * - `emailMessage.location.address.country.firstDayOfWeek`
   * - `emailMessage.location.address.country.addressFormat`
   * - `emailMessage.location.address.country.appDefaultLanguageCode`
   * - `emailMessage.location.address.country.nativeLanguageCode`
   * - `emailMessage.location.address.country.languageCode`
   * - `emailMessage.location.address.country.isActive`
   * - `emailMessage.location.address.country.priority`
   * - `emailMessage.location.address.country.setting.type`
   * - `emailMessage.location.address.country.setting.firstnameBeforeLastname`
   * - `emailMessage.location.address.country.setting.showTitleField`
   * - `emailMessage.location.address.country.setting.showCookieNotice`
   * - `emailMessage.location.address.country.setting.availableCreditCards`
   * - `emailMessage.location.address.country.setting.defaultTrialMode`
   * - `emailMessage.location.address.country.setting.isActiveForPartners`
   * - `emailMessage.location.address.country.addressSetting.type`
   * - `emailMessage.location.address.country.addressSetting.streetNoIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.streetIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.cityIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.stateIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.countyIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.subCountyIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.location.address.country.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.location.address.country.addressSetting.streetNoFormat`
   * - `emailMessage.location.address.country.addressSetting.addressFormat`
   * - `emailMessage.location.address.country.id`
   * - `emailMessage.location.address.geoPoint.lat`
   * - `emailMessage.location.address.geoPoint.lng`
   * - `emailMessage.location.address.customerSelectedGeoPoint.lat`
   * - `emailMessage.location.address.customerSelectedGeoPoint.lng`
   * - `emailMessage.location.address.geoBounds.northeast.lat`
   * - `emailMessage.location.address.geoBounds.northeast.lng`
   * - `emailMessage.location.address.geoBounds.southwest.lat`
   * - `emailMessage.location.address.geoBounds.southwest.lng`
   * - `emailMessage.location.address.formattedAddress`
   * - `emailMessage.location.address.languageCode`
   * - `emailMessage.location.address.displayAddress`
   * - `emailMessage.location.address.inputAddress`
   * - `emailMessage.location.address.precision`
   * - `emailMessage.location.languageCode`
   * - `emailMessage.location.description.long`
   * - `emailMessage.location.description.short`
   * - `emailMessage.location.description.shortDescriptionMaxLength`
   * - `emailMessage.location.description.longDescriptionMaxLength`
   * - `emailMessage.location.isLocallyFocused`
   * - `emailMessage.location.serviceAreaType`
   * - `emailMessage.location.radius`
   * - `emailMessage.location.websiteId`
   * - `emailMessage.location.name`
   * - `emailMessage.location.seo.rankingsBusiness.domain.name`
   * - `emailMessage.location.seo.rankingsBusiness.domain.path`
   * - `emailMessage.location.seo.rankingsBusiness.domain.needsWww`
   * - `emailMessage.location.seo.rankingsBusiness.domain.needsHttps`
   * - `emailMessage.location.seo.rankingsBusiness.domain.excludePathInPageUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.unknownProtocol`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.status`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.isValid`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.validateWithoutProtocol`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.needsWww`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.needsNoWww`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.needsHttps`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.httpCode`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.contentLength`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.wordsCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.redirectCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.retryCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.initialUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.redirectUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.retryUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.filteredUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.timeout`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.countryShortCode`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.validationMode`
   * - `emailMessage.location.seo.rankingsBusiness.domain.content.content`
   * - `emailMessage.location.seo.rankingsBusiness.domain.content.objectiveSummary.objectiveSummaryText`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.domain`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.insufficientFundsIncidentCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.intentionalFailedPaymentIncidentCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.isCommonDomain`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.phishingTargetId`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.commonDomainRiskScore`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.id`
   * - `emailMessage.location.seo.rankingsBusiness.domain.id`
   * - `emailMessage.location.seo.rankingsBusiness.googleMapsId`
   * - `emailMessage.location.settings.googleConnection.connectionToken.tokenSetupState`
   * - `emailMessage.location.settings.googleConnection.connectionToken.expiresAt`
   * - `emailMessage.location.settings.googleConnection.connectionToken.issuedAt`
   * - `emailMessage.location.settings.googleConnection.connectionToken.token`
   * - `emailMessage.location.settings.googleConnection.connectionToken.refreshToken`
   * - `emailMessage.location.settings.googleConnection.connectionToken.apiScope`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.id`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.email`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.emailVerified`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.fullName`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.profilePicture`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.locale`
   * - `emailMessage.location.settings.googleConnection.connectionToken.locationInfo.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.googleConnection.connectionToken.locationInfo.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.googleConnection.connectionToken.locationInfo.googleIds.googleMapsId`
   * - `emailMessage.location.settings.googleConnection.connectionToken.locationInfo.locale`
   * - `emailMessage.location.settings.googleConnection.connectionToken.isActive`
   * - `emailMessage.location.settings.googleConnection.googleTokenConnectFlowInitUrl`
   * - `emailMessage.location.settings.googleConnection.connectionState`
   * - `emailMessage.location.settings.googleConnection.connectionType`
   * - `emailMessage.location.settings.googleConnection.profileState`
   * - `emailMessage.location.settings.googleConnection.syncState`
   * - `emailMessage.location.settings.googleConnection.prevConnectedExternalId`
   * - `emailMessage.location.settings.googleConnection.syncSettings.syncLocation`
   * - `emailMessage.location.settings.googleConnection.syncSettings.syncRequirementsSatisfied`
   * - `emailMessage.location.settings.googleConnection.syncSettings.syncLogoAndMainPhoto`
   * - `emailMessage.location.settings.googleConnection.syncSettings.syncGallery`
   * - `emailMessage.location.settings.googleConnection.syncSettings.lastSyncDate`
   * - `emailMessage.location.settings.googleConnection.syncSettings.numberOfSyncs`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.postalAddress`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.contactInfos`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.openingHours`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.website`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.company`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.categories`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.description`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.mediaitems`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.locationServiceAreas`
   * - `emailMessage.location.settings.googleConnection.throttleTimeLeft`
   * - `emailMessage.location.settings.googleConnection.profile.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.googleConnection.profile.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.googleConnection.profile.googleIds.googleMapsId`
   * - `emailMessage.location.settings.googleConnection.profile.googleMapsUrl`
   * - `emailMessage.location.settings.googleConnection.profile.newReviewUrl`
   * - `emailMessage.location.settings.googleConnection.profile.placesSearchForPotentialProfileTriedOnce`
   * - `emailMessage.location.settings.googleConnection.lastConnectionDate`
   * - `emailMessage.location.settings.uberallConnection.connectionState`
   * - `emailMessage.location.settings.uberallConnection.connectionType`
   * - `emailMessage.location.settings.uberallConnection.profileState`
   * - `emailMessage.location.settings.uberallConnection.syncState`
   * - `emailMessage.location.settings.uberallConnection.prevConnectedExternalId`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.syncLocation`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.syncRequirementsSatisfied`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.syncLogoAndMainPhoto`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.syncGallery`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.lastSyncDate`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.numberOfSyncs`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.postalAddress`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.contactInfos`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.openingHours`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.website`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.company`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.categories`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.description`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.mediaitems`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.locationServiceAreas`
   * - `emailMessage.location.settings.uberallConnection.throttleTimeLeft`
   * - `emailMessage.location.settings.uberallConnection.profile.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.uberallConnection.profile.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.uberallConnection.profile.googleIds.googleMapsId`
   * - `emailMessage.location.settings.uberallConnection.profile.googleMapsUrl`
   * - `emailMessage.location.settings.uberallConnection.profile.newReviewUrl`
   * - `emailMessage.location.settings.uberallConnection.profile.placesSearchForPotentialProfileTriedOnce`
   * - `emailMessage.location.settings.uberallConnection.lastConnectionDate`
   * - `emailMessage.location.settings.yextConnection.connectionState`
   * - `emailMessage.location.settings.yextConnection.connectionType`
   * - `emailMessage.location.settings.yextConnection.profileState`
   * - `emailMessage.location.settings.yextConnection.syncState`
   * - `emailMessage.location.settings.yextConnection.prevConnectedExternalId`
   * - `emailMessage.location.settings.yextConnection.syncSettings.syncLocation`
   * - `emailMessage.location.settings.yextConnection.syncSettings.syncRequirementsSatisfied`
   * - `emailMessage.location.settings.yextConnection.syncSettings.syncLogoAndMainPhoto`
   * - `emailMessage.location.settings.yextConnection.syncSettings.syncGallery`
   * - `emailMessage.location.settings.yextConnection.syncSettings.lastSyncDate`
   * - `emailMessage.location.settings.yextConnection.syncSettings.numberOfSyncs`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.postalAddress`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.contactInfos`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.openingHours`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.website`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.company`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.categories`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.description`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.mediaitems`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.locationServiceAreas`
   * - `emailMessage.location.settings.yextConnection.throttleTimeLeft`
   * - `emailMessage.location.settings.yextConnection.profile.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.yextConnection.profile.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.yextConnection.profile.googleIds.googleMapsId`
   * - `emailMessage.location.settings.yextConnection.profile.googleMapsUrl`
   * - `emailMessage.location.settings.yextConnection.profile.newReviewUrl`
   * - `emailMessage.location.settings.yextConnection.profile.placesSearchForPotentialProfileTriedOnce`
   * - `emailMessage.location.settings.yextConnection.lastConnectionDate`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.accessTokenState`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.expiresAt`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.issuedAt`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.isActive`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.isValid`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.isConnectedWithInstagram`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.tokenLifetime`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.token`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.apiScopes`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.id`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.profilePicture`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.lastName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.firstName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.title`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.academicTitle`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.jobTitle`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.gender.gender`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.locationId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.locationName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.primaryPhone`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.websiteUrl`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.primaryCategoryName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.languageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.premise`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.subpremise`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.streetNo`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.street`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.addressLine1`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.addressLine2`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.postalCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.postalCodeSuffix`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.sublocality`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.alias`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.stateId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.countryId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.languageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.geoPoint.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.geoPoint.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.hasCoordinates`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.branchCount`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.id`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.created`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.updated`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.subCounty.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.subCounty.shortCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.county.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.county.shortCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.alias`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.shortCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.countryId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.id`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.alias`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.parentCountryId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.type`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.tld`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.commonTld`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.shortCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.isoCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.phonePrefix`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.googleLocationName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.currency.isoCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.currency.symbol`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.currency.displaySymbolBeforeAmount`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.vatRate`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.euMember`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.taxKey`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.accountOfProceeds`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.locale`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.unitSystem`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.timeSystem`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.firstDayOfWeek`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressFormat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.appDefaultLanguageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.nativeLanguageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.languageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.isActive`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.priority`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.type`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.firstnameBeforeLastname`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.showTitleField`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.showCookieNotice`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.availableCreditCards`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.defaultTrialMode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.isActiveForPartners`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.type`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.streetNoIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.streetIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.cityIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.stateIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.countyIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.subCountyIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.streetNoFormat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.addressFormat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.id`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoPoint.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoPoint.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.customerSelectedGeoPoint.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.customerSelectedGeoPoint.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoBounds.northeast.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoBounds.northeast.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoBounds.southwest.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoBounds.southwest.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.formattedAddress`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.languageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.displayAddress`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.inputAddress`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.precision`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.locationUrl`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.locationProfilePictureUrl`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.pageToken`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.hasBaseScopes`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.hasInstagramScopes`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.hasBoostsScopes`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.hasBusinessManagrScopes`
   * - `emailMessage.location.settings.facebookConnection.facebookTokenConnectFlowInitUrl`
   * - `emailMessage.location.settings.facebookConnection.connectionState`
   * - `emailMessage.location.settings.facebookConnection.connectionType`
   * - `emailMessage.location.settings.facebookConnection.profileState`
   * - `emailMessage.location.settings.facebookConnection.syncState`
   * - `emailMessage.location.settings.facebookConnection.prevConnectedExternalId`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.syncLocation`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.syncRequirementsSatisfied`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.syncLogoAndMainPhoto`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.syncGallery`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.lastSyncDate`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.numberOfSyncs`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.postalAddress`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.contactInfos`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.openingHours`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.website`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.company`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.categories`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.description`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.mediaitems`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.locationServiceAreas`
   * - `emailMessage.location.settings.facebookConnection.throttleTimeLeft`
   * - `emailMessage.location.settings.facebookConnection.profile.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.facebookConnection.profile.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.facebookConnection.profile.googleIds.googleMapsId`
   * - `emailMessage.location.settings.facebookConnection.profile.googleMapsUrl`
   * - `emailMessage.location.settings.facebookConnection.profile.newReviewUrl`
   * - `emailMessage.location.settings.facebookConnection.profile.placesSearchForPotentialProfileTriedOnce`
   * - `emailMessage.location.settings.facebookConnection.lastConnectionDate`
   * - `emailMessage.location.settings.tasksSettings.reassignTasks`
   * - `emailMessage.location.settings.tasksSettings.initiallyValidated`
   * - `emailMessage.location.reputation.totalReviews`
   * - `emailMessage.location.reputation.averageRating`
   * - `emailMessage.location.reputation.reviewsWithoutReplies`
   * - `emailMessage.location.reputation.reputationScores.reputationScore.weight`
   * - `emailMessage.location.reputation.reputationScores.reputationScore.score`
   * - `emailMessage.location.reputation.reputationScores.averageRatingScore.averageRating`
   * - `emailMessage.location.reputation.reputationScores.averageRatingScore.weight`
   * - `emailMessage.location.reputation.reputationScores.averageRatingScore.score`
   * - `emailMessage.location.reputation.reputationScores.totalReviewsScore.totalReviews`
   * - `emailMessage.location.reputation.reputationScores.totalReviewsScore.weight`
   * - `emailMessage.location.reputation.reputationScores.totalReviewsScore.score`
   * - `emailMessage.location.reputation.reputationScores.repliesRateScore.reviewsRepliesPercentage`
   * - `emailMessage.location.reputation.reputationScores.repliesRateScore.weight`
   * - `emailMessage.location.reputation.reputationScores.repliesRateScore.score`
   * - `emailMessage.location.reputation.reputationScores.reviewsLengthScore.averageReviewsLength`
   * - `emailMessage.location.reputation.reputationScores.reviewsLengthScore.weight`
   * - `emailMessage.location.reputation.reputationScores.reviewsLengthScore.score`
   * - `emailMessage.location.reputation.reputationScores.reviewsRecencyScore.averageReviewsRecency`
   * - `emailMessage.location.reputation.reputationScores.reviewsRecencyScore.weight`
   * - `emailMessage.location.reputation.reputationScores.reviewsRecencyScore.score`
   * - `emailMessage.location.reputation.reputationScores.id`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithOneStar`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithTwoStars`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithThreeStars`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithFourStars`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithFiveStars`
   * - `emailMessage.location.reputation.reviewsDistribution.badReviews`
   * - `emailMessage.location.reputation.reviewsDistribution.neutralReviews`
   * - `emailMessage.location.reputation.reviewsDistribution.goodReviews`
   * - `emailMessage.location.reputation.reviewsDistribution.totalReviews`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithOneStar`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithTwoStars`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithThreeStars`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithFourStars`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithFiveStars`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.badReviews`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.neutralReviews`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.goodReviews`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.totalReviews`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithOneStar`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithTwoStars`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithThreeStars`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithFourStars`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithFiveStars`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.badReviews`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.neutralReviews`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.goodReviews`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.totalReviews`
   * - `emailMessage.location.reputation.hasReviews`
   * - `emailMessage.location.engagement.postsSummary.totalCount`
   * - `emailMessage.location.engagement.postsSummary.scheduledCount`
   * - `emailMessage.location.engagement.postsSummary.publishedCount`
   * - `emailMessage.location.engagement.postsSummary.publishingCount`
   * - `emailMessage.location.engagement.postsSummary.notApprovedCount`
   * - `emailMessage.location.engagement.postsSummary.draftCount`
   * - `emailMessage.location.engagement.postsSummary.errorCount`
   * - `emailMessage.location.engagement.eventsSummary.pendingVerificationCount`
   * - `emailMessage.location.engagement.eventsSummary.pastCount`
   * - `emailMessage.location.engagement.eventsSummary.totalCount`
   * - `emailMessage.location.engagement.eventsSummary.scheduledCount`
   * - `emailMessage.location.engagement.eventsSummary.publishedCount`
   * - `emailMessage.location.engagement.eventsSummary.publishingCount`
   * - `emailMessage.location.engagement.eventsSummary.notApprovedCount`
   * - `emailMessage.location.engagement.eventsSummary.draftCount`
   * - `emailMessage.location.engagement.eventsSummary.errorCount`
   * - `emailMessage.location.id`
   * - `emailMessage.location.created`
   * - `emailMessage.location.updated`
   * - `emailMessage.project.accountId`
   * - `emailMessage.project.status`
   * - `emailMessage.project.settings.setup.featureFlagSetting.allowedCountryShortCodes`
   * - `emailMessage.project.settings.setup.featureFlagSetting.lockCountrySelectionAfterSetup`
   * - `emailMessage.project.settings.setup.featureFlagSetting.allowProjectPrefill`
   * - `emailMessage.project.settings.setup.featureFlagSetting.stepsToHide`
   * - `emailMessage.project.settings.setup.featureFlagSetting.notAllowAnyUpsellTriggersForType`
   * - `emailMessage.project.settings.setup.featureFlagSetting.allowUserToChangeDomain`
   * - `emailMessage.project.settings.setup.keywordsFeatureFlagSetting.keywordsAvailable`
   * - `emailMessage.project.settings.setup.locationsFeatureFlagSetting.locationsAvailable`
   * - `emailMessage.project.settings.setup.competitorsFeatureFlagSetting.competitorsAvailable`
   * - `emailMessage.project.settings.seo.seoRankingsFeatureFlagSetting.keywordsDisplayed`
   * - `emailMessage.project.settings.seo.displayKeywordVisibilityComparison`
   * - `emailMessage.project.settings.seo.displayTopKeywords`
   * - `emailMessage.project.settings.seo.hasCustomCMSTypeOrder`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMin.currency.isoCode`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMin.currency.symbol`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMin.currency.displaySymbolBeforeAmount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMin.amount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMax.currency.isoCode`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMax.currency.symbol`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMax.currency.displaySymbolBeforeAmount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMax.amount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMin.currency.isoCode`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMin.currency.symbol`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMin.currency.displaySymbolBeforeAmount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMin.amount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMax.currency.isoCode`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMax.currency.symbol`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMax.currency.displaySymbolBeforeAmount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMax.amount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.isPreviewFeatureFlagSetting`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.durationOfInitialBudgetRestrictions`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.handlingFee.appliedAfter`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.handlingFee.ownShare`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.handlingFee.resellerShare`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.voucherDistributionMethod`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.voucherDistributionMethodStartDate`
   * - `emailMessage.project.settings.presence.analysis`
   * - `emailMessage.project.settings.rights.delete`
   * - `emailMessage.project.settings.rights.update`
   * - `emailMessage.project.settings.aiBudget.aiBudgetFeatureFlagSetting.monthlyAIBudgetPerProjectInUSD`
   * - `emailMessage.project.id`
   * - `emailMessage.project.created`
   * - `emailMessage.project.updated`
   * - `emailMessage.account.status`
   * - `emailMessage.account.owner.lastName`
   * - `emailMessage.account.owner.firstName`
   * - `emailMessage.account.owner.title`
   * - `emailMessage.account.owner.academicTitle`
   * - `emailMessage.account.owner.jobTitle`
   * - `emailMessage.account.owner.gender.gender`
   * - `emailMessage.account.invoiceCountry.name`
   * - `emailMessage.account.invoiceCountry.alias`
   * - `emailMessage.account.invoiceCountry.parentCountryId`
   * - `emailMessage.account.invoiceCountry.type`
   * - `emailMessage.account.invoiceCountry.tld`
   * - `emailMessage.account.invoiceCountry.commonTld`
   * - `emailMessage.account.invoiceCountry.shortCode`
   * - `emailMessage.account.invoiceCountry.isoCode`
   * - `emailMessage.account.invoiceCountry.phonePrefix`
   * - `emailMessage.account.invoiceCountry.googleLocationName`
   * - `emailMessage.account.invoiceCountry.currency.isoCode`
   * - `emailMessage.account.invoiceCountry.currency.symbol`
   * - `emailMessage.account.invoiceCountry.currency.displaySymbolBeforeAmount`
   * - `emailMessage.account.invoiceCountry.vatRate`
   * - `emailMessage.account.invoiceCountry.euMember`
   * - `emailMessage.account.invoiceCountry.taxKey`
   * - `emailMessage.account.invoiceCountry.accountOfProceeds`
   * - `emailMessage.account.invoiceCountry.locale`
   * - `emailMessage.account.invoiceCountry.unitSystem`
   * - `emailMessage.account.invoiceCountry.timeSystem`
   * - `emailMessage.account.invoiceCountry.firstDayOfWeek`
   * - `emailMessage.account.invoiceCountry.addressFormat`
   * - `emailMessage.account.invoiceCountry.appDefaultLanguageCode`
   * - `emailMessage.account.invoiceCountry.nativeLanguageCode`
   * - `emailMessage.account.invoiceCountry.languageCode`
   * - `emailMessage.account.invoiceCountry.isActive`
   * - `emailMessage.account.invoiceCountry.priority`
   * - `emailMessage.account.invoiceCountry.setting.type`
   * - `emailMessage.account.invoiceCountry.setting.firstnameBeforeLastname`
   * - `emailMessage.account.invoiceCountry.setting.showTitleField`
   * - `emailMessage.account.invoiceCountry.setting.showCookieNotice`
   * - `emailMessage.account.invoiceCountry.setting.availableCreditCards`
   * - `emailMessage.account.invoiceCountry.setting.defaultTrialMode`
   * - `emailMessage.account.invoiceCountry.setting.isActiveForPartners`
   * - `emailMessage.account.invoiceCountry.addressSetting.type`
   * - `emailMessage.account.invoiceCountry.addressSetting.streetNoIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.streetIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.cityIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.stateIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.countyIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.subCountyIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.account.invoiceCountry.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.account.invoiceCountry.addressSetting.streetNoFormat`
   * - `emailMessage.account.invoiceCountry.addressSetting.addressFormat`
   * - `emailMessage.account.invoiceCountry.id`
   * - `emailMessage.account.invoiceCountryId`
   * - `emailMessage.account.resellerId`
   * - `emailMessage.account.affiliate.name`
   * - `emailMessage.account.affiliate.id`
   * - `emailMessage.account.apiAccountId`
   * - `emailMessage.account.parentAccountId`
   * - `emailMessage.account.isSandboxAccount`
   * - `emailMessage.account.isSpecialAccount`
   * - `emailMessage.account.type`
   * - `emailMessage.account.password`
   * - `emailMessage.account.billingCompany.legalEntity.name`
   * - `emailMessage.account.billingCompany.legalEntity.fullName`
   * - `emailMessage.account.billingCompany.legalEntity.type`
   * - `emailMessage.account.billingCompany.registrationNumber.number`
   * - `emailMessage.account.billingCompany.registrationNumber.commercialRegistryOffice`
   * - `emailMessage.account.billingCompany.taxIdentificationNumber.number`
   * - `emailMessage.account.billingCompany.vatId.vatId`
   * - `emailMessage.account.billingCompany.doingBusinessAsName`
   * - `emailMessage.account.billingAddress.premise`
   * - `emailMessage.account.billingAddress.subpremise`
   * - `emailMessage.account.billingAddress.streetNo`
   * - `emailMessage.account.billingAddress.street`
   * - `emailMessage.account.billingAddress.addressLine1`
   * - `emailMessage.account.billingAddress.addressLine2`
   * - `emailMessage.account.billingAddress.postalCode`
   * - `emailMessage.account.billingAddress.postalCodeSuffix`
   * - `emailMessage.account.billingAddress.sublocality`
   * - `emailMessage.account.billingAddress.city.name`
   * - `emailMessage.account.billingAddress.city.alias`
   * - `emailMessage.account.billingAddress.city.stateId`
   * - `emailMessage.account.billingAddress.city.countryId`
   * - `emailMessage.account.billingAddress.city.languageCode`
   * - `emailMessage.account.billingAddress.city.geoPoint.lat`
   * - `emailMessage.account.billingAddress.city.geoPoint.lng`
   * - `emailMessage.account.billingAddress.city.hasCoordinates`
   * - `emailMessage.account.billingAddress.city.branchCount`
   * - `emailMessage.account.billingAddress.city.id`
   * - `emailMessage.account.billingAddress.city.created`
   * - `emailMessage.account.billingAddress.city.updated`
   * - `emailMessage.account.billingAddress.subCounty.name`
   * - `emailMessage.account.billingAddress.subCounty.shortCode`
   * - `emailMessage.account.billingAddress.county.name`
   * - `emailMessage.account.billingAddress.county.shortCode`
   * - `emailMessage.account.billingAddress.state.name`
   * - `emailMessage.account.billingAddress.state.alias`
   * - `emailMessage.account.billingAddress.state.shortCode`
   * - `emailMessage.account.billingAddress.state.countryId`
   * - `emailMessage.account.billingAddress.state.id`
   * - `emailMessage.account.billingAddress.country.name`
   * - `emailMessage.account.billingAddress.country.alias`
   * - `emailMessage.account.billingAddress.country.parentCountryId`
   * - `emailMessage.account.billingAddress.country.type`
   * - `emailMessage.account.billingAddress.country.tld`
   * - `emailMessage.account.billingAddress.country.commonTld`
   * - `emailMessage.account.billingAddress.country.shortCode`
   * - `emailMessage.account.billingAddress.country.isoCode`
   * - `emailMessage.account.billingAddress.country.phonePrefix`
   * - `emailMessage.account.billingAddress.country.googleLocationName`
   * - `emailMessage.account.billingAddress.country.currency.isoCode`
   * - `emailMessage.account.billingAddress.country.currency.symbol`
   * - `emailMessage.account.billingAddress.country.currency.displaySymbolBeforeAmount`
   * - `emailMessage.account.billingAddress.country.vatRate`
   * - `emailMessage.account.billingAddress.country.euMember`
   * - `emailMessage.account.billingAddress.country.taxKey`
   * - `emailMessage.account.billingAddress.country.accountOfProceeds`
   * - `emailMessage.account.billingAddress.country.locale`
   * - `emailMessage.account.billingAddress.country.unitSystem`
   * - `emailMessage.account.billingAddress.country.timeSystem`
   * - `emailMessage.account.billingAddress.country.firstDayOfWeek`
   * - `emailMessage.account.billingAddress.country.addressFormat`
   * - `emailMessage.account.billingAddress.country.appDefaultLanguageCode`
   * - `emailMessage.account.billingAddress.country.nativeLanguageCode`
   * - `emailMessage.account.billingAddress.country.languageCode`
   * - `emailMessage.account.billingAddress.country.isActive`
   * - `emailMessage.account.billingAddress.country.priority`
   * - `emailMessage.account.billingAddress.country.setting.type`
   * - `emailMessage.account.billingAddress.country.setting.firstnameBeforeLastname`
   * - `emailMessage.account.billingAddress.country.setting.showTitleField`
   * - `emailMessage.account.billingAddress.country.setting.showCookieNotice`
   * - `emailMessage.account.billingAddress.country.setting.availableCreditCards`
   * - `emailMessage.account.billingAddress.country.setting.defaultTrialMode`
   * - `emailMessage.account.billingAddress.country.setting.isActiveForPartners`
   * - `emailMessage.account.billingAddress.country.addressSetting.type`
   * - `emailMessage.account.billingAddress.country.addressSetting.streetNoIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.streetIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.cityIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.stateIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.countyIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.subCountyIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.account.billingAddress.country.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.account.billingAddress.country.addressSetting.streetNoFormat`
   * - `emailMessage.account.billingAddress.country.addressSetting.addressFormat`
   * - `emailMessage.account.billingAddress.country.id`
   * - `emailMessage.account.billingAddress.geoPoint.lat`
   * - `emailMessage.account.billingAddress.geoPoint.lng`
   * - `emailMessage.account.billingAddress.customerSelectedGeoPoint.lat`
   * - `emailMessage.account.billingAddress.customerSelectedGeoPoint.lng`
   * - `emailMessage.account.billingAddress.geoBounds.northeast.lat`
   * - `emailMessage.account.billingAddress.geoBounds.northeast.lng`
   * - `emailMessage.account.billingAddress.geoBounds.southwest.lat`
   * - `emailMessage.account.billingAddress.geoBounds.southwest.lng`
   * - `emailMessage.account.billingAddress.formattedAddress`
   * - `emailMessage.account.billingAddress.languageCode`
   * - `emailMessage.account.billingAddress.displayAddress`
   * - `emailMessage.account.billingAddress.inputAddress`
   * - `emailMessage.account.billingAddress.precision`
   * - `emailMessage.account.languageCode`
   * - `emailMessage.account.totalNumberOfActiveProjects`
   * - `emailMessage.account.email`
   * - `emailMessage.account.id`
   * - `emailMessage.partnerCompanySetting.company.legalEntity.name`
   * - `emailMessage.partnerCompanySetting.company.legalEntity.fullName`
   * - `emailMessage.partnerCompanySetting.company.legalEntity.type`
   * - `emailMessage.partnerCompanySetting.company.registrationNumber.number`
   * - `emailMessage.partnerCompanySetting.company.registrationNumber.commercialRegistryOffice`
   * - `emailMessage.partnerCompanySetting.company.taxIdentificationNumber.number`
   * - `emailMessage.partnerCompanySetting.company.vatId.vatId`
   * - `emailMessage.partnerCompanySetting.company.doingBusinessAsName`
   * - `emailMessage.partnerCompanySetting.footerLegalData`
   * - `emailMessage.partnerCompanySetting.address.premise`
   * - `emailMessage.partnerCompanySetting.address.subpremise`
   * - `emailMessage.partnerCompanySetting.address.streetNo`
   * - `emailMessage.partnerCompanySetting.address.street`
   * - `emailMessage.partnerCompanySetting.address.addressLine1`
   * - `emailMessage.partnerCompanySetting.address.addressLine2`
   * - `emailMessage.partnerCompanySetting.address.postalCode`
   * - `emailMessage.partnerCompanySetting.address.postalCodeSuffix`
   * - `emailMessage.partnerCompanySetting.address.sublocality`
   * - `emailMessage.partnerCompanySetting.address.city.name`
   * - `emailMessage.partnerCompanySetting.address.city.alias`
   * - `emailMessage.partnerCompanySetting.address.city.stateId`
   * - `emailMessage.partnerCompanySetting.address.city.countryId`
   * - `emailMessage.partnerCompanySetting.address.city.languageCode`
   * - `emailMessage.partnerCompanySetting.address.city.geoPoint.lat`
   * - `emailMessage.partnerCompanySetting.address.city.geoPoint.lng`
   * - `emailMessage.partnerCompanySetting.address.city.hasCoordinates`
   * - `emailMessage.partnerCompanySetting.address.city.branchCount`
   * - `emailMessage.partnerCompanySetting.address.city.id`
   * - `emailMessage.partnerCompanySetting.address.city.created`
   * - `emailMessage.partnerCompanySetting.address.city.updated`
   * - `emailMessage.partnerCompanySetting.address.subCounty.name`
   * - `emailMessage.partnerCompanySetting.address.subCounty.shortCode`
   * - `emailMessage.partnerCompanySetting.address.county.name`
   * - `emailMessage.partnerCompanySetting.address.county.shortCode`
   * - `emailMessage.partnerCompanySetting.address.state.name`
   * - `emailMessage.partnerCompanySetting.address.state.alias`
   * - `emailMessage.partnerCompanySetting.address.state.shortCode`
   * - `emailMessage.partnerCompanySetting.address.state.countryId`
   * - `emailMessage.partnerCompanySetting.address.state.id`
   * - `emailMessage.partnerCompanySetting.address.country.name`
   * - `emailMessage.partnerCompanySetting.address.country.alias`
   * - `emailMessage.partnerCompanySetting.address.country.parentCountryId`
   * - `emailMessage.partnerCompanySetting.address.country.type`
   * - `emailMessage.partnerCompanySetting.address.country.tld`
   * - `emailMessage.partnerCompanySetting.address.country.commonTld`
   * - `emailMessage.partnerCompanySetting.address.country.shortCode`
   * - `emailMessage.partnerCompanySetting.address.country.isoCode`
   * - `emailMessage.partnerCompanySetting.address.country.phonePrefix`
   * - `emailMessage.partnerCompanySetting.address.country.googleLocationName`
   * - `emailMessage.partnerCompanySetting.address.country.currency.isoCode`
   * - `emailMessage.partnerCompanySetting.address.country.currency.symbol`
   * - `emailMessage.partnerCompanySetting.address.country.currency.displaySymbolBeforeAmount`
   * - `emailMessage.partnerCompanySetting.address.country.vatRate`
   * - `emailMessage.partnerCompanySetting.address.country.euMember`
   * - `emailMessage.partnerCompanySetting.address.country.taxKey`
   * - `emailMessage.partnerCompanySetting.address.country.accountOfProceeds`
   * - `emailMessage.partnerCompanySetting.address.country.locale`
   * - `emailMessage.partnerCompanySetting.address.country.unitSystem`
   * - `emailMessage.partnerCompanySetting.address.country.timeSystem`
   * - `emailMessage.partnerCompanySetting.address.country.firstDayOfWeek`
   * - `emailMessage.partnerCompanySetting.address.country.addressFormat`
   * - `emailMessage.partnerCompanySetting.address.country.appDefaultLanguageCode`
   * - `emailMessage.partnerCompanySetting.address.country.nativeLanguageCode`
   * - `emailMessage.partnerCompanySetting.address.country.languageCode`
   * - `emailMessage.partnerCompanySetting.address.country.isActive`
   * - `emailMessage.partnerCompanySetting.address.country.priority`
   * - `emailMessage.partnerCompanySetting.address.country.setting.type`
   * - `emailMessage.partnerCompanySetting.address.country.setting.firstnameBeforeLastname`
   * - `emailMessage.partnerCompanySetting.address.country.setting.showTitleField`
   * - `emailMessage.partnerCompanySetting.address.country.setting.showCookieNotice`
   * - `emailMessage.partnerCompanySetting.address.country.setting.availableCreditCards`
   * - `emailMessage.partnerCompanySetting.address.country.setting.defaultTrialMode`
   * - `emailMessage.partnerCompanySetting.address.country.setting.isActiveForPartners`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.type`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.streetNoIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.streetIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.cityIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.stateIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.countyIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.subCountyIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.streetNoFormat`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.addressFormat`
   * - `emailMessage.partnerCompanySetting.address.country.id`
   * - `emailMessage.partnerCompanySetting.address.geoPoint.lat`
   * - `emailMessage.partnerCompanySetting.address.geoPoint.lng`
   * - `emailMessage.partnerCompanySetting.address.customerSelectedGeoPoint.lat`
   * - `emailMessage.partnerCompanySetting.address.customerSelectedGeoPoint.lng`
   * - `emailMessage.partnerCompanySetting.address.geoBounds.northeast.lat`
   * - `emailMessage.partnerCompanySetting.address.geoBounds.northeast.lng`
   * - `emailMessage.partnerCompanySetting.address.geoBounds.southwest.lat`
   * - `emailMessage.partnerCompanySetting.address.geoBounds.southwest.lng`
   * - `emailMessage.partnerCompanySetting.address.formattedAddress`
   * - `emailMessage.partnerCompanySetting.address.languageCode`
   * - `emailMessage.partnerCompanySetting.address.displayAddress`
   * - `emailMessage.partnerCompanySetting.address.inputAddress`
   * - `emailMessage.partnerCompanySetting.address.precision`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.instagram`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.facebook`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.youtube`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.twitter`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.tiktok`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.linkedin`
   * - `emailMessage.partnerCompanySetting.websiteURLs.legalDataURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.termsAndConditionsURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.customerSupportURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.manageNotificationURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.privacyURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.blogOrNewsURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.aboutURL`
   * - `emailMessage.productThemeSetting.logo.publicUrl`
   * - `emailMessage.productThemeSetting.logo.description`
   * - `emailMessage.productThemeSetting.logo.type`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.base64EncodedContent`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.height`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.width`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.fileSize`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.fileFormat`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.body`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.name`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.compression`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.externalId`
   * - `emailMessage.productThemeSetting.primaryShades.displayPrefix`
   * - `emailMessage.productThemeSetting.secondaryShades.displayPrefix`
   * - `emailMessage.partnerEmailSetting.sendReports`
   * - `emailMessage.partnerEmailSetting.sender.name`
   * - `emailMessage.partnerEmailSetting.sender.email`
   * - `emailMessage.partnerEmailSetting.mediaRootUrl`
   * - `emailMessage.partnerEmailSetting.customDomain`
   * - `emailMessage.partnerEmailSetting.useProductNameAsSenderName`
   * - `emailMessage.partnerEmailSetting.passIntercomMailsThroughTemplatingSystem`
   * - `emailMessage.partnerEmailSetting.sendIntercomActivationCampaign`
   * - `emailMessage.partnerProductSetting.additionalLicenseFee`
   * - `emailMessage.partnerProductSetting.initialSetupFee`
   * - `emailMessage.partnerProductSetting.initialSetupFeeInclVat`
   * - `emailMessage.partnerProductSetting.billOnlyIfSetupCompleted`
   * - `emailMessage.partnerProductSetting.useInvoiceCountryCurrencyForBilling`
   * - `emailMessage.partnerProductSetting.logoutUrl`
   * - `emailMessage.partnerProductSetting.productUrl`
   * - `emailMessage.partnerProductSetting.redirectLoggedInAccountsToApplication`
   * - `emailMessage.partnerProductSetting.partnerSubbrand`
   * - `emailMessage.partnerProductSetting.customSupportSystemType`
   * - `emailMessage.partnerProductSetting.billOnlyIfSetupCompletedRuleAppliedAfterDate`
   * - `emailMessage.partnerProductSetting.externalId`
   * - `emailMessage.partnerProductSetting.disableDefaultReviewsReplySuggestions`
   * - `emailMessage.mjmlContent.content`
   * - `emailMessage.htmlContent.content`
   * - `emailMessage.from.name`
   * - `emailMessage.from.email`
   * - `emailMessage.subject`
   * - `emailMessage.campaignId`
   * - `handlingError`
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
   * - `customerEmail`
   * - `customerName`
   * - `isOptIn`
   * - `status`
   * - `sendAt`
   * - `locationReviewRequestId`
   * - `locationId`
   * - `isActive`
   * - `writingStyle`
   * - `emailMessage.location.businessId`
   * - `emailMessage.location.company.legalEntity.name`
   * - `emailMessage.location.company.legalEntity.fullName`
   * - `emailMessage.location.company.legalEntity.type`
   * - `emailMessage.location.company.registrationNumber.number`
   * - `emailMessage.location.company.registrationNumber.commercialRegistryOffice`
   * - `emailMessage.location.company.taxIdentificationNumber.number`
   * - `emailMessage.location.company.vatId.vatId`
   * - `emailMessage.location.company.doingBusinessAsName`
   * - `emailMessage.location.address.premise`
   * - `emailMessage.location.address.subpremise`
   * - `emailMessage.location.address.streetNo`
   * - `emailMessage.location.address.street`
   * - `emailMessage.location.address.addressLine1`
   * - `emailMessage.location.address.addressLine2`
   * - `emailMessage.location.address.postalCode`
   * - `emailMessage.location.address.postalCodeSuffix`
   * - `emailMessage.location.address.sublocality`
   * - `emailMessage.location.address.city.name`
   * - `emailMessage.location.address.city.alias`
   * - `emailMessage.location.address.city.stateId`
   * - `emailMessage.location.address.city.countryId`
   * - `emailMessage.location.address.city.languageCode`
   * - `emailMessage.location.address.city.geoPoint.lat`
   * - `emailMessage.location.address.city.geoPoint.lng`
   * - `emailMessage.location.address.city.hasCoordinates`
   * - `emailMessage.location.address.city.branchCount`
   * - `emailMessage.location.address.city.id`
   * - `emailMessage.location.address.city.created`
   * - `emailMessage.location.address.city.updated`
   * - `emailMessage.location.address.subCounty.name`
   * - `emailMessage.location.address.subCounty.shortCode`
   * - `emailMessage.location.address.county.name`
   * - `emailMessage.location.address.county.shortCode`
   * - `emailMessage.location.address.state.name`
   * - `emailMessage.location.address.state.alias`
   * - `emailMessage.location.address.state.shortCode`
   * - `emailMessage.location.address.state.countryId`
   * - `emailMessage.location.address.state.id`
   * - `emailMessage.location.address.country.name`
   * - `emailMessage.location.address.country.alias`
   * - `emailMessage.location.address.country.parentCountryId`
   * - `emailMessage.location.address.country.type`
   * - `emailMessage.location.address.country.tld`
   * - `emailMessage.location.address.country.commonTld`
   * - `emailMessage.location.address.country.shortCode`
   * - `emailMessage.location.address.country.isoCode`
   * - `emailMessage.location.address.country.phonePrefix`
   * - `emailMessage.location.address.country.googleLocationName`
   * - `emailMessage.location.address.country.currency.isoCode`
   * - `emailMessage.location.address.country.currency.symbol`
   * - `emailMessage.location.address.country.currency.displaySymbolBeforeAmount`
   * - `emailMessage.location.address.country.vatRate`
   * - `emailMessage.location.address.country.euMember`
   * - `emailMessage.location.address.country.taxKey`
   * - `emailMessage.location.address.country.accountOfProceeds`
   * - `emailMessage.location.address.country.locale`
   * - `emailMessage.location.address.country.unitSystem`
   * - `emailMessage.location.address.country.timeSystem`
   * - `emailMessage.location.address.country.firstDayOfWeek`
   * - `emailMessage.location.address.country.addressFormat`
   * - `emailMessage.location.address.country.appDefaultLanguageCode`
   * - `emailMessage.location.address.country.nativeLanguageCode`
   * - `emailMessage.location.address.country.languageCode`
   * - `emailMessage.location.address.country.isActive`
   * - `emailMessage.location.address.country.priority`
   * - `emailMessage.location.address.country.setting.type`
   * - `emailMessage.location.address.country.setting.firstnameBeforeLastname`
   * - `emailMessage.location.address.country.setting.showTitleField`
   * - `emailMessage.location.address.country.setting.showCookieNotice`
   * - `emailMessage.location.address.country.setting.availableCreditCards`
   * - `emailMessage.location.address.country.setting.defaultTrialMode`
   * - `emailMessage.location.address.country.setting.isActiveForPartners`
   * - `emailMessage.location.address.country.addressSetting.type`
   * - `emailMessage.location.address.country.addressSetting.streetNoIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.streetIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.cityIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.stateIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.countyIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.subCountyIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.location.address.country.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.location.address.country.addressSetting.streetNoFormat`
   * - `emailMessage.location.address.country.addressSetting.addressFormat`
   * - `emailMessage.location.address.country.id`
   * - `emailMessage.location.address.geoPoint.lat`
   * - `emailMessage.location.address.geoPoint.lng`
   * - `emailMessage.location.address.customerSelectedGeoPoint.lat`
   * - `emailMessage.location.address.customerSelectedGeoPoint.lng`
   * - `emailMessage.location.address.geoBounds.northeast.lat`
   * - `emailMessage.location.address.geoBounds.northeast.lng`
   * - `emailMessage.location.address.geoBounds.southwest.lat`
   * - `emailMessage.location.address.geoBounds.southwest.lng`
   * - `emailMessage.location.address.formattedAddress`
   * - `emailMessage.location.address.languageCode`
   * - `emailMessage.location.address.displayAddress`
   * - `emailMessage.location.address.inputAddress`
   * - `emailMessage.location.address.precision`
   * - `emailMessage.location.languageCode`
   * - `emailMessage.location.description.long`
   * - `emailMessage.location.description.short`
   * - `emailMessage.location.description.shortDescriptionMaxLength`
   * - `emailMessage.location.description.longDescriptionMaxLength`
   * - `emailMessage.location.isLocallyFocused`
   * - `emailMessage.location.serviceAreaType`
   * - `emailMessage.location.radius`
   * - `emailMessage.location.websiteId`
   * - `emailMessage.location.name`
   * - `emailMessage.location.seo.rankingsBusiness.domain.name`
   * - `emailMessage.location.seo.rankingsBusiness.domain.path`
   * - `emailMessage.location.seo.rankingsBusiness.domain.needsWww`
   * - `emailMessage.location.seo.rankingsBusiness.domain.needsHttps`
   * - `emailMessage.location.seo.rankingsBusiness.domain.excludePathInPageUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.unknownProtocol`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.status`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.isValid`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.validateWithoutProtocol`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.needsWww`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.needsNoWww`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.needsHttps`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.httpCode`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.contentLength`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.wordsCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.redirectCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.retryCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.initialUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.redirectUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.retryUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.filteredUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.timeout`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.countryShortCode`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.validationMode`
   * - `emailMessage.location.seo.rankingsBusiness.domain.content.content`
   * - `emailMessage.location.seo.rankingsBusiness.domain.content.objectiveSummary.objectiveSummaryText`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.domain`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.insufficientFundsIncidentCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.intentionalFailedPaymentIncidentCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.isCommonDomain`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.phishingTargetId`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.commonDomainRiskScore`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.id`
   * - `emailMessage.location.seo.rankingsBusiness.domain.id`
   * - `emailMessage.location.seo.rankingsBusiness.googleMapsId`
   * - `emailMessage.location.settings.googleConnection.connectionToken.tokenSetupState`
   * - `emailMessage.location.settings.googleConnection.connectionToken.expiresAt`
   * - `emailMessage.location.settings.googleConnection.connectionToken.issuedAt`
   * - `emailMessage.location.settings.googleConnection.connectionToken.token`
   * - `emailMessage.location.settings.googleConnection.connectionToken.refreshToken`
   * - `emailMessage.location.settings.googleConnection.connectionToken.apiScope`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.id`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.email`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.emailVerified`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.fullName`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.profilePicture`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.locale`
   * - `emailMessage.location.settings.googleConnection.connectionToken.locationInfo.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.googleConnection.connectionToken.locationInfo.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.googleConnection.connectionToken.locationInfo.googleIds.googleMapsId`
   * - `emailMessage.location.settings.googleConnection.connectionToken.locationInfo.locale`
   * - `emailMessage.location.settings.googleConnection.connectionToken.isActive`
   * - `emailMessage.location.settings.googleConnection.googleTokenConnectFlowInitUrl`
   * - `emailMessage.location.settings.googleConnection.connectionState`
   * - `emailMessage.location.settings.googleConnection.connectionType`
   * - `emailMessage.location.settings.googleConnection.profileState`
   * - `emailMessage.location.settings.googleConnection.syncState`
   * - `emailMessage.location.settings.googleConnection.prevConnectedExternalId`
   * - `emailMessage.location.settings.googleConnection.syncSettings.syncLocation`
   * - `emailMessage.location.settings.googleConnection.syncSettings.syncRequirementsSatisfied`
   * - `emailMessage.location.settings.googleConnection.syncSettings.syncLogoAndMainPhoto`
   * - `emailMessage.location.settings.googleConnection.syncSettings.syncGallery`
   * - `emailMessage.location.settings.googleConnection.syncSettings.lastSyncDate`
   * - `emailMessage.location.settings.googleConnection.syncSettings.numberOfSyncs`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.postalAddress`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.contactInfos`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.openingHours`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.website`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.company`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.categories`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.description`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.mediaitems`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.locationServiceAreas`
   * - `emailMessage.location.settings.googleConnection.throttleTimeLeft`
   * - `emailMessage.location.settings.googleConnection.profile.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.googleConnection.profile.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.googleConnection.profile.googleIds.googleMapsId`
   * - `emailMessage.location.settings.googleConnection.profile.googleMapsUrl`
   * - `emailMessage.location.settings.googleConnection.profile.newReviewUrl`
   * - `emailMessage.location.settings.googleConnection.profile.placesSearchForPotentialProfileTriedOnce`
   * - `emailMessage.location.settings.googleConnection.lastConnectionDate`
   * - `emailMessage.location.settings.uberallConnection.connectionState`
   * - `emailMessage.location.settings.uberallConnection.connectionType`
   * - `emailMessage.location.settings.uberallConnection.profileState`
   * - `emailMessage.location.settings.uberallConnection.syncState`
   * - `emailMessage.location.settings.uberallConnection.prevConnectedExternalId`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.syncLocation`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.syncRequirementsSatisfied`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.syncLogoAndMainPhoto`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.syncGallery`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.lastSyncDate`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.numberOfSyncs`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.postalAddress`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.contactInfos`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.openingHours`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.website`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.company`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.categories`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.description`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.mediaitems`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.locationServiceAreas`
   * - `emailMessage.location.settings.uberallConnection.throttleTimeLeft`
   * - `emailMessage.location.settings.uberallConnection.profile.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.uberallConnection.profile.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.uberallConnection.profile.googleIds.googleMapsId`
   * - `emailMessage.location.settings.uberallConnection.profile.googleMapsUrl`
   * - `emailMessage.location.settings.uberallConnection.profile.newReviewUrl`
   * - `emailMessage.location.settings.uberallConnection.profile.placesSearchForPotentialProfileTriedOnce`
   * - `emailMessage.location.settings.uberallConnection.lastConnectionDate`
   * - `emailMessage.location.settings.yextConnection.connectionState`
   * - `emailMessage.location.settings.yextConnection.connectionType`
   * - `emailMessage.location.settings.yextConnection.profileState`
   * - `emailMessage.location.settings.yextConnection.syncState`
   * - `emailMessage.location.settings.yextConnection.prevConnectedExternalId`
   * - `emailMessage.location.settings.yextConnection.syncSettings.syncLocation`
   * - `emailMessage.location.settings.yextConnection.syncSettings.syncRequirementsSatisfied`
   * - `emailMessage.location.settings.yextConnection.syncSettings.syncLogoAndMainPhoto`
   * - `emailMessage.location.settings.yextConnection.syncSettings.syncGallery`
   * - `emailMessage.location.settings.yextConnection.syncSettings.lastSyncDate`
   * - `emailMessage.location.settings.yextConnection.syncSettings.numberOfSyncs`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.postalAddress`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.contactInfos`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.openingHours`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.website`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.company`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.categories`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.description`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.mediaitems`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.locationServiceAreas`
   * - `emailMessage.location.settings.yextConnection.throttleTimeLeft`
   * - `emailMessage.location.settings.yextConnection.profile.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.yextConnection.profile.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.yextConnection.profile.googleIds.googleMapsId`
   * - `emailMessage.location.settings.yextConnection.profile.googleMapsUrl`
   * - `emailMessage.location.settings.yextConnection.profile.newReviewUrl`
   * - `emailMessage.location.settings.yextConnection.profile.placesSearchForPotentialProfileTriedOnce`
   * - `emailMessage.location.settings.yextConnection.lastConnectionDate`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.accessTokenState`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.expiresAt`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.issuedAt`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.isActive`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.isValid`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.isConnectedWithInstagram`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.tokenLifetime`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.token`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.apiScopes`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.id`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.profilePicture`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.lastName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.firstName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.title`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.academicTitle`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.jobTitle`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.gender.gender`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.locationId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.locationName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.primaryPhone`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.websiteUrl`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.primaryCategoryName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.languageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.premise`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.subpremise`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.streetNo`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.street`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.addressLine1`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.addressLine2`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.postalCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.postalCodeSuffix`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.sublocality`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.alias`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.stateId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.countryId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.languageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.geoPoint.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.geoPoint.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.hasCoordinates`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.branchCount`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.id`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.created`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.updated`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.subCounty.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.subCounty.shortCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.county.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.county.shortCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.alias`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.shortCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.countryId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.id`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.alias`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.parentCountryId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.type`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.tld`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.commonTld`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.shortCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.isoCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.phonePrefix`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.googleLocationName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.currency.isoCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.currency.symbol`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.currency.displaySymbolBeforeAmount`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.vatRate`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.euMember`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.taxKey`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.accountOfProceeds`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.locale`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.unitSystem`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.timeSystem`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.firstDayOfWeek`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressFormat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.appDefaultLanguageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.nativeLanguageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.languageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.isActive`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.priority`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.type`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.firstnameBeforeLastname`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.showTitleField`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.showCookieNotice`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.availableCreditCards`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.defaultTrialMode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.isActiveForPartners`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.type`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.streetNoIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.streetIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.cityIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.stateIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.countyIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.subCountyIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.streetNoFormat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.addressFormat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.id`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoPoint.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoPoint.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.customerSelectedGeoPoint.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.customerSelectedGeoPoint.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoBounds.northeast.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoBounds.northeast.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoBounds.southwest.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoBounds.southwest.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.formattedAddress`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.languageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.displayAddress`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.inputAddress`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.precision`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.locationUrl`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.locationProfilePictureUrl`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.pageToken`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.hasBaseScopes`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.hasInstagramScopes`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.hasBoostsScopes`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.hasBusinessManagrScopes`
   * - `emailMessage.location.settings.facebookConnection.facebookTokenConnectFlowInitUrl`
   * - `emailMessage.location.settings.facebookConnection.connectionState`
   * - `emailMessage.location.settings.facebookConnection.connectionType`
   * - `emailMessage.location.settings.facebookConnection.profileState`
   * - `emailMessage.location.settings.facebookConnection.syncState`
   * - `emailMessage.location.settings.facebookConnection.prevConnectedExternalId`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.syncLocation`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.syncRequirementsSatisfied`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.syncLogoAndMainPhoto`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.syncGallery`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.lastSyncDate`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.numberOfSyncs`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.postalAddress`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.contactInfos`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.openingHours`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.website`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.company`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.categories`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.description`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.mediaitems`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.locationServiceAreas`
   * - `emailMessage.location.settings.facebookConnection.throttleTimeLeft`
   * - `emailMessage.location.settings.facebookConnection.profile.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.facebookConnection.profile.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.facebookConnection.profile.googleIds.googleMapsId`
   * - `emailMessage.location.settings.facebookConnection.profile.googleMapsUrl`
   * - `emailMessage.location.settings.facebookConnection.profile.newReviewUrl`
   * - `emailMessage.location.settings.facebookConnection.profile.placesSearchForPotentialProfileTriedOnce`
   * - `emailMessage.location.settings.facebookConnection.lastConnectionDate`
   * - `emailMessage.location.settings.tasksSettings.reassignTasks`
   * - `emailMessage.location.settings.tasksSettings.initiallyValidated`
   * - `emailMessage.location.reputation.totalReviews`
   * - `emailMessage.location.reputation.averageRating`
   * - `emailMessage.location.reputation.reviewsWithoutReplies`
   * - `emailMessage.location.reputation.reputationScores.reputationScore.weight`
   * - `emailMessage.location.reputation.reputationScores.reputationScore.score`
   * - `emailMessage.location.reputation.reputationScores.averageRatingScore.averageRating`
   * - `emailMessage.location.reputation.reputationScores.averageRatingScore.weight`
   * - `emailMessage.location.reputation.reputationScores.averageRatingScore.score`
   * - `emailMessage.location.reputation.reputationScores.totalReviewsScore.totalReviews`
   * - `emailMessage.location.reputation.reputationScores.totalReviewsScore.weight`
   * - `emailMessage.location.reputation.reputationScores.totalReviewsScore.score`
   * - `emailMessage.location.reputation.reputationScores.repliesRateScore.reviewsRepliesPercentage`
   * - `emailMessage.location.reputation.reputationScores.repliesRateScore.weight`
   * - `emailMessage.location.reputation.reputationScores.repliesRateScore.score`
   * - `emailMessage.location.reputation.reputationScores.reviewsLengthScore.averageReviewsLength`
   * - `emailMessage.location.reputation.reputationScores.reviewsLengthScore.weight`
   * - `emailMessage.location.reputation.reputationScores.reviewsLengthScore.score`
   * - `emailMessage.location.reputation.reputationScores.reviewsRecencyScore.averageReviewsRecency`
   * - `emailMessage.location.reputation.reputationScores.reviewsRecencyScore.weight`
   * - `emailMessage.location.reputation.reputationScores.reviewsRecencyScore.score`
   * - `emailMessage.location.reputation.reputationScores.id`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithOneStar`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithTwoStars`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithThreeStars`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithFourStars`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithFiveStars`
   * - `emailMessage.location.reputation.reviewsDistribution.badReviews`
   * - `emailMessage.location.reputation.reviewsDistribution.neutralReviews`
   * - `emailMessage.location.reputation.reviewsDistribution.goodReviews`
   * - `emailMessage.location.reputation.reviewsDistribution.totalReviews`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithOneStar`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithTwoStars`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithThreeStars`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithFourStars`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithFiveStars`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.badReviews`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.neutralReviews`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.goodReviews`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.totalReviews`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithOneStar`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithTwoStars`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithThreeStars`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithFourStars`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithFiveStars`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.badReviews`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.neutralReviews`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.goodReviews`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.totalReviews`
   * - `emailMessage.location.reputation.hasReviews`
   * - `emailMessage.location.engagement.postsSummary.totalCount`
   * - `emailMessage.location.engagement.postsSummary.scheduledCount`
   * - `emailMessage.location.engagement.postsSummary.publishedCount`
   * - `emailMessage.location.engagement.postsSummary.publishingCount`
   * - `emailMessage.location.engagement.postsSummary.notApprovedCount`
   * - `emailMessage.location.engagement.postsSummary.draftCount`
   * - `emailMessage.location.engagement.postsSummary.errorCount`
   * - `emailMessage.location.engagement.eventsSummary.pendingVerificationCount`
   * - `emailMessage.location.engagement.eventsSummary.pastCount`
   * - `emailMessage.location.engagement.eventsSummary.totalCount`
   * - `emailMessage.location.engagement.eventsSummary.scheduledCount`
   * - `emailMessage.location.engagement.eventsSummary.publishedCount`
   * - `emailMessage.location.engagement.eventsSummary.publishingCount`
   * - `emailMessage.location.engagement.eventsSummary.notApprovedCount`
   * - `emailMessage.location.engagement.eventsSummary.draftCount`
   * - `emailMessage.location.engagement.eventsSummary.errorCount`
   * - `emailMessage.location.id`
   * - `emailMessage.location.created`
   * - `emailMessage.location.updated`
   * - `emailMessage.project.accountId`
   * - `emailMessage.project.status`
   * - `emailMessage.project.settings.setup.featureFlagSetting.allowedCountryShortCodes`
   * - `emailMessage.project.settings.setup.featureFlagSetting.lockCountrySelectionAfterSetup`
   * - `emailMessage.project.settings.setup.featureFlagSetting.allowProjectPrefill`
   * - `emailMessage.project.settings.setup.featureFlagSetting.stepsToHide`
   * - `emailMessage.project.settings.setup.featureFlagSetting.notAllowAnyUpsellTriggersForType`
   * - `emailMessage.project.settings.setup.featureFlagSetting.allowUserToChangeDomain`
   * - `emailMessage.project.settings.setup.keywordsFeatureFlagSetting.keywordsAvailable`
   * - `emailMessage.project.settings.setup.locationsFeatureFlagSetting.locationsAvailable`
   * - `emailMessage.project.settings.setup.competitorsFeatureFlagSetting.competitorsAvailable`
   * - `emailMessage.project.settings.seo.seoRankingsFeatureFlagSetting.keywordsDisplayed`
   * - `emailMessage.project.settings.seo.displayKeywordVisibilityComparison`
   * - `emailMessage.project.settings.seo.displayTopKeywords`
   * - `emailMessage.project.settings.seo.hasCustomCMSTypeOrder`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMin.currency.isoCode`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMin.currency.symbol`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMin.currency.displaySymbolBeforeAmount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMin.amount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMax.currency.isoCode`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMax.currency.symbol`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMax.currency.displaySymbolBeforeAmount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMax.amount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMin.currency.isoCode`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMin.currency.symbol`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMin.currency.displaySymbolBeforeAmount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMin.amount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMax.currency.isoCode`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMax.currency.symbol`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMax.currency.displaySymbolBeforeAmount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMax.amount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.isPreviewFeatureFlagSetting`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.durationOfInitialBudgetRestrictions`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.handlingFee.appliedAfter`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.handlingFee.ownShare`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.handlingFee.resellerShare`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.voucherDistributionMethod`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.voucherDistributionMethodStartDate`
   * - `emailMessage.project.settings.presence.analysis`
   * - `emailMessage.project.settings.rights.delete`
   * - `emailMessage.project.settings.rights.update`
   * - `emailMessage.project.settings.aiBudget.aiBudgetFeatureFlagSetting.monthlyAIBudgetPerProjectInUSD`
   * - `emailMessage.project.id`
   * - `emailMessage.project.created`
   * - `emailMessage.project.updated`
   * - `emailMessage.account.status`
   * - `emailMessage.account.owner.lastName`
   * - `emailMessage.account.owner.firstName`
   * - `emailMessage.account.owner.title`
   * - `emailMessage.account.owner.academicTitle`
   * - `emailMessage.account.owner.jobTitle`
   * - `emailMessage.account.owner.gender.gender`
   * - `emailMessage.account.invoiceCountry.name`
   * - `emailMessage.account.invoiceCountry.alias`
   * - `emailMessage.account.invoiceCountry.parentCountryId`
   * - `emailMessage.account.invoiceCountry.type`
   * - `emailMessage.account.invoiceCountry.tld`
   * - `emailMessage.account.invoiceCountry.commonTld`
   * - `emailMessage.account.invoiceCountry.shortCode`
   * - `emailMessage.account.invoiceCountry.isoCode`
   * - `emailMessage.account.invoiceCountry.phonePrefix`
   * - `emailMessage.account.invoiceCountry.googleLocationName`
   * - `emailMessage.account.invoiceCountry.currency.isoCode`
   * - `emailMessage.account.invoiceCountry.currency.symbol`
   * - `emailMessage.account.invoiceCountry.currency.displaySymbolBeforeAmount`
   * - `emailMessage.account.invoiceCountry.vatRate`
   * - `emailMessage.account.invoiceCountry.euMember`
   * - `emailMessage.account.invoiceCountry.taxKey`
   * - `emailMessage.account.invoiceCountry.accountOfProceeds`
   * - `emailMessage.account.invoiceCountry.locale`
   * - `emailMessage.account.invoiceCountry.unitSystem`
   * - `emailMessage.account.invoiceCountry.timeSystem`
   * - `emailMessage.account.invoiceCountry.firstDayOfWeek`
   * - `emailMessage.account.invoiceCountry.addressFormat`
   * - `emailMessage.account.invoiceCountry.appDefaultLanguageCode`
   * - `emailMessage.account.invoiceCountry.nativeLanguageCode`
   * - `emailMessage.account.invoiceCountry.languageCode`
   * - `emailMessage.account.invoiceCountry.isActive`
   * - `emailMessage.account.invoiceCountry.priority`
   * - `emailMessage.account.invoiceCountry.setting.type`
   * - `emailMessage.account.invoiceCountry.setting.firstnameBeforeLastname`
   * - `emailMessage.account.invoiceCountry.setting.showTitleField`
   * - `emailMessage.account.invoiceCountry.setting.showCookieNotice`
   * - `emailMessage.account.invoiceCountry.setting.availableCreditCards`
   * - `emailMessage.account.invoiceCountry.setting.defaultTrialMode`
   * - `emailMessage.account.invoiceCountry.setting.isActiveForPartners`
   * - `emailMessage.account.invoiceCountry.addressSetting.type`
   * - `emailMessage.account.invoiceCountry.addressSetting.streetNoIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.streetIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.cityIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.stateIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.countyIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.subCountyIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.account.invoiceCountry.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.account.invoiceCountry.addressSetting.streetNoFormat`
   * - `emailMessage.account.invoiceCountry.addressSetting.addressFormat`
   * - `emailMessage.account.invoiceCountry.id`
   * - `emailMessage.account.invoiceCountryId`
   * - `emailMessage.account.resellerId`
   * - `emailMessage.account.affiliate.name`
   * - `emailMessage.account.affiliate.id`
   * - `emailMessage.account.apiAccountId`
   * - `emailMessage.account.parentAccountId`
   * - `emailMessage.account.isSandboxAccount`
   * - `emailMessage.account.isSpecialAccount`
   * - `emailMessage.account.type`
   * - `emailMessage.account.password`
   * - `emailMessage.account.billingCompany.legalEntity.name`
   * - `emailMessage.account.billingCompany.legalEntity.fullName`
   * - `emailMessage.account.billingCompany.legalEntity.type`
   * - `emailMessage.account.billingCompany.registrationNumber.number`
   * - `emailMessage.account.billingCompany.registrationNumber.commercialRegistryOffice`
   * - `emailMessage.account.billingCompany.taxIdentificationNumber.number`
   * - `emailMessage.account.billingCompany.vatId.vatId`
   * - `emailMessage.account.billingCompany.doingBusinessAsName`
   * - `emailMessage.account.billingAddress.premise`
   * - `emailMessage.account.billingAddress.subpremise`
   * - `emailMessage.account.billingAddress.streetNo`
   * - `emailMessage.account.billingAddress.street`
   * - `emailMessage.account.billingAddress.addressLine1`
   * - `emailMessage.account.billingAddress.addressLine2`
   * - `emailMessage.account.billingAddress.postalCode`
   * - `emailMessage.account.billingAddress.postalCodeSuffix`
   * - `emailMessage.account.billingAddress.sublocality`
   * - `emailMessage.account.billingAddress.city.name`
   * - `emailMessage.account.billingAddress.city.alias`
   * - `emailMessage.account.billingAddress.city.stateId`
   * - `emailMessage.account.billingAddress.city.countryId`
   * - `emailMessage.account.billingAddress.city.languageCode`
   * - `emailMessage.account.billingAddress.city.geoPoint.lat`
   * - `emailMessage.account.billingAddress.city.geoPoint.lng`
   * - `emailMessage.account.billingAddress.city.hasCoordinates`
   * - `emailMessage.account.billingAddress.city.branchCount`
   * - `emailMessage.account.billingAddress.city.id`
   * - `emailMessage.account.billingAddress.city.created`
   * - `emailMessage.account.billingAddress.city.updated`
   * - `emailMessage.account.billingAddress.subCounty.name`
   * - `emailMessage.account.billingAddress.subCounty.shortCode`
   * - `emailMessage.account.billingAddress.county.name`
   * - `emailMessage.account.billingAddress.county.shortCode`
   * - `emailMessage.account.billingAddress.state.name`
   * - `emailMessage.account.billingAddress.state.alias`
   * - `emailMessage.account.billingAddress.state.shortCode`
   * - `emailMessage.account.billingAddress.state.countryId`
   * - `emailMessage.account.billingAddress.state.id`
   * - `emailMessage.account.billingAddress.country.name`
   * - `emailMessage.account.billingAddress.country.alias`
   * - `emailMessage.account.billingAddress.country.parentCountryId`
   * - `emailMessage.account.billingAddress.country.type`
   * - `emailMessage.account.billingAddress.country.tld`
   * - `emailMessage.account.billingAddress.country.commonTld`
   * - `emailMessage.account.billingAddress.country.shortCode`
   * - `emailMessage.account.billingAddress.country.isoCode`
   * - `emailMessage.account.billingAddress.country.phonePrefix`
   * - `emailMessage.account.billingAddress.country.googleLocationName`
   * - `emailMessage.account.billingAddress.country.currency.isoCode`
   * - `emailMessage.account.billingAddress.country.currency.symbol`
   * - `emailMessage.account.billingAddress.country.currency.displaySymbolBeforeAmount`
   * - `emailMessage.account.billingAddress.country.vatRate`
   * - `emailMessage.account.billingAddress.country.euMember`
   * - `emailMessage.account.billingAddress.country.taxKey`
   * - `emailMessage.account.billingAddress.country.accountOfProceeds`
   * - `emailMessage.account.billingAddress.country.locale`
   * - `emailMessage.account.billingAddress.country.unitSystem`
   * - `emailMessage.account.billingAddress.country.timeSystem`
   * - `emailMessage.account.billingAddress.country.firstDayOfWeek`
   * - `emailMessage.account.billingAddress.country.addressFormat`
   * - `emailMessage.account.billingAddress.country.appDefaultLanguageCode`
   * - `emailMessage.account.billingAddress.country.nativeLanguageCode`
   * - `emailMessage.account.billingAddress.country.languageCode`
   * - `emailMessage.account.billingAddress.country.isActive`
   * - `emailMessage.account.billingAddress.country.priority`
   * - `emailMessage.account.billingAddress.country.setting.type`
   * - `emailMessage.account.billingAddress.country.setting.firstnameBeforeLastname`
   * - `emailMessage.account.billingAddress.country.setting.showTitleField`
   * - `emailMessage.account.billingAddress.country.setting.showCookieNotice`
   * - `emailMessage.account.billingAddress.country.setting.availableCreditCards`
   * - `emailMessage.account.billingAddress.country.setting.defaultTrialMode`
   * - `emailMessage.account.billingAddress.country.setting.isActiveForPartners`
   * - `emailMessage.account.billingAddress.country.addressSetting.type`
   * - `emailMessage.account.billingAddress.country.addressSetting.streetNoIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.streetIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.cityIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.stateIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.countyIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.subCountyIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.account.billingAddress.country.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.account.billingAddress.country.addressSetting.streetNoFormat`
   * - `emailMessage.account.billingAddress.country.addressSetting.addressFormat`
   * - `emailMessage.account.billingAddress.country.id`
   * - `emailMessage.account.billingAddress.geoPoint.lat`
   * - `emailMessage.account.billingAddress.geoPoint.lng`
   * - `emailMessage.account.billingAddress.customerSelectedGeoPoint.lat`
   * - `emailMessage.account.billingAddress.customerSelectedGeoPoint.lng`
   * - `emailMessage.account.billingAddress.geoBounds.northeast.lat`
   * - `emailMessage.account.billingAddress.geoBounds.northeast.lng`
   * - `emailMessage.account.billingAddress.geoBounds.southwest.lat`
   * - `emailMessage.account.billingAddress.geoBounds.southwest.lng`
   * - `emailMessage.account.billingAddress.formattedAddress`
   * - `emailMessage.account.billingAddress.languageCode`
   * - `emailMessage.account.billingAddress.displayAddress`
   * - `emailMessage.account.billingAddress.inputAddress`
   * - `emailMessage.account.billingAddress.precision`
   * - `emailMessage.account.languageCode`
   * - `emailMessage.account.totalNumberOfActiveProjects`
   * - `emailMessage.account.email`
   * - `emailMessage.account.id`
   * - `emailMessage.partnerCompanySetting.company.legalEntity.name`
   * - `emailMessage.partnerCompanySetting.company.legalEntity.fullName`
   * - `emailMessage.partnerCompanySetting.company.legalEntity.type`
   * - `emailMessage.partnerCompanySetting.company.registrationNumber.number`
   * - `emailMessage.partnerCompanySetting.company.registrationNumber.commercialRegistryOffice`
   * - `emailMessage.partnerCompanySetting.company.taxIdentificationNumber.number`
   * - `emailMessage.partnerCompanySetting.company.vatId.vatId`
   * - `emailMessage.partnerCompanySetting.company.doingBusinessAsName`
   * - `emailMessage.partnerCompanySetting.footerLegalData`
   * - `emailMessage.partnerCompanySetting.address.premise`
   * - `emailMessage.partnerCompanySetting.address.subpremise`
   * - `emailMessage.partnerCompanySetting.address.streetNo`
   * - `emailMessage.partnerCompanySetting.address.street`
   * - `emailMessage.partnerCompanySetting.address.addressLine1`
   * - `emailMessage.partnerCompanySetting.address.addressLine2`
   * - `emailMessage.partnerCompanySetting.address.postalCode`
   * - `emailMessage.partnerCompanySetting.address.postalCodeSuffix`
   * - `emailMessage.partnerCompanySetting.address.sublocality`
   * - `emailMessage.partnerCompanySetting.address.city.name`
   * - `emailMessage.partnerCompanySetting.address.city.alias`
   * - `emailMessage.partnerCompanySetting.address.city.stateId`
   * - `emailMessage.partnerCompanySetting.address.city.countryId`
   * - `emailMessage.partnerCompanySetting.address.city.languageCode`
   * - `emailMessage.partnerCompanySetting.address.city.geoPoint.lat`
   * - `emailMessage.partnerCompanySetting.address.city.geoPoint.lng`
   * - `emailMessage.partnerCompanySetting.address.city.hasCoordinates`
   * - `emailMessage.partnerCompanySetting.address.city.branchCount`
   * - `emailMessage.partnerCompanySetting.address.city.id`
   * - `emailMessage.partnerCompanySetting.address.city.created`
   * - `emailMessage.partnerCompanySetting.address.city.updated`
   * - `emailMessage.partnerCompanySetting.address.subCounty.name`
   * - `emailMessage.partnerCompanySetting.address.subCounty.shortCode`
   * - `emailMessage.partnerCompanySetting.address.county.name`
   * - `emailMessage.partnerCompanySetting.address.county.shortCode`
   * - `emailMessage.partnerCompanySetting.address.state.name`
   * - `emailMessage.partnerCompanySetting.address.state.alias`
   * - `emailMessage.partnerCompanySetting.address.state.shortCode`
   * - `emailMessage.partnerCompanySetting.address.state.countryId`
   * - `emailMessage.partnerCompanySetting.address.state.id`
   * - `emailMessage.partnerCompanySetting.address.country.name`
   * - `emailMessage.partnerCompanySetting.address.country.alias`
   * - `emailMessage.partnerCompanySetting.address.country.parentCountryId`
   * - `emailMessage.partnerCompanySetting.address.country.type`
   * - `emailMessage.partnerCompanySetting.address.country.tld`
   * - `emailMessage.partnerCompanySetting.address.country.commonTld`
   * - `emailMessage.partnerCompanySetting.address.country.shortCode`
   * - `emailMessage.partnerCompanySetting.address.country.isoCode`
   * - `emailMessage.partnerCompanySetting.address.country.phonePrefix`
   * - `emailMessage.partnerCompanySetting.address.country.googleLocationName`
   * - `emailMessage.partnerCompanySetting.address.country.currency.isoCode`
   * - `emailMessage.partnerCompanySetting.address.country.currency.symbol`
   * - `emailMessage.partnerCompanySetting.address.country.currency.displaySymbolBeforeAmount`
   * - `emailMessage.partnerCompanySetting.address.country.vatRate`
   * - `emailMessage.partnerCompanySetting.address.country.euMember`
   * - `emailMessage.partnerCompanySetting.address.country.taxKey`
   * - `emailMessage.partnerCompanySetting.address.country.accountOfProceeds`
   * - `emailMessage.partnerCompanySetting.address.country.locale`
   * - `emailMessage.partnerCompanySetting.address.country.unitSystem`
   * - `emailMessage.partnerCompanySetting.address.country.timeSystem`
   * - `emailMessage.partnerCompanySetting.address.country.firstDayOfWeek`
   * - `emailMessage.partnerCompanySetting.address.country.addressFormat`
   * - `emailMessage.partnerCompanySetting.address.country.appDefaultLanguageCode`
   * - `emailMessage.partnerCompanySetting.address.country.nativeLanguageCode`
   * - `emailMessage.partnerCompanySetting.address.country.languageCode`
   * - `emailMessage.partnerCompanySetting.address.country.isActive`
   * - `emailMessage.partnerCompanySetting.address.country.priority`
   * - `emailMessage.partnerCompanySetting.address.country.setting.type`
   * - `emailMessage.partnerCompanySetting.address.country.setting.firstnameBeforeLastname`
   * - `emailMessage.partnerCompanySetting.address.country.setting.showTitleField`
   * - `emailMessage.partnerCompanySetting.address.country.setting.showCookieNotice`
   * - `emailMessage.partnerCompanySetting.address.country.setting.availableCreditCards`
   * - `emailMessage.partnerCompanySetting.address.country.setting.defaultTrialMode`
   * - `emailMessage.partnerCompanySetting.address.country.setting.isActiveForPartners`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.type`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.streetNoIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.streetIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.cityIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.stateIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.countyIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.subCountyIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.streetNoFormat`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.addressFormat`
   * - `emailMessage.partnerCompanySetting.address.country.id`
   * - `emailMessage.partnerCompanySetting.address.geoPoint.lat`
   * - `emailMessage.partnerCompanySetting.address.geoPoint.lng`
   * - `emailMessage.partnerCompanySetting.address.customerSelectedGeoPoint.lat`
   * - `emailMessage.partnerCompanySetting.address.customerSelectedGeoPoint.lng`
   * - `emailMessage.partnerCompanySetting.address.geoBounds.northeast.lat`
   * - `emailMessage.partnerCompanySetting.address.geoBounds.northeast.lng`
   * - `emailMessage.partnerCompanySetting.address.geoBounds.southwest.lat`
   * - `emailMessage.partnerCompanySetting.address.geoBounds.southwest.lng`
   * - `emailMessage.partnerCompanySetting.address.formattedAddress`
   * - `emailMessage.partnerCompanySetting.address.languageCode`
   * - `emailMessage.partnerCompanySetting.address.displayAddress`
   * - `emailMessage.partnerCompanySetting.address.inputAddress`
   * - `emailMessage.partnerCompanySetting.address.precision`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.instagram`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.facebook`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.youtube`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.twitter`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.tiktok`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.linkedin`
   * - `emailMessage.partnerCompanySetting.websiteURLs.legalDataURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.termsAndConditionsURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.customerSupportURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.manageNotificationURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.privacyURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.blogOrNewsURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.aboutURL`
   * - `emailMessage.productThemeSetting.logo.publicUrl`
   * - `emailMessage.productThemeSetting.logo.description`
   * - `emailMessage.productThemeSetting.logo.type`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.base64EncodedContent`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.height`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.width`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.fileSize`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.fileFormat`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.body`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.name`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.compression`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.externalId`
   * - `emailMessage.productThemeSetting.primaryShades.displayPrefix`
   * - `emailMessage.productThemeSetting.secondaryShades.displayPrefix`
   * - `emailMessage.partnerEmailSetting.sendReports`
   * - `emailMessage.partnerEmailSetting.sender.name`
   * - `emailMessage.partnerEmailSetting.sender.email`
   * - `emailMessage.partnerEmailSetting.mediaRootUrl`
   * - `emailMessage.partnerEmailSetting.customDomain`
   * - `emailMessage.partnerEmailSetting.useProductNameAsSenderName`
   * - `emailMessage.partnerEmailSetting.passIntercomMailsThroughTemplatingSystem`
   * - `emailMessage.partnerEmailSetting.sendIntercomActivationCampaign`
   * - `emailMessage.partnerProductSetting.additionalLicenseFee`
   * - `emailMessage.partnerProductSetting.initialSetupFee`
   * - `emailMessage.partnerProductSetting.initialSetupFeeInclVat`
   * - `emailMessage.partnerProductSetting.billOnlyIfSetupCompleted`
   * - `emailMessage.partnerProductSetting.useInvoiceCountryCurrencyForBilling`
   * - `emailMessage.partnerProductSetting.logoutUrl`
   * - `emailMessage.partnerProductSetting.productUrl`
   * - `emailMessage.partnerProductSetting.redirectLoggedInAccountsToApplication`
   * - `emailMessage.partnerProductSetting.partnerSubbrand`
   * - `emailMessage.partnerProductSetting.customSupportSystemType`
   * - `emailMessage.partnerProductSetting.billOnlyIfSetupCompletedRuleAppliedAfterDate`
   * - `emailMessage.partnerProductSetting.externalId`
   * - `emailMessage.partnerProductSetting.disableDefaultReviewsReplySuggestions`
   * - `emailMessage.mjmlContent.content`
   * - `emailMessage.htmlContent.content`
   * - `emailMessage.from.name`
   * - `emailMessage.from.email`
   * - `emailMessage.subject`
   * - `emailMessage.campaignId`
   * - `handlingError`
   * - `id`
   * - `created`
   * - `updated`</details>
   */
  filters?: string;
};
export type GetClientReputationLocationsReviewsRequestsEmailsCountSentThisMonthByLocationIdOpts = {
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
   *
   * - `customerEmail`
   * - `customerName`
   * - `isOptIn`
   * - `status`
   * - `sendAt`
   * - `locationReviewRequestId`
   * - `locationId`
   * - `isActive`
   * - `writingStyle`
   * - `emailMessage.location.businessId`
   * - `emailMessage.location.company.legalEntity.name`
   * - `emailMessage.location.company.legalEntity.fullName`
   * - `emailMessage.location.company.legalEntity.type`
   * - `emailMessage.location.company.registrationNumber.number`
   * - `emailMessage.location.company.registrationNumber.commercialRegistryOffice`
   * - `emailMessage.location.company.taxIdentificationNumber.number`
   * - `emailMessage.location.company.vatId.vatId`
   * - `emailMessage.location.company.doingBusinessAsName`
   * - `emailMessage.location.address.premise`
   * - `emailMessage.location.address.subpremise`
   * - `emailMessage.location.address.streetNo`
   * - `emailMessage.location.address.street`
   * - `emailMessage.location.address.addressLine1`
   * - `emailMessage.location.address.addressLine2`
   * - `emailMessage.location.address.postalCode`
   * - `emailMessage.location.address.postalCodeSuffix`
   * - `emailMessage.location.address.sublocality`
   * - `emailMessage.location.address.city.name`
   * - `emailMessage.location.address.city.alias`
   * - `emailMessage.location.address.city.stateId`
   * - `emailMessage.location.address.city.countryId`
   * - `emailMessage.location.address.city.languageCode`
   * - `emailMessage.location.address.city.geoPoint.lat`
   * - `emailMessage.location.address.city.geoPoint.lng`
   * - `emailMessage.location.address.city.hasCoordinates`
   * - `emailMessage.location.address.city.branchCount`
   * - `emailMessage.location.address.city.id`
   * - `emailMessage.location.address.city.created`
   * - `emailMessage.location.address.city.updated`
   * - `emailMessage.location.address.subCounty.name`
   * - `emailMessage.location.address.subCounty.shortCode`
   * - `emailMessage.location.address.county.name`
   * - `emailMessage.location.address.county.shortCode`
   * - `emailMessage.location.address.state.name`
   * - `emailMessage.location.address.state.alias`
   * - `emailMessage.location.address.state.shortCode`
   * - `emailMessage.location.address.state.countryId`
   * - `emailMessage.location.address.state.id`
   * - `emailMessage.location.address.country.name`
   * - `emailMessage.location.address.country.alias`
   * - `emailMessage.location.address.country.parentCountryId`
   * - `emailMessage.location.address.country.type`
   * - `emailMessage.location.address.country.tld`
   * - `emailMessage.location.address.country.commonTld`
   * - `emailMessage.location.address.country.shortCode`
   * - `emailMessage.location.address.country.isoCode`
   * - `emailMessage.location.address.country.phonePrefix`
   * - `emailMessage.location.address.country.googleLocationName`
   * - `emailMessage.location.address.country.currency.isoCode`
   * - `emailMessage.location.address.country.currency.symbol`
   * - `emailMessage.location.address.country.currency.displaySymbolBeforeAmount`
   * - `emailMessage.location.address.country.vatRate`
   * - `emailMessage.location.address.country.euMember`
   * - `emailMessage.location.address.country.taxKey`
   * - `emailMessage.location.address.country.accountOfProceeds`
   * - `emailMessage.location.address.country.locale`
   * - `emailMessage.location.address.country.unitSystem`
   * - `emailMessage.location.address.country.timeSystem`
   * - `emailMessage.location.address.country.firstDayOfWeek`
   * - `emailMessage.location.address.country.addressFormat`
   * - `emailMessage.location.address.country.appDefaultLanguageCode`
   * - `emailMessage.location.address.country.nativeLanguageCode`
   * - `emailMessage.location.address.country.languageCode`
   * - `emailMessage.location.address.country.isActive`
   * - `emailMessage.location.address.country.priority`
   * - `emailMessage.location.address.country.setting.type`
   * - `emailMessage.location.address.country.setting.firstnameBeforeLastname`
   * - `emailMessage.location.address.country.setting.showTitleField`
   * - `emailMessage.location.address.country.setting.showCookieNotice`
   * - `emailMessage.location.address.country.setting.availableCreditCards`
   * - `emailMessage.location.address.country.setting.defaultTrialMode`
   * - `emailMessage.location.address.country.setting.isActiveForPartners`
   * - `emailMessage.location.address.country.addressSetting.type`
   * - `emailMessage.location.address.country.addressSetting.streetNoIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.streetIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.cityIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.stateIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.countyIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.subCountyIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.location.address.country.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.location.address.country.addressSetting.streetNoFormat`
   * - `emailMessage.location.address.country.addressSetting.addressFormat`
   * - `emailMessage.location.address.country.id`
   * - `emailMessage.location.address.geoPoint.lat`
   * - `emailMessage.location.address.geoPoint.lng`
   * - `emailMessage.location.address.customerSelectedGeoPoint.lat`
   * - `emailMessage.location.address.customerSelectedGeoPoint.lng`
   * - `emailMessage.location.address.geoBounds.northeast.lat`
   * - `emailMessage.location.address.geoBounds.northeast.lng`
   * - `emailMessage.location.address.geoBounds.southwest.lat`
   * - `emailMessage.location.address.geoBounds.southwest.lng`
   * - `emailMessage.location.address.formattedAddress`
   * - `emailMessage.location.address.languageCode`
   * - `emailMessage.location.address.displayAddress`
   * - `emailMessage.location.address.inputAddress`
   * - `emailMessage.location.address.precision`
   * - `emailMessage.location.languageCode`
   * - `emailMessage.location.description.long`
   * - `emailMessage.location.description.short`
   * - `emailMessage.location.description.shortDescriptionMaxLength`
   * - `emailMessage.location.description.longDescriptionMaxLength`
   * - `emailMessage.location.isLocallyFocused`
   * - `emailMessage.location.serviceAreaType`
   * - `emailMessage.location.radius`
   * - `emailMessage.location.websiteId`
   * - `emailMessage.location.name`
   * - `emailMessage.location.seo.rankingsBusiness.domain.name`
   * - `emailMessage.location.seo.rankingsBusiness.domain.path`
   * - `emailMessage.location.seo.rankingsBusiness.domain.needsWww`
   * - `emailMessage.location.seo.rankingsBusiness.domain.needsHttps`
   * - `emailMessage.location.seo.rankingsBusiness.domain.excludePathInPageUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.unknownProtocol`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.status`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.isValid`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.validateWithoutProtocol`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.needsWww`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.needsNoWww`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.needsHttps`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.httpCode`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.contentLength`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.wordsCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.redirectCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.retryCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.initialUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.redirectUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.retryUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.filteredUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.timeout`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.countryShortCode`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.validationMode`
   * - `emailMessage.location.seo.rankingsBusiness.domain.content.content`
   * - `emailMessage.location.seo.rankingsBusiness.domain.content.objectiveSummary.objectiveSummaryText`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.domain`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.insufficientFundsIncidentCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.intentionalFailedPaymentIncidentCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.isCommonDomain`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.phishingTargetId`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.commonDomainRiskScore`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.id`
   * - `emailMessage.location.seo.rankingsBusiness.domain.id`
   * - `emailMessage.location.seo.rankingsBusiness.googleMapsId`
   * - `emailMessage.location.settings.googleConnection.connectionToken.tokenSetupState`
   * - `emailMessage.location.settings.googleConnection.connectionToken.expiresAt`
   * - `emailMessage.location.settings.googleConnection.connectionToken.issuedAt`
   * - `emailMessage.location.settings.googleConnection.connectionToken.token`
   * - `emailMessage.location.settings.googleConnection.connectionToken.refreshToken`
   * - `emailMessage.location.settings.googleConnection.connectionToken.apiScope`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.id`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.email`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.emailVerified`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.fullName`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.profilePicture`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.locale`
   * - `emailMessage.location.settings.googleConnection.connectionToken.locationInfo.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.googleConnection.connectionToken.locationInfo.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.googleConnection.connectionToken.locationInfo.googleIds.googleMapsId`
   * - `emailMessage.location.settings.googleConnection.connectionToken.locationInfo.locale`
   * - `emailMessage.location.settings.googleConnection.connectionToken.isActive`
   * - `emailMessage.location.settings.googleConnection.googleTokenConnectFlowInitUrl`
   * - `emailMessage.location.settings.googleConnection.connectionState`
   * - `emailMessage.location.settings.googleConnection.connectionType`
   * - `emailMessage.location.settings.googleConnection.profileState`
   * - `emailMessage.location.settings.googleConnection.syncState`
   * - `emailMessage.location.settings.googleConnection.prevConnectedExternalId`
   * - `emailMessage.location.settings.googleConnection.syncSettings.syncLocation`
   * - `emailMessage.location.settings.googleConnection.syncSettings.syncRequirementsSatisfied`
   * - `emailMessage.location.settings.googleConnection.syncSettings.syncLogoAndMainPhoto`
   * - `emailMessage.location.settings.googleConnection.syncSettings.syncGallery`
   * - `emailMessage.location.settings.googleConnection.syncSettings.lastSyncDate`
   * - `emailMessage.location.settings.googleConnection.syncSettings.numberOfSyncs`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.postalAddress`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.contactInfos`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.openingHours`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.website`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.company`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.categories`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.description`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.mediaitems`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.locationServiceAreas`
   * - `emailMessage.location.settings.googleConnection.throttleTimeLeft`
   * - `emailMessage.location.settings.googleConnection.profile.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.googleConnection.profile.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.googleConnection.profile.googleIds.googleMapsId`
   * - `emailMessage.location.settings.googleConnection.profile.googleMapsUrl`
   * - `emailMessage.location.settings.googleConnection.profile.newReviewUrl`
   * - `emailMessage.location.settings.googleConnection.profile.placesSearchForPotentialProfileTriedOnce`
   * - `emailMessage.location.settings.googleConnection.lastConnectionDate`
   * - `emailMessage.location.settings.uberallConnection.connectionState`
   * - `emailMessage.location.settings.uberallConnection.connectionType`
   * - `emailMessage.location.settings.uberallConnection.profileState`
   * - `emailMessage.location.settings.uberallConnection.syncState`
   * - `emailMessage.location.settings.uberallConnection.prevConnectedExternalId`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.syncLocation`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.syncRequirementsSatisfied`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.syncLogoAndMainPhoto`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.syncGallery`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.lastSyncDate`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.numberOfSyncs`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.postalAddress`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.contactInfos`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.openingHours`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.website`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.company`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.categories`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.description`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.mediaitems`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.locationServiceAreas`
   * - `emailMessage.location.settings.uberallConnection.throttleTimeLeft`
   * - `emailMessage.location.settings.uberallConnection.profile.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.uberallConnection.profile.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.uberallConnection.profile.googleIds.googleMapsId`
   * - `emailMessage.location.settings.uberallConnection.profile.googleMapsUrl`
   * - `emailMessage.location.settings.uberallConnection.profile.newReviewUrl`
   * - `emailMessage.location.settings.uberallConnection.profile.placesSearchForPotentialProfileTriedOnce`
   * - `emailMessage.location.settings.uberallConnection.lastConnectionDate`
   * - `emailMessage.location.settings.yextConnection.connectionState`
   * - `emailMessage.location.settings.yextConnection.connectionType`
   * - `emailMessage.location.settings.yextConnection.profileState`
   * - `emailMessage.location.settings.yextConnection.syncState`
   * - `emailMessage.location.settings.yextConnection.prevConnectedExternalId`
   * - `emailMessage.location.settings.yextConnection.syncSettings.syncLocation`
   * - `emailMessage.location.settings.yextConnection.syncSettings.syncRequirementsSatisfied`
   * - `emailMessage.location.settings.yextConnection.syncSettings.syncLogoAndMainPhoto`
   * - `emailMessage.location.settings.yextConnection.syncSettings.syncGallery`
   * - `emailMessage.location.settings.yextConnection.syncSettings.lastSyncDate`
   * - `emailMessage.location.settings.yextConnection.syncSettings.numberOfSyncs`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.postalAddress`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.contactInfos`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.openingHours`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.website`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.company`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.categories`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.description`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.mediaitems`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.locationServiceAreas`
   * - `emailMessage.location.settings.yextConnection.throttleTimeLeft`
   * - `emailMessage.location.settings.yextConnection.profile.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.yextConnection.profile.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.yextConnection.profile.googleIds.googleMapsId`
   * - `emailMessage.location.settings.yextConnection.profile.googleMapsUrl`
   * - `emailMessage.location.settings.yextConnection.profile.newReviewUrl`
   * - `emailMessage.location.settings.yextConnection.profile.placesSearchForPotentialProfileTriedOnce`
   * - `emailMessage.location.settings.yextConnection.lastConnectionDate`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.accessTokenState`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.expiresAt`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.issuedAt`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.isActive`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.isValid`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.isConnectedWithInstagram`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.tokenLifetime`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.token`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.apiScopes`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.id`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.profilePicture`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.lastName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.firstName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.title`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.academicTitle`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.jobTitle`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.gender.gender`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.locationId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.locationName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.primaryPhone`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.websiteUrl`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.primaryCategoryName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.languageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.premise`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.subpremise`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.streetNo`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.street`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.addressLine1`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.addressLine2`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.postalCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.postalCodeSuffix`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.sublocality`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.alias`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.stateId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.countryId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.languageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.geoPoint.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.geoPoint.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.hasCoordinates`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.branchCount`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.id`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.created`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.updated`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.subCounty.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.subCounty.shortCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.county.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.county.shortCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.alias`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.shortCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.countryId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.id`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.alias`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.parentCountryId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.type`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.tld`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.commonTld`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.shortCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.isoCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.phonePrefix`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.googleLocationName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.currency.isoCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.currency.symbol`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.currency.displaySymbolBeforeAmount`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.vatRate`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.euMember`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.taxKey`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.accountOfProceeds`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.locale`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.unitSystem`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.timeSystem`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.firstDayOfWeek`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressFormat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.appDefaultLanguageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.nativeLanguageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.languageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.isActive`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.priority`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.type`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.firstnameBeforeLastname`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.showTitleField`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.showCookieNotice`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.availableCreditCards`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.defaultTrialMode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.isActiveForPartners`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.type`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.streetNoIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.streetIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.cityIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.stateIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.countyIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.subCountyIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.streetNoFormat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.addressFormat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.id`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoPoint.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoPoint.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.customerSelectedGeoPoint.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.customerSelectedGeoPoint.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoBounds.northeast.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoBounds.northeast.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoBounds.southwest.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoBounds.southwest.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.formattedAddress`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.languageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.displayAddress`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.inputAddress`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.precision`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.locationUrl`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.locationProfilePictureUrl`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.pageToken`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.hasBaseScopes`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.hasInstagramScopes`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.hasBoostsScopes`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.hasBusinessManagrScopes`
   * - `emailMessage.location.settings.facebookConnection.facebookTokenConnectFlowInitUrl`
   * - `emailMessage.location.settings.facebookConnection.connectionState`
   * - `emailMessage.location.settings.facebookConnection.connectionType`
   * - `emailMessage.location.settings.facebookConnection.profileState`
   * - `emailMessage.location.settings.facebookConnection.syncState`
   * - `emailMessage.location.settings.facebookConnection.prevConnectedExternalId`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.syncLocation`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.syncRequirementsSatisfied`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.syncLogoAndMainPhoto`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.syncGallery`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.lastSyncDate`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.numberOfSyncs`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.postalAddress`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.contactInfos`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.openingHours`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.website`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.company`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.categories`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.description`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.mediaitems`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.locationServiceAreas`
   * - `emailMessage.location.settings.facebookConnection.throttleTimeLeft`
   * - `emailMessage.location.settings.facebookConnection.profile.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.facebookConnection.profile.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.facebookConnection.profile.googleIds.googleMapsId`
   * - `emailMessage.location.settings.facebookConnection.profile.googleMapsUrl`
   * - `emailMessage.location.settings.facebookConnection.profile.newReviewUrl`
   * - `emailMessage.location.settings.facebookConnection.profile.placesSearchForPotentialProfileTriedOnce`
   * - `emailMessage.location.settings.facebookConnection.lastConnectionDate`
   * - `emailMessage.location.settings.tasksSettings.reassignTasks`
   * - `emailMessage.location.settings.tasksSettings.initiallyValidated`
   * - `emailMessage.location.reputation.totalReviews`
   * - `emailMessage.location.reputation.averageRating`
   * - `emailMessage.location.reputation.reviewsWithoutReplies`
   * - `emailMessage.location.reputation.reputationScores.reputationScore.weight`
   * - `emailMessage.location.reputation.reputationScores.reputationScore.score`
   * - `emailMessage.location.reputation.reputationScores.averageRatingScore.averageRating`
   * - `emailMessage.location.reputation.reputationScores.averageRatingScore.weight`
   * - `emailMessage.location.reputation.reputationScores.averageRatingScore.score`
   * - `emailMessage.location.reputation.reputationScores.totalReviewsScore.totalReviews`
   * - `emailMessage.location.reputation.reputationScores.totalReviewsScore.weight`
   * - `emailMessage.location.reputation.reputationScores.totalReviewsScore.score`
   * - `emailMessage.location.reputation.reputationScores.repliesRateScore.reviewsRepliesPercentage`
   * - `emailMessage.location.reputation.reputationScores.repliesRateScore.weight`
   * - `emailMessage.location.reputation.reputationScores.repliesRateScore.score`
   * - `emailMessage.location.reputation.reputationScores.reviewsLengthScore.averageReviewsLength`
   * - `emailMessage.location.reputation.reputationScores.reviewsLengthScore.weight`
   * - `emailMessage.location.reputation.reputationScores.reviewsLengthScore.score`
   * - `emailMessage.location.reputation.reputationScores.reviewsRecencyScore.averageReviewsRecency`
   * - `emailMessage.location.reputation.reputationScores.reviewsRecencyScore.weight`
   * - `emailMessage.location.reputation.reputationScores.reviewsRecencyScore.score`
   * - `emailMessage.location.reputation.reputationScores.id`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithOneStar`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithTwoStars`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithThreeStars`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithFourStars`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithFiveStars`
   * - `emailMessage.location.reputation.reviewsDistribution.badReviews`
   * - `emailMessage.location.reputation.reviewsDistribution.neutralReviews`
   * - `emailMessage.location.reputation.reviewsDistribution.goodReviews`
   * - `emailMessage.location.reputation.reviewsDistribution.totalReviews`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithOneStar`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithTwoStars`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithThreeStars`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithFourStars`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithFiveStars`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.badReviews`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.neutralReviews`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.goodReviews`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.totalReviews`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithOneStar`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithTwoStars`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithThreeStars`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithFourStars`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithFiveStars`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.badReviews`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.neutralReviews`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.goodReviews`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.totalReviews`
   * - `emailMessage.location.reputation.hasReviews`
   * - `emailMessage.location.engagement.postsSummary.totalCount`
   * - `emailMessage.location.engagement.postsSummary.scheduledCount`
   * - `emailMessage.location.engagement.postsSummary.publishedCount`
   * - `emailMessage.location.engagement.postsSummary.publishingCount`
   * - `emailMessage.location.engagement.postsSummary.notApprovedCount`
   * - `emailMessage.location.engagement.postsSummary.draftCount`
   * - `emailMessage.location.engagement.postsSummary.errorCount`
   * - `emailMessage.location.engagement.eventsSummary.pendingVerificationCount`
   * - `emailMessage.location.engagement.eventsSummary.pastCount`
   * - `emailMessage.location.engagement.eventsSummary.totalCount`
   * - `emailMessage.location.engagement.eventsSummary.scheduledCount`
   * - `emailMessage.location.engagement.eventsSummary.publishedCount`
   * - `emailMessage.location.engagement.eventsSummary.publishingCount`
   * - `emailMessage.location.engagement.eventsSummary.notApprovedCount`
   * - `emailMessage.location.engagement.eventsSummary.draftCount`
   * - `emailMessage.location.engagement.eventsSummary.errorCount`
   * - `emailMessage.location.id`
   * - `emailMessage.location.created`
   * - `emailMessage.location.updated`
   * - `emailMessage.project.accountId`
   * - `emailMessage.project.status`
   * - `emailMessage.project.settings.setup.featureFlagSetting.allowedCountryShortCodes`
   * - `emailMessage.project.settings.setup.featureFlagSetting.lockCountrySelectionAfterSetup`
   * - `emailMessage.project.settings.setup.featureFlagSetting.allowProjectPrefill`
   * - `emailMessage.project.settings.setup.featureFlagSetting.stepsToHide`
   * - `emailMessage.project.settings.setup.featureFlagSetting.notAllowAnyUpsellTriggersForType`
   * - `emailMessage.project.settings.setup.featureFlagSetting.allowUserToChangeDomain`
   * - `emailMessage.project.settings.setup.keywordsFeatureFlagSetting.keywordsAvailable`
   * - `emailMessage.project.settings.setup.locationsFeatureFlagSetting.locationsAvailable`
   * - `emailMessage.project.settings.setup.competitorsFeatureFlagSetting.competitorsAvailable`
   * - `emailMessage.project.settings.seo.seoRankingsFeatureFlagSetting.keywordsDisplayed`
   * - `emailMessage.project.settings.seo.displayKeywordVisibilityComparison`
   * - `emailMessage.project.settings.seo.displayTopKeywords`
   * - `emailMessage.project.settings.seo.hasCustomCMSTypeOrder`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMin.currency.isoCode`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMin.currency.symbol`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMin.currency.displaySymbolBeforeAmount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMin.amount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMax.currency.isoCode`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMax.currency.symbol`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMax.currency.displaySymbolBeforeAmount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMax.amount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMin.currency.isoCode`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMin.currency.symbol`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMin.currency.displaySymbolBeforeAmount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMin.amount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMax.currency.isoCode`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMax.currency.symbol`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMax.currency.displaySymbolBeforeAmount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMax.amount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.isPreviewFeatureFlagSetting`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.durationOfInitialBudgetRestrictions`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.handlingFee.appliedAfter`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.handlingFee.ownShare`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.handlingFee.resellerShare`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.voucherDistributionMethod`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.voucherDistributionMethodStartDate`
   * - `emailMessage.project.settings.presence.analysis`
   * - `emailMessage.project.settings.rights.delete`
   * - `emailMessage.project.settings.rights.update`
   * - `emailMessage.project.settings.aiBudget.aiBudgetFeatureFlagSetting.monthlyAIBudgetPerProjectInUSD`
   * - `emailMessage.project.id`
   * - `emailMessage.project.created`
   * - `emailMessage.project.updated`
   * - `emailMessage.account.status`
   * - `emailMessage.account.owner.lastName`
   * - `emailMessage.account.owner.firstName`
   * - `emailMessage.account.owner.title`
   * - `emailMessage.account.owner.academicTitle`
   * - `emailMessage.account.owner.jobTitle`
   * - `emailMessage.account.owner.gender.gender`
   * - `emailMessage.account.invoiceCountry.name`
   * - `emailMessage.account.invoiceCountry.alias`
   * - `emailMessage.account.invoiceCountry.parentCountryId`
   * - `emailMessage.account.invoiceCountry.type`
   * - `emailMessage.account.invoiceCountry.tld`
   * - `emailMessage.account.invoiceCountry.commonTld`
   * - `emailMessage.account.invoiceCountry.shortCode`
   * - `emailMessage.account.invoiceCountry.isoCode`
   * - `emailMessage.account.invoiceCountry.phonePrefix`
   * - `emailMessage.account.invoiceCountry.googleLocationName`
   * - `emailMessage.account.invoiceCountry.currency.isoCode`
   * - `emailMessage.account.invoiceCountry.currency.symbol`
   * - `emailMessage.account.invoiceCountry.currency.displaySymbolBeforeAmount`
   * - `emailMessage.account.invoiceCountry.vatRate`
   * - `emailMessage.account.invoiceCountry.euMember`
   * - `emailMessage.account.invoiceCountry.taxKey`
   * - `emailMessage.account.invoiceCountry.accountOfProceeds`
   * - `emailMessage.account.invoiceCountry.locale`
   * - `emailMessage.account.invoiceCountry.unitSystem`
   * - `emailMessage.account.invoiceCountry.timeSystem`
   * - `emailMessage.account.invoiceCountry.firstDayOfWeek`
   * - `emailMessage.account.invoiceCountry.addressFormat`
   * - `emailMessage.account.invoiceCountry.appDefaultLanguageCode`
   * - `emailMessage.account.invoiceCountry.nativeLanguageCode`
   * - `emailMessage.account.invoiceCountry.languageCode`
   * - `emailMessage.account.invoiceCountry.isActive`
   * - `emailMessage.account.invoiceCountry.priority`
   * - `emailMessage.account.invoiceCountry.setting.type`
   * - `emailMessage.account.invoiceCountry.setting.firstnameBeforeLastname`
   * - `emailMessage.account.invoiceCountry.setting.showTitleField`
   * - `emailMessage.account.invoiceCountry.setting.showCookieNotice`
   * - `emailMessage.account.invoiceCountry.setting.availableCreditCards`
   * - `emailMessage.account.invoiceCountry.setting.defaultTrialMode`
   * - `emailMessage.account.invoiceCountry.setting.isActiveForPartners`
   * - `emailMessage.account.invoiceCountry.addressSetting.type`
   * - `emailMessage.account.invoiceCountry.addressSetting.streetNoIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.streetIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.cityIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.stateIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.countyIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.subCountyIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.account.invoiceCountry.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.account.invoiceCountry.addressSetting.streetNoFormat`
   * - `emailMessage.account.invoiceCountry.addressSetting.addressFormat`
   * - `emailMessage.account.invoiceCountry.id`
   * - `emailMessage.account.invoiceCountryId`
   * - `emailMessage.account.resellerId`
   * - `emailMessage.account.affiliate.name`
   * - `emailMessage.account.affiliate.id`
   * - `emailMessage.account.apiAccountId`
   * - `emailMessage.account.parentAccountId`
   * - `emailMessage.account.isSandboxAccount`
   * - `emailMessage.account.isSpecialAccount`
   * - `emailMessage.account.type`
   * - `emailMessage.account.password`
   * - `emailMessage.account.billingCompany.legalEntity.name`
   * - `emailMessage.account.billingCompany.legalEntity.fullName`
   * - `emailMessage.account.billingCompany.legalEntity.type`
   * - `emailMessage.account.billingCompany.registrationNumber.number`
   * - `emailMessage.account.billingCompany.registrationNumber.commercialRegistryOffice`
   * - `emailMessage.account.billingCompany.taxIdentificationNumber.number`
   * - `emailMessage.account.billingCompany.vatId.vatId`
   * - `emailMessage.account.billingCompany.doingBusinessAsName`
   * - `emailMessage.account.billingAddress.premise`
   * - `emailMessage.account.billingAddress.subpremise`
   * - `emailMessage.account.billingAddress.streetNo`
   * - `emailMessage.account.billingAddress.street`
   * - `emailMessage.account.billingAddress.addressLine1`
   * - `emailMessage.account.billingAddress.addressLine2`
   * - `emailMessage.account.billingAddress.postalCode`
   * - `emailMessage.account.billingAddress.postalCodeSuffix`
   * - `emailMessage.account.billingAddress.sublocality`
   * - `emailMessage.account.billingAddress.city.name`
   * - `emailMessage.account.billingAddress.city.alias`
   * - `emailMessage.account.billingAddress.city.stateId`
   * - `emailMessage.account.billingAddress.city.countryId`
   * - `emailMessage.account.billingAddress.city.languageCode`
   * - `emailMessage.account.billingAddress.city.geoPoint.lat`
   * - `emailMessage.account.billingAddress.city.geoPoint.lng`
   * - `emailMessage.account.billingAddress.city.hasCoordinates`
   * - `emailMessage.account.billingAddress.city.branchCount`
   * - `emailMessage.account.billingAddress.city.id`
   * - `emailMessage.account.billingAddress.city.created`
   * - `emailMessage.account.billingAddress.city.updated`
   * - `emailMessage.account.billingAddress.subCounty.name`
   * - `emailMessage.account.billingAddress.subCounty.shortCode`
   * - `emailMessage.account.billingAddress.county.name`
   * - `emailMessage.account.billingAddress.county.shortCode`
   * - `emailMessage.account.billingAddress.state.name`
   * - `emailMessage.account.billingAddress.state.alias`
   * - `emailMessage.account.billingAddress.state.shortCode`
   * - `emailMessage.account.billingAddress.state.countryId`
   * - `emailMessage.account.billingAddress.state.id`
   * - `emailMessage.account.billingAddress.country.name`
   * - `emailMessage.account.billingAddress.country.alias`
   * - `emailMessage.account.billingAddress.country.parentCountryId`
   * - `emailMessage.account.billingAddress.country.type`
   * - `emailMessage.account.billingAddress.country.tld`
   * - `emailMessage.account.billingAddress.country.commonTld`
   * - `emailMessage.account.billingAddress.country.shortCode`
   * - `emailMessage.account.billingAddress.country.isoCode`
   * - `emailMessage.account.billingAddress.country.phonePrefix`
   * - `emailMessage.account.billingAddress.country.googleLocationName`
   * - `emailMessage.account.billingAddress.country.currency.isoCode`
   * - `emailMessage.account.billingAddress.country.currency.symbol`
   * - `emailMessage.account.billingAddress.country.currency.displaySymbolBeforeAmount`
   * - `emailMessage.account.billingAddress.country.vatRate`
   * - `emailMessage.account.billingAddress.country.euMember`
   * - `emailMessage.account.billingAddress.country.taxKey`
   * - `emailMessage.account.billingAddress.country.accountOfProceeds`
   * - `emailMessage.account.billingAddress.country.locale`
   * - `emailMessage.account.billingAddress.country.unitSystem`
   * - `emailMessage.account.billingAddress.country.timeSystem`
   * - `emailMessage.account.billingAddress.country.firstDayOfWeek`
   * - `emailMessage.account.billingAddress.country.addressFormat`
   * - `emailMessage.account.billingAddress.country.appDefaultLanguageCode`
   * - `emailMessage.account.billingAddress.country.nativeLanguageCode`
   * - `emailMessage.account.billingAddress.country.languageCode`
   * - `emailMessage.account.billingAddress.country.isActive`
   * - `emailMessage.account.billingAddress.country.priority`
   * - `emailMessage.account.billingAddress.country.setting.type`
   * - `emailMessage.account.billingAddress.country.setting.firstnameBeforeLastname`
   * - `emailMessage.account.billingAddress.country.setting.showTitleField`
   * - `emailMessage.account.billingAddress.country.setting.showCookieNotice`
   * - `emailMessage.account.billingAddress.country.setting.availableCreditCards`
   * - `emailMessage.account.billingAddress.country.setting.defaultTrialMode`
   * - `emailMessage.account.billingAddress.country.setting.isActiveForPartners`
   * - `emailMessage.account.billingAddress.country.addressSetting.type`
   * - `emailMessage.account.billingAddress.country.addressSetting.streetNoIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.streetIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.cityIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.stateIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.countyIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.subCountyIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.account.billingAddress.country.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.account.billingAddress.country.addressSetting.streetNoFormat`
   * - `emailMessage.account.billingAddress.country.addressSetting.addressFormat`
   * - `emailMessage.account.billingAddress.country.id`
   * - `emailMessage.account.billingAddress.geoPoint.lat`
   * - `emailMessage.account.billingAddress.geoPoint.lng`
   * - `emailMessage.account.billingAddress.customerSelectedGeoPoint.lat`
   * - `emailMessage.account.billingAddress.customerSelectedGeoPoint.lng`
   * - `emailMessage.account.billingAddress.geoBounds.northeast.lat`
   * - `emailMessage.account.billingAddress.geoBounds.northeast.lng`
   * - `emailMessage.account.billingAddress.geoBounds.southwest.lat`
   * - `emailMessage.account.billingAddress.geoBounds.southwest.lng`
   * - `emailMessage.account.billingAddress.formattedAddress`
   * - `emailMessage.account.billingAddress.languageCode`
   * - `emailMessage.account.billingAddress.displayAddress`
   * - `emailMessage.account.billingAddress.inputAddress`
   * - `emailMessage.account.billingAddress.precision`
   * - `emailMessage.account.languageCode`
   * - `emailMessage.account.totalNumberOfActiveProjects`
   * - `emailMessage.account.email`
   * - `emailMessage.account.id`
   * - `emailMessage.partnerCompanySetting.company.legalEntity.name`
   * - `emailMessage.partnerCompanySetting.company.legalEntity.fullName`
   * - `emailMessage.partnerCompanySetting.company.legalEntity.type`
   * - `emailMessage.partnerCompanySetting.company.registrationNumber.number`
   * - `emailMessage.partnerCompanySetting.company.registrationNumber.commercialRegistryOffice`
   * - `emailMessage.partnerCompanySetting.company.taxIdentificationNumber.number`
   * - `emailMessage.partnerCompanySetting.company.vatId.vatId`
   * - `emailMessage.partnerCompanySetting.company.doingBusinessAsName`
   * - `emailMessage.partnerCompanySetting.footerLegalData`
   * - `emailMessage.partnerCompanySetting.address.premise`
   * - `emailMessage.partnerCompanySetting.address.subpremise`
   * - `emailMessage.partnerCompanySetting.address.streetNo`
   * - `emailMessage.partnerCompanySetting.address.street`
   * - `emailMessage.partnerCompanySetting.address.addressLine1`
   * - `emailMessage.partnerCompanySetting.address.addressLine2`
   * - `emailMessage.partnerCompanySetting.address.postalCode`
   * - `emailMessage.partnerCompanySetting.address.postalCodeSuffix`
   * - `emailMessage.partnerCompanySetting.address.sublocality`
   * - `emailMessage.partnerCompanySetting.address.city.name`
   * - `emailMessage.partnerCompanySetting.address.city.alias`
   * - `emailMessage.partnerCompanySetting.address.city.stateId`
   * - `emailMessage.partnerCompanySetting.address.city.countryId`
   * - `emailMessage.partnerCompanySetting.address.city.languageCode`
   * - `emailMessage.partnerCompanySetting.address.city.geoPoint.lat`
   * - `emailMessage.partnerCompanySetting.address.city.geoPoint.lng`
   * - `emailMessage.partnerCompanySetting.address.city.hasCoordinates`
   * - `emailMessage.partnerCompanySetting.address.city.branchCount`
   * - `emailMessage.partnerCompanySetting.address.city.id`
   * - `emailMessage.partnerCompanySetting.address.city.created`
   * - `emailMessage.partnerCompanySetting.address.city.updated`
   * - `emailMessage.partnerCompanySetting.address.subCounty.name`
   * - `emailMessage.partnerCompanySetting.address.subCounty.shortCode`
   * - `emailMessage.partnerCompanySetting.address.county.name`
   * - `emailMessage.partnerCompanySetting.address.county.shortCode`
   * - `emailMessage.partnerCompanySetting.address.state.name`
   * - `emailMessage.partnerCompanySetting.address.state.alias`
   * - `emailMessage.partnerCompanySetting.address.state.shortCode`
   * - `emailMessage.partnerCompanySetting.address.state.countryId`
   * - `emailMessage.partnerCompanySetting.address.state.id`
   * - `emailMessage.partnerCompanySetting.address.country.name`
   * - `emailMessage.partnerCompanySetting.address.country.alias`
   * - `emailMessage.partnerCompanySetting.address.country.parentCountryId`
   * - `emailMessage.partnerCompanySetting.address.country.type`
   * - `emailMessage.partnerCompanySetting.address.country.tld`
   * - `emailMessage.partnerCompanySetting.address.country.commonTld`
   * - `emailMessage.partnerCompanySetting.address.country.shortCode`
   * - `emailMessage.partnerCompanySetting.address.country.isoCode`
   * - `emailMessage.partnerCompanySetting.address.country.phonePrefix`
   * - `emailMessage.partnerCompanySetting.address.country.googleLocationName`
   * - `emailMessage.partnerCompanySetting.address.country.currency.isoCode`
   * - `emailMessage.partnerCompanySetting.address.country.currency.symbol`
   * - `emailMessage.partnerCompanySetting.address.country.currency.displaySymbolBeforeAmount`
   * - `emailMessage.partnerCompanySetting.address.country.vatRate`
   * - `emailMessage.partnerCompanySetting.address.country.euMember`
   * - `emailMessage.partnerCompanySetting.address.country.taxKey`
   * - `emailMessage.partnerCompanySetting.address.country.accountOfProceeds`
   * - `emailMessage.partnerCompanySetting.address.country.locale`
   * - `emailMessage.partnerCompanySetting.address.country.unitSystem`
   * - `emailMessage.partnerCompanySetting.address.country.timeSystem`
   * - `emailMessage.partnerCompanySetting.address.country.firstDayOfWeek`
   * - `emailMessage.partnerCompanySetting.address.country.addressFormat`
   * - `emailMessage.partnerCompanySetting.address.country.appDefaultLanguageCode`
   * - `emailMessage.partnerCompanySetting.address.country.nativeLanguageCode`
   * - `emailMessage.partnerCompanySetting.address.country.languageCode`
   * - `emailMessage.partnerCompanySetting.address.country.isActive`
   * - `emailMessage.partnerCompanySetting.address.country.priority`
   * - `emailMessage.partnerCompanySetting.address.country.setting.type`
   * - `emailMessage.partnerCompanySetting.address.country.setting.firstnameBeforeLastname`
   * - `emailMessage.partnerCompanySetting.address.country.setting.showTitleField`
   * - `emailMessage.partnerCompanySetting.address.country.setting.showCookieNotice`
   * - `emailMessage.partnerCompanySetting.address.country.setting.availableCreditCards`
   * - `emailMessage.partnerCompanySetting.address.country.setting.defaultTrialMode`
   * - `emailMessage.partnerCompanySetting.address.country.setting.isActiveForPartners`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.type`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.streetNoIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.streetIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.cityIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.stateIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.countyIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.subCountyIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.streetNoFormat`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.addressFormat`
   * - `emailMessage.partnerCompanySetting.address.country.id`
   * - `emailMessage.partnerCompanySetting.address.geoPoint.lat`
   * - `emailMessage.partnerCompanySetting.address.geoPoint.lng`
   * - `emailMessage.partnerCompanySetting.address.customerSelectedGeoPoint.lat`
   * - `emailMessage.partnerCompanySetting.address.customerSelectedGeoPoint.lng`
   * - `emailMessage.partnerCompanySetting.address.geoBounds.northeast.lat`
   * - `emailMessage.partnerCompanySetting.address.geoBounds.northeast.lng`
   * - `emailMessage.partnerCompanySetting.address.geoBounds.southwest.lat`
   * - `emailMessage.partnerCompanySetting.address.geoBounds.southwest.lng`
   * - `emailMessage.partnerCompanySetting.address.formattedAddress`
   * - `emailMessage.partnerCompanySetting.address.languageCode`
   * - `emailMessage.partnerCompanySetting.address.displayAddress`
   * - `emailMessage.partnerCompanySetting.address.inputAddress`
   * - `emailMessage.partnerCompanySetting.address.precision`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.instagram`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.facebook`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.youtube`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.twitter`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.tiktok`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.linkedin`
   * - `emailMessage.partnerCompanySetting.websiteURLs.legalDataURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.termsAndConditionsURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.customerSupportURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.manageNotificationURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.privacyURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.blogOrNewsURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.aboutURL`
   * - `emailMessage.productThemeSetting.logo.publicUrl`
   * - `emailMessage.productThemeSetting.logo.description`
   * - `emailMessage.productThemeSetting.logo.type`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.base64EncodedContent`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.height`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.width`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.fileSize`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.fileFormat`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.body`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.name`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.compression`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.externalId`
   * - `emailMessage.productThemeSetting.primaryShades.displayPrefix`
   * - `emailMessage.productThemeSetting.secondaryShades.displayPrefix`
   * - `emailMessage.partnerEmailSetting.sendReports`
   * - `emailMessage.partnerEmailSetting.sender.name`
   * - `emailMessage.partnerEmailSetting.sender.email`
   * - `emailMessage.partnerEmailSetting.mediaRootUrl`
   * - `emailMessage.partnerEmailSetting.customDomain`
   * - `emailMessage.partnerEmailSetting.useProductNameAsSenderName`
   * - `emailMessage.partnerEmailSetting.passIntercomMailsThroughTemplatingSystem`
   * - `emailMessage.partnerEmailSetting.sendIntercomActivationCampaign`
   * - `emailMessage.partnerProductSetting.additionalLicenseFee`
   * - `emailMessage.partnerProductSetting.initialSetupFee`
   * - `emailMessage.partnerProductSetting.initialSetupFeeInclVat`
   * - `emailMessage.partnerProductSetting.billOnlyIfSetupCompleted`
   * - `emailMessage.partnerProductSetting.useInvoiceCountryCurrencyForBilling`
   * - `emailMessage.partnerProductSetting.logoutUrl`
   * - `emailMessage.partnerProductSetting.productUrl`
   * - `emailMessage.partnerProductSetting.redirectLoggedInAccountsToApplication`
   * - `emailMessage.partnerProductSetting.partnerSubbrand`
   * - `emailMessage.partnerProductSetting.customSupportSystemType`
   * - `emailMessage.partnerProductSetting.billOnlyIfSetupCompletedRuleAppliedAfterDate`
   * - `emailMessage.partnerProductSetting.externalId`
   * - `emailMessage.partnerProductSetting.disableDefaultReviewsReplySuggestions`
   * - `emailMessage.mjmlContent.content`
   * - `emailMessage.htmlContent.content`
   * - `emailMessage.from.name`
   * - `emailMessage.from.email`
   * - `emailMessage.subject`
   * - `emailMessage.campaignId`
   * - `handlingError`
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
   * - `customerEmail`
   * - `customerName`
   * - `isOptIn`
   * - `status`
   * - `sendAt`
   * - `locationReviewRequestId`
   * - `locationId`
   * - `isActive`
   * - `writingStyle`
   * - `emailMessage.location.businessId`
   * - `emailMessage.location.company.legalEntity.name`
   * - `emailMessage.location.company.legalEntity.fullName`
   * - `emailMessage.location.company.legalEntity.type`
   * - `emailMessage.location.company.registrationNumber.number`
   * - `emailMessage.location.company.registrationNumber.commercialRegistryOffice`
   * - `emailMessage.location.company.taxIdentificationNumber.number`
   * - `emailMessage.location.company.vatId.vatId`
   * - `emailMessage.location.company.doingBusinessAsName`
   * - `emailMessage.location.address.premise`
   * - `emailMessage.location.address.subpremise`
   * - `emailMessage.location.address.streetNo`
   * - `emailMessage.location.address.street`
   * - `emailMessage.location.address.addressLine1`
   * - `emailMessage.location.address.addressLine2`
   * - `emailMessage.location.address.postalCode`
   * - `emailMessage.location.address.postalCodeSuffix`
   * - `emailMessage.location.address.sublocality`
   * - `emailMessage.location.address.city.name`
   * - `emailMessage.location.address.city.alias`
   * - `emailMessage.location.address.city.stateId`
   * - `emailMessage.location.address.city.countryId`
   * - `emailMessage.location.address.city.languageCode`
   * - `emailMessage.location.address.city.geoPoint.lat`
   * - `emailMessage.location.address.city.geoPoint.lng`
   * - `emailMessage.location.address.city.hasCoordinates`
   * - `emailMessage.location.address.city.branchCount`
   * - `emailMessage.location.address.city.id`
   * - `emailMessage.location.address.city.created`
   * - `emailMessage.location.address.city.updated`
   * - `emailMessage.location.address.subCounty.name`
   * - `emailMessage.location.address.subCounty.shortCode`
   * - `emailMessage.location.address.county.name`
   * - `emailMessage.location.address.county.shortCode`
   * - `emailMessage.location.address.state.name`
   * - `emailMessage.location.address.state.alias`
   * - `emailMessage.location.address.state.shortCode`
   * - `emailMessage.location.address.state.countryId`
   * - `emailMessage.location.address.state.id`
   * - `emailMessage.location.address.country.name`
   * - `emailMessage.location.address.country.alias`
   * - `emailMessage.location.address.country.parentCountryId`
   * - `emailMessage.location.address.country.type`
   * - `emailMessage.location.address.country.tld`
   * - `emailMessage.location.address.country.commonTld`
   * - `emailMessage.location.address.country.shortCode`
   * - `emailMessage.location.address.country.isoCode`
   * - `emailMessage.location.address.country.phonePrefix`
   * - `emailMessage.location.address.country.googleLocationName`
   * - `emailMessage.location.address.country.currency.isoCode`
   * - `emailMessage.location.address.country.currency.symbol`
   * - `emailMessage.location.address.country.currency.displaySymbolBeforeAmount`
   * - `emailMessage.location.address.country.vatRate`
   * - `emailMessage.location.address.country.euMember`
   * - `emailMessage.location.address.country.taxKey`
   * - `emailMessage.location.address.country.accountOfProceeds`
   * - `emailMessage.location.address.country.locale`
   * - `emailMessage.location.address.country.unitSystem`
   * - `emailMessage.location.address.country.timeSystem`
   * - `emailMessage.location.address.country.firstDayOfWeek`
   * - `emailMessage.location.address.country.addressFormat`
   * - `emailMessage.location.address.country.appDefaultLanguageCode`
   * - `emailMessage.location.address.country.nativeLanguageCode`
   * - `emailMessage.location.address.country.languageCode`
   * - `emailMessage.location.address.country.isActive`
   * - `emailMessage.location.address.country.priority`
   * - `emailMessage.location.address.country.setting.type`
   * - `emailMessage.location.address.country.setting.firstnameBeforeLastname`
   * - `emailMessage.location.address.country.setting.showTitleField`
   * - `emailMessage.location.address.country.setting.showCookieNotice`
   * - `emailMessage.location.address.country.setting.availableCreditCards`
   * - `emailMessage.location.address.country.setting.defaultTrialMode`
   * - `emailMessage.location.address.country.setting.isActiveForPartners`
   * - `emailMessage.location.address.country.addressSetting.type`
   * - `emailMessage.location.address.country.addressSetting.streetNoIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.streetIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.cityIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.stateIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.countyIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.subCountyIsMandatory`
   * - `emailMessage.location.address.country.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.location.address.country.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.location.address.country.addressSetting.streetNoFormat`
   * - `emailMessage.location.address.country.addressSetting.addressFormat`
   * - `emailMessage.location.address.country.id`
   * - `emailMessage.location.address.geoPoint.lat`
   * - `emailMessage.location.address.geoPoint.lng`
   * - `emailMessage.location.address.customerSelectedGeoPoint.lat`
   * - `emailMessage.location.address.customerSelectedGeoPoint.lng`
   * - `emailMessage.location.address.geoBounds.northeast.lat`
   * - `emailMessage.location.address.geoBounds.northeast.lng`
   * - `emailMessage.location.address.geoBounds.southwest.lat`
   * - `emailMessage.location.address.geoBounds.southwest.lng`
   * - `emailMessage.location.address.formattedAddress`
   * - `emailMessage.location.address.languageCode`
   * - `emailMessage.location.address.displayAddress`
   * - `emailMessage.location.address.inputAddress`
   * - `emailMessage.location.address.precision`
   * - `emailMessage.location.languageCode`
   * - `emailMessage.location.description.long`
   * - `emailMessage.location.description.short`
   * - `emailMessage.location.description.shortDescriptionMaxLength`
   * - `emailMessage.location.description.longDescriptionMaxLength`
   * - `emailMessage.location.isLocallyFocused`
   * - `emailMessage.location.serviceAreaType`
   * - `emailMessage.location.radius`
   * - `emailMessage.location.websiteId`
   * - `emailMessage.location.name`
   * - `emailMessage.location.seo.rankingsBusiness.domain.name`
   * - `emailMessage.location.seo.rankingsBusiness.domain.path`
   * - `emailMessage.location.seo.rankingsBusiness.domain.needsWww`
   * - `emailMessage.location.seo.rankingsBusiness.domain.needsHttps`
   * - `emailMessage.location.seo.rankingsBusiness.domain.excludePathInPageUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.unknownProtocol`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.status`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.isValid`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.validateWithoutProtocol`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.needsWww`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.needsNoWww`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.needsHttps`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.httpCode`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.contentLength`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.wordsCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.redirectCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.retryCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.initialUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.redirectUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.retryUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.filteredUrl`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.timeout`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.countryShortCode`
   * - `emailMessage.location.seo.rankingsBusiness.domain.valid.validationMode`
   * - `emailMessage.location.seo.rankingsBusiness.domain.content.content`
   * - `emailMessage.location.seo.rankingsBusiness.domain.content.objectiveSummary.objectiveSummaryText`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.domain`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.insufficientFundsIncidentCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.intentionalFailedPaymentIncidentCount`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.isCommonDomain`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.phishingTargetId`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.commonDomainRiskScore`
   * - `emailMessage.location.seo.rankingsBusiness.domain.fraudDomain.id`
   * - `emailMessage.location.seo.rankingsBusiness.domain.id`
   * - `emailMessage.location.seo.rankingsBusiness.googleMapsId`
   * - `emailMessage.location.settings.googleConnection.connectionToken.tokenSetupState`
   * - `emailMessage.location.settings.googleConnection.connectionToken.expiresAt`
   * - `emailMessage.location.settings.googleConnection.connectionToken.issuedAt`
   * - `emailMessage.location.settings.googleConnection.connectionToken.token`
   * - `emailMessage.location.settings.googleConnection.connectionToken.refreshToken`
   * - `emailMessage.location.settings.googleConnection.connectionToken.apiScope`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.id`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.email`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.emailVerified`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.fullName`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.profilePicture`
   * - `emailMessage.location.settings.googleConnection.connectionToken.accountProfile.locale`
   * - `emailMessage.location.settings.googleConnection.connectionToken.locationInfo.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.googleConnection.connectionToken.locationInfo.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.googleConnection.connectionToken.locationInfo.googleIds.googleMapsId`
   * - `emailMessage.location.settings.googleConnection.connectionToken.locationInfo.locale`
   * - `emailMessage.location.settings.googleConnection.connectionToken.isActive`
   * - `emailMessage.location.settings.googleConnection.googleTokenConnectFlowInitUrl`
   * - `emailMessage.location.settings.googleConnection.connectionState`
   * - `emailMessage.location.settings.googleConnection.connectionType`
   * - `emailMessage.location.settings.googleConnection.profileState`
   * - `emailMessage.location.settings.googleConnection.syncState`
   * - `emailMessage.location.settings.googleConnection.prevConnectedExternalId`
   * - `emailMessage.location.settings.googleConnection.syncSettings.syncLocation`
   * - `emailMessage.location.settings.googleConnection.syncSettings.syncRequirementsSatisfied`
   * - `emailMessage.location.settings.googleConnection.syncSettings.syncLogoAndMainPhoto`
   * - `emailMessage.location.settings.googleConnection.syncSettings.syncGallery`
   * - `emailMessage.location.settings.googleConnection.syncSettings.lastSyncDate`
   * - `emailMessage.location.settings.googleConnection.syncSettings.numberOfSyncs`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.postalAddress`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.contactInfos`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.openingHours`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.website`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.company`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.categories`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.description`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.mediaitems`
   * - `emailMessage.location.settings.googleConnection.syncSettings.propertiesToSync.locationServiceAreas`
   * - `emailMessage.location.settings.googleConnection.throttleTimeLeft`
   * - `emailMessage.location.settings.googleConnection.profile.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.googleConnection.profile.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.googleConnection.profile.googleIds.googleMapsId`
   * - `emailMessage.location.settings.googleConnection.profile.googleMapsUrl`
   * - `emailMessage.location.settings.googleConnection.profile.newReviewUrl`
   * - `emailMessage.location.settings.googleConnection.profile.placesSearchForPotentialProfileTriedOnce`
   * - `emailMessage.location.settings.googleConnection.lastConnectionDate`
   * - `emailMessage.location.settings.uberallConnection.connectionState`
   * - `emailMessage.location.settings.uberallConnection.connectionType`
   * - `emailMessage.location.settings.uberallConnection.profileState`
   * - `emailMessage.location.settings.uberallConnection.syncState`
   * - `emailMessage.location.settings.uberallConnection.prevConnectedExternalId`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.syncLocation`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.syncRequirementsSatisfied`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.syncLogoAndMainPhoto`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.syncGallery`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.lastSyncDate`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.numberOfSyncs`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.postalAddress`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.contactInfos`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.openingHours`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.website`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.company`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.categories`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.description`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.mediaitems`
   * - `emailMessage.location.settings.uberallConnection.syncSettings.propertiesToSync.locationServiceAreas`
   * - `emailMessage.location.settings.uberallConnection.throttleTimeLeft`
   * - `emailMessage.location.settings.uberallConnection.profile.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.uberallConnection.profile.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.uberallConnection.profile.googleIds.googleMapsId`
   * - `emailMessage.location.settings.uberallConnection.profile.googleMapsUrl`
   * - `emailMessage.location.settings.uberallConnection.profile.newReviewUrl`
   * - `emailMessage.location.settings.uberallConnection.profile.placesSearchForPotentialProfileTriedOnce`
   * - `emailMessage.location.settings.uberallConnection.lastConnectionDate`
   * - `emailMessage.location.settings.yextConnection.connectionState`
   * - `emailMessage.location.settings.yextConnection.connectionType`
   * - `emailMessage.location.settings.yextConnection.profileState`
   * - `emailMessage.location.settings.yextConnection.syncState`
   * - `emailMessage.location.settings.yextConnection.prevConnectedExternalId`
   * - `emailMessage.location.settings.yextConnection.syncSettings.syncLocation`
   * - `emailMessage.location.settings.yextConnection.syncSettings.syncRequirementsSatisfied`
   * - `emailMessage.location.settings.yextConnection.syncSettings.syncLogoAndMainPhoto`
   * - `emailMessage.location.settings.yextConnection.syncSettings.syncGallery`
   * - `emailMessage.location.settings.yextConnection.syncSettings.lastSyncDate`
   * - `emailMessage.location.settings.yextConnection.syncSettings.numberOfSyncs`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.postalAddress`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.contactInfos`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.openingHours`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.website`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.company`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.categories`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.description`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.mediaitems`
   * - `emailMessage.location.settings.yextConnection.syncSettings.propertiesToSync.locationServiceAreas`
   * - `emailMessage.location.settings.yextConnection.throttleTimeLeft`
   * - `emailMessage.location.settings.yextConnection.profile.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.yextConnection.profile.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.yextConnection.profile.googleIds.googleMapsId`
   * - `emailMessage.location.settings.yextConnection.profile.googleMapsUrl`
   * - `emailMessage.location.settings.yextConnection.profile.newReviewUrl`
   * - `emailMessage.location.settings.yextConnection.profile.placesSearchForPotentialProfileTriedOnce`
   * - `emailMessage.location.settings.yextConnection.lastConnectionDate`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.accessTokenState`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.expiresAt`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.issuedAt`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.isActive`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.isValid`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.isConnectedWithInstagram`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.tokenLifetime`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.token`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.apiScopes`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.id`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.profilePicture`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.lastName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.firstName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.title`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.academicTitle`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.jobTitle`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.userInfo.gender.gender`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.locationId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.locationName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.primaryPhone`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.websiteUrl`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.primaryCategoryName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.languageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.premise`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.subpremise`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.streetNo`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.street`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.addressLine1`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.addressLine2`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.postalCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.postalCodeSuffix`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.sublocality`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.alias`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.stateId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.countryId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.languageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.geoPoint.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.geoPoint.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.hasCoordinates`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.branchCount`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.id`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.created`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.city.updated`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.subCounty.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.subCounty.shortCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.county.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.county.shortCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.alias`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.shortCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.countryId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.state.id`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.name`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.alias`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.parentCountryId`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.type`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.tld`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.commonTld`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.shortCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.isoCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.phonePrefix`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.googleLocationName`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.currency.isoCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.currency.symbol`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.currency.displaySymbolBeforeAmount`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.vatRate`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.euMember`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.taxKey`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.accountOfProceeds`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.locale`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.unitSystem`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.timeSystem`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.firstDayOfWeek`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressFormat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.appDefaultLanguageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.nativeLanguageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.languageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.isActive`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.priority`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.type`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.firstnameBeforeLastname`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.showTitleField`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.showCookieNotice`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.availableCreditCards`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.defaultTrialMode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.setting.isActiveForPartners`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.type`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.streetNoIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.streetIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.cityIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.stateIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.countyIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.subCountyIsMandatory`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.streetNoFormat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.addressSetting.addressFormat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.country.id`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoPoint.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoPoint.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.customerSelectedGeoPoint.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.customerSelectedGeoPoint.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoBounds.northeast.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoBounds.northeast.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoBounds.southwest.lat`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.geoBounds.southwest.lng`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.formattedAddress`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.languageCode`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.displayAddress`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.inputAddress`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.address.precision`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.locationUrl`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.locationProfilePictureUrl`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.locationInfo.pageToken`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.hasBaseScopes`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.hasInstagramScopes`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.hasBoostsScopes`
   * - `emailMessage.location.settings.facebookConnection.connectionToken.hasBusinessManagrScopes`
   * - `emailMessage.location.settings.facebookConnection.facebookTokenConnectFlowInitUrl`
   * - `emailMessage.location.settings.facebookConnection.connectionState`
   * - `emailMessage.location.settings.facebookConnection.connectionType`
   * - `emailMessage.location.settings.facebookConnection.profileState`
   * - `emailMessage.location.settings.facebookConnection.syncState`
   * - `emailMessage.location.settings.facebookConnection.prevConnectedExternalId`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.syncLocation`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.syncRequirementsSatisfied`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.syncLogoAndMainPhoto`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.syncGallery`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.lastSyncDate`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.numberOfSyncs`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.postalAddress`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.contactInfos`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.openingHours`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.website`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.company`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.categories`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.description`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.mediaitems`
   * - `emailMessage.location.settings.facebookConnection.syncSettings.propertiesToSync.locationServiceAreas`
   * - `emailMessage.location.settings.facebookConnection.throttleTimeLeft`
   * - `emailMessage.location.settings.facebookConnection.profile.googleIds.googleBusinessProfileId`
   * - `emailMessage.location.settings.facebookConnection.profile.googleIds.googlePlaceId`
   * - `emailMessage.location.settings.facebookConnection.profile.googleIds.googleMapsId`
   * - `emailMessage.location.settings.facebookConnection.profile.googleMapsUrl`
   * - `emailMessage.location.settings.facebookConnection.profile.newReviewUrl`
   * - `emailMessage.location.settings.facebookConnection.profile.placesSearchForPotentialProfileTriedOnce`
   * - `emailMessage.location.settings.facebookConnection.lastConnectionDate`
   * - `emailMessage.location.settings.tasksSettings.reassignTasks`
   * - `emailMessage.location.settings.tasksSettings.initiallyValidated`
   * - `emailMessage.location.reputation.totalReviews`
   * - `emailMessage.location.reputation.averageRating`
   * - `emailMessage.location.reputation.reviewsWithoutReplies`
   * - `emailMessage.location.reputation.reputationScores.reputationScore.weight`
   * - `emailMessage.location.reputation.reputationScores.reputationScore.score`
   * - `emailMessage.location.reputation.reputationScores.averageRatingScore.averageRating`
   * - `emailMessage.location.reputation.reputationScores.averageRatingScore.weight`
   * - `emailMessage.location.reputation.reputationScores.averageRatingScore.score`
   * - `emailMessage.location.reputation.reputationScores.totalReviewsScore.totalReviews`
   * - `emailMessage.location.reputation.reputationScores.totalReviewsScore.weight`
   * - `emailMessage.location.reputation.reputationScores.totalReviewsScore.score`
   * - `emailMessage.location.reputation.reputationScores.repliesRateScore.reviewsRepliesPercentage`
   * - `emailMessage.location.reputation.reputationScores.repliesRateScore.weight`
   * - `emailMessage.location.reputation.reputationScores.repliesRateScore.score`
   * - `emailMessage.location.reputation.reputationScores.reviewsLengthScore.averageReviewsLength`
   * - `emailMessage.location.reputation.reputationScores.reviewsLengthScore.weight`
   * - `emailMessage.location.reputation.reputationScores.reviewsLengthScore.score`
   * - `emailMessage.location.reputation.reputationScores.reviewsRecencyScore.averageReviewsRecency`
   * - `emailMessage.location.reputation.reputationScores.reviewsRecencyScore.weight`
   * - `emailMessage.location.reputation.reputationScores.reviewsRecencyScore.score`
   * - `emailMessage.location.reputation.reputationScores.id`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithOneStar`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithTwoStars`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithThreeStars`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithFourStars`
   * - `emailMessage.location.reputation.reviewsDistribution.reviewsWithFiveStars`
   * - `emailMessage.location.reputation.reviewsDistribution.badReviews`
   * - `emailMessage.location.reputation.reviewsDistribution.neutralReviews`
   * - `emailMessage.location.reputation.reviewsDistribution.goodReviews`
   * - `emailMessage.location.reputation.reviewsDistribution.totalReviews`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithOneStar`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithTwoStars`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithThreeStars`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithFourStars`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.reviewsWithFiveStars`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.badReviews`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.neutralReviews`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.goodReviews`
   * - `emailMessage.location.reputation.reviewsWithoutContentDistribution.totalReviews`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithOneStar`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithTwoStars`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithThreeStars`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithFourStars`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.reviewsWithFiveStars`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.badReviews`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.neutralReviews`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.goodReviews`
   * - `emailMessage.location.reputation.reviewsWithContentDistribution.totalReviews`
   * - `emailMessage.location.reputation.hasReviews`
   * - `emailMessage.location.engagement.postsSummary.totalCount`
   * - `emailMessage.location.engagement.postsSummary.scheduledCount`
   * - `emailMessage.location.engagement.postsSummary.publishedCount`
   * - `emailMessage.location.engagement.postsSummary.publishingCount`
   * - `emailMessage.location.engagement.postsSummary.notApprovedCount`
   * - `emailMessage.location.engagement.postsSummary.draftCount`
   * - `emailMessage.location.engagement.postsSummary.errorCount`
   * - `emailMessage.location.engagement.eventsSummary.pendingVerificationCount`
   * - `emailMessage.location.engagement.eventsSummary.pastCount`
   * - `emailMessage.location.engagement.eventsSummary.totalCount`
   * - `emailMessage.location.engagement.eventsSummary.scheduledCount`
   * - `emailMessage.location.engagement.eventsSummary.publishedCount`
   * - `emailMessage.location.engagement.eventsSummary.publishingCount`
   * - `emailMessage.location.engagement.eventsSummary.notApprovedCount`
   * - `emailMessage.location.engagement.eventsSummary.draftCount`
   * - `emailMessage.location.engagement.eventsSummary.errorCount`
   * - `emailMessage.location.id`
   * - `emailMessage.location.created`
   * - `emailMessage.location.updated`
   * - `emailMessage.project.accountId`
   * - `emailMessage.project.status`
   * - `emailMessage.project.settings.setup.featureFlagSetting.allowedCountryShortCodes`
   * - `emailMessage.project.settings.setup.featureFlagSetting.lockCountrySelectionAfterSetup`
   * - `emailMessage.project.settings.setup.featureFlagSetting.allowProjectPrefill`
   * - `emailMessage.project.settings.setup.featureFlagSetting.stepsToHide`
   * - `emailMessage.project.settings.setup.featureFlagSetting.notAllowAnyUpsellTriggersForType`
   * - `emailMessage.project.settings.setup.featureFlagSetting.allowUserToChangeDomain`
   * - `emailMessage.project.settings.setup.keywordsFeatureFlagSetting.keywordsAvailable`
   * - `emailMessage.project.settings.setup.locationsFeatureFlagSetting.locationsAvailable`
   * - `emailMessage.project.settings.setup.competitorsFeatureFlagSetting.competitorsAvailable`
   * - `emailMessage.project.settings.seo.seoRankingsFeatureFlagSetting.keywordsDisplayed`
   * - `emailMessage.project.settings.seo.displayKeywordVisibilityComparison`
   * - `emailMessage.project.settings.seo.displayTopKeywords`
   * - `emailMessage.project.settings.seo.hasCustomCMSTypeOrder`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMin.currency.isoCode`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMin.currency.symbol`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMin.currency.displaySymbolBeforeAmount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMin.amount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMax.currency.isoCode`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMax.currency.symbol`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMax.currency.displaySymbolBeforeAmount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.budgetMax.amount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMin.currency.isoCode`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMin.currency.symbol`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMin.currency.displaySymbolBeforeAmount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMin.amount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMax.currency.isoCode`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMax.currency.symbol`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMax.currency.displaySymbolBeforeAmount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.initialBudgetMax.amount`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.isPreviewFeatureFlagSetting`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.durationOfInitialBudgetRestrictions`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.handlingFee.appliedAfter`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.handlingFee.ownShare`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.handlingFee.resellerShare`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.voucherDistributionMethod`
   * - `emailMessage.project.settings.ads.googleAdsFeatureFlagSetting.voucherDistributionMethodStartDate`
   * - `emailMessage.project.settings.presence.analysis`
   * - `emailMessage.project.settings.rights.delete`
   * - `emailMessage.project.settings.rights.update`
   * - `emailMessage.project.settings.aiBudget.aiBudgetFeatureFlagSetting.monthlyAIBudgetPerProjectInUSD`
   * - `emailMessage.project.id`
   * - `emailMessage.project.created`
   * - `emailMessage.project.updated`
   * - `emailMessage.account.status`
   * - `emailMessage.account.owner.lastName`
   * - `emailMessage.account.owner.firstName`
   * - `emailMessage.account.owner.title`
   * - `emailMessage.account.owner.academicTitle`
   * - `emailMessage.account.owner.jobTitle`
   * - `emailMessage.account.owner.gender.gender`
   * - `emailMessage.account.invoiceCountry.name`
   * - `emailMessage.account.invoiceCountry.alias`
   * - `emailMessage.account.invoiceCountry.parentCountryId`
   * - `emailMessage.account.invoiceCountry.type`
   * - `emailMessage.account.invoiceCountry.tld`
   * - `emailMessage.account.invoiceCountry.commonTld`
   * - `emailMessage.account.invoiceCountry.shortCode`
   * - `emailMessage.account.invoiceCountry.isoCode`
   * - `emailMessage.account.invoiceCountry.phonePrefix`
   * - `emailMessage.account.invoiceCountry.googleLocationName`
   * - `emailMessage.account.invoiceCountry.currency.isoCode`
   * - `emailMessage.account.invoiceCountry.currency.symbol`
   * - `emailMessage.account.invoiceCountry.currency.displaySymbolBeforeAmount`
   * - `emailMessage.account.invoiceCountry.vatRate`
   * - `emailMessage.account.invoiceCountry.euMember`
   * - `emailMessage.account.invoiceCountry.taxKey`
   * - `emailMessage.account.invoiceCountry.accountOfProceeds`
   * - `emailMessage.account.invoiceCountry.locale`
   * - `emailMessage.account.invoiceCountry.unitSystem`
   * - `emailMessage.account.invoiceCountry.timeSystem`
   * - `emailMessage.account.invoiceCountry.firstDayOfWeek`
   * - `emailMessage.account.invoiceCountry.addressFormat`
   * - `emailMessage.account.invoiceCountry.appDefaultLanguageCode`
   * - `emailMessage.account.invoiceCountry.nativeLanguageCode`
   * - `emailMessage.account.invoiceCountry.languageCode`
   * - `emailMessage.account.invoiceCountry.isActive`
   * - `emailMessage.account.invoiceCountry.priority`
   * - `emailMessage.account.invoiceCountry.setting.type`
   * - `emailMessage.account.invoiceCountry.setting.firstnameBeforeLastname`
   * - `emailMessage.account.invoiceCountry.setting.showTitleField`
   * - `emailMessage.account.invoiceCountry.setting.showCookieNotice`
   * - `emailMessage.account.invoiceCountry.setting.availableCreditCards`
   * - `emailMessage.account.invoiceCountry.setting.defaultTrialMode`
   * - `emailMessage.account.invoiceCountry.setting.isActiveForPartners`
   * - `emailMessage.account.invoiceCountry.addressSetting.type`
   * - `emailMessage.account.invoiceCountry.addressSetting.streetNoIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.streetIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.cityIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.stateIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.countyIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.subCountyIsMandatory`
   * - `emailMessage.account.invoiceCountry.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.account.invoiceCountry.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.account.invoiceCountry.addressSetting.streetNoFormat`
   * - `emailMessage.account.invoiceCountry.addressSetting.addressFormat`
   * - `emailMessage.account.invoiceCountry.id`
   * - `emailMessage.account.invoiceCountryId`
   * - `emailMessage.account.resellerId`
   * - `emailMessage.account.affiliate.name`
   * - `emailMessage.account.affiliate.id`
   * - `emailMessage.account.apiAccountId`
   * - `emailMessage.account.parentAccountId`
   * - `emailMessage.account.isSandboxAccount`
   * - `emailMessage.account.isSpecialAccount`
   * - `emailMessage.account.type`
   * - `emailMessage.account.password`
   * - `emailMessage.account.billingCompany.legalEntity.name`
   * - `emailMessage.account.billingCompany.legalEntity.fullName`
   * - `emailMessage.account.billingCompany.legalEntity.type`
   * - `emailMessage.account.billingCompany.registrationNumber.number`
   * - `emailMessage.account.billingCompany.registrationNumber.commercialRegistryOffice`
   * - `emailMessage.account.billingCompany.taxIdentificationNumber.number`
   * - `emailMessage.account.billingCompany.vatId.vatId`
   * - `emailMessage.account.billingCompany.doingBusinessAsName`
   * - `emailMessage.account.billingAddress.premise`
   * - `emailMessage.account.billingAddress.subpremise`
   * - `emailMessage.account.billingAddress.streetNo`
   * - `emailMessage.account.billingAddress.street`
   * - `emailMessage.account.billingAddress.addressLine1`
   * - `emailMessage.account.billingAddress.addressLine2`
   * - `emailMessage.account.billingAddress.postalCode`
   * - `emailMessage.account.billingAddress.postalCodeSuffix`
   * - `emailMessage.account.billingAddress.sublocality`
   * - `emailMessage.account.billingAddress.city.name`
   * - `emailMessage.account.billingAddress.city.alias`
   * - `emailMessage.account.billingAddress.city.stateId`
   * - `emailMessage.account.billingAddress.city.countryId`
   * - `emailMessage.account.billingAddress.city.languageCode`
   * - `emailMessage.account.billingAddress.city.geoPoint.lat`
   * - `emailMessage.account.billingAddress.city.geoPoint.lng`
   * - `emailMessage.account.billingAddress.city.hasCoordinates`
   * - `emailMessage.account.billingAddress.city.branchCount`
   * - `emailMessage.account.billingAddress.city.id`
   * - `emailMessage.account.billingAddress.city.created`
   * - `emailMessage.account.billingAddress.city.updated`
   * - `emailMessage.account.billingAddress.subCounty.name`
   * - `emailMessage.account.billingAddress.subCounty.shortCode`
   * - `emailMessage.account.billingAddress.county.name`
   * - `emailMessage.account.billingAddress.county.shortCode`
   * - `emailMessage.account.billingAddress.state.name`
   * - `emailMessage.account.billingAddress.state.alias`
   * - `emailMessage.account.billingAddress.state.shortCode`
   * - `emailMessage.account.billingAddress.state.countryId`
   * - `emailMessage.account.billingAddress.state.id`
   * - `emailMessage.account.billingAddress.country.name`
   * - `emailMessage.account.billingAddress.country.alias`
   * - `emailMessage.account.billingAddress.country.parentCountryId`
   * - `emailMessage.account.billingAddress.country.type`
   * - `emailMessage.account.billingAddress.country.tld`
   * - `emailMessage.account.billingAddress.country.commonTld`
   * - `emailMessage.account.billingAddress.country.shortCode`
   * - `emailMessage.account.billingAddress.country.isoCode`
   * - `emailMessage.account.billingAddress.country.phonePrefix`
   * - `emailMessage.account.billingAddress.country.googleLocationName`
   * - `emailMessage.account.billingAddress.country.currency.isoCode`
   * - `emailMessage.account.billingAddress.country.currency.symbol`
   * - `emailMessage.account.billingAddress.country.currency.displaySymbolBeforeAmount`
   * - `emailMessage.account.billingAddress.country.vatRate`
   * - `emailMessage.account.billingAddress.country.euMember`
   * - `emailMessage.account.billingAddress.country.taxKey`
   * - `emailMessage.account.billingAddress.country.accountOfProceeds`
   * - `emailMessage.account.billingAddress.country.locale`
   * - `emailMessage.account.billingAddress.country.unitSystem`
   * - `emailMessage.account.billingAddress.country.timeSystem`
   * - `emailMessage.account.billingAddress.country.firstDayOfWeek`
   * - `emailMessage.account.billingAddress.country.addressFormat`
   * - `emailMessage.account.billingAddress.country.appDefaultLanguageCode`
   * - `emailMessage.account.billingAddress.country.nativeLanguageCode`
   * - `emailMessage.account.billingAddress.country.languageCode`
   * - `emailMessage.account.billingAddress.country.isActive`
   * - `emailMessage.account.billingAddress.country.priority`
   * - `emailMessage.account.billingAddress.country.setting.type`
   * - `emailMessage.account.billingAddress.country.setting.firstnameBeforeLastname`
   * - `emailMessage.account.billingAddress.country.setting.showTitleField`
   * - `emailMessage.account.billingAddress.country.setting.showCookieNotice`
   * - `emailMessage.account.billingAddress.country.setting.availableCreditCards`
   * - `emailMessage.account.billingAddress.country.setting.defaultTrialMode`
   * - `emailMessage.account.billingAddress.country.setting.isActiveForPartners`
   * - `emailMessage.account.billingAddress.country.addressSetting.type`
   * - `emailMessage.account.billingAddress.country.addressSetting.streetNoIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.streetIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.cityIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.stateIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.countyIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.subCountyIsMandatory`
   * - `emailMessage.account.billingAddress.country.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.account.billingAddress.country.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.account.billingAddress.country.addressSetting.streetNoFormat`
   * - `emailMessage.account.billingAddress.country.addressSetting.addressFormat`
   * - `emailMessage.account.billingAddress.country.id`
   * - `emailMessage.account.billingAddress.geoPoint.lat`
   * - `emailMessage.account.billingAddress.geoPoint.lng`
   * - `emailMessage.account.billingAddress.customerSelectedGeoPoint.lat`
   * - `emailMessage.account.billingAddress.customerSelectedGeoPoint.lng`
   * - `emailMessage.account.billingAddress.geoBounds.northeast.lat`
   * - `emailMessage.account.billingAddress.geoBounds.northeast.lng`
   * - `emailMessage.account.billingAddress.geoBounds.southwest.lat`
   * - `emailMessage.account.billingAddress.geoBounds.southwest.lng`
   * - `emailMessage.account.billingAddress.formattedAddress`
   * - `emailMessage.account.billingAddress.languageCode`
   * - `emailMessage.account.billingAddress.displayAddress`
   * - `emailMessage.account.billingAddress.inputAddress`
   * - `emailMessage.account.billingAddress.precision`
   * - `emailMessage.account.languageCode`
   * - `emailMessage.account.totalNumberOfActiveProjects`
   * - `emailMessage.account.email`
   * - `emailMessage.account.id`
   * - `emailMessage.partnerCompanySetting.company.legalEntity.name`
   * - `emailMessage.partnerCompanySetting.company.legalEntity.fullName`
   * - `emailMessage.partnerCompanySetting.company.legalEntity.type`
   * - `emailMessage.partnerCompanySetting.company.registrationNumber.number`
   * - `emailMessage.partnerCompanySetting.company.registrationNumber.commercialRegistryOffice`
   * - `emailMessage.partnerCompanySetting.company.taxIdentificationNumber.number`
   * - `emailMessage.partnerCompanySetting.company.vatId.vatId`
   * - `emailMessage.partnerCompanySetting.company.doingBusinessAsName`
   * - `emailMessage.partnerCompanySetting.footerLegalData`
   * - `emailMessage.partnerCompanySetting.address.premise`
   * - `emailMessage.partnerCompanySetting.address.subpremise`
   * - `emailMessage.partnerCompanySetting.address.streetNo`
   * - `emailMessage.partnerCompanySetting.address.street`
   * - `emailMessage.partnerCompanySetting.address.addressLine1`
   * - `emailMessage.partnerCompanySetting.address.addressLine2`
   * - `emailMessage.partnerCompanySetting.address.postalCode`
   * - `emailMessage.partnerCompanySetting.address.postalCodeSuffix`
   * - `emailMessage.partnerCompanySetting.address.sublocality`
   * - `emailMessage.partnerCompanySetting.address.city.name`
   * - `emailMessage.partnerCompanySetting.address.city.alias`
   * - `emailMessage.partnerCompanySetting.address.city.stateId`
   * - `emailMessage.partnerCompanySetting.address.city.countryId`
   * - `emailMessage.partnerCompanySetting.address.city.languageCode`
   * - `emailMessage.partnerCompanySetting.address.city.geoPoint.lat`
   * - `emailMessage.partnerCompanySetting.address.city.geoPoint.lng`
   * - `emailMessage.partnerCompanySetting.address.city.hasCoordinates`
   * - `emailMessage.partnerCompanySetting.address.city.branchCount`
   * - `emailMessage.partnerCompanySetting.address.city.id`
   * - `emailMessage.partnerCompanySetting.address.city.created`
   * - `emailMessage.partnerCompanySetting.address.city.updated`
   * - `emailMessage.partnerCompanySetting.address.subCounty.name`
   * - `emailMessage.partnerCompanySetting.address.subCounty.shortCode`
   * - `emailMessage.partnerCompanySetting.address.county.name`
   * - `emailMessage.partnerCompanySetting.address.county.shortCode`
   * - `emailMessage.partnerCompanySetting.address.state.name`
   * - `emailMessage.partnerCompanySetting.address.state.alias`
   * - `emailMessage.partnerCompanySetting.address.state.shortCode`
   * - `emailMessage.partnerCompanySetting.address.state.countryId`
   * - `emailMessage.partnerCompanySetting.address.state.id`
   * - `emailMessage.partnerCompanySetting.address.country.name`
   * - `emailMessage.partnerCompanySetting.address.country.alias`
   * - `emailMessage.partnerCompanySetting.address.country.parentCountryId`
   * - `emailMessage.partnerCompanySetting.address.country.type`
   * - `emailMessage.partnerCompanySetting.address.country.tld`
   * - `emailMessage.partnerCompanySetting.address.country.commonTld`
   * - `emailMessage.partnerCompanySetting.address.country.shortCode`
   * - `emailMessage.partnerCompanySetting.address.country.isoCode`
   * - `emailMessage.partnerCompanySetting.address.country.phonePrefix`
   * - `emailMessage.partnerCompanySetting.address.country.googleLocationName`
   * - `emailMessage.partnerCompanySetting.address.country.currency.isoCode`
   * - `emailMessage.partnerCompanySetting.address.country.currency.symbol`
   * - `emailMessage.partnerCompanySetting.address.country.currency.displaySymbolBeforeAmount`
   * - `emailMessage.partnerCompanySetting.address.country.vatRate`
   * - `emailMessage.partnerCompanySetting.address.country.euMember`
   * - `emailMessage.partnerCompanySetting.address.country.taxKey`
   * - `emailMessage.partnerCompanySetting.address.country.accountOfProceeds`
   * - `emailMessage.partnerCompanySetting.address.country.locale`
   * - `emailMessage.partnerCompanySetting.address.country.unitSystem`
   * - `emailMessage.partnerCompanySetting.address.country.timeSystem`
   * - `emailMessage.partnerCompanySetting.address.country.firstDayOfWeek`
   * - `emailMessage.partnerCompanySetting.address.country.addressFormat`
   * - `emailMessage.partnerCompanySetting.address.country.appDefaultLanguageCode`
   * - `emailMessage.partnerCompanySetting.address.country.nativeLanguageCode`
   * - `emailMessage.partnerCompanySetting.address.country.languageCode`
   * - `emailMessage.partnerCompanySetting.address.country.isActive`
   * - `emailMessage.partnerCompanySetting.address.country.priority`
   * - `emailMessage.partnerCompanySetting.address.country.setting.type`
   * - `emailMessage.partnerCompanySetting.address.country.setting.firstnameBeforeLastname`
   * - `emailMessage.partnerCompanySetting.address.country.setting.showTitleField`
   * - `emailMessage.partnerCompanySetting.address.country.setting.showCookieNotice`
   * - `emailMessage.partnerCompanySetting.address.country.setting.availableCreditCards`
   * - `emailMessage.partnerCompanySetting.address.country.setting.defaultTrialMode`
   * - `emailMessage.partnerCompanySetting.address.country.setting.isActiveForPartners`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.type`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.streetNoIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.streetIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.cityIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.postalCodeIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.stateIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.countyIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.countyShortCodeIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.subCountyIsMandatory`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.streetNoIsBeforeStreet`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.cityIsBeforePostalcode`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.streetNoFormat`
   * - `emailMessage.partnerCompanySetting.address.country.addressSetting.addressFormat`
   * - `emailMessage.partnerCompanySetting.address.country.id`
   * - `emailMessage.partnerCompanySetting.address.geoPoint.lat`
   * - `emailMessage.partnerCompanySetting.address.geoPoint.lng`
   * - `emailMessage.partnerCompanySetting.address.customerSelectedGeoPoint.lat`
   * - `emailMessage.partnerCompanySetting.address.customerSelectedGeoPoint.lng`
   * - `emailMessage.partnerCompanySetting.address.geoBounds.northeast.lat`
   * - `emailMessage.partnerCompanySetting.address.geoBounds.northeast.lng`
   * - `emailMessage.partnerCompanySetting.address.geoBounds.southwest.lat`
   * - `emailMessage.partnerCompanySetting.address.geoBounds.southwest.lng`
   * - `emailMessage.partnerCompanySetting.address.formattedAddress`
   * - `emailMessage.partnerCompanySetting.address.languageCode`
   * - `emailMessage.partnerCompanySetting.address.displayAddress`
   * - `emailMessage.partnerCompanySetting.address.inputAddress`
   * - `emailMessage.partnerCompanySetting.address.precision`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.instagram`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.facebook`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.youtube`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.twitter`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.tiktok`
   * - `emailMessage.partnerCompanySetting.socialMediaAccounts.linkedin`
   * - `emailMessage.partnerCompanySetting.websiteURLs.legalDataURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.termsAndConditionsURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.customerSupportURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.manageNotificationURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.privacyURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.blogOrNewsURL`
   * - `emailMessage.partnerCompanySetting.websiteURLs.aboutURL`
   * - `emailMessage.productThemeSetting.logo.publicUrl`
   * - `emailMessage.productThemeSetting.logo.description`
   * - `emailMessage.productThemeSetting.logo.type`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.base64EncodedContent`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.height`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.width`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.fileSize`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.fileFormat`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.body`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.name`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.compression`
   * - `emailMessage.productThemeSetting.logo.mediaItemContent.externalId`
   * - `emailMessage.productThemeSetting.primaryShades.displayPrefix`
   * - `emailMessage.productThemeSetting.secondaryShades.displayPrefix`
   * - `emailMessage.partnerEmailSetting.sendReports`
   * - `emailMessage.partnerEmailSetting.sender.name`
   * - `emailMessage.partnerEmailSetting.sender.email`
   * - `emailMessage.partnerEmailSetting.mediaRootUrl`
   * - `emailMessage.partnerEmailSetting.customDomain`
   * - `emailMessage.partnerEmailSetting.useProductNameAsSenderName`
   * - `emailMessage.partnerEmailSetting.passIntercomMailsThroughTemplatingSystem`
   * - `emailMessage.partnerEmailSetting.sendIntercomActivationCampaign`
   * - `emailMessage.partnerProductSetting.additionalLicenseFee`
   * - `emailMessage.partnerProductSetting.initialSetupFee`
   * - `emailMessage.partnerProductSetting.initialSetupFeeInclVat`
   * - `emailMessage.partnerProductSetting.billOnlyIfSetupCompleted`
   * - `emailMessage.partnerProductSetting.useInvoiceCountryCurrencyForBilling`
   * - `emailMessage.partnerProductSetting.logoutUrl`
   * - `emailMessage.partnerProductSetting.productUrl`
   * - `emailMessage.partnerProductSetting.redirectLoggedInAccountsToApplication`
   * - `emailMessage.partnerProductSetting.partnerSubbrand`
   * - `emailMessage.partnerProductSetting.customSupportSystemType`
   * - `emailMessage.partnerProductSetting.billOnlyIfSetupCompletedRuleAppliedAfterDate`
   * - `emailMessage.partnerProductSetting.externalId`
   * - `emailMessage.partnerProductSetting.disableDefaultReviewsReplySuggestions`
   * - `emailMessage.mjmlContent.content`
   * - `emailMessage.htmlContent.content`
   * - `emailMessage.from.name`
   * - `emailMessage.from.email`
   * - `emailMessage.subject`
   * - `emailMessage.campaignId`
   * - `handlingError`
   * - `id`
   * - `created`
   * - `updated`</details>
   */
  filters?: string;
};
export type PostClientReputationLocationsReviewsRequestsEmailsMultipleByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PatchClientReputationLocationsReviewsRequestsemailsUpdateByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PostClientReputationLocationsReviewsRequestsemailsUpdateByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type DeleteClientReputationLocationsReviewsRequestsEmailsDeleteMultipleByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientReputationLocationsReviewsRequestsEmailsSendByLocationReviewRequestEmailIdByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * Wether to use informal or formal writing style
   * Allowed Values:
   * -   `FORMAL`
   * -   `PROFESSIONAL`
   * -   `INFORMATIVE`
   * -   `FRIENDLY`
   * -   `BOLD`
   * -   `WITTY`
   *
   */
  writingStyle?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PostClientReputationLocationsReviewsRequestsEmailsSendByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientReputationLocationsReviewsRequestsShortUrlLinkByLocationReviewRequestIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientReputationLocationsReputationByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientReputationLocationsReputationReviewsByExternalIdByDirectoryAliasOpts = {
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
   * - `location`
   *   - Allowed filter properties are:
   *   - Allowed orderBy properties are:
   * - `directory`
   * - `replies`
   *   - Allowed filter properties are:
   *     - `locationId`
   *     - `externalId`
   *     - `reviewExternalId`
   *     - `text`
   *     - `originalAIGeneratedText`
   *     - `review.locationId`
   *     - `review.externalId`
   *     - `review.directoryBusinessId`
   *     - `review.text`
   *     - `review.author.name`
   *     - `review.author.externalId`
   *     - `review.link`
   *     - `review.rating`
   *     - `review.canReply`
   *     - `review.canGenerateReply`
   *     - `review.sentiment`
   *     - `review.directoryId`
   *     - `review.created`
   *     - `review.updated`
   *     - `aiGeneratedReplyHasBeenModified`
   *     - `author.name`
   *     - `author.externalId`
   *     - `directoryId`
   *     - `isAIGenerated`
   *     - `canEdit`
   *     - `canDelete`
   *     - `publishingStatus`
   *     - `id`
   *     - `created`
   *     - `updated`
   *   - Allowed orderBy properties are:
   *     - `locationId`
   *     - `externalId`
   *     - `reviewExternalId`
   *     - `text`
   *     - `originalAIGeneratedText`
   *     - `review.locationId`
   *     - `review.externalId`
   *     - `review.directoryBusinessId`
   *     - `review.text`
   *     - `review.author.name`
   *     - `review.author.externalId`
   *     - `review.link`
   *     - `review.rating`
   *     - `review.canReply`
   *     - `review.canGenerateReply`
   *     - `review.sentiment`
   *     - `review.directoryId`
   *     - `review.created`
   *     - `review.updated`
   *     - `aiGeneratedReplyHasBeenModified`
   *     - `author.name`
   *     - `author.externalId`
   *     - `directoryId`
   *     - `isAIGenerated`
   *     - `canEdit`
   *     - `canDelete`
   *     - `publishingStatus`
   *     - `id`
   *     - `created`
   *     - `updated`</details>
   */
  expand?: string;
};
export type GetClientReputationLocationsReputationReviewsByLocationIdOpts = {
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
   *
   * - `to`
   * - `from`
   * - `directories`
   * - `sentiment`
   * - `text`
   * - `replies`
   * - `generationMode`
   * - `fromDateTime`
   * - `rating`</details>
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
   * - `to`
   * - `from`
   * - `directories` - one of [`google-business-profile`, `facebook`, `others`]
   * - `sentiment` - one of [`good`, `neutral`, `bad`]
   * - `text` - one of [`withText`, `withoutText`]
   * - `replies` - one of [`withReplies`, `withoutReplies`]
   * - `generationMode` - one of [`all`, `manual`, `aiGenerated`]
   * - `fromDateTime`
   * - `rating`</details>
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
   * - `location`
   *   - Allowed filter properties are:
   *   - Allowed orderBy properties are:
   * - `directory`
   * - `replies`
   *   - Allowed filter properties are:
   *     - `locationId`
   *     - `externalId`
   *     - `reviewExternalId`
   *     - `text`
   *     - `originalAIGeneratedText`
   *     - `review.locationId`
   *     - `review.externalId`
   *     - `review.directoryBusinessId`
   *     - `review.text`
   *     - `review.author.name`
   *     - `review.author.externalId`
   *     - `review.link`
   *     - `review.rating`
   *     - `review.canReply`
   *     - `review.canGenerateReply`
   *     - `review.sentiment`
   *     - `review.directoryId`
   *     - `review.created`
   *     - `review.updated`
   *     - `aiGeneratedReplyHasBeenModified`
   *     - `author.name`
   *     - `author.externalId`
   *     - `directoryId`
   *     - `isAIGenerated`
   *     - `canEdit`
   *     - `canDelete`
   *     - `publishingStatus`
   *     - `id`
   *     - `created`
   *     - `updated`
   *   - Allowed orderBy properties are:
   *     - `locationId`
   *     - `externalId`
   *     - `reviewExternalId`
   *     - `text`
   *     - `originalAIGeneratedText`
   *     - `review.locationId`
   *     - `review.externalId`
   *     - `review.directoryBusinessId`
   *     - `review.text`
   *     - `review.author.name`
   *     - `review.author.externalId`
   *     - `review.link`
   *     - `review.rating`
   *     - `review.canReply`
   *     - `review.canGenerateReply`
   *     - `review.sentiment`
   *     - `review.directoryId`
   *     - `review.created`
   *     - `review.updated`
   *     - `aiGeneratedReplyHasBeenModified`
   *     - `author.name`
   *     - `author.externalId`
   *     - `directoryId`
   *     - `isAIGenerated`
   *     - `canEdit`
   *     - `canDelete`
   *     - `publishingStatus`
   *     - `id`
   *     - `created`
   *     - `updated`</details>
   */
  expand?: string;
};
export type PatchClientReputationLocationsReputationReviewsGenerateReplyByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PostClientReputationLocationsReputationReviewsGenerateReplyByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PostClientReputationLocationsReputationReviewsReplyByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PatchClientReputationLocationsReputationReviewsReplyByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type DeleteClientReputationLocationsReputationReviewsReplyByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientReputationLocationsCompetitorsReputationByLocationIdOpts = {
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
   *
   * - `REPUTATION`
   * - `DISTANCE`
   * - `VISIBILITY`
   * - `VISIBILITY_AND_DISTANCE`</details>
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
   * - `source` - one of [`CUSTOMER_SELECTED`, `GOOGLE`]</details>
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
   * - `clusters`
   * - `socialAccounts`
   * - `website`
   *   - Allowed filter properties are:
   *   - Allowed orderBy properties are:
   * - `seo`
   * - `reputation`
   * - `rankingsBusiness`</details>
   */
  expand?: string;
};
export type GetClientReputationLocationsCompetitorsReputationClustersByLocationIdOpts = {
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
   *
   * - `REPUTATION`
   * - `DISTANCE`
   * - `VISIBILITY`
   * - `VISIBILITY_AND_DISTANCE`</details>
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
   * - `source` - one of [`CUSTOMER_SELECTED`, `GOOGLE`]</details>
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
   * - `clusters`
   * - `socialAccounts`
   * - `website`
   *   - Allowed filter properties are:
   *   - Allowed orderBy properties are:
   * - `seo`
   * - `reputation`
   * - `rankingsBusiness`</details>
   */
  expand?: string;
};
export type GetClientReputationLocationsReviewsWidgetByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PatchClientReputationLocationsReviewsWidgetByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PostClientReputationLocationsReviewsWidgetByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientReputationLocationsReviewsStatsByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};

export class ReputationStore extends HttpStore {
  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientReputationLocationsReviewsRequestsByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Returns all LocationReviewRequests for a Location
   */

  /**
   * Get all LocationReviewRequests for current Location
   * Returns all LocationReviewRequests for a Location
   */
  getClientReputationLocationsReviewsRequestsByLocationId(
    locationId: number,
    queryParams: GetClientReputationLocationsReviewsRequestsByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<ReputationReviewRequestsGetResponseDto> {
    return this.get(
      new EndPoint(`/app/api/client/reputation/locations/${locationId}/reviews/requests`),
      queryParams,
      signal,
    );
  }

  static getClientReputationLocationsReviewsRequestsByLocationIdThunk = createAsyncThunk<
    ReputationReviewRequestsGetResponseDto,
    { locationId: number; queryParams: GetClientReputationLocationsReviewsRequestsByLocationIdOpts },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Get all LocationReviewRequests for current Location
     * Returns all LocationReviewRequests for a Location
     */
    'getClientReputationLocationsReviewsRequestsByLocationId',
    async (
      {
        locationId,
        queryParams,
      }: { locationId: number; queryParams: GetClientReputationLocationsReviewsRequestsByLocationIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientReputationLocationsReviewsRequestsByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          reputationStore.getClientReputationLocationsReviewsRequestsByLocationId(locationId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsReviewsRequestsByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsReviewsRequestsByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientReputationLocationsReviewsRequestsByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reviews/requests',
  );
  static getClientReputationLocationsReviewsRequestsByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reviews/requests(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientReputationLocationsReviewsRequestsByChannelByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Returns LocationReviewRequests for a Location by Channel or creates for the given Channel the default ones
   */

  /**
   * Get LocationReviewRequests for Location by Channel
   * Returns LocationReviewRequests for a Location by Channel or creates for the given Channel the default ones
   */
  getClientReputationLocationsReviewsRequestsByChannelByLocationId(
    locationId: number,
    queryParams: GetClientReputationLocationsReviewsRequestsByChannelByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<ReputationReviewRequestsGetResponseDto> {
    return this.get(
      new EndPoint(`/app/api/client/reputation/locations/${locationId}/reviews/requests/byChannel`),
      queryParams,
      signal,
    );
  }

  static getClientReputationLocationsReviewsRequestsByChannelByLocationIdThunk = createAsyncThunk<
    ReputationReviewRequestsGetResponseDto,
    { locationId: number; queryParams: GetClientReputationLocationsReviewsRequestsByChannelByLocationIdOpts },
    {
      rejectValue: BadRequestException | NotFoundException | MethodNotAllowedException | InternalErrorException;
    }
  >(
    /**
     * Get LocationReviewRequests for Location by Channel
     * Returns LocationReviewRequests for a Location by Channel or creates for the given Channel the default ones
     */
    'getClientReputationLocationsReviewsRequestsByChannelByLocationId',
    async (
      {
        locationId,
        queryParams,
      }: { locationId: number; queryParams: GetClientReputationLocationsReviewsRequestsByChannelByLocationIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientReputationLocationsReviewsRequestsByChannelByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          reputationStore.getClientReputationLocationsReviewsRequestsByChannelByLocationId(
            locationId,
            queryParams,
            signal,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsReviewsRequestsByChannelByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsReviewsRequestsByChannelByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientReputationLocationsReviewsRequestsByChannelByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/byChannel',
  );
  static getClientReputationLocationsReviewsRequestsByChannelByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/byChannel(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientReputationLocationsReviewsRequestsByLocationReviewRequestIdByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Returns a LocationReviewRequest by ID
   */

  /**
   * Get a LocationReviewRequest by ID
   * Returns a LocationReviewRequest by ID
   */
  getClientReputationLocationsReviewsRequestsByLocationReviewRequestIdByLocationId(
    locationReviewRequestId: number,
    locationId: number,
    queryParams: GetClientReputationLocationsReviewsRequestsByLocationReviewRequestIdByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<ReputationReviewRequestGetResponseDto> {
    return this.get(
      new EndPoint(`/app/api/client/reputation/locations/${locationId}/reviews/requests/${locationReviewRequestId}`),
      queryParams,
      signal,
    );
  }

  static getClientReputationLocationsReviewsRequestsByLocationReviewRequestIdByLocationIdThunk = createAsyncThunk<
    ReputationReviewRequestGetResponseDto,
    {
      locationReviewRequestId: number;
      locationId: number;
      queryParams: GetClientReputationLocationsReviewsRequestsByLocationReviewRequestIdByLocationIdOpts;
    },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Get a LocationReviewRequest by ID
     * Returns a LocationReviewRequest by ID
     */
    'getClientReputationLocationsReviewsRequestsByLocationReviewRequestIdByLocationId',
    async (
      {
        locationReviewRequestId,
        locationId,
        queryParams,
      }: {
        locationReviewRequestId: number;
        locationId: number;
        queryParams: GetClientReputationLocationsReviewsRequestsByLocationReviewRequestIdByLocationIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientReputationLocationsReviewsRequestsByLocationReviewRequestIdByLocationIdAbortManager._push(
          requestId,
          controller,
        );

        const result = await firstValueFrom(
          reputationStore.getClientReputationLocationsReviewsRequestsByLocationReviewRequestIdByLocationId(
            locationReviewRequestId,
            locationId,
            queryParams,
            signal,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsReviewsRequestsByLocationReviewRequestIdByLocationIdAbortManager._remove(
          requestId,
        );

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsReviewsRequestsByLocationReviewRequestIdByLocationIdAbortManager._remove(
          requestId,
        );

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientReputationLocationsReviewsRequestsByLocationReviewRequestIdByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/{locationReviewRequestId}',
  );
  static getClientReputationLocationsReviewsRequestsByLocationReviewRequestIdByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/{locationReviewRequestId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static patchClientReputationLocationsReviewsRequestsUpdateByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Upsert a LocationReviewRequests for current Location
   */

  /**
   * Upsert a LocationReviewRequests
   * Upsert a LocationReviewRequests for current Location
   */
  patchClientReputationLocationsReviewsRequestsUpdateByLocationId(
    locationId: number,
    requestBody: ReputationReviewRequestUpdateRequestDto,
    queryParams: PatchClientReputationLocationsReviewsRequestsUpdateByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<ReputationReviewRequestUpdateResponseDto> {
    return this.patch(
      new EndPoint(`/app/api/client/reputation/locations/${locationId}/reviews/requests/update`),
      requestBody,
      queryParams,
      signal,
    );
  }

  static patchClientReputationLocationsReviewsRequestsUpdateByLocationIdThunk = createAsyncThunk<
    ReputationReviewRequestUpdateResponseDto,
    {
      locationId: number;
      requestBody: ReputationReviewRequestUpdateRequestDto;
      queryParams: PatchClientReputationLocationsReviewsRequestsUpdateByLocationIdOpts;
    },
    {
      rejectValue: BadRequestException | ForbiddenException | MethodNotAllowedException | InternalErrorException;
    }
  >(
    /**
     * Upsert a LocationReviewRequests
     * Upsert a LocationReviewRequests for current Location
     */
    'patchClientReputationLocationsReviewsRequestsUpdateByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
      }: {
        locationId: number;
        requestBody: ReputationReviewRequestUpdateRequestDto;
        queryParams: PatchClientReputationLocationsReviewsRequestsUpdateByLocationIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.patchClientReputationLocationsReviewsRequestsUpdateByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          reputationStore.patchClientReputationLocationsReviewsRequestsUpdateByLocationId(
            locationId,
            requestBody,
            queryParams,
            signal,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchClientReputationLocationsReviewsRequestsUpdateByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchClientReputationLocationsReviewsRequestsUpdateByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static patchClientReputationLocationsReviewsRequestsUpdateByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/update',
  );
  static patchClientReputationLocationsReviewsRequestsUpdateByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/update(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postClientReputationLocationsReviewsRequestsUpdateByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Upsert a LocationReviewRequests for current Location
   */

  /**
   * Upsert a LocationReviewRequests
   * Upsert a LocationReviewRequests for current Location
   */
  postClientReputationLocationsReviewsRequestsUpdateByLocationId(
    locationId: number,
    requestBody: ReputationReviewRequestUpdateRequestDto,
    queryParams: PostClientReputationLocationsReviewsRequestsUpdateByLocationIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<ReputationReviewRequestUpdateResponseDto> {
    return this.post(
      new EndPoint(`/app/api/client/reputation/locations/${locationId}/reviews/requests/update`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postClientReputationLocationsReviewsRequestsUpdateByLocationIdThunk = createAsyncThunk<
    ReputationReviewRequestUpdateResponseDto,
    {
      locationId: number;
      requestBody: ReputationReviewRequestUpdateRequestDto;
      queryParams: PostClientReputationLocationsReviewsRequestsUpdateByLocationIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: BadRequestException | ForbiddenException | MethodNotAllowedException | InternalErrorException;
    }
  >(
    /**
     * Upsert a LocationReviewRequests
     * Upsert a LocationReviewRequests for current Location
     */
    'postClientReputationLocationsReviewsRequestsUpdateByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        locationId: number;
        requestBody: ReputationReviewRequestUpdateRequestDto;
        queryParams: PostClientReputationLocationsReviewsRequestsUpdateByLocationIdOpts;
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
        this.postClientReputationLocationsReviewsRequestsUpdateByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          reputationStore.postClientReputationLocationsReviewsRequestsUpdateByLocationId(
            locationId,
            requestBody,
            queryParams,
            signal,
            contentType,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientReputationLocationsReviewsRequestsUpdateByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientReputationLocationsReviewsRequestsUpdateByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postClientReputationLocationsReviewsRequestsUpdateByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/update',
  );
  static postClientReputationLocationsReviewsRequestsUpdateByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/update(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postClientReputationLocationsReviewsRequestsCreateByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Creates a LocationReviewRequest
   */

  /**
   * Create a LocationReviewRequest
   * Creates a LocationReviewRequest
   */
  postClientReputationLocationsReviewsRequestsCreateByLocationId(
    locationId: number,
    requestBody: ReputationReviewRequestPostRequestDto,
    queryParams: PostClientReputationLocationsReviewsRequestsCreateByLocationIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<ReputationReviewRequestUpdateResponseDto> {
    return this.post(
      new EndPoint(`/app/api/client/reputation/locations/${locationId}/reviews/requests/create`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postClientReputationLocationsReviewsRequestsCreateByLocationIdThunk = createAsyncThunk<
    ReputationReviewRequestUpdateResponseDto,
    {
      locationId: number;
      requestBody: ReputationReviewRequestPostRequestDto;
      queryParams: PostClientReputationLocationsReviewsRequestsCreateByLocationIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue:
        | BadRequestException
        | ForbiddenException
        | NotFoundException
        | MethodNotAllowedException
        | InternalErrorException;
    }
  >(
    /**
     * Create a LocationReviewRequest
     * Creates a LocationReviewRequest
     */
    'postClientReputationLocationsReviewsRequestsCreateByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        locationId: number;
        requestBody: ReputationReviewRequestPostRequestDto;
        queryParams: PostClientReputationLocationsReviewsRequestsCreateByLocationIdOpts;
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
        this.postClientReputationLocationsReviewsRequestsCreateByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          reputationStore.postClientReputationLocationsReviewsRequestsCreateByLocationId(
            locationId,
            requestBody,
            queryParams,
            signal,
            contentType,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientReputationLocationsReviewsRequestsCreateByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientReputationLocationsReviewsRequestsCreateByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postClientReputationLocationsReviewsRequestsCreateByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/create',
  );
  static postClientReputationLocationsReviewsRequestsCreateByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/create(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientReputationLocationsReviewsRequestsGetHtmlTemplateByLocationReviewRequestIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Returns HTML template for a LocationReviewRequest
   */

  /**
   * Get HTML template for a LocationReviewRequest
   * Returns HTML template for a LocationReviewRequest
   */
  getClientReputationLocationsReviewsRequestsGetHtmlTemplateByLocationReviewRequestId(
    locationReviewRequestId: number,
    locationId: number,
    queryParams: GetClientReputationLocationsReviewsRequestsGetHtmlTemplateByLocationReviewRequestIdOpts,
    signal?: AbortSignal,
  ): Observable<any> {
    return this.get(
      new EndPoint(
        `/app/api/client/reputation/locations/${locationId}/reviews/requests/${locationReviewRequestId}/getHtmlTemplate`,
      ),
      queryParams,
      signal,
    );
  }

  static getClientReputationLocationsReviewsRequestsGetHtmlTemplateByLocationReviewRequestIdThunk = createAsyncThunk<
    any,
    {
      locationReviewRequestId: number;
      locationId: number;
      queryParams: GetClientReputationLocationsReviewsRequestsGetHtmlTemplateByLocationReviewRequestIdOpts;
    },
    {
      rejectValue: BadRequestException | NotFoundException | MethodNotAllowedException | InternalErrorException;
    }
  >(
    /**
     * Get HTML template for a LocationReviewRequest
     * Returns HTML template for a LocationReviewRequest
     */
    'getClientReputationLocationsReviewsRequestsGetHtmlTemplateByLocationReviewRequestId',
    async (
      {
        locationReviewRequestId,
        locationId,
        queryParams,
      }: {
        locationReviewRequestId: number;
        locationId: number;
        queryParams: GetClientReputationLocationsReviewsRequestsGetHtmlTemplateByLocationReviewRequestIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientReputationLocationsReviewsRequestsGetHtmlTemplateByLocationReviewRequestIdAbortManager._push(
          requestId,
          controller,
        );

        const result = await firstValueFrom(
          reputationStore.getClientReputationLocationsReviewsRequestsGetHtmlTemplateByLocationReviewRequestId(
            locationReviewRequestId,
            locationId,
            queryParams,
            signal,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsReviewsRequestsGetHtmlTemplateByLocationReviewRequestIdAbortManager._remove(
          requestId,
        );

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsReviewsRequestsGetHtmlTemplateByLocationReviewRequestIdAbortManager._remove(
          requestId,
        );

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientReputationLocationsReviewsRequestsGetHtmlTemplateByLocationReviewRequestIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/{locationReviewRequestId}/getHtmlTemplate',
  );
  static getClientReputationLocationsReviewsRequestsGetHtmlTemplateByLocationReviewRequestIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/{locationReviewRequestId}/getHtmlTemplate(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientReputationLocationsReviewsRequestsDownloadPrintMaterialsByLocationReviewRequestIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Downloads print materials for a LocationReviewRequest and returns it as an archive
   *
   *
   *
   *
   * |null
   */

  /**
   * Download ReviewRequest PrintMaterials as archive
   * Downloads print materials for a LocationReviewRequest and returns it as an archive
   *
   *
   *
   *
   * |null
   */
  getClientReputationLocationsReviewsRequestsDownloadPrintMaterialsByLocationReviewRequestId(
    locationReviewRequestId: number,
    locationId: number,
    queryParams: GetClientReputationLocationsReviewsRequestsDownloadPrintMaterialsByLocationReviewRequestIdOpts,
    signal?: AbortSignal,
  ): Observable<any> {
    return this.get(
      new EndPoint(
        `/app/api/client/reputation/locations/${locationId}/reviews/requests/${locationReviewRequestId}/downloadPrintMaterials`,
      ),
      queryParams,
      signal,
    );
  }

  static getClientReputationLocationsReviewsRequestsDownloadPrintMaterialsByLocationReviewRequestIdThunk =
    createAsyncThunk<
      any,
      {
        locationReviewRequestId: number;
        locationId: number;
        queryParams: GetClientReputationLocationsReviewsRequestsDownloadPrintMaterialsByLocationReviewRequestIdOpts;
      },
      {
        rejectValue: BadRequestException | NotFoundException | InternalErrorException;
      }
    >(
      /**
       * Download ReviewRequest PrintMaterials as archive
       * Downloads print materials for a LocationReviewRequest and returns it as an archive
       *
       *
       *
       *
       * |null
       */
      'getClientReputationLocationsReviewsRequestsDownloadPrintMaterialsByLocationReviewRequestId',
      async (
        {
          locationReviewRequestId,
          locationId,
          queryParams,
        }: {
          locationReviewRequestId: number;
          locationId: number;
          queryParams: GetClientReputationLocationsReviewsRequestsDownloadPrintMaterialsByLocationReviewRequestIdOpts;
        },
        { rejectWithValue } = {} as any,
      ) => {
        // Generate a random request Id
        const requestId = new Date().getTime().toString();

        try {
          // Create a new Abort controller for the request
          const controller = new AbortController();

          const signal = controller.signal;
          this.getClientReputationLocationsReviewsRequestsDownloadPrintMaterialsByLocationReviewRequestIdAbortManager._push(
            requestId,
            controller,
          );

          const result = await firstValueFrom(
            reputationStore.getClientReputationLocationsReviewsRequestsDownloadPrintMaterialsByLocationReviewRequestId(
              locationReviewRequestId,
              locationId,
              queryParams,
              signal,
            ),
          );

          // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
          this.getClientReputationLocationsReviewsRequestsDownloadPrintMaterialsByLocationReviewRequestIdAbortManager._remove(
            requestId,
          );

          return result;
        } catch (err) {
          // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
          this.getClientReputationLocationsReviewsRequestsDownloadPrintMaterialsByLocationReviewRequestIdAbortManager._remove(
            requestId,
          );

          return rejectWithValue(err.response.data);
        }
      },
    );

  static getClientReputationLocationsReviewsRequestsDownloadPrintMaterialsByLocationReviewRequestIdUrlRegEx =
    new RegExp(
      '/app/api/client/reputation/locations/{locationId}/reviews/requests/{locationReviewRequestId}/downloadPrintMaterials',
    );
  static getClientReputationLocationsReviewsRequestsDownloadPrintMaterialsByLocationReviewRequestIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/{locationReviewRequestId}/downloadPrintMaterials(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientReputationLocationsReviewsRequestsDownloadPrintMaterialsByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Downloads print all print materials for a Location and return it as an archive
   *
   *
   *
   *
   * |null
   */

  /**
   * Download all PrintMaterials as archive
   * Downloads print all print materials for a Location and return it as an archive
   *
   *
   *
   *
   * |null
   */
  getClientReputationLocationsReviewsRequestsDownloadPrintMaterialsByLocationId(
    locationId: number,
    queryParams: GetClientReputationLocationsReviewsRequestsDownloadPrintMaterialsByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<any> {
    return this.get(
      new EndPoint(`/app/api/client/reputation/locations/${locationId}/reviews/requests/downloadPrintMaterials`),
      queryParams,
      signal,
    );
  }

  static getClientReputationLocationsReviewsRequestsDownloadPrintMaterialsByLocationIdThunk = createAsyncThunk<
    any,
    {
      locationId: number;
      queryParams: GetClientReputationLocationsReviewsRequestsDownloadPrintMaterialsByLocationIdOpts;
    },
    {
      rejectValue: BadRequestException | NotFoundException | MethodNotAllowedException | InternalErrorException;
    }
  >(
    /**
     * Download all PrintMaterials as archive
     * Downloads print all print materials for a Location and return it as an archive
     *
     *
     *
     *
     * |null
     */
    'getClientReputationLocationsReviewsRequestsDownloadPrintMaterialsByLocationId',
    async (
      {
        locationId,
        queryParams,
      }: {
        locationId: number;
        queryParams: GetClientReputationLocationsReviewsRequestsDownloadPrintMaterialsByLocationIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientReputationLocationsReviewsRequestsDownloadPrintMaterialsByLocationIdAbortManager._push(
          requestId,
          controller,
        );

        const result = await firstValueFrom(
          reputationStore.getClientReputationLocationsReviewsRequestsDownloadPrintMaterialsByLocationId(
            locationId,
            queryParams,
            signal,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsReviewsRequestsDownloadPrintMaterialsByLocationIdAbortManager._remove(
          requestId,
        );

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsReviewsRequestsDownloadPrintMaterialsByLocationIdAbortManager._remove(
          requestId,
        );

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientReputationLocationsReviewsRequestsDownloadPrintMaterialsByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/downloadPrintMaterials',
  );
  static getClientReputationLocationsReviewsRequestsDownloadPrintMaterialsByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/downloadPrintMaterials(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientReputationLocationsReviewsRequestsEmailsByLocationReviewRequestEmailIdByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Get a LocationReviewRequestEmail
   */

  /**
   * Get LocationReviewRequestEmail by Id
   * Get a LocationReviewRequestEmail
   */
  getClientReputationLocationsReviewsRequestsEmailsByLocationReviewRequestEmailIdByLocationId(
    locationReviewRequestEmailId: number,
    locationId: number,
    queryParams: GetClientReputationLocationsReviewsRequestsEmailsByLocationReviewRequestEmailIdByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<ReputationReviewRequestEmailCreateResponsetDto> {
    return this.get(
      new EndPoint(
        `/app/api/client/reputation/locations/${locationId}/reviews/requests/emails/${locationReviewRequestEmailId}`,
      ),
      queryParams,
      signal,
    );
  }

  static getClientReputationLocationsReviewsRequestsEmailsByLocationReviewRequestEmailIdByLocationIdThunk =
    createAsyncThunk<
      ReputationReviewRequestEmailCreateResponsetDto,
      {
        locationReviewRequestEmailId: number;
        locationId: number;
        queryParams: GetClientReputationLocationsReviewsRequestsEmailsByLocationReviewRequestEmailIdByLocationIdOpts;
      },
      {
        rejectValue: BadRequestException | NotFoundException | InternalErrorException;
      }
    >(
      /**
       * Get LocationReviewRequestEmail by Id
       * Get a LocationReviewRequestEmail
       */
      'getClientReputationLocationsReviewsRequestsEmailsByLocationReviewRequestEmailIdByLocationId',
      async (
        {
          locationReviewRequestEmailId,
          locationId,
          queryParams,
        }: {
          locationReviewRequestEmailId: number;
          locationId: number;
          queryParams: GetClientReputationLocationsReviewsRequestsEmailsByLocationReviewRequestEmailIdByLocationIdOpts;
        },
        { rejectWithValue } = {} as any,
      ) => {
        // Generate a random request Id
        const requestId = new Date().getTime().toString();

        try {
          // Create a new Abort controller for the request
          const controller = new AbortController();

          const signal = controller.signal;
          this.getClientReputationLocationsReviewsRequestsEmailsByLocationReviewRequestEmailIdByLocationIdAbortManager._push(
            requestId,
            controller,
          );

          const result = await firstValueFrom(
            reputationStore.getClientReputationLocationsReviewsRequestsEmailsByLocationReviewRequestEmailIdByLocationId(
              locationReviewRequestEmailId,
              locationId,
              queryParams,
              signal,
            ),
          );

          // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
          this.getClientReputationLocationsReviewsRequestsEmailsByLocationReviewRequestEmailIdByLocationIdAbortManager._remove(
            requestId,
          );

          return result;
        } catch (err) {
          // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
          this.getClientReputationLocationsReviewsRequestsEmailsByLocationReviewRequestEmailIdByLocationIdAbortManager._remove(
            requestId,
          );

          return rejectWithValue(err.response.data);
        }
      },
    );

  static getClientReputationLocationsReviewsRequestsEmailsByLocationReviewRequestEmailIdByLocationIdUrlRegEx =
    new RegExp(
      '/app/api/client/reputation/locations/{locationId}/reviews/requests/emails/{locationReviewRequestEmailId}',
    );
  static getClientReputationLocationsReviewsRequestsEmailsByLocationReviewRequestEmailIdByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/emails/{locationReviewRequestEmailId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static deleteClientReputationLocationsReviewsRequestsEmailsByLocationReviewRequestEmailIdByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Deletes a single ReviewRequestEmail
   */

  /**
   * Delete a single ReviewRequestEmail
   * Deletes a single ReviewRequestEmail
   */
  deleteClientReputationLocationsReviewsRequestsEmailsByLocationReviewRequestEmailIdByLocationId(
    locationReviewRequestEmailId: number,
    locationId: number,
    requestBody: null,
    queryParams: DeleteClientReputationLocationsReviewsRequestsEmailsByLocationReviewRequestEmailIdByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<DeleteResponseDto> {
    return this.delete(
      new EndPoint(
        `/app/api/client/reputation/locations/${locationId}/reviews/requests/emails/${locationReviewRequestEmailId}`,
      ),
      requestBody,
      queryParams,
      signal,
    );
  }

  static deleteClientReputationLocationsReviewsRequestsEmailsByLocationReviewRequestEmailIdByLocationIdThunk =
    createAsyncThunk<
      DeleteResponseDto,
      {
        locationReviewRequestEmailId: number;
        locationId: number;
        requestBody: null;
        queryParams: DeleteClientReputationLocationsReviewsRequestsEmailsByLocationReviewRequestEmailIdByLocationIdOpts;
      },
      {
        rejectValue:
          | BadRequestException
          | ForbiddenException
          | NotFoundException
          | MethodNotAllowedException
          | InternalErrorException;
      }
    >(
      /**
       * Delete a single ReviewRequestEmail
       * Deletes a single ReviewRequestEmail
       */
      'deleteClientReputationLocationsReviewsRequestsEmailsByLocationReviewRequestEmailIdByLocationId',
      async (
        {
          locationReviewRequestEmailId,
          locationId,
          requestBody,
          queryParams,
        }: {
          locationReviewRequestEmailId: number;
          locationId: number;
          requestBody: null;
          queryParams: DeleteClientReputationLocationsReviewsRequestsEmailsByLocationReviewRequestEmailIdByLocationIdOpts;
        },
        { rejectWithValue } = {} as any,
      ) => {
        // Generate a random request Id
        const requestId = new Date().getTime().toString();

        try {
          // Create a new Abort controller for the request
          const controller = new AbortController();

          const signal = controller.signal;
          this.deleteClientReputationLocationsReviewsRequestsEmailsByLocationReviewRequestEmailIdByLocationIdAbortManager._push(
            requestId,
            controller,
          );

          const result = await firstValueFrom(
            reputationStore.deleteClientReputationLocationsReviewsRequestsEmailsByLocationReviewRequestEmailIdByLocationId(
              locationReviewRequestEmailId,
              locationId,
              requestBody,
              queryParams,
              signal,
            ),
          );

          // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
          this.deleteClientReputationLocationsReviewsRequestsEmailsByLocationReviewRequestEmailIdByLocationIdAbortManager._remove(
            requestId,
          );

          return result;
        } catch (err) {
          // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
          this.deleteClientReputationLocationsReviewsRequestsEmailsByLocationReviewRequestEmailIdByLocationIdAbortManager._remove(
            requestId,
          );

          return rejectWithValue(err.response.data);
        }
      },
    );

  static deleteClientReputationLocationsReviewsRequestsEmailsByLocationReviewRequestEmailIdByLocationIdUrlRegEx =
    new RegExp(
      '/app/api/client/reputation/locations/{locationId}/reviews/requests/emails/{locationReviewRequestEmailId}',
    );
  static deleteClientReputationLocationsReviewsRequestsEmailsByLocationReviewRequestEmailIdByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/emails/{locationReviewRequestEmailId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientReputationLocationsReviewsRequestsEmailsByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Get LocationReviewRequestEmails for current Location with optional Deleted
   */

  /**
   * Get LocationReviewRequestEmails for current Location
   * Get LocationReviewRequestEmails for current Location with optional Deleted
   */
  getClientReputationLocationsReviewsRequestsEmailsByLocationId(
    locationId: number,
    queryParams: GetClientReputationLocationsReviewsRequestsEmailsByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<ReputationReviewRequestEmailsSendResponsetDto> {
    return this.get(
      new EndPoint(`/app/api/client/reputation/locations/${locationId}/reviews/requests/emails`),
      queryParams,
      signal,
    );
  }

  static getClientReputationLocationsReviewsRequestsEmailsByLocationIdThunk = createAsyncThunk<
    ReputationReviewRequestEmailsSendResponsetDto,
    { locationId: number; queryParams: GetClientReputationLocationsReviewsRequestsEmailsByLocationIdOpts },
    {
      rejectValue: BadRequestException | InternalErrorException;
    }
  >(
    /**
     * Get LocationReviewRequestEmails for current Location
     * Get LocationReviewRequestEmails for current Location with optional Deleted
     */
    'getClientReputationLocationsReviewsRequestsEmailsByLocationId',
    async (
      {
        locationId,
        queryParams,
      }: { locationId: number; queryParams: GetClientReputationLocationsReviewsRequestsEmailsByLocationIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientReputationLocationsReviewsRequestsEmailsByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          reputationStore.getClientReputationLocationsReviewsRequestsEmailsByLocationId(
            locationId,
            queryParams,
            signal,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsReviewsRequestsEmailsByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsReviewsRequestsEmailsByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientReputationLocationsReviewsRequestsEmailsByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/emails',
  );
  static getClientReputationLocationsReviewsRequestsEmailsByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/emails(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postClientReputationLocationsReviewsRequestsEmailsByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Create a LocationReviewRequestEmail
   */

  /**
   * Create LocationReviewRequestEmail
   * Create a LocationReviewRequestEmail
   */
  postClientReputationLocationsReviewsRequestsEmailsByLocationId(
    locationId: number,
    requestBody: ReputationReviewRequestEmailCreateRequestDto,
    queryParams: PostClientReputationLocationsReviewsRequestsEmailsByLocationIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<ReputationReviewRequestEmailCreateResponsetDto> {
    return this.post(
      new EndPoint(`/app/api/client/reputation/locations/${locationId}/reviews/requests/emails`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postClientReputationLocationsReviewsRequestsEmailsByLocationIdThunk = createAsyncThunk<
    ReputationReviewRequestEmailCreateResponsetDto,
    {
      locationId: number;
      requestBody: ReputationReviewRequestEmailCreateRequestDto;
      queryParams: PostClientReputationLocationsReviewsRequestsEmailsByLocationIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue:
        | BadRequestException
        | ForbiddenException
        | NotFoundException
        | MethodNotAllowedException
        | InternalErrorException;
    }
  >(
    /**
     * Create LocationReviewRequestEmail
     * Create a LocationReviewRequestEmail
     */
    'postClientReputationLocationsReviewsRequestsEmailsByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        locationId: number;
        requestBody: ReputationReviewRequestEmailCreateRequestDto;
        queryParams: PostClientReputationLocationsReviewsRequestsEmailsByLocationIdOpts;
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
        this.postClientReputationLocationsReviewsRequestsEmailsByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          reputationStore.postClientReputationLocationsReviewsRequestsEmailsByLocationId(
            locationId,
            requestBody,
            queryParams,
            signal,
            contentType,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientReputationLocationsReviewsRequestsEmailsByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientReputationLocationsReviewsRequestsEmailsByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postClientReputationLocationsReviewsRequestsEmailsByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/emails',
  );
  static postClientReputationLocationsReviewsRequestsEmailsByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/emails(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientReputationLocationsReviewsRequestsEmailsCountByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Returns the total number of ReviewRequestEmails for the given location
   */

  /**
   * Get total number of ReviewRequestEmails
   * Returns the total number of ReviewRequestEmails for the given location
   */
  getClientReputationLocationsReviewsRequestsEmailsCountByLocationId(
    locationId: number,
    queryParams: GetClientReputationLocationsReviewsRequestsEmailsCountByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<ReputationReviewRequestEmailsTotalNoResponsetDto> {
    return this.get(
      new EndPoint(`/app/api/client/reputation/locations/${locationId}/reviews/requests/emails/count`),
      queryParams,
      signal,
    );
  }

  static getClientReputationLocationsReviewsRequestsEmailsCountByLocationIdThunk = createAsyncThunk<
    ReputationReviewRequestEmailsTotalNoResponsetDto,
    { locationId: number; queryParams: GetClientReputationLocationsReviewsRequestsEmailsCountByLocationIdOpts },
    {
      rejectValue: BadRequestException;
    }
  >(
    /**
     * Get total number of ReviewRequestEmails
     * Returns the total number of ReviewRequestEmails for the given location
     */
    'getClientReputationLocationsReviewsRequestsEmailsCountByLocationId',
    async (
      {
        locationId,
        queryParams,
      }: { locationId: number; queryParams: GetClientReputationLocationsReviewsRequestsEmailsCountByLocationIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientReputationLocationsReviewsRequestsEmailsCountByLocationIdAbortManager._push(
          requestId,
          controller,
        );

        const result = await firstValueFrom(
          reputationStore.getClientReputationLocationsReviewsRequestsEmailsCountByLocationId(
            locationId,
            queryParams,
            signal,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsReviewsRequestsEmailsCountByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsReviewsRequestsEmailsCountByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientReputationLocationsReviewsRequestsEmailsCountByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/emails/count',
  );
  static getClientReputationLocationsReviewsRequestsEmailsCountByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/emails/count(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientReputationLocationsReviewsRequestsEmailsCountSentThisMonthByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Get total number of ReviewsRequestEmails sent this month for current Location
   */

  /**
   * Get ReviewsRequestEmails sent this month
   * Get total number of ReviewsRequestEmails sent this month for current Location
   */
  getClientReputationLocationsReviewsRequestsEmailsCountSentThisMonthByLocationId(
    locationId: number,
    queryParams: GetClientReputationLocationsReviewsRequestsEmailsCountSentThisMonthByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<ReputationReviewRequestEmailsThisMonthGetResponseDto> {
    return this.get(
      new EndPoint(`/app/api/client/reputation/locations/${locationId}/reviews/requests/emails/count/sentThisMonth`),
      queryParams,
      signal,
    );
  }

  static getClientReputationLocationsReviewsRequestsEmailsCountSentThisMonthByLocationIdThunk = createAsyncThunk<
    ReputationReviewRequestEmailsThisMonthGetResponseDto,
    {
      locationId: number;
      queryParams: GetClientReputationLocationsReviewsRequestsEmailsCountSentThisMonthByLocationIdOpts;
    },
    {
      rejectValue: BadRequestException | NotFoundException;
    }
  >(
    /**
     * Get ReviewsRequestEmails sent this month
     * Get total number of ReviewsRequestEmails sent this month for current Location
     */
    'getClientReputationLocationsReviewsRequestsEmailsCountSentThisMonthByLocationId',
    async (
      {
        locationId,
        queryParams,
      }: {
        locationId: number;
        queryParams: GetClientReputationLocationsReviewsRequestsEmailsCountSentThisMonthByLocationIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientReputationLocationsReviewsRequestsEmailsCountSentThisMonthByLocationIdAbortManager._push(
          requestId,
          controller,
        );

        const result = await firstValueFrom(
          reputationStore.getClientReputationLocationsReviewsRequestsEmailsCountSentThisMonthByLocationId(
            locationId,
            queryParams,
            signal,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsReviewsRequestsEmailsCountSentThisMonthByLocationIdAbortManager._remove(
          requestId,
        );

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsReviewsRequestsEmailsCountSentThisMonthByLocationIdAbortManager._remove(
          requestId,
        );

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientReputationLocationsReviewsRequestsEmailsCountSentThisMonthByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/emails/count/sentThisMonth',
  );
  static getClientReputationLocationsReviewsRequestsEmailsCountSentThisMonthByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/emails/count/sentThisMonth(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postClientReputationLocationsReviewsRequestsEmailsMultipleByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Create multiple LocationReviewRequestEmails
   */

  /**
   * Create multiple LocationReviewRequestEmails
   * Create multiple LocationReviewRequestEmails
   */
  postClientReputationLocationsReviewsRequestsEmailsMultipleByLocationId(
    locationId: number,
    requestBody: ReputationReviewRequestEmailsCreateRequestDto,
    queryParams: PostClientReputationLocationsReviewsRequestsEmailsMultipleByLocationIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<ReputationReviewRequestEmailsCreateResponsetDto> {
    return this.post(
      new EndPoint(`/app/api/client/reputation/locations/${locationId}/reviews/requests/emails/multiple`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postClientReputationLocationsReviewsRequestsEmailsMultipleByLocationIdThunk = createAsyncThunk<
    ReputationReviewRequestEmailsCreateResponsetDto,
    {
      locationId: number;
      requestBody: ReputationReviewRequestEmailsCreateRequestDto;
      queryParams: PostClientReputationLocationsReviewsRequestsEmailsMultipleByLocationIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue:
        | BadRequestException
        | ForbiddenException
        | NotFoundException
        | MethodNotAllowedException
        | InternalErrorException;
    }
  >(
    /**
     * Create multiple LocationReviewRequestEmails
     * Create multiple LocationReviewRequestEmails
     */
    'postClientReputationLocationsReviewsRequestsEmailsMultipleByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        locationId: number;
        requestBody: ReputationReviewRequestEmailsCreateRequestDto;
        queryParams: PostClientReputationLocationsReviewsRequestsEmailsMultipleByLocationIdOpts;
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
        this.postClientReputationLocationsReviewsRequestsEmailsMultipleByLocationIdAbortManager._push(
          requestId,
          controller,
        );

        const result = await firstValueFrom(
          reputationStore.postClientReputationLocationsReviewsRequestsEmailsMultipleByLocationId(
            locationId,
            requestBody,
            queryParams,
            signal,
            contentType,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientReputationLocationsReviewsRequestsEmailsMultipleByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientReputationLocationsReviewsRequestsEmailsMultipleByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postClientReputationLocationsReviewsRequestsEmailsMultipleByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/emails/multiple',
  );
  static postClientReputationLocationsReviewsRequestsEmailsMultipleByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/emails/multiple(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static patchClientReputationLocationsReviewsRequestsemailsUpdateByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Update a LocationReviewRequestEmail
   */

  /**
   * Upsert single ReviewRequestEmail
   * Update a LocationReviewRequestEmail
   */
  patchClientReputationLocationsReviewsRequestsemailsUpdateByLocationId(
    locationId: number,
    requestBody: ReputationReviewRequestEmailUpdateRequestDto,
    queryParams: PatchClientReputationLocationsReviewsRequestsemailsUpdateByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<ReputationReviewRequestEmailCreateResponsetDto> {
    return this.patch(
      new EndPoint(`/app/api/client/reputation/locations/${locationId}/reviews/requestsemails/update`),
      requestBody,
      queryParams,
      signal,
    );
  }

  static patchClientReputationLocationsReviewsRequestsemailsUpdateByLocationIdThunk = createAsyncThunk<
    ReputationReviewRequestEmailCreateResponsetDto,
    {
      locationId: number;
      requestBody: ReputationReviewRequestEmailUpdateRequestDto;
      queryParams: PatchClientReputationLocationsReviewsRequestsemailsUpdateByLocationIdOpts;
    },
    {
      rejectValue:
        | BadRequestException
        | ForbiddenException
        | NotFoundException
        | MethodNotAllowedException
        | InternalErrorException;
    }
  >(
    /**
     * Upsert single ReviewRequestEmail
     * Update a LocationReviewRequestEmail
     */
    'patchClientReputationLocationsReviewsRequestsemailsUpdateByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
      }: {
        locationId: number;
        requestBody: ReputationReviewRequestEmailUpdateRequestDto;
        queryParams: PatchClientReputationLocationsReviewsRequestsemailsUpdateByLocationIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.patchClientReputationLocationsReviewsRequestsemailsUpdateByLocationIdAbortManager._push(
          requestId,
          controller,
        );

        const result = await firstValueFrom(
          reputationStore.patchClientReputationLocationsReviewsRequestsemailsUpdateByLocationId(
            locationId,
            requestBody,
            queryParams,
            signal,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchClientReputationLocationsReviewsRequestsemailsUpdateByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchClientReputationLocationsReviewsRequestsemailsUpdateByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static patchClientReputationLocationsReviewsRequestsemailsUpdateByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reviews/requestsemails/update',
  );
  static patchClientReputationLocationsReviewsRequestsemailsUpdateByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reviews/requestsemails/update(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postClientReputationLocationsReviewsRequestsemailsUpdateByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Update a LocationReviewRequestEmail
   */

  /**
   * Upsert single ReviewRequestEmail
   * Update a LocationReviewRequestEmail
   */
  postClientReputationLocationsReviewsRequestsemailsUpdateByLocationId(
    locationId: number,
    requestBody: ReputationReviewRequestEmailUpdateRequestDto,
    queryParams: PostClientReputationLocationsReviewsRequestsemailsUpdateByLocationIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<ReputationReviewRequestEmailCreateResponsetDto> {
    return this.post(
      new EndPoint(`/app/api/client/reputation/locations/${locationId}/reviews/requestsemails/update`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postClientReputationLocationsReviewsRequestsemailsUpdateByLocationIdThunk = createAsyncThunk<
    ReputationReviewRequestEmailCreateResponsetDto,
    {
      locationId: number;
      requestBody: ReputationReviewRequestEmailUpdateRequestDto;
      queryParams: PostClientReputationLocationsReviewsRequestsemailsUpdateByLocationIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue:
        | BadRequestException
        | ForbiddenException
        | NotFoundException
        | MethodNotAllowedException
        | InternalErrorException;
    }
  >(
    /**
     * Upsert single ReviewRequestEmail
     * Update a LocationReviewRequestEmail
     */
    'postClientReputationLocationsReviewsRequestsemailsUpdateByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        locationId: number;
        requestBody: ReputationReviewRequestEmailUpdateRequestDto;
        queryParams: PostClientReputationLocationsReviewsRequestsemailsUpdateByLocationIdOpts;
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
        this.postClientReputationLocationsReviewsRequestsemailsUpdateByLocationIdAbortManager._push(
          requestId,
          controller,
        );

        const result = await firstValueFrom(
          reputationStore.postClientReputationLocationsReviewsRequestsemailsUpdateByLocationId(
            locationId,
            requestBody,
            queryParams,
            signal,
            contentType,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientReputationLocationsReviewsRequestsemailsUpdateByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientReputationLocationsReviewsRequestsemailsUpdateByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postClientReputationLocationsReviewsRequestsemailsUpdateByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reviews/requestsemails/update',
  );
  static postClientReputationLocationsReviewsRequestsemailsUpdateByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reviews/requestsemails/update(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static deleteClientReputationLocationsReviewsRequestsEmailsDeleteMultipleByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Deletes multiple LocationReviewRequestEmails
   */

  /**
   * Delete multiple LocationReviewRequestEmails
   * Deletes multiple LocationReviewRequestEmails
   */
  deleteClientReputationLocationsReviewsRequestsEmailsDeleteMultipleByLocationId(
    locationId: number,
    requestBody: ReputationReviewRequestEmailsDeleteMultipleRequestDto,
    queryParams: DeleteClientReputationLocationsReviewsRequestsEmailsDeleteMultipleByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<ReputationReviewRequestEmailsDeleteMultipleResponsetDto> {
    return this.delete(
      new EndPoint(`/app/api/client/reputation/locations/${locationId}/reviews/requests/emails/delete/multiple`),
      requestBody,
      queryParams,
      signal,
    );
  }

  static deleteClientReputationLocationsReviewsRequestsEmailsDeleteMultipleByLocationIdThunk = createAsyncThunk<
    ReputationReviewRequestEmailsDeleteMultipleResponsetDto,
    {
      locationId: number;
      requestBody: ReputationReviewRequestEmailsDeleteMultipleRequestDto;
      queryParams: DeleteClientReputationLocationsReviewsRequestsEmailsDeleteMultipleByLocationIdOpts;
    },
    {
      rejectValue:
        | BadRequestException
        | ForbiddenException
        | NotFoundException
        | MethodNotAllowedException
        | InternalErrorException;
    }
  >(
    /**
     * Delete multiple LocationReviewRequestEmails
     * Deletes multiple LocationReviewRequestEmails
     */
    'deleteClientReputationLocationsReviewsRequestsEmailsDeleteMultipleByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
      }: {
        locationId: number;
        requestBody: ReputationReviewRequestEmailsDeleteMultipleRequestDto;
        queryParams: DeleteClientReputationLocationsReviewsRequestsEmailsDeleteMultipleByLocationIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.deleteClientReputationLocationsReviewsRequestsEmailsDeleteMultipleByLocationIdAbortManager._push(
          requestId,
          controller,
        );

        const result = await firstValueFrom(
          reputationStore.deleteClientReputationLocationsReviewsRequestsEmailsDeleteMultipleByLocationId(
            locationId,
            requestBody,
            queryParams,
            signal,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.deleteClientReputationLocationsReviewsRequestsEmailsDeleteMultipleByLocationIdAbortManager._remove(
          requestId,
        );

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.deleteClientReputationLocationsReviewsRequestsEmailsDeleteMultipleByLocationIdAbortManager._remove(
          requestId,
        );

        return rejectWithValue(err.response.data);
      }
    },
  );

  static deleteClientReputationLocationsReviewsRequestsEmailsDeleteMultipleByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/emails/delete/multiple',
  );
  static deleteClientReputationLocationsReviewsRequestsEmailsDeleteMultipleByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/emails/delete/multiple(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientReputationLocationsReviewsRequestsEmailsSendByLocationReviewRequestEmailIdByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Sends a single ReviewRequestEmail
   */

  /**
   * Send ReviewsRequest Emails
   * Sends a single ReviewRequestEmail
   */
  getClientReputationLocationsReviewsRequestsEmailsSendByLocationReviewRequestEmailIdByLocationId(
    locationReviewRequestEmailId: number,
    locationId: number,
    queryParams: GetClientReputationLocationsReviewsRequestsEmailsSendByLocationReviewRequestEmailIdByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<ReputationReviewRequestEmailSendResponsetDto> {
    return this.get(
      new EndPoint(
        `/app/api/client/reputation/locations/${locationId}/reviews/requests/emails/send/${locationReviewRequestEmailId}`,
      ),
      queryParams,
      signal,
    );
  }

  static getClientReputationLocationsReviewsRequestsEmailsSendByLocationReviewRequestEmailIdByLocationIdThunk =
    createAsyncThunk<
      ReputationReviewRequestEmailSendResponsetDto,
      {
        locationReviewRequestEmailId: number;
        locationId: number;
        queryParams: GetClientReputationLocationsReviewsRequestsEmailsSendByLocationReviewRequestEmailIdByLocationIdOpts;
      },
      {
        rejectValue:
          | BadRequestException
          | ForbiddenException
          | NotFoundException
          | MethodNotAllowedException
          | InternalErrorException;
      }
    >(
      /**
       * Send ReviewsRequest Emails
       * Sends a single ReviewRequestEmail
       */
      'getClientReputationLocationsReviewsRequestsEmailsSendByLocationReviewRequestEmailIdByLocationId',
      async (
        {
          locationReviewRequestEmailId,
          locationId,
          queryParams,
        }: {
          locationReviewRequestEmailId: number;
          locationId: number;
          queryParams: GetClientReputationLocationsReviewsRequestsEmailsSendByLocationReviewRequestEmailIdByLocationIdOpts;
        },
        { rejectWithValue } = {} as any,
      ) => {
        // Generate a random request Id
        const requestId = new Date().getTime().toString();

        try {
          // Create a new Abort controller for the request
          const controller = new AbortController();

          const signal = controller.signal;
          this.getClientReputationLocationsReviewsRequestsEmailsSendByLocationReviewRequestEmailIdByLocationIdAbortManager._push(
            requestId,
            controller,
          );

          const result = await firstValueFrom(
            reputationStore.getClientReputationLocationsReviewsRequestsEmailsSendByLocationReviewRequestEmailIdByLocationId(
              locationReviewRequestEmailId,
              locationId,
              queryParams,
              signal,
            ),
          );

          // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
          this.getClientReputationLocationsReviewsRequestsEmailsSendByLocationReviewRequestEmailIdByLocationIdAbortManager._remove(
            requestId,
          );

          return result;
        } catch (err) {
          // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
          this.getClientReputationLocationsReviewsRequestsEmailsSendByLocationReviewRequestEmailIdByLocationIdAbortManager._remove(
            requestId,
          );

          return rejectWithValue(err.response.data);
        }
      },
    );

  static getClientReputationLocationsReviewsRequestsEmailsSendByLocationReviewRequestEmailIdByLocationIdUrlRegEx =
    new RegExp(
      '/app/api/client/reputation/locations/{locationId}/reviews/requests/emails/send/{locationReviewRequestEmailId}',
    );
  static getClientReputationLocationsReviewsRequestsEmailsSendByLocationReviewRequestEmailIdByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/emails/send/{locationReviewRequestEmailId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postClientReputationLocationsReviewsRequestsEmailsSendByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Send max 5 ReviewsRequestEmails, in a limit of 200/month, and queue the rest
   */

  /**
   * Send ReviewsRequest Emails
   * Send max 5 ReviewsRequestEmails, in a limit of 200/month, and queue the rest
   */
  postClientReputationLocationsReviewsRequestsEmailsSendByLocationId(
    locationId: number,
    requestBody: ReputationReviewRequestEmailsSendRequestDto,
    queryParams: PostClientReputationLocationsReviewsRequestsEmailsSendByLocationIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<ReputationReviewRequestEmailsSendResponsetDto> {
    return this.post(
      new EndPoint(`/app/api/client/reputation/locations/${locationId}/reviews/requests/emails/send`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postClientReputationLocationsReviewsRequestsEmailsSendByLocationIdThunk = createAsyncThunk<
    ReputationReviewRequestEmailsSendResponsetDto,
    {
      locationId: number;
      requestBody: ReputationReviewRequestEmailsSendRequestDto;
      queryParams: PostClientReputationLocationsReviewsRequestsEmailsSendByLocationIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue:
        | BadRequestException
        | ForbiddenException
        | NotFoundException
        | MethodNotAllowedException
        | InternalErrorException;
    }
  >(
    /**
     * Send ReviewsRequest Emails
     * Send max 5 ReviewsRequestEmails, in a limit of 200/month, and queue the rest
     */
    'postClientReputationLocationsReviewsRequestsEmailsSendByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        locationId: number;
        requestBody: ReputationReviewRequestEmailsSendRequestDto;
        queryParams: PostClientReputationLocationsReviewsRequestsEmailsSendByLocationIdOpts;
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
        this.postClientReputationLocationsReviewsRequestsEmailsSendByLocationIdAbortManager._push(
          requestId,
          controller,
        );

        const result = await firstValueFrom(
          reputationStore.postClientReputationLocationsReviewsRequestsEmailsSendByLocationId(
            locationId,
            requestBody,
            queryParams,
            signal,
            contentType,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientReputationLocationsReviewsRequestsEmailsSendByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientReputationLocationsReviewsRequestsEmailsSendByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postClientReputationLocationsReviewsRequestsEmailsSendByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/emails/send',
  );
  static postClientReputationLocationsReviewsRequestsEmailsSendByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/emails/send(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientReputationLocationsReviewsRequestsShortUrlLinkByLocationReviewRequestIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Returns the ShortUrl link for the LocationReviewRequest
   */

  /**
   * Get ShortUrlLink for LocationReviewRequest
   * Returns the ShortUrl link for the LocationReviewRequest
   */
  getClientReputationLocationsReviewsRequestsShortUrlLinkByLocationReviewRequestId(
    locationReviewRequestId: number,
    locationId: number,
    queryParams: GetClientReputationLocationsReviewsRequestsShortUrlLinkByLocationReviewRequestIdOpts,
    signal?: AbortSignal,
  ): Observable<ReputationReviewRequestShortUrlLinkGetResponsetDto> {
    return this.get(
      new EndPoint(
        `/app/api/client/reputation/locations/${locationId}/reviews/requests/${locationReviewRequestId}/shortUrlLink`,
      ),
      queryParams,
      signal,
    );
  }

  static getClientReputationLocationsReviewsRequestsShortUrlLinkByLocationReviewRequestIdThunk = createAsyncThunk<
    ReputationReviewRequestShortUrlLinkGetResponsetDto,
    {
      locationReviewRequestId: number;
      locationId: number;
      queryParams: GetClientReputationLocationsReviewsRequestsShortUrlLinkByLocationReviewRequestIdOpts;
    },
    {
      rejectValue: BadRequestException | NotFoundException | MethodNotAllowedException | InternalErrorException;
    }
  >(
    /**
     * Get ShortUrlLink for LocationReviewRequest
     * Returns the ShortUrl link for the LocationReviewRequest
     */
    'getClientReputationLocationsReviewsRequestsShortUrlLinkByLocationReviewRequestId',
    async (
      {
        locationReviewRequestId,
        locationId,
        queryParams,
      }: {
        locationReviewRequestId: number;
        locationId: number;
        queryParams: GetClientReputationLocationsReviewsRequestsShortUrlLinkByLocationReviewRequestIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientReputationLocationsReviewsRequestsShortUrlLinkByLocationReviewRequestIdAbortManager._push(
          requestId,
          controller,
        );

        const result = await firstValueFrom(
          reputationStore.getClientReputationLocationsReviewsRequestsShortUrlLinkByLocationReviewRequestId(
            locationReviewRequestId,
            locationId,
            queryParams,
            signal,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsReviewsRequestsShortUrlLinkByLocationReviewRequestIdAbortManager._remove(
          requestId,
        );

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsReviewsRequestsShortUrlLinkByLocationReviewRequestIdAbortManager._remove(
          requestId,
        );

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientReputationLocationsReviewsRequestsShortUrlLinkByLocationReviewRequestIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/{locationReviewRequestId}/shortUrlLink',
  );
  static getClientReputationLocationsReviewsRequestsShortUrlLinkByLocationReviewRequestIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reviews/requests/{locationReviewRequestId}/shortUrlLink(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientReputationLocationsReputationByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Returns reputation for location
   */

  /**
   * Location Reputation
   * Returns reputation for location
   */
  getClientReputationLocationsReputationByLocationId(
    locationId: number,
    queryParams: GetClientReputationLocationsReputationByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<ReputationGetResponseDto> {
    return this.get(new EndPoint(`/app/api/client/reputation/locations/${locationId}/reputation`), queryParams, signal);
  }

  static getClientReputationLocationsReputationByLocationIdThunk = createAsyncThunk<
    ReputationGetResponseDto,
    { locationId: number; queryParams: GetClientReputationLocationsReputationByLocationIdOpts },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Location Reputation
     * Returns reputation for location
     */
    'getClientReputationLocationsReputationByLocationId',
    async (
      {
        locationId,
        queryParams,
      }: { locationId: number; queryParams: GetClientReputationLocationsReputationByLocationIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientReputationLocationsReputationByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          reputationStore.getClientReputationLocationsReputationByLocationId(locationId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsReputationByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsReputationByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientReputationLocationsReputationByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reputation',
  );
  static getClientReputationLocationsReputationByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reputation(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientReputationLocationsReputationReviewsByExternalIdByDirectoryAliasAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Retrieves a Review by directory and external ID including replies
   */

  /**
   * Location Reputation Review Details by external Id
   * Retrieves a Review by directory and external ID including replies
   */
  getClientReputationLocationsReputationReviewsByExternalIdByDirectoryAlias(
    externalId: string,
    directoryAlias: string,
    locationId: number,
    queryParams: GetClientReputationLocationsReputationReviewsByExternalIdByDirectoryAliasOpts,
    signal?: AbortSignal,
  ): Observable<ReputationReviewGetResponseDto> {
    return this.get(
      new EndPoint(
        `/app/api/client/reputation/locations/${locationId}/reputation/reviews/${directoryAlias}/${externalId}`,
      ),
      queryParams,
      signal,
    );
  }

  static getClientReputationLocationsReputationReviewsByExternalIdByDirectoryAliasThunk = createAsyncThunk<
    ReputationReviewGetResponseDto,
    {
      externalId: string;
      directoryAlias: string;
      locationId: number;
      queryParams: GetClientReputationLocationsReputationReviewsByExternalIdByDirectoryAliasOpts;
    },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Location Reputation Review Details by external Id
     * Retrieves a Review by directory and external ID including replies
     */
    'getClientReputationLocationsReputationReviewsByExternalIdByDirectoryAlias',
    async (
      {
        externalId,
        directoryAlias,
        locationId,
        queryParams,
      }: {
        externalId: string;
        directoryAlias: string;
        locationId: number;
        queryParams: GetClientReputationLocationsReputationReviewsByExternalIdByDirectoryAliasOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientReputationLocationsReputationReviewsByExternalIdByDirectoryAliasAbortManager._push(
          requestId,
          controller,
        );

        const result = await firstValueFrom(
          reputationStore.getClientReputationLocationsReputationReviewsByExternalIdByDirectoryAlias(
            externalId,
            directoryAlias,
            locationId,
            queryParams,
            signal,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsReputationReviewsByExternalIdByDirectoryAliasAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsReputationReviewsByExternalIdByDirectoryAliasAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientReputationLocationsReputationReviewsByExternalIdByDirectoryAliasUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reputation/reviews/{directoryAlias}/{externalId}',
  );
  static getClientReputationLocationsReputationReviewsByExternalIdByDirectoryAliasUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reputation/reviews/{directoryAlias}/{externalId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientReputationLocationsReputationReviewsByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Returns reviews for location on various directories such as facebook, google, tripadvisor, yelp
   */

  /**
   * Location Reputation Reviews
   * Returns reviews for location on various directories such as facebook, google, tripadvisor, yelp
   */
  getClientReputationLocationsReputationReviewsByLocationId(
    locationId: number,
    queryParams: GetClientReputationLocationsReputationReviewsByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<ReputationReviewsGetResponseDto> {
    return this.get(
      new EndPoint(`/app/api/client/reputation/locations/${locationId}/reputation/reviews`),
      queryParams,
      signal,
    );
  }

  static getClientReputationLocationsReputationReviewsByLocationIdThunk = createAsyncThunk<
    ReputationReviewsGetResponseDto,
    { locationId: number; queryParams: GetClientReputationLocationsReputationReviewsByLocationIdOpts },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Location Reputation Reviews
     * Returns reviews for location on various directories such as facebook, google, tripadvisor, yelp
     */
    'getClientReputationLocationsReputationReviewsByLocationId',
    async (
      {
        locationId,
        queryParams,
      }: { locationId: number; queryParams: GetClientReputationLocationsReputationReviewsByLocationIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientReputationLocationsReputationReviewsByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          reputationStore.getClientReputationLocationsReputationReviewsByLocationId(locationId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsReputationReviewsByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsReputationReviewsByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientReputationLocationsReputationReviewsByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reputation/reviews',
  );
  static getClientReputationLocationsReputationReviewsByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reputation/reviews(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static patchClientReputationLocationsReputationReviewsGenerateReplyByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Generates a possible reply for review
   */

  /**
   * ReviewReply Generate
   * Generates a possible reply for review
   */
  patchClientReputationLocationsReputationReviewsGenerateReplyByLocationId(
    locationId: number,
    requestBody: ReputationGenerateReplyRequestDto,
    queryParams: PatchClientReputationLocationsReputationReviewsGenerateReplyByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<ReputationGenerateReplyResponseDto> {
    return this.patch(
      new EndPoint(`/app/api/client/reputation/locations/${locationId}/reputation/reviews/generateReply`),
      requestBody,
      queryParams,
      signal,
    );
  }

  static patchClientReputationLocationsReputationReviewsGenerateReplyByLocationIdThunk = createAsyncThunk<
    ReputationGenerateReplyResponseDto,
    {
      locationId: number;
      requestBody: ReputationGenerateReplyRequestDto;
      queryParams: PatchClientReputationLocationsReputationReviewsGenerateReplyByLocationIdOpts;
    },
    {
      rejectValue: BadRequestException | ForbiddenException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * ReviewReply Generate
     * Generates a possible reply for review
     */
    'patchClientReputationLocationsReputationReviewsGenerateReplyByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
      }: {
        locationId: number;
        requestBody: ReputationGenerateReplyRequestDto;
        queryParams: PatchClientReputationLocationsReputationReviewsGenerateReplyByLocationIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.patchClientReputationLocationsReputationReviewsGenerateReplyByLocationIdAbortManager._push(
          requestId,
          controller,
        );

        const result = await firstValueFrom(
          reputationStore.patchClientReputationLocationsReputationReviewsGenerateReplyByLocationId(
            locationId,
            requestBody,
            queryParams,
            signal,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchClientReputationLocationsReputationReviewsGenerateReplyByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchClientReputationLocationsReputationReviewsGenerateReplyByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static patchClientReputationLocationsReputationReviewsGenerateReplyByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reputation/reviews/generateReply',
  );
  static patchClientReputationLocationsReputationReviewsGenerateReplyByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reputation/reviews/generateReply(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postClientReputationLocationsReputationReviewsGenerateReplyByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Generates a possible reply for review
   */

  /**
   * ReviewReply Generate
   * Generates a possible reply for review
   */
  postClientReputationLocationsReputationReviewsGenerateReplyByLocationId(
    locationId: number,
    requestBody: ReputationGenerateReplyRequestDto,
    queryParams: PostClientReputationLocationsReputationReviewsGenerateReplyByLocationIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<ReputationGenerateReplyResponseDto> {
    return this.post(
      new EndPoint(`/app/api/client/reputation/locations/${locationId}/reputation/reviews/generateReply`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postClientReputationLocationsReputationReviewsGenerateReplyByLocationIdThunk = createAsyncThunk<
    ReputationGenerateReplyResponseDto,
    {
      locationId: number;
      requestBody: ReputationGenerateReplyRequestDto;
      queryParams: PostClientReputationLocationsReputationReviewsGenerateReplyByLocationIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: BadRequestException | ForbiddenException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * ReviewReply Generate
     * Generates a possible reply for review
     */
    'postClientReputationLocationsReputationReviewsGenerateReplyByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        locationId: number;
        requestBody: ReputationGenerateReplyRequestDto;
        queryParams: PostClientReputationLocationsReputationReviewsGenerateReplyByLocationIdOpts;
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
        this.postClientReputationLocationsReputationReviewsGenerateReplyByLocationIdAbortManager._push(
          requestId,
          controller,
        );

        const result = await firstValueFrom(
          reputationStore.postClientReputationLocationsReputationReviewsGenerateReplyByLocationId(
            locationId,
            requestBody,
            queryParams,
            signal,
            contentType,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientReputationLocationsReputationReviewsGenerateReplyByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientReputationLocationsReputationReviewsGenerateReplyByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postClientReputationLocationsReputationReviewsGenerateReplyByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reputation/reviews/generateReply',
  );
  static postClientReputationLocationsReputationReviewsGenerateReplyByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reputation/reviews/generateReply(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postClientReputationLocationsReputationReviewsReplyByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Publish a reply for a Review
   */

  /**
   * Location Reputation Reviews Reply Publish
   * Publish a reply for a Review
   */
  postClientReputationLocationsReputationReviewsReplyByLocationId(
    locationId: number,
    requestBody: ReputationReplyPostRequestDto,
    queryParams: PostClientReputationLocationsReputationReviewsReplyByLocationIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<ReputationReplyPostResponseDto> {
    return this.post(
      new EndPoint(`/app/api/client/reputation/locations/${locationId}/reputation/reviews/reply`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postClientReputationLocationsReputationReviewsReplyByLocationIdThunk = createAsyncThunk<
    ReputationReplyPostResponseDto,
    {
      locationId: number;
      requestBody: ReputationReplyPostRequestDto;
      queryParams: PostClientReputationLocationsReputationReviewsReplyByLocationIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: BadRequestException | UnauthorizedException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Location Reputation Reviews Reply Publish
     * Publish a reply for a Review
     */
    'postClientReputationLocationsReputationReviewsReplyByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        locationId: number;
        requestBody: ReputationReplyPostRequestDto;
        queryParams: PostClientReputationLocationsReputationReviewsReplyByLocationIdOpts;
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
        this.postClientReputationLocationsReputationReviewsReplyByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          reputationStore.postClientReputationLocationsReputationReviewsReplyByLocationId(
            locationId,
            requestBody,
            queryParams,
            signal,
            contentType,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientReputationLocationsReputationReviewsReplyByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientReputationLocationsReputationReviewsReplyByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postClientReputationLocationsReputationReviewsReplyByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reputation/reviews/reply',
  );
  static postClientReputationLocationsReputationReviewsReplyByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reputation/reviews/reply(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static patchClientReputationLocationsReputationReviewsReplyByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Edit a published Reply for a Review
   */

  /**
   * Location Reputation Reviews Reply Edit
   * Edit a published Reply for a Review
   */
  patchClientReputationLocationsReputationReviewsReplyByLocationId(
    locationId: number,
    requestBody: ReputationReplyPostRequestDto,
    queryParams: PatchClientReputationLocationsReputationReviewsReplyByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<ReputationReplyPostResponseDto> {
    return this.patch(
      new EndPoint(`/app/api/client/reputation/locations/${locationId}/reputation/reviews/reply`),
      requestBody,
      queryParams,
      signal,
    );
  }

  static patchClientReputationLocationsReputationReviewsReplyByLocationIdThunk = createAsyncThunk<
    ReputationReplyPostResponseDto,
    {
      locationId: number;
      requestBody: ReputationReplyPostRequestDto;
      queryParams: PatchClientReputationLocationsReputationReviewsReplyByLocationIdOpts;
    },
    {
      rejectValue: BadRequestException | UnauthorizedException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Location Reputation Reviews Reply Edit
     * Edit a published Reply for a Review
     */
    'patchClientReputationLocationsReputationReviewsReplyByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
      }: {
        locationId: number;
        requestBody: ReputationReplyPostRequestDto;
        queryParams: PatchClientReputationLocationsReputationReviewsReplyByLocationIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.patchClientReputationLocationsReputationReviewsReplyByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          reputationStore.patchClientReputationLocationsReputationReviewsReplyByLocationId(
            locationId,
            requestBody,
            queryParams,
            signal,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchClientReputationLocationsReputationReviewsReplyByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchClientReputationLocationsReputationReviewsReplyByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static patchClientReputationLocationsReputationReviewsReplyByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reputation/reviews/reply',
  );
  static patchClientReputationLocationsReputationReviewsReplyByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reputation/reviews/reply(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static deleteClientReputationLocationsReputationReviewsReplyByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Edit a published Reply for a Review
   */

  /**
   * Location Reputation Reviews Reply Delete
   * Edit a published Reply for a Review
   */
  deleteClientReputationLocationsReputationReviewsReplyByLocationId(
    locationId: number,
    requestBody: ReputationReplyPostRequestDto,
    queryParams: DeleteClientReputationLocationsReputationReviewsReplyByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<ReputationReplyDeleteResponseDto> {
    return this.delete(
      new EndPoint(`/app/api/client/reputation/locations/${locationId}/reputation/reviews/reply`),
      requestBody,
      queryParams,
      signal,
    );
  }

  static deleteClientReputationLocationsReputationReviewsReplyByLocationIdThunk = createAsyncThunk<
    ReputationReplyDeleteResponseDto,
    {
      locationId: number;
      requestBody: ReputationReplyPostRequestDto;
      queryParams: DeleteClientReputationLocationsReputationReviewsReplyByLocationIdOpts;
    },
    {
      rejectValue: BadRequestException | UnauthorizedException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Location Reputation Reviews Reply Delete
     * Edit a published Reply for a Review
     */
    'deleteClientReputationLocationsReputationReviewsReplyByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
      }: {
        locationId: number;
        requestBody: ReputationReplyPostRequestDto;
        queryParams: DeleteClientReputationLocationsReputationReviewsReplyByLocationIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.deleteClientReputationLocationsReputationReviewsReplyByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          reputationStore.deleteClientReputationLocationsReputationReviewsReplyByLocationId(
            locationId,
            requestBody,
            queryParams,
            signal,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.deleteClientReputationLocationsReputationReviewsReplyByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.deleteClientReputationLocationsReputationReviewsReplyByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static deleteClientReputationLocationsReputationReviewsReplyByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reputation/reviews/reply',
  );
  static deleteClientReputationLocationsReputationReviewsReplyByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reputation/reviews/reply(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientReputationLocationsCompetitorsReputationByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Returns locations competitors with reputation details
   */

  /**
   * Location Competitors Reputation
   * Returns locations competitors with reputation details
   */
  getClientReputationLocationsCompetitorsReputationByLocationId(
    locationId: number,
    queryParams: GetClientReputationLocationsCompetitorsReputationByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<ReputationCompetitorsGetResponseDto> {
    return this.get(
      new EndPoint(`/app/api/client/reputation/locations/${locationId}/competitors/reputation`),
      queryParams,
      signal,
    );
  }

  static getClientReputationLocationsCompetitorsReputationByLocationIdThunk = createAsyncThunk<
    ReputationCompetitorsGetResponseDto,
    { locationId: number; queryParams: GetClientReputationLocationsCompetitorsReputationByLocationIdOpts },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Location Competitors Reputation
     * Returns locations competitors with reputation details
     */
    'getClientReputationLocationsCompetitorsReputationByLocationId',
    async (
      {
        locationId,
        queryParams,
      }: { locationId: number; queryParams: GetClientReputationLocationsCompetitorsReputationByLocationIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientReputationLocationsCompetitorsReputationByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          reputationStore.getClientReputationLocationsCompetitorsReputationByLocationId(
            locationId,
            queryParams,
            signal,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsCompetitorsReputationByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsCompetitorsReputationByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientReputationLocationsCompetitorsReputationByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/competitors/reputation',
  );
  static getClientReputationLocationsCompetitorsReputationByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/competitors/reputation(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientReputationLocationsCompetitorsReputationClustersByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Returns location competitors grouped by reputation classes, e.g. best in class, industry standard etc.
   */

  /**
   * Location Competitors Reputation Clusters
   * Returns location competitors grouped by reputation classes, e.g. best in class, industry standard etc.
   */
  getClientReputationLocationsCompetitorsReputationClustersByLocationId(
    locationId: number,
    queryParams: GetClientReputationLocationsCompetitorsReputationClustersByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<ReputationCompetitorsGroupsGetResponseDto> {
    return this.get(
      new EndPoint(`/app/api/client/reputation/locations/${locationId}/competitors/reputation/clusters`),
      queryParams,
      signal,
    );
  }

  static getClientReputationLocationsCompetitorsReputationClustersByLocationIdThunk = createAsyncThunk<
    ReputationCompetitorsGroupsGetResponseDto,
    { locationId: number; queryParams: GetClientReputationLocationsCompetitorsReputationClustersByLocationIdOpts },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Location Competitors Reputation Clusters
     * Returns location competitors grouped by reputation classes, e.g. best in class, industry standard etc.
     */
    'getClientReputationLocationsCompetitorsReputationClustersByLocationId',
    async (
      {
        locationId,
        queryParams,
      }: { locationId: number; queryParams: GetClientReputationLocationsCompetitorsReputationClustersByLocationIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientReputationLocationsCompetitorsReputationClustersByLocationIdAbortManager._push(
          requestId,
          controller,
        );

        const result = await firstValueFrom(
          reputationStore.getClientReputationLocationsCompetitorsReputationClustersByLocationId(
            locationId,
            queryParams,
            signal,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsCompetitorsReputationClustersByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsCompetitorsReputationClustersByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientReputationLocationsCompetitorsReputationClustersByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/competitors/reputation/clusters',
  );
  static getClientReputationLocationsCompetitorsReputationClustersByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/competitors/reputation/clusters(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientReputationLocationsReviewsWidgetByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Get the ReviewsWidget
   */

  /**
   * Get the ReviewsWidget for a Location
   * Get the ReviewsWidget
   */
  getClientReputationLocationsReviewsWidgetByLocationId(
    locationId: number,
    queryParams: GetClientReputationLocationsReviewsWidgetByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<ReviewsWidgetGetResponseDto> {
    return this.get(
      new EndPoint(`/app/api/client/reputation/locations/${locationId}/reviewsWidget`),
      queryParams,
      signal,
    );
  }

  static getClientReputationLocationsReviewsWidgetByLocationIdThunk = createAsyncThunk<
    ReviewsWidgetGetResponseDto,
    { locationId: number; queryParams: GetClientReputationLocationsReviewsWidgetByLocationIdOpts },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Get the ReviewsWidget for a Location
     * Get the ReviewsWidget
     */
    'getClientReputationLocationsReviewsWidgetByLocationId',
    async (
      {
        locationId,
        queryParams,
      }: { locationId: number; queryParams: GetClientReputationLocationsReviewsWidgetByLocationIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientReputationLocationsReviewsWidgetByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          reputationStore.getClientReputationLocationsReviewsWidgetByLocationId(locationId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsReviewsWidgetByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsReviewsWidgetByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientReputationLocationsReviewsWidgetByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reviewsWidget',
  );
  static getClientReputationLocationsReviewsWidgetByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reviewsWidget(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static patchClientReputationLocationsReviewsWidgetByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Update the Location's ReviewsWidget
   */

  /**
   * Update the settings for a location
   * Update the Location's ReviewsWidget
   */
  patchClientReputationLocationsReviewsWidgetByLocationId(
    locationId: number,
    requestBody: ReviewsWidgetUpdateRequestDto,
    queryParams: PatchClientReputationLocationsReviewsWidgetByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<ReviewsWidgetGetResponseDto> {
    return this.patch(
      new EndPoint(`/app/api/client/reputation/locations/${locationId}/reviewsWidget`),
      requestBody,
      queryParams,
      signal,
    );
  }

  static patchClientReputationLocationsReviewsWidgetByLocationIdThunk = createAsyncThunk<
    ReviewsWidgetGetResponseDto,
    {
      locationId: number;
      requestBody: ReviewsWidgetUpdateRequestDto;
      queryParams: PatchClientReputationLocationsReviewsWidgetByLocationIdOpts;
    },
    {
      rejectValue: BadRequestException;
    }
  >(
    /**
     * Update the settings for a location
     * Update the Location's ReviewsWidget
     */
    'patchClientReputationLocationsReviewsWidgetByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
      }: {
        locationId: number;
        requestBody: ReviewsWidgetUpdateRequestDto;
        queryParams: PatchClientReputationLocationsReviewsWidgetByLocationIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.patchClientReputationLocationsReviewsWidgetByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          reputationStore.patchClientReputationLocationsReviewsWidgetByLocationId(
            locationId,
            requestBody,
            queryParams,
            signal,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchClientReputationLocationsReviewsWidgetByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchClientReputationLocationsReviewsWidgetByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static patchClientReputationLocationsReviewsWidgetByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reviewsWidget',
  );
  static patchClientReputationLocationsReviewsWidgetByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reviewsWidget(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postClientReputationLocationsReviewsWidgetByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Update the Location's ReviewsWidget
   */

  /**
   * Update the settings for a location
   * Update the Location's ReviewsWidget
   */
  postClientReputationLocationsReviewsWidgetByLocationId(
    locationId: number,
    requestBody: ReviewsWidgetUpdateRequestDto,
    queryParams: PostClientReputationLocationsReviewsWidgetByLocationIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<ReviewsWidgetGetResponseDto> {
    return this.post(
      new EndPoint(`/app/api/client/reputation/locations/${locationId}/reviewsWidget`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postClientReputationLocationsReviewsWidgetByLocationIdThunk = createAsyncThunk<
    ReviewsWidgetGetResponseDto,
    {
      locationId: number;
      requestBody: ReviewsWidgetUpdateRequestDto;
      queryParams: PostClientReputationLocationsReviewsWidgetByLocationIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: BadRequestException;
    }
  >(
    /**
     * Update the settings for a location
     * Update the Location's ReviewsWidget
     */
    'postClientReputationLocationsReviewsWidgetByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        locationId: number;
        requestBody: ReviewsWidgetUpdateRequestDto;
        queryParams: PostClientReputationLocationsReviewsWidgetByLocationIdOpts;
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
        this.postClientReputationLocationsReviewsWidgetByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          reputationStore.postClientReputationLocationsReviewsWidgetByLocationId(
            locationId,
            requestBody,
            queryParams,
            signal,
            contentType,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientReputationLocationsReviewsWidgetByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientReputationLocationsReviewsWidgetByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postClientReputationLocationsReviewsWidgetByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reviewsWidget',
  );
  static postClientReputationLocationsReviewsWidgetByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reviewsWidget(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientReputationLocationsReviewsStatsByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Get statistics regarding this location's reviews from both Google and Facebook
   */

  /**
   * Get statistics for reviews
   * Get statistics regarding this location's reviews from both Google and Facebook
   */
  getClientReputationLocationsReviewsStatsByLocationId(
    locationId: number,
    queryParams: GetClientReputationLocationsReviewsStatsByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<ReviewsWidgetStatisticsGetResponseDto> {
    return this.get(
      new EndPoint(`/app/api/client/reputation/locations/${locationId}/reviewsStats`),
      queryParams,
      signal,
    );
  }

  static getClientReputationLocationsReviewsStatsByLocationIdThunk = createAsyncThunk<
    ReviewsWidgetStatisticsGetResponseDto,
    { locationId: number; queryParams: GetClientReputationLocationsReviewsStatsByLocationIdOpts },
    {
      rejectValue: BadRequestException;
    }
  >(
    /**
     * Get statistics for reviews
     * Get statistics regarding this location's reviews from both Google and Facebook
     */
    'getClientReputationLocationsReviewsStatsByLocationId',
    async (
      {
        locationId,
        queryParams,
      }: { locationId: number; queryParams: GetClientReputationLocationsReviewsStatsByLocationIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientReputationLocationsReviewsStatsByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          reputationStore.getClientReputationLocationsReviewsStatsByLocationId(locationId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsReviewsStatsByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientReputationLocationsReviewsStatsByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientReputationLocationsReviewsStatsByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/reputation/locations/{locationId}/reviewsStats',
  );
  static getClientReputationLocationsReviewsStatsByLocationIdUrlMockRequest =
    '/app/api/client/reputation/locations/{locationId}/reviewsStats(.*)';
}
export const reputationStore = new ReputationStore();
