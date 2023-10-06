import React, { useEffect, useState } from "react";
import Commit from "../components/commit/Commit"

type Commit = {
  html_url: string,
  commit: {
    author: {
      name: string,
    },
    message: string,
    committer: {
      date: string,
    }
  }
}

function App() {
  const [commits, setCommits] = useState<Commit[]>([]);

  useEffect(() => {
    const getCommits = async () => {
      const response = await fetch("/api");
      const data = await response.json();
  
      console.log(data)
      setCommits(data);
    }

    getCommits();
  }, [])
  
  return (
    <div className="container mx-auto">
      <div className="text-center mt-10">
        <h1 className="font-semibold text-[30px] lg:text-lg">Git repository commits app</h1>
        <p className="mt-5 text-sm lg:text-lg font-medium">This app shows all commits made to <a target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black" href="https://github.com/wpulido/fulltimeforce-test">this</a> repository.</p>
      </div>

      <div id="list" className="flex  flex-col gap-4 mt-10 px-3 lg:px-0">
        {commits ? commits.map((commit, key) => (
          <React.Fragment key={key}>
            <Commit link={commit.html_url} author={commit.commit.author.name} message={commit.commit.message} date={commit.commit.committer.date} />
          </React.Fragment>
          
        )) : ("")}
        
      </div>
    </div>
  )
}

export default App
