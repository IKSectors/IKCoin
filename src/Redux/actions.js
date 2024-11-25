//import { v4 as uuidv4 } from 'uuid';
import { ADD_REG, DELETE_REG } from '.';


export const addReg = ({ email, userName, fullName, password, phone }) => ({
    type: ADD_REG,
    payload: {
       //id: uuidv4(),
       email,
       userName,
       fullName,
       password,
       phone
    }
 });
 export const deleteReg = id => ({
    type: DELETE_REG,
    payload: {
       id
    }
 });