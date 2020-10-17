import React from 'react';
import './stylesheet.scss';
import Blueprint3D from '../Blueprint3D';

function OwnerDashboard() {
  return (
    <div className="OwnerDashboard">
      Owner Dashboard
      <Blueprint3D floor={false} />
      <button>
        Toggle
      </button>
    </div>
  );
}

export default OwnerDashboard;
