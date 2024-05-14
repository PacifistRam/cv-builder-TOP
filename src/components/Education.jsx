import { v4 as uuidv4 } from 'uuid';
import { Button } from "@/components/ui/button"
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

const handleDelete = (id) => {
    setEducation((prevEducation) => prevEducation.filter(edu => (edu.id !== id)))
}

return (
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <div className="grid grid-cols-1 gap-3">
        <AccordionTrigger>
          {" "}
          <h2>Education</h2>{" "}
        </AccordionTrigger>

        <AccordionContent>
          <div className="grid grid-cols-1 gap-4">
            {education.map((edu) => (
              <div className="grid grid-cols-1 gap-6" key={edu.id}>
                <p className="flex justify-between items-center">
                  <span className="text-[1.2rem]">
                    Education Detail:{education.indexOf(edu) + 1}
                  </span>
                  <span>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(edu.id)}
                    >
                      Delete
                    </Button>
                  </span>
                </p>

                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  type="text"
                  placeholder="school"
                  value={edu.school}
                  onChange={(e) =>
                    handleInputChange(edu.id, "school", e.target.value)
                  }
                />

                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  type="text"
                  placeholder="degree"
                  value={edu.degree}
                  onChange={(e) =>
                    handleInputChange(edu.id, "degree", e.target.value)
                  }
                />

                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  type="text"
                  placeholder="city"
                  value={edu.city}
                  onChange={(e) =>
                    handleInputChange(edu.id, "city", e.target.value)
                  }
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6">
            <button
              className="bg-slate-800 rounded-sm px-4 py-2 text-slate-50 w-max justify-self-center mt-6"
              onClick={addEducation}
            >
              Add Education
            </button>
          </div>
        </AccordionContent>
      </div>
    </AccordionItem>
  </Accordion>
);
};
export default Education