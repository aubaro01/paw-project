export default function ComponentTesting() {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Component Testing Page</h1>
        
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Primary Button</button>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 ml-4">Outlined Button</button>
        </section>
  
        <section className="bg-white shadow-md rounded-lg p-6 mt-6">
          <h2 className="text-2xl font-semibold mb-4">Inputs</h2>
          <input type="text" placeholder="Type here..." className="border border-gray-300 p-2 rounded-lg w-full" />
        </section>
        
      </div>
    );
}
  