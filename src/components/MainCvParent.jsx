import { useState } from "react"
import { CvForm } from "./CvForm"
import DisplayCv from "./DisplayCv"
import Education from "./Education"


const MainCvParent = () => {

const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email : "",
    phoneNo : "",
})

const [education,setEducation] = useState([])

  return (
    <div className="grid grid-cols-1 gap-6 px-4 py-6 sm:grid-cols-2 border h-screen">
<div>
  
          <CvForm
              formData = {formData}
              setFormData = {setFormData}
          />
          <Education
              education ={education}
              setEducation = {setEducation}
           />
</div>
        <DisplayCv
            formData = {formData}
            
        />
        
    </div>
  )
}

export default MainCvParent