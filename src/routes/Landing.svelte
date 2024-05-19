<script>
	import Gameplay from './Gameplay.svelte';
	import { act } from '../stores/acts';
	import { showHowToPlay } from '../stores/toggles';
</script>

<section>
	<h1 class="title">Rohindar & Malmedock</h1>

	<p>Who is Rohindar? What's his beef with Malmedock?</p>

	<div class="how-to">
		<button on:click={() => ($showHowToPlay = true)}>How To Play</button>
	</div>

	<button class="start-button" on:click={() => act.set('OVERTURE')}>Start</button>

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
		padding: 1rem;
	}

	.title {
		font-family: 'Josefin Slab', serif;
		font-size: 6rem;
		margin: 1rem;
		text-align: center;
	}

	p {
		text-align: center;
	}

	.how-to {
		position: absolute;
		top: 1rem;
		right: 1rem;
	}

	.how-to button {
		border: none;
	}

	.start-button {
		padding: 1rem 2rem;
		margin-top: 3rem;
	}

	@media screen and (max-width: 600px) {
		.title {
			font-size: 4rem;
		}
	}
</style>
