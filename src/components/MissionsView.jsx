import React, { useState } from 'react'
import './MissionsView.css'

function MissionsView() {
  const [searchTerm, setSearchTerm] = useState('')
  const [damageFilter, setDamageFilter] = useState('all')
  const [activeTab, setActiveTab] = useState('missions')
  const [expandedMission, setExpandedMission] = useState(null)

  const missionsData = [
    { 
      name: 'Enemies abound', 
      guide: '—', 
      ammo: '—', 
      ab: '—',
      loot: '—',
      bounty: '—',
      salvage: '—',
      estTime: '—'
    },
    { 
      name: 'Silence the informant', 
      guide: 'drop mtu at start, kill elite drones for loot', 
      ammo: 'EM/KIN', 
      ab: '—',
      loot: '—',
      bounty: '—',
      salvage: '—',
      estTime: '—'
    },
    { 
      name: 'Angel extravaganza', 
      guide: 'Pocket 1: Kill Scanner Post + initial ships + wave 1. Pocket 2: Kill all ships. Pocket 3: Kill Battleship, ignore everything else. Pocket 4: Kill Silo (bookmark can) + Radio Telescope, then all ships. Pocket 5: Kill Battleships by highest bounty to trigger spawns', 
      ammo: 'EXP', 
      ab: '—',
      loot: '—',
      bounty: '—',
      salvage: '—',
      estTime: '—'
    },
    { 
      name: 'gone berserk', 
      guide: 'Kill everything', 
      ammo: 'KIN', 
      ab: 'NO',
      loot: '—',
      bounty: '—',
      salvage: '—',
      estTime: '—'
    },
    { 
      name: 'Damsel in distress', 
      guide: 'Destroy casino, kill rest, loot named NPC, destroy station', 
      ammo: 'KIN', 
      ab: 'NO',
      loot: '—',
      bounty: '—',
      salvage: '—',
      estTime: '—'
    },
    { 
      name: 'The Right Hand of Zazzmatazz', 
      guide: 'Blitz: Kill Zor, destroy Outpost Headquarters and warp out', 
      ammo: 'KIN', 
      ab: 'NO',
      loot: '—',
      bounty: '—',
      salvage: '—',
      estTime: '—'
    },
    { 
      name: 'The assault', 
      guide: 'Skip first gate, kill everything in second', 
      ammo: 'KIN', 
      ab: 'YES',
      loot: '—',
      bounty: '—',
      salvage: '—',
      estTime: '—'
    },
    { 
      name: 'The Rogue Slave Trader FAST', 
      guide: 'Destroy slave pen, take prisoner port out', 
      ammo: 'EM', 
      ab: 'NO',
      loot: '—',
      bounty: '—',
      salvage: '—',
      estTime: '—'
    },
    { 
      name: 'Stop the Thief FAST', 
      guide: 'Align home, kill close overlord, kill shadow, warp out', 
      ammo: 'EXP', 
      ab: 'NO',
      loot: '—',
      bounty: '—',
      salvage: '—',
      estTime: '—'
    },
    { 
      name: 'Cargo delivery FAST', 
      guide: 'Take Garmuri, just get item no fighting', 
      ammo: '—', 
      ab: 'YES',
      loot: '—',
      bounty: '—',
      salvage: '—',
      estTime: '—'
    }
  ]

  const burnersData = [
    { name: 'Enyo', damage: 'EXP', scanner: 'Magnetometric' },
    { name: 'Hawk', damage: 'EM', scanner: 'Gravimetric' },
    { name: 'Jaguar', damage: 'Kin', scanner: 'Ladar' },
    { name: 'Vengeance', damage: 'THER', scanner: 'Radar' }
  ]

  const filteredMissions = missionsData.filter(mission => 
    mission.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (damageFilter === 'all' || mission.ammo === damageFilter || (damageFilter === 'none' && mission.ammo === '—'))
  )

  const filteredBurners = burnersData.filter(burner =>
    burner.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (damageFilter === 'all' || burner.damage === damageFilter)
  )

  const toggleMissionExpand = (index) => {
    if (expandedMission === index) {
      setExpandedMission(null)
    } else {
      setExpandedMission(index)
    }
  }

  return (
    <div className="missions-container">
      <div className="missions-header">
        <div className="tab-bar">
          <button 
            className={`tab ${activeTab === 'missions' ? 'active' : ''}`}
            onClick={() => setActiveTab('missions')}
          >
            STANDARD MISSIONS ({missionsData.length})
          </button>
          <button 
            className={`tab ${activeTab === 'burners' ? 'active' : ''}`}
            onClick={() => setActiveTab('burners')}
          >
            TEAM BURNERS ({burnersData.length})
          </button>
        </div>

        <div className="controls-bar">
          <div className="search-area">
            <input
              type="text"
              placeholder="SEARCH"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-area">
            <button 
              className={`filter-btn ${damageFilter === 'all' ? 'active' : ''}`}
              onClick={() => setDamageFilter('all')}
            >
              ALL
            </button>
            <button 
              className={`filter-btn ${damageFilter === 'EM' ? 'active' : ''}`}
              onClick={() => setDamageFilter('EM')}
            >
              EM
            </button>
            <button 
              className={`filter-btn ${damageFilter === 'KIN' ? 'active' : ''}`}
              onClick={() => setDamageFilter('KIN')}
            >
              KIN
            </button>
            <button 
              className={`filter-btn ${damageFilter === 'EXP' ? 'active' : ''}`}
              onClick={() => setDamageFilter('EXP')}
            >
              EXP
            </button>
            <button 
              className={`filter-btn ${damageFilter === 'THER' ? 'active' : ''}`}
              onClick={() => setDamageFilter('THER')}
            >
              THER
            </button>
            {activeTab === 'missions' && (
              <button 
                className={`filter-btn ${damageFilter === 'none' ? 'active' : ''}`}
                onClick={() => setDamageFilter('none')}
              >
                NO AMMO
              </button>
            )}
          </div>
        </div>
      </div>

      {activeTab === 'missions' && (
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>MISSION NAME</th>
                <th>GUIDE</th>
                <th>AMMO</th>
                <th>AB</th>
                <th>PAYOUT</th>
              </tr>
            </thead>
            <tbody>
              {filteredMissions.map((mission, index) => (
                <React.Fragment key={index}>
                  <tr className="mission-row" onClick={() => toggleMissionExpand(index)}>
                    <td className="mission-name">{mission.name}</td>
                    <td className="mission-guide">{mission.guide}</td>
                    <td className={`damage-badge ${getAmmoClass(mission.ammo)}`}>
                      {mission.ammo}
                    </td>
                    <td className="ab-status">
                      {mission.ab === 'YES' ? (
                        <span className="ab-yes">YES</span>
                      ) : mission.ab === 'NO' ? (
                        <span className="ab-no">NO</span>
                      ) : (
                        <span className="ab-na">—</span>
                      )}
                    </td>
                    <td className="expand-indicator">
                      <span className="expand-icon">{expandedMission === index ? '▼' : '▶'}</span>
                    </td>
                  </tr>
                  {expandedMission === index && (
                    <tr className="payout-row">
                      <td colSpan="5">
                        <div className="payout-container">
                          <div className="payout-grid">
                            <div className="payout-item">
                              <div className="payout-label">LOOT</div>
                              <div className="payout-value">{mission.loot || '—'}</div>
                            </div>
                            <div className="payout-item">
                              <div className="payout-label">BOUNTY</div>
                              <div className="payout-value">{mission.bounty || '—'}</div>
                            </div>
                            <div className="payout-item">
                              <div className="payout-label">SALVAGE</div>
                              <div className="payout-value">{mission.salvage || '—'}</div>
                            </div>
                            <div className="payout-item">
                              <div className="payout-label">EST. TIME</div>
                              <div className="payout-value">{mission.estTime || '—'}</div>
                            </div>
                          </div>
                          <div className="payout-note">
                            <span>Click any cell to edit values</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
              {filteredMissions.length === 0 && (
                <tr>
                  <td colSpan="5" className="no-results">
                    No missions found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'burners' && (
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>TEAM BURNER</th>
                <th>DAMAGE TYPE</th>
                <th>SCANNER TYPE</th>
              </tr>
            </thead>
            <tbody>
              {filteredBurners.map((burner, index) => (
                <tr key={index} className="burner-row">
                  <td className="burner-name">{burner.name}</td>
                  <td className={`damage-badge ${burner.damage.toLowerCase()}`}>
                    {burner.damage}
                  </td>
                  <td className="scanner-type">{burner.scanner}</td>
                </tr>
              ))}
              {filteredBurners.length === 0 && (
                <tr>
                  <td colSpan="3" className="no-results">
                    No burners found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* FOOTER SECTION */}
      <div className="missions-footer">
        <div className="footer-content">
          <div className="footer-text">
            <span className="footer-label">DATA SOURCE</span>
            <a 
              href="https://wiki.eveuniversity.org/Mission_reports" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              EVE University Mission Reports
            </a>
          </div>
          <div className="footer-note">
            <span>Payout values and completion times are user-contributed. Edit them in the app data.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function getAmmoClass(ammo) {
  if (!ammo || ammo === '—') return 'none'
  if (ammo.includes('/')) return 'mixed'
  return ammo.toLowerCase()
}

export default MissionsView