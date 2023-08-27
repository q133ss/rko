import Profile from '@/views/Profile.vue'
import Applications from '@/views/Applications.vue'
import Referrals from '@/views/Referrals.vue'
import CreateApplication from '@/views/CreateApplication.vue'
import Offers from '@/views/Offers.vue'
import OfferArticle from '@/views/OfferArticle.vue'
import Statistics from '@/views/Statistics.vue'
import Finance from '@/views/Finance.vue'
import MoreAboutPayments from '@/views/MoreAboutPayments.vue'
import MoreAboutTransactions from '@/views/MoreAboutTransactions.vue'

import LandingPage from '@/views/LandingPage.vue'
import Landing404 from '@/views/Landing404.vue'

import DefaultLayout from '@/layouts/Default.vue'
import LandingLayout from '@/layouts/LandingLayout.vue'
import Landing404Layout from '@/layouts/Landing404Layout.vue'

const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'Landing404',
        component: Landing404Layout,
        redirect: '/404',
        children: [
            {
                path: '/404',
                name: 'Landing404',
                component: Landing404,
            }
        ]
    },
    {
        path: '/',
        name: 'Landing',
        component: LandingLayout,
        redirect: '/',
        children: [
            {
                path: '/',
                name: 'Landing',
                component: LandingPage,
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
        path: '/referrals',
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
                path: '/applications/create',
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
                path: '/offers/offer',
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
        path: '/finance',
        name: 'Finance',
        component: DefaultLayout,
        redirect: '/finance',
        children: [
            {
                path: '/finance',
                name: 'Finance',
                component: Finance,
            }
        ]
    },
    {
        path: '/transactions',
        name: 'MoreAboutTransactions',
        component: DefaultLayout,
        redirect: '/transactions',
        children: [
            {
                path: '/finance/transactions',
                name: 'MoreAboutTransactions',
                component: MoreAboutTransactions,
            }
        ]
    },
    {
        path: '/payments',
        name: 'MoreAboutPayments',
        component: DefaultLayout,
        redirect: '/payments',
        children: [
            {
                path: '/finance/payments',
                name: 'MoreAboutPayments',
                component: MoreAboutPayments,
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

