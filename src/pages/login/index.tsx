import { useState } from "react";
import {
  createUserWithEmailAndPasswordHelper,
  signInUserWithEmailAndPasswordHelper,
} from "../../auth";
import { useNavigate } from "react-router-dom";

type FormDetailsProps = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState<FormDetailsProps>({
    email: "",
    password: "",
  });
  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    console.log(formDetails);
    const { email, password } = formDetails;
    if (email === "" && password === "") return;
    createUserWithEmailAndPasswordHelper(email, password)
      .then((res) => {
        alert("user created");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          signInUserWithEmailAndPasswordHelper(email, password)
            .then((res) => {
              console.log(res);

              navigate("/");
            })
            .catch(() => {
              alert("wrong creds");
            });
        }
      });
  };
  return (
    <>
      <div className="flex items-center justify-center mx-auto h-screen bg-gray-500">
        <form onSubmit={onSubmitHandler}>
          <div className="grid grid-cols-1 gap-2">
            <h1 className="text-center"> Login</h1>
            <input
              type="text"
              placeholder="enter email"
              value={formDetails.email}
              onChange={(e) =>
                setFormDetails({ ...formDetails, email: e.target.value })
              }
              className="rounded-xl p-2 "
            />
            <input
              type="password"
              placeholder="enter password"
              value={formDetails.password}
              onChange={(e) =>
                setFormDetails({ ...formDetails, password: e.target.value })
              }
              className="rounded-xl p-2 "
            />
            <button
              type="submit"
              className="rounded-xl bg-white p-2 focus-visible:outline-none"
            >
              {" "}
              Submit{" "}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
