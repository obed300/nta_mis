<script lang="ts">
	import {
		Form,
		FormInput,
		FormTextarea,
		type DatatableEditorFormProps
	} from '@rkosafo/cai.components';
	import z from 'zod';

	let { data, readonly, onChange }: DatatableEditorFormProps = $props();

	let initialValues = $state({
		name: data?.name || '',
		viewer: data?.viewer || '',
		description: data?.description || '',
		definition: ''
	});

	const schema = z.object({
		name: z.string().min(1, 'Required'),
		viewer: z.string().min(1, 'Required'),
		description: z.string().optional()
	});
</script>

<Form {schema} {initialValues} {onChange} class="space-y-3">
	<FormInput name="name" required label="Name" {readonly} />
	<FormInput name="viewer" label="Viewer" required {readonly} />
	<FormTextarea name="definition" label="Definition" {readonly} />
	<FormTextarea name="description" label="Description" {readonly} />
</Form>
