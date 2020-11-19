export function getLocalStorageItem(item: string) {
  const fmb = localStorage.getItem("find_my_blocks");
  const fmbArr = fmb && JSON.parse(fmb);

  if (fmbArr[item]) {
    return fmbArr[item];
  }

  return null;
}
