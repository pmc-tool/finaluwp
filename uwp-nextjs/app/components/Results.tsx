import Image from 'next/image'
import Card from './ui/Card'

export default function Results() {
  const achievements = [
    {
      stat: '$5B+',
      label: 'Investment Projects',
      description: 'Secured record investments in infrastructure and development',
    },
    {
      stat: '12',
      label: 'Major Projects',
      description: 'Delivered transformative infrastructure across the island',
    },
    {
      stat: '4.2%',
      label: 'GDP Growth',
      description: 'Achieved strong economic performance and stability',
    },
    {
      stat: '3,000+',
      label: 'Jobs Created',
      description: 'Generated employment opportunities across all sectors',
    },
  ]

  const highlights = [
    'New St. Jude Hospital reconstruction',
    'Hewanorra Airport redevelopment',
    'Modern road infrastructure',
    'Waterfront development projects',
    'Enhanced healthcare facilities',
    'Upgraded education infrastructure',
    'National water supply improvements',
    'Expansion of community and sports facilities',
    'ICT & digital infrastructure upgrades',
    'Housing development & community renewal',
  ]

  return (
    <>
      <div className="md:py-16 px-5">
        <div className="max-w-content mx-auto">
          {/* Section Header - With Background on Mobile */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-grey mb-6 relative inline-block pb-4 bg-white md:bg-transparent px-4 md:px-0 py-2 md:py-0 rounded-lg">
              Results You Could See. Progress You Could Feel.
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-uwp-yellow to-uwp-orange rounded"></span>
            </h2>
            <p className="hidden sm:block text-base md:text-lg text-gray-600 max-w-[900px] mx-auto leading-relaxed">
              The UWP has a proven record of delivering results—not just promises. Our previous government brought unprecedented investment, infrastructure development, and economic growth to Saint Lucia.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index}>
                <div className="text-center py-2">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-uwp-yellow to-uwp-orange bg-clip-text text-transparent mb-3">
                    {achievement.stat}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base font-bold text-dark-grey mb-3">
                    {achievement.label}
                  </div>
                  <div className="text-xs sm:text-xs md:text-sm text-gray-600 leading-relaxed">
                    {achievement.description}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Image and Highlights Section */}
      <div className="bg-[#FAFAFA] py-12 md:py-16 px-5">
      <div className="max-w-content mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/record-collage.jpg"
              alt="UWP Development Projects"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="w-full h-auto"
            />
          </div>

          {/* Right: Key Highlights */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-dark-grey mb-6">
              Key Development Milestones
            </h3>
            <p className="hidden lg:block text-base text-gray-600 mb-6 leading-relaxed">
              From healthcare to infrastructure, from education to economic development—the UWP delivered tangible improvements that changed lives and built a stronger Saint Lucia.
            </p>
            <ul className="space-y-3">
              {highlights.map((highlight, index) => {
                // Progressive hiding based on screen size
                let hideClasses = ''
                if (index >= 9) hideClasses = 'hidden 2xl:flex' // Hide 10th item below 1536px
                else if (index >= 8) hideClasses = 'hidden xl:flex' // Hide 9th item below 1280px
                else if (index >= 7) hideClasses = 'hidden lg:flex' // Hide 8th item below 1024px
                else if (index >= 6) hideClasses = 'hidden md:flex' // Hide 7th item below 768px

                // Individual icons for each feature
                const icons = [
                  // Hospital - Medical Cross
                  <svg key={0} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/></svg>,
                  // Airport - Airplane
                  <svg key={1} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>,
                  // Road - Highway
                  <svg key={2} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 18H6V6h12v12zM18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/><path d="M12 6h-1v5h1V6zm0 7h-1v5h1v-5z"/></svg>,
                  // Waterfront - Waves
                  <svg key={3} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17 16.99c-1.35 0-2.2.42-2.95.8-.65.33-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.95c1.35 0 2.2-.42 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.42 2.95-.8c.65-.33 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm0-4.45c-1.35 0-2.2.43-2.95.8-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.32-1.17.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm2.95-8.08c-.75-.38-1.58-.8-2.95-.8s-2.2.42-2.95.8c-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.37-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.93c1.35 0 2.2-.43 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8V5.04c-.9 0-1.4-.25-2.05-.58z"/></svg>,
                  // Healthcare - Heart Pulse
                  <svg key={4} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>,
                  // Education - Book
                  <svg key={5} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>,
                  // Water - Droplet
                  <svg key={6} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66c3.12 3.12 3.12 8.19 0 11.31-3.12 3.12-8.19 3.12-11.31 0-3.12-3.12-3.12-8.19 0-11.31L12 2.69m0 16.55c-1.78 0-3.22-1.44-3.22-3.22 0-.93.39-1.78 1.05-2.38l2.17-2.17 2.17 2.17c.66.6 1.05 1.45 1.05 2.38 0 1.78-1.44 3.22-3.22 3.22z"/></svg>,
                  // Sports - Trophy
                  <svg key={7} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>,
                  // ICT - Computer
                  <svg key={8} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>,
                  // Housing - Home
                  <svg key={9} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>,
                ]

                return (
                  <li
                    key={index}
                    className={`flex items-start gap-3 ${hideClasses}`}
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-uwp-green/10 text-uwp-green flex items-center justify-center mt-0.5">
                      {icons[index]}
                    </span>
                    <span className="text-sm md:text-base text-gray-700">{highlight}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
