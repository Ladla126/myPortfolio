import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
    {
        name: "Alex Johnson",
        role: "Senior Product Manager",
        content: "Khalil is an exceptional developer who combines technical expertise with a keen eye for design. He delivered our project ahead of schedule and exceeded all expectations.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        name: "Sarah Williams",
        role: "Startup Founder",
        content: "Working with Khalil was a game-changer for our startup. His ability to build complex features with such simplicity and elegance is truly impressive.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        name: "Michael Chen",
        role: "Lead UI/UX Designer",
        content: "Rarely do you find a developer who understands design principles so well. Khalil made my designs come to life exactly as I envisioned them.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/3.jpg"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                        Client <span className="gradient-text">Testimonials</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Hear from some of the amazing people I've had the pleasure of working with.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="glass-effect dark:glass-effect-dark p-8 rounded-3xl relative"
                        >
                            <FaQuoteLeft className="text-4xl text-blue-500/20 absolute top-6 left-6" />
                            <div className="flex gap-1 mb-4">
                                {[...Array(item.rating)].map((_, i) => (
                                    <FaStar key={i} className="text-amber-400 text-sm" />
                                ))}
                            </div>
                            <p className="text-slate-700 dark:text-slate-300 mb-6 italic leading-relaxed">
                                "{item.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-12 h-12 rounded-full border-2 border-primary-500"
                                />
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">{item.name}</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
