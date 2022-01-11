

import React from 'react'
import FeauturedInfo from '../../feauturedInfo/FeauturedInfo'
import Chart from '../../charts/Chart'
import { userData } from '../../../dummyData'

import './home.css'
import WidgetLg from '../../widgetLg/WidgetLg'
import WidgetSm from '../../widgetSm/WidgetSm'

export default function Home() {
    return (
        <div className='home'>
            <FeauturedInfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active-user"/>
            <div className='homeWidgets'>
            <WidgetSm/>
                <WidgetLg/>
                
            </div>
        </div>
        
        
    )
}
