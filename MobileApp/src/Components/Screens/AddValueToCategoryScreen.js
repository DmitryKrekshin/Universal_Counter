import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, useWindowDimensions, Animated } from "react-native";

const AddValueToCategoryScreen = ({ navigation, route }) => {
  const category = route.params;
  const {height} = useWindowDimensions();

  const [categoryName, setCategoryName] = useState("");

  React.useEffect(() => {
    navigation.setOptions({ title: category.Name });
    setCategoryName(category.Name);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Pressable style={[StyleSheet.absoluteFill, { backgroundColor: "rgba(0,0,0,0,7)" }]}
                 onPress={navigation.goBack} />
      <Animated.View style={{ height: height, width: "100%", backgroundColor: "#fff" }}>
        <Text>{categoryName}</Text>
      </Animated.View>
    </View>
  );
};

export default AddValueToCategoryScreen;
