// import { LOAD_ITEMS_REQUEST, LOAD_ITEMS_SUCCESS, SET_ITEM, SET_ITEMS } from "./types"

// const initialStore = {
//     items:{
//         data:[],
//         isLoading:true,
//     },
//     item:{
//         data:[],
//         isLoading:true,
//     }
// }

// const reducer = (state = initialStore, action) => {
//   switch(action.type) {
//     case LOAD_ITEMS_REQUEST:
//         return {...state,items:{...state.items,isLoading:action.payload}}
//     case LOAD_ITEMS_SUCCESS:
//         return {...state,items:{...state.items,isLoading:false,data:action.payload}}
//     case SET_ITEMS:
//         return {...state,items:{...state.items,data:action.payload}}
//     case SET_ITEM:
//         return {...state,item:{...state.item,data:action.payload}}
//     default:
//       return state
//   }
// }

// export default reducer