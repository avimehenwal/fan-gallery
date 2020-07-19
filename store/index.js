export const state = () => ({
  counter: 0,
  base: 'https://api.github.com/',
  user: 'avimehenwal',
  repo: 'fan-gallery',
  url: 'https://api.github.com/repos/avimehenwal/fan-gallery/contributors'
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}

export const getters = {
  repoUrl (state) {
    return state.base + 'repos/' + state.user + '/' + state.repo
  },
  contributorUrl (state, getters) {
    return getters.repoUrl + '/contributors'
  },
  commitActivityUrl (state, getters) {
    return getters.repoUrl + '/stats/commit_activity'
  },
  userUrl (state, getters) {
    return state.base + 'users/' + state.user
  },
  gitRepo (state) {
    return state.user + '/' + state.repo
  }
}
