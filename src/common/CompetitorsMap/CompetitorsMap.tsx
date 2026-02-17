import { getOwnBusiness, mapCompetitors } from '@common/CompetitorsMap/CompetitorsMap.mapper';
import { CompetitorMapItem, CompetitorsMapSlice } from '@common/CompetitorsMap/CompetitorsMap.slice';
import { CompetitorsMapGoogleMap } from '@common/CompetitorsMap/CompetitorsMapGoogleMap/CompetitorsMapGoogleMap';
import { useAppDispatch } from '@custom-hooks/use-app-dispatch';
import { classNames } from '@helpers/classNames';
import { LocationCompetitor } from '@models/swagger/App/Domain/Presence/Entities/Locations/Competitors/LocationCompetitor';
import { deviceService } from '@services/device.service';
import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import { Render } from '@vanguard/Render/Render';
import { Skeleton, SkeletonTypes } from '@vanguard/Skeleton/Skeleton';
import React, { useEffect } from 'react';

import styles from './CompetitorsMap.module.scss';
import { CompetitorsMapSidebarContainer } from './CompetitorsMapSidebar/CompetitorsMapSidebar';

export interface CompetitorsMapProps {
  testId?: string;
  ownBusiness: CompetitorMapItem;
  competitors: LocationCompetitor[];
  competitorsMapItems: CompetitorMapItem[];
  clickedCompetitorIndex: number;
  hoveredCompetitorIndex: number;
  cityName: string;
  isCompetitorsLoading: boolean;
  rankedBy: string;
  className?: string;
  showTargetRegionOverlay?: boolean;
  hasSidebarPositionCircle?: boolean;
  ratingColor?: string;
  languageCode: string;
}

export const CompetitorsMap = (props: CompetitorsMapProps) => {
  const { testId = 'CompetitorsMap', className, isCompetitorsLoading, competitors } = props;

  const dispatch = useAppDispatch();
  const { setCompetitors, setOwnBusiness } = CompetitorsMapSlice;

  useEffect(() => {
    if (!isCompetitorsLoading && competitors.length) {
      const mappedCompetitors = mapCompetitors(competitors);
      dispatch(setCompetitors(mappedCompetitors));
      dispatch(setOwnBusiness(getOwnBusiness(mappedCompetitors)));
    }
  }, [competitors, isCompetitorsLoading]);

  /**
   * Loading State
   */
  if (isCompetitorsLoading) {
    return (
      <ComponentContainer testId={`${testId}_Loading`} className={classNames(styles.componentContainer, className)}>
        <Skeleton type={SkeletonTypes.fill} />
      </ComponentContainer>
    );
  }

  /**
   * Return view
   * ---
   */
  return (
    <ComponentContainer testId={testId} className={classNames(styles.componentContainer, className)}>
      <Render if={deviceService.isDesktop()}>
        <CompetitorsMapGoogleMap {...props} />
      </Render>

      <CompetitorsMapSidebarContainer {...props} />
    </ComponentContainer>
  );
};
