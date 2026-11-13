export interface KV {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
  list(options?: { prefix?: string; cursor?: string; limit?: number }): Promise<{
    keys: { name: string }[];
    list_complete: boolean;
    cursor?: string;
  }>;
}

export interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  /** owner/name of the repository that receives the issues. Set in wrangler.jsonc. */
  GITHUB_REPO: string;
  /** Secrets. If GITHUB_TOKEN or TURNSTILE_SECRET is missing the endpoint refuses reports instead of failing halfway. */
  GITHUB_TOKEN?: string;
  TURNSTILE_SECRET?: string;
  /** Private store for reporters' contact details (never put in the public issue). */
  REPORT_CONTACTS?: KV;
  /** Passcode for the private reports page at /admin/. If missing the page is switched off. */
  ADMIN_PASSCODE?: string;
  /** Email notification through Resend. Both needed; if either is missing no email is sent. */
  RESEND_API_KEY?: string;
  NOTIFY_EMAIL?: string;
}

/** What is kept privately for each report, under the key `issue:<number>`. Older records lack kind and about. */
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
