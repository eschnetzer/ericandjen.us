import Vue from 'vue';
import moment from 'moment';

export default {
  install: function(Vue,) {
    Object.defineProperty(Vue.prototype, '$moment', { value: moment });
  }
}
