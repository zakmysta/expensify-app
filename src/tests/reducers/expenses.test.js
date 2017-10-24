import moment from 'moment';

import expenses from '../fixtures/expenses';
import expensesReducer from '../../reducers/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Water bill',
    note: '',
    amount: 50000,
    createdAt: moment().add(8, 'days').valueOf()
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    ...expenses,
    expense
  ]);
});

test('should edit an expense', () => {
  const updates = {
    description: 'Mortgate'
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe(updates.description);
});

test('should not edit an expense if expense not found', () => {
  const updates = {
    description: 'Mortgate'
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
