import * as types from '../types/people';

export const searchQuery = (payload) => ({
  type: types.SEARCH_QUERY,
  input: payload
});

