/*
 * WARNING THIS FILE IS AUTO-GENERATED DO NOT MODIFY YOUR CHANGES WILL BE OVERWRITTEN!
 */
import type { LocationGetResponseDto } from '@models/swagger/App/Presentation/Api/Client/Presence/Locations/Dtos/LocationGetResponseDto';
import type { LegacyApiSynchronizeBusinessResponseDto } from '@models/swagger/App/Presentation/Api/Client/Setup/Dtos/LegacyApiSynchronizeBusinessResponseDto';
import type { SetupCategoriesGetResponseDto } from '@models/swagger/App/Presentation/Api/Client/Setup/Dtos/SetupCategoriesGetResponseDto';
import type { SetupCategoriesSearchGetResponseDto } from '@models/swagger/App/Presentation/Api/Client/Setup/Dtos/SetupCategoriesSearchGetResponseDto';
import type { SetupKeywordsGetResponseDto } from '@models/swagger/App/Presentation/Api/Client/Setup/Dtos/SetupKeywordsGetResponseDto';
import type { SetupOpeningHoursResponseDto } from '@models/swagger/App/Presentation/Api/Client/Setup/Dtos/SetupOpeningHoursResponseDto';
import type { BadRequestException } from '@models/swagger/DDD/Infrastructure/Exceptions/BadRequestException';
import type { InternalErrorException } from '@models/swagger/DDD/Infrastructure/Exceptions/InternalErrorException';
import type { MethodNotAllowedException } from '@models/swagger/DDD/Infrastructure/Exceptions/MethodNotAllowedException';
import type { NotFoundException } from '@models/swagger/DDD/Infrastructure/Exceptions/NotFoundException';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { firstValueFrom, Observable } from 'rxjs';

import { EndPoint } from '../../../api-config';
import { HttpStore } from '../../http.store';
import { AbortControllersManager } from '../../store-helpers/abort-controllers-manager';

export type GetClientSetupAccountsAutoSetupByAccountIdOpts = {
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
export type GetClientSetupLocationLegacyApiSynchronizeBusinessByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientSetupLocationsByLocationIdOpts = {
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
export type GetClientSetupLocationsAutoSetupByLocationIdOpts = {
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
export type GetClientSetupLocationsAutoSetupSaveByLocationIdOpts = {
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
export type GetClientSetupLocationsCategoriesDetailsByCategoryIdByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set, languageCode from location is overwritten
   */
  languageCode?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientSetupLocationsCategoriesSearchByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * the string to search for, on length <2 chars, return is empty
   */
  query: string;
  /**
   * If set, language from location is overwritten
   */
  languageCode?: string;
  /**
   * If set, coutnryShortCode from location is overwritten
   */
  countryShortCode?: string;
  /**
   * number of items to return, max. 50
   */
  count?: number;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientSetupLocationsCategoriesDetailsByCategoryIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set, languageCode from location is overwritten
   */
  languageCode?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientSetupLocationsCategoriesSearchOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * the string to search for, on length <2 chars, return is empty
   */
  query: string;
  /**
   * If set, language from location is overwritten
   */
  languageCode?: string;
  /**
   * If set, coutnryShortCode from location is overwritten
   */
  countryShortCode?: string;
  /**
   * number of items to return, max. 50
   */
  count?: number;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientSetupLocationsKeywordsProposeByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientSetupLocationsOpeningHoursProposeByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};

export class SetupStore extends HttpStore {
  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientSetupAccountsAutoSetupByAccountIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Returns location with AI extrcted Keywords, Categories determined based on Keywords
   * and Argus based LocationCompetitors extracted using Keywords and Categories
   */

  /**
   * Location automated Setup
   * Returns location with AI extrcted Keywords, Categories determined based on Keywords
   * and Argus based LocationCompetitors extracted using Keywords and Categories
   */
  getClientSetupAccountsAutoSetupByAccountId(
    accountId: string,
    queryParams: GetClientSetupAccountsAutoSetupByAccountIdOpts,
    signal?: AbortSignal,
  ): Observable<LocationGetResponseDto> {
    return this.get(new EndPoint(`/app/api/client/setup/accounts/${accountId}/autoSetup`), queryParams, signal);
  }

  static getClientSetupAccountsAutoSetupByAccountIdThunk = createAsyncThunk<
    LocationGetResponseDto,
    { accountId: string; queryParams: GetClientSetupAccountsAutoSetupByAccountIdOpts },
    {
      rejectValue: BadRequestException | NotFoundException | MethodNotAllowedException | InternalErrorException;
    }
  >(
    /**
     * Location automated Setup
     * Returns location with AI extrcted Keywords, Categories determined based on Keywords
     * and Argus based LocationCompetitors extracted using Keywords and Categories
     */
    'getClientSetupAccountsAutoSetupByAccountId',
    async (
      { accountId, queryParams }: { accountId: string; queryParams: GetClientSetupAccountsAutoSetupByAccountIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientSetupAccountsAutoSetupByAccountIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          setupStore.getClientSetupAccountsAutoSetupByAccountId(accountId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSetupAccountsAutoSetupByAccountIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSetupAccountsAutoSetupByAccountIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientSetupAccountsAutoSetupByAccountIdUrlRegEx = new RegExp(
    '/app/api/client/setup/accounts/{accountId}/autoSetup',
  );
  static getClientSetupAccountsAutoSetupByAccountIdUrlMockRequest =
    '/app/api/client/setup/accounts/{accountId}/autoSetup(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientSetupLocationLegacyApiSynchronizeBusinessByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Synchronizes the site to various endpoints including Argus, Intercom, etc and and recalculates the KPIs
   */

  /**
   * Syncs business data
   * Synchronizes the site to various endpoints including Argus, Intercom, etc and and recalculates the KPIs
   */
  getClientSetupLocationLegacyApiSynchronizeBusinessByLocationId(
    locationId: number,
    queryParams: GetClientSetupLocationLegacyApiSynchronizeBusinessByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<LegacyApiSynchronizeBusinessResponseDto> {
    return this.get(
      new EndPoint(`/app/api/client/setup/location/legacyApi/synchronizeBusiness/${locationId}`),
      queryParams,
      signal,
    );
  }

  static getClientSetupLocationLegacyApiSynchronizeBusinessByLocationIdThunk = createAsyncThunk<
    LegacyApiSynchronizeBusinessResponseDto,
    { locationId: number; queryParams: GetClientSetupLocationLegacyApiSynchronizeBusinessByLocationIdOpts },
    {
      rejectValue: BadRequestException;
    }
  >(
    /**
     * Syncs business data
     * Synchronizes the site to various endpoints including Argus, Intercom, etc and and recalculates the KPIs
     */
    'getClientSetupLocationLegacyApiSynchronizeBusinessByLocationId',
    async (
      {
        locationId,
        queryParams,
      }: { locationId: number; queryParams: GetClientSetupLocationLegacyApiSynchronizeBusinessByLocationIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientSetupLocationLegacyApiSynchronizeBusinessByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          setupStore.getClientSetupLocationLegacyApiSynchronizeBusinessByLocationId(locationId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSetupLocationLegacyApiSynchronizeBusinessByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSetupLocationLegacyApiSynchronizeBusinessByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientSetupLocationLegacyApiSynchronizeBusinessByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/setup/location/legacyApi/synchronizeBusiness/{locationId}',
  );
  static getClientSetupLocationLegacyApiSynchronizeBusinessByLocationIdUrlMockRequest =
    '/app/api/client/setup/location/legacyApi/synchronizeBusiness/{locationId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientSetupLocationsByLocationIdAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * Returns the Location with expandable sub entities
   */

  /**
   * Location Setup Details
   * Returns the Location with expandable sub entities
   */
  getClientSetupLocationsByLocationId(
    locationId: number,
    queryParams: GetClientSetupLocationsByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<LocationGetResponseDto> {
    return this.get(new EndPoint(`/app/api/client/setup/locations/${locationId}`), queryParams, signal);
  }

  static getClientSetupLocationsByLocationIdThunk = createAsyncThunk<
    LocationGetResponseDto,
    { locationId: number; queryParams: GetClientSetupLocationsByLocationIdOpts },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Location Setup Details
     * Returns the Location with expandable sub entities
     */
    'getClientSetupLocationsByLocationId',
    async (
      { locationId, queryParams }: { locationId: number; queryParams: GetClientSetupLocationsByLocationIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientSetupLocationsByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          setupStore.getClientSetupLocationsByLocationId(locationId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSetupLocationsByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSetupLocationsByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientSetupLocationsByLocationIdUrlRegEx = new RegExp('/app/api/client/setup/locations/{locationId}');
  static getClientSetupLocationsByLocationIdUrlMockRequest = '/app/api/client/setup/locations/{locationId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientSetupLocationsAutoSetupByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Returns location with AI extrcted Keywords, Categories determined based on Keywords
   * and Argus based LocationCompetitors extracted using Keywords and Categories
   */

  /**
   * Location automated Setup
   * Returns location with AI extrcted Keywords, Categories determined based on Keywords
   * and Argus based LocationCompetitors extracted using Keywords and Categories
   */
  getClientSetupLocationsAutoSetupByLocationId(
    locationId: number,
    queryParams: GetClientSetupLocationsAutoSetupByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<LocationGetResponseDto> {
    return this.get(new EndPoint(`/app/api/client/setup/locations/${locationId}/autoSetup`), queryParams, signal);
  }

  static getClientSetupLocationsAutoSetupByLocationIdThunk = createAsyncThunk<
    LocationGetResponseDto,
    { locationId: number; queryParams: GetClientSetupLocationsAutoSetupByLocationIdOpts },
    {
      rejectValue: BadRequestException | NotFoundException | MethodNotAllowedException | InternalErrorException;
    }
  >(
    /**
     * Location automated Setup
     * Returns location with AI extrcted Keywords, Categories determined based on Keywords
     * and Argus based LocationCompetitors extracted using Keywords and Categories
     */
    'getClientSetupLocationsAutoSetupByLocationId',
    async (
      {
        locationId,
        queryParams,
      }: { locationId: number; queryParams: GetClientSetupLocationsAutoSetupByLocationIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientSetupLocationsAutoSetupByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          setupStore.getClientSetupLocationsAutoSetupByLocationId(locationId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSetupLocationsAutoSetupByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSetupLocationsAutoSetupByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientSetupLocationsAutoSetupByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/setup/locations/{locationId}/autoSetup',
  );
  static getClientSetupLocationsAutoSetupByLocationIdUrlMockRequest =
    '/app/api/client/setup/locations/{locationId}/autoSetup(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientSetupLocationsAutoSetupSaveByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Performs autosetup and saves the results as well
   */

  /**
   * Location AutoSetup with Save
   * Performs autosetup and saves the results as well
   */
  getClientSetupLocationsAutoSetupSaveByLocationId(
    locationId: number,
    queryParams: GetClientSetupLocationsAutoSetupSaveByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<LocationGetResponseDto> {
    return this.get(new EndPoint(`/app/api/client/setup/locations/${locationId}/autoSetup/save`), queryParams, signal);
  }

  static getClientSetupLocationsAutoSetupSaveByLocationIdThunk = createAsyncThunk<
    LocationGetResponseDto,
    { locationId: number; queryParams: GetClientSetupLocationsAutoSetupSaveByLocationIdOpts },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Location AutoSetup with Save
     * Performs autosetup and saves the results as well
     */
    'getClientSetupLocationsAutoSetupSaveByLocationId',
    async (
      {
        locationId,
        queryParams,
      }: { locationId: number; queryParams: GetClientSetupLocationsAutoSetupSaveByLocationIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientSetupLocationsAutoSetupSaveByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          setupStore.getClientSetupLocationsAutoSetupSaveByLocationId(locationId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSetupLocationsAutoSetupSaveByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSetupLocationsAutoSetupSaveByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientSetupLocationsAutoSetupSaveByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/setup/locations/{locationId}/autoSetup/save',
  );
  static getClientSetupLocationsAutoSetupSaveByLocationIdUrlMockRequest =
    '/app/api/client/setup/locations/{locationId}/autoSetup/save(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientSetupLocationsCategoriesDetailsByCategoryIdByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Returns category by Id with localized content
   */

  /**
   * Category Details
   * Returns category by Id with localized content
   */
  getClientSetupLocationsCategoriesDetailsByCategoryIdByLocationId(
    categoryId: number,
    locationId: number,
    queryParams: GetClientSetupLocationsCategoriesDetailsByCategoryIdByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<SetupCategoriesGetResponseDto> {
    return this.get(
      new EndPoint(`/app/api/client/setup/locations/${locationId}/categories/details/${categoryId}`),
      queryParams,
      signal,
    );
  }

  static getClientSetupLocationsCategoriesDetailsByCategoryIdByLocationIdThunk = createAsyncThunk<
    SetupCategoriesGetResponseDto,
    {
      categoryId: number;
      locationId: number;
      queryParams: GetClientSetupLocationsCategoriesDetailsByCategoryIdByLocationIdOpts;
    },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Category Details
     * Returns category by Id with localized content
     */
    'getClientSetupLocationsCategoriesDetailsByCategoryIdByLocationId',
    async (
      {
        categoryId,
        locationId,
        queryParams,
      }: {
        categoryId: number;
        locationId: number;
        queryParams: GetClientSetupLocationsCategoriesDetailsByCategoryIdByLocationIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientSetupLocationsCategoriesDetailsByCategoryIdByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          setupStore.getClientSetupLocationsCategoriesDetailsByCategoryIdByLocationId(
            categoryId,
            locationId,
            queryParams,
            signal,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSetupLocationsCategoriesDetailsByCategoryIdByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSetupLocationsCategoriesDetailsByCategoryIdByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientSetupLocationsCategoriesDetailsByCategoryIdByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/setup/locations/{locationId}/categories/details/{categoryId}',
  );
  static getClientSetupLocationsCategoriesDetailsByCategoryIdByLocationIdUrlMockRequest =
    '/app/api/client/setup/locations/{locationId}/categories/details/{categoryId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientSetupLocationsCategoriesSearchByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Search categories based on searchString and language
   */

  /**
   * Categories search
   * Search categories based on searchString and language
   */
  getClientSetupLocationsCategoriesSearchByLocationId(
    locationId: number,
    queryParams: GetClientSetupLocationsCategoriesSearchByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<SetupCategoriesSearchGetResponseDto> {
    return this.get(
      new EndPoint(`/app/api/client/setup/locations/${locationId}/categories/search`),
      queryParams,
      signal,
    );
  }

  static getClientSetupLocationsCategoriesSearchByLocationIdThunk = createAsyncThunk<
    SetupCategoriesSearchGetResponseDto,
    { locationId: number; queryParams: GetClientSetupLocationsCategoriesSearchByLocationIdOpts },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Categories search
     * Search categories based on searchString and language
     */
    'getClientSetupLocationsCategoriesSearchByLocationId',
    async (
      {
        locationId,
        queryParams,
      }: { locationId: number; queryParams: GetClientSetupLocationsCategoriesSearchByLocationIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientSetupLocationsCategoriesSearchByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          setupStore.getClientSetupLocationsCategoriesSearchByLocationId(locationId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSetupLocationsCategoriesSearchByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSetupLocationsCategoriesSearchByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientSetupLocationsCategoriesSearchByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/setup/locations/{locationId}/categories/search',
  );
  static getClientSetupLocationsCategoriesSearchByLocationIdUrlMockRequest =
    '/app/api/client/setup/locations/{locationId}/categories/search(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientSetupLocationsCategoriesDetailsByCategoryIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Returns category by Id with localized content
   */

  /**
   * Category Details
   * Returns category by Id with localized content
   */
  getClientSetupLocationsCategoriesDetailsByCategoryId(
    categoryId: number,
    queryParams: GetClientSetupLocationsCategoriesDetailsByCategoryIdOpts,
    signal?: AbortSignal,
  ): Observable<SetupCategoriesGetResponseDto> {
    return this.get(
      new EndPoint(`/app/api/client/setup/locations/categories/details/${categoryId}`),
      queryParams,
      signal,
    );
  }

  static getClientSetupLocationsCategoriesDetailsByCategoryIdThunk = createAsyncThunk<
    SetupCategoriesGetResponseDto,
    { categoryId: number; queryParams: GetClientSetupLocationsCategoriesDetailsByCategoryIdOpts },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Category Details
     * Returns category by Id with localized content
     */
    'getClientSetupLocationsCategoriesDetailsByCategoryId',
    async (
      {
        categoryId,
        queryParams,
      }: { categoryId: number; queryParams: GetClientSetupLocationsCategoriesDetailsByCategoryIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientSetupLocationsCategoriesDetailsByCategoryIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          setupStore.getClientSetupLocationsCategoriesDetailsByCategoryId(categoryId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSetupLocationsCategoriesDetailsByCategoryIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSetupLocationsCategoriesDetailsByCategoryIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientSetupLocationsCategoriesDetailsByCategoryIdUrlRegEx = new RegExp(
    '/app/api/client/setup/locations/categories/details/{categoryId}',
  );
  static getClientSetupLocationsCategoriesDetailsByCategoryIdUrlMockRequest =
    '/app/api/client/setup/locations/categories/details/{categoryId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientSetupLocationsCategoriesSearchAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * Search categories based on searchString and language
   */

  /**
   * Categories search
   * Search categories based on searchString and language
   */
  getClientSetupLocationsCategoriesSearch(
    queryParams: GetClientSetupLocationsCategoriesSearchOpts,
    signal?: AbortSignal,
  ): Observable<SetupCategoriesSearchGetResponseDto> {
    return this.get(new EndPoint('/app/api/client/setup/locations/categories/search'), queryParams, signal);
  }

  static getClientSetupLocationsCategoriesSearchThunk = createAsyncThunk<
    SetupCategoriesSearchGetResponseDto,
    GetClientSetupLocationsCategoriesSearchOpts,
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Categories search
     * Search categories based on searchString and language
     */
    'getClientSetupLocationsCategoriesSearch',
    async (queryParams: GetClientSetupLocationsCategoriesSearchOpts, { rejectWithValue } = {} as any) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientSetupLocationsCategoriesSearchAbortManager._push(requestId, controller);

        const result = await firstValueFrom(setupStore.getClientSetupLocationsCategoriesSearch(queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSetupLocationsCategoriesSearchAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSetupLocationsCategoriesSearchAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientSetupLocationsCategoriesSearchUrlRegEx = new RegExp(
    '/app/api/client/setup/locations/categories/search',
  );
  static getClientSetupLocationsCategoriesSearchUrlMockRequest =
    '/app/api/client/setup/locations/categories/search(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientSetupLocationsKeywordsProposeByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Proposes Keywords based on Company data and website content
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   * @throws \ReflectionException
   */

  /**
   * Keywords propose
   * Proposes Keywords based on Company data and website content
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   * @throws \ReflectionException
   */
  getClientSetupLocationsKeywordsProposeByLocationId(
    locationId: number,
    queryParams: GetClientSetupLocationsKeywordsProposeByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<SetupKeywordsGetResponseDto> {
    return this.get(
      new EndPoint(`/app/api/client/setup/locations/${locationId}/keywords/propose`),
      queryParams,
      signal,
    );
  }

  static getClientSetupLocationsKeywordsProposeByLocationIdThunk = createAsyncThunk<
    SetupKeywordsGetResponseDto,
    { locationId: number; queryParams: GetClientSetupLocationsKeywordsProposeByLocationIdOpts },
    {
      rejectValue: BadRequestException | NotFoundException | MethodNotAllowedException | InternalErrorException;
    }
  >(
    /**
     * Keywords propose
     * Proposes Keywords based on Company data and website content
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     * @throws \ReflectionException
     */
    'getClientSetupLocationsKeywordsProposeByLocationId',
    async (
      {
        locationId,
        queryParams,
      }: { locationId: number; queryParams: GetClientSetupLocationsKeywordsProposeByLocationIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientSetupLocationsKeywordsProposeByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          setupStore.getClientSetupLocationsKeywordsProposeByLocationId(locationId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSetupLocationsKeywordsProposeByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSetupLocationsKeywordsProposeByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientSetupLocationsKeywordsProposeByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/setup/locations/{locationId}/keywords/propose',
  );
  static getClientSetupLocationsKeywordsProposeByLocationIdUrlMockRequest =
    '/app/api/client/setup/locations/{locationId}/keywords/propose(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientSetupLocationsOpeningHoursProposeByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Propose opening hours
   */

  /**
   * OpeningHoursDays propose
   * Propose opening hours
   */
  getClientSetupLocationsOpeningHoursProposeByLocationId(
    locationId: number,
    queryParams: GetClientSetupLocationsOpeningHoursProposeByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<SetupOpeningHoursResponseDto> {
    return this.get(
      new EndPoint(`/app/api/client/setup/locations/${locationId}/openingHours/propose`),
      queryParams,
      signal,
    );
  }

  static getClientSetupLocationsOpeningHoursProposeByLocationIdThunk = createAsyncThunk<
    SetupOpeningHoursResponseDto,
    { locationId: number; queryParams: GetClientSetupLocationsOpeningHoursProposeByLocationIdOpts },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * OpeningHoursDays propose
     * Propose opening hours
     */
    'getClientSetupLocationsOpeningHoursProposeByLocationId',
    async (
      {
        locationId,
        queryParams,
      }: { locationId: number; queryParams: GetClientSetupLocationsOpeningHoursProposeByLocationIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientSetupLocationsOpeningHoursProposeByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          setupStore.getClientSetupLocationsOpeningHoursProposeByLocationId(locationId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSetupLocationsOpeningHoursProposeByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientSetupLocationsOpeningHoursProposeByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientSetupLocationsOpeningHoursProposeByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/setup/locations/{locationId}/openingHours/propose',
  );
  static getClientSetupLocationsOpeningHoursProposeByLocationIdUrlMockRequest =
    '/app/api/client/setup/locations/{locationId}/openingHours/propose(.*)';
}
export const setupStore = new SetupStore();
