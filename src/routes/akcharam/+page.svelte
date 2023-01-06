<script lang="ts">
	import Akcharam from "$lib/akcharam/akcharam";
	import Adhi from "$lib/akcharam/thalams/adhi";


	const a = new Akcharam();
	const at = new Adhi();

	const result = '<em>Tha<sup>1</sup></em> Dhi Dhom Nam';
</script>

<textarea placeholder="Konnakol composition"></textarea>
<button>Highlight</button>

<div class="result">
	{@html result}
</div>
