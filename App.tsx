import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenContext from "./ScreenContext";
import { Auth, Posts } from "./src/screens";
import { useState, useEffect } from "react";
import { useWindowDimensions } from "react-native";

export type StackParamList = {
  Auth: undefined;
  Posts: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  const [isTablet, setIsTablet] = useState<boolean>(false);

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width > 600) {
      setIsTablet(true);
    } else {
      setIsTablet(false);
    }
  }, [width]);

  return (
    <ScreenContext.Provider value={{ isTablet }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"Auth"}
        >
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="Posts" component={Posts} />
        </Stack.Navigator>
      </NavigationContainer>
    </ScreenContext.Provider>
  );
}
