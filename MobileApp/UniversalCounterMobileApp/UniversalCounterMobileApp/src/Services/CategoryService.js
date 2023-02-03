import {GetContext} from "./DbContext";

const context = GetContext();
const TABLE_NAME = 'Category';

export function AddCategory(Name, MeasurementUnitId) {
  const query = `insert into ${TABLE_NAME} (Name, MeasurementUnitId) values ('${Name}', ${MeasurementUnitId})`;
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

export function UpdateCategory(Id, Name, MeasurementUnitId) {
  const query = `update ${TABLE_NAME} set Name = '${Name}', MeasurementUnitId = ${MeasurementUnitId} where Id = ${Id}`;
  _executeQuery(query);
}

export function DeleteCategory(Id) {
  const query = `delete from ${TABLE_NAME} where Id = ${Id}`;
  _executeQuery(query);
}

export function GetCategories(callback) {
  const query = `select Category.Id, Category.Name, Category.Value, MU.Name as MeasurementUnitName
                 from ${TABLE_NAME}
                 join MeasurementUnit MU on MU.Id = Category.MeasurementUnitId`;

  let categories = [];

  context.transaction((tx) => {
    tx.executeSql(query, [], (tx, result) => {
      for (let i = 0; i < result.rows.length; i++) {
        let row = result.rows.item(i);
        categories.push({Id: row.Id, Name: row.Name, Value: row.Value, MeasurementUnitName: row.MeasurementUnitName});
      }
      console.log('category in service');
      console.log(categories);
      // return categories;
      callback(categories);
    });
  });
}

function _executeQuery(query) {
  context.transaction((tx) => {
    tx.executeSql(query);
  });
}
