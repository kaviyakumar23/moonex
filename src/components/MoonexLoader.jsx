import React from "react";

const MoonexLoader = () => {
  return (
    <div className="flex items-center justify-center w-full h-96">
      <div className="relative w-32 h-32">
        <div className="absolute left-1/2 top-1/2 w-32 h-32 -ml-16 -mt-16 animate-pulse">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M50 0 A50 50 0 0 1 50 100 A50 50 0 0 1 50 0"
              fill="#FFD700"
              className="drop-shadow-lg"
            />
            <circle cx="30" cy="30" r="5" fill="#FFE55C" />
            <circle cx="45" cy="45" r="4" fill="#FFE55C" />
            <circle cx="35" cy="60" r="6" fill="#FFE55C" />
            <circle cx="60" cy="35" r="5" fill="#FFE55C" />
          </svg>
        </div>

        <div
          className="absolute left-1/2 top-1/2 w-12 h-12 -ml-6 -mt-6"
          style={{
            animation: "outerOrbit 4s linear infinite",
          }}
        >
          <svg viewBox="0 0 256 417" className="w-full h-full drop-shadow-lg">
            <path
              d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z"
              fill="#FFD700"
            />
            <path
              d="M127.962 0L0 212.32l127.962 75.639V154.158z"
              fill="#FFC800"
            />
            <path
              d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.601 128.038-180.32z"
              fill="#FFD700"
            />
            <path d="M127.962 416.905v-104.72L0 236.585z" fill="#FFC800" />
            <path
              d="M127.961 287.958l127.96-75.637-127.96-58.162z"
              fill="#FFE55C"
            />
            <path d="M0 212.32l127.96 75.638v-133.8z" fill="#FFD700" />
          </svg>
        </div>

        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-200 rounded-full"
            style={{
              animation: `float ${2 + i}s ease-in-out infinite`,
              top: `${20 + i * 30}%`,
              left: `${80 + i * 10}%`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes outerOrbit {
          from {
            transform: rotate(0deg) translateX(80px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(80px) rotate(-360deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default MoonexLoader;
