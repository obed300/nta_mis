<script lang="ts">
	import { Form, FormInput, type DatatableEditorFormProps } from '@rkosafo/cai.components';
	import z from 'zod';

	let { data, readonly, onChange }: DatatableEditorFormProps = $props();

	let initialValues = $state({
		name: data?.name || '',
		notes: data?.notes || ''
	});

	const schema = z.object({
		name: z.string().min(1, 'Required'),
		notes: z.string().optional()
	});
</script>

<Form {schema} {initialValues} {onChange} class="space-y-3">
	<FormInput name="name" required label="Name" {readonly} />
	<FormInput name="notes" label="Notes" {readonly} />
</Form>
