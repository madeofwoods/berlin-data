import { useEffect } from "react"

export default function Second(props) {



    return (
        <div className="Second">
            <p className="parallax--text" style={{transform: `translateY(${props.offsetY * 0.45}px)`}}>hello...</p>
            <div className="box1" style={{transform: `translateY(${props.offsetY * -0.1}px)`}}></div>
            <div className="box2" style={{transform: `translateY(${props.offsetY * -0.3}px)`}} ></div>
        </div>
    )
}