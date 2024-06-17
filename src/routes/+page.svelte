<script lang="ts">
	import Akcharam from '$lib/akcharam/akcharam';
	import Adhi from '$lib/akcharam/thalams/adhi';
	import KandaChapu from '$lib/akcharam/thalams/kandaChapu';
	import MisraChapu from '$lib/akcharam/thalams/misraChapu';
	import Roopaga from '$lib/akcharam/thalams/roopaga';
	import type { Thalam } from '$lib/akcharam/thalams/thalam';
	import Modal from '$lib/Modal.svelte';
	import Help from './Help.svelte';

	let modal: Modal;

	let result = '';
	let song: string;
	let example = `Thaam . . Ta Tha Ka Dhi Na

Tha- -an- -gu
Dhe- -en- -gu
Tha- -an- -gu
Ta Tha Ka Dhi Na

Tha an gu
Dhe en gu
Tha an gu
Ta Tha Ka Dhi Na

Thangu . .
Dheengu . . 
Thaangu . .
Ta Tha Ka Dhi Na Thaam .
Ta Tha Ka Dhi Na Tha- -am
Ta Tha Ka Dhi Na

Tha`;
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

<svelte:head>
  <title>Konnakol Akcharam Highlighter</title>
  <meta name="description" content="Utilize the Konnakol Akcharam Highlighter to visualize hand strikes on solkattus accurately. This interactive tool helps in composing and highlighting rhythmic patterns according to various thalams and gathis, enhancing your understanding of Indian percussion. Developed by Arthur Aslanyan." />
</svelte:head>

<Modal bind:this={modal}><Help /></Modal>

<section class="section">
	<div class="container">
		<h1 class="title is-1">Konnakol Akcharam Highlighter</h1>
		<div class="field is-hidden-tablet">
			<div class="control">
				<button class="button is-warning" on:click={() => modal.open()}>How to use it?</button>
			</div>
		</div>
		<div class="columns">
			<div class="column">
				<article class="message is-warning">
					<div class="message-header">
						<p>
							<span class="icon-text">
								<span class="icon">
									<i class="fas fa-regular fa-face-smile" />
								</span>
								<span>Find it useful?</span>
							</span>
						</p>
					</div>
					<div class="message-body">
						Consider <a
							target="_blank"
							rel="noreferrer"
							href="https://www.buymeacoffee.com/asahnoln"
							>buying me
							<span class="icon-text"
								><span class="icon"><i class="fas fa-regular fa-credit-card" /></span><span
									>a coffee</span
								></span
							>.
						</a>
					</div>
				</article>

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
					<label class="label" for="song">Composition (1 non-spaced word = 1 matra)</label>
					<div class="field">
						<div class="control">
							<button class="button is-warning is-small" on:click={() => (song = example)}>
								<span class="icon">
									<i class="fas fa-pencil" />
								</span>
								<span>Fill in an example</span></button
							>
							<button class="button is-danger is-small" on:click={() => (song = '')}>
								<span class="icon">
									<i class="fas fa-trash" />
								</span>
								<span>Clear</span>
							</button>
						</div>
					</div>

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
						<button class="button is-success" on:click={highlight}>
							<span class="icon">
								<i class="fas fa-marker" />
							</span>
							<span>Highlight Akcharams</span></button
						>
					</div>
				</div>

				<pre class="result">
{@html result}</pre>
			</div>
			<div class="column is-hidden-mobile">
				<h2 class="title is-2">How to use it</h2>
				<Help />
			</div>
		</div>
	</div>
</section>

<footer class="footer">
	<div class="container">
		<div class="content has-text-centered">
			<p>
				<strong>Konnakol Akcharam Highlighter</strong> by
				<a href="mailto:arthur.e.aslanyan@gmail.com">Arthur Aslanyan</a>. The source code is
				licensed
				<a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is
				licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
			</p>
			<p>
				Available on <a
					target="_blank"
					rel="noreferrer"
					href="https://github.com/asahnoln/konnakol"
				>
					<span class="icon-text">
						<span class="icon">
							<i class="fas fa-brands fa-github-alt" />
						</span>
						<span>GitHub</span>
					</span></a
				>.
			</p>
			<p>
				If you like it, consider <a
					target="_blank"
					rel="noreferrer"
					href="https://www.buymeacoffee.com/asahnoln"
					>buying me
					<span class="icon-text"
						><span class="icon"><i class="fas fa-regular fa-credit-card" /></span><span
							>a coffee</span
						></span
					>.
				</a>
			</p>
			<p>
				<a rel="me" href="https://mastodon.social/@asahnoln">
					<span class="icon-text">
						<span class="icon">
							<i class="fas fa-brands fa-mastodon" />
						</span>
						<span>Mastodon</span>
					</span>
				</a>
			</p>
		</div>
	</div>
</footer>
