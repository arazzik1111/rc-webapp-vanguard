import { ProductRatePlan } from '@models/swagger/App/Domain/Product/Entities/ProductRatePlans/ProductRatePlan';
import { ProductRatePlans } from '@models/swagger/App/Domain/Product/Entities/ProductRatePlans/ProductRatePlans';

export const useGetHighestPriorityProductRatePlan = (
  productRatePlans: ProductRatePlans | undefined,
): ProductRatePlan | undefined => {
  if (!productRatePlans || !productRatePlans.elements) {
    return undefined;
  }

  let highestPriorityProductRatePlan: ProductRatePlan | undefined = undefined;
  productRatePlans.elements.forEach((productRatePlan) => {
    const currentProductRatePlanPriority = productRatePlan.priority ?? 0;
    if (
      highestPriorityProductRatePlan === undefined ||
      currentProductRatePlanPriority > (highestPriorityProductRatePlan?.priority ?? 0)
    ) {
      highestPriorityProductRatePlan = productRatePlan;
    }
  });

  return highestPriorityProductRatePlan;
};
