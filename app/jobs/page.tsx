'use client';

import React, { useState } from 'react';
import type { DrawerProps } from 'antd';
import { Button, Drawer, } from 'antd';
import { MenuOutlined } from '@ant-design/icons';


export default function Page() {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<DrawerProps['placement']>('left');

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button onClick={showDrawer}>
                <MenuOutlined />
            </Button>
            <Drawer
                placement={'left'}
                onClose={onClose}
                open={open}
                key={placement}
                width={250}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
            <div className="container mx-auto">
                asdasdasd
            </div>
        </>
    )
}
