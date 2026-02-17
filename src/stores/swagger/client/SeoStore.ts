/*
 * WARNING THIS FILE IS AUTO-GENERATED DO NOT MODIFY YOUR CHANGES WILL BE OVERWRITTEN!
 */
import type { AISeoTextRequestDto } from '@models/swagger/App/Presentation/Api/Client/Seo/AISeoTexts/Dtos/AISeoTextRequestDto';
import type { AISeoTextResponseDto } from '@models/swagger/App/Presentation/Api/Client/Seo/AISeoTexts/Dtos/AISeoTextResponseDto';
import type { AnalyticsPostConnectPropertiesRequestDto } from '@models/swagger/App/Presentation/Api/Client/Seo/Locations/Dtos/Analytics/AnalyticsPostConnectPropertiesRequestDto';
import type { AnalyticsPropertiesResponseDto } from '@models/swagger/App/Presentation/Api/Client/Seo/Locations/Dtos/Analytics/AnalyticsPropertiesResponseDto';
import type { AnalyticsPropertyReportsGetResponseDto } from '@models/swagger/App/Presentation/Api/Client/Seo/Locations/Dtos/Analytics/AnalyticsPropertyReportsGetResponseDto';
import type { GoogleTokenLocationSeoConnectionResponseDto } from '@models/swagger/App/Presentation/Api/Client/Seo/Locations/Dtos/Analytics/GoogleTokenLocationSeoConnectionResponseDto';
import type { WebPageContentElementGenerationPostRequestDto } from '@models/swagger/App/Presentation/Api/Client/Seo/Locations/Dtos/Content/WebPageContentElementGenerationPostRequestDto';
import type { WebPageContentElementGenerationPostResponseDto } from '@models/swagger/App/Presentation/Api/Client/Seo/Locations/Dtos/Content/WebPageContentElementGenerationPostResponseDto';
import type { SeoKeywordGetResponseDto } from '@models/swagger/App/Presentation/Api/Client/Seo/Locations/Dtos/Keywords/SeoKeywordGetResponseDto';
import type { SeoKeywordsGetResponseDto } from '@models/swagger/App/Presentation/Api/Client/Seo/Locations/Dtos/Keywords/SeoKeywordsGetResponseDto';
import type { RankingsComparisonsGetResponseDto } from '@models/swagger/App/Presentation/Api/Client/Seo/Locations/Dtos/Rankings/RankingsComparisonsGetResponseDto';
import type { RankingsComparisonsGroupedGetResponseDto } from '@models/swagger/App/Presentation/Api/Client/Seo/Locations/Dtos/Rankings/RankingsComparisonsGroupedGetResponseDto';
import type { RankingsGetResponseDto } from '@models/swagger/App/Presentation/Api/Client/Seo/Locations/Dtos/Rankings/RankingsGetResponseDto';
import type { RankingsLocationsGetResponseDto } from '@models/swagger/App/Presentation/Api/Client/Seo/Locations/Dtos/Rankings/RankingsLocationsGetResponseDto';
import type { SeoWebsiteUpdateRequestDto } from '@models/swagger/App/Presentation/Api/Client/Seo/Websites/Dtos/Website/SeoWebsiteUpdateRequestDto';
import type { SeoWebsiteUpdateResponseDto } from '@models/swagger/App/Presentation/Api/Client/Seo/Websites/Dtos/Website/SeoWebsiteUpdateResponseDto';
import type { BadRequestException } from '@models/swagger/DDD/Infrastructure/Exceptions/BadRequestException';
import type { Exception } from '@models/swagger/DDD/Infrastructure/Exceptions/Exception';
import type { InternalErrorException } from '@models/swagger/DDD/Infrastructure/Exceptions/InternalErrorException';
import type { MethodNotAllowedException } from '@models/swagger/DDD/Infrastructure/Exceptions/MethodNotAllowedException';
import type { NotFoundException } from '@models/swagger/DDD/Infrastructure/Exceptions/NotFoundException';
import type { UnauthorizedException } from '@models/swagger/DDD/Infrastructure/Exceptions/UnauthorizedException';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { firstValueFrom, Observable } from 'rxjs';

import { EndPoint } from '../../../api-config';
import { HttpStore } from '../../http.store';
import { AbortControllersManager } from '../../store-helpers/abort-controllers-manager';

export type PatchClientSeoAiSeoTextOptimiseByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PostClientSeoAiSeoTextOptimiseByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PatchClientSeoAiSeoTextCalculateOptimisationByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PostClientSeoAiSeoTextCalculateOptimisationByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientSeoLocationsAnalyticsGoogleTokenInitByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientSeoLocationsAnalyticsGoogleTokenResponseOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * Contains the Location's id
   */
  state: string;
  /**
   * Temporary code for request of token
   */
  code?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientSeoLocationsAnalyticsGoogleTokenDisconnectByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientSeoLocationsAnalyticsGoogleAnalyticsAvailablePropertiesByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientSeoLocationsAnalyticsGoogleTokenAnalyticsConnectionByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PostClientSeoLocationsAnalyticsGoogleTokenConnectPropertiesByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientSeoLocationsAnalyticsGooglePropertyReportsByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * Start date for analytics reports
   */
  reportsStartDate: string;
  /**
   * End date for analytics reports
   */
  reportsEndDate: string;
  /**
   * The property id used for the reports data
   */
  propertyId: number;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientSeoLocationsKeywordsByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * Whether to propose and save opening hours or not
   */
  proposeAndSaveOpeningHours?: boolean;
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
   * - `mediaItems`
   *   - Allowed filter properties are:
   *     - `locationId`
   *     - `isOwnerUploaded`
   *     - `hasCorrectAspectRatio`
   *     - `scope`
   *     - `identifier`
   *     - `settings.uberall.createdDateTime`
   *     - `settings.uberall.externalId`
   *     - `settings.uberall.publicUrl`
   *     - `settings.uberall.toBeDeleted`
   *     - `settings.uberall.status`
   *     - `settings.google.createdDateTime`
   *     - `settings.google.externalId`
   *     - `settings.google.publicUrl`
   *     - `settings.google.toBeDeleted`
   *     - `settings.google.status`
   *     - `settings.facebook.createdDateTime`
   *     - `settings.facebook.externalId`
   *     - `settings.facebook.publicUrl`
   *     - `settings.facebook.toBeDeleted`
   *     - `settings.facebook.status`
   *     - `settings.instagram.createdDateTime`
   *     - `settings.instagram.externalId`
   *     - `settings.instagram.publicUrl`
   *     - `settings.instagram.toBeDeleted`
   *     - `settings.instagram.status`
   *     - `settings.yext.createdDateTime`
   *     - `settings.yext.externalId`
   *     - `settings.yext.publicUrl`
   *     - `settings.yext.toBeDeleted`
   *     - `settings.yext.status`
   *     - `settings.toBeDeleted`
   *     - `settings.deletionCompletedOnAllListingServices`
   *     - `type`
   *     - `publicUrl`
   *     - `description`
   *     - `viewCount`
   *     - `id`
   *     - `created`
   *     - `updated`
   *   - Allowed orderBy properties are:
   *     - `locationId`
   *     - `isOwnerUploaded`
   *     - `hasCorrectAspectRatio`
   *     - `scope`
   *     - `identifier`
   *     - `settings.uberall.createdDateTime`
   *     - `settings.uberall.externalId`
   *     - `settings.uberall.publicUrl`
   *     - `settings.uberall.toBeDeleted`
   *     - `settings.uberall.status`
   *     - `settings.google.createdDateTime`
   *     - `settings.google.externalId`
   *     - `settings.google.publicUrl`
   *     - `settings.google.toBeDeleted`
   *     - `settings.google.status`
   *     - `settings.facebook.createdDateTime`
   *     - `settings.facebook.externalId`
   *     - `settings.facebook.publicUrl`
   *     - `settings.facebook.toBeDeleted`
   *     - `settings.facebook.status`
   *     - `settings.instagram.createdDateTime`
   *     - `settings.instagram.externalId`
   *     - `settings.instagram.publicUrl`
   *     - `settings.instagram.toBeDeleted`
   *     - `settings.instagram.status`
   *     - `settings.yext.createdDateTime`
   *     - `settings.yext.externalId`
   *     - `settings.yext.publicUrl`
   *     - `settings.yext.toBeDeleted`
   *     - `settings.yext.status`
   *     - `settings.toBeDeleted`
   *     - `settings.deletionCompletedOnAllListingServices`
   *     - `type`
   *     - `publicUrl`
   *     - `description`
   *     - `viewCount`
   *     - `id`
   *     - `created`
   *     - `updated`
   * - `locale`
   * - `openingHours`
   * - `categories`
   * - `serviceAreas`
   *   - Allowed filter properties are:
   *     - `locationId`
   *     - `serviceAreaId`
   *     - `id`
   *   - Allowed orderBy properties are:
   *     - `locationId`
   *     - `serviceAreaId`
   *     - `id`
   * - `keywords`
   *   - Allowed filter properties are:
   *   - Allowed orderBy properties are:
   * - `listings`
   * - `website`
   *   - Allowed filter properties are:
   *   - Allowed orderBy properties are:
   * - `seo`
   * - `locationListingServices`
   * - `locationListingServicesToBeDeactivated`
   * - `listingServices`
   * - `visibilityIndex`
   * - `settings`
   *   - Allowed filter properties are:
   *   - Allowed orderBy properties are:
   * - `competitors`
   *   - Allowed filter properties are:
   *     - `source`: one of [`CUSTOMER_SELECTED`, `GOOGLE`]
   *   - Allowed orderBy properties are:
   *     - `REPUTATION`
   *     - `DISTANCE`
   *     - `VISIBILITY`
   *     - `VISIBILITY_AND_DISTANCE`
   * - `reputation`
   * - `setupSequenceCompletions`
   *   - Allowed filter properties are:
   *   - Allowed orderBy properties are:
   * - `setupSequences`
   *   - Allowed filter properties are:
   *     - `type`
   *     - `id`
   *     - `setupSteps.name`
   *     - `setupSteps.setupSequenceId`
   *     - `setupSteps.isFinalStep`
   *     - `setupSteps.id`
   *   - Allowed orderBy properties are:
   *     - `type`
   *     - `id`
   *     - `setupSteps.name`
   *     - `setupSteps.setupSequenceId`
   *     - `setupSteps.isFinalStep`
   *     - `setupSteps.id`
   * - `posts`
   *   - Allowed filter properties are:
   *     - `title`
   *     - `startDate`
   *     - `endDate`
   *     - `type`
   *     - `status`
   *     - `createdExternally`
   *     - `content`
   *     - `locationId`
   *     - `scheduleAt`
   *     - `publishedAt`
   *     - `settings.google.languageCode`
   *     - `settings.google.callToAction.actionType`
   *     - `settings.google.callToAction.url`
   *     - `settings.google.error`
   *     - `settings.google.createdTime`
   *     - `settings.google.updatedTime`
   *     - `settings.google.externalId`
   *     - `settings.google.publishOnListingService`
   *     - `settings.google.status`
   *     - `settings.google.content`
   *     - `settings.google.permalinkUrl`
   *     - `settings.google.errorMessage`
   *     - `settings.google.publishedAt`
   *     - `settings.google.requireListingUpdate`
   *     - `settings.google.created`
   *     - `settings.google.updated`
   *     - `settings.facebook.views`
   *     - `settings.facebook.likes`
   *     - `settings.facebook.shares`
   *     - `settings.facebook.error`
   *     - `settings.facebook.createdTime`
   *     - `settings.facebook.updatedTime`
   *     - `settings.facebook.externalId`
   *     - `settings.facebook.publishOnListingService`
   *     - `settings.facebook.status`
   *     - `settings.facebook.content`
   *     - `settings.facebook.permalinkUrl`
   *     - `settings.facebook.errorMessage`
   *     - `settings.facebook.publishedAt`
   *     - `settings.facebook.requireListingUpdate`
   *     - `settings.instagram.error.type`
   *     - `settings.instagram.error.message`
   *     - `settings.instagram.error.code`
   *     - `settings.instagram.owner.id`
   *     - `settings.instagram.likes`
   *     - `settings.instagram.comments`
   *     - `settings.instagram.createdTime`
   *     - `settings.instagram.updatedTime`
   *     - `settings.instagram.externalId`
   *     - `settings.instagram.publishOnListingService`
   *     - `settings.instagram.status`
   *     - `settings.instagram.content`
   *     - `settings.instagram.permalinkUrl`
   *     - `settings.instagram.errorMessage`
   *     - `settings.instagram.publishedAt`
   *     - `settings.instagram.requireListingUpdate`
   *     - `settings.instagram.created`
   *     - `settings.instagram.updated`
   *     - `id`
   *     - `created`
   *     - `updated`
   *     - `mediaItems.postId`
   *     - `mediaItems.identifier`
   *     - `mediaItems.settings.facebook.createdDateTime`
   *     - `mediaItems.settings.facebook.externalId`
   *     - `mediaItems.settings.facebook.message`
   *     - `mediaItems.settings.facebook.status`
   *     - `mediaItems.settings.facebook.publicUrl`
   *     - `mediaItems.settings.instagram.createdDateTime`
   *     - `mediaItems.settings.instagram.externalId`
   *     - `mediaItems.settings.instagram.message`
   *     - `mediaItems.settings.instagram.status`
   *     - `mediaItems.settings.instagram.publicUrl`
   *     - `mediaItems.settings.downloadConfirmation.url`
   *     - `mediaItems.settings.downloadConfirmation.authorUsername`
   *     - `mediaItems.settings.downloadConfirmation.authorFullName`
   *     - `mediaItems.settings.removed`
   *     - `mediaItems.settings.isAIGenerated`
   *     - `mediaItems.uploadedToArgus`
   *     - `mediaItems.type`
   *     - `mediaItems.publicUrl`
   *     - `mediaItems.description`
   *     - `mediaItems.viewCount`
   *     - `mediaItems.id`
   *     - `mediaItems.created`
   *     - `mediaItems.updated`
   *     - `boostAdCreatives.objectStorySpec.instagramActorId`
   *     - `boostAdCreatives.objectStorySpec.linkData.name`
   *     - `boostAdCreatives.objectStorySpec.linkData.description`
   *     - `boostAdCreatives.objectStorySpec.linkData.link`
   *     - `boostAdCreatives.objectStorySpec.linkData.picture`
   *     - `boostAdCreatives.objectStorySpec.linkData.message`
   *     - `boostAdCreatives.objectStorySpec.linkData.childAttachments`
   *     - `boostAdCreatives.objectStorySpec.linkData.callToAction.type`
   *     - `boostAdCreatives.objectStorySpec.linkData.callToAction.value.appDestination`
   *     - `boostAdCreatives.objectStorySpec.linkData.callToAction.value.appLink`
   *     - `boostAdCreatives.objectStorySpec.linkData.callToAction.value.application`
   *     - `boostAdCreatives.objectStorySpec.linkData.callToAction.value.link`
   *     - `boostAdCreatives.objectStorySpec.linkData.callToAction.value.linkCaption`
   *     - `boostAdCreatives.objectStorySpec.linkData.callToAction.value.page`
   *     - `boostAdCreatives.objectStorySpec.pageId`
   *     - `boostAdCreatives.objectStorySpec.postExternalId`
   *     - `boostAdCreatives.objectStorySpec.callToActionType`
   *     - `boostAdCreatives.postId`
   *     - `boostAdCreatives.name`
   *     - `boostAdCreatives.externalId`
   *     - `boostAdCreatives.id`
   *     - `boostAdCreatives.created`
   *     - `boostAdCreatives.updated`
   *   - Allowed orderBy properties are:
   *     - `title`
   *     - `startDate`
   *     - `endDate`
   *     - `type`
   *     - `status`
   *     - `createdExternally`
   *     - `content`
   *     - `locationId`
   *     - `scheduleAt`
   *     - `publishedAt`
   *     - `settings.google.languageCode`
   *     - `settings.google.callToAction.actionType`
   *     - `settings.google.callToAction.url`
   *     - `settings.google.error`
   *     - `settings.google.createdTime`
   *     - `settings.google.updatedTime`
   *     - `settings.google.externalId`
   *     - `settings.google.publishOnListingService`
   *     - `settings.google.status`
   *     - `settings.google.content`
   *     - `settings.google.permalinkUrl`
   *     - `settings.google.errorMessage`
   *     - `settings.google.publishedAt`
   *     - `settings.google.requireListingUpdate`
   *     - `settings.google.created`
   *     - `settings.google.updated`
   *     - `settings.facebook.views`
   *     - `settings.facebook.likes`
   *     - `settings.facebook.shares`
   *     - `settings.facebook.error`
   *     - `settings.facebook.createdTime`
   *     - `settings.facebook.updatedTime`
   *     - `settings.facebook.externalId`
   *     - `settings.facebook.publishOnListingService`
   *     - `settings.facebook.status`
   *     - `settings.facebook.content`
   *     - `settings.facebook.permalinkUrl`
   *     - `settings.facebook.errorMessage`
   *     - `settings.facebook.publishedAt`
   *     - `settings.facebook.requireListingUpdate`
   *     - `settings.instagram.error.type`
   *     - `settings.instagram.error.message`
   *     - `settings.instagram.error.code`
   *     - `settings.instagram.owner.id`
   *     - `settings.instagram.likes`
   *     - `settings.instagram.comments`
   *     - `settings.instagram.createdTime`
   *     - `settings.instagram.updatedTime`
   *     - `settings.instagram.externalId`
   *     - `settings.instagram.publishOnListingService`
   *     - `settings.instagram.status`
   *     - `settings.instagram.content`
   *     - `settings.instagram.permalinkUrl`
   *     - `settings.instagram.errorMessage`
   *     - `settings.instagram.publishedAt`
   *     - `settings.instagram.requireListingUpdate`
   *     - `settings.instagram.created`
   *     - `settings.instagram.updated`
   *     - `id`
   *     - `created`
   *     - `updated`
   *     - `mediaItems.postId`
   *     - `mediaItems.identifier`
   *     - `mediaItems.settings.facebook.createdDateTime`
   *     - `mediaItems.settings.facebook.externalId`
   *     - `mediaItems.settings.facebook.message`
   *     - `mediaItems.settings.facebook.status`
   *     - `mediaItems.settings.facebook.publicUrl`
   *     - `mediaItems.settings.instagram.createdDateTime`
   *     - `mediaItems.settings.instagram.externalId`
   *     - `mediaItems.settings.instagram.message`
   *     - `mediaItems.settings.instagram.status`
   *     - `mediaItems.settings.instagram.publicUrl`
   *     - `mediaItems.settings.downloadConfirmation.url`
   *     - `mediaItems.settings.downloadConfirmation.authorUsername`
   *     - `mediaItems.settings.downloadConfirmation.authorFullName`
   *     - `mediaItems.settings.removed`
   *     - `mediaItems.settings.isAIGenerated`
   *     - `mediaItems.uploadedToArgus`
   *     - `mediaItems.type`
   *     - `mediaItems.publicUrl`
   *     - `mediaItems.description`
   *     - `mediaItems.viewCount`
   *     - `mediaItems.id`
   *     - `mediaItems.created`
   *     - `mediaItems.updated`
   *     - `boostAdCreatives.objectStorySpec.instagramActorId`
   *     - `boostAdCreatives.objectStorySpec.linkData.name`
   *     - `boostAdCreatives.objectStorySpec.linkData.description`
   *     - `boostAdCreatives.objectStorySpec.linkData.link`
   *     - `boostAdCreatives.objectStorySpec.linkData.picture`
   *     - `boostAdCreatives.objectStorySpec.linkData.message`
   *     - `boostAdCreatives.objectStorySpec.linkData.childAttachments`
   *     - `boostAdCreatives.objectStorySpec.linkData.callToAction.type`
   *     - `boostAdCreatives.objectStorySpec.linkData.callToAction.value.appDestination`
   *     - `boostAdCreatives.objectStorySpec.linkData.callToAction.value.appLink`
   *     - `boostAdCreatives.objectStorySpec.linkData.callToAction.value.application`
   *     - `boostAdCreatives.objectStorySpec.linkData.callToAction.value.link`
   *     - `boostAdCreatives.objectStorySpec.linkData.callToAction.value.linkCaption`
   *     - `boostAdCreatives.objectStorySpec.linkData.callToAction.value.page`
   *     - `boostAdCreatives.objectStorySpec.pageId`
   *     - `boostAdCreatives.objectStorySpec.postExternalId`
   *     - `boostAdCreatives.objectStorySpec.callToActionType`
   *     - `boostAdCreatives.postId`
   *     - `boostAdCreatives.name`
   *     - `boostAdCreatives.externalId`
   *     - `boostAdCreatives.id`
   *     - `boostAdCreatives.created`
   *     - `boostAdCreatives.updated`
   * - `engagement`
   *   - Allowed filter properties are:
   *   - Allowed orderBy properties are:
   * - `adAccount`
   *   - Allowed filter properties are:
   *   - Allowed orderBy properties are:
   * - `tasks`
   *   - Allowed filter properties are:
   *   - Allowed orderBy properties are:</details>
   */
  expand?: string;
};
export type GetClientSeoLocationsKeywordByKeywordNameByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientSeoLocationsRankingsByLocationIdOpts = {
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
   * - `priority`
   * - `rankings_organic`
   * - `rankings_maps`
   * - `rankings_delta_organic`
   * - `rankings_delta_maps`</details>
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
   * - `keyword`
   * - `rankingLocation`
   * - `rankingCompetitors` - one of [`NONE`, `SELECTED`]
   * - `rankingsHistoryDays`
   * - `dateFrom`
   * - `dateTo`
   * - `hideEmptyRankings` - one of [`0`, `1`]</details>
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
   * - `comparisons`</details>
   */
  expand?: string;
};
export type GetClientSeoLocationsRankingsCompetitorsByLocationIdOpts = {
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
   * - `priority`
   * - `rankings_organic`
   * - `rankings_maps`
   * - `rankings_delta_organic`
   * - `rankings_delta_maps`</details>
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
   * - `keyword`
   * - `rankingLocation`
   * - `rankingCompetitors` - one of [`NONE`, `SELECTED`]
   * - `rankingsHistoryDays`
   * - `dateFrom`
   * - `dateTo`
   * - `hideEmptyRankings` - one of [`0`, `1`]</details>
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
   * - `comparisons`</details>
   */
  expand?: string;
};
export type GetClientSeoLocationsRankingsRankingsLocationsByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientSeoLocationsRankingsComparisonsByLocationIdOpts = {
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
   * - `priority`
   * - `rankings_organic`
   * - `rankings_maps`
   * - `rankings_delta_organic`
   * - `rankings_delta_maps`</details>
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
   * - `keyword`
   * - `rankingLocation`
   * - `rankingCompetitors` - one of [`NONE`, `SELECTED`]
   * - `rankingsHistoryDays`
   * - `dateFrom`
   * - `dateTo`
   * - `hideEmptyRankings` - one of [`0`, `1`]</details>
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
   * - `comparisons`</details>
   */
  expand?: string;
};
export type GetClientSeoLocationsRankingsComparisonsGroupedByLocationIdOpts = {
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
   * - `priority`
   * - `rankings_organic`
   * - `rankings_maps`
   * - `rankings_delta_organic`
   * - `rankings_delta_maps`</details>
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
   * - `keyword`
   * - `rankingLocation`
   * - `rankingCompetitors` - one of [`NONE`, `SELECTED`]
   * - `rankingsHistoryDays`
   * - `dateFrom`
   * - `dateTo`
   * - `hideEmptyRankings` - one of [`0`, `1`]</details>
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
   * - `comparisons`</details>
   */
  expand?: string;
};
export type GetClientSeoLocationsRankingsScreenshotByKeywordNameByRankingLocationOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PostClientSeoLocationsWebPageContentGenerateOrOptimizeContentElementByContentElementTypeByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * Whether to provide optimisations for the content that is being optimised
   */
  provideOptimisations?: boolean;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PatchClientSeoLocationsWebsiteByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PostClientSeoLocationsWebsiteByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};

export class SeoStore extends HttpStore {
  /**
   * Manager of list of AbortControllers for the Request
   */
  static patchClientSeoAiSeoTextOptimiseByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Optimise SEO text for specific type
   * @throws \ReflectionException
   */

  /**
   * AISeoText Optimise
   * Optimise SEO text for specific type
   * @throws \ReflectionException
   */
  patchClientSeoAiSeoTextOptimiseByLocationId(
    locationId: number,
    requestBody: AISeoTextRequestDto,
    queryParams: PatchClientSeoAiSeoTextOptimiseByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<AISeoTextResponseDto> {
    return this.patch(
      new EndPoint(`/app/api/client/seo/aiSeoText/${locationId}/optimise`),
      requestBody,
      queryParams,
      signal,
    );
  }

  static patchClientSeoAiSeoTextOptimiseByLocationIdThunk = createAsyncThunk<
    AISeoTextResponseDto,
    {
      locationId: number;
      requestBody: AISeoTextRequestDto;
      queryParams: PatchClientSeoAiSeoTextOptimiseByLocationIdOpts;
    },
    {
      rejectValue: BadRequestException | InternalErrorException;
    }
  >(
    /**
     * AISeoText Optimise
     * Optimise SEO text for specific type
     * @throws \ReflectionException
     */
    'patchClientSeoAiSeoTextOptimiseByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
      }: {
        locationId: number;
        requestBody: AISeoTextRequestDto;
        queryParams: PatchClientSeoAiSeoTextOptimiseByLocationIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.patchClientSeoAiSeoTextOptimiseByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          seoStore.patchClientSeoAiSeoTextOptimiseByLocationId(locationId, requestBody, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchClientSeoAiSeoTextOptimiseByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchClientSeoAiSeoTextOptimiseByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static patchClientSeoAiSeoTextOptimiseByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/seo/aiSeoText/{locationId}/optimise',
  );
  static patchClientSeoAiSeoTextOptimiseByLocationIdUrlMockRequest =
    '/app/api/client/seo/aiSeoText/{locationId}/optimise(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postClientSeoAiSeoTextOptimiseByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Optimise SEO text for specific type
   * @throws \ReflectionException
   */

  /**
   * AISeoText Optimise
   * Optimise SEO text for specific type
   * @throws \ReflectionException
   */
  postClientSeoAiSeoTextOptimiseByLocationId(
    locationId: number,
    requestBody: AISeoTextRequestDto,
    queryParams: PostClientSeoAiSeoTextOptimiseByLocationIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<AISeoTextResponseDto> {
    return this.post(
      new EndPoint(`/app/api/client/seo/aiSeoText/${locationId}/optimise`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postClientSeoAiSeoTextOptimiseByLocationIdThunk = createAsyncThunk<
    AISeoTextResponseDto,
    {
      locationId: number;
      requestBody: AISeoTextRequestDto;
      queryParams: PostClientSeoAiSeoTextOptimiseByLocationIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: BadRequestException | InternalErrorException;
    }
  >(
    /**
     * AISeoText Optimise
     * Optimise SEO text for specific type
     * @throws \ReflectionException
     */
    'postClientSeoAiSeoTextOptimiseByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        locationId: number;
        requestBody: AISeoTextRequestDto;
        queryParams: PostClientSeoAiSeoTextOptimiseByLocationIdOpts;
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
        this.postClientSeoAiSeoTextOptimiseByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          seoStore.postClientSeoAiSeoTextOptimiseByLocationId(
            locationId,
            requestBody,
            queryParams,
            signal,
            contentType,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientSeoAiSeoTextOptimiseByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientSeoAiSeoTextOptimiseByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postClientSeoAiSeoTextOptimiseByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/seo/aiSeoText/{locationId}/optimise',
  );
  static postClientSeoAiSeoTextOptimiseByLocationIdUrlMockRequest =
    '/app/api/client/seo/aiSeoText/{locationId}/optimise(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static patchClientSeoAiSeoTextCalculateOptimisationByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Calculate Optimisation for AISeoText
   *
   *
   * @throws \ReflectionException
   */

  /**
   * AISeoText Calculate Optimisation
   * Calculate Optimisation for AISeoText
   *
   *
   * @throws \ReflectionException
   */
  patchClientSeoAiSeoTextCalculateOptimisationByLocationId(
    locationId: number,
    requestBody: AISeoTextRequestDto,
    queryParams: PatchClientSeoAiSeoTextCalculateOptimisationByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<AISeoTextResponseDto> {
    return this.patch(
      new EndPoint(`/app/api/client/seo/aiSeoText/${locationId}/calculateOptimisation`),
      requestBody,
      queryParams,
      signal,
    );
  }

  static patchClientSeoAiSeoTextCalculateOptimisationByLocationIdThunk = createAsyncThunk<
    AISeoTextResponseDto,
    {
      locationId: number;
      requestBody: AISeoTextRequestDto;
      queryParams: PatchClientSeoAiSeoTextCalculateOptimisationByLocationIdOpts;
    },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * AISeoText Calculate Optimisation
     * Calculate Optimisation for AISeoText
     *
     *
     * @throws \ReflectionException
     */
    'patchClientSeoAiSeoTextCalculateOptimisationByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
      }: {
        locationId: number;
        requestBody: AISeoTextRequestDto;
        queryParams: PatchClientSeoAiSeoTextCalculateOptimisationByLocationIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.patchClientSeoAiSeoTextCalculateOptimisationByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          seoStore.patchClientSeoAiSeoTextCalculateOptimisationByLocationId(
            locationId,
            requestBody,
            queryParams,
            signal,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchClientSeoAiSeoTextCalculateOptimisationByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchClientSeoAiSeoTextCalculateOptimisationByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static patchClientSeoAiSeoTextCalculateOptimisationByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/seo/aiSeoText/{locationId}/calculateOptimisation',
  );
  static patchClientSeoAiSeoTextCalculateOptimisationByLocationIdUrlMockRequest =
    '/app/api/client/seo/aiSeoText/{locationId}/calculateOptimisation(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postClientSeoAiSeoTextCalculateOptimisationByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Calculate Optimisation for AISeoText
   *
   *
   * @throws \ReflectionException
   */

  /**
   * AISeoText Calculate Optimisation
   * Calculate Optimisation for AISeoText
   *
   *
   * @throws \ReflectionException
   */
  postClientSeoAiSeoTextCalculateOptimisationByLocationId(
    locationId: number,
    requestBody: AISeoTextRequestDto,
    queryParams: PostClientSeoAiSeoTextCalculateOptimisationByLocationIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<AISeoTextResponseDto> {
    return this.post(
      new EndPoint(`/app/api/client/seo/aiSeoText/${locationId}/calculateOptimisation`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postClientSeoAiSeoTextCalculateOptimisationByLocationIdThunk = createAsyncThunk<
    AISeoTextResponseDto,
    {
      locationId: number;
      requestBody: AISeoTextRequestDto;
      queryParams: PostClientSeoAiSeoTextCalculateOptimisationByLocationIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * AISeoText Calculate Optimisation
     * Calculate Optimisation for AISeoText
     *
     *
     * @throws \ReflectionException
     */
    'postClientSeoAiSeoTextCalculateOptimisationByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        locationId: number;
        requestBody: AISeoTextRequestDto;
        queryParams: PostClientSeoAiSeoTextCalculateOptimisationByLocationIdOpts;
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
        this.postClientSeoAiSeoTextCalculateOptimisationByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          seoStore.postClientSeoAiSeoTextCalculateOptimisationByLocationId(
            locationId,
            requestBody,
            queryParams,
            signal,
            contentType,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientSeoAiSeoTextCalculateOptimisationByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientSeoAiSeoTextCalculateOptimisationByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postClientSeoAiSeoTextCalculateOptimisationByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/seo/aiSeoText/{locationId}/calculateOptimisation',
  );
  static postClientSeoAiSeoTextCalculateOptimisationByLocationIdUrlMockRequest =
    '/app/api/client/seo/aiSeoText/{locationId}/calculateOptimisation(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientSeoLocationsAnalyticsGoogleTokenInitByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Initiates token connect flow
   */

  /**
   * GoogleAnalytics Token Connect Init
   * Initiates token connect flow
   */
  getClientSeoLocationsAnalyticsGoogleTokenInitByLocationId(
    locationId: number,
    queryParams: GetClientSeoLocationsAnalyticsGoogleTokenInitByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<any> {
    return this.get(
      new EndPoint(`/app/api/client/seo/locations/analytics/${locationId}/google/token/init`),
      queryParams,
      signal,
    );
  }

  static getClientSeoLocationsAnalyticsGoogleTokenInitByLocationIdThunk = createAsyncThunk<
    any,
    { locationId: number; queryParams: GetClientSeoLocationsAnalyticsGoogleTokenInitByLocationIdOpts },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * GoogleAnalytics Token Connect Init
     * Initiates token connect flow
     */
    'getClientSeoLocationsAnalyticsGoogleTokenInitByLocationId',
    async (
      {
        locationId,
        queryParams,
      }: { locationId: number; queryParams: GetClientSeoLocationsAnalyticsGoogleTokenInitByLocationIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientSeoLocationsAnalyticsGoogleTokenInitByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          seoStore.getClientSeoLocationsAnalyticsGoogleTokenInitByLocationId(locationId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSeoLocationsAnalyticsGoogleTokenInitByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSeoLocationsAnalyticsGoogleTokenInitByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientSeoLocationsAnalyticsGoogleTokenInitByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/seo/locations/analytics/{locationId}/google/token/init',
  );
  static getClientSeoLocationsAnalyticsGoogleTokenInitByLocationIdUrlMockRequest =
    '/app/api/client/seo/locations/analytics/{locationId}/google/token/init(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientSeoLocationsAnalyticsGoogleTokenResponseAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Handles token connection response and stores the connection
   */

  /**
   * GoogleAnalytics Token Connect Response
   * Handles token connection response and stores the connection
   */
  getClientSeoLocationsAnalyticsGoogleTokenResponse(
    queryParams: GetClientSeoLocationsAnalyticsGoogleTokenResponseOpts,
    signal?: AbortSignal,
  ): Observable<any> {
    return this.get(new EndPoint('/app/api/client/seo/locations/analytics/google/token/response'), queryParams, signal);
  }

  static getClientSeoLocationsAnalyticsGoogleTokenResponseThunk = createAsyncThunk<
    any,
    GetClientSeoLocationsAnalyticsGoogleTokenResponseOpts,
    {
      rejectValue: BadRequestException | UnauthorizedException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * GoogleAnalytics Token Connect Response
     * Handles token connection response and stores the connection
     */
    'getClientSeoLocationsAnalyticsGoogleTokenResponse',
    async (queryParams: GetClientSeoLocationsAnalyticsGoogleTokenResponseOpts, { rejectWithValue } = {} as any) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientSeoLocationsAnalyticsGoogleTokenResponseAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          seoStore.getClientSeoLocationsAnalyticsGoogleTokenResponse(queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSeoLocationsAnalyticsGoogleTokenResponseAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSeoLocationsAnalyticsGoogleTokenResponseAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientSeoLocationsAnalyticsGoogleTokenResponseUrlRegEx = new RegExp(
    '/app/api/client/seo/locations/analytics/google/token/response',
  );
  static getClientSeoLocationsAnalyticsGoogleTokenResponseUrlMockRequest =
    '/app/api/client/seo/locations/analytics/google/token/response(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientSeoLocationsAnalyticsGoogleTokenDisconnectByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Disconnects Google Analytics for the location
   */

  /**
   * Disconnect GoogleAnalytics Token
   * Disconnects Google Analytics for the location
   */
  getClientSeoLocationsAnalyticsGoogleTokenDisconnectByLocationId(
    locationId: number,
    queryParams: GetClientSeoLocationsAnalyticsGoogleTokenDisconnectByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<GoogleTokenLocationSeoConnectionResponseDto> {
    return this.get(
      new EndPoint(`/app/api/client/seo/locations/analytics/${locationId}/google/token/disconnect`),
      queryParams,
      signal,
    );
  }

  static getClientSeoLocationsAnalyticsGoogleTokenDisconnectByLocationIdThunk = createAsyncThunk<
    GoogleTokenLocationSeoConnectionResponseDto,
    { locationId: number; queryParams: GetClientSeoLocationsAnalyticsGoogleTokenDisconnectByLocationIdOpts },
    {
      rejectValue: BadRequestException | NotFoundException | MethodNotAllowedException | InternalErrorException;
    }
  >(
    /**
     * Disconnect GoogleAnalytics Token
     * Disconnects Google Analytics for the location
     */
    'getClientSeoLocationsAnalyticsGoogleTokenDisconnectByLocationId',
    async (
      {
        locationId,
        queryParams,
      }: { locationId: number; queryParams: GetClientSeoLocationsAnalyticsGoogleTokenDisconnectByLocationIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientSeoLocationsAnalyticsGoogleTokenDisconnectByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          seoStore.getClientSeoLocationsAnalyticsGoogleTokenDisconnectByLocationId(locationId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSeoLocationsAnalyticsGoogleTokenDisconnectByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSeoLocationsAnalyticsGoogleTokenDisconnectByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientSeoLocationsAnalyticsGoogleTokenDisconnectByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/seo/locations/analytics/{locationId}/google/token/disconnect',
  );
  static getClientSeoLocationsAnalyticsGoogleTokenDisconnectByLocationIdUrlMockRequest =
    '/app/api/client/seo/locations/analytics/{locationId}/google/token/disconnect(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientSeoLocationsAnalyticsGoogleAnalyticsAvailablePropertiesByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Returns Google Analytics properties for the location's connection based on website url
   */

  /**
   * Get available GoogleAnalytics Properties
   * Returns Google Analytics properties for the location's connection based on website url
   */
  getClientSeoLocationsAnalyticsGoogleAnalyticsAvailablePropertiesByLocationId(
    locationId: number,
    queryParams: GetClientSeoLocationsAnalyticsGoogleAnalyticsAvailablePropertiesByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<AnalyticsPropertiesResponseDto> {
    return this.get(
      new EndPoint(`/app/api/client/seo/locations/analytics/${locationId}/google/analytics/availableProperties`),
      queryParams,
      signal,
    );
  }

  static getClientSeoLocationsAnalyticsGoogleAnalyticsAvailablePropertiesByLocationIdThunk = createAsyncThunk<
    AnalyticsPropertiesResponseDto,
    {
      locationId: number;
      queryParams: GetClientSeoLocationsAnalyticsGoogleAnalyticsAvailablePropertiesByLocationIdOpts;
    },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Get available GoogleAnalytics Properties
     * Returns Google Analytics properties for the location's connection based on website url
     */
    'getClientSeoLocationsAnalyticsGoogleAnalyticsAvailablePropertiesByLocationId',
    async (
      {
        locationId,
        queryParams,
      }: {
        locationId: number;
        queryParams: GetClientSeoLocationsAnalyticsGoogleAnalyticsAvailablePropertiesByLocationIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientSeoLocationsAnalyticsGoogleAnalyticsAvailablePropertiesByLocationIdAbortManager._push(
          requestId,
          controller,
        );

        const result = await firstValueFrom(
          seoStore.getClientSeoLocationsAnalyticsGoogleAnalyticsAvailablePropertiesByLocationId(
            locationId,
            queryParams,
            signal,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSeoLocationsAnalyticsGoogleAnalyticsAvailablePropertiesByLocationIdAbortManager._remove(
          requestId,
        );

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSeoLocationsAnalyticsGoogleAnalyticsAvailablePropertiesByLocationIdAbortManager._remove(
          requestId,
        );

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientSeoLocationsAnalyticsGoogleAnalyticsAvailablePropertiesByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/seo/locations/analytics/{locationId}/google/analytics/availableProperties',
  );
  static getClientSeoLocationsAnalyticsGoogleAnalyticsAvailablePropertiesByLocationIdUrlMockRequest =
    '/app/api/client/seo/locations/analytics/{locationId}/google/analytics/availableProperties(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientSeoLocationsAnalyticsGoogleTokenAnalyticsConnectionByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Return Google Analytics Connection for the location if exists
   * or returns a default connection if connection does not exist
   */

  /**
   * Select token-managed AnalyticsSeoConnection
   * Return Google Analytics Connection for the location if exists
   * or returns a default connection if connection does not exist
   */
  getClientSeoLocationsAnalyticsGoogleTokenAnalyticsConnectionByLocationId(
    locationId: number,
    queryParams: GetClientSeoLocationsAnalyticsGoogleTokenAnalyticsConnectionByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<GoogleTokenLocationSeoConnectionResponseDto> {
    return this.get(
      new EndPoint(`/app/api/client/seo/locations/analytics/${locationId}/google/token/analyticsConnection`),
      queryParams,
      signal,
    );
  }

  static getClientSeoLocationsAnalyticsGoogleTokenAnalyticsConnectionByLocationIdThunk = createAsyncThunk<
    GoogleTokenLocationSeoConnectionResponseDto,
    { locationId: number; queryParams: GetClientSeoLocationsAnalyticsGoogleTokenAnalyticsConnectionByLocationIdOpts },
    {
      rejectValue: BadRequestException | Exception | MethodNotAllowedException | InternalErrorException;
    }
  >(
    /**
     * Select token-managed AnalyticsSeoConnection
     * Return Google Analytics Connection for the location if exists
     * or returns a default connection if connection does not exist
     */
    'getClientSeoLocationsAnalyticsGoogleTokenAnalyticsConnectionByLocationId',
    async (
      {
        locationId,
        queryParams,
      }: {
        locationId: number;
        queryParams: GetClientSeoLocationsAnalyticsGoogleTokenAnalyticsConnectionByLocationIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientSeoLocationsAnalyticsGoogleTokenAnalyticsConnectionByLocationIdAbortManager._push(
          requestId,
          controller,
        );

        const result = await firstValueFrom(
          seoStore.getClientSeoLocationsAnalyticsGoogleTokenAnalyticsConnectionByLocationId(
            locationId,
            queryParams,
            signal,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSeoLocationsAnalyticsGoogleTokenAnalyticsConnectionByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSeoLocationsAnalyticsGoogleTokenAnalyticsConnectionByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientSeoLocationsAnalyticsGoogleTokenAnalyticsConnectionByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/seo/locations/analytics/{locationId}/google/token/analyticsConnection',
  );
  static getClientSeoLocationsAnalyticsGoogleTokenAnalyticsConnectionByLocationIdUrlMockRequest =
    '/app/api/client/seo/locations/analytics/{locationId}/google/token/analyticsConnection(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postClientSeoLocationsAnalyticsGoogleTokenConnectPropertiesByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Saves the selected GoogleAnalytics properties for the location in database
   */

  /**
   * Connect the selected GoogleAnalytics properties
   * Saves the selected GoogleAnalytics properties for the location in database
   */
  postClientSeoLocationsAnalyticsGoogleTokenConnectPropertiesByLocationId(
    locationId: number,
    requestBody: AnalyticsPostConnectPropertiesRequestDto,
    queryParams: PostClientSeoLocationsAnalyticsGoogleTokenConnectPropertiesByLocationIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<GoogleTokenLocationSeoConnectionResponseDto> {
    return this.post(
      new EndPoint(`/app/api/client/seo/locations/analytics/${locationId}/google/token/connectProperties`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postClientSeoLocationsAnalyticsGoogleTokenConnectPropertiesByLocationIdThunk = createAsyncThunk<
    GoogleTokenLocationSeoConnectionResponseDto,
    {
      locationId: number;
      requestBody: AnalyticsPostConnectPropertiesRequestDto;
      queryParams: PostClientSeoLocationsAnalyticsGoogleTokenConnectPropertiesByLocationIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: BadRequestException | NotFoundException | MethodNotAllowedException | InternalErrorException;
    }
  >(
    /**
     * Connect the selected GoogleAnalytics properties
     * Saves the selected GoogleAnalytics properties for the location in database
     */
    'postClientSeoLocationsAnalyticsGoogleTokenConnectPropertiesByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        locationId: number;
        requestBody: AnalyticsPostConnectPropertiesRequestDto;
        queryParams: PostClientSeoLocationsAnalyticsGoogleTokenConnectPropertiesByLocationIdOpts;
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
        this.postClientSeoLocationsAnalyticsGoogleTokenConnectPropertiesByLocationIdAbortManager._push(
          requestId,
          controller,
        );

        const result = await firstValueFrom(
          seoStore.postClientSeoLocationsAnalyticsGoogleTokenConnectPropertiesByLocationId(
            locationId,
            requestBody,
            queryParams,
            signal,
            contentType,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientSeoLocationsAnalyticsGoogleTokenConnectPropertiesByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientSeoLocationsAnalyticsGoogleTokenConnectPropertiesByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postClientSeoLocationsAnalyticsGoogleTokenConnectPropertiesByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/seo/locations/analytics/{locationId}/google/token/connectProperties',
  );
  static postClientSeoLocationsAnalyticsGoogleTokenConnectPropertiesByLocationIdUrlMockRequest =
    '/app/api/client/seo/locations/analytics/{locationId}/google/token/connectProperties(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientSeoLocationsAnalyticsGooglePropertyReportsByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Returns Google Analytics Property Reports for the location
   */

  /**
   * Google Analytics Property Reports
   * Returns Google Analytics Property Reports for the location
   */
  getClientSeoLocationsAnalyticsGooglePropertyReportsByLocationId(
    locationId: number,
    queryParams: GetClientSeoLocationsAnalyticsGooglePropertyReportsByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<AnalyticsPropertyReportsGetResponseDto> {
    return this.get(
      new EndPoint(`/app/api/client/seo/locations/analytics/${locationId}/google/property/reports`),
      queryParams,
      signal,
    );
  }

  static getClientSeoLocationsAnalyticsGooglePropertyReportsByLocationIdThunk = createAsyncThunk<
    AnalyticsPropertyReportsGetResponseDto,
    { locationId: number; queryParams: GetClientSeoLocationsAnalyticsGooglePropertyReportsByLocationIdOpts },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Google Analytics Property Reports
     * Returns Google Analytics Property Reports for the location
     */
    'getClientSeoLocationsAnalyticsGooglePropertyReportsByLocationId',
    async (
      {
        locationId,
        queryParams,
      }: { locationId: number; queryParams: GetClientSeoLocationsAnalyticsGooglePropertyReportsByLocationIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientSeoLocationsAnalyticsGooglePropertyReportsByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          seoStore.getClientSeoLocationsAnalyticsGooglePropertyReportsByLocationId(locationId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSeoLocationsAnalyticsGooglePropertyReportsByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSeoLocationsAnalyticsGooglePropertyReportsByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientSeoLocationsAnalyticsGooglePropertyReportsByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/seo/locations/analytics/{locationId}/google/property/reports',
  );
  static getClientSeoLocationsAnalyticsGooglePropertyReportsByLocationIdUrlMockRequest =
    '/app/api/client/seo/locations/analytics/{locationId}/google/property/reports(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientSeoLocationsKeywordsByLocationIdAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * Returns detailed data on SeoKeywords inlcuding e.g. CPC, Search volume and Ads Competition
   */

  /**
   * SeoKeywords Data
   * Returns detailed data on SeoKeywords inlcuding e.g. CPC, Search volume and Ads Competition
   */
  getClientSeoLocationsKeywordsByLocationId(
    locationId: number,
    queryParams: GetClientSeoLocationsKeywordsByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<SeoKeywordsGetResponseDto> {
    return this.get(new EndPoint(`/app/api/client/seo/locations/${locationId}/keywords`), queryParams, signal);
  }

  static getClientSeoLocationsKeywordsByLocationIdThunk = createAsyncThunk<
    SeoKeywordsGetResponseDto,
    { locationId: number; queryParams: GetClientSeoLocationsKeywordsByLocationIdOpts },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * SeoKeywords Data
     * Returns detailed data on SeoKeywords inlcuding e.g. CPC, Search volume and Ads Competition
     */
    'getClientSeoLocationsKeywordsByLocationId',
    async (
      { locationId, queryParams }: { locationId: number; queryParams: GetClientSeoLocationsKeywordsByLocationIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientSeoLocationsKeywordsByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          seoStore.getClientSeoLocationsKeywordsByLocationId(locationId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSeoLocationsKeywordsByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSeoLocationsKeywordsByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientSeoLocationsKeywordsByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/seo/locations/{locationId}/keywords',
  );
  static getClientSeoLocationsKeywordsByLocationIdUrlMockRequest =
    '/app/api/client/seo/locations/{locationId}/keywords(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientSeoLocationsKeywordByKeywordNameByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Returns detailed data on SeoKeywords inlcuding e.g. CPC, Search volume and Ads Competition
   */

  /**
   * SeoKeyword Data
   * Returns detailed data on SeoKeywords inlcuding e.g. CPC, Search volume and Ads Competition
   */
  getClientSeoLocationsKeywordByKeywordNameByLocationId(
    keywordName: string,
    locationId: number,
    queryParams: GetClientSeoLocationsKeywordByKeywordNameByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<SeoKeywordGetResponseDto> {
    return this.get(
      new EndPoint(`/app/api/client/seo/locations/${locationId}/keyword/${keywordName}`),
      queryParams,
      signal,
    );
  }

  static getClientSeoLocationsKeywordByKeywordNameByLocationIdThunk = createAsyncThunk<
    SeoKeywordGetResponseDto,
    { keywordName: string; locationId: number; queryParams: GetClientSeoLocationsKeywordByKeywordNameByLocationIdOpts },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * SeoKeyword Data
     * Returns detailed data on SeoKeywords inlcuding e.g. CPC, Search volume and Ads Competition
     */
    'getClientSeoLocationsKeywordByKeywordNameByLocationId',
    async (
      {
        keywordName,
        locationId,
        queryParams,
      }: {
        keywordName: string;
        locationId: number;
        queryParams: GetClientSeoLocationsKeywordByKeywordNameByLocationIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientSeoLocationsKeywordByKeywordNameByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          seoStore.getClientSeoLocationsKeywordByKeywordNameByLocationId(keywordName, locationId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSeoLocationsKeywordByKeywordNameByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSeoLocationsKeywordByKeywordNameByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientSeoLocationsKeywordByKeywordNameByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/seo/locations/{locationId}/keyword/{keywordName}',
  );
  static getClientSeoLocationsKeywordByKeywordNameByLocationIdUrlMockRequest =
    '/app/api/client/seo/locations/{locationId}/keyword/{keywordName}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientSeoLocationsRankingsByLocationIdAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * Returns rankings from today to selected day in the past for Location's business including domain and or Google Maps listing
   * for selected Keywords and RankingsLocations
   */

  /**
   * Rankings get
   * Returns rankings from today to selected day in the past for Location's business including domain and or Google Maps listing
   * for selected Keywords and RankingsLocations
   */
  getClientSeoLocationsRankingsByLocationId(
    locationId: number,
    queryParams: GetClientSeoLocationsRankingsByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<RankingsGetResponseDto> {
    return this.get(new EndPoint(`/app/api/client/seo/locations/${locationId}/rankings`), queryParams, signal);
  }

  static getClientSeoLocationsRankingsByLocationIdThunk = createAsyncThunk<
    RankingsGetResponseDto,
    { locationId: number; queryParams: GetClientSeoLocationsRankingsByLocationIdOpts },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Rankings get
     * Returns rankings from today to selected day in the past for Location's business including domain and or Google Maps listing
     * for selected Keywords and RankingsLocations
     */
    'getClientSeoLocationsRankingsByLocationId',
    async (
      { locationId, queryParams }: { locationId: number; queryParams: GetClientSeoLocationsRankingsByLocationIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientSeoLocationsRankingsByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          seoStore.getClientSeoLocationsRankingsByLocationId(locationId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSeoLocationsRankingsByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSeoLocationsRankingsByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientSeoLocationsRankingsByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/seo/locations/{locationId}/rankings',
  );
  static getClientSeoLocationsRankingsByLocationIdUrlMockRequest =
    '/app/api/client/seo/locations/{locationId}/rankings(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientSeoLocationsRankingsCompetitorsByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Returns rankings from today to selected day in the past for Location's business and selected competitors,
   * selected Keywords and RankingsLocations
   */

  /**
   * Rankings competitors get
   * Returns rankings from today to selected day in the past for Location's business and selected competitors,
   * selected Keywords and RankingsLocations
   */
  getClientSeoLocationsRankingsCompetitorsByLocationId(
    locationId: number,
    queryParams: GetClientSeoLocationsRankingsCompetitorsByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<RankingsGetResponseDto> {
    return this.get(
      new EndPoint(`/app/api/client/seo/locations/${locationId}/rankings/competitors`),
      queryParams,
      signal,
    );
  }

  static getClientSeoLocationsRankingsCompetitorsByLocationIdThunk = createAsyncThunk<
    RankingsGetResponseDto,
    { locationId: number; queryParams: GetClientSeoLocationsRankingsCompetitorsByLocationIdOpts },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Rankings competitors get
     * Returns rankings from today to selected day in the past for Location's business and selected competitors,
     * selected Keywords and RankingsLocations
     */
    'getClientSeoLocationsRankingsCompetitorsByLocationId',
    async (
      {
        locationId,
        queryParams,
      }: { locationId: number; queryParams: GetClientSeoLocationsRankingsCompetitorsByLocationIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientSeoLocationsRankingsCompetitorsByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          seoStore.getClientSeoLocationsRankingsCompetitorsByLocationId(locationId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSeoLocationsRankingsCompetitorsByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSeoLocationsRankingsCompetitorsByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientSeoLocationsRankingsCompetitorsByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/seo/locations/{locationId}/rankings/competitors',
  );
  static getClientSeoLocationsRankingsCompetitorsByLocationIdUrlMockRequest =
    '/app/api/client/seo/locations/{locationId}/rankings/competitors(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientSeoLocationsRankingsRankingsLocationsByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Returns RankingsLocations of the Location that have been selected
   */

  /**
   * RankingsLocations
   * Returns RankingsLocations of the Location that have been selected
   */
  getClientSeoLocationsRankingsRankingsLocationsByLocationId(
    locationId: number,
    queryParams: GetClientSeoLocationsRankingsRankingsLocationsByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<RankingsLocationsGetResponseDto> {
    return this.get(
      new EndPoint(`/app/api/client/seo/locations/${locationId}/rankings/rankingsLocations`),
      queryParams,
      signal,
    );
  }

  static getClientSeoLocationsRankingsRankingsLocationsByLocationIdThunk = createAsyncThunk<
    RankingsLocationsGetResponseDto,
    { locationId: number; queryParams: GetClientSeoLocationsRankingsRankingsLocationsByLocationIdOpts },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * RankingsLocations
     * Returns RankingsLocations of the Location that have been selected
     */
    'getClientSeoLocationsRankingsRankingsLocationsByLocationId',
    async (
      {
        locationId,
        queryParams,
      }: { locationId: number; queryParams: GetClientSeoLocationsRankingsRankingsLocationsByLocationIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientSeoLocationsRankingsRankingsLocationsByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          seoStore.getClientSeoLocationsRankingsRankingsLocationsByLocationId(locationId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSeoLocationsRankingsRankingsLocationsByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSeoLocationsRankingsRankingsLocationsByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientSeoLocationsRankingsRankingsLocationsByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/seo/locations/{locationId}/rankings/rankingsLocations',
  );
  static getClientSeoLocationsRankingsRankingsLocationsByLocationIdUrlMockRequest =
    '/app/api/client/seo/locations/{locationId}/rankings/rankingsLocations(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientSeoLocationsRankingsComparisonsByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Returns comparison of rankings changes from today to selected day in the past.
   */

  /**
   * Rankings Comparisons
   * Returns comparison of rankings changes from today to selected day in the past.
   */
  getClientSeoLocationsRankingsComparisonsByLocationId(
    locationId: number,
    queryParams: GetClientSeoLocationsRankingsComparisonsByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<RankingsComparisonsGetResponseDto> {
    return this.get(
      new EndPoint(`/app/api/client/seo/locations/${locationId}/rankings/comparisons`),
      queryParams,
      signal,
    );
  }

  static getClientSeoLocationsRankingsComparisonsByLocationIdThunk = createAsyncThunk<
    RankingsComparisonsGetResponseDto,
    { locationId: number; queryParams: GetClientSeoLocationsRankingsComparisonsByLocationIdOpts },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Rankings Comparisons
     * Returns comparison of rankings changes from today to selected day in the past.
     */
    'getClientSeoLocationsRankingsComparisonsByLocationId',
    async (
      {
        locationId,
        queryParams,
      }: { locationId: number; queryParams: GetClientSeoLocationsRankingsComparisonsByLocationIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientSeoLocationsRankingsComparisonsByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          seoStore.getClientSeoLocationsRankingsComparisonsByLocationId(locationId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSeoLocationsRankingsComparisonsByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSeoLocationsRankingsComparisonsByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientSeoLocationsRankingsComparisonsByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/seo/locations/{locationId}/rankings/comparisons',
  );
  static getClientSeoLocationsRankingsComparisonsByLocationIdUrlMockRequest =
    '/app/api/client/seo/locations/{locationId}/rankings/comparisons(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientSeoLocationsRankingsComparisonsGroupedByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Returns comparison of rankings changes from today to selected day in the past.
   * Results are by increased, decreased and constant rankings
   */

  /**
   * Rankings Comparisons Grouped
   * Returns comparison of rankings changes from today to selected day in the past.
   * Results are by increased, decreased and constant rankings
   */
  getClientSeoLocationsRankingsComparisonsGroupedByLocationId(
    locationId: number,
    queryParams: GetClientSeoLocationsRankingsComparisonsGroupedByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<RankingsComparisonsGroupedGetResponseDto> {
    return this.get(
      new EndPoint(`/app/api/client/seo/locations/${locationId}/rankings/comparisons/grouped`),
      queryParams,
      signal,
    );
  }

  static getClientSeoLocationsRankingsComparisonsGroupedByLocationIdThunk = createAsyncThunk<
    RankingsComparisonsGroupedGetResponseDto,
    { locationId: number; queryParams: GetClientSeoLocationsRankingsComparisonsGroupedByLocationIdOpts },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Rankings Comparisons Grouped
     * Returns comparison of rankings changes from today to selected day in the past.
     * Results are by increased, decreased and constant rankings
     */
    'getClientSeoLocationsRankingsComparisonsGroupedByLocationId',
    async (
      {
        locationId,
        queryParams,
      }: { locationId: number; queryParams: GetClientSeoLocationsRankingsComparisonsGroupedByLocationIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientSeoLocationsRankingsComparisonsGroupedByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          seoStore.getClientSeoLocationsRankingsComparisonsGroupedByLocationId(locationId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSeoLocationsRankingsComparisonsGroupedByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSeoLocationsRankingsComparisonsGroupedByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientSeoLocationsRankingsComparisonsGroupedByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/seo/locations/{locationId}/rankings/comparisons/grouped',
  );
  static getClientSeoLocationsRankingsComparisonsGroupedByLocationIdUrlMockRequest =
    '/app/api/client/seo/locations/{locationId}/rankings/comparisons/grouped(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientSeoLocationsRankingsScreenshotByKeywordNameByRankingLocationAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Returns most recent ranking screenshot for given RankingLoaciton and Keyword
   */

  /**
   * Ranking Screenshot
   * Returns most recent ranking screenshot for given RankingLoaciton and Keyword
   */
  getClientSeoLocationsRankingsScreenshotByKeywordNameByRankingLocation(
    keywordName: string,
    rankingLocation: string,
    locationId: number,
    queryParams: GetClientSeoLocationsRankingsScreenshotByKeywordNameByRankingLocationOpts,
    signal?: AbortSignal,
  ): Observable<any> {
    return this.get(
      new EndPoint(`/app/api/client/seo/locations/${locationId}/rankings/screenshot/${rankingLocation}/${keywordName}`),
      queryParams,
      signal,
    );
  }

  static getClientSeoLocationsRankingsScreenshotByKeywordNameByRankingLocationThunk = createAsyncThunk<
    any,
    {
      keywordName: string;
      rankingLocation: string;
      locationId: number;
      queryParams: GetClientSeoLocationsRankingsScreenshotByKeywordNameByRankingLocationOpts;
    },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Ranking Screenshot
     * Returns most recent ranking screenshot for given RankingLoaciton and Keyword
     */
    'getClientSeoLocationsRankingsScreenshotByKeywordNameByRankingLocation',
    async (
      {
        keywordName,
        rankingLocation,
        locationId,
        queryParams,
      }: {
        keywordName: string;
        rankingLocation: string;
        locationId: number;
        queryParams: GetClientSeoLocationsRankingsScreenshotByKeywordNameByRankingLocationOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientSeoLocationsRankingsScreenshotByKeywordNameByRankingLocationAbortManager._push(
          requestId,
          controller,
        );

        const result = await firstValueFrom(
          seoStore.getClientSeoLocationsRankingsScreenshotByKeywordNameByRankingLocation(
            keywordName,
            rankingLocation,
            locationId,
            queryParams,
            signal,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSeoLocationsRankingsScreenshotByKeywordNameByRankingLocationAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSeoLocationsRankingsScreenshotByKeywordNameByRankingLocationAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientSeoLocationsRankingsScreenshotByKeywordNameByRankingLocationUrlRegEx = new RegExp(
    '/app/api/client/seo/locations/{locationId}/rankings/screenshot/{rankingLocation}/{keywordName}',
  );
  static getClientSeoLocationsRankingsScreenshotByKeywordNameByRankingLocationUrlMockRequest =
    '/app/api/client/seo/locations/{locationId}/rankings/screenshot/{rankingLocation}/{keywordName}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postClientSeoLocationsWebPageContentGenerateOrOptimizeContentElementByContentElementTypeByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Returns detailed data on SeoKeywords inlcuding e.g. CPC, Search volume and Ads Competition
   */

  /**
   * SEO Content for WebPage
   * Returns detailed data on SeoKeywords inlcuding e.g. CPC, Search volume and Ads Competition
   */
  postClientSeoLocationsWebPageContentGenerateOrOptimizeContentElementByContentElementTypeByLocationId(
    contentElementType: string,
    locationId: number,
    requestBody: WebPageContentElementGenerationPostRequestDto,
    queryParams: PostClientSeoLocationsWebPageContentGenerateOrOptimizeContentElementByContentElementTypeByLocationIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<WebPageContentElementGenerationPostResponseDto> {
    return this.post(
      new EndPoint(
        `/app/api/client/seo/locations/${locationId}/webPageContent/generateOrOptimizeContentElement/${contentElementType}`,
      ),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postClientSeoLocationsWebPageContentGenerateOrOptimizeContentElementByContentElementTypeByLocationIdThunk =
    createAsyncThunk<
      WebPageContentElementGenerationPostResponseDto,
      {
        contentElementType: string;
        locationId: number;
        requestBody: WebPageContentElementGenerationPostRequestDto;
        queryParams: PostClientSeoLocationsWebPageContentGenerateOrOptimizeContentElementByContentElementTypeByLocationIdOpts;
        contentType?: 'application/json';
      },
      {
        rejectValue: BadRequestException | NotFoundException | InternalErrorException;
      }
    >(
      /**
       * SEO Content for WebPage
       * Returns detailed data on SeoKeywords inlcuding e.g. CPC, Search volume and Ads Competition
       */
      'postClientSeoLocationsWebPageContentGenerateOrOptimizeContentElementByContentElementTypeByLocationId',
      async (
        {
          contentElementType,
          locationId,
          requestBody,
          queryParams,
          contentType = 'application/json',
        }: {
          contentElementType: string;
          locationId: number;
          requestBody: WebPageContentElementGenerationPostRequestDto;
          queryParams: PostClientSeoLocationsWebPageContentGenerateOrOptimizeContentElementByContentElementTypeByLocationIdOpts;
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
          this.postClientSeoLocationsWebPageContentGenerateOrOptimizeContentElementByContentElementTypeByLocationIdAbortManager._push(
            requestId,
            controller,
          );

          const result = await firstValueFrom(
            seoStore.postClientSeoLocationsWebPageContentGenerateOrOptimizeContentElementByContentElementTypeByLocationId(
              contentElementType,
              locationId,
              requestBody,
              queryParams,
              signal,
              contentType,
            ),
          );

          // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
          this.postClientSeoLocationsWebPageContentGenerateOrOptimizeContentElementByContentElementTypeByLocationIdAbortManager._remove(
            requestId,
          );

          return result;
        } catch (err) {
          // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
          this.postClientSeoLocationsWebPageContentGenerateOrOptimizeContentElementByContentElementTypeByLocationIdAbortManager._remove(
            requestId,
          );

          return rejectWithValue(err.response.data);
        }
      },
    );

  static postClientSeoLocationsWebPageContentGenerateOrOptimizeContentElementByContentElementTypeByLocationIdUrlRegEx =
    new RegExp(
      '/app/api/client/seo/locations/{locationId}/webPageContent/generateOrOptimizeContentElement/{contentElementType}',
    );
  static postClientSeoLocationsWebPageContentGenerateOrOptimizeContentElementByContentElementTypeByLocationIdUrlMockRequest =
    '/app/api/client/seo/locations/{locationId}/webPageContent/generateOrOptimizeContentElement/{contentElementType}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static patchClientSeoLocationsWebsiteByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Created or Update a website based on the provided websiteUrl found in the request DTO using the websites service.
   * If there are errors during the update process, they will be thrown as exceptions.
   */

  /**
   * Website Update
   * Created or Update a website based on the provided websiteUrl found in the request DTO using the websites service.
   * If there are errors during the update process, they will be thrown as exceptions.
   */
  patchClientSeoLocationsWebsiteByLocationId(
    locationId: number,
    requestBody: SeoWebsiteUpdateRequestDto,
    queryParams: PatchClientSeoLocationsWebsiteByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<SeoWebsiteUpdateResponseDto> {
    return this.patch(
      new EndPoint(`/app/api/client/seo/locations/${locationId}/website`),
      requestBody,
      queryParams,
      signal,
    );
  }

  static patchClientSeoLocationsWebsiteByLocationIdThunk = createAsyncThunk<
    SeoWebsiteUpdateResponseDto,
    {
      locationId: number;
      requestBody: SeoWebsiteUpdateRequestDto;
      queryParams: PatchClientSeoLocationsWebsiteByLocationIdOpts;
    },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Website Update
     * Created or Update a website based on the provided websiteUrl found in the request DTO using the websites service.
     * If there are errors during the update process, they will be thrown as exceptions.
     */
    'patchClientSeoLocationsWebsiteByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
      }: {
        locationId: number;
        requestBody: SeoWebsiteUpdateRequestDto;
        queryParams: PatchClientSeoLocationsWebsiteByLocationIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.patchClientSeoLocationsWebsiteByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          seoStore.patchClientSeoLocationsWebsiteByLocationId(locationId, requestBody, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchClientSeoLocationsWebsiteByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchClientSeoLocationsWebsiteByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static patchClientSeoLocationsWebsiteByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/seo/locations/{locationId}/website',
  );
  static patchClientSeoLocationsWebsiteByLocationIdUrlMockRequest =
    '/app/api/client/seo/locations/{locationId}/website(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postClientSeoLocationsWebsiteByLocationIdAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * Created or Update a website based on the provided websiteUrl found in the request DTO using the websites service.
   * If there are errors during the update process, they will be thrown as exceptions.
   */

  /**
   * Website Update
   * Created or Update a website based on the provided websiteUrl found in the request DTO using the websites service.
   * If there are errors during the update process, they will be thrown as exceptions.
   */
  postClientSeoLocationsWebsiteByLocationId(
    locationId: number,
    requestBody: SeoWebsiteUpdateRequestDto,
    queryParams: PostClientSeoLocationsWebsiteByLocationIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<SeoWebsiteUpdateResponseDto> {
    return this.post(
      new EndPoint(`/app/api/client/seo/locations/${locationId}/website`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postClientSeoLocationsWebsiteByLocationIdThunk = createAsyncThunk<
    SeoWebsiteUpdateResponseDto,
    {
      locationId: number;
      requestBody: SeoWebsiteUpdateRequestDto;
      queryParams: PostClientSeoLocationsWebsiteByLocationIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Website Update
     * Created or Update a website based on the provided websiteUrl found in the request DTO using the websites service.
     * If there are errors during the update process, they will be thrown as exceptions.
     */
    'postClientSeoLocationsWebsiteByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        locationId: number;
        requestBody: SeoWebsiteUpdateRequestDto;
        queryParams: PostClientSeoLocationsWebsiteByLocationIdOpts;
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
        this.postClientSeoLocationsWebsiteByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          seoStore.postClientSeoLocationsWebsiteByLocationId(locationId, requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientSeoLocationsWebsiteByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientSeoLocationsWebsiteByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postClientSeoLocationsWebsiteByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/seo/locations/{locationId}/website',
  );
  static postClientSeoLocationsWebsiteByLocationIdUrlMockRequest =
    '/app/api/client/seo/locations/{locationId}/website(.*)';
}
export const seoStore = new SeoStore();
