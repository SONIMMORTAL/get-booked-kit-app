import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const ScaleLetterText = ({
    text,
    className = "",
    delay = 0
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
        hidden: {
            opacity: 0,
            scale: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", overflow: "hidden" }}
            variants={container}
            initial="hidden"
            animate={controls}
            className={className}
        >
            {words.map((word, wordIndex) => (
                <div key={wordIndex} style={{ display: "flex", whiteSpace: "nowrap" }}>
                    {Array.from(word).map((letter, letterIndex) => (
                        <motion.span variants={child} key={letterIndex}>
                            {letter}
                        </motion.span>
                    ))}
                    {/* Add a non-breaking space after each word except the last one to maintain spacing */}
                    {wordIndex < words.length - 1 && (
                        <motion.span variants={child}>
                            &nbsp;
                        </motion.span>
                    )}
                </div>
            ))}
        </motion.div>
    );
};

export default ScaleLetterText;
