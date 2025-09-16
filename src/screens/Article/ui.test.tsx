import React from "react";
import { render, screen } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import Article from "./ui";

describe("Article Screen", () => {
  const renderWithNavigation = (component: React.ReactNode) => {
    return render(<NavigationContainer>{component}</NavigationContainer>);
  };

  it("renders article title", () => {
    renderWithNavigation(<Article article={{ title: "Test Article", content: "Some content", description:"Sample description" }} />);
    expect(screen.getByText("Test Article")).toBeTruthy();
  });

  it("renders article content", () => {
    renderWithNavigation(<Article article={{ title: "Sample", content: "This is body text", description: "Sample description", urlToImage:'https://picsum.photos/200/300' }} />);
    expect(screen.getByText("This is body text")).toBeTruthy();
  });
});
