import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const CreateDoctor = createAsyncThunk(
  "/Admin/newDoctor/NewDoctor",
  async (
    {
      name,
      lastname,
      email,
      password,
      specialty,
      office_address,
      office_number,
      doctorate,
      consult_price,
      coords,
      appointments,
    },
    thunkAPI
  ) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/v1/doctors", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          lastname,
          email,
          password,
          specialty,
          office_address,
          office_number,
          doctorate,
          consult_price,
          coords,
          appointments,
        }),
      });
      let data = await response.json();
      console.log("data", data, response.status);

      if (response.status === 200) {
        return { ...data };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
export const ListDoctors = createAsyncThunk(
  "user/userList",
  async ( thunkAPI) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/v1/doctors", {
        method: "GET",
        headers: {
          Accept: "application/json",

          "Content-Type": "application/json",
        },
      });
      let data = await response.json();
      console.log("data", data, response.status);

      if (response.status === 200) {
        return { ...data };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const AdminSlice = createSlice({
  name: "Doctor",
  initialState: {
    name: "",
    lastname: "",
    email: "",
    password: "",
    specialty: "",
    office_address: "",
    office_number: "",
    doctorate: "",
    consult_price: "",
    coords: "",
    appointments: "",
  },
  reducers: {
    CreateDoctor(state, action) {
      state.Doctor = action.payload;
    },
  },
  extraReducers: {
    [CreateDoctor.fulfilled]: (state, { payload }) => {
      console.log("payload", payload);
      state.name = payload.name;
    },
    [ListDoctors.fulfilled]: (state, { payload }) => {
      console.log("payload", payload);
      state.name = payload.name;
    },
  },
});

export const DoctorSelector = (state) => state.doc;
