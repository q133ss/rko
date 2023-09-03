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
import Documentations from '@/views/Documentations.vue'

import LandingPage from '@/views/LandingPage.vue'
import Landing404 from '@/views/Landing404.vue'
import Login from '@/views/LandingAuthLogin.vue'
import Registration from '@/views/LandingAuthRegistration.vue'
import ForgotPass from '@/views/LandingAuthForgotPass.vue'
import ResetPass from '@/views/LandingAuthResetPass.vue'

import DefaultLayout from '@/layouts/Default.vue'
import LandingLayout from '@/layouts/LandingLayout.vue'
import ClearLayout from '@/layouts/ClearLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

const routes = [
    //{
    //    path: '/:pathMatch(.*)*',
    //    name: 'Landing404',
    //    component: ClearLayout,
    //    children: [
    //        {
    //            path: '/404',
    //            name: 'Landing404',
    //            component: Landing404,
    //        }
    //    ]
    //},
    {
        path: '/',
        name: 'Landing',
        component: LandingLayout,
        children: [
            {
                path: '/',
                name: 'Landing',
                component: LandingPage,
            }
        ]
    },
    {
        path: '/auth',
        name: 'Auth',
        component: AuthLayout,
        children: [
            {
                path: '/auth/login',
                name: 'Auth',
                component: Login,
            }
        ]
    },
    {
        path: '/auth/registration',
        name: 'Registration',
        component: AuthLayout,
        children: [
            {
                path: '/auth/registration',
                name: 'Registration',
                component: Registration,
            }
        ]
    },
    {
        path: '/auth/forgot-pass',
        name: 'ForgotPass',
        component: AuthLayout,
        children: [
            {
                path: '/auth/forgot-pass',
                name: 'ForgotPass',
                component: ForgotPass,
            }
        ]
    },
    {
        path: '/auth/reset-pass',
        name: 'ResetPass',
        component: AuthLayout,
        children: [
            {
                path: '/auth/reset-pass',
                name: 'ResetPass',
                component: ResetPass,
            }
        ]
    },
    {
        path: '/profile',
        name: 'Profile',
        component: DefaultLayout,
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
        children: [
            {
                path: '/offers',
                name: 'Offers',
                component: Offers,
            }
        ]
    },
    {
        path: '/documentations',
        name: 'Documentations',
        component: DefaultLayout,
        children: [
            {
                path: '/documentations',
                name: 'Documentations',
                component: Documentations,
            }
        ]
    },
    {
        path: '/offer-article',
        name: 'OfferArticle',
        component: DefaultLayout,
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

