export const actionIds = {
  SET_USERS_SAGA: `SET_USERS_SAGA`,
  SET_USERS: `SET_USERS`,
};




interface setUsersAC {
  type: typeof actionIds.SET_USERS,
  users: Array<String>

}
