import { mapCompetitorsEntityAsListItems } from '@common/CompetitorsMap/_helpers/map-competitor-items';
import { CompetitorsMapProps } from '@common/CompetitorsMap/CompetitorsMap';
import { CompetitorsMapSlice } from '@common/CompetitorsMap/CompetitorsMap.slice';
// import { ReputationInsightsState } from "@redux-stores/reputation/reputation-insights.store";
import { useAppDispatch } from '@custom-hooks/use-app-dispatch';
// import { useLocationSettings } from "@redux-stores/settings/location-settings.store";
import { translationService } from '@services/translation.service';
import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import { ListItems } from '@vanguard/ListItems/ListItems';
import { FontWeights, Text, TextTypes } from '@vanguard/Text/Text';
import React, { useMemo } from 'react';

// import { PresenceInsightsState } from "@redux-stores/presence/presence-insights.store";
// import { PresenceDashboardState } from "@redux-stores/presence/presence-dashboard.store";
import styles from './CompetitorsMapSidebar.module.scss';

export const CompetitorsMapSidebarContainer = (props: CompetitorsMapProps) => {
  const {
    rankedBy,
    hasSidebarPositionCircle = false,
    ratingColor = 'var(--n300)',
    competitorsMapItems,
    ownBusiness,
    clickedCompetitorIndex,
    cityName,
  } = props;

  const dispatch = useAppDispatch();
  const { setClickedCompetitor, setHoveredCompetitor } = CompetitorsMapSlice;

  const listItems = useMemo(() => {
    return mapCompetitorsEntityAsListItems(competitorsMapItems, ratingColor, hasSidebarPositionCircle);
  }, [competitorsMapItems]);

  /**
   * Return view
   * ---
   */
  return (
    <ComponentContainer className={styles.container}>
      <div className={styles.sidebar}>
        <Text
          testId={'competitors-map-sidebar-component-label-testid'}
          type={TextTypes.text}
          fontWeight={FontWeights.medium}
          replacements={{
            'ranked-by': translationService.get(rankedBy).value,
            'ranked-location': ownBusiness?.cityName ?? cityName,
            'ranked-by-style': 'color: var(--p500)',
          }}
        >
          {"Local competitors ranked by <span style='%ranked-by-style%'>%ranked-by%</span> in %ranked-location%"}
        </Text>

        <div className={styles.itemsList}>
          <ListItems
            testId={'list-items-testid-competitors'}
            onHover={(marker, index, isHovered) => {
              dispatch(setHoveredCompetitor({ index: index, hovered: isHovered }));
            }}
            onClick={(marker, index) => {
              dispatch(setClickedCompetitor({ index: index }));
            }}
            activeIndex={clickedCompetitorIndex}
            stickyIndex={ownBusiness?.index}
            items={listItems}
            hasSidebarPositionCircle={hasSidebarPositionCircle}
            stickyItemStyles={{
              normal: styles.own,
              stuckBottom: styles.ownStuckBottom,
              stuckTop: styles.ownStuckTop,
            }}
          />
        </div>
      </div>
    </ComponentContainer>
  );
};
