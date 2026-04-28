import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const LoadingScreen = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 2 seconds loading time

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-slate-950"
                >
                    <div className="relative flex flex-col items-center">
                        {/* Animated Logo / Icon */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent uppercase tracking-tighter mb-8"
                        >
                            [ Code. ]
                        </motion.div>

                        {/* Progress Bar Container */}
                        <div className="w-48 h-1 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                className="w-full h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                            />
                        </div>

                        {/* Loading Text */}
                        <motion.p
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="mt-4 text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.3em]"
                        >
                            Developing Excellence
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
