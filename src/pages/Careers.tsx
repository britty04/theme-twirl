export default function Careers() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Career Opportunities</h1>
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Position {i}</h3>
            <p className="text-gray-600 mb-4">Job description goes here.</p>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}