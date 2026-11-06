import { test, expect } from '../fixtures/auth.fixture';

test('signs in with configured credentials', async ({ loginPage, page }) => {
  const email = process.env.WINGIFY_EMAIL;
  const password = process.env.WINGIFY_PASSWORD;

  test.skip(!email || !password, 'Set WINGIFY_EMAIL and WINGIFY_PASSWORD to run this live-account test.');

  await loginPage.goto();
  await loginPage.signIn(email!, password!);

  await expect(page).not.toHaveURL(/#\/login/);
  await expect(loginPage.signInButton).toBeHidden();
});
