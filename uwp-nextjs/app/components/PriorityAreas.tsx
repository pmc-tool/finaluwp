import Card from './ui/Card'

export default function PriorityAreas() {
  const areas = [
    {
      title: 'Security & Justice',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      description: 'Strengthen law enforcement, enhance community safety, and reform the justice system.',
      points: [
        'Increase police presence and resources',
        'Community policing initiatives',
        'Justice system modernization',
      ],
    },
    {
      title: 'Economic Growth',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      description: 'Build a modern, diversified economy across agriculture, tourism, digital, and creative sectors.',
      points: [
        'Agriculture modernization',
        'Digital economy expansion',
        'Tourism diversification',
      ],
    },
    {
      title: 'Healthcare',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      description: 'Improve healthcare access, quality, and infrastructure for all citizens.',
      points: [
        'Complete St. Jude Hospital',
        'Expand primary care facilities',
        'Mental health services',
      ],
    },
    {
      title: 'Education',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
      description: 'Invest in quality education, skills training, and lifelong learning opportunities.',
      points: [
        'Upgrade school infrastructure',
        'Teacher training and support',
        'Vocational and technical education',
      ],
    },
    {
      title: 'Infrastructure',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      description: 'Develop modern infrastructure including roads, ports, water, and digital connectivity.',
      points: [
        'Road network improvement',
        'Water infrastructure upgrades',
        'Broadband expansion',
      ],
    },
    {
      title: 'Environment & Energy',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      description: 'Transition to renewable energy and protect our natural environment for future generations.',
      points: [
        'Renewable energy projects',
        'Climate adaptation measures',
        'Environmental protection',
      ],
    },
  ]

  return (
    <div className="bg-white py-16 px-6 md:px-8 lg:px-10">
      <div className="max-w-content mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-6 relative inline-block pb-4">
            Priority Policy Areas
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-uwp-red rounded"></span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-[900px] mx-auto leading-relaxed">
            Our manifesto addresses the issues that matter most to Saint Lucians—from security and healthcare to economic growth and environmental sustainability.
          </p>
        </div>

        {/* Priority Areas Grid - 2x3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {areas.map((area, index) => (
            <Card key={index} hover>
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-uwp-red/10 text-uwp-red mb-5">
                  {area.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-dark-grey mb-4 leading-tight">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-600 mb-5 leading-relaxed">
                  {area.description}
                </p>

                {/* Key Points */}
                <ul className="space-y-2 mt-auto">
                  {area.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-1 h-1 rounded-full bg-uwp-red mt-2"></span>
                      <span className="text-xs md:text-sm text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Each priority area is backed by detailed policies and concrete action plans in our full manifesto.
          </p>
          <a
            href="#manifesto"
            className="inline-block bg-uwp-red text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-[#c01820] transition-colors shadow-md"
          >
            Explore the Full Plan
          </a>
        </div>
      </div>
    </div>
  )
}
