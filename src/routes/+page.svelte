<script>
	import Intro from './Intro.svelte';
	import Selection from './Selection.svelte';
	import { gameStage } from './stores';
</script>

<svelte:head>
	<title>Rohindar and Malmedock</title>
</svelte:head>

{#if $gameStage === 'SELECTION'}
	<Selection />
{:else}
	<Intro />
{/if}
