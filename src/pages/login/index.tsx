import { useState } from "react";
import {
  createUserWithEmailAndPasswordHelper,
  signInUserWithEmailAndPasswordHelper,
  signInWithFb,
} from "../../auth";
import { useNavigate } from "react-router-dom";

type FormDetailsProps = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
 
  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    signInWithFb().then((res)=>{
        console.log(res);
        alert('login success')
        navigate("/")
    }).catch(()=>alert('login failed'))
  };
  return (
    <>
      <div className="flex items-center justify-center mx-auto h-screen bg-gray-500">
        <form onSubmit={onSubmitHandler}>
          <div className="grid grid-cols-1 gap-2">
            <button
              type="submit"
              className="rounded-xl bg-white p-2 focus-visible:outline-none"
            >
              Submit 
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
