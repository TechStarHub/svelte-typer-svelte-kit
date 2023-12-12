
<script>
    import Icon from "@iconify/svelte";
</script>

<svelte:head>
	<title>Home | Svelte Typer</title>
</svelte:head>


<div class="flex flex-col items-center justify-center h-[70vh] p-6">
    <img src="/svelte.svg" width="100" alt="svelte icon">
    <h1 class="text-4xl text-center my-4 font-bold text-gray-800">
        Svelte Typer
    </h1>
    <p class="text-gray-600 text-2xl text-center">
        A simple typing practice app built with Svelte.
    </p>
    <p class="text-sm text-slate-700 py-2 w-full sm:w-[70vw] md:w-[50vw] text-center">
        This is an Open Source project by <span class="font-bold italic">TechStarHub</span>. We are a group of developers who love to build cool stuffs with code. Our purpose is to help beginners developers to learn open source by providing them with simple projects to contribute to.
    </p>
    <div class="flex justify-center gap-2 mt-4">
        <a href="/typer" class="bg-[#83A2FF] hover:bg-[#7598ff] text-white px-4 py-2 text-xl rounded-md shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2">
            <Icon icon="mdi:keyboard" class="w-6 h-6" />
            <span class="">
                Start Typing
            </span>
        </a>
    </div>
</div>
