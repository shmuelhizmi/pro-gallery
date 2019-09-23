import {SECTIONS, SUB_SECTIONS} from './consts';

export default {
  isStore: {
    section: SECTIONS.STORE,
    title: 'Is store',
    description: "",
  },
  showAddToCartSection: {
    section: SECTIONS.STORE,
    title: 'show Add To Cart Section',
    description: "",
  },
  canUseWatermark: {
    section: SECTIONS.STORE,
    title: 'can Use Watermark',
    description: "",
  },

  galleryLayout: {
    section: SECTIONS.LAYOUT,
    title: 'Gallery Layout',
    description: "",
  },
  slideshowLoop: {
    section: SECTIONS.LAYOUT,
    title: 'Loop Images',
    description: "",
  },
  isAutoSlideshow: {
    section: SECTIONS.LAYOUT,
    title: 'Auto Slide',
    description: "",
  },
  autoSlideshowInterval: {
    section: SECTIONS.LAYOUT,
    title: 'Time Between Images',
    description: "",
  },
  slideshowInfoSize: {
    section: SECTIONS.LAYOUT,
    title: 'Info bar size',
    description: "",
  },
  playButtonForAutoSlideShow: {
    section: SECTIONS.LAYOUT,
    title: 'Play button',
    description: "",
  },
  scrollDirection: {
    section: SECTIONS.LAYOUT,
    title: "Scroll Direction",
    description: "",
  },
  isVertical: {
    section: SECTIONS.LAYOUT,
    title: "Image Orientation",
    description: "",
  },
  isRTL: {
    section: SECTIONS.LAYOUT,
    title: "Layout Direction",
    description: "",
  },
  allowTitle: {
    section: SECTIONS.LAYOUT,
    title: "Allow Title",
    description: "",
  },
  allowDescription: {
    section: SECTIONS.LAYOUT,
    title: "Allow Description",
    description: "",
  },
  allowSlideshowCounter: {
    section: SECTIONS.LAYOUT,
    title: "Slideshow counter",
    description: "",
  },
  titlePlacement: {
    section: SECTIONS.LAYOUT,
    title: "Title Placement",
    description: "",
  },
  hoveringBehaviour: {
    section: SECTIONS.LAYOUT,
    title: "What happens to the info on hover?",
    description: "",
  },
  cubeType: {
    section: SECTIONS.LAYOUT,
    title: "Thumbnail Resize",
    description: "",
  },
  cubeRatio: {
    section: SECTIONS.LAYOUT,
    title: "Image Ratio",
    description: "",

  },
  gallerySliderImageRatio: {
    section: SECTIONS.LAYOUT,
    title: "Image Ratio - Slider",
    description: "",
  },
  galleryThumbnailsAlignment: {
    section: SECTIONS.LAYOUT,
    title: "Thumbnail Placement",
    description: "",
  },
  thumbnailSize: {
    section: SECTIONS.LAYOUT,
    title: "Thumbnail Size",
    description: "",
  },
  gridStyle: {
    section: SECTIONS.LAYOUT,
    title: "Grid Style",
    description: "",
  },
  gallerySize: {
    section: SECTIONS.LAYOUT,
    title: "Thumbnail Size",
    description: "",
  },
  numberOfImagesPerRow: {
    section: SECTIONS.LAYOUT,
    title: "Images Per Row",
    description: "",
  },
  numberOfImagesPerCol: {
    section: SECTIONS.LAYOUT,
    title: "Images Per Column",
    description: "",
  },
  groupSize: {
    section: SECTIONS.LAYOUT,
    title: "Max Group Size",
    description: "",
  },
  groupsPerStrip: {
    section: SECTIONS.LAYOUT,
    title: "Groups per Strip",
    description: "",
  },
  groupTypes: {
    section: SECTIONS.LAYOUT,
    title: "Allowed Group Types",
    description: "",
  },
  rotatingGroupTypes: {
    section: SECTIONS.LAYOUT,
    title: "Repeating Group Types",
    description: "",
  },
  thumbnailSpacings: {
    section: SECTIONS.LAYOUT,
    title: "Spacing between Thumbnails",
    description: "",
  },
  imageMargin: {
    section: SECTIONS.LAYOUT,
    title: "Spacing between Items",
    description: "Set the spacing between the items in your gallery.",
  },
  galleryMargin: {
    section: SECTIONS.LAYOUT,
    title: "Gallery Spacing",
    description: "",
  },
  floatingImages: {
    section: SECTIONS.LAYOUT,
    title: "floating Images",
    description: "",
  },
  collageDensity: {
    section: SECTIONS.LAYOUT,
    title: "Collage Density",
    description: "",
  },
  enableInfiniteScroll: {
    section: SECTIONS.LAYOUT,
    title: "Load More Button",
    description: "",
  },
  loadMoreAmount: {
    section: SECTIONS.LAYOUT,
    title: "Load More Amount",
    description: "",
  }, 
  magicLayoutSeed: {
    section: SECTIONS.LAYOUT,
    title: "To freshen up your gallery with an all-new look click Create Magic Layout.",
    text: "Generate Magic Layout",
    description: "",
  },
  //----------| SETTINGS SECTION |---------//
  scrollSnap: {
    section: SECTIONS.SETTINGS,
    title: 'Auto Scroll to Image Center',
    description: "",
  },
  itemClick: {
    section: SECTIONS.OPTIONS,
    title: 'When clicking on an item:',
    description: "",
  },
  useWatermark: {
    section: SECTIONS.SETTINGS,
    title: 'Watermark',
    description: "",
  },
  watermarkOpacity: {
    section: SECTIONS.SETTINGS,
    title: 'Watermark Opacity',
    description: "",
    unit: '%',
  },
  watermarkSize: {
    section: SECTIONS.SETTINGS,
    title: 'Watermark Size',
    description: "",
    unit: '%',
  },
  watermarkDock: {
    section: SECTIONS.SETTINGS,
    title: 'Watermark Dock',
    description: "",
  },
  allowDownload: {
    section: SECTIONS.SETTINGS,
    title: 'Show Download Button',
    description: "",
  },
  allowSocial: {
    section: SECTIONS.SETTINGS,
    title: 'Show Share Button',
    description: "",
  },
  loveButton: {
    section: SECTIONS.SETTINGS,
    title: 'Show Love Button',
    description: "",
  },
  loveCounter: {
    section: SECTIONS.SETTINGS,
    title: 'Show Love Counter',
    description: "",
  },
  //------------------------ Design ----------------------//
  itemOpacity: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.OVERLAY_AND_ICONS,
    title: 'Color Overlay',
    description: "",
  },
  itemIconColorSlideshow: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.OVERLAY_AND_ICONS,
    title: 'Icon color',
    description: "",
  },
  itemIconColor: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.OVERLAY_AND_ICONS,
    title: 'Icon color',
    description: "",
  },
  arrowsSize: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.OVERLAY_AND_ICONS,
    title: 'Arrows Size',
    description: "",
  },
  arrowsColor: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.OVERLAY_AND_ICONS,
    title: 'Arrows Color',
    description: "",
  },
  arrowsPosition: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.OVERLAY_AND_ICONS,
    title: 'Navigation arrows position',
    description: "",
  },
  overlayAnimation:  {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.OVERLAY_AND_ICONS,
    title: 'Choose an effect when hovering over an image',
    description: "",
  },
  imageHoverAnimation: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.OVERLAY_AND_ICONS,
    title: 'Choose an effect when hovering over an image',
    description: "",
  },
  itemFont: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.TEXTS,
    title: 'Title Font',
    description: "",
  },
  itemFontColor: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.TEXTS,
    title: 'Title Font Color',
    description: "",
  },
  itemFontSlideshow: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.TEXTS,
    title: 'Title Font',
    description: "",
  },
  itemFontColorSlideshow: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.TEXTS,
    title: 'Title Font Color',
    description: "",
  },
  itemDescriptionFont: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.TEXTS,
    title: 'Description Font',
    description: "",
  },
  itemDescriptionFontColor: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.TEXTS,
    title: 'Description Font Color',
    description: "",
  },
  itemDescriptionFontSlideshow: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.TEXTS,
    title: 'Description Font',
    description: "",
  },
  itemDescriptionFontColorSlideshow: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.TEXTS,
    title: 'Description Color',
    description: "",
  },
  galleryHorizontalAlign: { // ALSO sets galleryTextAlign --- 
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.TEXTS,
    title: 'Text Alignment',
    description: "",
  },
  galleryVerticalAlign: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.TEXTS,
    title: 'Vertical Text Alignment',
    description: "",
  },
  textBoxFillColor: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.TEXTS,
    title: 'Fill Color & Opacity',
    description: "",
  },
  calculateTextBoxHeightMode: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.TEXTS,
    title: 'Calculate text box height:',
    description: "",
  },
  textBoxHeight: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.TEXTS,
    title: 'Text Box Height',
    description: "",
  },
  textImageSpace: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.TEXTS,
    title: 'Text Space From Image',
    description: "",
  },
  textBoxBorderRadius: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.TEXTS,
    title: 'Text box corner radius',
    description: "",
  },
  textBoxBorderWidth: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.TEXTS,
    title: 'Text box border width',
    description: "",
  },
  textBoxBorderColor: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.TEXTS,
    title: 'Text box border color',
    description: "",
  },
  textsVerticalPadding: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.TEXTS,
    title: 'Text vertical padding',
    description: "",
  },
  textsHorizontalPadding: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.TEXTS,
    title: 'Text horizontal padding',
    description: "",
  },
  titleDescriptionSpace: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.TEXTS,
    title: 'Title Description Space',
    description: "",
  },
  useCustomButton: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.BUTTONS,
    title: 'Buy Now Button',
    description: "",
  },
  customButtonText: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.BUTTONS,
    title: 'Button Text',
    description: "",
  },
  customButtonFontForHover: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.BUTTONS,
    title: 'Button Font Hover',
    description: "",
  },
  customButtonFontColorForHover: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.BUTTONS,
    title: 'Button Font Color Hover',
    description: "",
  },
  customButtonFont: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.BUTTONS,
    title: 'Button Font',
    description: "",
    fontMinSize:14,
    fontMaxSize: 22,
  },
  customButtonFontColor: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.BUTTONS,
    title: 'Button Font Color',
    description: "",
  },
  customButtonColor: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.BUTTONS,
    title: 'Button Color',
    description: "",
  },
  customButtonBorderWidth: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.BUTTONS,
    title: 'Border Width',
    description: "",
  },
  customButtonBorderColor: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.BUTTONS,
    title: 'Border Color',
    description: "",
  },
  customButtonBorderRadius: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.BUTTONS,
    title: 'Border Radius',
    description: "",
  },
  loadMoreButtonText: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.BUTTONS,
    title: 'load more Button Text',
    description: "",
  },
  loadMoreButtonFont: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.BUTTONS,
    title: 'load more Button Font',
    description: "",
  },
  loadMoreButtonFontColor: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.BUTTONS,
    title: 'load more Button Font Color',
    description: "",
  },
  loadMoreButtonColor: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.BUTTONS,
    title: 'Button Color & Opacity',
    description: "",
  },
  loadMoreButtonBorderWidth: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.BUTTONS,
    title: 'load more Border Width',
    description: "",
  },
  loadMoreButtonBorderColor: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.BUTTONS,
    title: 'load more Border Color',
    description: "",
  }, 
  loadMoreButtonBorderRadius: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.BUTTONS,
    title: 'load More Border Radius',
    description: "",
  },
  imageInfoType: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.ITEM_STYLE,
    title: 'Choose info layout',
    description: "",
  },
  itemBorderWidth: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.ITEM_STYLE,
    title: 'item Border Width',
    description: "",
  },
  itemBorderColor: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.ITEM_STYLE,
    title: 'item Border Color & Opacity',
    description: "",
  },
  itemBorderRadius: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.ITEM_STYLE,
    title: 'item Border Radius',
    description: "",
  },
  itemEnableShadow: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.ITEM_STYLE,
    title: 'Shadow',
    description: "",
  },
  itemShadowOpacityAndColor: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.ITEM_STYLE,
    title: 'Shadow Opacity & Color',
    description: "",
  },
  itemShadowBlur: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.ITEM_STYLE,
    title: 'Shadow Blur',
    description: "",
  },
  itemShadowDirection: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.ITEM_STYLE,
    title: 'Shadow Direction',
    description: "",
  },
  itemShadowSize: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.ITEM_STYLE,
    title: 'Shadow Size',
    description: "",
  },
  imageLoadingMode: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.ITEM_STYLE,
    title: 'What shows while image is loading?',
    description: "",
  },
  imageLoadingColor: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.ITEM_STYLE,
    title: 'Color Background Placeholder',
    description: "",
  },
  expandAnimation: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.EXPAND_MODE,
    title: 'How does your expand mode open?',
    description: "",
  },
  scrollAnimation: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.SCROLL_ANIMATION,
    title: 'Choose how images appear when scrolling down the page',
    description: "",
  },
  oneColorAnimationColor: {
    section: SECTIONS.DESIGN,
    subSection: SUB_SECTIONS.DESIGN.SCROLL_ANIMATION,
    title: 'Pick a color',
    description: "",
  },
  allowTitleExpand: {
    section: SECTIONS.EXPAND_MODE,
    title: 'Title',
    description: "",
  },
  allowDescriptionExpand: {
    section: SECTIONS.EXPAND_MODE,
    title: 'Description',
    description: "",
  },
  allowLinkExpand: {
    section: SECTIONS.EXPAND_MODE,
    title: 'Link',
    description: "",
  },
  expandInfoPosition: {
    section: SECTIONS.EXPAND_MODE,
    subSection: SUB_SECTIONS.DESIGN.SCROLL_ANIMATION,
    title: 'Where does it appear?',
    description: "",
  },
  defaultShowInfoExpand: {
    section: SECTIONS.EXPAND_MODE,
    subSection: SUB_SECTIONS.DESIGN.SCROLL_ANIMATION,
    title: 'Choose how images appear when scrolling down the page',
    description: "",
  },
  allowFullscreenExpand: {
    section: SECTIONS.EXPAND_MODE,
    title: 'Allow full screen',
    description: 'Viewers can open images in full screen mode.',
  },
  fullscreenLoop: {
    section: SECTIONS.EXPAND_MODE,
    title: 'Loop images',
    description: 'Viewers can scroll through images in a continuous loop.',
  },
  bgColorExpand: {
    section: SECTIONS.EXPAND_MODE,
    title: 'Background color',
    description: "",
  },
  actionsColorExpand: {
    section: SECTIONS.EXPAND_MODE,
    title: 'Icon color',
    description: "",
  },
  titleFontExpand: {
    section: SECTIONS.EXPAND_MODE,
    title: 'title Font Expand',
    description: "",
  },
  titleColorExpand: {
    section: SECTIONS.EXPAND_MODE,
    title: 'title Color Expand',
    description: "",
  },
  descriptionFontExpand: {
    section: SECTIONS.EXPAND_MODE,
    title: 'description Font Expand',
    description: "",
  },
  descriptionColorExpand: {
    section: SECTIONS.EXPAND_MODE,
    title: 'description Color Expand',
    description: "",
  },
  galleryAlignExpand: {
    section: SECTIONS.EXPAND_MODE,
    title: 'Text alignment',
    description: "",
  },
  addToCartBackColorExpand: {
    section: SECTIONS.EXPAND_MODE,
    title: 'addToCartBackColorExpand - Button color & opacity',
    description: "",
  }, 
  addToCartFontExpand: {
    section: SECTIONS.EXPAND_MODE,
    title: 'add To Cart Font Expand',
    description: "",
  },
  addToCartColorExpand: {
    section: SECTIONS.EXPAND_MODE,
    title: 'add To Cart Color Expand',
    description: "",
  },
  addToCartBorderWidth: {
    section: SECTIONS.EXPAND_MODE,
    title: 'add To Cart Border width',
    description: "",
  },
  addToCartBorderColor: {
    section: SECTIONS.EXPAND_MODE,
    title: 'add To Cart Border Color',
    description: "",
  },
  addToCartButtonText: {
    section: SECTIONS.EXPAND_MODE,
    title: 'add To Cart Button Text',
    description: "",
    maxLength: 30,
  },
  imageQuality: {
    section: SECTIONS.ADVANCED,
    title: 'Image Quality',
    description: 'Higher quality images often take longer to load. The recommended setting is 90%. (JPEG images only)',
  },
  usmToggle: {
    section: SECTIONS.ADVANCED,
    title: 'Image Sharpening',
    description: 'Sharpen all images in this gallery using the Amount, Radius and Threshold controls.',
  },
  usm_a: {
    section: SECTIONS.ADVANCED,
    title: 'Amount',
    description: '',
  },
  usm_r: {
    section: SECTIONS.ADVANCED,
    title: 'Radius',
    description: '',
  },
  usm_t: {
    section: SECTIONS.ADVANCED,
    title: 'Threshold (Levels)',
    description: '',
  },
  videoPlay: {
    section: SECTIONS.ADVANCED,
    title: 'Playing Options',
    description: 'You control how your videos play: On hover, autoplay, or on click.',
  },
  videoSound: {
    section: SECTIONS.ADVANCED,
    title: 'Play with sound',
    description: 'Videos are muted in gallery view by default. Enable to play videos with sound. In Expand Mode, the video will always play with the sound on.',
  },
  videoSpeed: {
    section: SECTIONS.ADVANCED,
    title: 'Playback speed',
    description: 'You control how your videos play: On hover, autoplay, or on click.',
  },
  videoLoop: {
    section: SECTIONS.ADVANCED,
    title: 'Loop videos',
    description: '',
  }
};
