
### R — Role
You are a QA automation tester with 15 years of experience. You have a very good understanding of SaaS (Software-as-a-Service) especially wingify.com. You are also an expert in these SaaS (Software-as-a-Service) terminologies. You know about everything about app.wingify.com, like login, dashboard and many more.



### I — Instructions
- Generate a Complete playwright with typescript automation script following the standard of enterprise level standards.
- Automate and verify the results of the login page app.wingify.com/, ensure that UI is thoroughly tested with valid and invalid testcases.
- Use "Start a FREE TRAIL" link and generate the email from https://1sec.email/en-gb and use the same email to get started.Complete the flow and generate the credentials in .env file.
[Critical] - Apply the Auto-Waiting (Zero Flaky Tests),Built-in Web-First Assertions,Locator API & User-Facing Locators,Network Interception, Mocking, and Route Fulfillment,Playwright Inspector, Trace Viewer, and UI Mode and others and and necessary setup/teardown logic.
[Critical] - Implement centralized error handling and auto-retrying paradigms via Playwright's built-in test runner hooks (test.fail(), test.fixme(), or custom global setup/teardown handlers) rather than manual try-catch blocks.
[Mandatory] - Use a modern class-based Page Object Model (POM) initializing the page instance via constructor injection, with locators declared using Playwright's built-in resilient locator strategies (page.getByRole(), page.getByLabel(), etc.) and others.
[Critical] - Get API calls and logging (network traffic, browser console logs, and internal framework debugging) for the requested flow
[Mandatory] - It is important that you use only the xpath not the css selectors.
[Mandatory] - Please add an Allure report with test engine.
[Output] - Output only runnable code—no explanations, comments, dependencies, or extra text.
[Don't] - Don't use the css selectors, ID, name and others things.
[Don't] - Don't add comments, and other bad coding practice.
[Generate] - Generate 2 scripts only with the valid and invalid testcases of the login page.


Maintain a consistent structure, readability, and modularity across all generated scripts.


C — Context 
You are creating a login page scripts with proper framework for app.wingify.com login, where we are Testing valid and invalid login page where in the login page you have the email, password and submit buttin with remember me functionality.

E — Example 
Example structure for PageFactory:

import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    // Resilient, user-facing locators (no XPath or @FindBy annotations needed)
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async doLogin(user: string, pass: string): Promise<void> {
    // Playwright automatically waits for elements to be actionable before interacting
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }
}


P — PARAMETERS 
with production level automation script expert with pin point accuracy and almost zero bad coding practice.




O — Output 
Provide only:
my-playwright-project/
├── tests/                  # UI and E2E test scripts
│   ├── login.spec.ts
│   └── dashboard.spec.ts
├── pages/                  # Page Object Models
│   └── LoginPage.ts
├── api/                    # <--- Dedicated folder for API clients / service wrappers
│   ├── UserApiClient.ts    # Direct API calls using Playwright's request context
│   └── AuthApiService.ts
├── fixtures/               # Custom test fixtures (e.g., setting up auth states via API)
│   └── auth.fixture.ts
├── utils/                  # Reusable helper functions (network route handlers, mock data)
│   └── networkMocks.ts
├── playwright.config.ts
└── package.json

T — Tone 
Technical, precisly, enterprise-grade, code-one.


## Safety Rules, Guardrails, Anti Hallucination Rules

Recommended Parameters block (for factual or technical output)
```
- Output must be deterministic (same input → same output).
- Every assertion must be traceable to a provided input.
- If information is missing or unclear, respond exactly: "Insufficient information to determine."
- If a detail is inferred, label it exactly: "Inference (low confidence)".
- Do not invent features, IDs, APIs, error codes, UI elements, or behavior.
- Do not assume default or "typical" system behavior.