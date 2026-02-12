import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const LetterPullUp = ({
    text,
    className = "",
    words = false, // If true, splits by words instead of letters
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

    // Split logic based on 'words' prop
    const items = words ? text.split(" ") : Array.from(text);

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: delay * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(4px)",
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
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }} // Added flexWrap/justifyContent for paragraphs
            variants={container}
            initial="hidden"
            animate={controls}
            className={className}
        >
            {items.map((item, index) => (
                <motion.span variants={child} key={index} style={{ marginRight: words ? "0.25em" : "0" }}>
                    {item === " " ? "\u00A0" : item}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default LetterPullUp;
