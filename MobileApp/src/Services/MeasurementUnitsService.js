import {GetContext} from "./DbContext";

const context = GetContext();
const TABLE_NAME = 'MeasurementUnit';
// todo rewrite to use async/await instead of callbacks
export function AddMeasurementUnit(Name, ShortName) {
  const query = `insert into ${TABLE_NAME} (Name, ShortName) values ('${Name}', '${ShortName}')`;
  _executeQuery(query);
}

export function UpdateMeasurementUnitName(Id, Name) {
  const query = `update ${TABLE_NAME} set Name = '${Name}' where Id = ${Id}`;
  _executeQuery(query);
}

export function UpdateMeasurementUnitShortName(Id, ShortName) {
  const query = `update ${TABLE_NAME} set ShortName = '${ShortName}' where Id = ${Id}`;
  _executeQuery(query);
}

export function DeleteMeasurementUnit(Id) {
  const query = `delete from ${TABLE_NAME} where Id = ${Id}`;
  _executeQuery(query);
}

export function GetMeasurementUnits(callback) {
  const query = `select MeasurementUnit.Id, MeasurementUnit.Name, MeasurementUnit.ShortName
                 from ${TABLE_NAME}`

  let measurementUnits = [];

  context.transaction((tx) => {
    tx.executeSql(query, [], (tx, result) => {
      for (let i = 0; i < result.rows.length; i++) {
        let row = result.rows.item(i);
        measurementUnits.push({Id: row.Id, Name: row.Name, ShortName: row.ShortName});
      }

      callback(measurementUnits);
    });
  });
}

function _executeQuery(query) {
  context.transaction((tx) => {
    tx.executeSql(query);
  });
}
