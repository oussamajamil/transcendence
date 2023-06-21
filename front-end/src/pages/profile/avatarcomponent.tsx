import React from 'react'
import menone from '../../assets/profile.svg'

const LevelAvatar = () => {
  const statut = {
    level: 11,
    username: 'Momayaz',
    rank: 'Wooden IV'
  };

  return (
    <div className=' flex flex-col items-center justify-center w-[100%] h-[60%]  '>
      <div className="">
        <span className=' font-lilita-one text-[#353E6C] text-[2rem] ' >LVL {statut.level}</span>
      </div>
      <div className="avatar w-[15rem] h-[15rem] rounded-[100%]  ">
        <img className=' h-[100%] w-[100%] brightness-108 pointer-events-none ' src={menone} alt="avatar" />
      </div>
      <div className="labels flex items-center justify-center gap-8 ">
        <div className="name flex flex-col gap-3 ">
          <p className=' font-comfortaa text-[#BACCFD] text-[1.5rem] font-black ' >USERNAME</p>
          <span className=' font-Poppins text-black text-[1.2rem] font-black ' >{statut.username}</span>
        </div>
        <div className="rank flex flex-col gap-3 ">
          <p className=' font-comfortaa text-[#BACCFD] text-[1.5rem] font-black ' >RANK</p>
          <span className=' font-Poppins text-black text-[1.2rem] font-black ' >{statut.rank}</span>
        </div>
      </div>
    </div>
  )
}

export default LevelAvatar
