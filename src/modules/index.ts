import { combineReducers } from "redux";
import counter, { MODULE_KEY as COUNTER_KEY } from "./counter";

export interface GlobalState {
    [COUNTER_KEY]: ReturnType<typeof counter>;
}

const rootReducer = combineReducers({
    [COUNTER_KEY]: counter
});

export default rootReducer;
