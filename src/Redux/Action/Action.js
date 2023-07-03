import axios from "axios";
import { GET_DATA,EDIT_DATA,POST_DATA} from "../Action-Type/ActionType";

//Handling GET request
export const GetData = () => async (dispatch) =>{
    try{
        const res= await axios.get('http://192.168.2.196:5500/api/getProduct')
        dispatch({type :GET_DATA, payload :res.data})}
        catch(err){
            console.log("error", err)}}
            export default GetData;

//Handling PUT request
export const EditData = (id,data)=> async(dispatch)=>{
  try {
    
    const res= await axios.put("http://192.168.2.196:5500/api/updateProduct/"+id,data)
    dispatch(GetData())
} catch (error) {
  console.log("error", error)}}

//Handling POST rquest
export const PostData = (data)=>async(dispatch)=>{
  try {
    const res = await axios.post("http://192.168.2.196:5500/api/addProduct",data)
    dispatch(GetData())
  } catch (error) {
    console.log("error", error)}}
//Handling DELETE request
export const DeleteData = (id)=> async(dispatch)=>{
  try {
    
    const res= await axios.delete("http://192.168.2.196:5500/api/deleteProduct/"+id)
    dispatch(GetData())
} catch (error) {
  console.log("error", error)}}