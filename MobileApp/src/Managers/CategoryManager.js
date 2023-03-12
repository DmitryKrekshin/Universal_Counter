import {GetCategories, UpdateCategoryValue} from "../Services/CategoryService";
import {AddHistory, GetHistories} from "../Services/HistoryService";
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

export async function GetCategoryHistory(CategoryId) {
  let categories = await GetCategories();
  let category = categories.find(f => f.Id === CategoryId);

  let histories = await GetHistories();
  histories = histories.filter(f => f.CategoryId === CategoryId);

  let categoryHistory = {
    category: category,
    histories: histories
  };

  return new Promise(resolve => {
    resolve(categoryHistory);
  })
}
