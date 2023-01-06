<script lang="ts">
	import Akcharam from '$lib/akcharam/akcharam';
	import Adhi from '$lib/akcharam/thalams/adhi';

	let result = '';
	let song: string;

	const a = new Akcharam();
	const at = new Adhi();

	function highlight() {
		result = a.hlHtml(song, at).replaceAll('\n', '<br>');
	}
</script>

<textarea placeholder="Konnakol composition" bind:value={song} />
<button on:click={highlight}>Highlight</button>

<div class="result">
	{@html result}
</div>
