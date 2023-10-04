'use client';
import React from 'react'
import { message } from 'antd';

export default function Login({ setuserName, setpassword, checkIsVaildUser }: any) {
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.info('Please Contact Admin');
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
        <input onChange={(value) => setuserName(value.target.value)} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Username / Email Address" />
        <input onChange={(value) => setpassword(value.target.value)} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#" onClick={info}>{'Forgot Password?'}</a>
        </div>
        <div className="text-center md:text-left">
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" onClick={() => checkIsVaildUser()}>{'Login'}</button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left" >
          {`Don't have an account?`} <a className="text-red-600 hover:underline hover:underline-offset-4" onClick={info}>{'Register'}</a>
        </div>
      </div>
    </section>
  )
}
