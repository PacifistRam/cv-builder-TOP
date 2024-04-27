import { useState } from "react"
import { CvForm } from "./CvForm"
import DisplayCv from "./DisplayCv"

const MainCvParent = () => {

const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email : "",
    phoneNo : "",
})
  return (
    <div className="flex gap-6 px-4 py-6">

        <CvForm
            formData = {formData}
            setFormData = {setFormData} 
        />
        <DisplayCv
            formData = {formData}
            
        />
    </div>
  )
}

export default MainCvParent