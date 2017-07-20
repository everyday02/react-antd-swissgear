import { createAction } from 'redux-actions';

export const USER_LIST = 'USER_LIST';

const userList = createAction(USER_LIST);

const list = (offset = 1, psize = 10) => (dispatch, getState, api) => {
  api(`/users?psize=${psize}&offset=${offset}`).then((result) => {
    console.info(result);
    dispatch(userList(result));
  });
};

const put = (userId) => (dispatch, getState, api) => {
  api(`/users/${userId}`).then((result) => {
    console.info(result);
    dispatch(userList(result));
  });
};

export default {
  list,
  put
};
