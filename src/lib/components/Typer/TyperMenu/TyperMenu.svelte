<script>
    import Icon from "@iconify/svelte";
    import TyperMenuItem from "./TyperMenuItem.svelte";
</script>


<div class=" p-4 rounded w-[90vw] sm:w-[80vw] md:w-[60vw] ">
    <ul class="flex flex-col gap-2">
        <TyperMenuItem>
            <a href="typer/paragraph" class="w-full flex items-center justify-center gap-3">
                <Icon icon="icon-park:paragraph-alphabet" class="w-8 h-8" />
                <span class="text-gray-800 text-xl font-semibold ">Paragraph</span>
            </a>
        </TyperMenuItem>
        <TyperMenuItem>
            <a href="typer/words" class="w-full flex items-center justify-center gap-3">
                <Icon icon="lucide:whole-word" class="w-8 h-8" />
                <span class="text-gray-800 text-xl font-semibold">Word</span>
            </a>
        </TyperMenuItem>   
        <TyperMenuItem>
            <a href="typer/code" class="w-full flex items-center justify-center gap-3">
                <Icon icon="ant-design:code-outlined" class="w-8 h-8 group-hover:scale-0 transition-all duration-300" />
                <span class="text-gray-800 text-xl font-semibold">Code</span>
                <Icon icon="ant-design:code-filled" class="w-8 h-8 group-hover:scale-100 transition-all duration-300 scale-0" />
            </a>
        </TyperMenuItem>
        <TyperMenuItem>
            <a href="typer/game" class="w-full flex items-center justify-center gap-3">
                <Icon icon="mingcute:game-2-line" class="w-8 h-8 text-slate-800 group-hover:scale-0 transition-all duration-300" />
                <span class="text-gray-800 text-xl font-semibold">Game</span>
                <Icon icon="mingcute:game-2-fill" class="w-8 h-8 text-slate-800 group-hover:scale-100 transition-all duration-300 scale-0  " />
            </a>
        </TyperMenuItem>
    </ul>
</div>

