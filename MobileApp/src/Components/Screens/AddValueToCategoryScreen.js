import React, {useState} from "react";
import {Animated, Modal, Pressable, StyleSheet, useWindowDimensions, View} from "react-native";
import {useCardAnimation} from "@react-navigation/stack";
import {Button, Input, Text} from "@rneui/themed";
import VirtualKeyboard from "react-native-virtual-keyboard";
import Icon from "react-native-vector-icons/FontAwesome5";

const AddValueToCategoryScreen = ({navigation, route}) => {
  const category = route.params;
  const {height} = useWindowDimensions();
  const {current} = useCardAnimation();

  const [value, setValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

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
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
  });

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
      {/*<Modal*/}
      {/*  animationType='slide'*/}
      {/*  transparent={true}*/}
      {/*  visible={modalVisible}>*/}
      {/*  <View style={styles.centeredView}>*/}
      {/*    <View style={styles.modalView}>*/}
      {/*      <Text h4={true}>Заметки</Text>*/}
      {/*      <Input/>*/}
      {/*      <View style={{flexDirection: 'row'}}>*/}
      {/*        <Button type='clear' onPress={() => setModalVisible(false)}>Отмена</Button>*/}
      {/*        <Button type='clear'>ОК</Button>*/}
      {/*      </View>*/}
      {/*    </View>*/}
      {/*  </View>*/}
      {/*</Modal>*/}
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
                  outputRange: [height, height * 0.45],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
          styles.viewAnimated
        ]}>
        <View style={styles.viewContainer}>
          <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth}}>
            <Text h1={true} style={{textAlign: 'center'}}>{value}</Text>
          </View>
          <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth}}>
            <Button type="clear" titleStyle={{color: 'grey'}} onPress={() => setModalVisible(true)}>Заметки...</Button>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 5}}>
              <VirtualKeyboard decimal={true} onPress={val => setValue(val)}/>
            </View>
            <View style={{flex: 1}}>
              <View style={{flex: 1}}></View>
              <View style={{flex: 1}}>
                <Button buttonStyle={{height: '100%'}}>
                  <Icon name='check'/>
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
