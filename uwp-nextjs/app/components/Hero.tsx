import Button from './ui/Button'

export default function Hero() {
  return (
    <section
      className="relative min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[700px] flex items-center py-12 sm:py-16 md:py-20 px-4 sm:px-5 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[58%_40%] gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-4 sm:mb-5 md:mb-6 leading-tight tracking-tight drop-shadow-[2px_2px_8px_rgba(0,0,0,0.9)]">
              Reclaiming Our Future
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-5 md:mb-6 drop-shadow-[1px_1px_6px_rgba(0,0,0,0.9)] max-w-[95%] sm:max-w-[90%]">
              A Transformative Agenda for Rebuilding Trust, Restoring Confidence & Renewing Hope
            </p>
            <p className="hidden sm:block text-sm sm:text-base md:text-lg mb-6 sm:mb-7 md:mb-8 text-white/95 drop-shadow-[1px_1px_4px_rgba(0,0,0,0.9)] max-w-[95%] sm:max-w-[90%] leading-relaxed">
              The United Workers Party offers a clear, detailed agenda to rebuild trust, restore confidence, and renew hope—giving every citizen the chance to dream again.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <Button variant="primary" href="#manifesto">
                Read Manifesto 2025
              </Button>
              <Button variant="secondary" href="#strategy">
                See our plan at a glance
              </Button>
            </div>
          </div>

          {/* Right Side - Manifesto Card (Glassmorphism) */}
          <div className="hidden lg:block">
            <div className="relative bg-white/15 backdrop-blur-[20px] border border-white/30 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
              <span className="inline-block bg-uwp-red text-white px-4 py-2 text-xs font-bold tracking-wider rounded-full mb-5 uppercase">
                2025 Manifesto
              </span>
              <h3 className="text-3xl font-bold text-white mb-4 leading-tight drop-shadow-[2px_2px_8px_rgba(0,0,0,0.5)]">
                Reclaiming Our Future
              </h3>
              <p className="text-white/90 text-base mb-6 leading-relaxed drop-shadow-[1px_1px_4px_rgba(0,0,0,0.4)]">
                A transformative agenda built on trust, relief, and people-first development.
              </p>
              <p className="text-white/80 text-xs uppercase tracking-widest font-semibold mb-4 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.3)]">
                United Workers Party
              </p>
              <span className="inline-block bg-white/20 backdrop-blur-[10px] border border-white/30 text-white px-4 py-2 text-sm font-semibold rounded-lg drop-shadow-[1px_1px_3px_rgba(0,0,0,0.3)]">
                Interactive 3D Flipbook Below
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
