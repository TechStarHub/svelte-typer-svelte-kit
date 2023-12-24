<script>
    import Icon from "@iconify/svelte";
</script>


<div class=" p-4 rounded w-[90vw] sm:w-[80vw] md:w-[60vw] ">
    <ul class="flex flex-col gap-2">
        <li class="py-2 px-4 0 rounded bg-white hover:skew-x-12 hover:shadow-lg hover:scale-105 transition-all duration-200">
            <a href="/paragraph" class="w-full flex items-center justify-center gap-3">
                <Icon icon="icon-park:paragraph-alphabet" class="w-8 h-8" />
                <span class="text-gray-600 text-xl font-semibold ">Paragraph</span>
            </a>
        </li>
        <li class="py-2 px-4 hover:bg-gray-100 rounded bg-white hover:skew-x-12 hover:shadow-lg hover:scale-105 transition-all duration-200">
            <a href="/words" class="w-full flex items-center justify-center gap-3">
                <Icon icon="lucide:whole-word" class="w-8 h-8" />
                <span class="text-gray-600 text-xl font-semibold">Word</span>
            </a>
        </li>
        <li class="py-2 px-4 hover:bg-gray-100 rounded bg-white group hover:skew-x-12 hover:shadow-lg hover:scale-105 transition-all duration-200">
            <a href="/code" class="w-full flex items-center justify-center gap-3">
                <Icon icon="ant-design:code-outlined" class="w-8 h-8 group-hover:scale-0 transition-all duration-300" />
                <span class="text-gray-600 text-xl font-semibold">Code</span>
                <Icon icon="ant-design:code-filled" class="w-8 h-8 group-hover:scale-100 transition-all duration-300 scale-0" />
            </a>
        </li>
        <li class="py-2 px-4 hover:bg-gray-100 rounded bg-white group hover:skew-x-12 hover:shadow-lg hover:scale-105 transition-all duration-200">
            <a href="/game" class="w-full flex items-center justify-center gap-3">
                <span class="group-hover:scale-0 transition-all duration-300">
                    <Icon icon="mingcute:game-2-line" class="w-8 h-8 text-slate-800  " />
                </span>
                <span class="text-gray-600 text-xl font-semibold">Game</span>
                <span class="group-hover:scale-100 transition-all duration-300 scale-0">
                    <Icon icon="mingcute:game-2-fill" class="w-8 h-8 text-slate-800   " />
                </span>
            </a>
        </li>

        
    </ul>
</div>

