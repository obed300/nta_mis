<script lang="ts">
	import { activePage, breadcrumbData } from '$data/appStore.svelte';
	import Page from '$features/dataManagement/dashboards/index.svelte';

	activePage.setActivePage({ title: 'Data Management', showBreadCrumb: true });
	breadcrumbData.addToFirstIndex(
		[
			{ title: 'Home', path: '/private/data-management' },
			{ title: 'Dashboard', path: '/private/data-management/dashboards' }
		],
		true
	);
</script>

<div class="h-full px-6">
	<Page />
</div>
