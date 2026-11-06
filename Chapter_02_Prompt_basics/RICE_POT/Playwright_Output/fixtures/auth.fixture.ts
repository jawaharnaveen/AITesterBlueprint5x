import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { attachDiagnostics } from '../utils/networkMocks';

type AuthFixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<AuthFixtures>({
  loginPage: async ({ page }, use, testInfo) => {
    attachDiagnostics(page);
    console.info(`[framework] starting: ${testInfo.title}`);
    await use(new LoginPage(page));
    console.info(`[framework] finished: ${testInfo.title} (${testInfo.status})`);
  }
});

export { expect };
