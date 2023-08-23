import Profile from '@/views/Profile.vue'
import Applications from '@/views/Applications.vue'
import Referrals from '@/views/Referrals.vue'
import CreateApplication from '@/views/CreateApplication.vue'
import Offers from '@/views/Offers.vue'
import OfferArticle from '@/views/OfferArticle.vue'
import Statistics from '@/views/Statistics.vue'

import DefaultLayout from '@/layouts/Default.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
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
        path: '/',
        name: 'Referrals',
        component: DefaultLayout,
        redirect: '/referrals',
        children: [
            {
                path: '/referrals',
                name: 'Referrals',
                component: Referrals,
            }
        ]
    },
    {
        path: '/create-application',
        name: 'CreateApplication',
        component: DefaultLayout,
        redirect: '/create-application',
        children: [
            {
                path: '/create-application',
                name: 'CreateApplication',
                component: CreateApplication,
            }
        ]
    },
    {
        path: '/offers',
        name: 'Offers',
        component: DefaultLayout,
        redirect: '/offers',
        children: [
            {
                path: '/offers',
                name: 'Offers',
                component: Offers,
            }
        ]
    },
    {
        path: '/offer-article',
        name: 'OfferArticle',
        component: DefaultLayout,
        redirect: '/offer-article',
        children: [
            {
                path: '/offer-article',
                name: 'OfferArticle',
                component: OfferArticle,
            }
        ]
    },
    {
        path: '/statistics',
        name: 'Statistics',
        component: DefaultLayout,
        redirect: '/statistics',
        children: [
            {
                path: '/statistics',
                name: 'Statistics',
                component: Statistics,
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

