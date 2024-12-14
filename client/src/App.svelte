<script>
  import { onMount } from 'svelte';
  import axiosInstance from './lib/api';

  let apiName = "";
  let isLoading = true;

  onMount(async () => {
    try {
      const response = await axiosInstance.get('/test');
      apiName = response.data;
    } catch (error) {
      console.error(error);
    } finally {
      isLoading = false;
    }
  });
</script>

<main>
  {#if isLoading}
    <p>Loading...</p>
  {:else}
    <h1>{apiName}</h1>
  {/if}
</main>
