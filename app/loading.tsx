export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-72 h-72 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
      </div>

      <div role="status" className="relative text-center">
        {/* Animated SVG loader */}
        <svg
          width="110"
          height="110"
          viewBox="0 0 100 100"
          className="mx-auto mb-6"
          aria-hidden
        >
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#58a6ff">
                <animate
                  attributeName="stop-color"
                  values="#58a6ff;#7ee787;#a5a5ff;#58a6ff"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#a5a5ff">
                <animate
                  attributeName="stop-color"
                  values="#a5a5ff;#58a6ff;#7ee787;#a5a5ff"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>

          <g transform="translate(50,50)">
            {/* Outer rotating ring */}
            <circle
              cx="0"
              cy="0"
              r="32"
              fill="none"
              stroke="url(#grad)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="60 120"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0"
                to="360"
                dur="1.4s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Inner pulse core */}
            <circle cx="0" cy="0" r="14" fill="url(#grad)">
              <animate
                attributeName="r"
                values="12;15;12"
                dur="1.1s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.8;1;0.8"
                dur="1.1s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </svg>

        {/* Text animation */}
        <p className="text-sm text-[#8b949e] font-mono tracking-widest animate-pulse">
          LOADING
        </p>
      </div>
    </div>
  )
}
