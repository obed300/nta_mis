<script lang="ts">
	import * as echarts from 'echarts';
	import { onMount } from 'svelte';

	let { chartOptions, eventListeners = [] } = $props<{
		chartOptions: echarts.EChartsOption;
		eventListeners?: { event: string; handler: (params?: any) => void }[];
	}>();

	// State
	let chartContainer = $state<HTMLDivElement | null>(null);
	let chartInstance = $state<echarts.ECharts>();
	let resizeObserver = $state<ResizeObserver>();

	// Effects
	onMount(() => {
		if (chartContainer) {
			// Initialize chart
			chartInstance = echarts.init(chartContainer);
			chartInstance.setOption(chartOptions);

			// Add event listeners
			eventListeners.forEach(({ event, handler }: any) => {
				chartInstance?.on(event, handler);
			});

			// Initialize resize observer
			resizeObserver = new ResizeObserver(() => {
				chartInstance?.resize();
			});
			resizeObserver.observe(chartContainer);
		}

		// Cleanup function
		return () => {
			eventListeners.forEach(({ event, handler }: any) => {
				chartInstance?.off(event, handler);
			});
			chartInstance?.dispose();

			resizeObserver?.disconnect();
		};
	});

	$effect(() => {
		if (chartInstance) {
			chartInstance?.setOption(chartOptions);
			eventListeners?.forEach(({ event, handler }: any) => {
				chartInstance?.off(event);
				chartInstance?.on(event, handler);
			});
		}
	});
</script>

<div bind:this={chartContainer} class="chart"></div>

<style>
	.chart {
		width: 100%;
		height: 100%;
	}
</style>
