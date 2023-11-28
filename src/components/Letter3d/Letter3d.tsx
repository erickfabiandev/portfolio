import React, { FC } from 'react';
import style from './Letter3d.module.scss'

interface Letter3dProps {
  title: string;
  classNameProps?: string
}

const Letter3d: FC<Letter3dProps> = ({ title, classNameProps }) => {

  const titleArray = title.split('')
  return (
    <div className={`${style.container_title} ${classNameProps} `}>
      {
        titleArray.map((character, index) =>
          <span key={index} className={style.letter}>
            {character}
          </span >
        )
      }
    </div>
  );
};

export default Letter3d;