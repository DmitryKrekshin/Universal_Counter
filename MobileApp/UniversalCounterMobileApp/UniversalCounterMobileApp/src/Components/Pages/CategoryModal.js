import React, {useEffect, useState} from 'react';
import {View} from "react-native";
import {Button, Input, Text} from "@rneui/themed";
import {SelectList} from "react-native-dropdown-select-list";
import {GetMeasurementUnits} from "../../Services/MeasurementUnitsService";
import IconPicker from "react-native-icon-picker";
import Icon from "react-native-vector-icons/FontAwesome5";
import ColorPicker from "react-native-wheel-color-picker";
import {AddCategory} from "../../Services/CategoryService";

const CategoryModal = props => {
  const [name, SetName] = useState('');
  const [selectedMeasurementUnitId, SetSelectedMeasurementUnitId] = useState(-1);
  const [selectedIcon, SetSelectedIcon] = useState({icon: 'wallet'});
  const [selectedColor, SetSelectedColor] = useState('#ffffff');

  const [showIconPicker, SetShowIconPicker] = useState(false);
  const [measurementUnits, SetMeasurementUnits] = useState([]);

  useEffect(() => {
    GetMeasurementUnits((measurementUnits) => {
      let data = [];
      measurementUnits.forEach(fe => {
        data.push({key: fe.Id, value: fe.Name});
      });

      SetMeasurementUnits(data);
    });
  }, []);

  function SaveCategory() {
    //add validation
    AddCategory(name, selectedMeasurementUnitId, selectedIcon.icon, selectedColor);
  }

  return (
    <View style={{padding: 15}}>
      <Text h4={true}>Имя категории</Text>
      <Input value={name} onChangeText={(value) => SetName(value)}/>

      <Text h4={true}>Ед. измерения</Text>
      <SelectList
        setSelected={(val) => SetSelectedMeasurementUnitId(val)}
        data={measurementUnits}
        save="key"
      />

      <Text h4={true} style={{marginTop: 10}}>Иконка</Text>
      <IconPicker
        showIconPicker={showIconPicker}
        onSelect={(icon) => {
          SetSelectedIcon(icon);
          SetShowIconPicker(false);
        }}
        toggleIconPicker={() => SetShowIconPicker(!showIconPicker)}
        iconDetails={[
          {
            family: 'FontAwesome5',
            icons: [
              "wallet",
              "hospital-user",
              "house-user",
              "user-alt-slash",
              "user-cog",
              "user-md",
              "user-tag",
              "user-slash",
            ]
          }
        ]}
        content={
          <Button
            buttonStyle={{
              width: 70,
              height: 70,
              borderRadius: 70,
              margin: 10
            }}
            onPress={() => {
              SetShowIconPicker(true)
            }}
          >
            <Icon name={selectedIcon.icon} size={20}/>
          </Button>
        }
      />

      <Text h4={true}>Цвет</Text>
      <ColorPicker
        onColorChangeComplete={(color) => SetSelectedColor(color)}
      />

      <Button
        onPress={() => SaveCategory()}
      >
        Сохранить
      </Button>
    </View>
  )
}

export default CategoryModal;
