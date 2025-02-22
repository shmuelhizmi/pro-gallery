import React, {useEffect, Suspense, useState} from 'react';
// import {SideBar} from '../SideBar';
import {useGalleryContext} from '../../hooks/useGalleryContext';
import {testMedia, testItems, testImages, testVideos, testTexts, monochromeImages} from './images';
import {mixAndSlice, isTestingEnvironment, getTotalItemsCountFromUrl} from "../../utils/utils";
import {SIDEBAR_WIDTH, ITEMS_BATCH_SIZE} from '../../constants/consts';
import { createMediaUrl } from '../../utils/itemResizer';
import {setOptionsInUrl} from '../../constants/options'
import { GALLERY_CONSTS, ProGallery, ProGalleryRenderer } from 'pro-gallery';
import ExpandableProGallery from './expandableGallery';
import SideBarButton from '../SideBar/SideBarButton';
import { BlueprintsManager } from 'pro-gallery-blueprints'
import BlueprintsApi from './PlaygroundBlueprintsApi'
import {utils} from 'pro-gallery-lib';
import { Resizable } from 're-resizable';

import 'pro-gallery/dist/statics/main.css';
import s from './App.module.scss';

// import { LeanGallery, isEligibleForLeanGallery } from 'lean-gallery';
import 'lean-gallery/dist/styles/leanGallery.css';

// //dummy commit
const SideBar = React.lazy(() => import('../SideBar'));

const pJson = require('../../../package.json');

const blueprintsManager = new BlueprintsManager({id: 'playground'});
const GALLERY_EVENTS = GALLERY_CONSTS.events;

const galleryReadyEvent = new Event('galleryReady');
let sideShownOnce = false;
let totalItems = 0;

export function App() {
  const {getBlueprintFromServer, setContainer, options, setItems, items, gallerySettings, setBlueprint, blueprint, container, setShowSide} = useGalleryContext(blueprintsManager);
  const {showSide} = gallerySettings;
  sideShownOnce = sideShownOnce || showSide;

  // const [fullscreenIdx, setFullscreenIdx] = useState(-1);
  const {numberOfItems = 0, mediaTypes = 'media'} = gallerySettings || {};
  const isTestingEnv = isTestingEnvironment(window.location.search);

  const [resizedDims, setResizedDims] = useState({width: 320, height: 500});

  const _mixAndSlice = (items, batchSize, shouldAdd) => {
    const mixedItems = mixAndSlice(items, batchSize, totalItems, gallerySettings);
    if (shouldAdd) {
      totalItems += mixedItems.length;
    }
    return mixedItems;
  }

  const initialItems = {
    media: _mixAndSlice(testMedia, ITEMS_BATCH_SIZE),
    mixed: _mixAndSlice(testItems, ITEMS_BATCH_SIZE),
    texts: _mixAndSlice(testTexts, ITEMS_BATCH_SIZE),
    videos: _mixAndSlice(testVideos, ITEMS_BATCH_SIZE),
    images: _mixAndSlice(testImages, ITEMS_BATCH_SIZE)
  };

  const switchState = () => {
    setShowSide(!showSide);
  };

  const setGalleryReady = () => {
    window.dispatchEvent(galleryReadyEvent);
  }
  const eventListener = (eventName, eventData) => {
    switch (eventName) {
      case GALLERY_EVENTS.APP_LOADED:
        setGalleryReady();
        break;
      case GALLERY_EVENTS.GALLERY_CHANGE: //TODO split to an event named "PARTIALY_GROW_GALLERY_PRETTY_PLEASE"
        if(eventData.updatedHeight){
          setContainer({height: eventData.updatedHeight});
        }
        break;
      case GALLERY_EVENTS.NEED_MORE_ITEMS:
        if(gallerySettings.useBlueprints){
          blueprintsManager.needMoreItems(eventData);
        } else {
          addItems();
        }
        break;
      case GALLERY_EVENTS.ITEM_ACTION_TRIGGERED:
        // setFullscreenIdx(eventData.idx);
        break;
      case GALLERY_EVENTS.LOAD_MORE_CLICKED:
        break;
      default:
        // console.log({eventName, eventData});
        break;
    }
  }

  const addItems = () => {
    const currentItems = getItems();
    if (!window.benchmarking && (!numberOfItems || currentItems.length < numberOfItems)) { //zero items means infinite
      const newItems = currentItems.concat(createItems());
      setItems(newItems);
      return newItems;
    }
  }

  const createItems = () => {
    const batchSize = numberOfItems || ITEMS_BATCH_SIZE;
    switch (mediaTypes) {
      case 'images':
        return _mixAndSlice(testImages, batchSize, true);
      case 'videos':
        return _mixAndSlice(testVideos, batchSize, true);
      case 'texts':
        return _mixAndSlice(testTexts, batchSize, true);
      case 'mixed':
        return _mixAndSlice(testItems, batchSize, true);
      case 'media':
      default:
        return _mixAndSlice(testMedia, batchSize, true);
    }
  }

  const getItems = () => {

    // return initialItems.mixed.slice(0, 3);
    if (isTestingEnvironment(window.location.search)) {
      return monochromeImages.slice(0,20);
    }

    const theItems = items || initialItems[mediaTypes];
    if (numberOfItems > 0) {
      return theItems.slice(0, numberOfItems);
    } else {
      return theItems;
    }
  }


    const getTotalItemsCount = () => {
      const totalItemsCountFromUrl = getTotalItemsCountFromUrl(window.location.search);
      if (totalItemsCountFromUrl) {
        return totalItemsCountFromUrl;
      }

      return numberOfItems > 0 ? numberOfItems : Infinity;
    }


  const getOrInitBlueprint = () => {
    if (blueprint) {
      return blueprint;
    } else if (gallerySettings.shouldUseBlueprintsFromServer) {
      const params = {
        container: getContainer(),
        options: getOptions(),
        items: getItems()
      }
      getBlueprintFromServer(params);
    } else {
      const playgroundBlueprintsApi = new BlueprintsApi({addItems, getItems, getContainer, getOptions, onBlueprintReady: setBlueprint, getTotalItemsCount});
      blueprintsManager.init({api: playgroundBlueprintsApi})
      blueprintsManager.createBlueprint({items: getItems(), options: getOptions(), container: getContainer(), totalItemsCount: getTotalItemsCount()}, true);
    }
  }

  const renderInfoElement = (type, pgItemProps) => {

    const infoElement = (<div className={'playground-info'}>
      <div className={'playground-info-title'}>
        <p>{pgItemProps.title}</p>
      </div>
      <div className={'playground-info-description'}>
        <p>{pgItemProps.description}</p>
      </div>
    </div>);

    const { titlePlacement } = pgItemProps.options;

    switch (type) {
      case 'HOVER':
        if (GALLERY_CONSTS.hasHoverPlacement(titlePlacement)) {
          return infoElement;
        }
        break;
      case 'EXTERNAL':
        if (GALLERY_CONSTS.hasExternalVerticalPlacement(titlePlacement) || GALLERY_CONSTS.hasExternalHorizontalPlacement(titlePlacement)) {
          return infoElement;
        }
        break;
      case 'SLIDESHOW':
        return infoElement;
      default:
        return null;
    }
  };

  const hoverInfoElement = (pgItemProps) => {
    return renderInfoElement('HOVER', pgItemProps);
  };

  const externalInfoElement = (pgItemProps) => {
    return renderInfoElement('EXTERNAL', pgItemProps);
  };

  const slideshowInfoElement = (pgItemProps) => {
    return renderInfoElement('SLIDESHOW', pgItemProps);
  };

  const getCustomComponents = () => {
    return {
      customHoverRenderer: hoverInfoElement,
      customInfoRenderer: externalInfoElement,
      customSlideshowInfoRenderer: slideshowInfoElement,
    };
  }

  const getContainer = () => {
    return {scrollBase: 0, ...container, ...(gallerySettings.responsivePreview && resizedDims)};
  }

  const getOptions = () => {
    return options;
  }

  const canRender = ()=> {
    if (!gallerySettings.useBlueprints || blueprint) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    window.addEventListener('resize', setContainer);
    return () => {
      window.removeEventListener('resize', setContainer);
    };
  }, [setContainer]);

  if (!isTestingEnv) { // isTestingEnvironment is not a valid option and would be removed from the url if we use setOptionsInUrl. this removed this protection for testing environment as well
    setOptionsInUrl(options);
  }

  const blueprintProps = gallerySettings.useBlueprints ? getOrInitBlueprint() :
  {
    items: getItems(),
    options,
    container: getContainer()
  };

  // console.log('Rendering App: ', {options, items, dimensions, showSide, blueprint, blueprintProps})
  const getKeySettings = () => {
    const { mediaType, numberOfItems, isUnknownDimensions, useBlueprints, viewMode, useLayoutFixer, initialIdx, mediaTypes, useInlineStyles, clickToExpand} = gallerySettings;
    return { mediaType, numberOfItems, isUnknownDimensions, useBlueprints, viewMode, useLayoutFixer, initialIdx, mediaTypes, useInlineStyles, clickToExpand };
  }

  let GalleryComponent = gallerySettings.clickToExpand ? ExpandableProGallery : (gallerySettings.useBlueprints ? ProGalleryRenderer : ProGallery);

  // const shouldRenderLeanGallery = isEligibleForLeanGallery({
  //   items: getItems(),
  //   styles: options,
  //   totalItemsCount: getTotalItemsCount()
  // });

  // if(!shouldRenderLeanGallery) {
  //   GalleryComponent = gallerySettings.clickToExpand ? ExpandableProGallery : (gallerySettings.useBlueprints ? ProGalleryRenderer : ProGallery);
  // } else {
  //   GalleryComponent = LeanGallery;
  // };

  window.playgroundItems = getItems();

  return (
    <main id="sidebar_main" className={s.main}>
      {/* <Loader/> */}
      <SideBarButton className={s.toggleButton} onClick={switchState} isOpen={showSide}/>
      <aside className={s.sideBar} style={{width: SIDEBAR_WIDTH, marginLeft: !showSide ? -1 * SIDEBAR_WIDTH : 0}}>
        <div className={s.heading}>
          Pro Gallery Playground <a className={s.version} href="https://github.com/wix/pro-gallery/blob/master/CHANGELOG.md" target="blank" title="View Changelog on Github">v{pJson.version}</a>
        </div>
        {sideShownOnce && <Suspense fallback={<div>Loading...</div>}>
          <SideBar
            visible={showSide}
            blueprintsManager = {blueprintsManager}
            items={getItems()}
          />
        </Suspense>}
      </aside>
      <section className={s.gallery} style={{paddingLeft: showSide && !utils.isMobile() ? SIDEBAR_WIDTH : 0}}>
        {!canRender() ? <div>Waiting for blueprint...</div> : addResizable(GalleryComponent, {
          key: `pro-gallery-${JSON.stringify(getKeySettings())}-${getItems()[0].itemId}`,
          id: 'pro-gallery-playground',
          scrollingElement: gallerySettings.responsivePreview ? document.getElementById('resizable') : window,
          viewMode: gallerySettings.viewMode,
          eventsListener: eventListener,
          totalItemsCount: getTotalItemsCount(),
          createMediaUrl: createMediaUrl,
          settings: {avoidInlineStyles: !gallerySettings.useInlineStyles, disableSSROpacity: gallerySettings.viewMode === 'PRERENDER'},
          activeIndex: gallerySettings.initialIdx,
          customComponents: getCustomComponents(),
          ...blueprintProps
        }, resizedDims, dims => {setContainer(dims); setResizedDims(dims)}, gallerySettings)}
      </section>
    </main>
  );
}

const addResizable = (Component, props, resizedDims, setResizedDims, gallerySettings) => {
  props.shouldValidateTypes = false
  return gallerySettings.responsivePreview ? (<div style={{
    background: '#666',
    width: '100%',
    height: window.innerHeight + 'px',
    display: 'block',
    textAlign: 'center',
    overflow: 'visible'
  }}>
    <div style={{
      display: 'inline-block',
      // margin: `${(window.innerHeight - resizedDims.height) / 2}px auto`,
      margin: `${window.innerHeight  / 2}px auto`,
      transform: 'translate(0, -50%)',
      overflow: 'visible'
    }}>
      <Resizable id="resizable" style={{
        display: 'block',
        textAlign: 'center',
        background: 'white',
        border: '6px solid black',
        borderRadius: '6px',
        overflowY: 'scroll'
      }} defaultSize={{
        width:resizedDims.width,
        height:resizedDims.height,
      }}
      onResizeStop={(...args) => {
        // console.log('args', args[3], resizedDims, resizedDims.width + args[3].width);
        setResizedDims({width: (resizedDims.width + args[3].width), height: resizedDims.height + args[3].height});
        // console.log('args', args[3], resizedDims);
      }}
      >
    <div style={{
      height: 'auto',
      overflow: 'visible'
    }}>
        <Component {...props}
          container={{
            ...props.container,
            width: resizedDims.width,
            height: resizedDims.height
          }}

        />
      </div>
      </Resizable>
    </div>
  </div>) :
  (<Component {...props}/>)
}
