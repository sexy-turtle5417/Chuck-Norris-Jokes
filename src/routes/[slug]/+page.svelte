<script>
    import { flip } from "svelte/animate";
    import { fade, fly } from "svelte/transition";
    export let data;
</script>

    <div class="container">
        {#if data.data.result.length < 1}
            <div class="noData" transition:fade={{duration:200} }>NO DATA</div>
            {:else}
                {#each data.data.result as joke (joke.id)}
                    <div class="card" in:fade={{duration:200}} out:fade={{duration:20}}>
                        <p>"{@html joke.value}"</p>
                    </div>
                {/each}
        {/if}
    </div>
<style>
    .container{
       padding:20px; 
    }
    .card{
        border: 1px solid black;
        width: 800px;
        min-height: 100px;
        margin:10px auto;
        padding:20px;
        z-index: 10000;
        border-radius: 10px 20px;
    }

    p{
        font-family: 'Josefin Sans', sans-serif;
        font-size: 30px;
        text-align: justify;
    }

    .noData{
        text-align: center;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 35px;
        margin-top:10%;
        z-index: -100;
    }
</style>