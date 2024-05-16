<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let timeLeft = 180; // Initial time in seconds (3 minutes)
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

	function formatTime(seconds: number) {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
	}
</script>

<div>
	{formatTime(timeLeft)}
</div>

<style>
	div {
		padding: 1rem;
		font-size: 3rem;
		color: var(--color-theme-1);
	}
</style>
