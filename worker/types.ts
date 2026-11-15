export interface KV {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
}

export interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  /** owner/name of the repository that receives the issues. Set in wrangler.jsonc. */
  GITHUB_REPO?: string;
  /** Secrets. If GITHUB_TOKEN or TURNSTILE_SECRET is missing the endpoint refuses reports instead of failing halfway. */
  GITHUB_TOKEN?: string;
  TURNSTILE_SECRET?: string;
  /** Workers Rate Limiting binding: short burst limit per connection. */
  IP_LIMITER?: { limit(options: { key: string }): Promise<{ success: boolean }> };
  /** Approximate global daily report counter. Holds no reporter details. */
  RATE_LIMIT?: KV;
  /** Email notification through Resend. Both are needed: the email is the only place the reporter's contact goes. */
  RESEND_API_KEY?: string;
  NOTIFY_EMAIL?: string;
}

/** What the notification email is built from. It is not stored anywhere. */
export interface ContactRecord {
  contact: string;
  reference: string;
  section: string;
  environment: string;
  page: string;
  at: string;
  kind?: string;
  about?: string;
}
