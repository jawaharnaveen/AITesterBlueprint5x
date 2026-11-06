import { test, expect } from '../fixtures/auth.fixture';
import { mockJsonResponse } from '../utils/networkMocks';

for (const email of ['not-an-email', 'user@', '@example.com']) {
  test(`shows an authentication error for malformed email: ${email}`, async ({ loginPage, page }) => {
    await mockJsonResponse(page, '**/login', 401, {});
    await loginPage.goto();
    await loginPage.emailInput.fill(email);
    await loginPage.passwordInput.fill('not-a-real-password');
    await loginPage.signInButton.click();
    await expect(loginPage.authenticationError).toBeVisible();
    await expect(page).toHaveURL(/#\/login/);
  });
}
