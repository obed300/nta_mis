<script lang="ts">
	import { goto } from '$app/navigation';

	import { IconifyIcon } from '@rkosafo/cai.components';

	$effect.pre(() => {
		goto('/private/home');
	});
</script>

<div class="flex h-screen w-screen items-center justify-center">
	<IconifyIcon icon="svg-spinners:3-dots-move" class="text-purple-600" style="font-size: 80px;" />
</div>
