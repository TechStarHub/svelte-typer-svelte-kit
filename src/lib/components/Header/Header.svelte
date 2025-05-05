<script>
    import NavBar from "./NavBar.svelte";
    import SmNavBar from "./SmNavBar.svelte";
    import Brandlogo from "../Brandlogo.svelte";
</script>

<header class="w-full px-6 py-4 mb-8 flex gap-3 sm:justify-between items-center " >
    <SmNavBar />
    <a href="/" class="">
        <Brandlogo />
    </a>
    <NavBar />
</header>
