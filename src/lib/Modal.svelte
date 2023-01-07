<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	let isActive = false;
	export function open() {
		isActive = true;
	}

	export function close() {
		isActive = false;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key == 'Escape') {
			close();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />
{#if isActive}
	<div class="modal is-active">
		<div class="modal-background" transition:fade on:click={close} />
		<div class="modal-card" in:fly={{ y: 200, duration: 200 }} out:fade>
			<header class="modal-card-head">
				<p class="modal-card-title">How to use it</p>
				<button class="delete" aria-label="close" on:click={close} />
			</header>
			<section class="modal-card-body">
				<slot />
			</section>
			<footer class="modal-card-foot" />
		</div>
	</div>
{/if}
