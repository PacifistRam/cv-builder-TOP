

function DisplayCv({formData}) {
    console.log(formData)
  
    return (
   
    <div>
         
      {/* Render the div only when formData has at least one field */}
      
        <div className=" border-slate-600 rounded-md border-2 flex-1 h-full px-4 py-4">
        
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
      
    </div>
  );
}

export default DisplayCv