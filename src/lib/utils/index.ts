import { toast, type ToastOptions } from 'svelte-french-toast';

import { nanoid } from 'nanoid';
import { HARDCODED_PERMISSIONS, type PermissionType } from '$data/userStore.svelte';

export const showError = (err: string, options?: ToastOptions) => {
	let id = nanoid();
	return toast.error(err, { id: `${id}-${err}`, duration: 8000, ...options });
};

export const showInfo = (err: string, options?: ToastOptions) => {
	let id = nanoid();
	return toast.success(err, { id: `${id}-${err}`, duration: 6000, ...options });
};

export const hasPagePermission = (name: PermissionType) => {
	// const userPermissions = userInfo.value?.permissions ?? [];

	const userPermissions = HARDCODED_PERMISSIONS;
	console.log(userPermissions, 'userPermissions');
	return (userPermissions as any)?.includes(name);
};

export function arrayToTree(items: any[], parentId: number | null = null): any[] {
	return items
		.filter((item) => item.parentId === parentId)
		.map((item) => ({
			...item,
			children: arrayToTree(items, item.id)
		}));
}
