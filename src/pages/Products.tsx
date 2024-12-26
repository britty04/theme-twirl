export default function Products() {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-8 text-foreground">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div 
            key={i} 
            className="card-gradient rounded-lg p-6 transition-all duration-300 hover:shadow-lg border border-border"
          >
            <div className="aspect-square bg-muted rounded-md mb-4"></div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Product {i}</h3>
            <p className="text-muted-foreground">Product description goes here.</p>
          </div>
        ))}
      </div>
    </div>
  );
}