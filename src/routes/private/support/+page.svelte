<script>
	import { activePage } from '$data/appStore.svelte';
	import Page from '$features/transactions/index.svelte';

	activePage.setActivePage({ title: 'Support', showBreadCrumb: false });
</script>

<div class="h-full px-6">
	<Page />
</div>
