import { configureStore, createSlice } from "@reduxjs/toolkit";

let name = createSlice({
    name: "name",
    initialState: "",
    reducers: {
        setName(state, action) {
            return action.payload;
        },
    },
});

let school = createSlice({
    name: "school",
    initialState: "선택",
    reducers: {
        setSchool(state, action) {
            return action.payload;
        },
    },
});

let role = createSlice({
    name: "role",
    initialState: "선택",
    reducers: {
        setRole(state, action) {
            return action.payload;
        },
    },
});

let nickname = createSlice({
    name: "nickname",
    initialState: "",
    reducers: {
        setNickname(state, action) {
            return action.payload;
        },
    },
});

let isConfirmed = createSlice({
    name: "isConfirmed",
    initialState: false,
    reducers: {
        setIsConfirmed(state, action) {
            return action.payload;
        },
    },
});

export default configureStore({
    reducer: {
        name: name.reducer,
        school: school.reducer,
        role: role.reducer,
        nickname: nickname.reducer,
        isConfirmed: isConfirmed.reducer,
    },
});
export let { setName } = name.actions;
export let { setSchool } = school.actions;
export let { setRole } = role.actions;
export let { setNickname } = nickname.actions;
export let { setIsConfirmed } = isConfirmed.actions;
