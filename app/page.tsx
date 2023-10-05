'use client';

import React, { useEffect, useState } from 'react';
import Login from './login/page';
import Page from './Home/page';
import useViewport from '../app/useViewport';

export default function Home() {

  const [show, setshow] = useState(true);
  const [userName, setuserName] = useState<any>('');
  const [password, setpassword] = useState<any>('');
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const viewportWidth: any = useViewport();

  useEffect(() => {
    checkIsVaildUser();
    if (sessionStorage.getItem('valid') === 'true') { setisAuthenticated(true) };
  }, [])

  useEffect(() => {
    if (viewportWidth < 768) {
      window.location.reload();
    }
  }, [viewportWidth]);

  async function checkIsVaildUser(name?: string, rember?: boolean) {
    if (userName?.length > 0 && password?.length > 0 && userName === 'admin' && password === 'admin') {
      setisAuthenticated(true)
      sessionStorage.setItem('valid', 'true');
    }
  }

  setTimeout(() => {
    setshow(false)
  }, 1000)

  return (
    <>

      {isAuthenticated ?
        <>
          <div className={`bg-gray-100 text-center py-4 lg:px-4 ${show ? 'block' : 'hidden'}`}>
            <div className="p-2 bg-indigo-500 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
              <span className="font-semibold mr-2 text-left flex-auto">Logged in successfully ✅</span>
             </div>
          </div>
          <Page />
        </> :
        <Login setpassword={setpassword} setuserName={setuserName} checkIsVaildUser={checkIsVaildUser} />
      }
    </>

  )
}
