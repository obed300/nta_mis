<script lang="ts">
	import { activePage } from '$data/appStore.svelte';
	import Users from '$features/userManagement/index.svelte';

	activePage.setActivePage({ title: 'User Management', showBreadCrumb: false });
</script>

<div class="px-6 h-full">
	<Users />
</div>
