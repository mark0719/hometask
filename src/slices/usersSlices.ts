import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { UserState } from '../types';
import FixtureApi from '../services/FixtureApi';

const initialState: UserState = {
  users: [],
  error: null,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers',async () => {
  try {
    const response = FixtureApi.getUsers();
    return response;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
});

const usersSlice = createSlice({
  name: 'invites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload.data.users;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.error.message ?? 'Failed to fetach invites';
      });
  }
})

export default usersSlice.reducer;