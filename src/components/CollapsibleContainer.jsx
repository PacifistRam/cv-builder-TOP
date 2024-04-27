import { useState } from "react"
import { CvForm } from "./CvForm";


const CollapsibleContainer = () => {
  const [open,SetOpen] = useState();
  const handleOpen = () => {
    SetOpen(!open)
  }
  return (
    <div>
      <div className="flex justify-between p-6 items-center w-2/4 bg-slate-400 mt-7 ">
        <h2>Education</h2>
        <button
        onClick={handleOpen}>expand</button>
      </div>
      {open && <div>
          <h3>can you see me</h3>
           </div>
           }
    </div>
  )
}

export default CollapsibleContainer