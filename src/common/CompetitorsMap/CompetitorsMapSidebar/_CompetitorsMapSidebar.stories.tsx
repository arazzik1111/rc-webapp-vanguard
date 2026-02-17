// import { CompetitorsMapSidebar, CompetitorsMapSidebarProps } from "./CompetitorsMapSidebar";
// import React from "react";
// import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";
// import { mapStorybookActionToProps } from "@test-utils/map-storybook-action-to-props";
// import { getPresenceInsightsMocks } from "@mocks/get-presence-insights-mocks";
//TODO Fix storybook
// export default SbDecorator({
//   title: "components/CompetitorsMap/CompetitorsMapSidebar",
//   component: CompetitorsMapSidebar,
//   extra: {
//     ...disableControls([""]),
//   },
// });
//
// /**
//  * Default props of all the stories
//  * If the storybook user did not add anything this will be chosen
//  * */
// const defaultProps: CompetitorsMapSidebarProps = {
//   competitors: getPresenceInsightsMocks.competitors.elements,
//   businessVisibility: getPresenceInsightsMocks.businessVisibility,
//   business: getPresenceInsightsMocks.project.business.businessLocations.elements[0],
// };
//
// export const CompetitorsMapSidebarStory = (props: CompetitorsMapSidebarProps) => {
//   /**
//    * Here we can add story specific props
//    * */
//   const propsMock = mapStorybookActionToProps(props, {
//     ...defaultProps,
//   });
//
//   return (
//     <div>
//       <CompetitorsMapSidebar {...propsMock}>ImplementME</CompetitorsMapSidebar>
//     </div>
//   );
// };
