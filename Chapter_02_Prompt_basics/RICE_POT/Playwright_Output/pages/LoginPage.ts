import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;
  readonly authenticationError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('xpath=(//main//input[@placeholder="Enter email ID"])[1]');
    this.passwordInput = page.locator('xpath=(//main//input[@placeholder="Enter password"])[1]');
    this.signInButton = page.locator('xpath=(//main//button[normalize-space(.)="Sign in"])[1]');
    this.authenticationError = page.locator('xpath=//main//*[normalize-space(.)="Your email, password, IP address or location did not match" and not(*)]');
  }

  async goto(): Promise<void> {
    await this.page.goto('/#/login', { waitUntil: 'domcontentloaded' });
    await expect(this.signInButton).toBeVisible();
  }

  async signIn(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }
}
