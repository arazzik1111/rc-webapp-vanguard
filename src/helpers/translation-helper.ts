import { getQueryParam } from '@helpers/url-params';
import { rcWindow } from '@stores/window.store';

class TranslationHelper {
  // ENABLE THIS TO TACK TRANSLATIONS
  private _shouldTrackTranslations = false;
  private _shouldTrackTranslationKeys = false;
  private untranslated: Record<string, string> = {};
  private translated: Record<string, string> = {};

  constructor() {
    this.init();
  }

  init() {
    const translationParam = getQueryParam('enableTextTranslationTracking');
    if (translationParam === 'true') {
      this._shouldTrackTranslations = true;
    }

    const translationKey = getQueryParam('enableTextTranslationKeyTracking');
    if (translationKey === 'true') {
      this._shouldTrackTranslationKeys = true;
    }
  }

  set shouldTrackTranslations(value: boolean) {
    this._shouldTrackTranslations = value;
  }

  get shouldTrackTranslations() {
    return this._shouldTrackTranslations;
  }

  set shouldTrackTranslationKeys(value: boolean) {
    this._shouldTrackTranslationKeys = value;
  }

  get shouldTrackTranslationKeys() {
    return this._shouldTrackTranslationKeys;
  }

  getUntraslatedAsArray() {
    return Object.values(this.untranslated);
  }

  logUntranslated() {
    const result = [];
    for (const key in this.untranslated) {
      result.push(key);
      result.push('\n');
    }

    console.log(...result);
  }

  addUntranslated(text: string) {
    if (!this.untranslated[text]) {
      this.untranslated[text] = text;
    }
  }
  addTranslated(text: string) {
    if (!this.translated[text]) {
      this.translated[text] = text;
    }
  }
}

export const translationHelper = new TranslationHelper();
rcWindow.translationHelper = translationHelper;
