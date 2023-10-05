'use client'
import React, { useState } from 'react'
import { Gauge } from '@ant-design/plots';

export default function Gaugecomponent() {

    const [percentValue, setpercentValue] = useState(0.7)

    const config = {
        percent: percentValue,
        range: {
            color: '#30BF78',
        },
        indicator: {
            pointer: {
                style: {
                    stroke: '#D0D0D0',
                },
            },
            pin: {
                style: {
                    stroke: '#D0D0D0',
                },
            },
        },
        axis: {
            label: {
                formatter(v) {
                    return Number(v) * 100;
                },
            },
            subTickLine: {
                count: 3,
            },
        },
        statistic: {
            content: {
                formatter: ({ percent }) => `Rate: ${(percent * 100).toFixed(0)}%`,
                style: {
                    color: 'rgba(0,0,0,0.65)',
                    fontSize: 32,
                },
            },
        },
    };

    function getRandomPercent(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    // Function to update the percent property in config
    function updatePercent() {
        setpercentValue(getRandomPercent(0.4, 0.9));
        // Replace this with your code to update your chart or display
        console.log(`Updated percent to ${config.percent}`);
    }

    // Update the percent property every 2 seconds
    setInterval(updatePercent, 2000);




    return (
        <Gauge {...config} />
    )
}
