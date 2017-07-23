import { createAction } from 'redux-actions';
import { autoErrorHandler } from '#/libs/api';

export const USER_LIST = 'USER_LIST';

const userList = createAction(USER_LIST);

const list = (offset = 1, psize = 10) => (dispatch, getState, api) => {
  api(`/users?psize=${psize}&offset=${offset}`).then((result) => {
    dispatch(userList(result));
  });
};

const post = (record) => (dispatch, getState, api) =>
  api('/users', 'POST', record)
    .then((result) => result)
    .catch((err) => autoErrorHandler(err));

const put = (userId, record) => (dispatch, getState, api) =>
  api(`/users/${userId}`, 'PUT', record)
    .then((result) => result)
    .catch((err) => autoErrorHandler(err));

const del = (userId) => (dispatch, getState, api) =>
  api(`/users/${userId}`, 'DELETE')
    .then((result) => result)
    .catch((err) => autoErrorHandler(err));

export default {
  list,
  post,
  del,
  put,
};
