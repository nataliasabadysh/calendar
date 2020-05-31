import React, { lazy } from 'react';

import { 
  HomeOutlined, 
  BarChartOutlined, 
  SettingOutlined, 
  CalendarOutlined, 
  ProjectOutlined,
  ImportOutlined,
  CommentOutlined,
  GlobalOutlined,
  UserAddOutlined,
  ScheduleOutlined,
  WechatOutlined,
  BellOutlined,
  UserOutlined, 
  FacebookOutlined, 
  GithubOutlined, 
  LinkedinOutlined, 
  YoutubeOutlined
} from '@ant-design/icons';



export const path = Object.freeze({
    home: '/',
    dashboard: '/dashboard',
    movies: '/movies',
    movieId: '/movies/:id',
    products: '/products',
    invoices: '/invoices',
    gitpub: '/github',
    chatroom: '/chat-room',
    calendar: '/calendar',
    helpcenter: '/help-center',
    settings: '/settings',
    support:'/support',
    notification: '/notification',
    profile: '/profile',
    user: '/user',
    userinfo: '/user-detail',
    articles: '/articles',
    articlesSlug: '/articles/:slug',

});

// Nav bar 
export const routers_nav = [
  {
    path: path.support,
    label: 'Support',
    exact: false,
    component: lazy(() => import('../views/Support' /* webpackChunkName: "support-page" */)),
    icon: <WechatOutlined />
  },
  {
    path: path.notification,
    label: 'Notification',
    exact: false,
    component: lazy(() => import('../views/Notification' /* webpackChunkName: "notification-page" */)),
    icon: <BellOutlined />
  },
  {
    path: path.profile,
    label: 'Profile',
    exact: false,
    component: lazy(() => import('../views/Profile' /* webpackChunkName: "profile-page" */)),
    icon: <UserOutlined />,
  }
];

// Side bar 
export const routers = [
  {
    path: path.home,
    label: 'Home',
    exact: true,
    component: lazy(() => import('../views/HomePage' /* webpackChunkName: "home" */)),
    icon: <HomeOutlined />
  },
  {
    path: path.dashboard,
    label: 'Dashboard',
    exact: false,
    component: lazy(() => import('../views/Dashboard' /* webpackChunkName: "dashboard-page" */)),
    icon: <BarChartOutlined />
  },
  {
    path: path.movies,
    label: 'Movie',
    exact: true,
    component: lazy(() => import('../views/Inbox' /* webpackChunkName: "movies-page" */)),
    icon: <ImportOutlined />
  },
  {
    path: path.products,
    label: 'Products',
    exact: false,
    component: lazy(() => import('../views/Products'/* webpackChunkName: "products-page" */)),
    icon: <ProjectOutlined />
  },
  {
    path: path.invoices,
    label: 'Invoices',
    exact: false,
    component: lazy(() => import('../views/Invoices' /* webpackChunkName: "invoices-page" */)),
    icon: <ScheduleOutlined />
  },
  {
    path: path.gitpub,
    label: 'GitHub',
    exact: true,
    component: lazy(() => import('../views/GitGubPage/GitHub' /* webpackChunkName: "customers-page" */)),
    icon: <UserAddOutlined />
  },
  {
    path: path.chatroom,
    label: 'Chat room',
    exact: false,
    component: lazy(() => import('../views/ChatRoom'/* webpackChunkName: "chat-room-page" */)),
    icon: <CommentOutlined />
  },
  {
    path: path.calendar,
    label: 'Calendar',
    exact: false,
    component: lazy(() => import('../views/Calendar'/* webpackChunkName: "calendar-page" */)),
    icon: <CalendarOutlined />
  },
  {
    path: path.helpcenter,
    label: 'Help Center',
    exact: false,
    component: lazy(() => import('../views/HelpCenter'/* webpackChunkName: "help-center-page" */)),
    icon:<GlobalOutlined />
  },
  {
    path: path.settings,
    label: 'Settings',
    exact: false,
    component: lazy(() => import('../views/Settings'/* webpackChunkName: "settings-page" */)),
    icon: <SettingOutlined />
  }
];

export const router_root = [{
  path: path.movieId,
  exact: false,
  component: lazy(() => import('../views/movie/List' /* webpackChunkName: "List of movies" */)),
},{
  path: '/github/:login',
  exact: false,
  component: lazy(() => import('../views/GitGubPage/Profile' /* webpackChunkName: "git hub profiile" */)),
},{
  path: path.userinfo,
  exact: false,
  component: lazy(() => import('../views/UserInfo' /* webpackChunkName: "User Info" */)),
},{
  path: path.articles,
  exact: true,
  component: lazy(() => import('../components/Feed/Feed' /* webpackChunkName: "Feed" */)),
},{
  path: path.articlesSlug,
  exact: false,
  component: lazy(() => import('../components/Feed/Articles' /* webpackChunkName: "Articles" */)),
},,{
  path: path.movieId,
  exact: false,
  component: lazy(() => import('../views/movie/List' /* webpackChunkName: "Articles" */)),
},]

export const social = 
 <div className="social_media">
  <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/nataliasabadysh"><FacebookOutlined /></a> 
  <a target="_blank" rel="noopener noreferrer" href="https://github.com/nataliasabadysh"><GithubOutlined /></a> 
  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/natalia-sabadysh/"><LinkedinOutlined /></a>
  <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCJLGnq5yNCFHgAj12FJ04PQ"><YoutubeOutlined /></a>
</div>


export const AsyncNotFound = lazy(() => import('../views/NotFound' /* webpackChunkName: "not found" */))
