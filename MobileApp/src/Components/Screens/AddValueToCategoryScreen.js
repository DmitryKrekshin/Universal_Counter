import React, { useState } from "react";
import { Animated, Pressable, StyleSheet, useWindowDimensions, View } from "react-native";
import Modal from "react-native-modal";
import { useCardAnimation } from "@react-navigation/stack";
import { Button, Input, Text } from "@rneui/themed";
import VirtualKeyboard from "react-native-virtual-keyboard";
import Icon from "react-native-vector-icons/FontAwesome5";
import { UpdateCategoryValue } from "../../Services/CategoryService";

const AddValueToCategoryScreen = ({ navigation, route }) => {
  const category = route.params;
  const { height } = useWindowDimensions();
  const { current } = useCardAnimation();

  const [value, setValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [comment, setComment] = useState("");

  const commentInputReference = React.createRef();

  const styles = StyleSheet.create({
    viewAnimated: {
      width: "100%",
    },
    viewContainer: {
      flex: 1,
      padding: 10,
      backgroundColor: "#E5E5E5",
      borderRadius: 20,
    },
    modalView: {
      justifyContent: "center",
      backgroundColor: "white",
      borderRadius: 20,
      padding: 20
    },
  });

  function openModal(){
    setModalVisible(true);
    commentInputReference.current?.focus();
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Modal isVisible={modalVisible} onBackdropPress={() => {
        setModalVisible(false);
      }}>
        <View style={styles.modalView}>
          <Text h4={true} style={{alignSelf: 'center'}}>Заметки</Text>
          <Input ref={commentInputReference} onChangeText={(value) => setComment(value)} />
          <View style={{flexDirection: "row", justifyContent: "flex-end"}}>
            <Button type="clear" onPress={() => {
              setComment("");
              setModalVisible(false);
            }}>Отмена</Button>
            <Button type="clear" onPress={() => setModalVisible(false)}>ОК</Button>
          </View>
        </View>
      </Modal>
      <Pressable style={[StyleSheet.absoluteFill, { backgroundColor: "rgba(0,0,0,0.7)" }]}
                 onPress={navigation.goBack} />
      <Animated.View
        style={[
          {
            height: height,
            transform: [
              {
                translateY: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [height, height * 0.50],
                  extrapolate: "clamp",
                }),
              },
            ],
          },
          styles.viewAnimated,
        ]}>
        <View style={styles.viewContainer}>
          <View style={{ borderBottomColor: "black", borderBottomWidth: StyleSheet.hairlineWidth }}>
            <Text h1={true} style={{ textAlign: "center" }}>{value}</Text>
          </View>
          <View style={{ borderBottomColor: "black", borderBottomWidth: StyleSheet.hairlineWidth }}>
            <Button type="clear" titleStyle={{ color: "grey" }} onPress={() => openModal()}>{comment ? comment : "Заметки..."}</Button>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 5 }}>
              <VirtualKeyboard decimal={true} onPress={val => setValue(val)} />
            </View>
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1 }}></View>
              <View style={{ flex: 1 }}>
                <Button buttonStyle={{ height: "100%" }} onPress={() => {
                  UpdateCategoryValue(category.Id, parseFloat(category.Value) + parseFloat(value));
                  navigation.goBack();
                }}>
                  <Icon name="check" />
                </Button>
              </View>
            </View>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default AddValueToCategoryScreen;
