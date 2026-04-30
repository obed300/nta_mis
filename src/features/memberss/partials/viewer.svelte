<script lang="ts" module>
	import DetailEditor from './detailEditor.svelte';

	const map: Record<string, ConstructorOfATypedSvelteComponent> = {
		details: DetailEditor
	};

	function textToComponent(typeName: string): ConstructorOfATypedSvelteComponent {
		return map[typeName] || null;
	}

	function initMappers() {
		addComponentMapper(textToComponent);
	}

	function clearMappers() {
		removeComponentMapper(textToComponent);
	}
</script>

<script lang="ts">
	import {
		ComponentCanvas,
		addComponentMapper,
		removeComponentMapper,
		Modal,
		AlertDialog,
		type IComponentDescriptor,
		type IDocumentCanvasClose,
		refetchDatatable
	} from '@rkosafo/cai.components';

	import { onDestroy, onMount } from 'svelte';
	import { nanoid } from 'nanoid';

	import RightPanel from './rightPanel.svelte';
	import { readMembers, readMembersFilter } from '$features/members/svc';
	import AuthorizeActionForm from './AuthorizeActionForm.svelte';

	let { data, onRemoveTab } = $props();

	initMappers();

	let elements = $state<IComponentDescriptor[]>([]);

	// Actions updated to match the Maker-Checker flow
	let actions = $state<any[]>([
		{ kind: 'approve', label: 'Approve Application', icon: 'ion:checkmark-circle-outline' },
		{ kind: 'reject', label: 'Reject Application', icon: 'ion:close-circle-outline' }
	]);

	let otherActions = $state<any[]>([{ kind: 'file', label: 'Previous Request' }]);
	let meta = $state<any>({});

	let openActionModal = $state(false);
	let selectedAction = $state<any>(null);

	// -- Modal & Alert State --
	let openRuleModal = $state(false);
	let showAlert = $state(false);
	let closeLoading = $state(false);

	let rules = $state<any[]>([]);
	let selectedRule = $state<any>(null);

	// -- Data Loading --
	async function loadRules() {
		if (!data?.id) return;
		try {
			const res = await readMembersFilter(1, 100, data?.id);
			if (res.success && res.data) {
				rules = res.data.items || res.data;
				updateCanvasRules();
			}
		} catch (e: any) {
			console.error(e);
		}
	}

	function updateCanvasRules() {
		const idx = elements.findIndex((x) => x.type === 'ruleList');
		if (idx > -1) {
			let updated = { ...elements[idx] };
			updated.props = {
				rules,
				onEdit: handleEditRequest,
				onDelete: handleDeleteRequest
			};
			elements[idx] = updated;
		}
	}

	// -- Canvas Logic --
	function add(descriptor: IComponentDescriptor, insertTop: boolean = false) {
		const existing = elements.find((x) => x.type == descriptor.type);
		if (existing) {
			if (elements[0].id === existing.id) return;
			elements = [existing, ...elements.filter((x) => x.id !== existing.id)];
			return;
		}
		descriptor.id = nanoid();
		if (insertTop) elements = [descriptor, ...elements];
		else elements = [...elements, descriptor];
	}

	function closeAComponent(val: IDocumentCanvasClose) {
		elements = elements.filter((x) => x.id !== val.id);
	}

	function toggleCollapse(id: string) {
		const index = elements.findIndex((x) => x.id === id);
		if (index !== -1) {
			const updatedElement = { ...elements[index] };
			updatedElement.collapsed = !updatedElement.collapsed;
			const updatedElements = [...elements];
			updatedElements[index] = updatedElement;
			elements = updatedElements;
		}
	}

	// -- Action Handlers --

	/**
	 * FIX: Removed prompt() logic.
	 * This now opens the AuthorizeActionForm in the Modal for Approve/Reject.
	 */
	function onAction(val: any) {
		selectedAction = val;
		openActionModal = true;
	}

	function handleEditRequest(rule: any) {
		selectedRule = rule;
		openRuleModal = true;
	}

	function handleDeleteRequest(rule: any) {
		selectedRule = rule;
		showAlert = true;
	}

	function closeAlert() {
		showAlert = false;
		selectedRule = null;
	}

	/**
	 * Logic to run after the AuthorizeActionForm succeeds
	 */
	function handleActionSuccess() {
		refetchDatatable({});

		onRemoveTab({ tabId: data.id });
	}

	onMount(() => {
		// 1. Details Component
		add({
			type: 'details',
			title: 'Details',
			closable: false,
			collapsible: true,
			props: { data, onRemoveTab }
		});

		// 2. Rule List Component
		add({
			type: 'ruleList',
			title: 'Scoring Rules',
			closable: false,
			collapsible: true,
			props: { rules: [], onEdit: handleEditRequest, onDelete: handleDeleteRequest }
		});

		loadRules();
	});

	// onDestroy(() => {
	// 	clearMappers();
	// });
</script>

<!-- <div class="h-full w-full overflow-hidden px-5 pb-5">
	
	<div class="flex h-full w-full flex-col">
		<div class="h-full w-full flex-grow overflow-y-auto rounded-lg bg-slate-50/50 p-2">
			<ComponentCanvas children={elements} close={closeAComponent} {toggleCollapse} />
		</div>
	</div>
</div> -->
<div class="h-full w-full overflow-hidden px-5">
    <div class="flex h-full w-full flex-grow">
        <div class="h-full w-full flex-grow overflow-auto rounded-lg">
            <ComponentCanvas children={elements} close={closeAComponent} {toggleCollapse} />
        </div>
        <div class="h-40"></div> 
        <div class="flex h-full flex-grow">
            <RightPanel {actions} {otherActions} onactionclick={onAction} {meta} />
        </div> 
    </div>
</div>
<Modal
	bind:open={openActionModal}
	onclose={() => (openActionModal = false)}
	title={selectedAction?.label || 'Perform Action'}
	size="md"
>
	{#if openActionModal && selectedAction}
		<AuthorizeActionForm
			{data}
			action={selectedAction}
			onClose={() => (openActionModal = false)}
			onSuccess={handleActionSuccess}
		/>
	{/if}
</Modal>