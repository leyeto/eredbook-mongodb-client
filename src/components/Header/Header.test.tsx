import { screen, render, cleanup } from "@testing-library/react";
import { it, describe, expect, afterEach } from "vitest";
import Header from "./Header";

describe("Testing for Header.tsx", () => {
  afterEach(() => cleanup());
  it("Header has title name eRedBook Website", () => {
    render(<Header />);
    const title = screen.queryByText("eRedBook Website");
    console.log(title);

    expect(title).toBe("eRedBook Website");
  });
});
