import React, {useState} from "react";
import {Animated, Pressable, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import {useCardAnimation} from "@react-navigation/stack";

const AddValueToCategoryScreen = ({navigation, route}) => {
  const category = route.params;
  const {height} = useWindowDimensions();
  const {current} = useCardAnimation();

  const [categoryName, setCategoryName] = useState("");

  React.useEffect(() => {
    setCategoryName(category.Name);
  }, []);

  const styles = StyleSheet.create({
  viewAnimated: {
    width: '100%',
  },
  viewContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#E5E5E5',
    borderRadius: 20,
  },
});

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
      <Pressable style={[StyleSheet.absoluteFill, {backgroundColor: "rgba(0,0,0,0.7)"}]}
                 onPress={navigation.goBack}/>
      <Animated.View
        style={[
          {
            height: height,
            transform: [
              {
                translateY: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [height, height * 0.3],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
          styles.viewAnimated
        ]}>
        <View style={styles.viewContainer}>
          <Text>{categoryName}</Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default AddValueToCategoryScreen;
