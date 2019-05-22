const mutations = {
  isAuthenticated(state, payload) {
    state.isAuthenticated = payload.isAuthenticated
  },
  ADD_USER(state, payload) {
    state.user = payload
  },
  SET_TOKEN(state, accessToken) {
    if (!accessToken) return
    state.accessToken = accessToken
    localStorage.accessToken = accessToken
  },
  SET_USER(state, user) {
    const name = user.displayName

    state.user = {
      'name': name
    }
  },
  SET_IS_ADD_ROOM(state, toggle) {
    state.isAddRoom = toggle
  }
}

export default mutations
