import {GetContext} from "./DbContext";

const context = GetContext();
const TABLE_NAME = "Category";

export function AddCategory(Name, MeasurementUnitId, IconName, IconFamily, ColorHEX) {
  return new Promise(resolve => {
    const query = `insert into ${TABLE_NAME} (Name, MeasurementUnitId, IconName, IconFamily, ColorHEX) values ('${Name}', ${MeasurementUnitId}, '${IconName}', '${IconFamily}', '${ColorHEX}')`;
    _executeQuery(query);
    resolve();
  });
}

export function UpdateCategoryName(Id, Name) {
  return new Promise(resolve => {
    const query = `update ${TABLE_NAME} set Name = '${Name}' where Id = ${Id}`;
    _executeQuery(query);
    resolve();
  });
}

export function UpdateCategoryMeasurementUnitId(Id, MeasurementUnitId) {
  return new Promise(resolve => {
    const query = `update ${TABLE_NAME} set MeasurementUnitId = ${MeasurementUnitId} where Id = ${Id}`;
    _executeQuery(query);
    resolve();
  });
}

export function UpdateCategoryIcon(Id, IconName, IconFamily) {
  return new Promise(resolve => {
    const query = `update ${TABLE_NAME} set IconName = '${IconName}', IconFamily = '${IconFamily}' where Id = ${Id}`;
    _executeQuery(query);
    resolve();
  });
}

export function UpdateCategoryColor(Id, ColorHEX) {
  return new Promise(resolve => {
    const query = `update ${TABLE_NAME} set ColorHEX = '${ColorHEX}' where Id = ${Id}`;
    _executeQuery(query);
    resolve();
  });
}

export function UpdateCategoryValue(Id, newValue) {
  return new Promise(resolve => {
    const query = `update ${TABLE_NAME} set Value = ${newValue} where Id = ${Id}`;
    _executeQuery(query);
    resolve();
  });
}

export function DeleteCategory(Id) {
  return new Promise(resolve => {
    const query = `delete from ${TABLE_NAME} where Id = ${Id}`;
    _executeQuery(query);
    resolve();
  });
}

export function GetCategories() {
  const query = `select ${TABLE_NAME}.Id, ${TABLE_NAME}.Name, ${TABLE_NAME}.Value, ${TABLE_NAME}.IconName, ${TABLE_NAME}.IconFamily, ${TABLE_NAME}.ColorHEX, MU.Name as MeasurementUnitName, MU.Id as MeasurementUnitId
                 from ${TABLE_NAME}
                 join MeasurementUnit MU on MU.Id = Category.MeasurementUnitId`;

  let categories = [];

  return new Promise(resolve => {
    context.transaction((tx) => {
      tx.executeSql(query, [], (tx, result) => {
        for (let i = 0; i < result.rows.length; i++) {
          let row = result.rows.item(i);
          categories.push({
            Id: row.Id,
            Name: row.Name,
            Value: row.Value,
            IconName: row.IconName,
            IconFamily: row.IconFamily,
            ColorHEX: row.ColorHEX,
            MeasurementUnitName: row.MeasurementUnitName,
            MeasurementUnitId: row.MeasurementUnitId,
          });
        }

        resolve(categories);
      });
    });
  });
}

function _executeQuery(query) {
  context.transaction((tx) => {
    tx.executeSql(query);
  });
}
