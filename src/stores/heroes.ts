import { writable } from 'svelte/store';

const _generateRandomConsonants = () => {
	const consonants = [
		'B',
		'C',
		'D',
		'F',
		'G',
		'H',
		'J',
		'K',
		'L',
		'M',
		'N',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'V',
		'W',
		'X',
		'Y',
		'Z'
	];

	const getRandomIndex = () => Math.floor(Math.random() * consonants.length);

	const i = getRandomIndex();
	const firstConsonant = consonants[i];
	consonants.splice(i, 1);

	const secondConsonant = consonants[getRandomIndex()];

	return [firstConsonant, secondConsonant];
};

type Hero = {
	letters: string[];
	char: string;
	weapon: string;
};

const defaultHero = {
	letters: [],
	char: '',
	weapon: ''
};

function createHero() {
	const { subscribe, update } = writable<Hero>({
		...defaultHero
	});

	return {
		subscribe,
		setLetters: () => update((r) => ({ ...r, letters: _generateRandomConsonants() })),
		setChar: (char: string) => update((r) => ({ ...r, char })),
		setWeapon: (weapon: string) => update((r) => ({ ...r, weapon })),
		reset: () => update(() => ({ ...defaultHero }))
	};
}

export const rohindar = createHero();
export const malmedock = createHero();
