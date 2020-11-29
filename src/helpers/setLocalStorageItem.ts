export function setLocalStorageItem(item: string, value: unknown) {
  const fmb = localStorage.getItem("find_my_blocks");

  if (!fmb) {
    localStorage.setItem("find_my_blocks", "{}");
  }

  const fmbArr = fmb && JSON.parse(fmb);

  fmbArr[item] = value;
  const fmbStr = JSON.stringify(fmbArr, undefined, 2);

  localStorage.setItem("find_my_blocks", fmbStr);
}
