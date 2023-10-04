import React from 'react'
import DashboardSectionCss from './Css/DashboardSection.module.css'

function DashboardSection() {
  
  return (
    <div className={DashboardSectionCss.dashboardHeading}>
      <h3 className='active'>Welcome to Dashboard</h3>
    </div>
  )
}

export default DashboardSection
