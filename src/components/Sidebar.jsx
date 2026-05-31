import React from 'react'
import './Sidebar.css'

function Sidebar({ isOpen, setIsOpen, activePage, setActivePage }) {
  const menuItems = [
    { id: 'home', label: 'OVERVIEW' },
    { id: 'l4-missions', label: 'L4 MISSIONS' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'assets', label: 'ASSETS' },
    { id: 'market', label: 'MARKET' }
  ]

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="logo-area">
            {isOpen ? (
              <div className="logo-full">
                <span className="logo-primary">NEKS</span>
                <span className="logo-secondary">EVE CLIENT</span>
              </div>
            ) : (
              <div className="logo-mini">N</div>
            )}
          </div>
          <button 
            className="toggle-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="toggle-icon">{isOpen ? '‹' : '›'}</span>
          </button>
        </div>

        <nav className="navigation">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activePage === item.id ? 'active' : ''}`}
              onClick={() => setActivePage(item.id)}
            >
              <span className="nav-marker"></span>
              {isOpen && <span className="nav-text">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-status">
          <div className="status-line">
            <span className="status-dot"></span>
            {isOpen && <span className="status-label">MISSION REFERENCE TOOL</span>}
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="sidebar-backdrop" onClick={() => setIsOpen(false)} />
      )}
    </>
  )
}

export default Sidebar