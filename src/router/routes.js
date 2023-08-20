import Home from '@/views/Home.vue'
import Profile from '@/views/Profile.vue'
import Applications from '@/views/Applications.vue'

import DefaultLayout from '@/layouts/Default.vue'

const routes = [
    {
        path: '/',
        name: 'Public',
        component: DefaultLayout,
        redirect: '/',
        children: [
            {
                path: '/',
                name: 'Home',
                component: Home,
            }
        ]
    },
    {
        path: '/profile',
        name: 'Profile',
        component: DefaultLayout,
        redirect: '/profile',
        children: [
            {
                path: '/profile',
                name: 'Profile',
                component: Profile,
            }
        ]
    },
    {
        path: '/applications',
        name: 'Applications',
        redirect: '/applications',
        component: DefaultLayout,
        children: [
            {
                path: '/applications',
                name: 'Applications',
                component: Applications,
            }
        ]
    }
]

export default routes

