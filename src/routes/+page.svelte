<script>
    import { fade } from 'svelte/transition';

    export let data;
</script>

<svelte:head>
    <title>CHUCK NORRIS JOKES</title>
</svelte:head>

<div class="container">
    <div class="card" transition:fade>
        <h2>RANDOM CHUCK NORRIS JOKE</h2>
        <p>"{data.value}"</p>
    </div>
</div>


<style>

    .container{
        height: 100%;
        display: grid;
        place-items: center;
    }

    h2{
        font-family: Yeseva one, sans-serif;
        font-size:50px;
    }

    .card{
        width: 800px;
    }

    p{
        font-family: 'Josefin Sans', sans-serif;
        font-size:35px;
        text-align: justify;
    }

</style>
