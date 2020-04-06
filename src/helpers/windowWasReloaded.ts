export const windowWasReloaded = () => {
  if (performance && performance.navigation) {
    if (performance.navigation.type == 1) {
      return true;
    }
  }
  return false;
};
