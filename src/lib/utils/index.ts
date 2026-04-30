import { toast, type ToastOptions } from 'svelte-french-toast';

import { nanoid } from 'nanoid';


export const showError = (err: string, options?: ToastOptions) => {
	let id = nanoid();
	return toast.error(err, { id: `${id}-${err}`, duration: 8000, ...options });
};

export const showInfo = (err: string, options?: ToastOptions) => {
	let id = nanoid();
	return toast.success(err, { id: `${id}-${err}`, duration: 6000, ...options });
};

export const hasPagePermission = (name: any) => {
	// const userPermissions = userInfo.value?.permissions ?? [];

	
};

export function arrayToTree(items: any[], parentId: number | null = null): any[] {
	return items
		.filter((item) => item.parentId === parentId)
		.map((item) => ({
			...item,
			children: arrayToTree(items, item.id)
		}));
}
