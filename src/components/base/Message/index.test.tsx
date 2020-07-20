import Message from "./index";
import * as ReactDOM from "react-dom";

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("<Message />", () => {
  it("message success", () => {
    Message.success("success.");
    expect(ReactDOM.render).toHaveBeenCalled();
    // expect(Message.success).toHaveBeenCalledWith("success.");
    // expect(Message.toast).toHaveBeenCalled();
  });

  // it("message warning", () => {
  //   expect(Message.success("warning.")).toContain("warning.");
  // });

  // it("message info", () => {
  //   expect(Message.success("info.")).toContain("info.");
  // });

  // it("message error", () => {
  //   expect(Message.success("error.")).toContain("error.");
  // });

  // it("message toast", () => {
  //   expect(Message.success("toast.")).toContain("toast.");
  // });
});
