<script>
	import Landing from './Landing.svelte';
	import Stage from './Stage.svelte';
	import { act } from '../stores/acts';
	import Reveal from './Reveal.svelte';
	import Discussion from './Discussion.svelte';
	import Overture from './Overture.svelte';
	import Epilogue from './Epilogue.svelte';
</script>

<svelte:head>
	<title>Rohindar and Malmedock</title>
</svelte:head>

{#if $act === 'OVERTURE'}
	<Overture />
{:else if $act === 'STAGE'}
	<Stage />
{:else if $act === 'REVEAL'}
	<Reveal />
{:else if $act === 'DISCUSSION'}
	<Discussion />
{:else if $act === 'EPILOGUE'}
	<Epilogue />
{:else}
	<Landing />
{/if}
