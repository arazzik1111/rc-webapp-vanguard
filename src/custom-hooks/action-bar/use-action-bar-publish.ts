// import { useEffect, useState } from "react";
// import { actionBarService } from "@vanguard/ActionBar/ActionBar.service";
// import {
//   useInvalidateListingServicesSettings,
//   useListingServicesSettings,
// } from "@redux-stores/settings/listing-services-settings.store";
//
// export const useActionBarPublish = () => {
//   const invalidateListingServicesSettings = useInvalidateListingServicesSettings();
//   const { isValid } = useListingServicesSettings();
//
//   const [isLoading, setIsLoading] = useState(true);
//
//   const checkSyncStatus = async () => {
//     const listingServices = await invalidateListingServicesSettings();
//     if (listingServices.isOutOfSync && listingServices.hasAnyConnection) {
//       actionBarServiceAddPublishMessage();
//     }
//   };
//
//   useEffect(() => {
//     if (isValid) {
//       setIsLoading(false);
//     }
//   }, [isValid]);
//
//   useEffect(() => {
//     if (!isLoading) {
//       checkSyncStatus();
//     }
//   }, [isLoading]);
// };
//
// const actionBarServiceAddPublishMessage = () => {
//   actionBarService.addMessage(
//     {
//       type: "warning",
//       title: "Your profile has un-published changes",
//       description:
//         "You made changes to your profile, but they weren't published. If you don't update the profile, the information that people see may be out of date and can negatively impact your online presence.",
//       button: {
//         text: "Go to Publishing",
//         onClick: () => {
//           document.location.href = "/customer/presence/listings";
//         },
//       },
//     },
//     {
//       id: "ACTION_BAR_REPUBLISH_MESSAGE",
//     },
//   );
// };
