import { writable } from 'svelte/store';

type Act = null | 'OVERTURE' | 'STAGE' | 'REVEAL' | 'DISCUSSION' | 'EPILOGUE';

const createAct = () => {
	const { subscribe, set, update } = writable<Act>(null);

	return {
		subscribe,
		set,
		reset: () => set(null)
	};
};

export const act = createAct();
