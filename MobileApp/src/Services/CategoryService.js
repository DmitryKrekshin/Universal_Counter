import {GetContext} from "./DbContext";

const context = GetContext();
const TABLE_NAME = 'Category';

export function AddCategory(Name, MeasurementUnitId, IconName, IconFamily, ColorHEX) {
  const query = `insert into ${TABLE_NAME} (Name, MeasurementUnitId, IconName, IconFamily, ColorHEX) values ('${Name}', ${MeasurementUnitId}, '${IconName}', '${IconFamily}', '${ColorHEX}')`;
  _executeQuery(query);
}

export function UpdateCategoryName(Id, Name) {
  const query = `update ${TABLE_NAME} set Name = '${Name}' where Id = ${Id}`;
  _executeQuery(query);
}

export function UpdateCategoryMeasurementUnitId(Id, MeasurementUnitId) {
  const query = `update ${TABLE_NAME} set MeasurementUnitId = ${MeasurementUnitId} where Id = ${Id}`;
  _executeQuery(query);
}

export function UpdateCategoryIcon(Id, IconName, IconFamily){
  const query = `update ${TABLE_NAME} set IconName = '${IconName}', IconFamily = '${IconFamily}' where Id = ${Id}`;
  _executeQuery(query);
}

export function UpdateCategoryColor(Id, ColorHEX){
  const query = `update ${TABLE_NAME} set ColorHEX = '${ColorHEX}' where Id = ${Id}`;
  _executeQuery(query);
}

export function UpdateCategoryValue(Id, newValue){
  const query = `update ${TABLE_NAME} set Value = ${newValue} where Id = ${Id}`;
  _executeQuery(query);
}

export function DeleteCategory(Id) {
  const query = `delete from ${TABLE_NAME} where Id = ${Id}`;
  _executeQuery(query);
}

export function GetCategories(callback) {
  const query = `select ${TABLE_NAME}.Id, ${TABLE_NAME}.Name, ${TABLE_NAME}.Value, ${TABLE_NAME}.IconName, ${TABLE_NAME}.IconFamily, ${TABLE_NAME}.ColorHEX, MU.Name as MeasurementUnitName, MU.Id as MeasurementUnitId
                 from ${TABLE_NAME}
                 join MeasurementUnit MU on MU.Id = Category.MeasurementUnitId`;

  let categories = [];

  context.transaction((tx) => {
    tx.executeSql(query, [], (tx, result) => {
      for (let i = 0; i < result.rows.length; i++) {
        let row = result.rows.item(i);
        categories.push({Id: row.Id, Name: row.Name, Value: row.Value, IconName: row.IconName, IconFamily: row.IconFamily, ColorHEX: row.ColorHEX, MeasurementUnitName: row.MeasurementUnitName, MeasurementUnitId: row.MeasurementUnitId});
      }

      callback(categories);
    });
  });
}

function _executeQuery(query) {
  context.transaction((tx) => {
    tx.executeSql(query);
  });
}
