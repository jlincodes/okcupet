import { combineReducers } from 'redux';
import PetReducer from './pet_reducer';
import UserReducer from './user_reducer';
import ConversationReducer from './conversation_reducer';
import MessageReducer from './message_reducer';

const EntitiesReducer = combineReducers({
  pets: PetReducer,
  user: UserReducer,
  conversation: ConversationReducer,
  messages: MessageReducer
});

export default EntitiesReducer;
