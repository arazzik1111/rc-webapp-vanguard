// import React from "react";
// import { fireEvent, render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import { AIAssistantPanel } from "./AIAssistantPanel";

// describe("AIAssistantPanel", () => {
//   it("renders without crashing", () => {
//     const setValueMock = jest.fn();
//     const setStatusMock = jest.fn();
//     const generateCallback = jest.fn();

//     const { container } = render(
//       <AIAssistantPanel
//         id="test"
//         value=""
//         setValue={setValueMock}
//         status="open"
//         setStatus={setStatusMock}
//         anchor={document.createElement("div")}
//         generateCallback={generateCallback}
//       />,
//     );

//     expect(container).toBeInTheDocument();
//   });

//   it("sets status to 'closed' when 'Escape' key is pressed", () => {
//     const setValueMock = jest.fn();
//     const setStatusMock = jest.fn();
//     const generateCallback = jest.fn();

//     render(
//       <AIAssistantPanel
//         id="test"
//         value=""
//         setValue={setValueMock}
//         status="open"
//         setStatus={setStatusMock}
//         anchor={document.createElement("div")}
//         generateCallback={generateCallback}
//       />,
//     );

//     const event = new KeyboardEvent("keydown", {
//       key: "Escape",
//     });

//     document.dispatchEvent(event);
//     expect(setStatusMock).toHaveBeenCalledWith("closed");
//   });

//   it("calls 'onAdjustClick' when an adjust option is clicked", () => {
//     const setValueMock = jest.fn();
//     const setStatusMock = jest.fn();
//     const onAdjustClickMock = jest.fn();
//     const generateCallback = jest.fn();

//     render(
//       <AIAssistantPanel
//         id="test"
//         value=""
//         setValue={setValueMock}
//         status="adjust"
//         setStatus={setStatusMock}
//         anchor={document.createElement("div")}
//         onAdjustClick={onAdjustClickMock}
//         generateCallback={generateCallback}
//       />,
//     );

//     // find an adjust option
//     const adjustOption = screen.getByText(/Expand/i);
//     fireEvent.click(adjustOption);

//     expect(onAdjustClickMock).toHaveBeenCalled();
//   });
// });
