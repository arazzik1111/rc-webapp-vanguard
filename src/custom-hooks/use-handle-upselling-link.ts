import { useGlobalSlice } from '@custom-hooks/jwt-hooks/use-global-slice';
import { useAppDispatch } from '@custom-hooks/use-app-dispatch';
import { getPathId } from '@helpers/get-path-id';
import { showResellerUpsellingModal } from '@helpers/resellers/show-reseller-upselling-modal';
import { ProductRatePlanUpgradeMethodUpsellingLinkType } from '@models/swagger/App/Domain/Product/Entities/ProductRatePlans/Upgrades/ProductRatePlanUpgradeMethod';
import { AppliedFeatureFlagUpgrade } from '@models/swagger/App/Domain/Product/Entities/Products/FeatureFlags/AppliedFeatureFlagUpgrade';
import { AppliedFeatureFlagUpgrades } from '@models/swagger/App/Domain/Product/Entities/Products/FeatureFlags/AppliedFeatureFlagUpgrades';
import { GaStore } from '@stores/swagger/GaStore';
import { rcWindow } from '@stores/window.store';

const getHighestPriorityUpgrade = (upgrades?: AppliedFeatureFlagUpgrades): AppliedFeatureFlagUpgrade | null => {
  let highestPriorityUpgrade: AppliedFeatureFlagUpgrade | null = null;
  let highestPriority = -1;

  if (upgrades && upgrades.elements) {
    upgrades.elements.forEach((upgrade) => {
      const currentUpgradePriority = upgrade.upgradeProductRatePlanPriority ?? 0;
      if (currentUpgradePriority > highestPriority) {
        highestPriority = currentUpgradePriority;
        highestPriorityUpgrade = upgrade;
      }
    });
  }

  return highestPriorityUpgrade;
};

export const useHandleUpsellingLink = (upgrades?: AppliedFeatureFlagUpgrades): (() => void) => {
  const linkObj = getHighestPriorityUpgrade(upgrades);
  const link = linkObj?.upgradeMethod?.upsellingLink ?? '';
  const dispatch = useAppDispatch();
  const { apiUserId, subscriptionsProducts, hasPaidSubscription } = useGlobalSlice();
  return () => {
    if (!linkObj || !link || link.length === 0) {
      console.log('no upgrades found', upgrades);
      return null;
    }
    localStorage.setItem('upsellRedirectUrl', window.location.href);

    // special case for Ionos bkshop
    const apiId = parseInt(String(apiUserId));
    if (apiId && apiId == 176) {
      if (subscriptionsProducts && subscriptionsProducts.length > 0) {
        const products = JSON.parse(subscriptionsProducts) ?? null;
        if (
          products &&
          products.vision === true &&
          products.seo === false &&
          products.local === false &&
          products.ads === false &&
          hasPaidSubscription === false
        ) {
          console.log('upselling initiated for url: ', link);
          dispatch(
            GaStore.putGaAccountUpsellingInitiatedBySiteIdThunk({
              siteId: getPathId(),
              requestBody: {
                upselling_link: link,
              },
            }),
          );
          const resellerUpsellingModal = showResellerUpsellingModal(null, link, parseInt(String(apiUserId)));
          resellerUpsellingModal.open();
          return;
        } else if (!(window.location === window.parent.location || window.self === window.top)) {
          rcWindow.top.location.replace(link);
          return;
        }
      }
    }
    window.location.href = link;
    //TODO this are not used just prepared do we use them ?
    switch (linkObj.upgradeMethod?.upsellingLinkType) {
      case ProductRatePlanUpgradeMethodUpsellingLinkType.EXTERNAL_ACCOUNT_SPECIFIC:
        break;
      case ProductRatePlanUpgradeMethodUpsellingLinkType.EXTERNAL_GENERIC:
        break;
      case ProductRatePlanUpgradeMethodUpsellingLinkType.INTERNAL_PARTNER_SPECIFIC:
        break;
      case ProductRatePlanUpgradeMethodUpsellingLinkType.INTERNAL_GENERIC:
        break;
    }
  };
};

export const getUpgradeName = (upgrades?: AppliedFeatureFlagUpgrades): string => {
  const linkObj = getHighestPriorityUpgrade(upgrades);
  const name = linkObj?.upgradeProductRatePlanName;
  return name ?? '';
};
