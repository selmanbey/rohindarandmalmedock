<script>
	import Timer from './Timer.svelte';

	const generateRandomConsonants = () => {
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

	const rohindarLetters = generateRandomConsonants();
	const malmedockLetters = generateRandomConsonants();
</script>

<section>
	<h1>SELECTION</h1>

	<div class="card scenemaker">
		<h2>Scenemaker:</h2>
		<p>
			Decide the following. In the next stage, you'll be asked to set up a scene and tell us all
			about what's the conflict between Rohindar and Malmedock.
		</p>
		<ul>
			<li>The place (optional to specify. defaults to scenemaker's city.)</li>
			<li>The time (optional to specify. defaults to today)</li>
			<li>The conflict</li>
			<li>The win condition</li>
		</ul>

		<em>
			* Try to assume as little as possible about Rohindar and Malmedock <br />
			* A conflict can be anything (ranging from a bet to a deadmatch) as long as there is a clear win
			/ lose situation
		</em>
	</div>

	<div class="debaters">
		<div class="card debater">
			<h2>Debater 1:</h2>
			<p>Choose a character and a weapon / equipment</p>
			<p>Both of your choices has to include the following two letters:</p>
			<h3>{rohindarLetters.join(', ')}</h3>
			<p>Rohindar is a ___________ with a ___________</p>

			<em>
				* Don't add adjectives to your character / weapon ("tiger" is okay, "giant tiger" is not)
			</em>
		</div>

		<div class="card debater">
			<h2>Debater 2:</h2>
			<p>Choose a character and a weapon / equipment</p>
			<p>Both of your choices has to include the following two letters:</p>
			<h3>{malmedockLetters.join(', ')}</h3>
			<p>Malmedock is a ___________ with a ___________</p>

			<em>
				* Don't add adjectives to your character / weapon ("tiger" is okay, "giant tiger" is not)
			</em>
		</div>
	</div>

	<div class="card observer">
		<h2>Observers:</h2>
		<p>Debater 1's character guess: ___________ [{rohindarLetters.join(', ')}]</p>
		<p>Debater 1's weapon guess: ___________ [{rohindarLetters.join(', ')}]</p>
		<p>Debater 2's character guess: ___________ [{malmedockLetters.join(', ')}]</p>
		<p>Debater 2's weapon guess: ___________ [{malmedockLetters.join(', ')}]</p>
	</div>

	<div><Timer /></div>
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

	h1 {
		margin: 1rem auto;
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

	.card {
		border: 1px solid black;
		border-radius: 10px;
		padding: 1rem;
		width: 100%;
	}
</style>
