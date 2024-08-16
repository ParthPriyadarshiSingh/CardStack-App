import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, TouchableOpacity, useWindowDimensions } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Membership from "../screens/tabs/Membership";
import History from "../screens/tabs/History";
import Safety from "../screens/tabs/Safety";
import Deals from "../screens/tabs/Deals";
import Travel from "../screens/tabs/Travel";
import Cards from "../screens/tabs/Cards";

const Tab = createMaterialTopTabNavigator();

const MyTabBar = ({ state, descriptors, navigation }: any) => {
  const { height } = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 0.041 * height,
      }}
    >
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        let IconComponent;
        let iconName;
        let color = isFocused ? "#fff" : "#909090";

        switch (route.name) {
          case "Cards":
            IconComponent = Ionicons;
            iconName = "finger-print-outline";
            break;
          case "Travel":
            IconComponent = MaterialIcons;
            iconName = "flight-takeoff";
            break;
          case "Deals":
            IconComponent = Ionicons;
            iconName = "water-outline";
            break;
          case "Safety":
            IconComponent = MaterialIcons;
            iconName = "health-and-safety";
            break;
          case "History":
            IconComponent = MaterialIcons;
            iconName = "history-edu";
            break;
          case "Membership":
            IconComponent = MaterialIcons;
            iconName = "card-membership";
            break;
          default:
            IconComponent = null;
            iconName = null;
            break;
        }

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            key={index}
          >
            {IconComponent && iconName && (
              <IconComponent
                name={iconName}
                color={color}
                size={route.name === "Cards" ? 0.04 * height : 0.029 * height}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const HomeTopTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen name="Cards" component={Cards} />
        <Tab.Screen name="Travel" component={Travel} />
        <Tab.Screen name="Deals" component={Deals} />
        <Tab.Screen name="Safety" component={Safety} />
        <Tab.Screen name="History" component={History} />
        <Tab.Screen name="Membership" component={Membership} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default HomeTopTabs;
