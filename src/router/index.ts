import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import MenuLinks from '@/assets/menuLinks.json'

function checkInMenuList(menuitem: string) {
  return MenuLinks.map(x => x.path).indexOf(menuitem) > -1
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:menuitem?',
      name: 'home',
      component: HomeView,
      beforeEnter: (async (to, from, next) => {
        const result = await checkInMenuList(to.params.menuitem as string)
        console.log("result", result);
        if (result) {
          next()
        } else {
          next({ name: 'notfound' })
        }
      })
    },
    {
      path: '/not-found',
      name: 'notfound',
      component: NotFoundView
    }
  ]
})

export default router
