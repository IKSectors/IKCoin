import { ADD_REG, DELETE_REG } from '../Redux/index';
import { Reg } from '../components';

const initState = { formBData: 1010  };
export default function regReducer(state = initState, action) {
   switch (action.type) {
      case ADD_REG:
         return [...state, action.payload];
      case DELETE_REG:
         return state.filter(expense => expense.id !== action.payload.id);
      default:
         return state;
   }
}