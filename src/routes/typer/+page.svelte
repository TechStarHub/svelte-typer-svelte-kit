
<script>
    import Editor from '$lib/components/Editor.svelte';
    export let data
</script>

<svelte:head>
	<title>Typer | Svelte Typer</title>
</svelte:head>


<Editor data={data} />
