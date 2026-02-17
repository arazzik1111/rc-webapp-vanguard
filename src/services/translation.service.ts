import { TextReplacements } from '@vanguard/Text/Text';

import { rcWindow } from '../stores/window.store';

class TranslationService {
  translateArray(value: string[]): string[] {
    return value.map((v) => this.get(v)?.value);
  }

  justReplace(key: string, replacements?: TextReplacements) {
    let value = key;

    if (replacements && typeof replacements === 'object') {
      const keys = Object.keys(replacements);
      keys.forEach((replacement_key) => {
        const replacement_value = replacements[replacement_key];
        const regex = new RegExp(`[%{]${replacement_key}[%}]`, 'g');
        value = value.replace(regex, `${replacement_value}`);
      });
    }

    return value;
  }

  get(
    key: string,
    replacements?: TextReplacements,
    context?: 'one' | 'other',
    writingStyle?: 'personal' | 'impersonal',
    defaultValue?: string,
  ): {
    value: string;
    hasTranslationKey: boolean;
    wasTranslated: boolean;
  } {
    let wasTranslated = false;
    let value = key;

    const hasTranslationKey = typeof rcWindow.TranslationsData !== 'undefined' && key in rcWindow.TranslationsData;

    if (typeof rcWindow.TranslationsData !== 'undefined' && rcWindow.TranslationsData[key]) {
      wasTranslated = true;

      if (context === 'other' && rcWindow.TranslationsData[`${key}_other`]) {
        if (writingStyle === 'impersonal' && rcWindow.TranslationsData[`${key}_other` + '_impersonal'])
          value = rcWindow.TranslationsData[`${key}_other` + '_impersonal'];
        else value = rcWindow.TranslationsData[`${key}_other`];
      } else {
        if (writingStyle === 'impersonal' && rcWindow.TranslationsData[`${key}_impersonal`])
          value = rcWindow.TranslationsData[`${key}_impersonal`];
        else value = rcWindow.TranslationsData[key];
      }
    }

    if (replacements && typeof replacements === 'object') {
      const keys = Object.keys(replacements);
      keys.forEach((replacement_key) => {
        const replacement_value = replacements[replacement_key];
        const regex = new RegExp(`[%{]${replacement_key}[%}]`, 'g');
        value = value.replace(regex, `${replacement_value}`);
      });
    }

    if (value === null) {
      return { value: key, wasTranslated: false, hasTranslationKey: false };
    }
    return { value, wasTranslated, hasTranslationKey };
  }

  getTranslationKey(value: string): { key: string | undefined } {
    if (rcWindow && !rcWindow.TranslationsData) {
      return { key: value };
    }
    const key =
      Object.keys(rcWindow?.TranslationsData ?? {}).find((key) => rcWindow.TranslationsData[key] === value) ?? value;
    return { key: key };
  }
}

export const translationService = new TranslationService();
