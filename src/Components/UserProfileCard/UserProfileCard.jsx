import React from 'react'
import '../UserProfileCard/UserProfileCard.css'
import profile_icon from '../Assets/glowgirlguru.jpeg'

export const UserProfileCard = () => {
  return (
    <div className='upc'>
        <div className='gradient'></div>
        <div className='profile-down'>
            <img src={profile_icon} alt="" />
            <div className='profile-name'>Chioma Uma</div>
            <div className='profile-age'>25 </div>
            <div className='profile-location'>London, UK</div>

        </div>
        <div className='profile-button'><a href="https://www.linkedin.com/in/chiomawrites/">Follow</a></div>
    </div>
  )
}
