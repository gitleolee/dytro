import React from 'react';
import PlayerList from './PlayerList';
import MyRole from './MyRole';
import DayDisplay from './DayDisplay';

export default function Mafia() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <MyRole role="murderer" />
      </div>
      <PlayerList
        name="DytroCodes"
        imageId="images/profile.png"
        role="murderer"
        shown={true}
        isDead={false}
        isMyself={true}
      />
      <PlayerList
        name="User"
        imageId="images/default.png"
        role="innocent"
        shown={true}
        isDead={true}
        isMyself={false}
      />
      <PlayerList
        name="Dytro Network"
        imageId="images/default.png"
        role="innocent"
        shown={true}
        isDead={true}
        isMyself={false}
      />
      <PlayerList
        name="Creeper"
        imageId="images/default.png"
        role="detective"
        shown={true}
        isDead={true}
        isMyself={false}
      />
      <PlayerList
        name="littlekoala"
        imageId="images/default.png"
        role="doctor"
        shown={true}
        isDead={true}
        isMyself={false}
      />
      <PlayerList
        name="miguelteacher"
        imageId="images/default.png"
        role="blameshifter"
        shown={false}
        isDead={false}
        isMyself={false}
      />
      <PlayerList
        name="Mikey"
        imageId="images/default.png"
        role="vigilante"
        shown={false}
        isDead={false}
        isMyself={false}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'right'
        }}
      >
        <DayDisplay isNight turn="Murderer" day={10} />
      </div>
    </div>
  );
}
