<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { authService } from '$data/auth.svelte';
	import '../app.css';

	let { children } = $props();

	let interval: NodeJS.Timer | null = $state(null);

	onMount(() => {
		interval = setInterval(() => {
			authService.refreshToken();
		}, 30000);
		authService.init({
			url: 'https://auth.recoverathome.org/auth',
			realm: 'recover',
			clientId: 'kyabirwa'
		});
	});
	onDestroy(() => clearInterval(interval as any));
</script>

{@render children()}
