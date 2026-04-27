<script lang="ts">
	import { activePage } from '$data/appStore.svelte';

	activePage.setActivePage({ title: 'Dashboard', showBreadCrumb: false });
</script>

<div class="text-4xl text-red-600">home</div>
