import { APIRequestContext, APIResponse } from '@playwright/test';

export class UserApiClient {
  constructor(private readonly request: APIRequestContext) {}

  get(endpoint: string): Promise<APIResponse> {
    return this.request.get(endpoint);
  }

  post<TPayload extends object>(endpoint: string, payload: TPayload): Promise<APIResponse> {
    return this.request.post(endpoint, { data: payload });
  }
}
