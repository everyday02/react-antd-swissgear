import { USER_LIST } from '@/actions/user';

const initState = {
  users: []
};

export function user(state = initState, action) {
  switch (action.type) {
    case USER_LIST:
      return {
        ...state,
        ...action.payload
      };
    default:
      return { ...state };
  }
}
