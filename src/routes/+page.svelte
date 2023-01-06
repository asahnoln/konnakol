<script lang="ts">
	import Akcharam from '$lib/akcharam/akcharam';
	import Adhi from '$lib/akcharam/thalams/adhi';
	import KandaChapu from '$lib/akcharam/thalams/kandaChapu';
	import MisraChapu from '$lib/akcharam/thalams/misraChapu';
	import Roopaga from '$lib/akcharam/thalams/roopaga';
	import type { Thalam } from '$lib/akcharam/thalams/thalam';
	import Modal from '$lib/Modal.svelte';

	let modal: Modal;

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
		result = a.hlHtml(song, thalam);
	}
</script>

<Modal bind:this={modal} />

<section class="section">
	<div class="container">
		<h1 class="title is-1">Konnakol Akcharam Highlighter</h1>
		<div class="field">
			<div class="control">
				<button class="button is-warning" on:click={() => modal.open()}>How to use it?</button>
			</div>
		</div>

		<div class="field">
			<label class="label" for="thalam">Thalam</label>
			<div class="control">
				<div class="select">
					<select id="thalam" bind:value={thalam} placeholder="Thalam">
						{#each thalams as { value, name }}
							<option {value}>{name}</option>
						{/each}
					</select>
				</div>
			</div>
		</div>
		<div class="field">
			<label class="label" for="gathi">Gathi</label>
			<div class="control">
				<div class="select">
					<select id="gathi" bind:value={gathi} placeholder="Gathi">
						{#each gathis as { value, name }}
							<option {value}>{name}</option>
						{/each}
					</select>
				</div>
			</div>
		</div>
		<div class="field">
			<label class="label" for="song">Composition</label>
			<div class="control">
				<textarea
					class="textarea"
					id="song"
					placeholder="Tha Dhi Dhom Nam . . ."
					bind:value={song}
				/>
			</div>
		</div>
		<div class="field">
			<div class="control">
				<button class="button is-success" on:click={highlight}>Highlight Akcharams</button>
			</div>
		</div>

		<pre class="result">
{@html result}</pre>
	</div>
</section>
