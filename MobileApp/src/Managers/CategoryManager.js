import { GetCategories } from "../Services/CategoryService";
import { AddHistory, UpdateValue } from "../Services/HistoryService";
import ActionType from "../Components/Enums/ActionType";

export function AddValueToCategory(CategoryId, Value, Comment) {
  let category;
  GetCategories((categories) => {
    category = categories.find(f => f.Id === CategoryId);
  });

  if(!category){
    return;
  }

  const newValue = category.Value + Value;
  UpdateValue(CategoryId, newValue);

  AddHistory(CategoryId, Value, ActionType.Addition, Date.now(), Comment);
}
