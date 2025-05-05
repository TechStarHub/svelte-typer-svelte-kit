<script>
	import { page } from '$app/stores';
</script>

<div class="flex flex-col items-center gap-1">
	<img src="/error-404.png" class="" width="300" alt="">
	<h1 class="text-2xl font-bold text-slate-800 mt-1">Error {$page.status}: Page {$page.error.message}</h1>
	<p class="max-w-[500px] text-center mt-1 text-lg">
		There was an error loading this page. Please try again later.
	</p>
	<a href="/" class="text-blue-600 font-medium hover:underline">Go to home page</a>
</div>