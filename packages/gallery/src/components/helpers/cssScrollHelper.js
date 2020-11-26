import { GALLERY_CONSTS, window, utils } from 'pro-gallery-lib';

class CssScrollHelper {
  constructor() {
    this.pgScrollSteps = [];
    for (let i = 1; i < 50000; i *= 2) {
      this.pgScrollSteps.push(i);
    }
    this.pgScrollSteps.reverse();
    this.pgScrollClassName = 'pgscl';

    this.screenSize = Math.max(window.screen.width, window.screen.height);

    this.scrollCss = [];
    this.scrollCssProps = [];
  }

  getSellectorDomId({ id, idx }) {
    const shortId = String(id).replace(/[\W]+/g, '');
    return `pgi${shortId}_${idx}`;
  }

  buildScrollClassName(idx, val, domId) {
    const shortId = String(domId || this.domId).replace(/[\W]+/g, '').slice(-8);
    return `${this.pgScrollClassName}_${shortId}_${val}-${
      this.pgScrollSteps[idx] + Number(val)
    }`;
  }

  calcScrollClasses(scrollTop, domId) {
    //used by the scroll indicator
    return (
      `${this.pgScrollClassName}-${scrollTop} ` +
      this.pgScrollSteps
        .map((step, idx) =>
          this.buildScrollClassName(
            idx,
            Math.floor(scrollTop / step) * step,
            domId
          )
        )
        .join(' ')
    );
  }

  createSelectorsRange(suffix, from, to, css) {
    let scrollClasses = [];
    while (from < to) {
      const largestDividerIdx = this.pgScrollSteps.findIndex(step => (from % step === 0 && from + step <= to)); //eslint-disable-line
      scrollClasses.push(
        `.${this.buildScrollClassName(
          largestDividerIdx,
          from
        )} ~ div ${suffix} {${css}}`
      );
      from += this.pgScrollSteps[largestDividerIdx];
      // console.count('pgScroll class created');
    }
    console.log('CSS SCROLL - scrollClasses: ', scrollClasses)
    return scrollClasses;
  }

  createScrollSelectorsFunction({ item, container, styleParams }) {
    const imageStart = (styleParams.oneRow
      ? item.offset.left
      : item.offset.top);
    const imageSize = styleParams.oneRow
      ? item.width
      : item.height;

    const containerSize =  styleParams.oneRow
      ? Math.min(container.width, window.innerWidth)
      : Math.min(container.height, window.innerHeight) + container.scrollBase;

    const minStep = this.pgScrollSteps[this.pgScrollSteps.length - 1];
    const ceil = (num, step) =>
      Math.ceil(Math.min(this.maxHeight, num) / step) * step;
    const floor = (num, step) =>
      Math.floor(Math.max(this.minHeight, num) / step) * step;
    const sellectorDomId = this.getSellectorDomId(item);


    return (range, animation, animationCss, suffix) => {
      const [start, stop] = range;
        // start:  the distance from the bottom of the screen to start the animation
        // stop:  the distance from the bottom of the screen to end the animation
      const [from, to] = animation;
        // from: the animation start value
        // to: the animation end value
      const iterations = 50;
      const step = Math.round((stop - start) / iterations);

      const createAnimationStep = idx => {
        const step = (((to - from) / iterations)) * idx + from;
        return animationCss.replace('#', step);
      }
      //fade into the screen


      const animationStart = imageStart - containerSize + start;
      const animationEnd = animationStart + imageSize + stop;

      const scrollClasses = [
      //first batch: animation start value until the range start:
        ...this.createSelectorsRange(suffix, 0, animationStart, createAnimationStep(0)),
        ...Array.from({length: iterations})
          .map((i, idx) => animationStart + idx * (animationEnd - animationStart) / iterations)
          .map((i, idx) => this.createSelectorsRange(suffix, i, i + ((animationEnd - animationStart) / iterations), createAnimationStep(idx)))
          .flat(1),
        ...this.createSelectorsRange(suffix, animationEnd, animationEnd + document.outerHeight, createAnimationStep(iterations)),
      ]


      // if (utils.isVerbose()) {
      //   console.log(
      //     `CSS SCROLL - item #${item.idx} display range is: (${from} - ${to})`,
      //   );
      // }
      return scrollClasses.join(' ');
    };
  }

  calcScrollCss({ domId, items, container, styleParams }) {
    this.domId = domId;
    const scrollAnimation = styleParams.scrollAnimation;
    if (!(items && items.length)) {
      return [];
    }
    if (
      !scrollAnimation ||
      scrollAnimation === GALLERY_CONSTS.scrollAnimations.NO_EFFECT
    ) {
      return [];
    }

    const res = items.map((item) =>
      this.calcScrollCssForItem({ item, container, styleParams })
    );
    debugger;
    return res;
  }

  shouldCalcScrollCss({ type }) {
    if (type === 'video' || type === 'text') {
      return false;
    }
    return true;
  }

  calcScrollCssForItem({ domId, item, container, styleParams }) {
    const { idx } = item;
    let scrollCss = '';
    const createScrollSelectors = this.createScrollSelectorsFunction({
      domId,
      item,
      container, 
      styleParams,
    });

    //scrollAnimation
    scrollCss += this.createScrollAnimationsIfNeeded({
      idx,
      item,
      styleParams,
      createScrollSelectors,
    });

    // if (utils.isVerbose()) {
    //   console.log(
    //     'CSS SCROLL - css calc for item #' + idx,
    //     item,
    //     this.scrollCss[idx],
    //   );
    // }

    this.scrollCss[idx] = scrollCss || this.scrollCss[idx];

    return this.scrollCss[idx];
    // console.count('pgScroll item created');
  }

  createScrollAnimationsIfNeeded({ idx, item, styleParams, createScrollSelectors }) {
    const { isRTL, oneRow, scrollAnimation } = styleParams;

    if (
      !scrollAnimation ||
      scrollAnimation === GALLERY_CONSTS.scrollAnimations.NO_EFFECT
    ) {
      return '';
    }

    // return createScrollSelectors([150, 800], [0, 1], 'opacity: #;', `#${this.getSellectorDomId(item)} .gallery-item-wrapper`);
    return createScrollSelectors([0, 100], [100, 0], 'transform: translateY(#px);', `#${this.getSellectorDomId(item)}`);


    const _randomDelay = ((idx % 3) + 1) * 100; //100 - 300
    const _randomDuration = ((idx % 3) + 1) * 100; //100 - 300

    const animationPreparationPadding = this.allPagePadding();
    const animationActivePadding = this.aboveScreenPadding();

    let scrollAnimationCss = '';
    // notice: these 2 animations must have the blurry image
    if (
      scrollAnimation === GALLERY_CONSTS.scrollAnimations.MAIN_COLOR ||
      scrollAnimation === GALLERY_CONSTS.scrollAnimations.BLUR
    ) {
      scrollAnimationCss +=
        createScrollSelectors(
          animationPreparationPadding,
          ` [data-hook="image-item-overlay"]`
        ) +
        `{filter: opacity(1); transition: filter 1.${_randomDuration}s ease-in ${_randomDelay}ms !important;}`;
      scrollAnimationCss +=
        createScrollSelectors(
          animationActivePadding,
          ` [data-hook="image-item-overlay"]`
        ) + `{filter: opacity(0) !important;}`;
    }

    if (scrollAnimation === GALLERY_CONSTS.scrollAnimations.FADE_IN) {
      scrollAnimationCss +=
        createScrollSelectors(
          animationPreparationPadding,
          ' .gallery-item-wrapper'
        ) +
        `{filter: opacity(0); transition: filter 1.${_randomDuration}s ease-in !important;}`;
      scrollAnimationCss +=
        createScrollSelectors(
          animationActivePadding,
          ' .gallery-item-wrapper'
        ) + `{filter: opacity(1) !important;}`;
    }

    if (scrollAnimation === GALLERY_CONSTS.scrollAnimations.GRAYSCALE) {
      scrollAnimationCss +=
        createScrollSelectors(
          animationPreparationPadding,
          ' .gallery-item-wrapper'
        ) +
        `{filter: grayscale(100%); transition: filter 1.${
          200 + _randomDuration
        }s ease-in !important;}`;
      scrollAnimationCss +=
        createScrollSelectors(
          animationActivePadding,
          ' .gallery-item-wrapper'
        ) + `{filter: grayscale(0) !important;}`;
    }

    if (scrollAnimation === GALLERY_CONSTS.scrollAnimations.SLIDE_UP) {
      const axis = oneRow ? 'X' : 'Y';
      const direction = isRTL ? '-' : '';
      scrollAnimationCss +=
        createScrollSelectors(animationPreparationPadding, '') +
        `{transform: translate${axis}(${direction}100px); transition: transform 0.8s cubic-bezier(.13,.78,.53,.92) !important;}`;
      scrollAnimationCss +=
        createScrollSelectors(animationActivePadding, '') +
        `{transform: translate${axis}(0) !important;}`;
    }

    if (scrollAnimation === GALLERY_CONSTS.scrollAnimations.EXPAND) {
      scrollAnimationCss +=
        createScrollSelectors(animationPreparationPadding, '') +
        `{transform: scale(0.95); transition: transform 1s cubic-bezier(.13,.78,.53,.92) ${_randomDelay}ms !important;}`;
      scrollAnimationCss +=
        createScrollSelectors(animationActivePadding, '') +
        `{transform: scale(1) !important;}`;
    }

    if (scrollAnimation === GALLERY_CONSTS.scrollAnimations.SHRINK) {
      scrollAnimationCss +=
        createScrollSelectors(animationPreparationPadding, '') +
        `{transform: scale(1.05); transition: transform 1s cubic-bezier(.13,.78,.53,.92) ${_randomDelay}ms !important;}`;
      scrollAnimationCss +=
        createScrollSelectors(animationActivePadding, '') +
        `{transform: scale(1) !important;}`;
    }

    if (scrollAnimation === GALLERY_CONSTS.scrollAnimations.ZOOM_OUT) {
      scrollAnimationCss +=
        createScrollSelectors(
          animationPreparationPadding,
          ' .gallery-item-wrapper'
        ) +
        `{transform: scale(1.1); transition: transform 1.2s cubic-bezier(.13,.78,.53,.92) ${_randomDelay}ms !important;}`;
      scrollAnimationCss +=
        createScrollSelectors(
          animationActivePadding,
          ' .gallery-item-wrapper'
        ) + `{transform: scale(1) !important;}`;
    }

    if (scrollAnimation === GALLERY_CONSTS.scrollAnimations.ONE_COLOR) {
      const oneColorAnimationColor =
        styleParams.oneColorAnimationColor &&
        styleParams.oneColorAnimationColor.value
          ? styleParams.oneColorAnimationColor.value
          : 'transparent';

      scrollAnimationCss +=
        createScrollSelectors(animationPreparationPadding, '') +
        `{background-color: ${oneColorAnimationColor};}`;
      scrollAnimationCss +=
        createScrollSelectors(
          animationPreparationPadding,
          ' .gallery-item-wrapper'
        ) +
        `{filter: opacity(0); transition: filter 0.${
          600 + _randomDuration
        }s ease-in !important;}`;
      scrollAnimationCss +=
        createScrollSelectors(
          animationActivePadding,
          ' .gallery-item-wrapper'
        ) + `{filter: opacity(1) !important;}`;
    }

    return scrollAnimationCss;
  }
}

export const cssScrollHelper = new CssScrollHelper();

// Testing the best combination of scroll steps (goal is to reduce the number of classe sper item to minimum)
// ----------------------------------------------------------------------------------------------------------
// pgScrollSteps = [1000, 100, 10]; -> 6759 / 354 = 19 classes per item
// pgScrollSteps = [2500, 500, 100, 20]; -> 4137 / 354 = 11.6 classes per item
// pgScrollSteps = [2560, 1280, 640, 320, 160, 80, 40, 20]; -> 2502 / 354 = 7 classes per item
// pgScrollSteps = [5120, 2560, 1280, 640, 320, 160, 80, 40, 20]; -> 2502 / 354 = 7 classes per item
// pgScrollSteps = [5120, 2560, 1280, 640, 320, 160, 80, 40, 20, 10]; -> 2772 / 354 = 7.8 classes per item
