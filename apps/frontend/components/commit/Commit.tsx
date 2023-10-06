export default function Commit({author, message, date, link}: {author: string, message: string, date: string, link: string}) {

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 to adjust month index (0-based)
    const day = String(date.getDate()).padStart(2, '0');
    const year = String(date.getFullYear());
    
    return `${month}/${day}/${year}`;
  }

  return (
    <div className="bg-inherit rounded-lg p-5 shadow-2xl flex justify-between items-center mb-10">
      <div>
        <a href={link} target="_blank" rel="noopener noreferrer">
        <h2 className="font-semibold text-sm">{message}</h2>
        </a>
        
        <p className="font-medium text-xs">{author}</p>
      </div>    
      <p className="font-medium text-sm">{formatDate(date)}</p>
    </div>
  )
}
