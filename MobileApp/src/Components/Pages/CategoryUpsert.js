import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { Button, Input, Text } from "@rneui/themed";
import { SelectList } from "react-native-dropdown-select-list";
import { GetMeasurementUnits } from "../../Services/MeasurementUnitsService";
import IconPicker from "react-native-icon-picker";
import Icon from "react-native-vector-icons/FontAwesome5";
import ColorPicker from "react-native-wheel-color-picker";
import { AddCategory } from "../../Services/CategoryService";

const CategoryUpsert = props => {
  const [name, SetName] = useState("");
  const [selectedMeasurementUnitId, SetSelectedMeasurementUnitId] = useState(-1);
  const [selectedIcon, SetSelectedIcon] = useState({ icon: "wallet", family: FONT_AWESOME5_NAME });
  const [selectedColor, SetSelectedColor] = useState("#ffffff");

  const [showIconPicker, SetShowIconPicker] = useState(false);
  const [measurementUnits, SetMeasurementUnits] = useState([]);

  const FONT_AWESOME5_NAME = "FontAwesome5";
  const FONT_AWESOME5_ICON_LIST = [
    "wallet",
    "wrench",
    "wine-bottle",
    "wifi",
    "walking",
    "utensils-alt",
    "trees",
    "taxi",
    "spa",
    "smoking",
    "sim-card",
    "shopping-card",
    "palette",
    "mug-hot",
    "mobile-alt",
    "lips",
    "hotel",
    "heart-circle",
    "hands-heart",
    "hamburger",
    "guitar",
  ];

  useEffect(() => {
    GetMeasurementUnits((measurementUnits) => {
      let data = [];
      measurementUnits.forEach(fe => {
        data.push({ key: fe.Id, value: fe.Name });
      });

      SetMeasurementUnits(data);
    });
  }, []);

  function SaveCategory() {
    //add validation
    AddCategory(name, selectedMeasurementUnitId, selectedIcon.icon, selectedIcon.family, selectedColor);
  }

  return (
    <ScrollView style={{ padding: 15 }}>
      <Text h4={true}>Имя категории</Text>
      <Input value={name} onChangeText={(value) => SetName(value)} />

      <Text h4={true}>Ед. измерения</Text>
      <SelectList
        setSelected={(val) => SetSelectedMeasurementUnitId(val)}
        data={measurementUnits}
        save="key"
      />

      <Text h4={true}>Цвет</Text>
      <ColorPicker onColorChangeComplete={(color) => SetSelectedColor(color)} />

      <Text h4={true} style={{ marginTop: 10 }}>Иконка</Text>
      <IconPicker
        showIconPicker={showIconPicker}
        onSelect={(icon) => {
          SetSelectedIcon(icon);
          SetShowIconPicker(false);
        }}
        toggleIconPicker={() => SetShowIconPicker(!showIconPicker)}
        iconDetails={[
          {
            family: FONT_AWESOME5_NAME,
            icons: FONT_AWESOME5_ICON_LIST,
          },
        ]}
        content={
          <Button
            buttonStyle={{
              width: 70,
              height: 70,
              borderRadius: 70,
              margin: 10,
            }}
            onPress={() => {
              SetShowIconPicker(true);
            }}
          >
            <Icon name={selectedIcon.icon} size={20} />
          </Button>
        }
      />

      <Button onPress={() => SaveCategory()}>
        Сохранить
      </Button>
    </ScrollView>
  );
};

export default CategoryUpsert;
