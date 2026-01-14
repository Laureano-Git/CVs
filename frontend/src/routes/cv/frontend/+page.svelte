<script>
    import { cvData } from "$lib/cvData";
    const data = cvData.frontend;
    const {common} = cvData;
</script>

<main>
    <h1>{data.title}</h1>
    <p>{data.description}</p>

    <h3>Tecnologias clave:</h3>
    <ul>
        {#each data.skills as skill}
            <li>{skill}</li>
        {/each}
    </ul>

    <h3>Soft skills:</h3>
    <ul>
        {#each data.soft_skills as item}
            <li>{item}</li>
        {/each}
    </ul>

    <a href={data.pdflink} download>Descargar CV en PDF</a>
</main>

<style>
    main{color: white;}
    a {
        border: 1px solid #444;
        padding: 0.5rem 1rem;
        cursor: pointer;
        border-radius: 4px;
        transition: background 0.3s;
		color: rgb(0, 225, 255);
		text-decoration: none;
		margin-left: 20px;
		font-weight: 500;
	}
    a:hover {color: #4501ff; background: #e0dede;}
</style>