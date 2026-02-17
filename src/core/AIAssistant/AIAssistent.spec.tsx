// import React, { useState } from "react";
// import { render, fireEvent, screen, waitFor } from "@testing-library/react";
// import { AIAssistant } from "./AIAssistant";
// import { Textarea } from "@vanguard/Textarea/Textarea";

// jest.mock("lottie-web");
// jest.mock("@vanguard/LottieAnimationLoader/LottieAnimationLoader", () => null);

// jest.mock("@stores/swagger/client/AiStore", () => ({
//   aiStore: {
//     postClientAiTextAdjustByLocationId: jest.fn().mockReturnValue({
//       aiText: {
//         adjustedText: "Adjusted text",
//         objectType: "App\\Domain\\AI\\Entities\\Text\\AIText",
//       },
//     }),
//   },
// }));

// jest.mock("@helpers/get-path-id", () => ({
//   getPathId: jest.fn().mockReturnValue(1),
// }));

// describe("AIAssistant", () => {
//   it("renders without crashing", () => {
//     const [text, setText] = ["string", jest.fn()];

//     const generateCallbackMock = () =>
//       new Promise<string>((resolve) => {
//         setTimeout(() => {
//           resolve("Generated text");
//         }, 2000);
//       });

//     const { container } = render(
//       <AIAssistant id={"test"} value={text} setValue={setText} generateCallback={generateCallbackMock}>
//         <Textarea
//           value={text}
//           counter={false}
//           onChange={(e) => {
//             setText(e.target.value);
//           }}
//         />
//       </AIAssistant>,
//     );

//     expect(container).toBeInTheDocument();
//   });

//   it("calls generateCallback when Generate button is clicked", async () => {
//     const [text, setText] = ["string", jest.fn()];
//     const generateCallbackMock = jest.fn().mockReturnValue(
//       () =>
//         new Promise<string>((resolve) => {
//           setTimeout(() => {
//             resolve("Generated text");
//           }, 2000);
//         }),
//     );

//     const { container } = render(
//       <AIAssistant id={"test"} value={text} setValue={setText} generateCallback={generateCallbackMock}>
//         <Textarea
//           value={text}
//           counter={false}
//           onChange={(e) => {
//             setText(e.target.value);
//           }}
//         />
//       </AIAssistant>,
//     );

//     fireEvent.click(screen.getByText(/Generate/i));
//     await waitFor(() => expect(generateCallbackMock).toHaveBeenCalledTimes(1));
//   });

//   it("sets status to 'adjust' when Adjust button is clicked", async () => {
//     const setStatusMock = jest.fn();
//     const generateCallbackMock = jest.fn();
//     const setValueMock = jest.fn();

//     jest.spyOn(React, "useState").mockReturnValue(["open", setStatusMock]);

//     render(
//       <AIAssistant id="test" value="" setValue={setValueMock} generateCallback={generateCallbackMock}>
//         <Textarea
//           value={""}
//           counter={false}
//           onChange={(e) => {
//             setValueMock(e.target.value);
//           }}
//         />
//       </AIAssistant>,
//     );

//     fireEvent.click(screen.getByText(/Adjust/i));
//     await waitFor(() => expect(setStatusMock).toHaveBeenCalledWith("adjust"));
//   });

//   it("calls generateCallback when Try again button is clicked", async () => {
//     const setStatusMock = jest.fn();
//     const generateCallbackMock = jest.fn();
//     const setValueMock = jest.fn();

//     jest.spyOn(React, "useState").mockReturnValue(["open", setStatusMock]);

//     render(
//       <AIAssistant id="test" value="" setValue={setValueMock} generateCallback={generateCallbackMock}>
//         <Textarea
//           value={""}
//           counter={false}
//           onChange={(e) => {
//             setValueMock(e.target.value);
//           }}
//         />
//       </AIAssistant>,
//     );

//     fireEvent.click(screen.getByText(/Try again/i));
//     await waitFor(() => expect(generateCallbackMock).toHaveBeenCalled());
//   });

//   it("sets status to 'closed' when Keep button is clicked", async () => {
//     const setStatusMock = jest.fn();
//     const generateCallbackMock = jest.fn();
//     const setValueMock = jest.fn();

//     jest.spyOn(React, "useState").mockReturnValue(["open", setStatusMock]);

//     render(
//       <AIAssistant id="test" value="" setValue={setValueMock} generateCallback={generateCallbackMock}>
//         <Textarea
//           value={""}
//           counter={false}
//           onChange={(e) => {
//             setValueMock(e.target.value);
//           }}
//         />
//       </AIAssistant>,
//     );

//     fireEvent.click(screen.getByText(/Keep/i));
//     await waitFor(() => expect(setStatusMock).toHaveBeenCalledWith("closed"));
//   });

//   it("sets status to 'closed' when 'Escape' key is pressed", () => {
//     const setStatusMock = jest.fn();
//     const generateCallbackMock = jest.fn();
//     const setValueMock = jest.fn();

//     jest.spyOn(React, "useState").mockReturnValue(["open", setStatusMock]);

//     render(
//       <AIAssistant id="test" value="" setValue={setValueMock} generateCallback={generateCallbackMock}>
//         <Textarea
//           value={""}
//           counter={false}
//           onChange={(e) => {
//             setValueMock(e.target.value);
//           }}
//         />
//       </AIAssistant>,
//     );

//     const event = new KeyboardEvent("keydown", {
//       key: "Escape",
//     });

//     document.dispatchEvent(event);
//     expect(setStatusMock).toHaveBeenCalledWith("closed");
//   });
// });
