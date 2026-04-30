<!-- <script lang="ts">
	import { Input, Label } from '@rkosafo/cai.components';
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';

	dayjs.extend(relativeTime);

	let { data } = $props();

	const address = $derived.by(() => {
		try {
			return typeof data.address === 'string' ? JSON.parse(data.address) : data.address || {};
		} catch {
			return {};
		}
	});

	const additionalInformation = $derived.by(() => {
		try {
			return typeof data.additionalInformation === 'string'
				? JSON.parse(data.additionalInformation)
				: data.additionalInformation || {};
		} catch {
			return {};
		}
	});

	const categories = $derived.by(() => {
		try {
			return typeof data.category === 'string' ? JSON.parse(data.category) : [];
		} catch {
			return [];
		}
	});

	const products = $derived.by(() => {
		try {
			return typeof data.productMaterialCategory === 'string'
				? JSON.parse(data.productMaterialCategory)
				: data.productMaterialCategory || [];
		} catch {
			return [];
		}
	});

	const statusColors = {
		PENDING: 'bg-amber-100 text-amber-700 border-amber-200',
		APPROVED: 'bg-emerald-100 text-emerald-700 border-emerald-200',
		REJECTED: 'bg-rose-100 text-rose-700 border-rose-200'
	};
</script>

<div class="mx-auto w-full max-w-6xl space-y-6 bg-white p-4 sm:p-6">
	<div class="flex flex-wrap items-start justify-between gap-4 border-b border-gray-100 pb-6">
		<div class="space-y-1">
			<div class="flex items-center gap-3">
				<h1 class="text-2xl font-black tracking-tight text-slate-900">{data.name}</h1>
			</div>
			<p class="text-sm font-bold tracking-wider text-emerald-600 uppercase">
				{data.organization || 'Individual Member'}
			</p>
			<p class="text-xs text-slate-400">
				Registered {dayjs(data.createdOn).fromNow()} by
				<span class="font-medium text-slate-600">{data.createdBy}</span>
			</p>
		</div>

		<div class="flex flex-col items-end gap-2">
			<span
				class="inline-flex items-center rounded-full border px-4 py-1 text-xs font-black tracking-widest uppercase {statusColors[
					data.status
				] || 'bg-gray-100 text-gray-600'}"
			>
				{data.status}
			</span>
			<span class="text-[10px] font-bold tracking-tighter text-slate-400 uppercase"
				>Revision v{data.revision}</span
			>
		</div>
	</div>

	<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
		<div class="space-y-6 lg:col-span-2">
			<section class="grid grid-cols-1 gap-4 rounded-xl border border-slate-100 p-4 sm:grid-cols-2">
				<h3 class="col-span-full text-xs font-black tracking-widest text-slate-400 uppercase">
					Contact & Identity
				</h3>
				<div>
					<Label class="text-[10px] font-bold text-slate-400 uppercase">Email Address</Label>
					<Input value={data.email} readonly />
				</div>
				<div>
					<Label class="text-[10px] font-bold text-slate-400 uppercase">Phone Number</Label>
					<Input value={data.phoneNumber} readonly />
				</div>
				<div>
					<Label class="text-[10px] font-bold text-slate-400 uppercase">Operational Area</Label>
					<Input value={data.operationalArea} readonly />
				</div>
				<div>
					<Label class="text-[10px] font-bold text-slate-400 uppercase">Year Established</Label>
					<Input value={data.commencementYear} readonly />
				</div>
			</section>

			<section class="rounded-xl border border-slate-100 p-4">
				<h3 class="mb-4 text-xs font-black tracking-widest text-slate-400 uppercase">
					Physical Location
				</h3>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
					<div class="sm:col-span-1">
						<Label class="text-[10px] font-bold text-slate-400 uppercase">House No</Label>
						<Input value={address.houseNo} readonly />
					</div>
					<div class="sm:col-span-2">
						<Label class="text-[10px] font-bold text-slate-400 uppercase">Street Name</Label>
						<Input value={address.street} readonly />
					</div>
					<div>
						<Label class="text-[10px] font-bold text-slate-400 uppercase">Suburb</Label>
						<Input value={address.suburb} readonly />
					</div>
					<div>
						<Label class="text-[10px] font-bold text-slate-400 uppercase">District</Label>
						<Input value={address.district} readonly />
					</div>
					<div>
						<Label class="text-[10px] font-bold text-slate-400 uppercase">Region</Label>
						<Input value={address.region} readonly />
					</div>
					<div class="sm:col-span-3">
						<Label class="text-[10px] font-bold text-slate-400 uppercase">Landmark</Label>
						<Input value={address.landmark} readonly />
					</div>
					<div class="sm:col-span-3">
						<Label class="text-[10px] font-bold text-slate-400 uppercase"
							>Digital Address (GPS)</Label
						>
						<Input value={address.gps} readonly class="font-mono text-emerald-700" />
					</div>
				</div>
			</section>
		</div>

		<div class="space-y-6">
			<div class="rounded-xl border border-slate-200 bg-slate-50 p-5">
				<h3 class="mb-4 text-xs font-black tracking-widest text-slate-500 uppercase">
					Membership Categories
				</h3>
				<div class="flex flex-wrap gap-2">
					{#each categories as cat}
						<span
							class="rounded border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-700 shadow-sm"
						>
							{cat}
						</span>
					{:else}
						<span class="text-xs italic text-slate-400">No categories selected</span>
					{/each}
				</div>
			</div>

			<div class="rounded-xl border border-emerald-100 bg-emerald-50/50 p-5">
				<h3 class="mb-4 text-xs font-black tracking-widest text-emerald-600 uppercase">
					Product Portfolio
				</h3>
				<div class="flex flex-wrap gap-2">
					{#each products as prod}
						<span class="rounded bg-emerald-600 px-3 py-1 text-xs font-bold text-white">
							{prod}
						</span>
					{:else}
						<span class="text-xs italic text-emerald-400">No products listed</span>
					{/each}
				</div>
				{#if data.additionalInformation}
					<div class="mt-4 border-t border-emerald-100 pt-4">
						<p class="text-[10px] font-bold text-emerald-600 uppercase">Additional Notes</p>
						<p class="mt-1 text-xs leading-relaxed text-slate-600">{data.additionalInformation}</p>
					</div>
				{/if}
			</div>

			<div class="space-y-3 rounded-xl border border-dashed border-slate-300 p-4">
				<h3 class="text-xs font-black tracking-widest text-slate-400 uppercase">Audit Trail</h3>
				<div class="flex justify-between text-xs">
					<span class="text-slate-400">Last Updated</span>
					<span class="font-medium text-slate-700"
						>{dayjs(data.updatedOn).format('MMM DD, YYYY HH:mm')}</span
					>
				</div>
				<div class="flex justify-between text-xs">
					<span class="text-slate-400">Updated By</span>
					<span class="font-medium text-slate-700">{data.updatedBy}</span>
				</div>
				<div class="flex justify-between text-xs">
					<span class="text-slate-400">Declaration</span>
					<span class="font-bold text-emerald-600 italic">"{data.membershipDeclaration}"</span>
				</div>
			</div>
		</div>
	</div>
</div> -->
<script lang="ts">
	import { Input, Label } from '@rkosafo/cai.components';
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';

	dayjs.extend(relativeTime);

	// Svelte 5 Props
	let { data } = $props();

	// --- Derived Parsers for JSON strings ---
	const address = $derived.by(() => {
		try {
			return typeof data.address.rootElement === 'string'
				? JSON.parse(data.address.rootElement)
				: data.address.rootElement || {};
		} catch {
			return {};
		}
	});

	const employeeDetails = $derived.by(() => {
		try {
			return typeof data.employeeDetails.rootElement === 'string'
				? JSON.parse(data.employeeDetails.rootElement)
				: data.employeeDetails.rootElement || {};
		} catch {
			return {};
		}
	});

	const declaration = $derived.by(() => {
		try {
			return typeof data.membershipDeclaration.rootElement === 'string'
				? JSON.parse(data.membershipDeclaration.rootElement)
				: data.membershipDeclaration.rootElement || {};
		} catch {
			return {};
		}
	});

	const categories = $derived.by(() => {
		try {
			if (!data.category) return [];
			return typeof data.category === 'string' ? JSON.parse(data.category) : data.category;
		} catch {
			return [];
		}
	});

	const products = $derived.by(() => {
		try {
			if (!data.productMaterialCategory) return [];
			return typeof data.productMaterialCategory === 'string'
				? JSON.parse(data.productMaterialCategory)
				: data.productMaterialCategory;
		} catch {
			return [];
		}
	});

	// Status Color Logic
	const statusColors = {
		PENDING: 'bg-amber-100 text-amber-700 border-amber-200',
		APPROVED: 'bg-emerald-100 text-emerald-700 border-emerald-200',
		REJECTED: 'bg-rose-100 text-rose-700 border-rose-200'
	};
</script>

<div class="mx-auto w-full max-w-6xl space-y-6 bg-white p-4 sm:p-6">
	<!-- HEADER SECTION -->
	<div class="flex flex-wrap items-start justify-between gap-4 border-b border-gray-100 pb-6">
		<div class="space-y-1">
			<div class="flex items-center gap-3">
				<h1 class="text-2xl font-black tracking-tight text-slate-900">{data.name}</h1>
			</div>
			<p class="text-sm font-bold tracking-wider text-emerald-600 uppercase">
				{data.organization || 'Individual Member'}
			</p>
			<p class="text-xs text-slate-400">
				Registered {dayjs(data.createdOn).fromNow()} by
				<span class="font-medium text-slate-600">{data.createdBy}</span>
			</p>
		</div>

		<div class="flex flex-col items-end gap-2">
			<span
				class="inline-flex items-center rounded-full border px-4 py-1 text-xs font-black tracking-widest uppercase {statusColors[
					data.status
				] || 'bg-gray-100 text-gray-600'}"
			>
				{data.status}
			</span>
		</div>
	</div>

	<!-- GRID LAYOUT -->
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
		<div class="space-y-6 lg:col-span-2">
			<!-- CONTACT & IDENTITY -->
			<section class="grid grid-cols-1 gap-4 rounded-xl border border-slate-100 p-4 sm:grid-cols-2">
				<h3 class="col-span-full text-xs font-black tracking-widest text-slate-400 uppercase">
					Contact & Identity
				</h3>
				<div>
					<Label class="text-[10px] font-bold text-slate-400 uppercase">Email Address</Label>
					<Input value={data.email} readonly />
				</div>
				<div>
					<Label class="text-[10px] font-bold text-slate-400 uppercase">Phone Number</Label>
					<Input value={data.phoneNumber} readonly />
				</div>
				{#if data.ghanaCardNumber}
					<div>
						<Label class="text-[10px] font-bold text-slate-400 uppercase">Ghana Card</Label>
						<Input value={data.ghanaCardNumber} readonly />
					</div>
				{/if}
				<div>
					<Label class="text-[10px] font-bold text-slate-400 uppercase">Year Established</Label>
					<Input value={data.commencementYear} readonly />
				</div>
				<div>
					<Label class="text-[10px] font-bold text-slate-400 uppercase">Business Reg No</Label>
					<Input value={data.redgNo} readonly />
				</div>
				<div class="sm:col-span-2">
					<Label class="text-[10px] font-bold text-slate-400 uppercase">Operational Area</Label>
					<Input value={data.operationalArea} readonly />
				</div>

				{#if data.description}
					<div class="sm:col-span-2">
						<Label class="text-[10px] font-bold text-slate-400 uppercase"
							>Brief Description of Facilities / Services Offered
						</Label>
						<Input value={data.description} readonly />
					</div>
				{/if}
			</section>

			<!-- PHYSICAL LOCATION -->
			<section class="rounded-xl border border-slate-100 p-4">
				<h3 class="mb-4 text-xs font-black tracking-widest text-slate-400 uppercase">
					Physical Location
				</h3>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
					<div>
						<Label class="text-[10px] font-bold text-slate-400 uppercase">House No</Label>
						<Input value={address.houseNo} readonly />
					</div>
					<div class="sm:col-span-2">
						<Label class="text-[10px] font-bold text-slate-400 uppercase">Street Name</Label>
						<Input value={address.street} readonly />
					</div>
					{#if address.town}
						<div>
							<Label class="text-[10px] font-bold text-slate-400 uppercase">Town</Label>
							<Input value={address.town} readonly />
						</div>
					{/if}
					{#if address.suburb}
						<div>
							<Label class="text-[10px] font-bold text-slate-400 uppercase">Suburb</Label>
							<Input value={address.suburb} readonly />
						</div>
					{/if}
					<div>
						<Label class="text-[10px] font-bold text-slate-400 uppercase">District/Assembly</Label>
						<Input value={address.assembly || address.district} readonly />
					</div>
					<div>
						<Label class="text-[10px] font-bold text-slate-400 uppercase">Region</Label>
						<Input value={address.region} readonly />
					</div>
					<div class="sm:col-span-3">
						<Label class="text-[10px] font-bold text-slate-400 uppercase">Landmark</Label>
						<Input value={address.landmark} readonly />
					</div>
					<div class="sm:col-span-3">
						<Label class="text-[10px] font-bold text-slate-400 uppercase"
							>Digital Address (GPS)</Label
						>
						<Input value={address.gps} readonly class="font-mono text-emerald-700" />
					</div>
				</div>
			</section>

			<!-- EMPLOYEE DETAILS (NEW) -->

			{#if data.employeeDetails}
				<section class="rounded-xl border border-slate-100 p-4">
					<h3 class="mb-4 text-xs font-black tracking-widest text-slate-400 uppercase">
						Employee Details
					</h3>
					<div class="overflow-hidden rounded-lg border border-slate-100">
						<table class="w-full text-left text-xs">
							<thead class="bg-slate-50 text-[10px] font-bold text-slate-500 uppercase">
								<tr>
									<th class="px-4 py-2">Profession</th>
									<th class="px-4 py-2 text-center">Total</th>
									<th class="px-4 py-2 text-center">Trained</th>
									<th class="px-4 py-2">Certified Lead</th>
								</tr>
							</thead>
							<tbody class="divide-y divide-slate-100">
								{#each Object.entries(employeeDetails) as [role, info]}
									<tr>
										<td class="px-4 py-2 font-bold text-slate-700">{role}</td>
										<td class="px-4 py-2 text-center">{info.total}</td>
										<td class="px-4 py-2 text-center">{info.trained}</td>
										<td class="px-4 py-2 text-slate-500">{info.certified}</td>
									</tr>
								{:else}
									<tr>
										<td colspan="4" class="px-4 py-4 text-center italic text-slate-400"
											>No employee details provided</td
										>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</section>
			{/if}
		</div>

		<!-- RIGHT COLUMN: CATEGORIES & LOGS -->
		<div class="space-y-6">
			<!-- CATEGORIES -->

			{#if data.category}
				<div class="rounded-xl border border-slate-200 bg-slate-50 p-5">
					<h3 class="mb-4 text-xs font-black tracking-widest text-slate-500 uppercase">
						Membership Categories
					</h3>
					<div class="flex flex-wrap gap-2">
						{#each categories as cat}
							<span
								class="rounded border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-700 shadow-sm"
							>
								{cat}
							</span>
						{:else}
							<span class="text-xs italic text-slate-400">No categories selected</span>
						{/each}
					</div>
				</div>
			{/if}

			<!-- PRODUCTS -->

			{#if data.productMaterialCategory}
				<div class="rounded-xl border border-emerald-100 bg-emerald-50/50 p-5">
					<h3 class="mb-4 text-xs font-black tracking-widest text-emerald-600 uppercase">
						Product Portfolio
					</h3>
					<div class="flex flex-wrap gap-2">
						{#each products as prod}
							<span class="rounded bg-emerald-600 px-3 py-1 text-xs font-bold text-white">
								{prod}
							</span>
						{:else}
							<span class="text-xs italic text-emerald-400">No products listed</span>
						{/each}
					</div>
				</div>
			{/if}

			{#if data.additionalInformation}
				<div class="rounded-xl border border-emerald-100 bg-emerald-50/50 p-5">
					<div class="mt-2">
						<p class="text-[10px] font-bold text-emerald-600 uppercase">Additional Notes</p>
						<p class="mt-1 text-xs leading-relaxed text-slate-600">
							{data.additionalInformation}
						</p>
					</div>
				</div>
			{/if}

			<!-- AUDIT TRAIL -->
			<div class="space-y-3 rounded-xl border border-dashed border-slate-300 p-4">
				<h3 class="text-xs font-black tracking-widest text-slate-400 uppercase">
					Audit & Declaration
				</h3>
				<div class="flex justify-between text-xs">
					<span class="text-slate-400">Last Updated</span>
					<span class="font-medium text-slate-700"
						>{dayjs(data.updatedOn).format('MMM DD, YYYY HH:mm')}</span
					>
				</div>
				<div class="flex justify-between text-xs">
					<span class="text-slate-400">Updated By</span>
					<span class="font-medium text-slate-700">{data.updatedBy}</span>
				</div>
				<div class="mt-4 border-t border-slate-100 pt-3">
					<p class="text-[10px] font-bold text-slate-400 uppercase">Membership Declaration</p>
					<p class="mt-1 text-xs text-slate-600 italic">
						Confirmed by <span class="font-bold text-slate-800"
							>{declaration.declarantName || 'N/A'}</span
						>
						({declaration.declarantPosition || 'N/A'}) on {declaration.date || 'N/A'}.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
