import api from "../../axios/axios"
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "./users.types"

const fetchRequest = () => ({
   type: FETCH_REQUEST,
   payload: {}
})

// const fetchSuccess = () => ({
//    type: FETCH_SUCCESS,
//    payload: {}
// })

// const fetchFailure = () => ({
//    type: FETCH_FAILURE,
//    payload: {}
// })

// const setState = () => ({
//    type: "SET_STATE",
//    payload: []
// })

/** Async Actions */
export const fetchUsers = () => (async dispatch => {
   dispatch(fetchRequest())
   try {
      let { data } = await api.get('users')
      console.log(data)
   } catch (error) {
      console.log(error)
   }
})
