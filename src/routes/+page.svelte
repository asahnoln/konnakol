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

<section class="section">
	<div class="container">
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
				<button class="button" on:click={highlight}>Highlight Akcharams</button>
			</div>
		</div>

		<div class="result">
			{@html result}
		</div>
	</div>
</section>
