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
  const { width, height } = useWindowDimensions();

  const plusIcon = require("../../../assets/plus.png");

  const animatedValue = useSharedValue(0);
  const currentIndex = useSharedValue(0);
  const prevIndex = useSharedValue(0);
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
    {
      image: require("../../../assets/cardBackground4.jpg"),
    },
    {
      image: require("../../../assets/cardBackground5.jpg"),
    },
  ];

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        backgroundColor: "#252525",
        alignItems: "center",
        paddingTop: 50,
      }}
    >
      <View
        style={{
          flex: 1,
          // justifyContent: "center",
          alignItems: "center",
        }}
      >
        {data.map((item, index) => (
          <Card
            key={index}
            item={item}
            index={index}
            maxVisibleItems={3}
            animatedValue={animatedValue}
            currentIndex={currentIndex}
            prevIndex={prevIndex}
            dataLength={data.length}
          />
        ))}
      </View>
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
