// src/services/googleSheets.js
// No API key needed - works with public Google Sheets

export async function fetchPublicSheet(sheetId, sheetName) {
  // This URL works for ANY public Google Sheet
  const url = `https://docs.google.com/spreadsheets/d/1lkk_DWvZ7gic_QuqoZSlr4YPyYcw_xm8VhNbTnR-hwI`
  
  try {
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }
    
    const csvText = await response.text()
    
    // Parse CSV
    const lines = csvText.split('\n')
    const headers = lines[0].split(',').map(h => h.replace(/"/g, '').trim().toLowerCase())
    
    const rows = lines.slice(1).filter(line => line.trim())
    const data = rows.map(line => {
      // Handle quoted values properly
      const values = []
      let current = ''
      let inQuotes = false
      
      for (let i = 0; i < line.length; i++) {
        const char = line[i]
        if (char === '"') {
          inQuotes = !inQuotes
        } else if (char === ',' && !inQuotes) {
          values.push(current.trim())
          current = ''
        } else {
          current += char
        }
      }
      values.push(current.trim())
      
      const obj = {}
      headers.forEach((header, idx) => {
        let value = values[idx] || ''
        value = value.replace(/^"|"$/g, '') // Remove surrounding quotes
        obj[header] = value
      })
      return obj
    })
    
    return data
  } catch (error) {
    console.error('Google Sheets fetch error:', error)
    throw error
  }
}

// Fallback with hardcoded data for testing
export function getFallbackData() {
  return {
    missions: [
      { name: 'Enemies abound', guide: '—', ammo: '—', ab: '—' },
      { name: 'Silence the informant', guide: 'drop mtu at start, kill elite drones for loot', ammo: 'EM/KIN', ab: '—' },
      { name: 'Angel extravaganza', guide: 'Pocket 1: Kill Scanner Post + initial ships + wave 1. Pocket 2: Kill all ships. Pocket 3: Kill Battleship, ignore everything else. Pocket 4: Kill Silo (bookmark can) + Radio Telescope, then all ships. Pocket 5: Kill Battleships by highest bounty to trigger spawns', ammo: 'EXP', ab: '—' },
      { name: 'gone berserk', guide: 'Kill everything', ammo: 'KIN', ab: 'NO' },
      { name: 'Damsel in distress', guide: 'Destroy casino, kill rest, loot named NPC, destroy station', ammo: 'KIN', ab: 'NO' },
      { name: 'The Right Hand of Zazzmatazz', guide: 'Blitz: Kill Zor, destroy Outpost Headquarters and warp out', ammo: 'KIN', ab: 'NO' },
      { name: 'The assault', guide: 'Skip first gate, kill everything in second', ammo: 'KIN', ab: 'YES' },
      { name: 'The Rogue Slave Trader FAST', guide: 'Destroy slave pen, take prisoner port out', ammo: 'EM', ab: 'NO' },
      { name: 'Stop the Thief FAST', guide: 'Align home, kill close overlord, kill shadow, warp out', ammo: 'EXP', ab: 'NO' },
      { name: 'Cargo delivery FAST', guide: 'Take Garmuri, just get item no fighting', ammo: '—', ab: 'YES' }
    ],
    burners: [
      { name: 'Enyo', damage: 'EXP', scanner: 'Magnetometric' },
      { name: 'Hawk', damage: 'EM', scanner: 'Gravimetric' },
      { name: 'Jaguar', damage: 'Kin', scanner: 'Ladar' },
      { name: 'Vengeance', damage: 'THER', scanner: 'Radar' }
    ]
  }
}