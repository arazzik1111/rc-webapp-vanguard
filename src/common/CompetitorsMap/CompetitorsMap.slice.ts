import { ReduxGenerator } from '@helpers/redux-common';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * CompetitorsMap Type
 */
export type CompetitorMapItem = {
  index: number;
  id: string;
  position: number;
  rating: number;
  reviewsCount: number;
  imageUrl?: string;
  categoryName?: string;
  formattedAddress?: string;
  cityName?: string;
  lat: number;
  lng: number;
  companyName: string;
  isOwnLocation: boolean;
};

export type CompetitorsMapType = {
  competitors: CompetitorMapItem[];
  ownBusiness?: CompetitorMapItem;
  hoveredCompetitorIndex: number;
  clickedCompetitorIndex: number;
};

/**
 * State
 */
const initialState: CompetitorsMapType = {
  competitors: [],
  ownBusiness: undefined,
  hoveredCompetitorIndex: -1,
  clickedCompetitorIndex: -1,
};

/**
 * -----------------------------------------------------------------------------------------------------
 * REDUX SLICE
 * -----------------------------------------------------------------------------------------------------
 */
const G = new ReduxGenerator<CompetitorsMapType>();
const competitorsMapSlice = createSlice({
  name: 'competitorsMapSlice',
  initialState,
  reducers: {
    ...G.genAll(initialState),
    setHoveredCompetitor: (state, { payload }: PayloadAction<{ index: number; hovered: boolean }>) => {
      if (payload.hovered) {
        state.hoveredCompetitorIndex = payload.index;
      } else {
        state.hoveredCompetitorIndex = -1;
      }
    },
    setClickedCompetitor: (state, { payload }: PayloadAction<{ index: number }>) => {
      state.clickedCompetitorIndex = payload.index;
    },
  },
});

/**
 * Exports
 */
export const CompetitorsMapSlice = competitorsMapSlice.actions;
export const CompetitorsMapReducer = competitorsMapSlice.reducer;
