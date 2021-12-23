import React from 'react';
import { useForm } from "react-hook-form";

const RegistrationForm = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div  className="registration-container">
      <div className="form-container">
        <div className="form-container--title">
          <h3>¡Registrate!</h3>
        </div>
        <div className='form-container--form'>
          <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
            <input className='input' name="example" placeholder="Nombre completo" ref={register} />
            
            {/* include validation with required or other standard HTML validation rules */}
            <input className='input' name="exampleRequired" placeholder="Correo electrónico" ref={register({ required: true })} />
            <input className='input' name="exampleRequired" placeholder="Crear contraseña" ref={register({ required: true })} />
            <input className='input' name="exampleRequired" placeholder="Fecha de nacimiento" ref={register({ required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            
            <input className='main-button' type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;