<script>
	import { act } from '../stores/acts';
	import { round } from '../stores/rounds';
</script>

<section>
	<div class="intro">
		<div>
			<h1>THE OVERTURE (ROUND: {$round})</h1>
			{#if $round === 0}<em>
					The game will start in a minute! But let's make sure everyone gets a role.
					<br />
					It all starts with a Scenemaker. Choose one among you.
					<br />
					To the left of the scenemaster, we have our Advocates: The First Advocate and the Second Advocate.
					In that order.
					<br />
					The rest becomes Observers.
					<br />
					Everyone got their roles? Great! Let's start.
				</em>
			{:else}
				<em>
					Congratulations on a great round! Hope it was fun.
					<br />
					In each round, we move the roles one to the left.
					<br />
					That is to say, the old First Advocate becomes the new Scenemaster. And the old Second Advocate
					becomes the new First Advocate, And the old First Observer becomes the First Advocate, etc.
					etc.
					<br />
					Also, just a small thing to keep in mind: When you play as many rounds as the number of the
					players, you complete a circle. That is to say, everone gets to play every role. A completion
					of a circle is a natural finish line to the game. Whether you play just one circle or multiple
					ones is up to you.
					<br />
					All clear? Let's go for another round then.
				</em>
			{/if}
		</div>
		<div class="intro-right">
			<button on:click={() => act.set('STAGE')}> > </button>
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
		gap: 3rem;
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

	.card ul li span {
		font-weight: bold;
	}

	.notes {
		display: flex;
		flex-direction: column;
		width: 100%;
		justify-content: space-between;
		gap: 2rem;
	}

	.notes > div {
		flex: 1;
	}

	.notes .input-previews span {
		font-weight: bold;
	}
</style>
