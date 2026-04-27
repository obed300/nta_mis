<script lang="ts">
	import { activePage } from '$data/appStore.svelte';
	import Members from '$features/memberss/index.svelte';

	activePage.setActivePage({ title: 'Membership Management', showBreadCrumb: false });
</script>

<div class="h-full px-6">
	<Members />
</div>
