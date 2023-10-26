<script>
    export let data;
    let { categories } = data;
</script>

<div class="container">
    <header>
        <div><img src="https://i.ebayimg.com/images/g/lpYAAOSwTkVd~q5w/s-l640.png" alt="chuckNorris" height="100px"></div>
        <div><h1>CHUCK NORRIS JOKES</h1></div>
        <nav>
            <a href="/"><b>HOME</b></a> &nbsp;
            {#each categories as category}
                <div><b><a href="/{category}">{category.toUpperCase()}</a> &nbsp;</b></div>
            {/each}
        </nav>
    </header>
    <div>
        <slot></slot>
    </div>
    <footer>Jaypee P. Zulieta copyright 2023</footer>
</div>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Yeseva+One&display=swap');

    .container{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 120px 1fr 50px;
        height: 100vh;
    }

    header{
        padding: 10px;
        display: flex;
        justify-content: flex-start;
        gap:10px;
        box-shadow: rgba(0, 0, 0, 0.321) 0px 5px 10px;
        background-color: white;
    }

    img{
        margin: auto auto;
    }

    h1{
        font-family: 'Yeseva One', serif;
    }

    nav{
        margin-left: 30px;
        display: flex;
        padding-top: 39px;
    }
     
    nav, footer{
        font-family: 'Josefin Sans', sans-serif;
    }

    footer{
        border-top:1px solid black;
        display: grid;
        place-items: center;
        text-align: center;
    }
</style>