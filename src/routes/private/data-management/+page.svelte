<script lang="ts" module>
	const dataPages: IMenuItem[] = [
		{
			title: 'Templates',
			items: [
				{
					title: 'SMS',
					description: 'Manage all SMS templates',
					icon: 'fa-solid:sms',
					path: '/private/data-management/sms',
					iconBg: 'bg-blue-300'
				}
			]
		},
		{
			title: 'Security',
			items: [
				{
					title: 'Roles',
					description: 'Manage all Roles',
					icon: 'fluent:person-tag-20-filled',
					path: '/private/data-management/roles',
					iconBg: 'bg-sky-300'
				}
			]
		},
		{
			title: 'Categories',
			items: [
				{
					title: 'Departments',
					description: 'Manage all departments',
					iconBg: 'bg-yellow-300',
					icon: 'mingcute:department-fill',
					path: '/private/data-management/departments'
				},
				{
					title: 'User Statuses',
					description: 'Manage all user statuses',
					iconBg: 'bg-sky-300',
					icon: 'mingcute:department-fill',
					path: '/private/data-management/user-statuses'
				}
			]
		},
		{
			title: 'Setups',
			items: [
				{
					title: 'Dashboards',
					description: 'Manage all dashboards',
					icon: 'mdi:graph-timeline',
					path: '/private/data-management/dashboards',
					iconBg: 'bg-teal-300'
				},
				{
					title: 'Reports',
					description: 'Manage all reports',
					icon: 'mdi:report-bar',
					path: '/private/data-management/reports',
					iconBg: 'bg-blue-300'
				},
				{
					title: 'Currency',
					description: 'Manage all reports',
					icon: 'mdi:report-bar',
					path: '/private/data-management/reports',
					iconBg: 'bg-blue-300'
				},
				{
					title: 'Regions',
					description: 'Manage all reports',
					icon: 'mdi:report-bar',
					path: '/private/data-management/reports',
					iconBg: 'bg-blue-300'
				},
				{
					title: 'Branches',
					description: 'Manage all reports',
					icon: 'mdi:report-bar',
					path: '/private/data-management/branches',
					iconBg: 'bg-blue-300'
				},
				{
					title: 'Mailing List',
					description: 'Manage all reports',
					icon: 'mdi:report-bar',
					path: '/private/data-management/lists',
					iconBg: 'bg-blue-300'
				}
			]
		}
	];
</script>

<script lang="ts">
	import { activePage } from '$data/appStore.svelte';
	import { ActionButton, type IMenuItem } from '@rkosafo/cai.components';

	activePage.setActivePage({ title: 'Data Management', showBreadCrumb: false });
</script>

<div class="flex h-full w-full flex-col gap-3 overflow-y-auto px-6 pb-2">
	{#each dataPages as card}
		<div class="space-y-3">
			<div class="border-b border-gray-300 text-lg text-teal-600">{card.title}</div>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
				{#if card?.items && card.items.length}
					{#each card?.items as item (item.title)}
						<ActionButton
							label={item.title}
							subLabel={item.description}
							showArrow
							iconBgColor={item.iconBg}
							icon={item.icon}
							iconColor={item.iconColor}
							showIconHover={false}
							moreShadow
							iconSize={20}
							href={item.path || ''}
						/>
					{/each}
				{/if}
			</div>
		</div>
	{/each}
</div>
