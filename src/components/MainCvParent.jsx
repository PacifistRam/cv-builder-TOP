import { useState } from "react";
import { CvForm } from "./CvForm";
import DisplayCv from "./DisplayCv";
import Education from "./Education";
import Work from "./Work";

const MainCvParent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
  });

  const [education, setEducation] = useState([]);

  const [work, setWork] = useState([]);

  return (
    <div className="grid grid-cols-1 gap-8 px-4 py-6 sm:grid-cols-3 border h-screen">
      <div>
        <CvForm formData={formData} setFormData={setFormData} />
        <Education education={education} setEducation={setEducation} />
        <Work work={work} setWork={setWork} />
      </div>
      <div className="col-span-2 h-1 min-h-dvh">
        <DisplayCv formData={formData} education={education} work={work} />
      </div>
    </div>
  );
};

export default MainCvParent;
