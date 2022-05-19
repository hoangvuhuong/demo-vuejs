import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isOpenPopup: false,
    memberInfo: {},
    productFinancials: {},
    ticketData: {},
    ltId: 0,
    routers: [],
  },
  getters: {},
  mutations: {
    openPopup(state) {
      state.isOpenPopup = true;
    },
    closePopup(state) {
      state.isOpenPopup = false;
    },
    updateMemberInfo(state, payload) {
      state.memberInfo = payload;
    },
    updateProductFinancials(state, payload) {
      state.productFinancials = payload;
    },
    updateTicketData(state, payload) {
      state.ticketData = payload;
    },
    getLtId(state, payload) {
      state.ltId = payload;
    },
    updateRouters(state, payload) {
      state.routers = payload;
    },
    markRouterIsPassed(state, currentRouteCode) {
      let nextRouteCode = "";
      let routers = state.routers;
      for (const router of routers) {
        if (router.currCode === currentRouteCode) {
          router.isPassed = true;
          router.isCurrent = false;
          nextRouteCode = router.nextCode;
        }
        if (router.currCode === nextRouteCode) {
          router.isCurrent = true;
        }
      }
      state.routers = routers;
    },
  },
  actions: {},
  modules: {},
});
