<script>
	import './styles.css';
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}

	main {
		width: 100%;
		height: 100%;
	}
</style>
