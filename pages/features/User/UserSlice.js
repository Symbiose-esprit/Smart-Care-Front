import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    lastname:"",
    password:"",
    email: "",
    role:"",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    [signupUser.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.email = payload.user.email;
      state.username = payload.user.name;
    },
    [signupUser.pending]: (state) => {
      state.isFetching = true;
    },
    [signupUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.email = payload.email;
      state.username = payload.name;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [loginUser.rejected]: (state, { payload }) => {
      console.log('payload', payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [loginUser.pending]: (state) => {
      state.isFetching = true;
    },
  },
  extraReducers: {
    // Extra reducer comes here
  },
});
/*
name: req.body.name,
    lastname: req.body.lastname,
    login: req.body.login,
    password: bcrypt.hashSync(req.body.password, 8),
    email: req.body.email,
    role: req.body.role,
    sex: req.body.sex,
    address: req.body.address,
    telephone: req.body.telephone,
    dateofbirth: req.body.dateofbirth,
    age: req.body.age,
*/
export const signupUser = createAsyncThunk(
  "users/signupUser",
  async ({ name, lastname, password, email }, thunkAPI) => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/signup",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            lastname,
            password,
            email,
           
          }),
        }
      );
      let data = await response.json();
      console.log("data", data);
      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        return { ...data, username: name, email: email };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
export const loginUser = createAsyncThunk(
  "users/signin",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/signin",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      )
      let data = await response.json()
      console.log("response", data)
      if (response.status === 200) {
        localStorage.setItem("token", data.token)
        return data
      } else {
        return thunkAPI.rejectWithValue(data)
      }
    } catch (e) {
      console.log("Error", e.response.data)
      thunkAPI.rejectWithValue(e.response.data)
    }
  }
)
export const userSelector = (state) => state.user;
