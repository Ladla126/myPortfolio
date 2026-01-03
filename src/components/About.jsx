import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiTypescript, SiFirebase } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const coretech = [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'React Native', icon: TbBrandReactNative, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section id="about" className="section-container">
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* Section Header */}
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">
                        About Me
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        Passionate <span className="gradient-text">Developer</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mx-auto" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left: My Journey Card */}
                    <motion.div variants={itemVariants}>
                        <div className="card h-full">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    I'm a passionate full-stack developer with a keen eye for design and a love for creating
                                    seamless user experiences. With a year of experience in modern web technologies, I transform
                                    ideas into beautiful, functional applications.
                                </p>
                                <p>
                                    My journey in web development started with a curiosity about how websites work, and it
                                    has evolved into a career focused on building scalable, performant, and accessible web and App
                                    applications that users love.
                                </p>
                                <p>
                                    I believe in writing clean, maintainable code and staying up-to-date with the latest
                                    industry trends and best practices. When I'm not coding, you'll find me exploring new
                                    technologies or contributing to open-source projects.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-200">
                                <div>
                                    <p className="text-3xl font-bold gradient-text">1+</p>
                                    <p className="text-sm text-gray-600">Years Experience</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold gradient-text">15+</p>
                                    <p className="text-sm text-gray-600">Projects Completed</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Core Technologies */}
                    <motion.div variants={itemVariants}>
                        <div className="card h-full">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Technologies</h3>
                            <div className="grid grid-cols-3 gap-4">
                                {coretech.map((tech, index) => {
                                    const Icon = tech.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.05, y: -5 }}
                                            className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 shadow-md"
                                        >
                                            <Icon
                                                className="text-5xl mb-3"
                                                style={{ color: tech.color }}
                                            />
                                            <p className="text-sm font-semibold text-gray-700">
                                                {tech.name}
                                            </p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
