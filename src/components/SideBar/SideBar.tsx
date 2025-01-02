import { AudiotrackRounded, PersonOutlineOutlined, ReportGmailerrorredRounded, SpaceDashboardOutlined } from '@mui/icons-material'
import './SideBar.css'
import Logo from '../../assets/icon/Logo.svg?react'
import { NavLink } from 'react-router-dom'

const SlideBar = () => {
  return (
    <div className='slidebar'>
      <div className='logo' style={{ marginBottom: '40px' }}>
        <NavLink to='/' className='nav-link'>
          <Logo className='logo' style={{ width: '40px' }} />
        </NavLink>
      </div>
      <ul className='slidebar-menu'>
        <li>
          <span className='listmenu'>
            <NavLink to='/' className='nav-link'>
              <b></b>
              <b></b>
              <div style={{ display: 'flex', alignItems: 'center', height: '36px' }}>
                <SpaceDashboardOutlined sx={{ marginRight: '10px' }} />
                <p style={{ fontWeight: '400' }}>Dashboard</p>
              </div>
            </NavLink>
          </span>
        </li>
        <li>
          <span className='listmenu'>
            <NavLink to={`/user?page=${1}`} className='nav-link'>
              <b></b>
              <b></b>
              <div style={{ display: 'flex', alignItems: 'center', height: '36px' }}>
                <PersonOutlineOutlined sx={{ marginRight: '10px' }} />
                <p style={{ fontWeight: '400' }}>User</p>
              </div>
            </NavLink>
          </span>
        </li>
        <li>
          <span className='listmenu'>
            <NavLink to='/report' className='nav-link'>
              <b></b>
              <b></b>
              <div style={{ display: 'flex', alignItems: 'center', height: '36px' }}>
                <ReportGmailerrorredRounded sx={{ marginRight: '10px' }} />
                <p style={{ fontWeight: '400' }}>Report</p>
              </div>
            </NavLink>
          </span>
        </li>
        <li>
          <span className='listmenu'>
            <NavLink to='/track' className='nav-link'>
              <b></b>
              <b></b>
              <div style={{ display: 'flex', alignItems: 'center', height: '36px' }}>
                <AudiotrackRounded sx={{ marginRight: '10px' }} />
                <p style={{ fontWeight: '400' }}>Track</p>
              </div>
            </NavLink>
          </span>
        </li>
      </ul>
    </div>
  )
}

export default SlideBar
