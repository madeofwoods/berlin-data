import {motion} from "framer-motion";

export default function Head() {

    const text = "data is awesome"
    const words = text.split(" ")
    const letters = Array.from(text)

    const text2 = "but have you tried sushi?"
    const letters2 = Array.from(text2)

    const container = {
        hidden: {opacity:0},
        visible: {
            opacity:1, 
            transition:{ staggerChildren:0.30, delayChildren:0.04}
        },
    }

    const child = {
        visible:{
            opacity:1,
            y:0,
            transition:{type:"spring", damping:12, stiffness:100, ease:"linear"}
        },
        hidden:{
            opacity:0, 
            y:30,
            transition:{type:"spring", damping:12, stiffness:100}
        }
    }

    const container2 = {
        hidden: {opacity:0},
        visible: {
            opacity:1, 
            transition:{ staggerChildren:0.07, delayChildren:4.7}
        },
    }

    const child2 = {
        visible:{
            opacity:1,
            x:0,
            transition:{type:"spring", damping:12, stiffness:100, ease:"linear"}
        },
        hidden:{
            opacity:0, 
            x:10,
            transition:{type:"spring", damping:12, stiffness:100}
        }
    }

    return (
        <div className="Head">
            <motion.div className="title--text" variants={container} initial="hidden" animate="visible">
                {letters.map((letter, index) => (
                <motion.div style={{marginRight:"2px"}} key={index} variants={child}>{letter === " " ? "\u00A0" : letter}</motion.div>
            ))}
            </motion.div>

            <motion.div className="response--text" variants={container2} initial="hidden" animate="visible">
                {letters2.map((letter, index) => (
                <motion.div style={{marginRight:"2px"}} key={index} variants={child2}>{letter === " " ? "\u00A0" : letter}</motion.div>
            ))}
            </motion.div>

            {/* <motion.div className="title--text" variants={container} initial="hidden" animate="visible">
                {words.map((word, index) => (
                <motion.div style={{marginRight:"10px"}} key={index} variants={child}>{word}</motion.div>
            ))}
            </motion.div> */}
        </div>
    )
}