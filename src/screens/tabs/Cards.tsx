import {
  Image,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import Card from "../../../components/Card";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";

const Cards = () => {
  const data = [
    {
      image: require("../../../assets/cardBackground.jpg"),
    },
    {
      image: require("../../../assets/cardBackground2.jpg"),
    },
    {
      image: require("../../../assets/cardBackground3.jpeg"),
    },
  ];
  const { width, height } = useWindowDimensions();

  const activeIndex = useSharedValue(0);

  const plusIcon = require("../../../assets/plus.png");

  return (
    <GestureHandlerRootView
      style={{ flex: 1, backgroundColor: "#252525", alignItems: "center" }}
    >
      {data.map((item, index) => (
        <Card
          key={index}
          item={item}
          index={index}
          totalCards={data.length}
          maxVisibleItems={3}
          activeIndex={activeIndex}
        />
      ))}
      <TouchableOpacity
        style={{
          width: 0.087 * height,
          height: 0.087 * height,
          borderRadius: 0.044 * height,
          position: "absolute",
          bottom: 0.1 * height,
          right: 0.073 * width,
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={plusIcon}
          style={{ width: 0.014 * height, height: 0.014 * height }}
        />
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
};

export default Cards;
