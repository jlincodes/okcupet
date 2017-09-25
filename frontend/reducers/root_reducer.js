import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import PetReducer from './pet_reducer';
import UserReducer from './user_reducer';
import ConversationReducer from './conversation_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  pets: PetReducer,
  user: UserReducer,
  conversation: ConversationReducer
});

export default RootReducer;
