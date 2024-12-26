export default function Contact() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="max-w-2xl mx-auto">
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
            <label className="block mb-2">Message</label>
            <textarea className="w-full p-2 border rounded-md h-32"></textarea>
          </div>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}