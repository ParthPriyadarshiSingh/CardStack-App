import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import HomeTopTabs from "./src/navigators/HomeTopTabs";

export default function App() {
  const { width, height } = useWindowDimensions();

  const circleIcon = require("./assets/circularGradient.png");
  const bulbIcon = require("./assets/bulb.png");

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: "#000" }}>
        <View
          style={{
            paddingHorizontal: 0.037 * width,
            gap: 0.017 * height,
            paddingBottom: 0.046 * height,
          }}
        >
          <View style={styles.horizontalContainer}>
            <Image
              source={circleIcon}
              style={{ width: 0.061 * height, height: 0.062 * height }}
            />
            <TouchableOpacity
              style={[
                styles.tipsButton,
                { gap: 0.015 * width, padding: 0.026 * width },
              ]}
            >
              <Image
                source={bulbIcon}
                style={{ width: 0.02 * height, height: 0.02 * height }}
              />
              <Text
                style={{
                  color: "#fff",
                  fontSize: 0.017 * height,
                  fontFamily: "Roboto",
                }}
              >
                Tips
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: "#fff",
              fontSize: 0.032 * height,
              fontWeight: "600",
              lineHeight: 0.038 * height,
              fontFamily: "Helvetica",
            }}
          >
            All your credit cards
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 0.018 * height,
              lineHeight: 0.021 * height,
              fontFamily: "Helvetica",
            }}
          >
            Find all your credit cards here
          </Text>
        </View>
      </SafeAreaView>
      <HomeTopTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
  },
  horizontalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tipsButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#252525",
    borderRadius: 5,
  },
});
