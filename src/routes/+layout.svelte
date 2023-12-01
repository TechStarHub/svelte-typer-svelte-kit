<script>
	import './styles.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
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
    <slot/>
    <Footer />
</main>