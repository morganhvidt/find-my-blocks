import { MenuItem } from "../components/Sidebar";
import { SortOrder } from "../components/App/app.types";

export function sortSidebarItems(items: Array<MenuItem>, order: SortOrder) {
  switch (order) {
    case "alphabetical-a-z":
      return items.sort((a, b) => (a.name > b.name ? 1 : -1));
    case "alphabetical-z-a":
      return items.sort((a, b) => (a.name < b.name ? 1 : -1));
    case "count-high-low":
      return items.sort((a, b) => (a.count < b.count ? 1 : -1));
    case "count-low-high":
      return items.sort((a, b) => (a.count > b.count ? 1 : -1));
    default:
      return items;
  }
}
