import * as React from 'react';
import Menu from '@mui/material/Menu';
import Managerlogin from './Managerlogin';
import SignIN from './Login';


export default function Loginas() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <span
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='text-lg inline-flex'
      >
                <button
          type="button"
          class="text-white bg-blue-900 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          Login
        </button>
       
      </span>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
       className='mt-4'
      >
    <div className=' px-2'>
        <div className='px-1 py-2 cursor-pointer'><SignIN/></div>
        <div className='px-1 py-2 cursor-pointer'><Managerlogin/></div>

       
    </div>
      </Menu>
    </div>
  );
}