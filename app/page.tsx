'use client';

import React, { useEffect, useState } from 'react';
import Login from './login/page';
import Page from './jobs/page';
import { Button, notification, Space } from 'antd';
import { data } from 'autoprefixer';

type NotificationType = 'success' | 'info' | 'warning' | 'error';


export default function Home() {

  const [userName, setuserName] = useState<any>('');
  const [password, setpassword] = useState<any>('');
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [isRemember, setisRemember] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType, message: string) => {
    api[type]({
      message: 'Notification',
      description: message,
    });
  };


  useEffect(() => {
    checkIsVaildUser();
    sessionStorage.getItem('valid') === 'true' ? setisAuthenticated(true) : '';
  }, [])

  // need to create edn poitn and add it
  async function checkIsVaildUser(name?: string, rember?: boolean) {
    if (userName?.length > 0 && password?.length > 0 && userName === 'admin' && password === 'admin') {
      setisAuthenticated(true)
      sessionStorage.setItem('valid', 'true');
    }
  }

  return (
    <>
      {contextHolder}
      {isAuthenticated ? <Page /> :
        <Login setpassword={setpassword} setuserName={setuserName} checkIsVaildUser={checkIsVaildUser} />
      }
    </>

  )
}
