import { GET_DATA } from "../Action-Type/ActionType";

const initaialState = {data:[]};
const Reducer=(state=initaialState,action)=>{
    switch (action.type){
        case GET_DATA :
            return{...state,data: action.payload}
        default :return state;
        }
}
export default Reducer;

