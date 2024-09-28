import React, { useState } from 'react';
import { MdOutlineAddBox } from "react-icons/md";
import { IoFolder } from "react-icons/io5";

function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [folderName, setFolderName] = useState('');
  const [fileFormat, setFileFormat] = useState('Text');
  const [folders, setFolders] = useState([]);

  const handleAddClick = () => {
    setModalOpen(true);
  };

  const handleOk = () => {
    setFolders([...folders, { name: folderName, type: fileFormat }]);
    setModalOpen(false);
    setFolderName('');
    setFileFormat('Text');
  };

  const handleCancel = () => {
    setModalOpen(false);
    setFolderName('');
    setFileFormat('Text');
  };

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>FOLDER</h3>
        <div className='add-icon-container'>
          <MdOutlineAddBox 
            className="add-folder-icon" 
            onClick={handleAddClick} 
            style={{ cursor: 'pointer', fontSize: '24px' }} 
            title="Add Folder" 
          />
        </div>
      </div>

      <div className='main-cards'>
        {folders.map((folder, index) => (
          <div className='card' key={index}>
            <div className='card-inner'>
              <h3>{folder.name} ({folder.type})</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <h1 className="title">Configure Folder</h1>
            <div className="input-group">
              <IoFolder className="text-gray-700 text-xl" />
              <input
                type="text"
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
                className="input"
                placeholder="Folder Name"
              />
            </div>
            <div className="input-group">
              <label className="text-gray-700 text-xl" htmlFor="fileFormat">File Format:</label>
              <select
                id="fileFormat"
                value={fileFormat}
                onChange={(e) => setFileFormat(e.target.value)}
                className="input"
              >
                <option value="Text">Text</option>
                <option value="PDF">PDF</option>
                <option value="CSV">CSV</option>
              </select>
            </div>
            <div className="button-group">
              <button className="button button-ok" onClick={handleOk}>
                OK
              </button>
              <button className="button button-cancel" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Home;
