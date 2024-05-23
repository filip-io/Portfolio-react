import { useState } from 'react';

const HamMenu = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="ham-menu">
      <label htmlFor="nav-toggle">
        <i className="fa-solid fa-bars" onClick={handleToggle} />
      </label>
      <input type="checkbox" id="nav-toggle" checked={isChecked} onChange={handleToggle} />
    </div>
  );
};

export default HamMenu;