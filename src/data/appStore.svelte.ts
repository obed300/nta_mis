import type { IMenuItem, IBreadcrumb } from '@rkosafo/cai.components';

export interface IPageInfo {
	title: string;
	showBreadCrumb?: boolean;
	dropdownOptions?: IMenuItem[];
	currentDropdownOption?: IMenuItem;
}

export let activePage = $state<{ value: IPageInfo; setActivePage: (value: IPageInfo) => void }>({
	value: { title: 'Dashboard', showBreadCrumb: false },
	setActivePage(value) {
		this.value = value;
	}
});

export let breadcrumbData = $state<{
	value: IBreadcrumb[];
	addToFirstIndex: (newCrumb: IBreadcrumb | IBreadcrumb[], clear: boolean) => void;
	addToLastIndex: (newCrumb: IBreadcrumb | IBreadcrumb[]) => void;
	removeFromFront: (index: number) => void;
	reset: () => void;
}>({
	value: [{ title: 'Home' }],
	addToFirstIndex(newCrumb, clear) {
		if (clear) {
			this.value = Array.isArray(newCrumb) ? [...newCrumb] : [newCrumb];
			return;
		}
		if (Array.isArray(newCrumb)) {
			this.value = [...newCrumb, ...this.value];
		} else if (newCrumb) {
			this.value = [newCrumb, ...this.value];
		}
	},
	addToLastIndex(newCrumb) {
		if (Array.isArray(newCrumb)) {
			this.value = [...this.value, ...newCrumb];
		} else if (newCrumb) {
			this.value = [...this.value, newCrumb];
		}
	},
	removeFromFront(index) {
		this.value = this.value.slice(0, index + 1);
	},
	reset() {
		this.value = [{ title: 'Home' }];
	}
});
