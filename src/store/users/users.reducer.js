
import { FETCH_REQUEST } from "./users.types"

const initialState = () => ({
   loading: false,
   error: false,
   message: "",
   users: []
})

const reducer = (state = initialState(), action) => {
   switch (action.type) {
      case FETCH_REQUEST: return {
         ...state,
         loading: true
      }
      default: return state
   }
}

export default reducer