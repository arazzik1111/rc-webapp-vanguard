// import React, { ReactNode } from "react";
// import { faker } from "@faker-js/faker";
// import { ListItemsProps } from "@vanguard/ListItems/ListItems";
// import { Rating } from "@vanguard/Rating/Rating";
// import { dFlex } from "@globalStyles";
//
// export const ListItemsMock = () => {
//   const mockData = [];
//   const ListItemMock = () => {
//     return {
//       left: faker.number.int(9),
//       title: faker.word.words(4),
//       content: (
//         <div className={dFlex}>
//           <Rating
//             valueSize={12}
//             valueColor={"--n500"}
//             value={parseFloat(String(faker.number.float(5)))}
//             size={12}
//             color={"#B6C1D3"}
//           />
//           &nbsp;&nbsp;{"(" + faker.number.int(200) + ")"}
//         </div>
//       ),
//       last: faker.address.streetAddress() + faker.address.city() + faker.address.country(),
//       right: <img src={faker.image.avatar()} />,
//       highlited: faker.datatype.boolean(),
//     };
//   };
//
//   for (let i = 0; i <= 3; i++) {
//     let item = ListItemMock();
//     mockData.push(item);
//   }
//   return mockData;
// };
