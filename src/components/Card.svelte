<script lang="ts">
	import { IconifyIcon } from '@rkosafo/cai.components';

	interface cardPropsTypes {
		title: string;
		value: number | string;
		icon: string;
		color: string;
		desc: string;
	}

	const { title, value, icon, color, desc }: cardPropsTypes = $props();

	function formatNumber(value: number): string {
		return value.toLocaleString('en-US');
	}
</script>

<div class="m-2 rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
	<div class="flex items-center justify-between">
		<div>
			<p class="text-sm font-medium text-gray-600">{title}</p>
			<p class="text-2xl font-bold text-gray-900">{formatNumber(value)}</p>
		</div>

		<div class={`flex items-center rounded-full bg-${color}-100 p-3`}>
			<IconifyIcon {icon} class={`text-2xl text-${color}-600`} />
		</div>
	</div>
	<p class="mt-2 text-xs text-gray-500">{desc}</p>
</div>

<style>
	:global(.chart) {
		min-height: 400px;
	}
</style>
