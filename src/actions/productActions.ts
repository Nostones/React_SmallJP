import {loginApi} from "../services/product-api.ts";
import {Dispatch} from "redux";

export const LOGIN_ACTION = 'LOGIN_ACTION';
export const LOGIN_ACTION_SUCCESS = 'LOGIN_ACTION_SUCCESS';
export const LOGIN_ACTION_FAIL = 'LOGIN_ACTION_FAIL';


export const login = (data: { name: string, password: string }) => (dispatch : Dispatch) => {
    dispatch({type: LOGIN_ACTION})
    loginApi(data.name).then((res) => {
        if (res.data?.length > 0) {
            dispatch(loginSuccess(data))
        } else {
            dispatch(loginFail('User không tồn tại'))
        }
    }).catch(() => {
        dispatch(loginFail('Có lỗi xảy ra, vui lòng thử lại sau'))
    })
}

export const loginSuccess = (data: { name: string, password: string }) => {
    return {
        type: LOGIN_ACTION_SUCCESS,
        payload: data
    }
}

export const loginFail = (errorMessege: string) => {
    return {
        type: LOGIN_ACTION_FAIL,
        payload: errorMessege
    }
}
