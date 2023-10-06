

function App() {

  return (
    <>
      <button className="bg-white text-black py-3 px-5 rounded-md" onClick={async() => {
        const response = await fetch('/api');
        const data = await response.text();
        console.log(data);
      }}>Click me</button>
    </>
  )
}

export default App
