<script>
	import { act } from '../stores/acts';
	import { rohindar, malmedock } from '../stores/heroes';
	import { scene } from '../stores/scene';
</script>

<section>
	<div class="intro">
		<div>
			<h1>THE EPILOGUE</h1>
			<em>
				Voting time! Let's decide who wins and who loses. Each vote counts as one. Only in case of a
				tie, the scenemaker's vote counts as two.
				<br />
				Once the winner is decided, we count the scores:
				<br />
				<ul>
					<li>Scenemaker gets none.</li>
					<li>
						The Advocate for the winning character gets 3 points. Advocates also gets extra points
						for creativity if they manage to avoid Observers' guesses (1 for character, 1 for
						weapon).
					</li>
					<li>
						Observers also get extra points for their acumen if they manage to correctly guess
						Debater's choices (1 point for each correct guess)
					</li>
				</ul>
			</em>
		</div>
		<div class="intro-right">
			<button on:click={() => act.set('OVERTURE')}> > </button>
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
		gap: 2rem;
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
</style>
