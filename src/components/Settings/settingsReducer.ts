import { getLocalStorageItem } from "../../helpers/getLocalStorageItem";
import { setLocalStorageItem } from "../../helpers/setLocalStorageItem";

export type SettingsSortOptions =
  | "alphabet-az"
  | "alphabet-za"
  | "high-low"
  | "low-high";

export interface SettingsState {
  navigationOrder: SettingsSortOptions;
  cardOrder: SettingsSortOptions;
  showCoreBlocks: boolean;
}
export type SettingsActionOptions =
  | "navigationOrder"
  | "cardOrder"
  | "showCoreBlocks";

export interface SettingsAction {
  type: SettingsActionOptions;
  value: SettingsSortOptions | boolean;
}

/**
 * Initial Settings
 */
export const initialSettings = {
  navigationOrder: getLocalStorageItem("navigationOrder") || "",
  cardOrder: getLocalStorageItem("cardOrder") || "",
  showCoreBlocks: getLocalStorageItem("showCoreBlocks"),
};

export function settingsReducer(
  settings: SettingsState,
  action: SettingsAction
) {
  setLocalStorageItem(action.type, action.value);

  switch (action.type) {
    case "navigationOrder": {
      return { ...settings, navigationOrder: action.value };
    }
    case "cardOrder": {
      return { ...settings, cardOrder: action.value };
    }
    case "showCoreBlocks": {
      return { ...settings, showCoreBlocks: action.value };
    }
    default:
      throw new Error();
  }
}
