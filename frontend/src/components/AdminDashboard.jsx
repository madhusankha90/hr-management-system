import React from 'react'
import TimeAtWorkCard from './admin/dashComponets/TimeAtWorkCard'
import WorkingHoursCard from './admin/dashComponets/WorkingHoursCard'
import QuickLaunchCard from './admin/dashComponets/QuickLaunchCard'

const AdminDashboard = () => {
  return (
    <div className='flex'>
        <div>
            <TimeAtWorkCard/>
        </div>
        
        <div>
            <WorkingHoursCard/>
        </div>

        <div>
            <QuickLaunchCard/>
        </div>
        
    </div>
  )
}

export default AdminDashboard