<script>
	import Gameplay from './Gameplay.svelte';
	import { gameStage, showGameplay } from './stores';
</script>

<section>
	<h1 class="title">Rohindar & Malmedock</h1>

	<p>Who is Rohindar? What's his beef with Malmedock?</p>

	<div class="how-to">
		<button on:click={() => ($showGameplay = true)}>How To Play</button>
	</div>

	<button class="start-button" on:click={() => ($gameStage = 'SELECTION')}>Start</button>

	<Gameplay />
</section>

<style>
	section {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.title {
		font-family: 'Josefin Slab', serif;
		font-size: 6rem;
		margin: 1rem;
	}

	.how-to {
		position: absolute;
		top: 1rem;
		right: 1rem;
	}

	.start-button {
		padding: 1rem 2rem;
		margin-top: 2rem;
	}

	.how-to button {
		border: none;
	}
</style>
