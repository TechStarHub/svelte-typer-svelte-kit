<script>
    import Icon from "@iconify/svelte";
    import { page } from "$app/stores";
    // props
    export let lineIcon="";
    export let fillIcon="";
    export let link="";
    export let label="";

    $: isActive = $page.url.pathname === link;
    // $: console.log($page.url.pathname);

</script>

<li class="text-md text-slate-800 hover:text-black transition-all duration-100 font-medium group">
    <a href={link} class={`flex items-center gap-1 group-hover:-translate-y-1 transition-all duration-300 `}>
        <Icon icon={isActive ? fillIcon : lineIcon} class={`w-6 h-6 ${isActive?'scale-125 ':''} `} />
        <span class="">
            {label}
        </span>    
    </a>
</li>