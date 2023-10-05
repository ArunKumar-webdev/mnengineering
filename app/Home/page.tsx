'use client'
import React from 'react';
import Barchart from '../barchart/barchart';
import Gaugecomponent from '../Gauge/Gauge';
import Menubar from '../Menubar/Menubar';


export default function Page() {

    return (
        <>
            <div className="container mx-auto bg-gray-100">
                <div className='flex flex-wrap items-center w-screen h-screen'>
                    <div className='w-1/4'><Menubar /></div>
                    <div className='w-1/4 p-4'><Gaugecomponent /></div>
                    <div className='w-1/2 p-8'><Barchart /></div>
                </div>

            </div>
        </>
    )
}
