<script>
    import { commonInfo, cvData } from "$lib/cvData";
    const { common } = cvData;
</script>

<main>
    <section>
        <h1>Bienvenido a mi Curriculum Vitae</h1>
        <h1>{common.name}</h1>
        <p class="location">Ubicación: <strong style="color: rgb(0, 225, 255);">{common.location}</strong></p>
    </section>
    
    <div class="contact-grid">

        <section>
            <h3>Contactos:</h3>
            <ul>
                <li>Numero: <strong style="color: rgb(0, 225, 255);">{common.number}</strong></li><br>
                <li><a href="mailto:{common.email}">{common.email}</a></li>
            </ul>
        </section>

        <section>
            <h3>Redes y enlaces:</h3>
            <ul>
                <li><a href={common.linkedin}  target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                <br>
                <li><a href={common.github} target="_blank" rel="noopener noreferrer">GitHub Proyectos</a></li>
            </ul>
        </section>

        <section>
            <h3>Idiomas:</h3>
            <ul>
                {#each common.lenguages as idioma}
                    <li><p style="color: rgb(0, 225, 255);">{idioma}</p></li>
                {/each}
            </ul>
        </section>
    </div>
</main>

<style>
    /* Un poco de estilo básico para que no se vea plano */
    main {
        max-width: 800px;
        margin: 2rem auto;
        padding: 0 1rem;
        font-family: sans-serif;
    }

    h1{
        color: azure;
        text-align: center;
        margin: 1rem;
        display: grid;
    }

    .location{
        margin-top: 1rem;
        color: azure;
    }
    .contact-grid {
        color: azure;
        display: grid;
        grid-template: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
    }
    a {
        color: rgb(0, 225, 255); /* Color Svelte */
        text-decoration: none;
    }
    a:hover {
        color: #4501ff;
        text-decoration: underline;
    }
</style>