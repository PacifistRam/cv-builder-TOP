import { v4 as uuidv4 } from 'uuid';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
const Education = ({education,setEducation}) => {
  
    const addEducation = () => {
    setEducation((prevEducation) => [
      ...prevEducation,
      {
        id: uuidv4(),
        school: "",
        degree: "",
        city: "",
      },
    ]);
  };

  const handleInputChange = (id,field,value) => {
    setEducation((prevEducation) =>
        prevEducation.map((edu) => (edu.id === id? {...edu,[field]:value} : edu)))
};

return (
    <Accordion type ="single" collapsible>

    <AccordionItem value="item-1">

<div className='grid grid-cols-1 gap-3'>

<AccordionTrigger> <h2>Education</h2> </AccordionTrigger>

<AccordionContent>

   <div className='grid grid-cols-1 gap-4'>

       <p>Education Details:</p>

       {education.map((edu) => (

           <div className='grid grid-cols-1 gap-6' key={edu.id}>

               <h3>Education Detail: {education.indexOf(edu) + 1}</h3>

               <input

                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                   type='text'

                   placeholder='school'

                   value={edu.school}

                   onChange={(e) => handleInputChange(edu.id, "school", e.target.value)}

               />

               <input

                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                   type='text'

                   placeholder='degree'

                   value={edu.degree}

                   onChange={(e) => handleInputChange(edu.id, "degree", e.target.value)}

               />

               <input

                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                   type='text'

                   placeholder='city'

                   value={edu.city}

                   onChange={(e) => handleInputChange(edu.id, "city", e.target.value)}

               />

           </div>

       ))}

   </div>

   <div className='grid grid-cols-1 gap-6'>

       <h3>Add Education</h3>

       <button className='bg-slate-800 rounded-sm px-4 py-2 text-slate-50 w-max justify-self-center' onClick={addEducation}>Add Education</button>

   </div>

   </AccordionContent>

</div>

</AccordionItem>

</Accordion>
);
};
export default Education