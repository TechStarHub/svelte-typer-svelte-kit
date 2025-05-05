<script>
    import NavLikn from "./NavLikn.svelte";
    import Icon from "@iconify/svelte";
    let isOpen = false;

    function toggleOpen() {
        isOpen = !isOpen;
    }

</script>

<div class="flex justify-center items-center relative sm:hidden">
    <button on:click={toggleOpen} class="">
        <Icon icon={`${isOpen? 'material-symbols:close' : 'material-symbols:menu'}`} class="w-8 h-8" />
    </button>
    <nav class={` ${!isOpen? 'hidden' : ''} w-screen p-4 absolute top-10 -left-6 font-sans  bg-white z-50`}>
        <ul class="flex flex-col items-center gap-4 ">
            <NavLikn fillIcon="ri:home-fill" lineIcon="ri:home-line" link="/" label="Home" />
            <NavLikn fillIcon="material-symbols:keyboard" lineIcon="material-symbols:keyboard-outline" link="/typer" label="Typer" />
            <NavLikn fillIcon="material-symbols:info" lineIcon="material-symbols:info-outline" link="/about" label="About" />
        </ul>
    </nav>
</div>