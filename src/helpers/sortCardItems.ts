import { Post, SortOrder } from "../components/App/app.types";

export function sortCardItems(items: Array<Post>, order: SortOrder) {
  switch (order) {
    case "alphabetical-a-z":
      return items.sort((a, b) => (a.title > b.title ? 1 : -1));
    case "alphabetical-z-a":
      return items.sort((a, b) => (a.title < b.title ? 1 : -1));
    case "count-high-low":
      return items.sort((a, b) => (a.count < b.count ? 1 : -1));
    case "reusable":
      return items.sort((a, b) => (a.isReusable < b.isReusable ? 1 : -1));
    case "nested":
      return items.sort((a, b) => (a.isNested < b.isNested ? 1 : -1));
    default:
      return items;
  }
}
