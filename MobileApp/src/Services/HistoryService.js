import { GetContext } from "./DbContext";

const context = GetContext();
const TABLE_NAME = "History";

export function AddHistory(CategoryId, Value, ActionTypeId, Date, Comment) {
  const query = `insert into ${TABLE_NAME} (CategoryId, Value, ActionTypeId, Date, Comment) values (${CategoryId}, ${Value}, ${ActionTypeId}, ${Date}, '${Comment}')`;
  _executeQuery(query);
}

export function UpdateValue(Id, Value) {
  const query = `update ${TABLE_NAME} set Value = ${Value} where Id = ${Id}`;
  _executeQuery(query);
}

export function UpdateComment(Id, Comment) {
  const query = `update ${TABLE_NAME} set Comment = '${Comment}' where Id = ${Id}`;
  _executeQuery(query);
}

export function DeleteHistory(Id) {
  const query = `delete from ${TABLE_NAME} where Id = ${Id}`;
  _executeQuery(query);
}

export function GetHistories(callback) {
  const query = `select ${TABLE_NAME}.Id, ${TABLE_NAME}.CategoryId, ${TABLE_NAME}.Value, ${TABLE_NAME}.ActionTypeId, ${TABLE_NAME}.Date, ${TABLE_NAME}.Comment
                 from ${TABLE_NAME}`;

  let histories = [];

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

      callback(histories);
    });
  });
}

function _executeQuery(query) {
  context.transaction((tx) => {
    tx.executeSql(query);
  });
}
