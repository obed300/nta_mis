<script lang="ts">
	import { activePage, breadcrumbData } from '$data/appStore.svelte';
	import Page from '$features/dataManagement/departments/index.svelte';

	activePage.setActivePage({ title: 'Data Management', showBreadCrumb: true });
	breadcrumbData.addToFirstIndex(
		[
			{ title: 'Home', path: '/private/data-management' },
			{ title: 'Departments', path: '/private/data-management/departments' }
		],
		true
	);
</script>

<div class="h-full px-6">
	<Page />
</div>
