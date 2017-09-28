import { combineReducers } from 'redux';
import PetReducer from './pet_reducer';
import UserReducer from './user_reducer';
import ConversationReducer from './conversation_reducer';
import MessageReducer from './message_reducer';
import QuestionReducer from './question_reducer';
import PetResponseReducer from './pet_resp_reducer';
import UserResponseReducer from './user_resp_reducer';


const EntitiesReducer = combineReducers({
  pets: PetReducer,
  user: UserReducer,
  conversation: ConversationReducer,
  messages: MessageReducer,
  questions: QuestionReducer,
  petResponses: PetResponseReducer,
  userResponses: UserResponseReducer
});

export default EntitiesReducer;
