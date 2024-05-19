import { writable } from 'svelte/store';

const createRound = () => {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		next: () => update((r) => r++),
		reset: () => set(0)
	};
};

export const round = createRound();
