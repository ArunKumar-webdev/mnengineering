'use client';
import React, { useState } from 'react'
import { message } from 'antd';

export default function Login({ setuserName, setpassword, checkIsVaildUser }: any) {
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.info('Please Contact Admin');
  };

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Reset error messages
    setUserNameError('');
    setPasswordError('');

    // Validation logic
    if (!userName) {
      setUserNameError('Username is required.');
    } else if (!/^[a-zA-Z0-9]+$/.test(userName)) {
      setUserNameError('Username should not contain special characters.');
    }

    if (!password) {
      setPasswordError('Password is required.');
    } else if (password.length < 3) {
      setPasswordError('Password should have at least 3 characters.');
    }

    // If there are no errors, you can proceed with further actions (e.g., API request)
    if (userName && password) {
      debugger
      setuserName(userName)
      setpassword(password)
      checkIsVaildUser()
    }
  };



  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      {contextHolder}
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setUserName(e.target.value)}
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="Username / Email Address"
          />
          {userNameError && <p className="text-red-500">{userNameError}</p>}
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password"
          />
          {passwordError && <p className="text-red-500">{passwordError}</p>}
          <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Log In
          </button>
        </form>

      </div>
    </section>
  )
}
