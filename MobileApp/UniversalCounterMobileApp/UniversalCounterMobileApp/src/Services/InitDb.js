// import {GetContext} from "./DbContext";
//
// export const initDb = () => {
//   const db = GetContext();
//   const query =
//           `create table if not exists main.MeasurementUnit(
//               Id integer not null
//                   constraint MeasurementUnit_pk
//                   primary key autoincrement,
//               Name text not null
//           );
//
//           create table if not exists main.Category
//           (
//               Id   integer not null
//                   constraint Category_pk
//                       primary key autoincrement,
//               Name text    not null,
//               Value real not null default 0,
//               MeasurementUnitId integer not null,
//               foreign key (MeasurementUnitId) references MeasurementUnit(Id)
//           );
//
//           create table if not exists main.ActionType(
//               Id   integer not null
//                   constraint ActionType_pk
//                       primary key autoincrement,
//               Name text not null
//           );
//
//           insert into ActionType (Name) values ('Добавление');
//
//           insert into ActionType (Name) values ('Вычитание');
//
//           create table if not exists main.History
//           (
//               Id integer not null
//                   constraint History_pk
//                       primary key autoincrement,
//               Value real not null,
//               ActionTypeId integer not null,
//               [Date] text not null,
//               foreign key (ActionTypeId) references ActionType(Id)
//           );`;
//   db.transaction((tx) => {
//     tx.executeSql(query, [], (text, result) => {console.log(text); console.log(result);}, (text, result) => {console.log(text); console.log(result);});
//   });
// };
