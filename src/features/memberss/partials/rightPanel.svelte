<script lang="ts" module>
	export interface IMeta {
		key: string;
		value: string;
	}

	export interface IAction {
		kind: string;
		label: string;
		subLabel: string;
		id: string;
	}
</script>

<script lang="ts">
	import { Tabs, type ITab } from '@rkosafo/cai.components';
	import Actions from './Actions.svelte';

	interface Props {
		meta: IMeta[];
		showActions?: boolean;
		actions: IAction[];
		otherActions: IAction[];
		onactionclick: (action: IAction) => void;
	}

	let {
		showActions = true,
		meta = [],
		actions = [],
		otherActions = [],
		onactionclick
	}: Props = $props();

	let panelSize = $state('100');
	let activeTab = $state(-1);

	let tabsList: ITab[] = [
		{
			id: -1,
			title: 'Actions',
			children: Actions,
			props: {
				meta,
				actions,
				otherActions,
				showActions,
				onactionclick
			}
		}
		// {
		// 	id: -2,
		// 	title: 'Feeds',
		// 	children: Feeds,
		// 	props: {}
		// }
	];
</script>

<div class="overflow right-panel flex h-full flex-grow flex-col pl-2" style:width={panelSize}>
	<Tabs tabs={tabsList} {activeTab} />
</div>
