<script>
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    onMount(() => {
        if (page.status === 404) {
            goto('/404');
        }
    });
</script>

<div class="">
    This is the words page
</div>