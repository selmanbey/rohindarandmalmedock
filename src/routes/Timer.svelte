<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	export let startFrom: number = 180;

	let timeLeft = startFrom; // Initial time in seconds (3 minutes)
	let timerInterval: number;

	const startTimer = () => {
		timerInterval = setInterval(() => {
			if (timeLeft > 0) {
				timeLeft--;
			} else {
				clearInterval(timerInterval);
			}
		}, 1000);
	};

	const stopTimer = () => clearInterval(timerInterval);

	onMount(() => {
		startTimer();
	});

	onDestroy(() => {
		stopTimer();
	});

	function restartTimer() {
		timeLeft = startFrom;
	}

	function formatTime(seconds: number) {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
	}
</script>

<button on:click={restartTimer}>
	{formatTime(timeLeft)}
</button>

<style>
	button {
		padding: 1rem 3rem;
		font-size: 2rem;
	}
</style>
