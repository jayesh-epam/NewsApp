export const useNavigation = () => ({
  navigate: jest.fn(),
  goBack: jest.fn(),
});

export const useRoute = () => ({
  params: {},
});

export const NavigationContainer = ({ children }) => children;
