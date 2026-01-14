/*
Archivo donde se encuentran los datos e información para exportar
a todos los archivos para que al actualizar datos se hacen en un
solo lugar 
*/

export const commonInfo = {
    name: "Massa Laureano Ezequiel",
    location: "La Plata, Buenos Aires, Argentina",
    number: "221 361-4874",
    email: "laureanoezequielm@gmail.com",
    linkedin: "https://www.linkedin.com/in/laureanomassa/",
    github: "https://github.com/Laureano-Git?tab=repositories",
    lenguages: ["Español (Nativo)", "Ingles (A2/B1)"]
};

export const cvData = {
    frontend:{
        title: "Frontend Developer",
        description: "Estudiante avanzado de Ingeniería en Sistemas de Información con enfoque en desarrollo Frontend. Especialista en interfaces de usuario modernas, accesibles y de alto rendimiento.",
        pdflink: "/files/CV-Frontend.pdf",
        skills: ["SvelteKit", "JavaScript", "HTML5", "CSS", "TypeScript", "UI/UX Design", "CI/CD"],
        soft_skills: ["Resolución de problemas", "Planificación y coodinación de tareas", "Gestión del tiempo", "Comunicación clara"],
        highlight: [
            "Optimización de Web Vitals en aplicaciones.",
            "Desarrollo de sistemas de diseño (Design Systems) reutilizables."
        ]
    },

    backend:{
        title: "Backend Developer",
        description:"Estudiante avanzado de Ingeniería en Sistemas de Información con enfoque en desarrollo Backend. Arquitecto de soluciones escalables, APIs robustas y gestión eficiente de datos.",
        pdflink:"/files/CV-Backend.pdf",
        skills: ["DJANGO", "Node.js", "PostgreSQL", "Redis", "Python", "Docker", "Microservicios"],
        soft_skills: ["Resolución de problemas", "Planificación y coodinación de tareas", "Gestión del tiempo", "Comunicación clara"],
        highlight: [
            "Diseño de arquitecturas orientadas a eventos.",
            "Implementación de sistemas de autenticación y seguridad avanzada.",
            "Desarrollo de scripts de automatización y procesamiento de datos con Python."
        ]
    },

    fullstack:{
        title: "Full Stack Developer",
        description: "Estudiante avanzado de Ingeniería en Sistemas de Información con enfoque en desarrollo Full-Stack. Desarrollador integral capaz de llevar una idea desde el prototipo hasta la producción.",
        pdflink: "/files/CV-FullStack.pdf",
        skills: ["SvelteKit", "Django Rest Framework", "Node.js", "PostgreSQL", "AWS", "CI/CD", "Bash Scripting"],
        soft_skills: ["Resolución de problemas", "Planificación y coodinación de tareas", "Gestión del tiempo", "Comunicación clara"],
        highlight: [
            "Liderazgo técnico en proyectos end-to-end",
            "Despliegue y mantenimiento de infraestructura en la nube"
        ]
    },

    common: commonInfo //Objeto common para no repetir
}