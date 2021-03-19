import { Close } from '@material-ui/icons';
import React, { useState } from 'react';
import CustomButton from 'components/Button/CustomButton';
import './CustomDrawer.scss';

const CustomDrawer = ({ children, btnText, label, icon, color }) => {
  const [drawer, setDrawer] = useState(false);

  /* Handle Click Outside */
  const handleClickOutside = e => {
    const bgElement = document.querySelector('.c-drawer-bg');
    const element = document.querySelector('.c-drawer-container');
    if (bgElement === e.target && element !== e.target) {
      setDrawer(false);
    }
  };

  return (
    <>
      <CustomButton color={color} onClick={() => setDrawer(true)}>
        {icon && icon}
        {btnText}
      </CustomButton>
      {drawer && (
        <div className="c-drawer-bg" onClick={handleClickOutside}>
          <div className="c-drawer-container">
            <div className="c-drawer-head">
              <Close onClick={() => setDrawer(false)} /> {label}
            </div>
            <div className="c-drawer-children">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomDrawer;
