"use client"
import Image from "next/image"

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

  // Responsive font sizes
  const responsiveFontSize = {
    base: Math.max(fontSize * 0.4, 20), // Mobile: 40% of desktop, min 20px
    sm: Math.max(fontSize * 0.5, 24),   // Small: 50% of desktop, min 24px
    md: Math.max(fontSize * 0.6, 28),   // Medium: 60% of desktop, min 28px
    lg: Math.max(fontSize * 0.8, 32),   // Large: 80% of desktop, min 32px
    xl: fontSize,                       // XL and above: full size
  }

  return (
    <section className="w-full overflow-hidden">
      {/* Left to Right */}
      <div 
        className="w-full overflow-hidden relative" 
        style={{ 
          height: `${responsiveFontSize.base * 1.2}px`,
        }}
      >
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
              className="font-bold text-dark-green flex-shrink-0 font-michroma flex items-center"
              style={{
                fontSize: `${responsiveFontSize.base}px`,
                marginRight: `${Math.max(gap * 0.4, 4)}px`,
                lineHeight: "1.2",
                display: "inline-flex",
              }}
            >
              {item}
              <Image
                src='/images/icon_transparent.png'
                alt="itealab watermark"
                width={responsiveFontSize.base * 1.5}
                height={responsiveFontSize.base * 1.5}
                className="ml-4"
              />
            </span>
            
          ))}
        </div>
      </div>

      {/* Responsive styles for different breakpoints */}
      <style jsx>{`
        @keyframes slideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (min-width: 640px) {
          .w-full.overflow-hidden.relative {
            height: ${responsiveFontSize.sm * 1.2}px !important;
          }
          .font-bold.text-dark-green.flex-shrink-0.font-michroma {
            font-size: ${responsiveFontSize.sm}px !important;
            margin-right: ${Math.max(gap * 0.5, 6)}px !important;
          }
        }

        @media (min-width: 768px) {
          .w-full.overflow-hidden.relative {
            height: ${responsiveFontSize.md * 1.2}px !important;
          }
          .font-bold.text-dark-green.flex-shrink-0.font-michroma {
            font-size: ${responsiveFontSize.md}px !important;
            margin-right: ${Math.max(gap * 0.6, 8)}px !important;
          }
        }

        @media (min-width: 1024px) {
          .w-full.overflow-hidden.relative {
            height: ${responsiveFontSize.lg * 1.2}px !important;
          }
          .font-bold.text-dark-green.flex-shrink-0.font-michroma {
            font-size: ${responsiveFontSize.lg}px !important;
            margin-right: ${Math.max(gap * 0.8, 12)}px !important;
          }
        }

        @media (min-width: 1280px) {
          .w-full.overflow-hidden.relative {
            height: ${fontSize * 1.2}px !important;
          }
          .font-bold.text-dark-green.flex-shrink-0.font-michroma {
            font-size: ${fontSize}px !important;
            margin-right: ${gap}px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default function IteaLabSlider() {
  return (
    <main className="w-full mx-auto bg-light-green py-2 sm:py-3 md:py-4">
      <TextSlider
        text="ITEA LAB"
        fontSize={40}
        speed={50}
        gap={20}
      />
      
    </main>
  )
}