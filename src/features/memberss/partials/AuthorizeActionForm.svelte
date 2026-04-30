<script lang="ts">
	import { updateMemberStatus } from '$features/members/svc';

	
	import { showError, showInfo } from '$lib/utils';
	import { Button, Form, FormTextarea, type IFormChangeProp } from '@rkosafo/cai.components';
	import z from 'zod';

	// Props
	let { data, action, onClose, onSuccess } = $props<{
		data: any;
		action: { kind: 'APPROVE' | 'REJECT'; label: string };
		onClose: () => void;
		onSuccess: () => void;
	}>();

	let busy = $state(false);

	// The form only needs to capture the reason (statusText)
	let formValues = $state({
		reason: ''
	});
	const actionText = action.kind === 'REJECT' ? 'rejecting' : 'approving';

	// Validation: Rejections MUST have a reason. Approvals require min 5 chars.
	const schema = z.object({
		reason: z.string().min(5, 'Please provide a justification (min 5 characters)')
	});

	const handleChange = (value: IFormChangeProp<typeof formValues>) => {
		formValues = value.values;
	};

	async function handleSubmit() {
		try {
			busy = true;

			// Validate form
			const result = schema.safeParse(formValues);
			if (!result.success) {
				showError(result.error.issues[0].message);
				return;
			}

			// Prepare payload for authorizeMakerCheckerEntry
			const payload = {
				id: Number(data.id),
				status:
	action.kind === 'approve'
		? 'APPROVED'
		: action.kind === 'reject'
		? 'REJECTED'
		: 'PENDING',
				reason: formValues.reason,
				
			};

			const ret = await updateMemberStatus(payload);

			if (ret.success) {
				showInfo(`Entry has been ${action.kind.toLowerCase()}d successfully`);
				if (onSuccess) onSuccess();
				if (onClose) onClose();
			} else {
				showError(ret.message || 'Authorization failed');
			}
		} catch (error: any) {
			showError(error?.message || 'An unexpected error occurred');
		} finally {
			busy = false;
		}
	}
</script>

<div class="flex flex-col gap-4 p-1">
	<!-- Action Header -->
	<div
		class="rounded-md border p-3
		{action.kind === 'REJECT' ? 'border-red-100 bg-red-50' : 'border-green-100 bg-green-50'}"
	>
		<p class="text-sm {action.kind === 'REJECT' ? 'text-red-800' : 'text-green-800'}">
	You are <strong>{actionText}</strong> the application for:

	<span class="mt-1 block font-semibold uppercase">{data.name}</span>
	<!-- <span class="text-xs opacity-75">
		{data.inputter}
	</span> -->
</p>
	</div>

	<Form {schema} initialValues={formValues} onChange={handleChange} class="space-y-4">
		<!-- STATUS TEXT / REASON FIELD -->
		<div class="space-y-1">
			<FormTextarea
				name="reason"
				label="Justification / Comments"
				required
				placeholder={action.kind === 'REJECT'
					? 'Explain why this request is being rejected...'
					: 'Add any approval notes here...'}
				rows={4}
			/>
		</div>

		<!-- FOOTER ACTIONS -->
		<div class="mt-2 flex justify-end gap-3 border-t pt-4">
			<Button type="button" color="red" onclick={() => onClose()} disabled={busy}>Cancel</Button>

			<Button
				type="button"
				color={action.kind === 'REJECT' ? 'red' : 'primary'}
				disabled={busy}
				onclick={handleSubmit}
				class="min-w-[140px]"
			>
				Confirm {action.label}
			</Button>
		</div>
	</Form>
</div>
