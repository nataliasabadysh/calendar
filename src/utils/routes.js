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
  ScheduleOutlined
} from '@ant-design/icons';


export const path = Object.freeze({
    home: '/',
    dashboard: '/dashboard',
    inbox: '/inbox',
    products: '/products',
    invoices: '/invoices',
    customers: '/customers',
    chatroom: '/chat-room',
    calendar: '/calendar',
    helpcenter: '/help-center',
    settings: '/settings',
});

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
    path: path.inbox,
    label: 'Inbox',
    exact: false,
    component: lazy(() => import('../views/Inbox' /* webpackChunkName: "inbox-page" */)),
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
    path: path.customers,
    label: 'Customers',
    exact: false,
    component: lazy(() => import('../views/Customers' /* webpackChunkName: "customers-page" */)),
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
  },
];