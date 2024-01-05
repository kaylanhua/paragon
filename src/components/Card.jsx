import { useRef } from "react"

export default function Card({ className = "", children, ...props }) {
    const ref = useRef(null)

    const animate = (event) => {
        //these constants are out here so they don't get needlessly recalculated on every mousemove
        const el = ref.current
        const rect = el.getBoundingClientRect()
        const gradientLayer = el.querySelector(".gradient-layer")

        const width = el.offsetWidth
        const height = el.offsetHeight

        const sizeScaler = 500 / Math.max(width, height)

        const mouseX = event.clientX - rect.left
        const mouseY = event.clientY - rect.top

        const rotateY = (((width / 2) - mouseX) / (width / 2)) * sizeScaler
        const rotateX = (((height / 2) - mouseY) / (height / 2)) * sizeScaler

        el.style.transition = ""
        el.style.transform = `perspective(1000px) rotate3d(0, 1, 0, ${rotateY}deg) rotate3d(1, 0, 0, ${rotateX}deg)`

        // radial gradient
        gradientLayer.style.opacity = 1
        gradientLayer.style.background = `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 50%)`
    }

    const reset = () => {
        const el = ref.current
        const gradientLayer = el.querySelector(".gradient-layer")

        el.style.transition = "transform 0.5s"
        el.style.transform = ""

        gradientLayer.style.opacity = 0
    }

    return (
        <div ref={ref} onMouseMove={animate} onMouseLeave={reset} className={`bg-gradient-to-bl card overflow-hidden relative p-11 ${className}`} {...props}>
            {children}
            <div className="gradient-layer h-full w-full absolute top-0 left-0 -z-10" style={{ transition: "opacity 1s" }}></div>
        </div>
    )
}