// import { TableDataProps } from "@vanguard/Table/Table";
// import React from "react";
// import { Icon, IconSize } from "@vanguard/Icon/Icon";
// import { IconNames } from "@vanguard/Icon/IconNames";
// import { TableHeaderKeyword } from "../../components/presence/PresenceInsights/PresenceInsightsBody/PresenceKeywordsReport/PresenceKeywordsReport";
// import { StatusBadge } from "@vanguard/StatusBadge/StatusBadge";
// //@ts-ignore
// export const TableData: TableDataProps = {
//   options: {
//     postfixForColumn: [
//       {
//         columnAlias: "positionMap",
//         value: (value: number) => <TableCellCustomBadgeFn value={value} />,
//         valueParam: "offsetPositionOnMap",
//         style: {
//           paddingLeft: "24px",
//         },
//       },
//       {
//         columnAlias: "positionSearch",
//         value: (value: number) => <TableCellCustomBadgeFn value={value} />,
//         valueParam: "offsetPositionOnSearch",
//         style: {
//           paddingLeft: "24px",
//         },
//       },
//     ],
//     prefixForColumn: [
//       {
//         columnAlias: "keyword",
//         value: (
//           <Icon type={IconSize.small} fillColor={"var(--n400)"} color={"var(--n400)"}>
//             {IconNames.search}
//           </Icon>
//         ),
//         style: {
//           padding: "8px",
//         },
//       },
//       {
//         columnAlias: "positionMap",
//         value: (
//           <Icon type={IconSize.small} fillColor={"var(--n400)"} color={"var(--n400)"}>
//             {IconNames.location}
//           </Icon>
//         ),
//         style: {
//           width: "18px",
//           padding: "2px",
//         },
//       },
//     ],
//   },
//   columns: [
//     { alias: "keyword", text: "Keyword" },
//     {
//       alias: "positionMap",
//       text: () => <TableHeaderKeyword title={"Google Maps"} subtitle={"Koln, Innerstandt"} icon={"googlemaps"} />,
//       styles: { width: "220px" },
//     },
//     {
//       alias: "positionSearch",
//       text: () => <TableHeaderKeyword title={"Google Search"} subtitle={"Koln, Innerstandt"} icon={"googlesearch"} />,
//       styles: { width: "220px" },
//     },
//   ],
//   collections: [
//     { keyword: "incapable hot possible", positionMap: 2, positionSearch: 3, offsetPositionOnSearch: 2 },
//     { keyword: "glance initiative mill", positionMap: 6, positionSearch: 1, offsetPositionOnMap: -3 },
//     { keyword: "tomahawk koln", positionMap: 8, positionSearch: 4, offsetPositionOnSearch: 5 },
//     { keyword: "black angus koln", positionMap: 2, positionSearch: 3, offsetPositionOnSearch: 2 },
//     { keyword: "kobe beed koln", positionMap: 6, positionSearch: 1, offsetPositionOnMap: -3 },
//     { keyword: "prestige veil lease", positionMap: 8, positionSearch: 4, offsetPositionOnSearch: 5 },
//     { keyword: "troop kidney immune", positionMap: 2, positionSearch: 3, offsetPositionOnSearch: 2 },
//     { keyword: "generate hotdog solid", positionMap: 6, positionSearch: 1, offsetPositionOnMap: -3 },
//     { keyword: "tomahawk koln", positionMap: 8, positionSearch: 4, offsetPositionOnSearch: 5 },
//   ],
// };
//
// /**
//  * Component TableCellCustomBadgeFn
//  * ---------------------------------------------------------------------
//  */
// export type TableCellCustomBadgeFnProps = {
//   value?: number;
// };
// export const TableCellCustomBadgeFn = (props: TableCellCustomBadgeFnProps) => {
//   const { value } = props;
//   // @ts-ignore
//   const success: boolean = (value ?? false) > 0 ?? false;
//   //@ts-ignore
//   const status: StatusBadgeStatus = success ? "success" : "danger";
//   const icon: IconNames = success ? IconNames.arrowUp : IconNames.arrowDown;
//   return (
//     <StatusBadge status={status} text={""} numberValue={value} icon={icon} variant={"small"} iconVariant={"reverse"} />
//   );
// };
