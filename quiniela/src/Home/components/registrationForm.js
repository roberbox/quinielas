import React from 'react';
import { useForm } from "react-hook-form";

const RegistrationForm = (props) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div  className="registration-container">
      <div className="form-container">
        <div className="registration-title">
          <h3></h3>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
          <input name="example" defaultValue="test" ref={register} />
          
          {/* include validation with required or other standard HTML validation rules */}
          <input name="exampleRequired" ref={register({ required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;