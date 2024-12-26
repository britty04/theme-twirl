export default function Register() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-md mx-auto border rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-6">Register</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-2">Name</label>
            <input type="text" className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input type="email" className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block mb-2">Password</label>
            <input type="password" className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block mb-2">Confirm Password</label>
            <input type="password" className="w-full p-2 border rounded-md" />
          </div>
          <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
            Register
          </button>
        </form>
      </div>
    </div>
  )
}