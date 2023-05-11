import * as React from 'react';
import Menu from '@mui/material/Menu';


export default function Pricerange() {
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
        <span>Min and Max</span>
        <span className='py-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14.975q-.2 0-.388-.075t-.312-.2l-4.6-4.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062Z"/></svg></span>
      </span>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
       className='mt-8'
      >
    <div className=' px-2'>
        <div className='px-1'>100000-300000</div>
        <div className='px-1'>300001-600000</div>
        <div className='px-1'>600000-900000</div>
        <div className='px-1'>900001-1000000</div>
        <div className='px-1'>1000000-1200000</div>
       
    </div>
      </Menu>
    </div>
  );
}