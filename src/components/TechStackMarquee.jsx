import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJs, FaPython, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiTypescript, SiNextdotjs, SiVite, SiFirebase, SiRedux } from 'react-icons/si';

const icons = [
    { Icon: FaReact, name: "React" },
    { Icon: SiNextdotjs, name: "Next.js" },
    { Icon: SiTypescript, name: "TypeScript" },
    { Icon: FaJs, name: "JavaScript" },
    { Icon: SiTailwindcss, name: "Tailwind" },
    { Icon: FaNodeJs, name: "Node.js" },
    { Icon: SiMongodb, name: "MongoDB" },
    { Icon: SiVite, name: "Vite" },
    { Icon: SiFirebase, name: "Firebase" },
    { Icon: SiRedux, name: "Redux" },
    { Icon: FaDocker, name: "Docker" },
    { Icon: FaGitAlt, name: "Git" },
];

const TechStackMarquee = () => {
    return (
        <div className="py-12 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10" />
            
            <motion.div
                animate={{
                    x: [0, -1035],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="flex whitespace-nowrap gap-12 items-center"
            >
                {[...icons, ...icons].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 group cursor-default">
                        <item.Icon className="text-3xl text-slate-400 group-hover:text-primary-500 transition-colors duration-300" />
                        <span className="text-lg font-bold text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300 uppercase tracking-tighter">
                            {item.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default TechStackMarquee;
