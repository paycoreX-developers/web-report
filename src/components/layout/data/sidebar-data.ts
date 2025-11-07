import {
  LayoutDashboard,
  ListTodo,
  HelpCircle,
  Settings,
  Wrench,
  UserCog,
  Command,
  ListIcon,
} from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'Suhail Shah',
    email: 'suhailshah474@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'ST24 Web Admin',
      logo: Command,
      plan: 'Super Admin',
    },
  ],
  navGroups: [
    {
      title: 'Fitur Utama',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: LayoutDashboard,
        },
        {
          title: 'Riwayat Transaksi',
          url: '/transaction',
          icon: ListTodo,
        },
        // {
        //   title: 'Apps',
        //   url: '/apps',
        //   icon: Package,
        // },
        // {
        //   title: 'Chats',
        //   url: '/chats',
        //   badge: '3',
        //   icon: MessagesSquare,
        // },
        // {
        //   title: 'Manajemen Produk',
        //   url: '/apps',
        //   icon: ListIcon,
        // },
        {
          title: 'Daftar Produk',
          url: '/users',
          icon: ListIcon,
        },
        // {
        //   title: 'Secured by Clerk',
        //   icon: ClerkLogo,
        //   items: [
        //     {
        //       title: 'Sign In',
        //       url: '/clerk/sign-in',
        //     },
        //     {
        //       title: 'Sign Up',
        //       url: '/clerk/sign-up',
        //     },
        //     {
        //       title: 'User Management',
        //       url: '/clerk/user-management',
        //     },
        //   ],
        // },
      ],
    },
    // {
    //   title: 'Toko',
    //   items: [
    //     {
    //       title: 'Auth',
    //       icon: ShieldCheck,
    //       items: [
    //         // {
    //         //   title: 'Sign In',
    //         //   url: '/sign-in',
    //         // },
    //         {
    //           title: 'Login',
    //           url: '/sign-in-2',
    //         },
    //         {
    //           title: 'Register',
    //           url: '/sign-up',
    //         },
    //         {
    //           title: 'Forgot Password',
    //           url: '/forgot-password',
    //         },
    //         // {
    //         //   title: 'OTP',
    //         //   url: '/otp',
    //         // },
    //       ],
    //     },
    //     // {
    //     //   title: 'Errors',
    //     //   icon: Bug,
    //     //   items: [
    //     //     {
    //     //       title: 'Unauthorized',
    //     //       url: '/errors/unauthorized',
    //     //       icon: Lock,
    //     //     },
    //     //     {
    //     //       title: 'Forbidden',
    //     //       url: '/errors/forbidden',
    //     //       icon: UserX,
    //     //     },
    //     //     {
    //     //       title: 'Not Found',
    //     //       url: '/errors/not-found',
    //     //       icon: FileX,
    //     //     },
    //     //     {
    //     //       title: 'Internal Server Error',
    //     //       url: '/errors/internal-server-error',
    //     //       icon: ServerOff,
    //     //     },
    //     //     {
    //     //       title: 'Maintenance Error',
    //     //       url: '/errors/maintenance-error',
    //     //       icon: Construction,
    //     //     },
    //     //   ],
    //     // },
    //   ],
    // },
    {
      title: 'Lainnya',
      items: [
        {
          title: 'Pengaturan',
          icon: Settings,
          items: [
            {
              title: 'Profile',
              url: '/settings',
              icon: UserCog,
            },
            {
              title: 'Account',
              url: '/settings/account',
              icon: Wrench,
            },
            // {
            //   title: 'Appearance',
            //   url: '/settings/appearance',
            //   icon: Palette,
            // },
            // {
            //   title: 'Notifications',
            //   url: '/settings/notifications',
            //   icon: Bell,
            // },
            // {
            //   title: 'Display',
            //   url: '/settings/display',
            //   icon: Monitor,
            // },
          ],
        },
        {
          title: 'Bantuan',
          url: '/help-center',
          icon: HelpCircle,
        },
      ],
    },
  ],
}
