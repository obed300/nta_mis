import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/Members'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class MembersStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "MembersStore",
			variables: false,
		})
	}
}

export async function load_Members(params) {
  await initClient()

	const store = new MembersStore()

	await store.fetch(params)

	return {
		Members: store,
	}
}
