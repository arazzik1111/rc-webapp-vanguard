/*
 * WARNING THIS FILE IS AUTO-GENERATED DO NOT MODIFY YOUR CHANGES WILL BE OVERWRITTEN!
 */
import type { AIGeneratedImagesRequestDto } from '@models/swagger/App/Presentation/Api/Client/AI/MediaItems/Dtos/AIGeneratedImagesRequestDto';
import type { AIGeneratedImagesResponseDto } from '@models/swagger/App/Presentation/Api/Client/AI/MediaItems/Dtos/AIGeneratedImagesResponseDto';
import type { AIMediaItemsGenerateRequestDto } from '@models/swagger/App/Presentation/Api/Client/AI/MediaItems/Dtos/AIMediaItemsGenerateRequestDto';
import type { AIMediaItemsResponseDto } from '@models/swagger/App/Presentation/Api/Client/AI/MediaItems/Dtos/AIMediaItemsResponseDto';
import type { ProjectAIAssistantSettingResponseDto } from '@models/swagger/App/Presentation/Api/Client/AI/ProjectAIAssistantSetting/Dtos/ProjectAIAssistantSettingResponseDto';
import type { ProjectAIAssistantSettingUpdateRequestDto } from '@models/swagger/App/Presentation/Api/Client/AI/ProjectAIAssistantSetting/Dtos/ProjectAIAssistantSettingUpdateRequestDto';
import type { AITextAdjustRequestDto } from '@models/swagger/App/Presentation/Api/Client/AI/Text/Dtos/AITextAdjustRequestDto';
import type { AITextResponseDto } from '@models/swagger/App/Presentation/Api/Client/AI/Text/Dtos/AITextResponseDto';
import type { BadRequestException } from '@models/swagger/DDD/Infrastructure/Exceptions/BadRequestException';
import type { ForbiddenException } from '@models/swagger/DDD/Infrastructure/Exceptions/ForbiddenException';
import type { InternalErrorException } from '@models/swagger/DDD/Infrastructure/Exceptions/InternalErrorException';
import type { NotFoundException } from '@models/swagger/DDD/Infrastructure/Exceptions/NotFoundException';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { firstValueFrom, Observable } from 'rxjs';

import { EndPoint } from '../../../api-config';
import { HttpStore } from '../../http.store';
import { AbortControllersManager } from '../../store-helpers/abort-controllers-manager';

export type PatchClientAiMediaItemsGenerateByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PostClientAiMediaItemsGenerateByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PatchClientAiMediaItemsGenerateImageByLocationIdOpts = {
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PostClientAiMediaItemsGenerateImageByLocationIdOpts = {
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type GetClientAiAiAssistantSettingByProjectIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PatchClientAiAiAssistantSettingByProjectIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PostClientAiAiAssistantSettingByProjectIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PatchClientAiTextAdjustByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};
export type PostClientAiTextAdjustByLocationIdOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};

export class AiStore extends HttpStore {
  /**
   * Manager of list of AbortControllers for the Request
   */
  static patchClientAiMediaItemsGenerateByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Get Images from Unsplash
   */

  /**
   * AIMediaItems Generate
   * Get Images from Unsplash
   */
  patchClientAiMediaItemsGenerateByLocationId(
    locationId: number,
    requestBody: AIMediaItemsGenerateRequestDto,
    queryParams: PatchClientAiMediaItemsGenerateByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<AIMediaItemsResponseDto> {
    return this.patch(
      new EndPoint(`/app/api/client/ai/mediaItems/${locationId}/generate`),
      requestBody,
      queryParams,
      signal,
    );
  }

  static patchClientAiMediaItemsGenerateByLocationIdThunk = createAsyncThunk<
    AIMediaItemsResponseDto,
    {
      locationId: number;
      requestBody: AIMediaItemsGenerateRequestDto;
      queryParams: PatchClientAiMediaItemsGenerateByLocationIdOpts;
    },
    {
      rejectValue: BadRequestException | ForbiddenException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * AIMediaItems Generate
     * Get Images from Unsplash
     */
    'patchClientAiMediaItemsGenerateByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
      }: {
        locationId: number;
        requestBody: AIMediaItemsGenerateRequestDto;
        queryParams: PatchClientAiMediaItemsGenerateByLocationIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.patchClientAiMediaItemsGenerateByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          aiStore.patchClientAiMediaItemsGenerateByLocationId(locationId, requestBody, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchClientAiMediaItemsGenerateByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchClientAiMediaItemsGenerateByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static patchClientAiMediaItemsGenerateByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/ai/mediaItems/{locationId}/generate',
  );
  static patchClientAiMediaItemsGenerateByLocationIdUrlMockRequest =
    '/app/api/client/ai/mediaItems/{locationId}/generate(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postClientAiMediaItemsGenerateByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Get Images from Unsplash
   */

  /**
   * AIMediaItems Generate
   * Get Images from Unsplash
   */
  postClientAiMediaItemsGenerateByLocationId(
    locationId: number,
    requestBody: AIMediaItemsGenerateRequestDto,
    queryParams: PostClientAiMediaItemsGenerateByLocationIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<AIMediaItemsResponseDto> {
    return this.post(
      new EndPoint(`/app/api/client/ai/mediaItems/${locationId}/generate`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postClientAiMediaItemsGenerateByLocationIdThunk = createAsyncThunk<
    AIMediaItemsResponseDto,
    {
      locationId: number;
      requestBody: AIMediaItemsGenerateRequestDto;
      queryParams: PostClientAiMediaItemsGenerateByLocationIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: BadRequestException | ForbiddenException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * AIMediaItems Generate
     * Get Images from Unsplash
     */
    'postClientAiMediaItemsGenerateByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        locationId: number;
        requestBody: AIMediaItemsGenerateRequestDto;
        queryParams: PostClientAiMediaItemsGenerateByLocationIdOpts;
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
        this.postClientAiMediaItemsGenerateByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          aiStore.postClientAiMediaItemsGenerateByLocationId(locationId, requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientAiMediaItemsGenerateByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientAiMediaItemsGenerateByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postClientAiMediaItemsGenerateByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/ai/mediaItems/{locationId}/generate',
  );
  static postClientAiMediaItemsGenerateByLocationIdUrlMockRequest =
    '/app/api/client/ai/mediaItems/{locationId}/generate(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static patchClientAiMediaItemsGenerateImageByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Generate AI Images based on
   * prompt, style, contrast, color mode and keywords
   */

  /**
   * Generate AI Images
   * Generate AI Images based on
   * prompt, style, contrast, color mode and keywords
   */
  patchClientAiMediaItemsGenerateImageByLocationId(
    locationId: number,
    requestBody: AIGeneratedImagesRequestDto,
    queryParams: PatchClientAiMediaItemsGenerateImageByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<AIGeneratedImagesResponseDto> {
    return this.patch(
      new EndPoint(`/app/api/client/ai/mediaItems/${locationId}/generateImage`),
      requestBody,
      queryParams,
      signal,
    );
  }

  static patchClientAiMediaItemsGenerateImageByLocationIdThunk = createAsyncThunk<
    AIGeneratedImagesResponseDto,
    {
      locationId: number;
      requestBody: AIGeneratedImagesRequestDto;
      queryParams: PatchClientAiMediaItemsGenerateImageByLocationIdOpts;
    },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Generate AI Images
     * Generate AI Images based on
     * prompt, style, contrast, color mode and keywords
     */
    'patchClientAiMediaItemsGenerateImageByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
      }: {
        locationId: number;
        requestBody: AIGeneratedImagesRequestDto;
        queryParams: PatchClientAiMediaItemsGenerateImageByLocationIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.patchClientAiMediaItemsGenerateImageByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          aiStore.patchClientAiMediaItemsGenerateImageByLocationId(locationId, requestBody, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchClientAiMediaItemsGenerateImageByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchClientAiMediaItemsGenerateImageByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static patchClientAiMediaItemsGenerateImageByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/ai/mediaItems/{locationId}/generateImage',
  );
  static patchClientAiMediaItemsGenerateImageByLocationIdUrlMockRequest =
    '/app/api/client/ai/mediaItems/{locationId}/generateImage(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postClientAiMediaItemsGenerateImageByLocationIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Generate AI Images based on
   * prompt, style, contrast, color mode and keywords
   */

  /**
   * Generate AI Images
   * Generate AI Images based on
   * prompt, style, contrast, color mode and keywords
   */
  postClientAiMediaItemsGenerateImageByLocationId(
    locationId: number,
    requestBody: AIGeneratedImagesRequestDto,
    queryParams: PostClientAiMediaItemsGenerateImageByLocationIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<AIGeneratedImagesResponseDto> {
    return this.post(
      new EndPoint(`/app/api/client/ai/mediaItems/${locationId}/generateImage`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postClientAiMediaItemsGenerateImageByLocationIdThunk = createAsyncThunk<
    AIGeneratedImagesResponseDto,
    {
      locationId: number;
      requestBody: AIGeneratedImagesRequestDto;
      queryParams: PostClientAiMediaItemsGenerateImageByLocationIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Generate AI Images
     * Generate AI Images based on
     * prompt, style, contrast, color mode and keywords
     */
    'postClientAiMediaItemsGenerateImageByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        locationId: number;
        requestBody: AIGeneratedImagesRequestDto;
        queryParams: PostClientAiMediaItemsGenerateImageByLocationIdOpts;
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
        this.postClientAiMediaItemsGenerateImageByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          aiStore.postClientAiMediaItemsGenerateImageByLocationId(
            locationId,
            requestBody,
            queryParams,
            signal,
            contentType,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientAiMediaItemsGenerateImageByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientAiMediaItemsGenerateImageByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postClientAiMediaItemsGenerateImageByLocationIdUrlRegEx = new RegExp(
    '/app/api/client/ai/mediaItems/{locationId}/generateImage',
  );
  static postClientAiMediaItemsGenerateImageByLocationIdUrlMockRequest =
    '/app/api/client/ai/mediaItems/{locationId}/generateImage(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientAiAiAssistantSettingByProjectIdAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * Returns the Project's AI Assistant's Settings
   */

  /**
   * ProjectAIAssistantSetting Get
   * Returns the Project's AI Assistant's Settings
   */
  getClientAiAiAssistantSettingByProjectId(
    projectId: number,
    queryParams: GetClientAiAiAssistantSettingByProjectIdOpts,
    signal?: AbortSignal,
  ): Observable<ProjectAIAssistantSettingResponseDto> {
    return this.get(new EndPoint(`/app/api/client/ai/aiAssistantSetting/${projectId}`), queryParams, signal);
  }

  static getClientAiAiAssistantSettingByProjectIdThunk = createAsyncThunk<
    ProjectAIAssistantSettingResponseDto,
    { projectId: number; queryParams: GetClientAiAiAssistantSettingByProjectIdOpts },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * ProjectAIAssistantSetting Get
     * Returns the Project's AI Assistant's Settings
     */
    'getClientAiAiAssistantSettingByProjectId',
    async (
      { projectId, queryParams }: { projectId: number; queryParams: GetClientAiAiAssistantSettingByProjectIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientAiAiAssistantSettingByProjectIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          aiStore.getClientAiAiAssistantSettingByProjectId(projectId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientAiAiAssistantSettingByProjectIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientAiAiAssistantSettingByProjectIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientAiAiAssistantSettingByProjectIdUrlRegEx = new RegExp(
    '/app/api/client/ai/aiAssistantSetting/{projectId}',
  );
  static getClientAiAiAssistantSettingByProjectIdUrlMockRequest =
    '/app/api/client/ai/aiAssistantSetting/{projectId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static patchClientAiAiAssistantSettingByProjectIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Updates Project's AI Assistant Setting
   */

  /**
   * ProjectAIAssistantSetting Update
   * Updates Project's AI Assistant Setting
   */
  patchClientAiAiAssistantSettingByProjectId(
    projectId: number,
    requestBody: ProjectAIAssistantSettingUpdateRequestDto,
    queryParams: PatchClientAiAiAssistantSettingByProjectIdOpts,
    signal?: AbortSignal,
  ): Observable<ProjectAIAssistantSettingResponseDto> {
    return this.patch(
      new EndPoint(`/app/api/client/ai/aiAssistantSetting/${projectId}`),
      requestBody,
      queryParams,
      signal,
    );
  }

  static patchClientAiAiAssistantSettingByProjectIdThunk = createAsyncThunk<
    ProjectAIAssistantSettingResponseDto,
    {
      projectId: number;
      requestBody: ProjectAIAssistantSettingUpdateRequestDto;
      queryParams: PatchClientAiAiAssistantSettingByProjectIdOpts;
    },
    {
      rejectValue: BadRequestException | ForbiddenException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * ProjectAIAssistantSetting Update
     * Updates Project's AI Assistant Setting
     */
    'patchClientAiAiAssistantSettingByProjectId',
    async (
      {
        projectId,
        requestBody,
        queryParams,
      }: {
        projectId: number;
        requestBody: ProjectAIAssistantSettingUpdateRequestDto;
        queryParams: PatchClientAiAiAssistantSettingByProjectIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.patchClientAiAiAssistantSettingByProjectIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          aiStore.patchClientAiAiAssistantSettingByProjectId(projectId, requestBody, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchClientAiAiAssistantSettingByProjectIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchClientAiAiAssistantSettingByProjectIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static patchClientAiAiAssistantSettingByProjectIdUrlRegEx = new RegExp(
    '/app/api/client/ai/aiAssistantSetting/{projectId}',
  );
  static patchClientAiAiAssistantSettingByProjectIdUrlMockRequest =
    '/app/api/client/ai/aiAssistantSetting/{projectId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postClientAiAiAssistantSettingByProjectIdAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * Updates Project's AI Assistant Setting
   */

  /**
   * ProjectAIAssistantSetting Update
   * Updates Project's AI Assistant Setting
   */
  postClientAiAiAssistantSettingByProjectId(
    projectId: number,
    requestBody: ProjectAIAssistantSettingUpdateRequestDto,
    queryParams: PostClientAiAiAssistantSettingByProjectIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<ProjectAIAssistantSettingResponseDto> {
    return this.post(
      new EndPoint(`/app/api/client/ai/aiAssistantSetting/${projectId}`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postClientAiAiAssistantSettingByProjectIdThunk = createAsyncThunk<
    ProjectAIAssistantSettingResponseDto,
    {
      projectId: number;
      requestBody: ProjectAIAssistantSettingUpdateRequestDto;
      queryParams: PostClientAiAiAssistantSettingByProjectIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: BadRequestException | ForbiddenException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * ProjectAIAssistantSetting Update
     * Updates Project's AI Assistant Setting
     */
    'postClientAiAiAssistantSettingByProjectId',
    async (
      {
        projectId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        projectId: number;
        requestBody: ProjectAIAssistantSettingUpdateRequestDto;
        queryParams: PostClientAiAiAssistantSettingByProjectIdOpts;
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
        this.postClientAiAiAssistantSettingByProjectIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          aiStore.postClientAiAiAssistantSettingByProjectId(projectId, requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientAiAiAssistantSettingByProjectIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientAiAiAssistantSettingByProjectIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postClientAiAiAssistantSettingByProjectIdUrlRegEx = new RegExp(
    '/app/api/client/ai/aiAssistantSetting/{projectId}',
  );
  static postClientAiAiAssistantSettingByProjectIdUrlMockRequest =
    '/app/api/client/ai/aiAssistantSetting/{projectId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static patchClientAiTextAdjustByLocationIdAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * Adjusts the given AI Text, only one adjustment is made at a time
   *
   *
   *
   *
   * @throws \ReflectionException
   */

  /**
   * AIText Adjust
   * Adjusts the given AI Text, only one adjustment is made at a time
   *
   *
   *
   *
   * @throws \ReflectionException
   */
  patchClientAiTextAdjustByLocationId(
    locationId: number,
    requestBody: AITextAdjustRequestDto,
    queryParams: PatchClientAiTextAdjustByLocationIdOpts,
    signal?: AbortSignal,
  ): Observable<AITextResponseDto> {
    return this.patch(new EndPoint(`/app/api/client/ai/text/${locationId}/adjust`), requestBody, queryParams, signal);
  }

  static patchClientAiTextAdjustByLocationIdThunk = createAsyncThunk<
    AITextResponseDto,
    { locationId: number; requestBody: AITextAdjustRequestDto; queryParams: PatchClientAiTextAdjustByLocationIdOpts },
    {
      rejectValue: BadRequestException | InternalErrorException;
    }
  >(
    /**
     * AIText Adjust
     * Adjusts the given AI Text, only one adjustment is made at a time
     *
     *
     *
     *
     * @throws \ReflectionException
     */
    'patchClientAiTextAdjustByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
      }: {
        locationId: number;
        requestBody: AITextAdjustRequestDto;
        queryParams: PatchClientAiTextAdjustByLocationIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.patchClientAiTextAdjustByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          aiStore.patchClientAiTextAdjustByLocationId(locationId, requestBody, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchClientAiTextAdjustByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchClientAiTextAdjustByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static patchClientAiTextAdjustByLocationIdUrlRegEx = new RegExp('/app/api/client/ai/text/{locationId}/adjust');
  static patchClientAiTextAdjustByLocationIdUrlMockRequest = '/app/api/client/ai/text/{locationId}/adjust(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postClientAiTextAdjustByLocationIdAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * Adjusts the given AI Text, only one adjustment is made at a time
   *
   *
   *
   *
   * @throws \ReflectionException
   */

  /**
   * AIText Adjust
   * Adjusts the given AI Text, only one adjustment is made at a time
   *
   *
   *
   *
   * @throws \ReflectionException
   */
  postClientAiTextAdjustByLocationId(
    locationId: number,
    requestBody: AITextAdjustRequestDto,
    queryParams: PostClientAiTextAdjustByLocationIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<AITextResponseDto> {
    return this.post(
      new EndPoint(`/app/api/client/ai/text/${locationId}/adjust`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postClientAiTextAdjustByLocationIdThunk = createAsyncThunk<
    AITextResponseDto,
    {
      locationId: number;
      requestBody: AITextAdjustRequestDto;
      queryParams: PostClientAiTextAdjustByLocationIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: BadRequestException | InternalErrorException;
    }
  >(
    /**
     * AIText Adjust
     * Adjusts the given AI Text, only one adjustment is made at a time
     *
     *
     *
     *
     * @throws \ReflectionException
     */
    'postClientAiTextAdjustByLocationId',
    async (
      {
        locationId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        locationId: number;
        requestBody: AITextAdjustRequestDto;
        queryParams: PostClientAiTextAdjustByLocationIdOpts;
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
        this.postClientAiTextAdjustByLocationIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          aiStore.postClientAiTextAdjustByLocationId(locationId, requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientAiTextAdjustByLocationIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postClientAiTextAdjustByLocationIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postClientAiTextAdjustByLocationIdUrlRegEx = new RegExp('/app/api/client/ai/text/{locationId}/adjust');
  static postClientAiTextAdjustByLocationIdUrlMockRequest = '/app/api/client/ai/text/{locationId}/adjust(.*)';
}
export const aiStore = new AiStore();
