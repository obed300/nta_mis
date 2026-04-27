<script lang="ts">
	import { activePage, breadcrumbData } from '$data/appStore.svelte';

	activePage.setActivePage({ title: 'Data Management', showBreadCrumb: true });
	breadcrumbData.addToFirstIndex(
		[
			{ title: 'Home', path: '/private/data-management' },
			{ title: 'Ticket Categories', path: '/private/data-management/ticket-categories' }
		],
		true
	);
</script>
