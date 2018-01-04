const ADD_GUN = "加歪把子"
const REMOVE_GUN = "减歪把子"

export function counter(state = 0, action) {
    switch (action.type) {
      case ADD_GUN:
        return state + 1;
      case REMOVE_GUN:
        return state - 1;
      default:
      return state = 10
    }
}
export function addGUN(){
    return {type:ADD_GUN}
}
export function removeGUN(){
    return {type:REMOVE_GUN}
}
export function addGUNAsync(){
    return dispatch=>{
        setTimeout(() => {
            dispatch(addGUN()) 
        }, 2000);
    }
}
export function removeGUNAsync(){
    return dispatch=>{
        setTimeout(() => {
            dispatch(removeGUN()) 
        }, 2000);
    }
}