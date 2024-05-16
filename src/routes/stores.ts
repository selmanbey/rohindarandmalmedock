import { writable } from 'svelte/store';

type GameStage = 'NOT_STARTED' | 'SELECTION';

export const gameStage = writable<GameStage>('NOT_STARTED');

export const showGameplay = writable(false);
