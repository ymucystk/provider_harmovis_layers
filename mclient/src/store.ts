import { getCombinedReducer } from 'harmoware-vis'
import { createStore, applyMiddleware } from 'redux'
import heatmapSettings from './reducer/heatmapSettings'
import barGraphSettings from './reducer/barGraphSettings'
import {lineSettings, arcSettings, scatterSettings, topTextReducer
} from './reducer/layerSettings'
import createSagaMiddleware from 'redux-saga'
import informationBalloon from './reducer/informationBalloon'
//import timelapseSettings from './reducer/timelapseSettings'

const saga = createSagaMiddleware()

const store = createStore(
	getCombinedReducer({
    heatmapSettings,
    barGraphSettings,
    informationBalloon,
    lineSettings,
    arcSettings,
    scatterSettings,
    topTextReducer,
//  timelapseSettings
  }),
	applyMiddleware(saga)
)

export default store;
