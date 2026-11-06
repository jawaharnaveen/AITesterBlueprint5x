import { APIResponse } from '@playwright/test';
import { UserApiClient } from './UserApiClient';

export interface AuthCredentials {
  email: string;
  password: string;
}

export class AuthApiService {
  constructor(private readonly client: UserApiClient) {}

  signIn(endpoint: string, credentials: AuthCredentials): Promise<APIResponse> {
    return this.client.post(endpoint, credentials);
  }
}
