<script lang="ts">
	import { Tabs, type ITab, type RemoveTabEvent } from '@rkosafo/cai.components';
	import TableEditor from './partials/tableEditor.svelte';
	import Viewer from './partials/viewer.svelte';

	let activeTab = $state(-1);

	let items: ITab[] = $state([
		{
			title: 'Home',
			children: TableEditor,
			id: -1
		}
	]);

	function handleAddTab(val: any) {
		if (items.find((x) => x.id === val.id)) {
			activeTab = val.id;
			return;
		}
		items = [
			...items,
			{
				title: `${val.id} - ${val.name}`,
				id: val.id,
				// icon: 'mdi:tab',
				children: Viewer as ITab['children'],
				isClosable: true,
				props: { data: val }
			}
		];
		activeTab = val.id;
	}

	function handleTabChange(tabId: number | string) {
		activeTab = tabId as number;
	}

	function handleRemoveTab(event: RemoveTabEvent) {
		const { tabId } = event;
		if (!items.find((x) => x.id === tabId)) return;
		items = items.filter((x) => x.id !== tabId);
		activeTab = items[items.length - 1].id as number;
	}
</script>

<Tabs
	tabs={items}
	{activeTab}
	onTabChange={handleTabChange}
	onRemoveTab={handleRemoveTab}
	onTabAdd={handleAddTab}
/>
