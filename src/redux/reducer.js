import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
}

const Reducer = (state = { activePost: null }, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_POST':
            return {
                ...state,
                activePost: action.payload
            }
        default:
            return state;
    }
}

export default persistReducer(persistConfig, Reducer);
