<script lang="ts" module>
	const dataPages: IMenuItem[] = [
		{
			title: 'Get Report for',
			items: [
				{
					title: 'Agency',
					description: 'Reports on agency performance and activity',
					icon: 'fa-solid:building-columns',
					path: '/private/reports/agency',
					iconBg: 'bg-blue-300'
				},
				{
					title: 'Customer Subscriptions',
					description: 'Reports on customer subscription trends',
					icon: 'fa-solid:users-chart',
					path: '/private/reports/customer-subscriptions',
					iconBg: 'bg-green-300'
				},
				{
					title: 'Agent Subscriptions',
					description: 'Reports on agent subscription statistics',
					icon: 'fa-solid:user-check',
					path: '/private/reports/agent-subscriptions',
					iconBg: 'bg-yellow-300'
				},
				{
					title: 'Agent Transactions',
					description: 'Reports on transactions carried out by agents',
					icon: 'fa-solid:hand-holding-dollar',
					path: '/private/reports/agent-transactions',
					iconBg: 'bg-purple-300'
				},
				{
					title: 'Agents',
					description: 'Overview reports on registered agents',
					icon: 'fa-solid:id-badge',
					path: '/private/reports/agents',
					iconBg: 'bg-red-300'
				},
				{
					title: 'Basic',
					description: 'Summary of basic reports and quick insights',
					icon: 'fa-solid:chart-pie',
					path: '/private/reports/basic',
					iconBg: 'bg-gray-300'
				},
				{
					title: 'Quick Transactions',
					description: 'Reports on instant or small-scale transactions',
					icon: 'fa-solid:bolt',
					path: '/private/reports/quick-transactions',
					iconBg: 'bg-orange-300'
				},
				{
					title: 'Subscriptions',
					description: 'General subscription reports and analytics',
					icon: 'fa-solid:clipboard-list',
					path: '/private/reports/subscriptions',
					iconBg: 'bg-teal-300'
				},
				{
					title: 'General',
					description: 'General reporting dashboard',
					icon: 'fa-solid:chart-line',
					path: '/private/reports/general',
					iconBg: 'bg-indigo-300'
				},
				{
					title: 'Transactions',
					description: 'Comprehensive transaction reports',
					icon: 'fa-solid:money-bill-trend-up',
					path: '/private/reports/transactions',
					iconBg: 'bg-pink-300'
				},
				{
					title: 'Support',
					description: 'Reports on support requests and resolutions',
					icon: 'fa-solid:life-ring',
					path: '/private/reports/support',
					iconBg: 'bg-cyan-300'
				}
			]
		}
	];
</script>

<script lang="ts">
	import { activePage } from '$data/appStore.svelte';
	import { ActionButton, type IMenuItem } from '@rkosafo/cai.components';

	activePage.setActivePage({ title: 'Report Management', showBreadCrumb: false });
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
