import { setLocalStorageItem } from "../../helpers/setLocalStorageItem";
import { SortOrder } from "./app.types";

export interface LocalStorageState {
  activeBlock: string;
  navOrder: SortOrder;
  cardOrder: SortOrder;
  showCoreBlocks: boolean;
}

export type LocalStorageActionTypes =
  | "showCoreBlocks"
  | "activeBlock"
  | "navOrder"
  | "cardOrder";

export interface LocalStorageAction {
  type: LocalStorageActionTypes;
  value: string | boolean;
}

export function localStorageReducer(
  state: LocalStorageState,
  action: LocalStorageAction
) {
  setLocalStorageItem(action.type, action.value);
  switch (action.type) {
    case "showCoreBlocks": {
      return { ...state, showCoreBlocks: action.value };
    }
    case "activeBlock": {
      return { ...state, activeBlock: action.value };
    }
    case "navOrder": {
      return { ...state, navOrder: action.value };
    }
    case "cardOrder": {
      return { ...state, cardOrder: action.value };
    }
    default:
      throw Error();
  }
}
