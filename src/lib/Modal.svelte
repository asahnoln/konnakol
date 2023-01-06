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
			<div class="content">
				<p>
					Your composition must be written in such a way, so that each non-spaced word would
					represent one matra.
				</p>
				<p>
					For example, let's see a composition written in Adhi Thalam, where we say only one sol per
					akcharam:
				</p>
				<pre>Tha . . . 
Dhi . . . 
Dhom . . . 
Nam . . .</pre>
				<p>Two evenly spaced sols (2-matra sols):</p>
				<pre>Tha . Tha . 
Dhi . Dhi . 
Dhom . Dhom . 
Nam . Nam .</pre>
				<p>All 4 matras taken in each akcharam:</p>
				<pre>Tha Tha Tha Tha 
Dhi Dhi Dhi Dhi 
Dhom Dhom Dhom Dhom 
Nam Nam Nam Nam</pre>
				<p>
					Let's see how we should write famous <code>ThaKaThaRiKiTaThaKa</code> so it takes 4 matras
					as well:
				</p>
				<pre>ThaKa ThaRi KiTa ThaKa</pre>
				<p>So, basically, each word is one matra, matras are separated by space.</p>
			</div>
		</section>
		<footer class="modal-card-foot" />
	</div>
</div>
