import React, {useEffect, useState} from "react";
import {ScrollView} from "react-native";
import {Button, Input, Text} from "@rneui/themed";
import {SelectList} from "react-native-dropdown-select-list";
import {GetMeasurementUnits} from "../../Services/MeasurementUnitsService";
import IconPicker from "react-native-icon-picker";
import Icon from "react-native-vector-icons/FontAwesome5";
import ColorPicker from "react-native-wheel-color-picker";
import {
  AddCategory,
  UpdateCategoryColor,
  UpdateCategoryIcon,
  UpdateCategoryMeasurementUnitId,
  UpdateCategoryName
} from "../../Services/CategoryService";
import ViewMode from "../Enums/ViewMode";

const CategoryUpsert = ({navigation, route}) => {
  const category = route.params?.category;
  const viewMode = route.params?.viewMode ?? ViewMode.Create;

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

  const [categoryId, SetCategoryId] = useState(-1);
  const [name, SetName] = useState("");
  const [selectedMeasurementUnitId, SetSelectedMeasurementUnitId] = useState(-1);
  const [selectedIcon, SetSelectedIcon] = useState({icon: "wallet", family: FONT_AWESOME5_NAME});
  const [selectedColor, SetSelectedColor] = useState("#ffffff");

  const [measurementUnitIdDefaultValue, SetMeasurementUnitIdDefaultValue] = useState({});
  const [showIconPicker, SetShowIconPicker] = useState(false);
  const [measurementUnits, SetMeasurementUnits] = useState([]);

  const [isNameValid, SetIsNameValid] = useState(true);
  const [isMeasurementUnitValid, SetIsMeasurementUnitValid] = useState(true);

  useEffect(() => {
    GetMeasurementUnits((measurementUnits) => {
      let data = [];
      measurementUnits.forEach(fe => {
        data.push({key: fe.Id, value: fe.Name});
      });

      SetMeasurementUnits(data);
    });

    InitializeValues();
  }, []);

  // Set values of category for editing
  function InitializeValues() {
    if (category) {
      SetCategoryId(category.Id);
      SetName(category.Name);
      SetMeasurementUnitIdDefaultValue({key: category.MeasurementUnitId, value: category.MeasurementUnitName});
      SetSelectedIcon({icon: category.IconName, family: category.IconFamily});
      SetSelectedColor(category.ColorHEX);
    }
  }

  function IsNameValid(name) {
    return name.length >= 3;
  }

  function IsMeasurementUnitValid(value) {
    return value !== -1 && value !== 0;
  }

  function SaveCategory() {
    let isNameValid = IsNameValid(name);
    SetIsNameValid(isNameValid);
    let isMeasurementUnitValid = IsMeasurementUnitValid(selectedMeasurementUnitId);
    SetIsMeasurementUnitValid(isMeasurementUnitValid);

    if (!isNameValid) {
      return;
    }

    if (!isMeasurementUnitValid) {
      return;
    }

    if (viewMode === ViewMode.Create) {
      AddCategory(name, selectedMeasurementUnitId, selectedIcon.icon, selectedIcon.family, selectedColor);
      navigation.navigate("CategoryListScreen");
      return;
    }

    if (name !== category.Name && isNameValid) {
      UpdateCategoryName(categoryId, name);
    }

    if (selectedMeasurementUnitId !== category.MeasurementUnitId && isMeasurementUnitValid) {
      UpdateCategoryMeasurementUnitId(categoryId, selectedMeasurementUnitId);
    }

    if (selectedIcon.icon !== category.IconName) {
      UpdateCategoryIcon(categoryId, selectedIcon.icon, selectedIcon.family);
    }

    if (selectedColor !== category.ColorHEX) {
      UpdateCategoryColor(categoryId, selectedColor);
    }

    navigation.navigate("CategoryListScreen");
  }

  function RecordNameField(value) {
    let name = value.trim().replace(/\s\s+/g, ' ');
    SetIsNameValid(IsNameValid(name));
    SetName(name);
  }

  function RecordMeasurementUnitIdField(value) {
    SetIsMeasurementUnitValid(IsMeasurementUnitValid(value));
    SetSelectedMeasurementUnitId(value);
  }

  return (
    <ScrollView style={{paddingLeft: 15, paddingRight: 15}}>
      <Text h4={true}>Имя категории</Text>
      <Input value={name} onChangeText={(value) => RecordNameField(value)}/>
      {!isNameValid ? <Text style={{color: 'red'}}>Укажите имя категории</Text> : ''}

      <Text h4={true}>Ед. измерения</Text>
      <SelectList
        setSelected={(val) => RecordMeasurementUnitIdField(val)}
        defaultOption={measurementUnitIdDefaultValue}
        data={measurementUnits}
        save="key"
      />
      {!isMeasurementUnitValid ? <Text style={{color: 'red'}}>Выберите единицу измерения</Text> : ''}

      <Text h4={true}>Цвет</Text>
      <ColorPicker onColorChangeComplete={(color) => SetSelectedColor(color)} color={selectedColor}/>

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
            color={selectedColor}
          >
            <Icon name={selectedIcon.icon} size={20}/>
          </Button>
        }
        selectedIcon={selectedIcon}
      />

      <Button onPress={() => SaveCategory()} containerStyle={{marginBottom: 15}}>
        Сохранить
      </Button>
    </ScrollView>
  );
};

export default CategoryUpsert;
