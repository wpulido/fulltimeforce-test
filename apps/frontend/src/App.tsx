import { useState } from "react"
import Commit from "../components/commit/Commit"

function App() {
  return (
    <div className="container mx-auto">
      <div className="text-center mt-8">
        <h1 className="font-semibold">Git repository commits app</h1>
        <p className="text-lg mt-3">This app shows all commits made to <a target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white" href="https://github.com/wpulido/fulltimeforce-test">this</a> repository.</p>
      </div>

      <div id="list" className="flex flex-col">
        <Commit />
      </div>
    </div>
  )
}

export default App
