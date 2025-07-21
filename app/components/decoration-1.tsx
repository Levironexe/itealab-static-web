"use client"

interface TextSliderProps {
  text: string
  fontSize?: number
  speed?: number
  gap?: number
}

const TextSlider = ({ text, fontSize = 80, speed = 20, gap = 10 }: TextSliderProps) => {
  // Calculate animation duration based on speed (lower speed = slower animation)
  const animationDuration = `${speed}s`

  // Create many more instances to ensure seamless loop
  const textInstances = Array(20).fill(text)

  return (
    <section className="w-full overflow-hidden">
      {/* Left to Right */}
      <div className="w-full overflow-hidden relative" style={{ height: `${fontSize * 1.2}px` }}>
        <div
          className="flex absolute whitespace-nowrap"
          style={{
            animation: `slideLeft ${animationDuration} linear infinite`,
            width: "max-content",
          }}
        >
          {textInstances.map((item, index) => (
            <span
              key={`row1-${index}`}
              className="font-bold text-dark-green flex-shrink-0 font-michroma"
              style={{
                fontSize: `${fontSize}px`,
                marginRight: `${gap}px`,
                lineHeight: "1.2",
                display: "inline-block",
              }}
            >
              {item}
            </span>
          ))}
          {/* Duplicate the instances for seamless loop */}
          {textInstances.map((item, index) => (
            <span
              key={`row1-duplicate-${index}`}
              className="font-bold text-dark-green flex-shrink-0 font-michroma"
              style={{
                fontSize: `${fontSize}px`,
                marginRight: `${gap}px`,
                lineHeight: "1.2",
                display: "inline-block",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}

export default function IteaLabSlider() {
  return (
    <main className="w-full mx-auto bg-light-green">
      <TextSlider
        text="ITEA LAB"
        fontSize={40}
        speed={50}
        gap={20}
      />
    </main>
  )
}
