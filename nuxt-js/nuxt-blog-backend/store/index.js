import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts:[]
    },
    mutations: {
      setPosts(state, posts) {
       state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [
              {
                id: '1',
                title: 'First Post',
                previewText: 'This is our first post!',
                thumbnail: 'http://cryptotimes.org/wp-content/uploads/2018/06/050318_LRR_MEN_WomenTech.jpg'
              },
              {
                id: '2',
                title: 'Second Post',
                previewText: 'This is our Second post!',
                thumbnail: 'http://cryptotimes.org/wp-content/uploads/2018/06/050318_LRR_MEN_WomenTech.jpg'
              }
            ]);
            resolve();
          }, 1000);
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  });
};

export default createStore;
