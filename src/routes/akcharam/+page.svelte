<script lang="ts">
	import Akcharam from '$lib/akcharam/akcharam';
	import Adhi from '$lib/akcharam/thalams/adhi';
	import KandaChapu from '$lib/akcharam/thalams/kandaChapu';
	import MisraChapu from '$lib/akcharam/thalams/misraChapu';
	import Roopaga from '$lib/akcharam/thalams/roopaga';
	import type { Thalam } from '$lib/akcharam/thalams/thalam';

	let result = '';
	let song: string;
	let thalam: Thalam;
	let gathi: number;

	const thalams = [
		{ value: new Adhi(), name: 'Adhi' },
		{ value: new Roopaga(), name: 'Roopaga' },
		{ value: new MisraChapu(), name: 'Misra Chapu' },
		{ value: new KandaChapu(), name: 'Kanda Chapu' }
	];
	const gathis = [
		{ value: 4, name: 'Chatusra' },
		{ value: 6, name: 'Tisram' }
	];

	const a = new Akcharam();
	function highlight() {
		thalam.g = gathi;
		result = a.hlHtml(song, thalam).replaceAll('\n', '<br>');
	}
</script>

<select bind:value={thalam} placeholder="Thalam">
	{#each thalams as { value, name }}
		<option {value}>{name}</option>
	{/each}
</select>
<select bind:value={gathi} placeholder="Gathi">
	{#each gathis as { value, name }}
		<option {value}>{name}</option>
	{/each}
</select>
<textarea placeholder="Konnakol composition" bind:value={song} />
<button on:click={highlight}>Highlight</button>

<div class="result">
	{@html result}
</div>
