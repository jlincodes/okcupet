import * as UserRespApiUtil from '../util/user_resp_api_util';

export const RECEIVE_ALL_USER_RESPONSES = "RECEIVE_ALL_USER_RESPONSES";
export const RECEIVE_USER_RESPONSE = "RECEIVE_USER_RESPONSE";

const receiveAllUserResponses = (responses) => ({
  type: RECEIVE_ALL_USER_RESPONSES,
  responses
});

const receiveUserResponse = (response) => ({
  type: RECEIVE_USER_RESPONSE,
  response
});

export const fetchAllUserResponses = () => dispatch => (
  UserRespApiUtil.fetchAllUserResponses()
    .then(resp => dispatch(receiveAllUserResponses(resp)))
);

export const fetchUserResponse = (id) => dispatch => (
  UserRespApiUtil.fetchUserResponse(id)
    .then(resp => dispatch(receiveUserResponse(resp)))
);
