import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import MissionsView from './components/MissionsView'
import './App.css'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activePage, setActivePage] = useState('l4-missions')

  return (
    <div className="app">
      <Sidebar 
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        activePage={activePage}
        setActivePage={setActivePage}
      />
      
      <main className={`main-content ${!isSidebarOpen ? 'expanded' : ''}`}>
        <div className="content-container">
          <h1 className="page-title">
            {activePage === 'home' && 'Overview'}
            {activePage === 'l4-missions' && 'Level 4 Missions'}
            {activePage === 'skills' && 'Skill Management'}
            {activePage === 'assets' && 'Asset Browser'}
            {activePage === 'market' && 'Market Analysis'}
          </h1>
          
          <div className="content-card">
            {activePage === 'l4-missions' && <MissionsView />}
            
            {activePage === 'home' && (
              <div className="welcome-section">
                <p className="greeting">Welcome to Neks' EVE Client</p>
                <div className="info-grid">
                  <div className="info-panel">
                    <div className="panel-label">MISSION REFERENCE</div>
                    <div className="panel-value">L4 Missions & Burners</div>
                  </div>
                  <div className="info-panel">
                    <div className="panel-label">DATA SOURCE</div>
                    <div className="panel-value">EVE University Wiki</div>
                  </div>
                  <div className="info-panel">
                    <div className="panel-label">APP STATUS</div>
                    <div className="panel-value active">Online</div>
                  </div>
                </div>
              </div>
            )}
            
            {(activePage === 'skills' || activePage === 'assets' || activePage === 'market') && (
              <div className="placeholder-screen">
                <div className="placeholder-icon"></div>
                <p>Coming Soon</p>
                <span>Additional features in development</span>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App