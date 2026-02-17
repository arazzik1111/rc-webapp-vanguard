import { CompetitorMapItem } from '@common/CompetitorsMap/CompetitorsMap.slice';
import styles from '@common/CompetitorsMap/CompetitorsMapSidebar/CompetitorsMapSidebar.module.scss';
import { alignItemsCenter, dFlex, gap0_5 } from '@globalStyles';
import { classNames } from '@helpers/classNames';
import { ListItemType } from '@vanguard/ListItems/ListItem/ListItem';
import { Rating } from '@vanguard/Rating/Rating';
import { FontWeights, Text, TextTypes } from '@vanguard/Text/Text';
import React from 'react';

export const mapCompetitorsEntityAsListItems = (
  competitors: CompetitorMapItem[],
  ratingColor: string,
  hasSidebarPositionCircle: boolean,
): ListItemType<CompetitorMapItem>[] => {
  const result: ListItemType<CompetitorMapItem>[] = [];

  competitors.forEach((item) => {
    result.push({
      element: item,
      id: item.id,
      title: <div className={classNames(dFlex, styles.titleLine)}>{String(item.companyName)}</div>,
      content: (
        <div className={classNames(dFlex, styles.contentLine)}>
          <Rating valueSize={12} valueColor={'--n500'} value={item.rating} size={12} color={ratingColor} />
          &nbsp;&nbsp;{`(${item.reviewsCount})`}
        </div>
      ),
      last: (
        <div className={classNames(dFlex, alignItemsCenter, gap0_5, styles.lastLine)}>
          <Text type={TextTypes.textCaption} color={'--n500'} textWrap={'no-wrap'}>
            {item.categoryName ?? ''}
          </Text>
          <Text type={TextTypes.textCaption} color={'--n500'}>
            •
          </Text>
          {item.formattedAddress && (
            <Text type={TextTypes.textCaption} color={'--n500'} textWrap={'no-wrap'} ellipsis={true}>
              {item.formattedAddress}
            </Text>
          )}
        </div>
      ),
      left: (
        <div className={classNames(styles.leftContent, hasSidebarPositionCircle ? styles.left_content_circle : '')}>
          <Text type={TextTypes.textIntro} fontWeight={FontWeights.bold} color={'--n400'} translate={false}>
            #
          </Text>
          <Text translate={false} fontWeight={FontWeights.bold}>
            {String(item.position)}
          </Text>
        </div>
      ),
      right: (
        <div className={classNames(styles.rightContent)}>
          <img src={item.imageUrl} alt={''} />
        </div>
      ),
      isSticky: item.isOwnLocation,
    });
  });

  return result;
};
