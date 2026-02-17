import { Icon } from '@vanguard/Icon/Icon';
import { IconNames } from '@vanguard/Icon/IconNames';
import { LottieBase, LottieBaseProps } from '@vanguard/LottieAnimationLoader/LottieBase/LottieBase';
import React, { useEffect, useState } from 'react';

export type LottieAnimationType = string | Record<string, any>;
export type LottieAnimationLoaderProps = {
  src: LottieAnimationType;
  translations?: string | Record<string, string>;
  placeholder?: string | React.ReactNode;
} & Omit<LottieBaseProps, 'animationData' | 'placeholder' | 'src'>;

export const LottieAnimationLoader = (props: LottieAnimationLoaderProps) => {
  const { src, placeholder, translations } = props;
  const [data, setData] = useState<Record<string, any> | null>(null);

  const loadData = (src: string | Record<string, any>) => {
    if (!src) {
      return false;
    }
    /**
     * If type is string we have an url so we do the request
     **/
    if (typeof src === 'string') {
      setData(null);
      fetch(src)
        .then((resp) => resp.json())
        .then((respData) => {
          const withReplacedPlaceholders = replacePlaceholders(respData, translations);
          setData(withReplacedPlaceholders);
        });
    } else {
      /**
       * Added support for direct animation JSON
       **/
      if (src) {
        const withReplacedPlaceholders = replacePlaceholders(src, translations);
        setData(withReplacedPlaceholders);
      }
    }
  };
  const replacePlaceholders = (response: any /*Animation data*/, translations?: string | Record<string, string>) => {
    if (!response) {
      return false;
    }
    if (!translations) {
      return response;
    }
    let replaced = JSON.stringify(response);

    if (typeof translations === 'string') {
      translations = JSON.parse(translations);
    }

    if (typeof translations !== 'string') {
      for (const key in translations) {
        const replace = `${key}`;
        const re = new RegExp(replace, 'g');
        replaced = replaced.replace(re, translations[key]);
      }
    }

    return JSON.parse(replaced); //convert back to array
  };

  useEffect(() => {
    loadData(src);
  }, [src]);

  if (!data) {
    return placeholder ? (
      <>{placeholder}</>
    ) : (
      <Icon spin={true} forceSize={90}>
        {IconNames.settings}
      </Icon>
    );
  }
  return <LottieBase animationData={data} />;
};
