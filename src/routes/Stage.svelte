<script lang="ts">
	import Timer from './Timer.svelte';
	import { act } from '../stores/acts';

	import { rohindar, malmedock } from '../stores/heroes';
	rohindar.setLetters();
	malmedock.setLetters();
</script>

<section>
	<div class="intro">
		<div>
			<h1>ACT ONE: THE STAGE</h1>
			<em>
				Rohindar and Malmedock is in a pickle. But who are they? Why are they at odds with each
				other? What's the story here?
				<br />
				In this first act, we're going to answer these questions ⎼in secret.
				<br />
				So, players, find your roles below and follow your instructions.
			</em>
		</div>
		<div class="intro-right">
			<Timer />
			<button on:click={() => act.set('REVEAL')}> > </button>
		</div>
	</div>
	<div class="card scenemaker">
		<h2>Scenemaker:</h2>
		<p>
			You're the person who gets to tell what's the clash between Rohindar and Malmedock. What's the
			conflict? The rivalry, the battle, the face-off, the challenge, the match... Write a scene in
			your mind that describes the following:
		</p>
		<ul>
			<li>The contest: a situation where one can win and the other lose</li>
			<li>The win condition (optional. if it's not already clear)</li>
			<li>The place (optional. if it helps to enrich the scene.)</li>
			<li>The time (optional. if it helps to enrich the scene.)</li>
		</ul>

		<em>
			* Try to assume, however, as little as possible about Rohindar and Malmedock. They can be
			anyone... or anything.
		</em>
	</div>

	<div class="debaters">
		<div class="card debater">
			<h2>First Advocate:</h2>
			<p>Who (or what) is Rohindar? You get to answer it.</p>
			<p>
				Fill in the gaps in the following sentence by choosing, (1) a character, and (2) a weapon /
				equipment
			</p>
			<p>Both of your choices has to include the following two letters:</p>
			<br />
			<h3>{$rohindar.letters.join(', ')}</h3>
			<br />
			<p>Rohindar is a ___________ with a ___________</p>
		</div>

		<div class="card debater">
			<h2>Second Advocate:</h2>
			<p>It's your task to decide who (or what) Malmedock is.</p>
			<p>
				Fill in the gaps in the following sentence by choosing, (1) a character, and (2) a weapon /
				equipment
			</p>
			<p>Both of your choices has to include the following two letters:</p>
			<br />
			<h3>{$malmedock.letters.join(', ')}</h3>
			<br />
			<p>Malmedock is a ___________ with a ___________</p>
		</div>
	</div>

	<div class="card observer">
		<h2>Observers:</h2>
		<p>
			You get to watch the contest between Rohindar and Malmedock, and eventually decide who emerged
			as victorious. Who won?
		</p>
		<p>
			But before that, here is a chance to show your predictive skills. Try to guess the character
			and the weapon / equipment of each character. The hint here is the two letters. Each guess
			must include those letters in the guessed word.
		</p>

		<p>Rohindar is a ___________ with a ___________ [{$rohindar.letters.join(', ')}]</p>
		<p>Malmedock is a ___________ with a ___________ [{$malmedock.letters.join(', ')}]</p>
	</div>
</section>

<style>
	section {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		gap: 1rem;
	}

	.intro {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	.intro .intro-right {
		display: flex;
		gap: 1rem;
	}

	h2 {
		color: var(--color-theme-2);
	}

	.debaters {
		width: 100%;
		display: flex;
		justify-content: space-between;
		gap: 1rem;
	}

	.debaters h3 {
		margin: 0 auto;
		text-align: center;
	}

	.card {
		border: 1px solid black;
		border-radius: 10px;
		padding: 1rem;
		width: 100%;
	}
</style>
