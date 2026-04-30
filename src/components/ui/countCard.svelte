<script lang="ts">
	const {
		icon,
		label,
		count = 0,
		positive = false,
		negative = false,
		description = '',
		path = null as string | null,
		high = false,
		showHover = true
	} = $props<{
		icon: string;
		label: string;
		count?: number;
		positive?: boolean;
		negative?: boolean;
		description?: string;
		path?: string | null;
		high?: boolean;
		showHover?: boolean;
	}>();

	const events = $state<{
		click: MouseEvent;
	}>();
</script>

<a
	href={count && path ? path : null}
	class={`flex items-center gap-3 rounded-xl px-2.5 py-2 ${
		count > 0
			? `loginbox border border-transparent bg-white ${
					showHover ? 'cursor-pointer hover:border hover:border-blue-300' : ''
				}`
			: 'loginbox border bg-white'
	}`}
>
	<div class="loginbox flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white">
		<iconify-icon {icon} style="font-size: 21px;"></iconify-icon>
	</div>
	<div class="flex w-full flex-col">
		<div class="flex items-center gap-2">
			<p class="text-2xl tracking-tighter antialiased">{count}</p>
			{#if description}
				<p class={`pt-2 text-sm ${positive ? 'text-teal-500' : negative ? 'text-red-400' : ''}`}>
					{description}
				</p>
			{/if}
			{#if high}
				<p class="pt-2 text-sm" class:text-teal-500={positive} class:text-red-400={!positive}>
					<iconify-icon icon="ic:baseline-arrow-outward" style="font-size: 20px;"></iconify-icon>
				</p>
			{/if}
		</div>
		<span class="block truncate text-[15px] tracking-tight text-gray-600">
			{label}
		</span>
	</div>
</a>
