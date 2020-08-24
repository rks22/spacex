import {  of, from } from "rxjs";
import { filter, mergeMap,debounceTime} from "rxjs/operators";
import { createAction } from "./Actions";
import { responseParser, reqParser } from "../parser";
import { getLaunches } from "../../../API";
import { getUpdatedFilters,parsePreviousFilters } from "../../Filters/API";
import { createFilterAction } from "../../Filters/REDUX/Actions";
import { selectLaunchesFilters } from "../../Filters/REDUX/Selectors";

const handleResponse = (requestParams, data) => {
  if (!data) {
    return createAction("FAILED");
  }
  if (data.error) {
    return createAction("FAILED", { error: data.error });
  } else {
    return createAction("LOADED", { req: requestParams, res: data });
  }
};

export const requestLaunchesStatus = (data, state) => {
  const prevFilters = parsePreviousFilters(selectLaunchesFilters(state));
  const requestParams = {
      ...prevFilters,
    ...reqParser(data),
  };
  return getLaunches(requestParams).then((response) =>
    handleResponse(requestParams, response)
  );
};

export const launchesRequestedEpic = (action$, store) =>
  action$.pipe(
    filter((action) => action.type === "SPACEX/LAUNCHES_REQUEST"),
    debounceTime(1000),
    mergeMap((action) => {
      const state = store.value;
      return from(requestLaunchesStatus(action.data, state));
    })
  );

export const launchesLoadedEpic = (action$, store) =>
  action$.pipe(
    filter((action) => action.type === "SPACEX/LAUNCHES_LOADED"),
    mergeMap((action) => {
      const state = store.value;
      const filterState = selectLaunchesFilters(state);
      const { req, res } = action.data;
      let updatedFilters = getUpdatedFilters(req, filterState);
      return of(
        createFilterAction("UPDATED", updatedFilters),
        createAction("UPDATED", responseParser(res))
      );
    })
  );
