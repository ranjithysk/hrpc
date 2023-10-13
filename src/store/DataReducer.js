import { createSlice } from "@reduxjs/toolkit";

const iniState = {
    creds: {},
    eachUserProfile: []
}

const DataReducer = createSlice({
    name: 'DataReducer',
    initialState: iniState,
    reducers: {
        loginCreds(state, { payload }) {
            return {
                ...state,
                creds: payload
            }
        },
        loginData(state, { payload }) {
            return {
                ...state,
                eachUserProfile: payload
            }
        }
    }
})

export const { loginCreds, loginData } = DataReducer.actions
export default DataReducer.reducer