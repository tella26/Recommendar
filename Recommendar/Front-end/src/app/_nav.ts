export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
    }
  },
  {
    name: 'Users',
    url: '',
    icon: 'icon-user',
    children: [
      {
        name: 'All Users',
        url: '',
        icon: 'icon-puzzle'
      },
      {
        name: 'Add New',
        url: '',
        icon: 'icon-puzzle'
      },
      {
        name: 'Categories',
        url: '',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    name: 'Tools',
    url: '',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Plugins',
        url: '',
        icon: 'icon-cursor'
      },
      {
        name: 'Imports',
        url: '',
        icon: 'icon-cursor'
      },
      {
        name: 'Exports',
        url: '',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Recommendation',
    url: '',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Settings',
    url: '',
    icon: 'icon-star',
    children: [
      {
        name: 'General',
        url: '',
        icon: 'icon-star',
        badge: {
          variant: 'success',
        }
      },
      {
        name: 'Appearance',
        url: '',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
        }
      },
      {
        name: 'Media',
        url: '',
        icon: 'icon-star'
      }
    ]
  },
];
