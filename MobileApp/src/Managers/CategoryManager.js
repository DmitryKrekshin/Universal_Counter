import {GetCategories, UpdateCategoryValue} from "../Services/CategoryService";
import {AddHistory} from "../Services/HistoryService";
import ActionType from "../Components/Enums/ActionType";

export async function AddValueToCategory(CategoryId, Value, Comment) {
  let categories = await GetCategories();
  let category = categories.find(f => f.Id === CategoryId);

  if (!category) {
    return;
  }

  const newValue = category.Value + Value;
  await UpdateCategoryValue(CategoryId, newValue);

  await AddHistory(CategoryId, Value, ActionType.Addition, Date.now(), Comment);
}
