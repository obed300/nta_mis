<script lang="ts">
	import { ActionButton, DropdownDivider } from '@rkosafo/cai.components';
	import type { IAction, IMeta } from './rightPanel.svelte';

	interface Props {
		meta: IMeta[];
		showActions: boolean;
		actions: IAction[];
		otherActions: IAction[];
		onactionclick: (action: IAction) => void;
	}
	let {
		meta = [],
		showActions = true,
		actions = [],
		otherActions = [],
		onactionclick
	}: Props = $props();
</script>

<div class="mt-2 mb-2">
	{#if meta?.length}
		{#each meta as { key, value } (key)}
			<div>
				<span class="font-thin text-gray-400">{key}:</span>
				<span
					class:text-red-400={key === 'Last Error'}
					class:font-bold={key === 'Last Error'}
					class:text-blue-600={key === 'Comment'}>{value}</span
				>
			</div>
		{/each}
	{/if}
</div>
{#if showActions && actions.length}
	<div class="flex flex-col gap-3">
		{#each actions as action (action.id ?? action.label)}
			<ActionButton {...action} onclick={() => onactionclick(action)} />
		{/each}
	</div>
{/if}
{#if actions.length && otherActions.length}
	<DropdownDivider />
{/if}
<!-- {#if otherActions?.length}
	<div class="flex flex-col">
		<div class="mt-3 mb-1 font-thin text-gray-400">PODs</div>
		<div class="flex flex-col gap-1">
			{#each otherActions as action (action.id ?? action.label)}
				<ActionButton showBg={false} showArrow {...action} onclick={() => onactionclick(action)} />
			{/each}
		</div>
	</div>
{/if} -->
<div class="h-20"></div>
