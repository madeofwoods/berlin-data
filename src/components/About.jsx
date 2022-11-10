import { delay, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { useAnimation } from "framer-motion";

export default function About() {

    const {ref, inView} = useInView( {threshold:0.5});
    const animation = useAnimation();

    const { ref: ref1, inView: inView1 } = useInView({threshold:0.5});
    const fadeAnimation = useAnimation();
    const fadeAnimation2 = useAnimation();
    const fadeAnimation3 = useAnimation();
    const fadeAnimation4 = useAnimation();
    
    useEffect(() => {
        if (inView) {
            animation.start({
                opacity:1,
                // x:"10vw", 
                transition: {
                    type:"spring", ease:'easeIn', duration:4, delay:0.5
                }
            })
        } 
        if (!inView) {
            animation.start( {
                // x:"0vw", 
                opacity:0,

            })
        }
        console.log(`use effect hook, inView = ${inView}` )
    }, [inView])

    useEffect(() => {
        if (inView1) {
            fadeAnimation.start({
                opacity:1, 
                x:0,
                y:0,
                transition: {
                    type:"spring", ease:'easeIn', duration:4, delay:2 }
            })

            fadeAnimation2.start({
                opacity:1, 
                x:0,
                y:0,
                transition: {
                    type:"spring", ease:'easeIn', duration:4, delay:2.1 }
            })

            fadeAnimation3.start({
                opacity:1, 
                x:0,
                y:0,
                transition: {
                    type:"spring", ease:'easeIn', duration:4, delay:2.2 }
            })

            fadeAnimation4.start({
                opacity:1, 
                x:0,
                y:0,
                transition: {
                    type:"spring", ease:'easeIn', duration:4, delay:2.3 }
            })
        }
        if (!inView1) {
            fadeAnimation.start({
                opacity:0,
                x:40,
                y:-20,

            })
            fadeAnimation2.start({
                    opacity:0,
                    x:40,
                    y:0,
            })
            fadeAnimation3.start({
                opacity:0,
                x:40,
                y:0,
            })
            fadeAnimation4.start({
                opacity:0,
                x:40,
                y:-20,
            })
            
        }
        console.log(`use effect hook, inView1 = ${inView1}`)
    }, [inView1])



    return (
        <div className="About">

            <p className="about--title"> - - - </p>
            <motion.div ref={ref}  className="about--motion">
                <motion.div   className="text--about--1"
                animate={animation}
                >
                    <h3>.about( )</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestiae, perferendis quidem veritatis consequatur minima? Laboriosam vel perferendis quos aspernatur vero maiores quidem soluta, doloribus culpa dolores tenetur distinctio veritatis!</p>
                </motion.div>


            </motion.div>

            <motion.div ref = {ref1} className="div fadein-text">
                    <motion.div animate={fadeAnimation} className="fadein-text-1">
                        <div>This is a thing we can do really well</div>
                    </motion.div>
                    <motion.div animate={fadeAnimation2} className="fadein-text-2">This is a thing we can do even better</motion.div>
                    <motion.div animate={fadeAnimation3} className="fadein-text-3">This is a thing we can do incredibly well</motion.div>
                    <motion.div animate={fadeAnimation4} className="fadein-text-4">This guy is the absolute bollocks</motion.div>
            </motion.div>

        
        </div>
    )
}