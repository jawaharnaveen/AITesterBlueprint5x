import { Page, Route } from '@playwright/test';

export async function mockJsonResponse(
  page: Page,
  urlPattern: string | RegExp,
  status: number,
  payload: Record<string, unknown>,
  method = 'POST'
): Promise<void> {
  await page.route(urlPattern, (route: Route) => {
    if (route.request().method() !== method) {
      return route.continue();
    }

    return route.fulfill({
      status,
      contentType: 'application/json',
      body: JSON.stringify(payload)
    });
  });
}

export function attachDiagnostics(page: Page): void {
  page.on('request', request => {
    if (!['fetch', 'xhr'].includes(request.resourceType()) ||
        new URL(request.url()).origin !== new URL(page.url()).origin) {
      return;
    }

    const url = new URL(request.url());
    console.info(`[network] ${request.method()} ${url.origin}${url.pathname}`);
  });

  page.on('response', response => {
    if (!['fetch', 'xhr'].includes(response.request().resourceType()) ||
        new URL(response.url()).origin !== new URL(page.url()).origin) {
      return;
    }

    const url = new URL(response.url());
    console.info(`[network] ${response.status()} ${url.origin}${url.pathname}`);
  });

  page.on('console', message => {
    const location = message.location();
    console.info(`[browser-console] ${message.type()} ${location.url}:${location.lineNumber}`);
  });

  page.on('pageerror', error => {
    console.error(`[browser-error] ${error.name}: ${error.message}`);
  });
}
