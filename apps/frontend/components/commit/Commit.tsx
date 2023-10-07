// this component requires the following props: 
// - Author = The person who pushed the commit
// - Message = The message of the commit
// - Date = The date in which the commit was made
// - Link = The link to the commit page on github

// this component builds the layout for a commit card, and it shows the author, message, date and also provides a link of the commit

export default function Commit({author, message, date, link}: {author: string, message: string, date: Date, link: string}) {

  return (
    <div className="bg-inherit rounded-lg p-5 shadow-2xl flex justify-between items-center mb-10">
      <div>
        <a href={link} target="_blank" rel="noopener noreferrer">
        <h2 className="font-semibold text-sm">{message}</h2>
        </a>
        
        <p className="font-medium text-xs">{author}</p>
      </div>    
      <p className="font-medium text-sm">{date.toLocaleDateString("en-US")}</p>
    </div>
  )
}
