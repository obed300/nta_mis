<script lang="ts" module>
	function fetchNotifications(): Promise<NotificationItem[]> {
		return new Promise((resolve) => {
			// Simulate API delay
			setTimeout(() => {
				resolve([
					{
						id: 1,
						icon: 'basil:document-solid',
						isRead: false,
						time: '2 mins ago',
						content: 'Your document has been approved',
						sender: 'System'
					},
					{
						id: 2,
						icon: 'entypo:chat',
						isRead: true,
						time: '1 hour ago',
						content: 'New message from support team',
						sender: 'Support'
					},
					{
						id: 3,
						icon: 'basil:document-solid',
						isRead: false,
						time: '3 hours ago',
						content: 'Invoice #1234 is ready',
						sender: 'Billing'
					},
					{
						id: 4,
						icon: 'entypo:chat',
						isRead: true,
						time: 'Yesterday',
						content: 'Your subscription will renew soon',
						sender: 'Account'
					},
					{
						id: 5,
						icon: 'basil:document-solid',
						isRead: false,
						time: '2 days ago',
						content: 'New policy update available',
						sender: 'Admin'
					}
				]);
			}, 800); // Simulate network delay
		});
	}
</script>

<script lang="ts">
	import {
		AlertDialog,
		Breadcrumb,
		IconifyIcon,
		NotificationList,
		TFContentWrapper,
		TFHeader,
		TFLayoutWrapper,
		TFSidebar,
		type IBreadcrumbClick,
		type IMenuItem,
		type NotificationItem
	} from '@rkosafo/cai.components';
	import { activePage, breadcrumbData } from '$data/appStore.svelte';
	import { menuItems } from '$data/userStore.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import logo from '$lib/images/nta-logo.png';
	import { authService, userInfo } from '$data/auth.svelte';
	let { children: defaultChildren } = $props();
	let hideSidebar = $state(false);
	let showAlert = $state(false);
	const activeBreadCrumb = $derived(breadcrumbData.value[breadcrumbData.value.length - 1].title);

	function logout() {
		authService.logout();
		showAlert = false;
	}
	function handleClearNofications() {
		// console.log(val);
	}
	function handleClickNotification(val: NotificationItem) {
		console.log(val);
	}

	function breadcrumbClicked(val: IBreadcrumbClick) {
		const { index, path } = val;
		breadcrumbData.removeFromFront(index);
		goto(path!);
	}

	function isActiveFunction(menuItem: IMenuItem): boolean {
		if (menuItem.path === page.url.pathname) {
			return true;
		} else if (page.url.pathname.split('/')[2] === menuItem.path?.split('/')[2]) {
			return true;
		} else {
			return false;
		}
	}
</script>

{#if !userInfo.value}
	<div class="flex h-screen w-screen items-center justify-center">
		<IconifyIcon icon="svg-spinners:3-dots-move" class="text-purple-600" style="font-size: 80px;" />
	</div>
{:else}
	<div class="h-screen w-screen">
		<TFLayoutWrapper>
			{#snippet sidebar()}
				<TFSidebar
					appName="NTA"
					appShortName="NTA"
					logoUrl={logo}
					homeUrl="/private/home"
					menuItems={menuItems.value}
					{hideSidebar}
					{isActiveFunction}
				/>
			{/snippet}
			{#snippet content()}
				<TFContentWrapper>
					{#snippet topBar()}
						<TFHeader
							notificationCount={3}
							bind:hideSidebar
							onsignout={() => (showAlert = true)}
							title={activePage.value.title}
							user={{
								firstName: userInfo.value?.firstName,
								lastName: userInfo.value?.lastName,
								initials: userInfo.value?.initials,
								fullName: userInfo.value?.name,
								role: userInfo.value?.role,
								username: userInfo.value?.username
							}}
						>
							{#snippet notificationList()}
								<NotificationList
									read={fetchNotifications}
									onclick={handleClickNotification}
									onClearNotifications={handleClearNofications}
								/>
							{/snippet}
						</TFHeader>
					{/snippet}
					{#snippet children()}
						<div class="flex h-full flex-grow flex-col">
							{#if activePage.value.showBreadCrumb}
								<div class="pt-3 pl-6">
									<Breadcrumb
										options={breadcrumbData.value}
										{activeBreadCrumb}
										onclik={breadcrumbClicked}
									/>
								</div>
							{/if}
							<div class="h-100 w-full flex-grow pt-4">
								{@render defaultChildren()}
							</div>
						</div>
					{/snippet}
				</TFContentWrapper>
			{/snippet}
		</TFLayoutWrapper>
	</div>
{/if}

<AlertDialog
	bind:open={showAlert}
	message="Are you sure you want to sign out?"
	onCancel={() => (showAlert = false)}
	onYes={logout}
/>
