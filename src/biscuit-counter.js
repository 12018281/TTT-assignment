import { createStore, combineReducers } from 'redux';
import { Comments } from './comments';
import { counterReducer } from './counter'

export const ConfigureStore = () => {
const store = createStore(
    combineReducers({
        counter : counterReducer,
        comments: Comments
    }
));

return store;
};