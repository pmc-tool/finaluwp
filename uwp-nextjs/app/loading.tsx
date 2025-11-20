export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light-grey">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-uwp-red mb-4"></div>
        <p className="text-xl font-semibold text-dark-grey">Loading UWP Manifesto...</p>
        <p className="text-sm text-gray-600 mt-2">Please wait</p>
      </div>
    </div>
  )
}
