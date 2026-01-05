import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaGitAlt,
    FaFigma,
    FaPython,
    FaDocker,
} from 'react-icons/fa';

import {
    SiTailwindcss,
    SiMongodb,
    SiExpress,
    SiNextdotjs,
    SiTypescript,
    SiFirebase,
    SiPostgresql,
    SiRedis,
    SiGraphql,
} from 'react-icons/si';

export const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
            { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
            { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: FaNodeJs, color: "#339933" },
            { name: "Express", icon: SiExpress, color: "#000000" },
            { name: "Python", icon: FaPython, color: "#3776AB" },
            { name: "Rest API", icon: SiGraphql, color: "#E10098" },
        ],
    },
    {
        title: "Database & Tools",
        skills: [
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
            { name: "Redis", icon: SiRedis, color: "#DC382D" },
            { name: "Git", icon: FaGitAlt, color: "#F05032" },
            { name: "Docker", icon: FaDocker, color: "#2496ED" },
            { name: "Figma", icon: FaFigma, color: "#F24E1E" },
        ],
    },
];
