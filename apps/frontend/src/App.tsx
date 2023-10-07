import React, { useEffect, useState } from "react";
import Commit from "../components/commit/Commit"

// We build a commit type to make sure we receive the proper types in the response
type Commit = {
  html_url: string,
  commit: {
    author: {
      name: string,
    },
    message: string,
    committer: {
      date: Date,
    }
  }
}

function App() {
  // we create a state variable to store the response array coming from the backend request, and assign it the type "Commit", which we have already set above.
  const [commits, setCommits] = useState<Commit[]>([]);

  useEffect(() => {
    // we make use of the useEffect hook to make our request to the backend to improve code reusability, improves our performance since it reduces any side effects like re-renders of our application and helps us separate the side logic from our render logic
    const getCommits = async () => {
      // We write an async function to fetch the data from the "/api" route, which points to our Nestjs backend
      const response = await fetch("/api/commits");
      const data = await response.json();
      // once we have the response, we store the response coming from the backend in our state variable declared above.
      setCommits(data);
    }

    // We execute our function
    getCommits();
  }, [])
  
  return (
    <div className="container mx-auto">
      <div className="text-center mt-10">
        <h1 className="font-semibold text-[30px] lg:text-lg">Git repository commits app</h1>
        <p className="mt-5 text-sm lg:text-lg font-medium">This app shows all commits made to <a target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black" href="https://github.com/wpulido/fulltimeforce-test">this</a> repository.</p>
      </div>

      <div id="list" className="flex  flex-col gap-4 mt-10 px-3 lg:px-0">
        {/* We add a conditional rendering to evaluate if there's data in the commits state variable we can display */}
        {commits.length > 0 ? commits.map((commit, key) => (
          // In case there is, we loop the data array and after that, we display the information by using the Commit component we have created, passing the data we need to display, that's coming from the response as props for it
          <React.Fragment key={key}>
            {/* We use a React.Fragment add a key to every loop instance, so the app doesn't have any performance issues */}
            <Commit link={commit.html_url} author={commit.commit.author.name} message={commit.commit.message} date={new Date(commit.commit.committer.date)} />
          </React.Fragment>          
        )) : (
          <>
          {/* in case we're not receiving any data, we display a fallback message, to let the user know we don't have any data to show. */}
          <p className="text-semibold text-md text-black text-center">No commits to show.</p>
          </>
          
        )}
        
      </div>
    </div>
  )
}

export default App
