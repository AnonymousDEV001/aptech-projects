import React from 'react'
import StatisticsCss from './Css/Statistics.module.css'

function Statistics() {
  return (
    <div className={`${StatisticsCss.heading}`} >
      <h3 className={`active`}>Statistics</h3>
      <div className={StatisticsCss.cards}>
        <div className={StatisticsCss.card}>
            <p>Total Views</p>
            <p>16</p>
        </div>
        <div className={StatisticsCss.card}>
            <p>Total Messages</p>
            <p>86</p>
        </div>
        <div className={StatisticsCss.card}>
            <p>Total Images</p>
            <p>26</p>
        </div>
      </div>
    </div>
  )
}

export default Statistics
