export const applyMootolsFix = () => {
  // fix for mootools overwriting array from
  // this causes multiple problems with react
  // @ts-ignore
  if (Array['fromOld']) {
    //Revert what mootools broke
    // @ts-ignore
    Array.from = Array['fromOld'];
  }
};
