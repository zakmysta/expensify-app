import authReducer from '../../reducers/auth';

test('should set uid on login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'someid'
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test('should clear uid on logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({ uid: 'someid' }, action);
  expect(state).toEqual({});
});
