import { createStore } from 'vuex'

export default createStore({
  state: {
    postList: [
      { id: 1, profileImg: require("@/assets/profile.png"), image: require("@/assets/img1.jpg"), text: "Sed consequat aliquam dui, convallis dignissim sapien ornare ac. Phasellus massa massa, blandit eget turpis vitae, accumsan egestas libero. Etiam in mauris quam.", date: "1 Feb 2022", likes: 0 },
      { id: 2, profileImg: require("@/assets/profile.png"), image: "", text: "Phasellus dapibus dui sed purus finibus ornare. Nulla vel felis quis purus vulputate sollicitudin sit amet at nisi.", date: "1 Feb 2021", likes: 0 },
      { id: 3, profileImg: require("@/assets/profile.png"), image: require("@/assets/img3.jpg"), text: "Sed consequat aliquam dui, convallis dignissim sapien ornare ac. Phasellus massa massa, blandit eget turpis vitae, accumsan egestas libero. Etiam in mauris quam.", date: "1 Feb 2020", likes: 8 },
      { id: 4, profileImg: require("@/assets/profile.png"), image: require("@/assets/img4.jpg"), text: "Nulla eu nisl a mi elementum fermentum ac non nisl. Vivamus pulvinar magna vitae volutpat ullamcorper. Nullam laoreet dictum magna, nec consectetur sem lacinia nec. ", date: "1 Feb 2019", likes: 5 },
      { id: 5, profileImg: require("@/assets/profile.png"), image: require("@/assets/img5.jpg"), text: "Nulla sagittis, elit sed consectetur tincidunt, lorem dolor sodales elit, blandit dictum lectus libero nec libero. ", date: "1 Feb 2018", likes: 0 },
      { id: 6, profileImg: require("@/assets/profile.png"), image: require("@/assets/img6.jpg"), text: "Nulla suscipit ultricies laoreet. Duis et est nec tortor laoreet gravida et sed sapien.", date: "1 Feb 2017", likes: 0 },
      { id: 7, profileImg: require("@/assets/profile.png"), image: require("@/assets/img7.jpg"), text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque porta tempor sapien eu molestie. Suspendisse malesuada a lacus congue commodo.", date: "1 Feb 2016", likes: 0 },
      { id: 8, profileImg: require("@/assets/profile.png"), image: require("@/assets/img5.jpg"), text: "Duis erat lectus, fringilla at diam sed, interdum tincidunt arcu. Nullam consequat placerat erat ut feugiat.", date: "1 Feb 2015", likes: 0 },
      { id: 9, profileImg: require("@/assets/profile.png"), image: "", text: "Nulla sagittis, elit sed consectetur tincidunt, lorem dolor sodales elit, blandit dictum lectus libero nec libero. Nulla luctus ante ut velit dictum, quis pretium eros tincidunt. ", date: "1 Feb 2014", likes: 0 },
      { id: 10, profileImg: require("@/assets/profile.png"), image: require("@/assets/img2.jpg"), text: "Suspendisse semper, nunc vel porttitor tempor, neque lacus egestas felis, sed mattis quam velit et erat. Mauris quis faucibus odio. Ut ac pretium magna.", date: "1 Feb 2013", likes: 0 },
    ]
  },
  getters: {
  },
  mutations: {
    like (state, id){
      state.postList.find(element => element.id == id).likes++;
    },
    reset(state){
      for (let i = 0; i < state.postList.length; i++) {
        state.postList[i].likes = 0;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
