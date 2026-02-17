import styles from './general.module.scss';

/**
 * Global styles for the app.
 */

export const {
  alignContentAround,
  alignContentBetween,
  alignContentCenter,
  alignContentDesktopAround,
  alignContentDesktopBetween,
  alignContentDesktopCenter,
  alignContentDesktopEnd,
  alignContentDesktopStart,
  alignContentDesktopStretch,
  alignContentEnd,
  alignContentMobileAround,
  alignContentMobileBetween,
  alignContentMobileCenter,
  alignContentMobileEnd,
  alignContentMobileStart,
  alignContentMobileStretch,
  alignContentStart,
  alignContentStretch,
  alignContentTabletAround,
  alignContentTabletBetween,
  alignContentTabletCenter,
  alignContentTabletEnd,
  alignContentTabletStart,
  alignContentTabletStretch,
  alignItemsBaseline,
  alignItemsCenter,
  alignItemsDesktopBaseline,
  alignItemsDesktopCenter,
  alignItemsDesktopEnd,
  alignItemsDesktopStart,
  alignItemsDesktopStretch,
  alignItemsEnd,
  alignItemsMobileBaseline,
  alignItemsMobileCenter,
  alignItemsMobileEnd,
  alignItemsMobileStart,
  alignItemsMobileStretch,
  alignItemsStart,
  alignItemsStretch,
  alignItemsTabletBaseline,
  alignItemsTabletCenter,
  alignItemsTabletEnd,
  alignItemsTabletStart,
  alignItemsTabletStretch,
  alignSelfBaseline,
  alignSelfCenter,
  alignSelfDesktopBaseline,
  alignSelfDesktopCenter,
  alignSelfDesktopEnd,
  alignSelfDesktopStart,
  alignSelfDesktopStretch,
  alignSelfEnd,
  alignSelfMobileBaseline,
  alignSelfMobileCenter,
  alignSelfMobileEnd,
  alignSelfMobileStart,
  alignSelfMobileStretch,
  alignSelfStart,
  alignSelfStretch,
  alignSelfTabletBaseline,
  alignSelfTabletCenter,
  alignSelfTabletEnd,
  alignSelfTabletStart,
  alignSelfTabletStretch,
  col1,
  col10,
  col11,
  col12,
  col2,
  col3,
  col4,
  col5,
  col6,
  col7,
  col8,
  col9,
  colAuto,
  colDesktop1,
  colDesktop10,
  colDesktop11,
  colDesktop12,
  colDesktop2,
  colDesktop3,
  colDesktop4,
  colDesktop5,
  colDesktop6,
  colDesktop7,
  colDesktop8,
  colDesktop9,
  colDesktopAuto,
  colMobile1,
  colMobile10,
  colMobile11,
  colMobile12,
  colMobile2,
  colMobile3,
  colMobile4,
  colMobile5,
  colMobile6,
  colMobile7,
  colMobile8,
  colMobile9,
  colMobileAuto,
  colTablet1,
  colTablet10,
  colTablet11,
  colTablet12,
  colTablet2,
  colTablet3,
  colTablet4,
  colTablet5,
  colTablet6,
  colTablet7,
  colTablet8,
  colTablet9,
  colTabletAuto,
  cursorPointer,
  dBlock,
  dDesktopBlock,
  dDesktopFlex,
  dDesktopGrid,
  dDesktopInline,
  dDesktopInlineBlock,
  dDesktopInlineFlex,
  dDesktopInlineGrid,
  dFlex,
  dGrid,
  dInline,
  dInlineBlock,
  dInlineFlex,
  dInlineGrid,
  dMobileBlock,
  dMobileFlex,
  dMobileGrid,
  dMobileInline,
  dMobileInlineBlock,
  dMobileInlineFlex,
  dMobileInlineGrid,
  dTabletBlock,
  dTabletFlex,
  dTabletGrid,
  dTabletInline,
  dTabletInlineBlock,
  dTabletInlineFlex,
  dTabletInlineGrid,
  dFlexColumn,
  dFlexColumnReverse,
  dFlexDesktopColumn,
  dFlexDesktopColumnReverse,
  flexDesktopGrow1,
  flexDesktopGrow2,
  flexDesktopGrow3,
  flexDesktopGrow4,
  flexDesktopGrow5,
  flexDesktopNowrap,
  dFlexDesktopRow,
  dFlexDesktopRowReverse,
  flexDesktopShrink1,
  flexDesktopShrink2,
  flexDesktopShrink3,
  flexDesktopShrink4,
  flexDesktopShrink5,
  flexDesktopWrap,
  flexDesktopWrapReverse,
  flexGrow1,
  flexGrow2,
  flexGrow3,
  flexGrow4,
  flexGrow5,
  dFlexMobileColumn,
  dFlexMobileColumnReverse,
  flexMobileGrow1,
  flexMobileGrow2,
  flexMobileGrow3,
  flexMobileGrow4,
  flexMobileGrow5,
  flexMobileNowrap,
  dFlexMobileRow,
  dFlexMobileRowReverse,
  flexMobileShrink1,
  flexMobileShrink2,
  flexMobileShrink3,
  flexMobileShrink4,
  flexMobileShrink5,
  flexMobileWrap,
  flexMobileWrapReverse,
  flexNowrap,
  dFlexRow,
  dFlexRowReverse,
  flexShrink1,
  flexShrink2,
  flexShrink3,
  flexShrink4,
  flexShrink5,
  dFlexTabletColumn,
  dFlexTabletColumnReverse,
  flexTabletGrow1,
  flexTabletGrow2,
  flexTabletGrow3,
  flexTabletGrow4,
  flexTabletGrow5,
  flexTabletNowrap,
  dFlexTabletRow,
  dFlexTabletRowReverse,
  flexTabletShrink1,
  flexTabletShrink2,
  flexTabletShrink3,
  flexTabletShrink4,
  flexTabletShrink5,
  flexTabletWrap,
  flexTabletWrapReverse,
  flexWrap,
  flexWrapReverse,
  gap0,
  gap1,
  gap2,
  gap3,
  gap4,
  gap5,
  gap6,
  gap7,
  gap8,
  gap9,
  gapDesktop0,
  gapDesktop1,
  gapDesktop2,
  gapDesktop3,
  gapDesktop4,
  gapDesktop5,
  gapDesktop6,
  gapDesktop7,
  gapDesktop8,
  gapDesktop9,
  gapMobile0,
  gapMobile1,
  gapMobile2,
  gapMobile3,
  gapMobile4,
  gapMobile5,
  gapMobile6,
  gapMobile7,
  gapMobile8,
  gapMobile9,
  gapTablet0,
  gapTablet1,
  gapTablet2,
  gapTablet3,
  gapTablet4,
  gapTablet5,
  gapTablet6,
  gapTablet7,
  gapTablet8,
  gapTablet9,
  h0,
  h100,
  h25,
  h50,
  h75,
  hDesktop0,
  hDesktop100,
  hDesktop25,
  hDesktop50,
  hDesktop75,
  hMobile0,
  hMobile100,
  hMobile25,
  hMobile50,
  hMobile75,
  hTablet0,
  hTablet100,
  hTablet25,
  hTablet50,
  hTablet75,
  justifyContentAround,
  justifyContentBetween,
  justifyContentCenter,
  justifyContentDesktopAround,
  justifyContentDesktopBetween,
  justifyContentDesktopCenter,
  justifyContentDesktopEnd,
  justifyContentDesktopEvenly,
  justifyContentDesktopStart,
  justifyContentEnd,
  justifyContentEvenly,
  justifyContentMobileAround,
  justifyContentMobileBetween,
  justifyContentMobileCenter,
  justifyContentMobileEnd,
  justifyContentMobileEvenly,
  justifyContentMobileStart,
  justifyContentStart,
  justifyContentTabletAround,
  justifyContentTabletBetween,
  justifyContentTabletCenter,
  justifyContentTabletEnd,
  justifyContentTabletEvenly,
  justifyContentTabletStart,
  m0,
  m1,
  m2,
  m3,
  m4,
  m5,
  m6,
  m7,
  m8,
  m9,
  mDesktop0,
  mDesktop1,
  mDesktop2,
  mDesktop3,
  mDesktop4,
  mDesktop5,
  mDesktop6,
  mDesktop7,
  mDesktop8,
  mDesktop9,
  mMobile0,
  mMobile1,
  mMobile2,
  mMobile3,
  mMobile4,
  mMobile5,
  mMobile6,
  mMobile7,
  mMobile8,
  mMobile9,
  mTablet0,
  mTablet1,
  mTablet2,
  mTablet3,
  mTablet4,
  mTablet5,
  mTablet6,
  mTablet7,
  mTablet8,
  mTablet9,
  mb0,
  mb1,
  mb2,
  mb3,
  mb4,
  mb5,
  mb6,
  mb7,
  mb8,
  mb9,
  mbDesktop0,
  mbDesktop1,
  mbDesktop2,
  mbDesktop3,
  mbDesktop4,
  mbDesktop5,
  mbDesktop6,
  mbDesktop7,
  mbDesktop8,
  mbDesktop9,
  mbMobile0,
  mbMobile1,
  mbMobile2,
  mbMobile3,
  mbMobile4,
  mbMobile5,
  mbMobile6,
  mbMobile7,
  mbMobile8,
  mbMobile9,
  mbTablet0,
  mbTablet1,
  mbTablet2,
  mbTablet3,
  mbTablet4,
  mbTablet5,
  mbTablet6,
  mbTablet7,
  mbTablet8,
  mbTablet9,
  ml0,
  ml1,
  ml2,
  ml3,
  ml4,
  ml5,
  ml6,
  ml7,
  ml8,
  ml9,
  mlDesktop0,
  mlDesktop1,
  mlDesktop2,
  mlDesktop3,
  mlDesktop4,
  mlDesktop5,
  mlDesktop6,
  mlDesktop7,
  mlDesktop8,
  mlDesktop9,
  mlMobile0,
  mlMobile1,
  mlMobile2,
  mlMobile3,
  mlMobile4,
  mlMobile5,
  mlMobile6,
  mlMobile7,
  mlMobile8,
  mlMobile9,
  mlTablet0,
  mlTablet1,
  mlTablet2,
  mlTablet3,
  mlTablet4,
  mlTablet5,
  mlTablet6,
  mlTablet7,
  mlTablet8,
  mlTablet9,
  mr0,
  mr1,
  mr2,
  mr3,
  mr4,
  mr5,
  mr6,
  mr7,
  mr8,
  mr9,
  mrDesktop0,
  mrDesktop1,
  mrDesktop2,
  mrDesktop3,
  mrDesktop4,
  mrDesktop5,
  mrDesktop6,
  mrDesktop7,
  mrDesktop8,
  mrDesktop9,
  mrMobile0,
  mrMobile1,
  mrMobile2,
  mrMobile3,
  mrMobile4,
  mrMobile5,
  mrMobile6,
  mrMobile7,
  mrMobile8,
  mrMobile9,
  mrTablet0,
  mrTablet1,
  mrTablet2,
  mrTablet3,
  mrTablet4,
  mrTablet5,
  mrTablet6,
  mrTablet7,
  mrTablet8,
  mrTablet9,
  mt0,
  mt1,
  mt2,
  mt3,
  mt4,
  mt5,
  mt6,
  mt7,
  mt8,
  mt9,
  mtDesktop0,
  mtDesktop1,
  mtDesktop2,
  mtDesktop3,
  mtDesktop4,
  mtDesktop5,
  mtDesktop6,
  mtDesktop7,
  mtDesktop8,
  mtDesktop9,
  mtMobile0,
  mtMobile1,
  mtMobile2,
  mtMobile3,
  mtMobile4,
  mtMobile5,
  mtMobile6,
  mtMobile7,
  mtMobile8,
  mtMobile9,
  mtTablet0,
  mtTablet1,
  mtTablet2,
  mtTablet3,
  mtTablet4,
  mtTablet5,
  mtTablet6,
  mtTablet7,
  mtTablet8,
  mtTablet9,
  mx0,
  mx1,
  mx2,
  mx3,
  mx4,
  mx5,
  mx6,
  mx7,
  mx8,
  mx9,
  mxDesktop0,
  mxDesktop1,
  mxDesktop2,
  mxDesktop3,
  mxDesktop4,
  mxDesktop5,
  mxDesktop6,
  mxDesktop7,
  mxDesktop8,
  mxDesktop9,
  mxMobile0,
  mxMobile1,
  mxMobile2,
  mxMobile3,
  mxMobile4,
  mxMobile5,
  mxMobile6,
  mxMobile7,
  mxMobile8,
  mxMobile9,
  mxTablet0,
  mxTablet1,
  mxTablet2,
  mxTablet3,
  mxTablet4,
  mxTablet5,
  mxTablet6,
  mxTablet7,
  mxTablet8,
  mxTablet9,
  my0,
  my1,
  my2,
  my3,
  my4,
  my5,
  my6,
  my7,
  my8,
  my9,
  myDesktop0,
  myDesktop1,
  myDesktop2,
  myDesktop3,
  myDesktop4,
  myDesktop5,
  myDesktop6,
  myDesktop7,
  myDesktop8,
  myDesktop9,
  myMobile0,
  myMobile1,
  myMobile2,
  myMobile3,
  myMobile4,
  myMobile5,
  myMobile6,
  myMobile7,
  myMobile8,
  myMobile9,
  myTablet0,
  myTablet1,
  myTablet2,
  myTablet3,
  myTablet4,
  myTablet5,
  myTablet6,
  myTablet7,
  myTablet8,
  myTablet9,
  offset1,
  offset10,
  offset11,
  offset12,
  offset2,
  offset3,
  offset4,
  offset5,
  offset6,
  offset7,
  offset8,
  offset9,
  offsetAuto,
  offsetDesktop1,
  offsetDesktop10,
  offsetDesktop11,
  offsetDesktop12,
  offsetDesktop2,
  offsetDesktop3,
  offsetDesktop4,
  offsetDesktop5,
  offsetDesktop6,
  offsetDesktop7,
  offsetDesktop8,
  offsetDesktop9,
  offsetDesktopAuto,
  offsetMobile1,
  offsetMobile10,
  offsetMobile11,
  offsetMobile12,
  offsetMobile2,
  offsetMobile3,
  offsetMobile4,
  offsetMobile5,
  offsetMobile6,
  offsetMobile7,
  offsetMobile8,
  offsetMobile9,
  offsetMobileAuto,
  offsetTablet1,
  offsetTablet10,
  offsetTablet11,
  offsetTablet12,
  offsetTablet2,
  offsetTablet3,
  offsetTablet4,
  offsetTablet5,
  offsetTablet6,
  offsetTablet7,
  offsetTablet8,
  offsetTablet9,
  offsetTabletAuto,
  p0,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  pDesktop0,
  pDesktop1,
  pDesktop2,
  pDesktop3,
  pDesktop4,
  pDesktop5,
  pDesktop6,
  pDesktop7,
  pDesktop8,
  pDesktop9,
  pMobile0,
  pMobile1,
  pMobile2,
  pMobile3,
  pMobile4,
  pMobile5,
  pMobile6,
  pMobile7,
  pMobile8,
  pMobile9,
  pTablet0,
  pTablet1,
  pTablet2,
  pTablet3,
  pTablet4,
  pTablet5,
  pTablet6,
  pTablet7,
  pTablet8,
  pTablet9,
  pb0,
  pb1,
  pb2,
  pb3,
  pb4,
  pb5,
  pb6,
  pb7,
  pb8,
  pb9,
  pbDesktop0,
  pbDesktop1,
  pbDesktop2,
  pbDesktop3,
  pbDesktop4,
  pbDesktop5,
  pbDesktop6,
  pbDesktop7,
  pbDesktop8,
  pbDesktop9,
  pbMobile0,
  pbMobile1,
  pbMobile2,
  pbMobile3,
  pbMobile4,
  pbMobile5,
  pbMobile6,
  pbMobile7,
  pbMobile8,
  pbMobile9,
  pbTablet0,
  pbTablet1,
  pbTablet2,
  pbTablet3,
  pbTablet4,
  pbTablet5,
  pbTablet6,
  pbTablet7,
  pbTablet8,
  pbTablet9,
  pl0,
  pl1,
  pl2,
  pl3,
  pl4,
  pl5,
  pl6,
  pl7,
  pl8,
  pl9,
  plDesktop0,
  plDesktop1,
  plDesktop2,
  plDesktop3,
  plDesktop4,
  plDesktop5,
  plDesktop6,
  plDesktop7,
  plDesktop8,
  plDesktop9,
  plMobile0,
  plMobile1,
  plMobile2,
  plMobile3,
  plMobile4,
  plMobile5,
  plMobile6,
  plMobile7,
  plMobile8,
  plMobile9,
  plTablet0,
  plTablet1,
  plTablet2,
  plTablet3,
  plTablet4,
  plTablet5,
  plTablet6,
  plTablet7,
  plTablet8,
  plTablet9,
  positionAbsolute,
  positionDesktopAbsolute,
  positionDesktopFixed,
  positionDesktopRelative,
  positionDesktopStatic,
  positionDesktopSticky,
  positionFixed,
  positionMobileAbsolute,
  positionMobileFixed,
  positionMobileRelative,
  positionMobileStatic,
  positionMobileSticky,
  positionRelative,
  positionStatic,
  positionSticky,
  positionTabletAbsolute,
  positionTabletFixed,
  positionTabletRelative,
  positionTabletStatic,
  positionTabletSticky,
  pr0,
  pr1,
  pr2,
  pr3,
  pr4,
  pr5,
  pr6,
  pr7,
  pr8,
  pr9,
  prDesktop0,
  prDesktop1,
  prDesktop2,
  prDesktop3,
  prDesktop4,
  prDesktop5,
  prDesktop6,
  prDesktop7,
  prDesktop8,
  prDesktop9,
  prMobile0,
  prMobile1,
  prMobile2,
  prMobile3,
  prMobile4,
  prMobile5,
  prMobile6,
  prMobile7,
  prMobile8,
  prMobile9,
  prTablet0,
  prTablet1,
  prTablet2,
  prTablet3,
  prTablet4,
  prTablet5,
  prTablet6,
  prTablet7,
  prTablet8,
  prTablet9,
  pt0,
  pt1,
  pt2,
  pt3,
  pt4,
  pt5,
  pt6,
  pt7,
  pt8,
  pt9,
  ptDesktop0,
  ptDesktop1,
  ptDesktop2,
  ptDesktop3,
  ptDesktop4,
  ptDesktop5,
  ptDesktop6,
  ptDesktop7,
  ptDesktop8,
  ptDesktop9,
  ptMobile0,
  ptMobile1,
  ptMobile2,
  ptMobile3,
  ptMobile4,
  ptMobile5,
  ptMobile6,
  ptMobile7,
  ptMobile8,
  ptMobile9,
  ptTablet0,
  ptTablet1,
  ptTablet2,
  ptTablet3,
  ptTablet4,
  ptTablet5,
  ptTablet6,
  ptTablet7,
  ptTablet8,
  ptTablet9,
  px0,
  px1,
  px2,
  px3,
  px4,
  px5,
  px6,
  px7,
  px8,
  px9,
  pxDesktop0,
  pxDesktop1,
  pxDesktop2,
  pxDesktop3,
  pxDesktop4,
  pxDesktop5,
  pxDesktop6,
  pxDesktop7,
  pxDesktop8,
  pxDesktop9,
  pxMobile0,
  pxMobile1,
  pxMobile2,
  pxMobile3,
  pxMobile4,
  pxMobile5,
  pxMobile6,
  pxMobile7,
  pxMobile8,
  pxMobile9,
  pxTablet0,
  pxTablet1,
  pxTablet2,
  pxTablet3,
  pxTablet4,
  pxTablet5,
  pxTablet6,
  pxTablet7,
  pxTablet8,
  pxTablet9,
  py0,
  py1,
  py2,
  py3,
  py4,
  py5,
  py6,
  py7,
  py8,
  py9,
  pyDesktop0,
  pyDesktop1,
  pyDesktop2,
  pyDesktop3,
  pyDesktop4,
  pyDesktop5,
  pyDesktop6,
  pyDesktop7,
  pyDesktop8,
  pyDesktop9,
  pyMobile0,
  pyMobile1,
  pyMobile2,
  pyMobile3,
  pyMobile4,
  pyMobile5,
  pyMobile6,
  pyMobile7,
  pyMobile8,
  pyMobile9,
  pyTablet0,
  pyTablet1,
  pyTablet2,
  pyTablet3,
  pyTablet4,
  pyTablet5,
  pyTablet6,
  pyTablet7,
  pyTablet8,
  pyTablet9,
  row,
  textAlignCenter,
  textAlignDesktopCenter,
  textAlignDesktopEnd,
  textAlignDesktopJustify,
  textAlignDesktopStart,
  textAlignEnd,
  textAlignJustify,
  textAlignMobileCenter,
  textAlignMobileEnd,
  textAlignMobileJustify,
  textAlignMobileStart,
  textAlignStart,
  textAlignTabletCenter,
  textAlignTabletEnd,
  textAlignTabletJustify,
  textAlignTabletStart,
  vh0,
  vh100,
  vh25,
  vh50,
  vh75,
  vhDesktop0,
  vhDesktop100,
  vhDesktop25,
  vhDesktop50,
  vhDesktop75,
  vhMobile0,
  vhMobile100,
  vhMobile25,
  vhMobile50,
  vhMobile75,
  vhTablet0,
  vhTablet100,
  vhTablet25,
  vhTablet50,
  vhTablet75,
  vw0,
  vw100,
  vw25,
  vw50,
  vw75,
  vwDesktop0,
  vwDesktop100,
  vwDesktop25,
  vwDesktop50,
  vwDesktop75,
  vwMobile0,
  vwMobile100,
  vwMobile25,
  vwMobile50,
  vwMobile75,
  vwTablet0,
  vwTablet100,
  vwTablet25,
  vwTablet50,
  vwTablet75,
  w0,
  w100,
  w25,
  w50,
  w75,
  wDesktop0,
  wDesktop100,
  wDesktop25,
  wDesktop50,
  wDesktop75,
  wMobile0,
  wMobile100,
  wMobile25,
  wMobile50,
  wMobile75,
  wTablet0,
  wTablet100,
  wTablet25,
  wTablet50,
  wTablet75,
} = styles;

export const gap0_125 = styles['gap-0_125'];
export const gap0_25 = styles['gap-0_25'];
export const gap0_5 = styles['gap-0_5'];
export const gap1_5 = styles['gap-1_5'];
export const gap1_75 = styles['gap-1_75'];
export const gap2_5 = styles['gap-2_5'];
export const gapDesktop0_125 = styles['gap-desktop-0_125'];
export const gapDesktop0_25 = styles['gap-desktop-0_25'];
export const gapDesktop0_5 = styles['gap-desktop-0_5'];
export const gapDesktop1_5 = styles['gap-desktop-1_5'];
export const gapDesktop1_75 = styles['gap-desktop-1_75'];
export const gapDesktop2_5 = styles['gap-desktop-2_5'];
export const gapMobile0_125 = styles['gap-mobile-0_125'];
export const gapMobile0_25 = styles['gap-mobile-0_25'];
export const gapMobile0_5 = styles['gap-mobile-0_5'];
export const gapMobile1_5 = styles['gap-mobile-1_5'];
export const gapMobile1_75 = styles['gap-mobile-1_75'];
export const gapMobile2_5 = styles['gap-mobile-2_5'];
export const gapTablet0_125 = styles['gap-tablet-0_125'];
export const gapTablet0_25 = styles['gap-tablet-0_25'];
export const gapTablet0_5 = styles['gap-tablet-0_5'];
export const gapTablet1_5 = styles['gap-tablet-1_5'];
export const gapTablet1_75 = styles['gap-tablet-1_75'];
export const gapTablet2_5 = styles['gap-tablet-2_5'];
export const m0_125 = styles['m-0_125'];
export const m0_25 = styles['m-0_25'];
export const m0_5 = styles['m-0_5'];
export const m1_5 = styles['m-1_5'];
export const m1_75 = styles['m-1_75'];
export const m2_5 = styles['m-2_5'];
export const mDesktop0_125 = styles['m-desktop-0_125'];
export const mDesktop0_25 = styles['m-desktop-0_25'];
export const mDesktop0_5 = styles['m-desktop-0_5'];
export const mDesktop1_5 = styles['m-desktop-1_5'];
export const mDesktop1_75 = styles['m-desktop-1_75'];
export const mDesktop2_5 = styles['m-desktop-2_5'];
export const mMobile0_125 = styles['m-mobile-0_125'];
export const mMobile0_25 = styles['m-mobile-0_25'];
export const mMobile0_5 = styles['m-mobile-0_5'];
export const mMobile1_5 = styles['m-mobile-1_5'];
export const mMobile1_75 = styles['m-mobile-1_75'];
export const mMobile2_5 = styles['m-mobile-2_5'];
export const mTablet0_125 = styles['m-tablet-0_125'];
export const mTablet0_25 = styles['m-tablet-0_25'];
export const mTablet0_5 = styles['m-tablet-0_5'];
export const mTablet1_5 = styles['m-tablet-1_5'];
export const mTablet1_75 = styles['m-tablet-1_75'];
export const mTablet2_5 = styles['m-tablet-2_5'];
export const mb0_125 = styles['mb-0_125'];
export const mb0_25 = styles['mb-0_25'];
export const mb0_5 = styles['mb-0_5'];
export const mb1_5 = styles['mb-1_5'];
export const mb1_75 = styles['mb-1_75'];
export const mb2_5 = styles['mb-2_5'];
export const mbDesktop0_125 = styles['mb-desktop-0_125'];
export const mbDesktop0_25 = styles['mb-desktop-0_25'];
export const mbDesktop0_5 = styles['mb-desktop-0_5'];
export const mbDesktop1_5 = styles['mb-desktop-1_5'];
export const mbDesktop1_75 = styles['mb-desktop-1_75'];
export const mbDesktop2_5 = styles['mb-desktop-2_5'];
export const mbMobile0_125 = styles['mb-mobile-0_125'];
export const mbMobile0_25 = styles['mb-mobile-0_25'];
export const mbMobile0_5 = styles['mb-mobile-0_5'];
export const mbMobile1_5 = styles['mb-mobile-1_5'];
export const mbMobile1_75 = styles['mb-mobile-1_75'];
export const mbMobile2_5 = styles['mb-mobile-2_5'];
export const mbTablet0_125 = styles['mb-tablet-0_125'];
export const mbTablet0_25 = styles['mb-tablet-0_25'];
export const mbTablet0_5 = styles['mb-tablet-0_5'];
export const mbTablet1_5 = styles['mb-tablet-1_5'];
export const mbTablet1_75 = styles['mb-tablet-1_75'];
export const mbTablet2_5 = styles['mb-tablet-2_5'];
export const ml0_125 = styles['ml-0_125'];
export const ml0_25 = styles['ml-0_25'];
export const ml0_5 = styles['ml-0_5'];
export const ml1_5 = styles['ml-1_5'];
export const ml1_75 = styles['ml-1_75'];
export const ml2_5 = styles['ml-2_5'];
export const mlDesktop0_125 = styles['ml-desktop-0_125'];
export const mlDesktop0_25 = styles['ml-desktop-0_25'];
export const mlDesktop0_5 = styles['ml-desktop-0_5'];
export const mlDesktop1_5 = styles['ml-desktop-1_5'];
export const mlDesktop1_75 = styles['ml-desktop-1_75'];
export const mlDesktop2_5 = styles['ml-desktop-2_5'];
export const mlMobile0_125 = styles['ml-mobile-0_125'];
export const mlMobile0_25 = styles['ml-mobile-0_25'];
export const mlMobile0_5 = styles['ml-mobile-0_5'];
export const mlMobile1_5 = styles['ml-mobile-1_5'];
export const mlMobile1_75 = styles['ml-mobile-1_75'];
export const mlMobile2_5 = styles['ml-mobile-2_5'];
export const mlTablet0_125 = styles['ml-tablet-0_125'];
export const mlTablet0_25 = styles['ml-tablet-0_25'];
export const mlTablet0_5 = styles['ml-tablet-0_5'];
export const mlTablet1_5 = styles['ml-tablet-1_5'];
export const mlTablet1_75 = styles['ml-tablet-1_75'];
export const mlTablet2_5 = styles['ml-tablet-2_5'];
export const mr0_125 = styles['mr-0_125'];
export const mr0_25 = styles['mr-0_25'];
export const mr0_5 = styles['mr-0_5'];
export const mr1_5 = styles['mr-1_5'];
export const mr1_75 = styles['mr-1_75'];
export const mr2_5 = styles['mr-2_5'];
export const mrDesktop0_125 = styles['mr-desktop-0_125'];
export const mrDesktop0_25 = styles['mr-desktop-0_25'];
export const mrDesktop0_5 = styles['mr-desktop-0_5'];
export const mrDesktop1_5 = styles['mr-desktop-1_5'];
export const mrDesktop1_75 = styles['mr-desktop-1_75'];
export const mrDesktop2_5 = styles['mr-desktop-2_5'];
export const mrMobile0_125 = styles['mr-mobile-0_125'];
export const mrMobile0_25 = styles['mr-mobile-0_25'];
export const mrMobile0_5 = styles['mr-mobile-0_5'];
export const mrMobile1_5 = styles['mr-mobile-1_5'];
export const mrMobile1_75 = styles['mr-mobile-1_75'];
export const mrMobile2_5 = styles['mr-mobile-2_5'];
export const mrTablet0_125 = styles['mr-tablet-0_125'];
export const mrTablet0_25 = styles['mr-tablet-0_25'];
export const mrTablet0_5 = styles['mr-tablet-0_5'];
export const mrTablet1_5 = styles['mr-tablet-1_5'];
export const mrTablet1_75 = styles['mr-tablet-1_75'];
export const mrTablet2_5 = styles['mr-tablet-2_5'];
export const mt0_125 = styles['mt-0_125'];
export const mt0_25 = styles['mt-0_25'];
export const mt0_5 = styles['mt-0_5'];
export const mt1_5 = styles['mt-1_5'];
export const mt1_75 = styles['mt-1_75'];
export const mt2_5 = styles['mt-2_5'];
export const mtDesktop0_125 = styles['mt-desktop-0_125'];
export const mtDesktop0_25 = styles['mt-desktop-0_25'];
export const mtDesktop0_5 = styles['mt-desktop-0_5'];
export const mtDesktop1_5 = styles['mt-desktop-1_5'];
export const mtDesktop1_75 = styles['mt-desktop-1_75'];
export const mtDesktop2_5 = styles['mt-desktop-2_5'];
export const mtMobile0_125 = styles['mt-mobile-0_125'];
export const mtMobile0_25 = styles['mt-mobile-0_25'];
export const mtMobile0_5 = styles['mt-mobile-0_5'];
export const mtMobile1_5 = styles['mt-mobile-1_5'];
export const mtMobile1_75 = styles['mt-mobile-1_75'];
export const mtMobile2_5 = styles['mt-mobile-2_5'];
export const mtTablet0_125 = styles['mt-tablet-0_125'];
export const mtTablet0_25 = styles['mt-tablet-0_25'];
export const mtTablet0_5 = styles['mt-tablet-0_5'];
export const mtTablet1_5 = styles['mt-tablet-1_5'];
export const mtTablet1_75 = styles['mt-tablet-1_75'];
export const mtTablet2_5 = styles['mt-tablet-2_5'];
export const mx0_125 = styles['mx-0_125'];
export const mx0_25 = styles['mx-0_25'];
export const mx0_5 = styles['mx-0_5'];
export const mx1_5 = styles['mx-1_5'];
export const mx1_75 = styles['mx-1_75'];
export const mx2_5 = styles['mx-2_5'];
export const mxDesktop0_125 = styles['mx-desktop-0_125'];
export const mxDesktop0_25 = styles['mx-desktop-0_25'];
export const mxDesktop0_5 = styles['mx-desktop-0_5'];
export const mxDesktop1_5 = styles['mx-desktop-1_5'];
export const mxDesktop1_75 = styles['mx-desktop-1_75'];
export const mxDesktop2_5 = styles['mx-desktop-2_5'];
export const mxMobile0_125 = styles['mx-mobile-0_125'];
export const mxMobile0_25 = styles['mx-mobile-0_25'];
export const mxMobile0_5 = styles['mx-mobile-0_5'];
export const mxMobile1_5 = styles['mx-mobile-1_5'];
export const mxMobile1_75 = styles['mx-mobile-1_75'];
export const mxMobile2_5 = styles['mx-mobile-2_5'];
export const mxTablet0_125 = styles['mx-tablet-0_125'];
export const mxTablet0_25 = styles['mx-tablet-0_25'];
export const mxTablet0_5 = styles['mx-tablet-0_5'];
export const mxTablet1_5 = styles['mx-tablet-1_5'];
export const mxTablet1_75 = styles['mx-tablet-1_75'];
export const mxTablet2_5 = styles['mx-tablet-2_5'];
export const my0_125 = styles['my-0_125'];
export const my0_25 = styles['my-0_25'];
export const my0_5 = styles['my-0_5'];
export const my1_5 = styles['my-1_5'];
export const my1_75 = styles['my-1_75'];
export const my2_5 = styles['my-2_5'];
export const myDesktop0_125 = styles['my-desktop-0_125'];
export const myDesktop0_25 = styles['my-desktop-0_25'];
export const myDesktop0_5 = styles['my-desktop-0_5'];
export const myDesktop1_5 = styles['my-desktop-1_5'];
export const myDesktop1_75 = styles['my-desktop-1_75'];
export const myDesktop2_5 = styles['my-desktop-2_5'];
export const myMobile0_125 = styles['my-mobile-0_125'];
export const myMobile0_25 = styles['my-mobile-0_25'];
export const myMobile0_5 = styles['my-mobile-0_5'];
export const myMobile1_5 = styles['my-mobile-1_5'];
export const myMobile1_75 = styles['my-mobile-1_75'];
export const myMobile2_5 = styles['my-mobile-2_5'];
export const myTablet0_125 = styles['my-tablet-0_125'];
export const myTablet0_25 = styles['my-tablet-0_25'];
export const myTablet0_5 = styles['my-tablet-0_5'];
export const myTablet1_5 = styles['my-tablet-1_5'];
export const myTablet1_75 = styles['my-tablet-1_75'];
export const myTablet2_5 = styles['my-tablet-2_5'];
export const p0_125 = styles['p-0_125'];
export const p0_25 = styles['p-0_25'];
export const p0_5 = styles['p-0_5'];
export const p1_5 = styles['p-1_5'];
export const p1_75 = styles['p-1_75'];
export const p2_5 = styles['p-2_5'];
export const pDesktop0_125 = styles['p-desktop-0_125'];
export const pDesktop0_25 = styles['p-desktop-0_25'];
export const pDesktop0_5 = styles['p-desktop-0_5'];
export const pDesktop1_5 = styles['p-desktop-1_5'];
export const pDesktop1_75 = styles['p-desktop-1_75'];
export const pDesktop2_5 = styles['p-desktop-2_5'];
export const pMobile0_125 = styles['p-mobile-0_125'];
export const pMobile0_25 = styles['p-mobile-0_25'];
export const pMobile0_5 = styles['p-mobile-0_5'];
export const pMobile1_5 = styles['p-mobile-1_5'];
export const pMobile1_75 = styles['p-mobile-1_75'];
export const pMobile2_5 = styles['p-mobile-2_5'];
export const pTablet0_125 = styles['p-tablet-0_125'];
export const pTablet0_25 = styles['p-tablet-0_25'];
export const pTablet0_5 = styles['p-tablet-0_5'];
export const pTablet1_5 = styles['p-tablet-1_5'];
export const pTablet1_75 = styles['p-tablet-1_75'];
export const pTablet2_5 = styles['p-tablet-2_5'];
export const pb0_125 = styles['pb-0_125'];
export const pb0_25 = styles['pb-0_25'];
export const pb0_5 = styles['pb-0_5'];
export const pb1_5 = styles['pb-1_5'];
export const pb1_75 = styles['pb-1_75'];
export const pb2_5 = styles['pb-2_5'];
export const pbDesktop0_125 = styles['pb-desktop-0_125'];
export const pbDesktop0_25 = styles['pb-desktop-0_25'];
export const pbDesktop0_5 = styles['pb-desktop-0_5'];
export const pbDesktop1_5 = styles['pb-desktop-1_5'];
export const pbDesktop1_75 = styles['pb-desktop-1_75'];
export const pbDesktop2_5 = styles['pb-desktop-2_5'];
export const pbMobile0_125 = styles['pb-mobile-0_125'];
export const pbMobile0_25 = styles['pb-mobile-0_25'];
export const pbMobile0_5 = styles['pb-mobile-0_5'];
export const pbMobile1_5 = styles['pb-mobile-1_5'];
export const pbMobile1_75 = styles['pb-mobile-1_75'];
export const pbMobile2_5 = styles['pb-mobile-2_5'];
export const pbTablet0_125 = styles['pb-tablet-0_125'];
export const pbTablet0_25 = styles['pb-tablet-0_25'];
export const pbTablet0_5 = styles['pb-tablet-0_5'];
export const pbTablet1_5 = styles['pb-tablet-1_5'];
export const pbTablet1_75 = styles['pb-tablet-1_75'];
export const pbTablet2_5 = styles['pb-tablet-2_5'];
export const pl0_125 = styles['pl-0_125'];
export const pl0_25 = styles['pl-0_25'];
export const pl0_5 = styles['pl-0_5'];
export const pl1_5 = styles['pl-1_5'];
export const pl1_75 = styles['pl-1_75'];
export const pl2_5 = styles['pl-2_5'];
export const plDesktop0_125 = styles['pl-desktop-0_125'];
export const plDesktop0_25 = styles['pl-desktop-0_25'];
export const plDesktop0_5 = styles['pl-desktop-0_5'];
export const plDesktop1_5 = styles['pl-desktop-1_5'];
export const plDesktop1_75 = styles['pl-desktop-1_75'];
export const plDesktop2_5 = styles['pl-desktop-2_5'];
export const plMobile0_125 = styles['pl-mobile-0_125'];
export const plMobile0_25 = styles['pl-mobile-0_25'];
export const plMobile0_5 = styles['pl-mobile-0_5'];
export const plMobile1_5 = styles['pl-mobile-1_5'];
export const plMobile1_75 = styles['pl-mobile-1_75'];
export const plMobile2_5 = styles['pl-mobile-2_5'];
export const plTablet0_125 = styles['pl-tablet-0_125'];
export const plTablet0_25 = styles['pl-tablet-0_25'];
export const plTablet0_5 = styles['pl-tablet-0_5'];
export const plTablet1_5 = styles['pl-tablet-1_5'];
export const plTablet1_75 = styles['pl-tablet-1_75'];
export const plTablet2_5 = styles['pl-tablet-2_5'];
export const pr0_125 = styles['pr-0_125'];
export const pr0_25 = styles['pr-0_25'];
export const pr0_5 = styles['pr-0_5'];
export const pr1_5 = styles['pr-1_5'];
export const pr1_75 = styles['pr-1_75'];
export const pr2_5 = styles['pr-2_5'];
export const prDesktop0_125 = styles['pr-desktop-0_125'];
export const prDesktop0_25 = styles['pr-desktop-0_25'];
export const prDesktop0_5 = styles['pr-desktop-0_5'];
export const prDesktop1_5 = styles['pr-desktop-1_5'];
export const prDesktop1_75 = styles['pr-desktop-1_75'];
export const prDesktop2_5 = styles['pr-desktop-2_5'];
export const prMobile0_125 = styles['pr-mobile-0_125'];
export const prMobile0_25 = styles['pr-mobile-0_25'];
export const prMobile0_5 = styles['pr-mobile-0_5'];
export const prMobile1_5 = styles['pr-mobile-1_5'];
export const prMobile1_75 = styles['pr-mobile-1_75'];
export const prMobile2_5 = styles['pr-mobile-2_5'];
export const prTablet0_125 = styles['pr-tablet-0_125'];
export const prTablet0_25 = styles['pr-tablet-0_25'];
export const prTablet0_5 = styles['pr-tablet-0_5'];
export const prTablet1_5 = styles['pr-tablet-1_5'];
export const prTablet1_75 = styles['pr-tablet-1_75'];
export const prTablet2_5 = styles['pr-tablet-2_5'];
export const pt0_125 = styles['pt-0_125'];
export const pt0_25 = styles['pt-0_25'];
export const pt0_5 = styles['pt-0_5'];
export const pt1_5 = styles['pt-1_5'];
export const pt1_75 = styles['pt-1_75'];
export const pt2_5 = styles['pt-2_5'];
export const ptDesktop0_125 = styles['pt-desktop-0_125'];
export const ptDesktop0_25 = styles['pt-desktop-0_25'];
export const ptDesktop0_5 = styles['pt-desktop-0_5'];
export const ptDesktop1_5 = styles['pt-desktop-1_5'];
export const ptDesktop1_75 = styles['pt-desktop-1_75'];
export const ptDesktop2_5 = styles['pt-desktop-2_5'];
export const ptMobile0_125 = styles['pt-mobile-0_125'];
export const ptMobile0_25 = styles['pt-mobile-0_25'];
export const ptMobile0_5 = styles['pt-mobile-0_5'];
export const ptMobile1_5 = styles['pt-mobile-1_5'];
export const ptMobile1_75 = styles['pt-mobile-1_75'];
export const ptMobile2_5 = styles['pt-mobile-2_5'];
export const ptTablet0_125 = styles['pt-tablet-0_125'];
export const ptTablet0_25 = styles['pt-tablet-0_25'];
export const ptTablet0_5 = styles['pt-tablet-0_5'];
export const ptTablet1_5 = styles['pt-tablet-1_5'];
export const ptTablet1_75 = styles['pt-tablet-1_75'];
export const ptTablet2_5 = styles['pt-tablet-2_5'];
export const px0_125 = styles['px-0_125'];
export const px0_25 = styles['px-0_25'];
export const px0_5 = styles['px-0_5'];
export const px1_5 = styles['px-1_5'];
export const px1_75 = styles['px-1_75'];
export const px2_5 = styles['px-2_5'];
export const pxDesktop0_125 = styles['px-desktop-0_125'];
export const pxDesktop0_25 = styles['px-desktop-0_25'];
export const pxDesktop0_5 = styles['px-desktop-0_5'];
export const pxDesktop1_5 = styles['px-desktop-1_5'];
export const pxDesktop1_75 = styles['px-desktop-1_75'];
export const pxDesktop2_5 = styles['px-desktop-2_5'];
export const pxMobile0_125 = styles['px-mobile-0_125'];
export const pxMobile0_25 = styles['px-mobile-0_25'];
export const pxMobile0_5 = styles['px-mobile-0_5'];
export const pxMobile1_5 = styles['px-mobile-1_5'];
export const pxMobile1_75 = styles['px-mobile-1_75'];
export const pxMobile2_5 = styles['px-mobile-2_5'];
export const pxTablet0_125 = styles['px-tablet-0_125'];
export const pxTablet0_25 = styles['px-tablet-0_25'];
export const pxTablet0_5 = styles['px-tablet-0_5'];
export const pxTablet1_5 = styles['px-tablet-1_5'];
export const pxTablet1_75 = styles['px-tablet-1_75'];
export const pxTablet2_5 = styles['px-tablet-2_5'];
export const py0_125 = styles['py-0_125'];
export const py0_25 = styles['py-0_25'];
export const py0_5 = styles['py-0_5'];
export const py1_5 = styles['py-1_5'];
export const py1_75 = styles['py-1_75'];
export const py2_5 = styles['py-2_5'];
export const pyDesktop0_125 = styles['py-desktop-0_125'];
export const pyDesktop0_25 = styles['py-desktop-0_25'];
export const pyDesktop0_5 = styles['py-desktop-0_5'];
export const pyDesktop1_5 = styles['py-desktop-1_5'];
export const pyDesktop1_75 = styles['py-desktop-1_75'];
export const pyDesktop2_5 = styles['py-desktop-2_5'];
export const pyMobile0_125 = styles['py-mobile-0_125'];
export const pyMobile0_25 = styles['py-mobile-0_25'];
export const pyMobile0_5 = styles['py-mobile-0_5'];
export const pyMobile1_5 = styles['py-mobile-1_5'];
export const pyMobile1_75 = styles['py-mobile-1_75'];
export const pyMobile2_5 = styles['py-mobile-2_5'];
export const pyTablet0_125 = styles['py-tablet-0_125'];
export const pyTablet0_25 = styles['py-tablet-0_25'];
export const pyTablet0_5 = styles['py-tablet-0_5'];
export const pyTablet1_5 = styles['py-tablet-1_5'];
export const pyTablet1_75 = styles['py-tablet-1_75'];
export const pyTablet2_5 = styles['py-tablet-2_5'];
