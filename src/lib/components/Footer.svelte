<script>
    import Icon from "@iconify/svelte"
</script>

<footer class="w-full px-6 py-2 mt-8  ">
    <div class="flex justify-between items-center">
        <div class="">
            <a href="/" class="flex items-center gap-1">
                <img src="/svelte.svg" class="svelte-logo" alt="">
                <h1 class="text-2xl font-bold text-gray-800">
                    Typer
                </h1>
            </a>
            <p class="text-slate-700 text-sm mt-2">Copyright 2023 © TechStarHub </p>
        </div>
        <div class="hidden sm:block">
            <h4 class="flex items-center gap-1 text-xl font-medium text-slate-600">
                Made with Svelte 
                <img src="/svelte.svg" class="svelte-logo" alt="">
            </h4>
        </div>
        <div class="hidden sm:flex flex-col items-center">
            <h4 class="text- font-medium text-slate-600">View us on GitHub</h4>
            <a href="https://github.com/TechStarHub" class="">
                <Icon icon="mdi:github" class="w-10 h-10 text-slate-900" />
            </a>
        </div>
    </div>
    <hr class="my-2 border border-slate-500"/>
    <div class="flex gap-3 flex-col sm:flex-row items-center justify-between my-4">
        <div class="flex items-center gap-2">
            <Icon icon="mdi:github" class="w-6 h-6 text-slate-900" />
            <a href="https://github.com/TechStarHub/svelte-typer" class="flex items-center ">
                <span class="text-sm font-medium ml-[1px]">Code</span>
            </a>
            <a href="https://github.com/TechStarHub/svelte-typer/issues" class="text-sm font-medium  ">Issues</a>
            <a href="https://github.com/TechStarHub/svelte-typer/License" class="text-sm font-medium  ">License</a>
            <a href="https://app.netlify.com/sites/svelte-typer/deploys" class="text-sm font-medium">
                <img src="https://api.netlify.com/api/v1/badges/905f0774-edc8-492e-97e0-98b2cf858ce3/deploy-status" alt="" class="">
            </a>
        </div>
        <p class="text-sm text-slate-600 w-full sm:w-1/2">
            TechStarHub is a community of developers and designers who are passionate about building and creating amazing things with code.
        </p>
    </div>
</footer>

<style>
    .svelte-logo:hover {
        filter: drop-shadow(0px 0px 7px #EC8F5E);
    }
</style>