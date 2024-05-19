<script>
	import { act } from '../stores/acts';
	import { rohindar, malmedock } from '../stores/heroes';
	import { scene } from '../stores/scene';
</script>

<section>
	<div class="intro">
		<div>
			<h1>ACT THREE: THE DISCUSSION</h1>
			<em>
				Now you know about Rohindar, Malmedock and their conflict, it's time for a healthy
				discussion.
				<br />
				In this act, we'll ponder about who'd win and why?
				<br />
				You can take as short or long as you like to discuss. The act will end when the Scenemaker decides
				it's time to vote.
			</em>
		</div>
		<div class="intro-right">
			<button on:click={() => act.set('EPILOGUE')}> > </button>
		</div>
	</div>

	<div class="notes">
		<h2>Reminders:</h2>
		<div class="input-previews card">
			<pre>Rohindar is a {$rohindar.char || '________'} with a {$rohindar.weapon ||
					'________'}</pre>
			<pre>Malmedock is a {$malmedock.char || '________'} with a {$malmedock.weapon ||
					'________'}</pre>

			<span>And the scene is:</span>
			<pre>{$scene}</pre>
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
