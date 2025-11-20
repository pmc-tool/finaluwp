import Image from 'next/image'
import Card from './ui/Card'

export default function Leadership() {
  const leaders = [
    {
      name: 'Allen Chastanet',
      role: 'Political Leader',
      image: '/images/leader-placeholder.svg',
      bio: 'Proven leadership with a track record of delivering results for Saint Lucia.',
    },
    {
      name: 'Hon. [Deputy Leader Name]',
      role: 'Deputy Political Leader',
      image: '/images/leader-placeholder.svg',
      bio: 'Committed to public service and advancing the UWP vision for Saint Lucia.',
    },
  ]

  const teamMembers = [
    { name: 'Team Member 1', constituency: 'Constituency', image: '/images/team-member-placeholder.svg' },
    { name: 'Team Member 2', constituency: 'Constituency', image: '/images/team-member-placeholder.svg' },
    { name: 'Team Member 3', constituency: 'Constituency', image: '/images/team-member-placeholder.svg' },
    { name: 'Team Member 4', constituency: 'Constituency', image: '/images/team-member-placeholder.svg' },
  ]

  return (
    <div className="py-12 sm:py-14 md:py-16 px-4 sm:px-5">
      <div className="max-w-content mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-11 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-grey mb-4 sm:mb-5 md:mb-6 relative inline-block pb-3 sm:pb-4 px-4 sm:px-0">
            Experienced. Committed. Ready to Lead.
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-uwp-red rounded"></span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-[900px] mx-auto leading-relaxed px-4 sm:px-0">
            Meet the team dedicated to reclaiming our future—leaders with proven experience, integrity, and a clear vision for Saint Lucia.
          </p>
        </div>

        {/* Key Leaders - Large Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-14 md:mb-16">
          {leaders.map((leader, index) => (
            <Card key={index} hover>
              <div className="flex flex-col items-center text-center">
                <div className="relative w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full overflow-hidden mb-5 sm:mb-6 border-4 border-gray-100">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-dark-grey mb-2">
                  {leader.name}
                </h3>
                <span className="inline-block bg-uwp-red text-white px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold tracking-wider rounded-full mb-3 sm:mb-4 uppercase">
                  {leader.role}
                </span>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Team Members - Smaller Grid */}
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-dark-grey mb-6 sm:mb-7 md:mb-8 text-center">
            Our Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <div className="text-center">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-3 sm:mb-4 border-2 border-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-xs sm:text-sm md:text-base font-bold text-dark-grey mb-1">
                    {member.name}
                  </h4>
                  <p className="text-xs sm:text-xs md:text-sm text-gray-600">
                    {member.constituency}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-10 sm:mt-11 md:mt-12 text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-7 md:p-8 border border-gray-200">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-dark-grey mb-2 sm:mb-3">
            A Team United for Saint Lucia
          </h3>
          <p className="text-sm sm:text-base text-gray-600 max-w-[700px] mx-auto leading-relaxed px-4 sm:px-0">
            With experience, integrity, and dedication, our leadership team is ready to deliver the change Saint Lucia needs and deserves.
          </p>
        </div>
      </div>
    </div>
  )
}
