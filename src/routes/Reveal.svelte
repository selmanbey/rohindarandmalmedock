<script lang="ts">
	import { act } from '../stores/acts';
	import { malmedock, rohindar } from '../stores/heroes';
	import { scene } from '../stores/scene';

	let sceneInput = '';
	let rohindarInput = {
		char: '',
		weapon: ''
	};
	let malmedockInput = {
		char: '',
		weapon: ''
	};
</script>

<section>
	<div class="intro">
		<div>
			<h1>ACT TWO: THE REVEAL</h1>
			<em>
				Finally, some answers. In this act, we'll reveal the story. Slowly, but steadily.
				<br />
				First, scenemaker will set the scene and will tell us about the conflict. The players, then,
				can ask questions to further clarify the conflict.
				<br />
				Once it's clear why they are fighting about, we'll unveil the curtain on who they are.
			</em>
		</div>
		<div class="intro-right">
			<button
				on:click={() => {
					$scene = sceneInput;
					rohindar.setChar(rohindarInput.char);
					rohindar.setWeapon(rohindarInput.weapon);
					malmedock.setChar(malmedockInput.char);
					malmedock.setWeapon(malmedockInput.weapon);
					act.set('DISCUSSION')
				}}
			>
				>
			</button>
		</div>
	</div>
	<div class="card">
		<ul>
			<li><span>Step 1:</span> Scenemaker! Do set us the stage of the conflict.</li>
			<li>
				<span>Step 2:</span> Anything unclear? Here's the time to clarify things. Feel free to ask the
				Scenemaker.
			</li>
			<li><span>Step 3:</span> First advocate! Unveil the identity of Rohindar and their weapon</li>

			<li>
				<span>Step 4:</span> Second advocate! Unveil the identity of Malmedock and their weapon
			</li>
			<li><span>Step 5:</span> Observers! Tell us your guesses. Did you get any?</li>
		</ul>
	</div>

	<h2>Revelations:</h2>
	<em>Note your revelations so that you can remember them in the next act.</em>

	<div class="notes">
		<div>
			<label for="scene-input">Scene:</label>
			<textarea id="scene-input" rows="5" cols="50" bind:value={sceneInput} />
		</div>

		<div>
			<label for="rohindar-char">Rohindar's character:</label>
			<input id="rohindar-char" type="text" bind:value={rohindarInput.char} />

			<label for="rohindar-weapon">and weapon:</label>
			<input id="rohindar-weapon" type="text" bind:value={rohindarInput.weapon} />
		</div>

		<div>
			<label for="malmedock-char">Malmedock's character:</label>
			<input id="malmedock-char" type="text" bind:value={malmedockInput.char} />

			<label for="malmedock-weapon">and weapon:</label>
			<input id="malmedock-weapon" type="text" bind:value={malmedockInput.weapon} />
		</div>
	</div>
</section>

<style>
	section {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		gap: 1rem;
	}

	.intro {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	.intro button {
		height: 5rem;
	}

	.card {
		border: 1px solid black;
		border-radius: 10px;
		padding: 1rem;
		width: 100%;
	}

	.card ul li {
		line-height: 2rem;
	}

	.card ul li span {
		font-weight: bold;
	}

	.notes {
		display: flex;
		width: 60%;
		min-width: 400px;
		flex-direction: column;
		gap: 1rem;
	}

	.notes > div {
		flex: 1;
		display: flex;
		align-items: flex-start;
		gap: 0.5rem;
	}

	textarea,
	input {
		line-height: 1;
		width: 100%;
	}
</style>
