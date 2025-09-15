import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FeedContainer from "@/screens/Feed/container";
import ArticleContainer from "@/screens/Article/container";

export type RootStackParamList = {
  Feed: undefined;
  Article: { article: any };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Feed" component={FeedContainer} />
        <Stack.Screen name="Article" component={ArticleContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
