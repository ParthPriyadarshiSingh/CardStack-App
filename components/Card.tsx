import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";
import {
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

interface Props {
  item: any;
  index: number;
  totalCards: number;
  activeIndex: SharedValue<number>;
  maxVisibleItems: number;
}

const Card = ({
  item,
  index,
  totalCards,
  maxVisibleItems,
  activeIndex,
}: Props) => {
  const { height } = useWindowDimensions();

  const chipImage = require("../assets/chip.png");
  const wifiImage = require("../assets/wifi.png");
  const visaImage = require("../assets/visa.png");

  const flingUp = Gesture.Fling()
    .direction(Directions.UP)
    .onStart(() => {
      activeIndex.value = withTiming(activeIndex.value - 1, { duration: 300 });
    });
  const flingDown = Gesture.Fling()
    .direction(Directions.DOWN)
    .onStart(() => {
      activeIndex.value = withTiming(activeIndex.value + 1, { duration: 300 });
      if (activeIndex.value === totalCards) {
        return;
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      zIndex: totalCards - index,
      transform: [
        {
          translateY: interpolate(
            activeIndex.value,
            [index + 1, index, index - 1],
            [0, 0, -40]
          ),
        },
      ],
      opacity: interpolate(
        activeIndex.value,
        [index - 1, index, index + 1],
        [1 - 1 / maxVisibleItems, 1, 1]
      ),
    };
  });

  return (
    <GestureDetector gesture={Gesture.Exclusive(flingUp, flingDown)}>
      <Animated.View
        style={[
          {
            width: 0.41 * height,
            height: 0.26 * height,
            borderRadius: 0.017 * height,
            position: "absolute",
          },
          animatedStyle,
        ]}
      >
        <ImageBackground
          source={item.image}
          style={[styles.backgroundImage, { borderRadius: 0.017 * height }]}
          blurRadius={30}
        >
          <View style={{ padding: 0.021 * height, gap: 0.012 * height }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 0.016 * height,
                fontWeight: "600",
                letterSpacing: 1.01,
                fontFamily: "Space Grotesk Light",
              }}
            >
              Bank of Designers
            </Text>
            <View style={styles.horizontalContainer}>
              <Image
                source={chipImage}
                style={{ width: 0.046 * height, height: 0.046 * height }}
              />
              <Image
                source={wifiImage}
                style={{ width: 0.046 * height, height: 0.046 * height }}
              />
            </View>
            <Text
              style={{
                color: "#fff",
                fontSize: 0.028 * height,
                fontWeight: "600",
                letterSpacing: 1.04,
                fontFamily: "Space Grotesk Light",
              }}
            >
              3234 8678 4234 7628
            </Text>
          </View>
          <View
            style={[styles.lowerHalfContainer, { padding: 0.021 * height }]}
          >
            <View>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 0.01 * height,
                  lineHeight: 0.02 * height,
                  letterSpacing: 1.04,
                  fontFamily: "Space Grotesk Light",
                }}
              >
                Card Holder name
              </Text>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 0.02 * height,
                  lineHeight: 0.034 * height,
                  letterSpacing: 1.04,
                  fontFamily: "Space Grotesk Light",
                }}
              >
                Maya Singh
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 0.01 * height,
                  lineHeight: 0.02 * height,
                  letterSpacing: 1.04,
                  fontFamily: "Space Grotesk Light",
                }}
              >
                Expiry date
              </Text>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 0.02 * height,
                  lineHeight: 0.034 * height,
                  letterSpacing: 1.04,
                  fontFamily: "Space Grotesk Light",
                }}
              >
                08/24
              </Text>
            </View>
            <Image
              source={visaImage}
              style={{ width: 0.046 * height, height: 0.046 * height }}
            />
          </View>
        </ImageBackground>
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    overflow: "hidden",
  },
  horizontalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  lowerHalfContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Card;
