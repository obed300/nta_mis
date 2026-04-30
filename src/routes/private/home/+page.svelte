<script lang="ts">
	import { activePage } from '$data/appStore.svelte';
	import Home from '$features/dashboard/index.svelte';

	activePage.setActivePage({ title: 'Home', showBreadCrumb: false });
</script>

<div class="h-full w-full">
	<Home />
</div>
