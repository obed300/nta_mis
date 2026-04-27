<script lang="ts">
	import {
		Form,
		FormDatepicker,
		FormInput,
		FormSelect,
		type DatatableEditorFormProps
	} from '@rkosafo/cai.components';
	import * as z from 'zod';

	let { data, readonly, onChange }: DatatableEditorFormProps = $props();

	let initialValues = $state({
		name: data?.name || '',
		email: data?.email || '',
		dob: data?.dob || '',
		role: data?.role || null
	});

	const schema = z.object({
		name: z.string().min(1, 'Required'),
		email: z.email(),
		dob: z.string().min(1, 'Required'),
		role: z.string().min(1, 'Required')
	});

	// function handleChange(val) {
	// 	console.log({ val });
	// }
</script>

<Form {schema} {initialValues} {onChange} class="space-y-2">
	<FormInput name="name" label="Name" required {readonly} />
	<FormInput name="email" label="Email" required type="email" {readonly} />
	<FormDatepicker name="dob" label="Date of birth" disabled={readonly} required />
	<FormSelect name="role" label="Role" required options={['Admin', 'User']} disabled={readonly} />
</Form>
