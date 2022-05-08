import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const predictDisease = createAsyncThunk(
    'users/predict',
    async ({ symptoms }, thunkAPI) => {
        try {
            const response = await fetch(
                'http://127.0.0.1:9000/api',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        symptoms
                    }),
                }
            );
            let data = await response.json();
            console.log('data', data, response.status);

            if (response.status === 200) {
                return { ...data };
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (e) {
            console.log('Error', e.response.data);
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

export const DiseaseSlice = createSlice({
    name: "symptoms",
    initialState: {
        symptoms: []
    },
    reducers: {
        predictDisease(state, action) {
            state.symptoms = action.payload;
        },

    },
    extraReducers: {
        [predictDisease.fulfilled]: (state, { payload }) => {
            console.log('payload', payload);
            state.disease = payload.symptoms;

        },
    },
});


export const DiseaseSelector = (state) => state.user;
