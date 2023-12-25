<script>
    import Icon from "@iconify/svelte"
</script>

<div class="flex items-center gap-2 brand-logo relative group">
    <img src="/svelte.svg" class="svelte-logo " alt="">
    <h1 class="text-2xl font-bold text-gray-800  ">
        Typer
    </h1>
    <Icon icon="eos-icons:typing" class="w-6 h-6 absolute -top-2 -right-7 text-gray-800 scale-0 group-hover:scale-100 transition-all duration-200  " />
</div>

<style>
    .brand-logo:hover .svelte-logo {
        filter: drop-shadow(0px 0px 7px #EC8F5E);
    }
</style>