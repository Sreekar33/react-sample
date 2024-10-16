import * as React from "react";
import { useForm } from "react-hook-form";
import Headers from "./Header";

let renderCount = 0;

type FormValues = {
  firstName: string;
  lastName: string;
  age: number;
  sap: {
    sapID: string;
    sapName: string;
  };
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: 0,
      sap: {
        sapID: '',
        sapName: ''
      },
      
    }
  });
  renderCount++;

  console.log("errors", errors);

  return (
    <div>
      <Headers
        renderCount={renderCount}
        description="Performant, flexible and extensible forms with easy-to-use validation."
      />

      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input
          {...register("firstName", {
            required: {
              value: true,
              message: "this is required"
            }
          })}
          placeholder="First Name"
        />
        <input
          {...register("lastName", {
            maxLength: {
              value: 5,
              message: "Max length is 5"
            }
          })}
          name="lastName"
          placeholder="Last Name"
        />

        <input type="number" {...register("age", { valueAsNumber: true })} />
        <input type="number" {...register("sap.sapID", { valueAsNumber: false })} />
        <input type="number" {...register("sap.sapName", { valueAsNumber: false })} />
        <input type="submit" />
      </form>
    </div>
  );
}
