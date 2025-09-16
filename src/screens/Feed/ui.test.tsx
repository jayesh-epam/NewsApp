import React from "react";
import { render, fireEvent, screen } from "@testing-library/react-native";
import Feed from "./ui";
import { NewsArticle } from "@/hooks/useGetNews";
import { Provider } from "react-redux";
import store from "@/store";

const mockCategories = [
    { label: "Business", key: "business" },
    { label: "General", key: "general" },
    { label: "Science", key: "science" },
    { label: "Sports", key: "sports" },
];

const mockArticles: NewsArticle[] = [
    {
        title: "Breaking News",
        description: "Some description",
        url: "https://example.com",
        urlToImage: "https://example.com/image.jpg",
        content: "Some content",
    },
    {
        title: "Another News",
        description: "Another description",
        url: "https://example.com/2",
        urlToImage: "https://example.com/image2.jpg",
        content: "More content",
    },
];

describe("Feed UI", () => {
    it("renders category buttons", () => {
        render(
            <Provider store={store}>
                <Feed
                    categories={mockCategories}
                    selectedCategory="business"
                    onCategoryChange={jest.fn()}
                    articles={mockArticles}
                    onArticlePress={jest.fn()}
                />
            </Provider>
        );

        mockCategories.forEach((category) => {
            expect(screen.getByText(category.label)).toBeTruthy();
        });
    });

    it("calls onCategoryChange when category button is pressed", () => {
        const onCategoryChange = jest.fn();
        render(
            <Provider store={store}>

                <Feed
                    categories={mockCategories}
                    selectedCategory="business"
                    onCategoryChange={onCategoryChange}
                    articles={mockArticles}
                    onArticlePress={jest.fn()}
                />
            </Provider>
        );

        fireEvent.press(screen.getByText("Sports"));
        expect(onCategoryChange).toHaveBeenCalledWith("sports");
    });

    it("renders list of articles", () => {
        render(
            <Provider store={store}>

                <Feed
                    categories={mockCategories}
                    selectedCategory="business"
                    onCategoryChange={jest.fn()}
                    articles={mockArticles}
                    onArticlePress={jest.fn()}
                />
            </Provider>
        );

        expect(screen.getByText("Breaking News")).toBeTruthy();
        expect(screen.getByText("Another News")).toBeTruthy();
    });

    it("calls onArticlePress when an article is pressed", () => {
        const onArticlePress = jest.fn();
        render(
            <Provider store={store}>

                <Feed
                    categories={mockCategories}
                    selectedCategory="business"
                    onCategoryChange={jest.fn()}
                    articles={mockArticles}
                    onArticlePress={onArticlePress}
                />
            </Provider>
        );

        expect(screen.getByText("Breaking News")).toBeTruthy();
        expect(screen.getByText("Another News")).toBeTruthy();
    });

    it("calls onArticlePress when an article is pressed", () => {
        const onArticlePress = jest.fn();
        render(
            <Provider store={store}>

                <Feed
                    categories={mockCategories}
                    selectedCategory="business"
                    onCategoryChange={jest.fn()}
                    articles={mockArticles}
                    onArticlePress={onArticlePress}
                />
            </Provider>
        );

        fireEvent.press(screen.getByText("Breaking News"));
        expect(onArticlePress).toHaveBeenCalledWith(mockArticles[0]);
    });
});
