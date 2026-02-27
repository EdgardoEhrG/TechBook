import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faUser,
  faStar,
  faBug,
  faPencil,
  faServer,
  faCode,
  faBuilding,
  faShield,
  faChartLine,
  faBook,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faUser,
  faStar,
  faBug,
  faPencil,
  faServer,
  faCode,
  faBuilding,
  faShield,
  faChartLine,
  faBook
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon);
});
