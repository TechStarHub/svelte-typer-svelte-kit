<script>
    import NavLikn from "./NavLikn.svelte";
</script>

<nav class=" font-sans hidden sm:block">
    <ul class="flex gap-4">
        <NavLikn fillIcon="ri:home-fill" lineIcon="ri:home-line" link="/" label="Home" />
        <NavLikn fillIcon="material-symbols:keyboard" lineIcon="material-symbols:keyboard-outline" link="/typer" label="Typer" />
        <NavLikn fillIcon="material-symbols:info" lineIcon="material-symbols:info-outline" link="/about" label="About" />
    </ul>
</nav>