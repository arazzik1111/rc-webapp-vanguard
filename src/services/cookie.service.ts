export enum CookieKeys {
  TOKEN = 'tokenStorageKey',
  REFRESH_TOKEN = 'refreshToken',
  SETTINGS = 'settingsStorageKey',
  VERSION_CHECK = 'versionCheck',
  REPORTS = 'reports',
  LOAD_FULL_POSTS_COOKIE_KEY = 'load_full_posts',
  LOAD_FULL_BOOSTS_COOKIE_KEY = 'load_full_boosts',
  HIDE_DRAFT_SAVE_CONFIRMATION = 'hide_draft_save_confirmation',
}

const ttlKey = 'sasl_2314_s_do';

class CookieService {
  private readonly inMemory: Record<string, string>;

  constructor() {
    this.inMemory = {};
  }

  init(): void {
    for (const cookieKey in CookieKeys) {
      if (CookieKeys.hasOwnProperty(cookieKey)) {
        const value: string = (CookieKeys as Record<string, string>)[cookieKey];
        this.inMemory[value] = localStorage.getItem(value) ?? '';
      }
    }
  }

  private isAlive(key: CookieKeys | string): boolean {
    const livesUntil = Number(localStorage.getItem(`${key}_${ttlKey}`));
    const now = Date.now();
    return now < livesUntil;
  }

  /**
   * ttl milisseconds
   * */
  set(key: CookieKeys | string, value?: string, ttl?: number): void {
    if (value) {
      localStorage.setItem(key, value);
      if (ttl) {
        localStorage.setItem(`${key}_${ttlKey}`, String(Date.now() + ttl));
      }
    }
  }

  setInMemory = (key: CookieKeys, value: string) => {
    this.inMemory[key] = value;
  };

  get(key: CookieKeys | string): string {
    if (this.isAlive(key)) {
      return localStorage.getItem(key) ?? '';
    } else {
      this.delete(key);
      return '';
    }
  }

  delete(key: CookieKeys | string): void {
    localStorage.removeItem(key);
  }

  deleteToken(): void {
    this.delete(CookieKeys.TOKEN);
    this.delete(CookieKeys.REFRESH_TOKEN);
  }

  getToken() {
    let token = JSON.parse(localStorage.getItem('persist:login-store-key') ?? '{}').authToken?.replaceAll('"', '');
    if (!token) {
      token = this.inMemory[CookieKeys.TOKEN];
    }

    return token;
  }

  clear() {
    localStorage.clear();
  }
}

export const cookieService = new CookieService();
