

function DisplayCv({formData,education,work}) {
    console.log(formData)
  
    return (
   
    <div className="border-slate-600 rounded-md border-2">
         
      {/* Render the div only when formData has at least one field */}
      
        <div className="  flex-1 h-full px-4 py-4  ">
        
          <h2 className="text-center font-bold text-2xl">Personal Details</h2>
          <div>
          {formData.firstName &&  (<p>
                First Name : {formData.firstName}
            </p> )}
          {formData.lastName &&  (<p>
                Last Name : {formData.lastName}
            </p> )}
          {formData.email &&  (<p>
                email : {formData.email}
            </p> )}
          {formData.phoneNo &&  (<p>
                Phone-no : {formData.phoneNo}
            </p> )}
          </div>
        </div>
      
      <div className="px-4 py-4">
        <h2 className="text-center font-bold text-2xl">Education Details</h2>
        {
          education.length ? (education.map(edu =>(
            <div className="grid grid-cols-1 gap-1 text-base  mb-5" key={edu.id}>
            <p>School:{edu.school}</p>
            <p>Education:{edu.degree}</p>
            <p>School:{edu.city}</p>
          </div>
          ))
          
          )
          :(
            <div>
             
            </div>
          )
        }
      </div>
      
      <div className="px-4 py-4">
      <h2 className="text-center font-bold text-2xl">Work Details</h2>
      {
        work.length && (work.map(workData => (
          <div className="grid grid-cols-1 gap-1 text-base  mb-5" key={workData.id}>
            <p>Company:{workData.company}</p>
            <p>Position:{workData.position}</p>
            <p>City:{workData.city}</p>
          </div>
        )))
      }
      </div>
    </div>
  );
}

export default DisplayCv