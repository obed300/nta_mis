import type { IMenuItem } from '@rkosafo/cai.components';

export let menuItems = $state<{ value: IMenuItem[] }>({
	value: [
		{ title: 'Home', path: '/private/home', icon: 'file-icons:dashboard' },
		{ title: 'Members', path: '/private/members', icon: 'grommet-icons:money' },

		{ title: 'User Management', path: '/private/user-management', icon: 'heroicons:user-group' },
		{
			title: 'Data Management',
			path: '/private/data-management',
			icon: 'streamline-ultimate:coding-apps-website-big-data-database-globality-velocity'
		}
	]
});
