import { writable } from 'svelte/store';

export type Guess = {
	observer: string,
	chars: string[];
	weapons: string[];
};

const createGuesses = () => {
	const { subscribe, update } = writable<Guess[]>([]);

	return {
		subscribe,
		add: (guess: Guess) => update((g) => [...g, guess]),
		set: (guesses: Guess[]) => update(() => guesses),
		reset: () => update(() => [])
	};
};

export const observerGuesses = createGuesses();
