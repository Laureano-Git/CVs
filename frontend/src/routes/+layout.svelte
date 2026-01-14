<script>
	let isOpen = false; //Variable para desplegar las opciones
	const cvOptions =[
		{name: 'Frontend Developer', path: '/cv/frontend'},
		{name: 'Backend Developer', path: '/cv/backend'},
		{name: 'Full Stack Developer', path: '/cv/fullstack'}
	]; //Tupla de constantes con name que tienen un path relacionado
</script>
<head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
</head>
<div class="app">
	<header>
		<nav>
			<a href="/">Inicio</a> <!--Link para volver al inicio-->
			<div class="dropdown"> <!--Clase para modificar todo el despliegue-->
				<button on:click={() => (isOpen = !isOpen)}> <!--Cambio el valor de la variable para desplegar-->
					Curriculums
				</button>
							{#if isOpen}
				<ul role="menu">
				{#each cvOptions as option} <!--each #LISTA as ITEM-->
					<li>
						<a href={option.path} on:click={() => (isOpen = false)}>
							{option.name}
						</a>
					</li>					
				{/each}
				</ul>
			{/if}
			</div>

		</nav>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<a class="ig" href="https://www.instagram.com/monster.burga/" target="_blank">
			<i class="bi bi-instagram">
				<br>
				instagram
			</i>
		</a>
		<p>&copy; 2026 Curriculum Vitae - Massa Laureano Ezequiel - Hecho con SvelteKit</p>
	</footer>
</div>

<style>
	/* Diseño Global de la estructura*/
	:global(body){
		margin: 0;
		font-family: monospace;
		background-image: url(https://external-preview.redd.it/3Xfn9HCVd5frs24U4Z0XMQ7B2vexrajX4LBzWdHXhPc.png?auto=webp&s=e154fef354eab91c7250228076b3f0b268f149a1);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
		background-attachment: fixed;

	}

	header{
		background-color: #222;
		color: rgb(0, 236, 253);
		padding: 1rem 0;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
	}

	nav {
        display: flex;
        gap: 2rem;
        align-items: center;
        background: #1a1a1a; /* Fondo oscuro elegante */
        padding: 1rem 2rem;
        color: white;
    }
	.dropdown {
        position: relative; /* Importante para que el menú flote debajo */
        display: inline-block;
    }
	
	button {
        background: none;
        border: 1px solid #444;
        color: rgb(0, 225, 255);
        padding: 0.5rem 1rem;
        cursor: pointer;
        border-radius: 4px;
        transition: background 0.3s;
    }

    button:hover {
        background: #333;
    }

	ul {
        position: absolute; /* Hace que flote sobre el contenido */
        top: 100%;
        left: 0;
        background: #2a2a2a;
        list-style: none; /* Quita los puntos de la lista */
        padding: 0.5rem 0;
        margin: 0.5rem 0 0 0;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.5);
        min-width: 200px;
        z-index: 100; /* Asegura que esté por encima de todo */
    }

	a {
		color: rgb(0, 225, 255);
		text-decoration: none;
		margin-left: 20px;
		font-weight: 500;
	}

	a:hover {color: #4501ff;}

	li a {
        display: block;
        padding: 0.7rem 1.2rem;
        color: #ccc;
        text-decoration: none;
        font-size: 0.9rem;
        transition: all 0.2s;
    }

    li a:hover {
        background: #444;
        color: rgb(0, 225, 255); /* Color distintivo de Svelte */
        padding-left: 1.5rem; /* Efecto sutil de movimiento */
    }

	main{
		max-width: 800px;
		margin: 20px auto;
		min-height: 80vh; /*Empuja el footer hacia abajo*/
		padding: 0 20px;
	}

	footer{
		background-color: #222;
		text-align: center;
		padding: 20px;
		margin-top: 40px;
		color: rgb(0, 225, 255);
	}
</style>
