import { BusinessProcessorBusinessListing } from './BusinessProcessorBusinessListing';
import { BusinessProcessorCampaign } from './BusinessProcessorCampaign';

export type DDCAC = {
  _campaign: BusinessProcessorCampaign;
  result: Array<{
    bl: BusinessProcessorBusinessListing;
    position: number;
    date: string;
    criterion_id: string;
    cid: string;
  }>;
};
