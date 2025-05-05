<script>
    import {onMount} from 'svelte';
    import Icon from '@iconify/svelte';

    let contributors = [];
    onMount(async () => {
        fetch(`https://api.github.com/repos/TechStarHub/svelte-typer-svelte-kit/contributors`)
        .then(res => res.json())
        .then(res => {
            contributors = res;
        })
        .catch(err => {
            console.log(err);
        })
    })
</script>

<svelte:head>
	<title>About | Svelte Typer</title>
</svelte:head>

<section class="container mx-auto  p-4 md:p-6 ">
    <div class="flex flex-col gap-4 bg-white p-4 md:p-6 rounded">
        <div class="border-b pb-2">
            <h1 class="text-3xl font-medium mb-2">
                Introduction
            </h1>
            <p class="">
                A simple typing practice app built with Svelte. It is a beginner friendly app that helps you to improve your typing speed and accuracy. It is a progressive web app (PWA) that can be installed on your device. It is a free and open source project. You can find the source code on <a href="https://github.com/TechStarHub/svelte-typer-svelte-kit" target="_blank" class="text-blue-500 hover:underline">GitHub</a>.  
            </p>
            <h2 class="text-2xl font-medium my-2">
                Contributors
            </h2>
            <div class="flex gap-2 mt-2 mb-4">
                {#each contributors as contributor}
                    <div class="flex items-center gap-2 group relative">
                        <a href={contributor.html_url} target="_blank" class="text-blue-500 hover:underline">
                            <img src={contributor.avatar_url} alt="" class="w-10 h-10 rounded-full">
                        </a>
                        <span class="absolute -bottom-[2.2rem] -left-1/2 hidden group-hover:block backdrop-blur bg-slate-300/30 p-1 rounded font-medium text-sm">
                            {contributor.login}
                        </span>
                    </div>
                {/each}
            </div>
            <h2 class="text-2xl font-medium mb-2">
                Technologies Used
            </h2>
            <ul class="font-semibold text-sm">
                <li class="list-disc ml-4">
                    <Icon icon="vscode-icons:file-type-svelte" class="w-4 h-4 inline-block mr-1" />
                    Svelte
                </li>
                <li class="list-disc ml-4">
                    <Icon icon="ri:svelte-fill" class="w-4 h-4 inline-block mr-1" />
                    SvelteKit
                </li>
                <li class="list-disc ml-4">
                    <Icon icon="devicon:tailwindcss" class="w-4 h-4 inline-block mr-1" />
                    TailwindCss
                </li>
                <li class="list-disc ml-4">
                    <Icon icon="line-md:iconify1" class="w-4 h-4 inline-block mr-1" />
                    Iconify
                </li>
                <li class="list-disc ml-4">
                    <Icon icon="mdi:github" class="w-4 h-4 inline-block mr-1" />
                    GitHub API
                </li>
            </ul>
            <span class="">
                <img class="mt-4" src="https://api.netlify.com/api/v1/badges/397fbebd-cd48-490e-ac98-dd81e78501e4/deploy-status" alt="">
            </span>
        </div>
        <div class="border-b pb-2">
            <h1 class="text-3xl font-medium mb-2">
                Our Organization
            </h1>
            <p class="">
                We are a group of developers who are passionate about open source. We are building open source projects to help the community. We are also building a community of developers to help each other. You can join our community by filling this <a href="https://forms.gle/QfuJi1ogdqGATHq5A" target="_blank" class="text-blue-500 hover:underline">Form</a>. Visit our <a href="https://techstarhubweb.netlify.app/" target="_blank" class="text-blue-500 hover:underline">website</a> to know more about us.
            </p>
        </div>
        <div class="border-b pb-2">
            <h1 class="text-3xl font-medium mb-2">
                Our Purpose
            </h1>
            <p class="">
                Our organization's main purpose is to help out beginner developers with open source, by providing them beginner friendly but real world projects. They can learn more about git and github by contributing in these peojects, as well as the technologies. By working in a community they can learn professional comunication, best practices, programming patterns and more.
            </p>
        </div>
        <div class=" pb-2">
            <h1 class="text-3xl font-medium mb-2">
                Our Goal
            </h1>
            <p class="">
                Our goals are to make this organization even bigger and reach more more people in future. We want to help more and more people to learn and grow. 
            </p>
        </div>
    </div>
</section>