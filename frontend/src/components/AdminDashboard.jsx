import React from 'react'
import TimeAtWorkCard from './admin/dashComponets/TimeAtWorkCard'
import WorkingHoursCard from './admin/dashComponets/WorkingHoursCard'
import QuickLaunchCard from './admin/dashComponets/QuickLaunchCard'
import LeaveAvailabilityCard from './admin/dashComponets/LeaveAvailabilityCard '
import ScheduleCard from './admin/dashComponets/ScheduleCard '

const AdminDashboard = () => {
  return (
    <div>
         {/* <div>
            <TimeAtWorkCard/>
        </div>
        
        <div>
            <WorkingHoursCard/>
        </div>

        <div>
            <QuickLaunchCard/>
        </div> */}
        <div>
          <LeaveAvailabilityCard/>
        </div>
        {/* <div>
          <ScheduleCard/>
        </div>
         */}
    </div>
  )
}

export default AdminDashboard