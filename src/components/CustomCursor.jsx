import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isPointer, setIsPointer] = useState(false);
    const cursorX = useSpring(0, { damping: 20, stiffness: 250 });
    const cursorY = useSpring(0, { damping: 20, stiffness: 250 });

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
            
            const target = e.target;
            setIsPointer(
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON'
            );
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary-500 dark:border-primary-400 pointer-events-none z-[9999] hidden md:block shadow-[0_0_15px_rgba(99,102,241,0.3)]"
            style={{
                x: cursorX,
                y: cursorY,
                scale: isPointer ? 1.5 : 1,
                backgroundColor: isPointer ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary-500 dark:bg-primary-400 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
        </motion.div>
    );
};

export default CustomCursor;
