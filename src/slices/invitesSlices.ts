import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { InvitesState } from '../types';
import FixtureApi from '../services/FixtureApi';

const initialState: InvitesState = {
  invites: [],
  error: null,
};

export const fetchInvites = createAsyncThunk('invites/fetchInvites',async () => {
  try {
    const response = FixtureApi.getInvites();
    return response;
  } catch (error) {
    throw new Error('Failed to fetch invites');
  }
});

const invitesSlice = createSlice({
  name: 'invites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInvites.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchInvites.fulfilled, (state, action) => {
        state.invites = action.payload.data.invites;
        state.error = null;
      })
      .addCase(fetchInvites.rejected, (state, action) => {
        state.error = action.error.message ?? 'Failed to fetach invites';
      });
  }
})

export default invitesSlice.reducer;