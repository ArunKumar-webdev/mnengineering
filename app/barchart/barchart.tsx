'use client'
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

export default function Barchart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/be63e0a2-d2be-4c45-97fd-c00f752a66d4.json')
            .then((response) => response.json())
            .then((json) => {
                const translation: any = {
                    "城市": "City",
                    "销售额": "Sales"
                };
                let data: any = [];
                data = json.map((item: any, index: number) => {
                    const newItem: any = {};
                    for (const key in item) {
                        if (translation[key]) {
                            newItem[translation[key]] = item[key];
                        } else {
                            newItem[key] = item[key];
                        }
                    }
                    newItem.City = `Town ${index}`
                    return newItem;
                });

                setData(data)
            })
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config: any = {
        data,
        xField: 'City',
        yField: 'Sales',
        xAxis: {
            label: {
                autoRotate: false,
            },
        },
        scrollbar: {
            type: 'horizontal',
        },
    };
    return (
        <Column {...config} />
    )
}
