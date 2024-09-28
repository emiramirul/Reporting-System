import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdFiberNew } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa";
import { MdSaveAs } from "react-icons/md";
import { VscRunCoverage } from "react-icons/vsc";

function Designer() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('query');
  const [activeMessageTab, setActiveMessageTab] = useState('result');

  return (
    <div className="designer-page">
      <button onClick={() => navigate('/')} className="back-button">
        ← Back 
      </button>

      <div className="designer-main-container">
        <div className="sidebar">
          <h4>Dimension:</h4>
          <input type="text" placeholder="Search" className="search-input" />
          <h4>Measure:</h4>
          <input type="text" placeholder="Search" className="search-input" />
        </div>

        <div className="work-area">
  <div className="tab-bar">
    <div className="tabs">
      <button 
        className={`tab ${activeTab === 'query' ? 'active' : ''}`} 
        onClick={() => setActiveTab('query')}
      >
        Query
      </button>
      <button 
        className={`tab ${activeTab === 'template' ? 'active' : ''}`} 
        onClick={() => setActiveTab('template')}
      >
        Template
      </button>
      <button 
        className={`tab ${activeTab === 'workflow' ? 'active' : ''}`} 
        onClick={() => setActiveTab('workflow')}
      >
        Workflow
      </button>
      <button 
        className={`tab ${activeTab === 'report' ? 'active' : ''}`} 
        onClick={() => setActiveTab('report')}
      >
        Report Properties
      </button>
    </div>

    <div className="icon-container">
      <MdFiberNew className="icon" title="New Report" />
      <FaFolderOpen className="icon" title="Open" />
      <MdSaveAs className="icon" title="Save As" />
      <VscRunCoverage className="icon" title="Run " />
    </div>
  </div>

          <div className="work-content">
            {activeTab === 'query' && (
              <div className="query-section">
                <textarea
                  className="query-input"
                  placeholder="Write your query here..."
                />
                <div class="button-container">
                <button className="run-query-btn">Run Query</button>
                </div>
              </div>
            )}

            <div className="tab-bar2">
              <button 
                className={`tab ${activeMessageTab === 'result' ? 'active' : ''}`} 
                onClick={() => setActiveMessageTab('result')}
              >
                Result
              </button>
              <button 
                className={`tab ${activeMessageTab === 'message' ? 'active' : ''}`} 
                onClick={() => setActiveMessageTab('message')}
              >
                Message
              </button>
            </div>

            <div className="result-message-section">
              <div className="result-section">
                {activeMessageTab === 'result' ? (
                  <p>Your query results will appear here.</p>
                ) : (
                  <p>No messages at the moment.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Designer;
