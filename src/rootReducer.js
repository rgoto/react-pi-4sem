import { combineReducers } from "redux";
import filters from './ducks/Filters';
import search from './ducks/Search'

const rootReducer = combineReducers({
    filters,
    search
});

export default rootReducer;
