import { createReducer }    from 'main/components/Utils';
import * as constants       from './constants';
import { List, Map }        from 'immutable';

export const initialState = {
    isFetchingReport: false,
    warnings: List(),
    errors: List(),
};

const reducerMap = {
  [constants.GET_MEMBERS]: (state, payload) => Object.assign({}, state, { isFetchingReport: true }),
  [constants.GET_MEMBERS_SUCCESS]: (state, payload) => Object.assign({}, state, { isFetchingReport: false }),
  [constants.GETE_MEMBERS_FAILED]: (state, payload) => Object.assign({}, state, { isFetchingReport: false }),
}

export default createReducer(initialState, reducerMap);
