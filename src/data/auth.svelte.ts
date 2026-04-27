import {
	createAuthStore,
	KeycloakService,
	type AuthUserInfo,
	type FetchAuthUserInfoFn,
	type KeycloakConfig
} from '@rkosafo/cai.components';

const readUser: FetchAuthUserInfoFn = async (token?: string) => {
	return {
		success: true,
		message: '',
		code: 200,
		data: {
			firstName: 'Theophilus',
			lastName: 'Adusei',
			initials: 'TA',
			name: 'Theophilus Adusei',
			username: 'tkadusei@bitblueconsult.com',
			permissions: [],
			role: 'Super Admin',
			roleId: 1,
			email: 'tkadusei@bitblueconsult.com',
			otherNames: ''
		}
	};
};

export let userInfo = $state<{
	value: AuthUserInfo | null;
	setUserInfo: (val: AuthUserInfo | null) => void;
}>({
	value: null,
	setUserInfo(val) {
		this.value = val;
	}
});

export let authService = $state<{
	value: KeycloakService | null;
	init: (val: KeycloakConfig) => void;
	refreshToken: () => void;
	logout: () => void;
}>({
	value: null,
	init(val) {
		const store = createAuthStore();
		this.value = new KeycloakService(store, readUser, {
			onAuthenticated(val: AuthUserInfo) {
				userInfo.setUserInfo(val);
			},
			onLogout() {
				userInfo.setUserInfo(null);
			},
			onError(errorMessage:string){
				
			}
		});
		this.value.init(val);
	},
	refreshToken() {
		this.value?.refreshToken();
	},
	logout() {
		this.value?.logout();
	}
});
