import React, { useState } from 'react';
import { FaFileAlt, FaFilePdf, FaFileCsv } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { MdOutlineAddBox } from "react-icons/md";
import './Designer.css';

function Sidebar() {
  const navigate = useNavigate();
  const [activeFormat, setActiveFormat] = useState('');

  // Function to handle format selection for filtering
  const selectFormat = (type) => {
    setActiveFormat(type); // Set the clicked report format as active
    // Implement the logic to filter the folder based on the selected format
    console.log(`Filtering for ${type} format`); // Replace this with actual filtering logic
  };

  // Function to navigate to designer for creating a report
  const handleAddClick = (type) => {
    navigate('/designer'); // Navigate to Designer page for adding report
  };

  return (
    <>
      <div className="logo">
      <img src="/logo.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a
              href="#"
              className={activeFormat === 'TEXT' ? 'active' : ''}
              onClick={() => selectFormat('TEXT')}
              onKeyPress={(e) => e.key === 'Enter' && selectFormat('TEXT')} // Accessibility
            >
              <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '40px' }}>
                <FaFileAlt className="nav-icon" />
                <span className="nav-item">TEXT</span>
                <MdOutlineAddBox className="add-report-icon" title="create text report" onClick={() => handleAddClick('TEXT')} />
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeFormat === 'CSV' ? 'active' : ''}
              onClick={() => selectFormat('CSV')}
              onKeyPress={(e) => e.key === 'Enter' && selectFormat('CSV')} // Accessibility
            >
              <div style={{ display: 'flex', alignItems: 'center', width: '100%',height: '40px' }}>
                <FaFileCsv className="nav-icon" />
                <span className="nav-item">CSV</span>
                <MdOutlineAddBox className="add-report-icon" title="create CSV report" onClick={() => handleAddClick('CSV')} />
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeFormat === 'PDF' ? 'active' : ''}
              onClick={() => selectFormat('PDF')}
              onKeyPress={(e) => e.key === 'Enter' && selectFormat('PDF')} // Accessibility
            >
              <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '40px' }}>
                <FaFilePdf className="nav-icon" />
                <span className="nav-item">PDF</span>
                <MdOutlineAddBox className="add-report-icon" title="create text report" onClick={() => handleAddClick('PDF')} />
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;