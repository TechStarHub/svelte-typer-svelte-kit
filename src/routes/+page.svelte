
<script>
    import Editor from '$lib/components/Editor.svelte';
    export let data
    console.log(data);
</script>

<svelte:head>
	<title>Home | Svelte Typer</title>
</svelte:head>


<Editor data={data} />
