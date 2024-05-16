<script lang="ts">
	import { showGameplay } from './stores';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	role="button"
	tabindex="0"
	class={$showGameplay ? 'gameplay show' : 'gameplay'}
	on:click={() => ($showGameplay = false)}
>
	R&M is a social game that requires at least 3 people to play, but ideally played with 5 or more.
	<br />
	<br />
	The game is played in rounds, and each round has specific stages: Selection, Scene, Debate, Voting.
	<br />
	<br />
	In each round, a person becomes the Scenemaker. The two people to the left of her become Debaters.
	Rest become Observers.
	<br />
	<br />
	When a round ends, all roles moves to left by one (Debater 1 becomes Scenemaker, Debater 2 becomes
	Debater 1 etc). The game ends at the end of a cycle. A cycle is when all rounds are played (everyone
	plays every role). It's up to the players how many circles they wanna play.

	<h2>Stages</h2>
	<h3>Selection (3 mins):</h3>
	<ul>
		<li>Debaters gets two random consonants (B, R)</li>
		<li>
			Debaters fills the gaps: Rohindar is a _bartender_ with a _boomerang_ (B, R) // Malmedock is a
			_possum_ with a _microscope_ (S, M)
		</li>
		<li>
			Failing to fill the char assigns a random week char _an average man with no particular skills
			or talent_
		</li>
		<li>Failing to fill the weapon causes with no weapons</li>
		<br />
		<li>Scene master sets the stage and the win condition (specify this further)</li>
		<li>The place (optional): _A beach in Singapore_ The time (optional): _today_</li>
		<li>
			The conflict: _R challenges M to a swim race to the nearest island which is about 500m away_
		</li>
		<li>The win condition: _Whoever reaches the island first wins_</li>
		<br />
		<li>
			Observers get all player letters and guesses what might players choose: Bradley Cooper /
			broomstick (BR), simulacrum / a bag of sumac (SM)
		</li>
	</ul>
	<h3>Scene:</h3>
	<ul>
		<li>The characters have not been revealed yet</li>
		<li>Scenemaster explains the scene and the win condition</li>
		<li>
			Both Debaters and Observers can ask additional questions if they want things to be clarified
		</li>
	</ul>
	Debate:
	<ul>
		<li>The characters are revealed</li>
		<li>
			Players discuss why their characters would emerge as the winner from this particular conflict
		</li>
	</ul>
	<h3>Voting:</h3>
	<ul>
		<li>
			Everyone votes on who they think would win. In case of a tie, scenemaster’s vote counts as
			double vote.
		</li>
		<li>The winner gets 3 points.</li>
		<li>
			Debaters get extra points for creativity if they manage to avoid Observers' guesses (1 for
			character, 1 for weapon)
		</li>
		<li>
			Observers get extra points for their acumen if they manage to correctly guess Debater's
			choices (1 point for each correct guess)
		</li>
	</ul>
</div>

<style>
	.gameplay {
		position: absolute;
		padding: 1rem;
		top: 0;
		right: -400px; /* Initially hidden on the right */
		width: 400px;
		height: 100%;
		transition: right 0.3s ease; /* Smooth transition for animation */
		background-color: white;
		border-left: 1px solid black;
		overflow: auto;
	}

	button {
		border: none;
		display: block;
	}

	.show {
		right: 0;
	}
</style>
