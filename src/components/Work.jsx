import { v4 as uuidv4 } from 'uuid';
import { Button } from "@/components/ui/button"


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"



const Work = ({work,setWork}) => {
    const addWork = () => {
        setWork((prevWork) =>[
            ...prevWork,
            {
                id: uuidv4(),
                company:"",
                position:"",
                city:"",
            },
        ])
    } 

    const handleInputChange = (id,field,value) => {
        setWork((prevWork) => {
           return prevWork.map(workData => (workData.id === id? {...workData,[field]:value} : workData ))
        })
    }

    const handleDelete = (id) => {
      setWork((prevWork) => prevWork.filter((workData) => workData.id !== id));
    }
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <div className="grid grid-cols-1 gap-3">
          <AccordionTrigger>
            {" "}
            <h2>Work</h2>{" "}
          </AccordionTrigger>

          <AccordionContent>
            <div className="grid grid-cols-1 gap-4">
              {work.map((workData) => (
                <div className="grid grid-cols-1 gap-6" key={workData.id}>
                  <p className='flex justify-between items-center'>
                   <span className='text-[1.2rem]'>Work Detail:{work.indexOf(workData) + 1}</span> 
                    <span>
                      <Button variant="destructive" size ="sm" onClick = {() =>handleDelete(workData.id)}>Delete</Button>
                    </span>
                  </p>

                  <input
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="text"
                    placeholder="company"
                    value={workData.company}
                    onChange={(e) =>
                      handleInputChange(workData.id, "company", e.target.value)
                    }
                  />
                  <input
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="text"
                    placeholder="position"
                    value={workData.position}
                    onChange={(e) =>
                      handleInputChange(workData.id, "position", e.target.value)
                    }
                  />
                  <input
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="text"
                    placeholder="city"
                    value={workData.city}
                    onChange={(e) =>
                      handleInputChange(workData.id, "city", e.target.value)
                    }
                  />
                </div>
              ))}

              <div className="grid grid-cols-1 gap-6">
                <button
                  className="bg-slate-800 rounded-sm px-4 py-2 text-slate-50 w-max justify-self-center mt-6"
                  onClick={addWork}
                >
                  Add Work
                </button>
              </div>
            </div>
          </AccordionContent>
        </div>
      </AccordionItem>
    </Accordion>
  );
}

export default Work