import { LinkReplacements, Text, TextReplacements, TextTypes } from '@vanguard/Text/Text';
import React from 'react';

interface Props {
  description: string | string[] | React.ReactNode;
  replacements?: TextReplacements;
  links?: LinkReplacements;
}

export const InfoBoxBody = (props: Props) => {
  const { description, replacements, links } = props;
  if (Array.isArray(description)) {
    return (
      <React.Fragment data-testid={'info-box-description'}>
        {description?.map((textElement: string | React.ReactNode, index: number) => {
          return (
            <>
              {typeof textElement === 'string' ? (
                <Text
                  color={'--n700'}
                  key={textElement + index}
                  type={TextTypes.textHelp}
                  replacements={replacements}
                  links={links}
                >
                  {textElement}
                </Text>
              ) : (
                textElement
              )}
            </>
          );
        })}
      </React.Fragment>
    );
  }
  return (
    <>
      {typeof description === 'string' ? (
        <Text
          testId={'info-box-description'}
          color={'--n700'}
          type={TextTypes.textHelp}
          replacements={replacements}
          links={links}
        >
          {description}
        </Text>
      ) : (
        description
      )}
    </>
  );
};
