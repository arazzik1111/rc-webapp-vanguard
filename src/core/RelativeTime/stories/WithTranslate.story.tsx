import React, { useState } from 'react';
import { RelativeTime } from '../RelativeTime';
import { Text, TextTypes } from '@vanguard/Text/Text';
import {
  Story,
  testDates,
  TRANSLATIONS,
  setLanguageTranslations,
} from './_RelativeTime.default';

type Language = keyof typeof TRANSLATIONS;

export const WithTranslate: Story = {
  beforeEach: () => {
    setLanguageTranslations('en');
  },
  afterEach: () => {
    setLanguageTranslations('en');
  },
  render: () => {
    const [language, setLanguage] = useState<Language>('en');

    const handleLanguageChange = (lang: Language) => {
      setLanguageTranslations(lang);
      setLanguage(lang);
    };

    return (
      <div style={{ padding: 20, maxWidth: 600 }}>
        <Text type={TextTypes.heading3} translate={false}>
          RelativeTime with Translations
        </Text>

        <div style={{ margin: '20px 0', display: 'flex', gap: 10 }}>
          {(Object.keys(TRANSLATIONS) as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              style={{
                padding: '8px 16px',
                backgroundColor: language === lang ? '#007bff' : '#e0e0e0',
                color: language === lang ? 'white' : 'black',
                border: 'none',
                borderRadius: 4,
                cursor: 'pointer',
              }}
            >
              {lang === 'en' && 'English'}
              {lang === 'de' && 'German'}
              {lang === 'es' && 'Spanish'}
            </button>
          ))}
        </div>

        <div key={language} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <Text type={TextTypes.heading4} translate={false}>
              Past Times
            </Text>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
              <RelativeTime translate>{testDates.past.fewSeconds}</RelativeTime>
              <RelativeTime translate>{testDates.past.minutes}</RelativeTime>
              <RelativeTime translate>{testDates.past.hours}</RelativeTime>
              <RelativeTime translate>{testDates.past.days}</RelativeTime>
              <RelativeTime translate>{testDates.past.weeks}</RelativeTime>
              <RelativeTime translate>{testDates.past.months}</RelativeTime>
              <RelativeTime translate>{testDates.past.years}</RelativeTime>
            </div>
          </div>

          <div>
            <Text type={TextTypes.heading4} translate={false}>
              Future Times
            </Text>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
              <RelativeTime translate>{testDates.future.fewSeconds}</RelativeTime>
              <RelativeTime translate>{testDates.future.minutes}</RelativeTime>
              <RelativeTime translate>{testDates.future.hours}</RelativeTime>
              <RelativeTime translate>{testDates.future.days}</RelativeTime>
              <RelativeTime translate>{testDates.future.weeks}</RelativeTime>
              <RelativeTime translate>{testDates.future.months}</RelativeTime>
              <RelativeTime translate>{testDates.future.years}</RelativeTime>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
