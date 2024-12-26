export default function FAQ() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Question {i}?</h3>
            <p className="text-gray-600">Answer to question {i} goes here.</p>
          </div>
        ))}
      </div>
    </div>
  )
}