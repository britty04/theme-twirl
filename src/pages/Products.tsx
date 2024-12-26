export default function Products() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample product cards */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <div className="aspect-square bg-gray-200 rounded-md mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Product {i}</h3>
            <p className="text-gray-600">Product description goes here.</p>
          </div>
        ))}
      </div>
    </div>
  )
}