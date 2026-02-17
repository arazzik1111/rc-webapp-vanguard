import { CompetitorMapItem } from '@common/CompetitorsMap/CompetitorsMap.slice';
import { uuidv4 } from '@helpers/generate-uid';
import { LocationCompetitor } from '@models/swagger/App/Domain/Presence/Entities/Locations/Competitors/LocationCompetitor';
import { LocationMediaItemScope } from '@models/swagger/App/Domain/Presence/Entities/Locations/MediaItems/LocationMediaItem';

export const mapCompetitors = (competitorsUnmapped: LocationCompetitor[]): CompetitorMapItem[] => {
  const result: CompetitorMapItem[] = [];

  competitorsUnmapped.map((item, index) => {
    const logoUrl = (item?.mediaItems?.elements ?? [])?.filter(
      (mediaItem) => mediaItem.scope === LocationMediaItemScope.PHOTO,
    )[0]?.publicUrl;
    const primaryCategoryName =
      item?.categories?.elements && item?.categories?.elements.length ? item.categories.elements[0].name : undefined;

    result.push({
      index: index,
      id: item.externalId ?? uuidv4(),
      position: index + 1,
      rating: item.reputation?.averageRating ?? 0,
      reviewsCount: item.reputation?.totalReviews ?? 0,
      imageUrl: logoUrl,
      categoryName: primaryCategoryName,
      formattedAddress: item.address?.formattedAddress,
      cityName: item.address?.city?.name,
      companyName: item?.company?.legalEntity?.fullName ?? '',
      isOwnLocation: !!item.isOwnLocation,
      lat: item.address?.geoPoint?.lat ?? 0,
      lng: item.address?.geoPoint?.lng ?? 0,
    });
  });

  return result;
};

export const getOwnBusiness = (competitors: CompetitorMapItem[]): CompetitorMapItem | undefined => {
  let result: CompetitorMapItem | undefined = undefined;

  competitors.map((item) => {
    if (item.isOwnLocation) {
      result = item;
    }
  });

  if (result === undefined) {
    console.error('CompetitorsMap | Own business not found in competitors list', competitors);
  }

  return result;
};
