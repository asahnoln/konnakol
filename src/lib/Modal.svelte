<script lang="ts">
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
<div class="modal" class:is-active={isActive}>
	<div class="modal-background" />
	<div class="modal-card">
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
