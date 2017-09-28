import * as UserRespApiUtil from '../util/user_resp_api_util';

export const RECEIVE_USER_RESPONSES = "RECEIVE_USER_RESPONSES";
export const RECEIVE_USER_RESPONSE = "RECEIVE_USER_RESPONSE";

const receiveUserResponses = (userResponses) => ({
  type: RECEIVE_USER_RESPONSES,
  userResponses
});

const receiveUserResponse = (userResponse) => ({
  type: RECEIVE_USER_RESPONSE,
  userResponse
});

export const fetchUserResponses = (userId) => dispatch => (
  UserRespApiUtil.fetchUserResponses(userId)
    .then(resp => dispatch(receiveUserResponses(resp)))
);

export const fetchUserResponse = (id) => dispatch => (
  UserRespApiUtil.fetchUserResponse(id)
    .then(resp => dispatch(receiveUserResponse(resp)))
);
