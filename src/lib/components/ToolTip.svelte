<script>
    export let label = "";
    let leftPos = 0;
    function handleMouseEnter (e) {
        const { clientWidth } = e.target;
        leftPos = -clientWidth-10;
        console.log(leftPos); 
    }
</script>

<div class="relative w-fit group">
    <slot/>
    <span class="absolute -bottom-10 left-[-80px] hidden group-hover:flex w-[200px] justify-center ">
        <span class="text-white bg-opacity-40 bg-slate-500 backdrop-blur rounded p-1  text-center ">
            {label}
        </span>
    </span>
</div>