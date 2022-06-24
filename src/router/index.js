import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
/*
  Router Tip
  - 첫 화면 file은 맨 위에 import하고
  - size가 작아서 click시 server로 부터 data를 바로 받아와도 문제가 없는 것 
    -> routes 배열 내부 객체에 import
  - 사용자의 사용빈도가 높으면 webpack true로 설정
    -> webpack : cache에 저장하여 빠르게 load 될 수 있다. 
                 그러므로 자주 사용하는 component가 아니라면 cache공간이 낭비되므로, 
                 자주 사용하는 것만 설정하도록 하자.
*/
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      // 입력 url
      path: "/about",
      // name은 unique 해야 함.
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.

      // import할 component file
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
