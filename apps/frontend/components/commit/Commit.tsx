import React from 'react'

export default function Commit() {
  return (
    <div className="border-[1px] bg-inherit rounded-lg p-5 border-white/20 flex justify-between items-center">
      <div>
        <h2>Commit message here</h2>
        <p>Commit author</p>
      </div>    
      <p>Commit date here</p>
    </div>
  )
}
