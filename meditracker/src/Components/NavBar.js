import React from 'react'
import './NavBar.css'

export default function NavBar() {
  return (
    <div>
        <div className="NavBar-Cont">
            <div className="Logo-Bar">
                <div className="Logo">Logo Here</div>
                <div className="User-Avatar">Hi, User</div>
                
            </div>
            <div className="NavBar">
                <div className="Nav-Button">
                    Dashboard
                </div>

            </div>
        </div>
    </div>
  )
}
