// import React, { useState } from "react";
// import { SbDecorator } from "@test-utils/get-storybook-decorator";
// import { AIAssistant, AIAssistantProps } from "./AIAssistant";
// import { Textarea } from "@vanguard/Textarea/Textarea";
// import { uuidv4 } from "@helpers/generate-uid";
// import { AIAssistantMockRequestAdjust } from "./AIAssistent.mocks";

// export default SbDecorator({
//   title: "Vanguard/AIAssistant",
//   component: AIAssistant,
//   mocks: [AIAssistantMockRequestAdjust],
// });

// const Container = (props: { children: React.ReactNode }) => {
//   return (
//     <div style={{ minWidth: "600px", maxWidth: "800px", width: "100%", minHeight: "500px" }}>{props.children}</div>
//   );
// };

// export const AIAssistantTextareaStory = (props: AIAssistantProps) => {
//   const [text, setText] = useState("");

//   const generateCallback = () =>
//     new Promise<string>((resolve) => {
//       setTimeout(() => {
//         resolve(
//           "Thank you so much, Victor Coltisor, for your incredibly kind words and this amazing 5-star review! We are thrilled to hear that you had such a positive experience with us at 35mms. We aim to provide not just ordinary photography, but to create beautiful and artistic memories for our clients. It's fantastic to know that you felt relaxed and comfortable throughout the photoshoot, especially with your young kids. We always strive to make our clients feel at ease and capture their unique dynamics. Moreover, we're glad that the final images exceeded your expectations and that the editing was tastefully done. It means a lot that you appreciate the quality of our service, and we're delighted to hear that you found our pricing reasonable and the turn-around time impressive. We're truly grateful for your recommendation, and we can't wait to welcome you back next time you're in need of professional photos. Thank you for allowing us to capture your beautiful family in such a unique way. It was an absolute pleasure working with you!",
//         );
//       }, 2000);
//     });

//   return (
//     <Container>
//       <AIAssistant
//         id={"AIAssistantStorybook_" + uuidv4()}
//         generateCallback={generateCallback}
//         value={text}
//         setValue={setText}
//       >
//         <Textarea
//           value={text}
//           counter={false}
//           onChange={(e) => {
//             setText(e.target.value);
//           }}
//         />
//       </AIAssistant>
//     </Container>
//   );
// };
