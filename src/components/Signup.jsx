import React from "react";
import "../styles/main.css";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const SignUp= ()=> {
 
  const onSubmit = (data) =>{
    console.log(data);
    alert("sign in successful")

  } 

  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required(' ⚠ enter your password ')
      .min(3, 'Password must be at 3 char long'),
    confirmPwd: Yup.string()
      .required(' ⚠ confirm your password')
      .oneOf([Yup.ref('password')], 'Passwords does not match'),
    Name:Yup.string()
    .required(' ⚠ enter your name'),
    Email:Yup.string()
    .email()
    .required(' ⚠ enter your email')


  })
  
  const formOptions = { resolver: yupResolver(formSchema) }
  const {register,handleSubmit,formState: { errors },} = useForm(formOptions);

  


  return (
    <div className="formdiv">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <img
          className="mb-4 logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcQO7bTKurqBi1KxK0liAOhHYLGVUYkY5Ydmzztir8fA&s"
          alt=""
          width="72"
          height="57"
        />
        <h1 className="h3 mb-3 fw-normal title">Sign In</h1>
        <hr/>
        <div className="inputfield">
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              
              id="exampleInputName"
              aria-describedby="emailHelp"
              autoComplete="off"
              {...register('Name')}
              className={`form-control ${errors.Name ? 'is-invalid' : ''}`}
            />
             <div className="invalid-feedback">{errors.Name?.message}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="Email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              autoComplete="off"
              {...register('Email')}
              className={`form-control ${errors.Email ? 'is-invalid' : ''}`}
         
            />
            <div className="invalid-feedback">{errors.Email?.message}</div>
          </div>
         
          <div className="mb-3">
          <label>Password</label>
          <input
            name="password"
            type="password"
            {...register('password')}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            name="confirmPwd"
            type="password"
            {...register('confirmPwd')}
            className={`form-control ${errors.confirmPwd ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
        </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember Me
            </label>
          </div>
          <button type="submit" className="btn  w-100  btn-lg" >
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp