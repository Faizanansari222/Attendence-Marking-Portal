// import React from 'react'

import { useState } from "react";
import { register } from "../../Config/firebase";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      if (password !== confirmPassword) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: " Password does not match",
          // footer: '<a href="#">Why do I have this issue?</a>'
        });
      } else {
        await register(email, password);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        await Swal.fire({
          icon: "success",
          title: "Registration Successfull",
          // footer: '<a href="#">Why do I have this issue?</a>'
        });
        navigate("/");
      }
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-gray-900 via-blue-600 to-gray-800 flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
        <div className="max-w-md bg-white  w-full mx-auto border shadow-sm border-gray-300 rounded-2xl p-8">
          <div className="text-center mb-12">
            <a href="javascript:void(0)">
              <div className="text-gray-800 text-center text-2xl font-bold">
                {" "}
                Admin Register
              </div>
              {/* <img
            src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-40 inline-block' /> */}
            </a>
          </div>

          <form>
            <div className="space-y-6">
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Email Id
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="text"
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter password"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Confirm Password
                </label>
                <input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  name="cpassword"
                  type="password"
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter confirm password"
                />
              </div>

              <div className="flex items-center">
                {/* <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                /> 
                {/* <label className="text-gray-800 ml-3 block text-sm">
                  I accept the{" "}
                  <a
                    href="javascript:void(0);"
                    className="text-blue-600 font-semibold hover:underline ml-1"
                  >
                    Terms and Conditions
                  </a>
                </label> */}
              </div>
            </div>

            <div className="!mt-12">
              <button
                onClick={handleSubmit}
                type="button"
                className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                Create an account
              </button>
            </div>
            <p className="text-gray-800 text-sm mt-6 text-center">
              Already have an account?{" "}
              <button
                onClick={() => {
                  navigate(-1);
                }}
                className="text-blue-600 font-semibold hover:underline ml-1"
              >
                Login here
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
