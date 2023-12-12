<script>
	import './styles.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Icon from '@iconify/svelte';

	let warning = true;

	function handleClose() {
		warning = false;
	}
</script>

<svelte:head>
	<title>Svelte Typer</title>
	<meta name="description" content="A simple typing test app built with Svelte.">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta property="og:title" content="Svelte Typer">
	<meta property="og:description" content="A simple typing test app built with Svelte.">
	<link rel="shortcut icon" href="/svelte.svg" type="image/x-icon">
</svelte:head>

<main class="w-full min-h-screen flex flex-col justify-between items-center bg-[#9EB8D9] ">
    <Header />
	<span class="w-full md:hidden flex items-center justify-between px-4 py-2 mb-4 bg-sky-300 border border-sky-400 text-slate-700" style={`display:${warning?'':'none'}`}>
		We recommend you to use a desktop or laptop for a better experience.
		<button on:click={handleClose}>
			<Icon icon="material-symbols:close" class="w-8 h-8 " />
		</button>
	</span>
    <slot/>
    <Footer />
</main>