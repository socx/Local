import * as constants           from './constants';

export const GetMembers = () => {
    dispatch({ type: constants.GET_MEMBERS });
    dispatch({ type: constants.GET_MEMBERS_SUCCESS }, []);
}