// A plugin file where you could register global directives
import GlobalDirectives from "./globalDirectives";


export default {
  install(Vue) {
    Vue.use(GlobalDirectives);
  }
};
