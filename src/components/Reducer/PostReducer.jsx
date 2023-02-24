import { ACTION_TYPES } from "../../setup/actions/postActionType";

export const INITIAL_STATE = {
  loading: false,
  post: {},
  error: false,
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    case ACTION_TYPES.FETCH_ERROR:
      return {
        ...state,
        post: {},
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
