import { createSlice } from "@reduxjs/toolkit";

const alertState = {
    type: '',
    message: '',
    isVisible: false,
}

export const alertSlice = createSlice({
    name: 'alert',
    initialState: alertState,
    reducers: {
        setIsVisible: (state, action) => {
            state.isVisible = action.payload
        },
        setAlert(state, action) {
            state.message = action.payload.message
            state.type = action.payload.type
            state.isVisible = true
        }

    }
})

export const { setAlert, setIsVisible } = alertSlice.actions
export const showAlert = (alert) => (dispatch) => {
    dispatch(setAlert(alert))
    setTimeout(() => {
        dispatch(setIsVisible(false))
    }, 1500);
}

export default alertSlice.reducer