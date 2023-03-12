import {GetContext} from "./DbContext";

const context = GetContext();
const TABLE_NAME = "History";

export function AddHistory(CategoryId, Value, ActionTypeId, Date, Comment) {
  return new Promise(resolve => {
    const query = `insert into ${TABLE_NAME} (CategoryId, Value, ActionTypeId, Date, Comment) values (${CategoryId}, ${Value}, ${ActionTypeId}, ${Date}, '${Comment}')`;
    _executeQuery(query);
    resolve();
  })
}

export function UpdateComment(Id, Comment) {
  return new Promise(resolve => {
    const query = `update ${TABLE_NAME} set Comment = '${Comment}' where Id = ${Id}`;
    _executeQuery(query);
    resolve();
  })
}

export function DeleteHistory(Id) {
  return new Promise(resolve => {
    const query = `delete from ${TABLE_NAME} where Id = ${Id}`;
    _executeQuery(query);
    resolve();
  })
}

export function GetHistories() {
  const query = `select ${TABLE_NAME}.Id, ${TABLE_NAME}.CategoryId, ${TABLE_NAME}.Value, ${TABLE_NAME}.ActionTypeId, ${TABLE_NAME}.Date, ${TABLE_NAME}.Comment
                 from ${TABLE_NAME}`;

  let histories = [];

  return new Promise(resolve => {
    context.transaction((tx) => {
      tx.executeSql(query, [], (tx, result) => {
        for (let i = 0; i < result.rows.length; i++) {
          let row = result.rows.item(i);
          histories.push({
            Id: row.Id,
            CategoryId: row.CategoryId,
            Value: row.Value,
            ActionTypeId: row.ActionTypeId,
            Date: row.Date,
            Comment: row.Comment,
          });
        }

        resolve(histories);
      });
    });
  })
}

function _executeQuery(query) {
  context.transaction((tx) => {
    tx.executeSql(query);
  });
}
