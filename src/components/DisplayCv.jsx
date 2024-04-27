

function DisplayCv({formData}) {
    console.log(formData)
  
    return (
   
    <div>
         
      {/* Render the div only when formData has at least one field */}
      
        <div>
          <h2>Personal Details</h2>
          <div>
          {formData.firstName &&  (<p>
                First Name : {formData.firstName}
            </p> )}
          {formData.lastName &&  (<p>
                Last Name : {formData.lastName}
            </p> )}
          </div>
        </div>
      
    </div>
  );
}

export default DisplayCv