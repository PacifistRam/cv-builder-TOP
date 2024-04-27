import { useState } from "react";

export const CvForm = () => {
const [inputs,setInputs] = useState({
    firstName: "",
    lastName: "",
    email : "",
    phoneNo : "",

})

const onChangeHandler = (e) => {
  const {name,value} =  e.target;

  const validationRules = {
    firstName: /^[a-zA-Z\s]*$/, // Only allow alphabetic characters and spaces
    lastName: /^[a-zA-Z\s]*$/, // Only allow alphabetic characters and spaces
    // email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Improved email validation
    phoneNo: /^\d*$/ // Only allow digits
  };

  // Perform validation based on the field name
  let validatedValue = value;
  if (validationRules.hasOwnProperty(name) && !validationRules[name].test(value)) {
    // If the input value doesn't match the validation rule, don't update the state
    validatedValue = inputs[name]; // Revert to the previous value
  }
    setInputs({...inputs,[name] : validatedValue})
}

  return (
    <form action="">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="firstName"
                id="first-name"
                autoComplete="given-name"
                onChange={onChangeHandler}
                value={inputs.firstName}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                maxLength={20}
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="given-name"
                value={inputs.lastName}
                onChange={onChangeHandler}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                maxLength={20}
              />
            </div>
          </div>
          <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={inputs.email}
                      onChange={onChangeHandler}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      maxLength={30}
                    />
                  </div>
          </div>
          <div className="sm:col-span-4">
                  <label htmlFor="phoneNo" className="block text-sm font-medium leading-6 text-gray-900">
                    Phone No 
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="phoneNo"
                      type="number"
                      autoComplete="email"
                      value={inputs.phoneNo}
                      onChange={onChangeHandler}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      maxLength={10}
                    />
                  </div>
          </div>
        </div>
    </form>
  );
}
