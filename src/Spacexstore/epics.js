import { combineEpics } from 'redux-observable';
import {launchesRequestedEpic,launchesLoadedEpic} from '../features/Launches/REDUX';

export const rootEpic = combineEpics(
    launchesRequestedEpic,
    launchesLoadedEpic
  );