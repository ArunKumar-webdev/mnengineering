'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Gauge } from '@ant-design/plots';

export default function Gaugecomponent() {

    const [percentValue, setpercentValue] = useState(0.4);
    let value: number = 0.4;

    const graphRef: any = useRef(null);
    useEffect(() => {
        if (graphRef.current) {
            let data = 0.7;
            const interval = setInterval(() => {
                if (data >= 1.5) {
                    clearInterval(interval);
                }

                data += 0.005;
                graphRef.current.changeData(data > 1 ? data - 1 : data);
            }, 100);
        }
    }, [graphRef]);

    const config: any = {
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
                formatter(v: number) {
                    return Number(v) * 100;
                },
            },
            subTickLine: {
                count: 3,
            },
        },
        statistic: {
            content: {
                formatter: ({ percent }: any) => `Rate: ${(percent * 100).toFixed(0)}%`,
                style: {
                    color: 'rgba(0,0,0,0.65)',
                    fontSize: 32,
                },
            },
        },
        onReady: (plot: any) => {
            graphRef.current = plot;
        },
    };


    return (
        <Gauge {...config} />
    )
}
