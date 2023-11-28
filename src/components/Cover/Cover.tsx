import React, { FC } from 'react';
import style from './Cover.module.scss'
import Letter3d from '../Letter3d/Letter3d';
import Image from 'next/image';

const Cover: FC = () => {

  return (
    <section className={style.cover}>
      <div className={style.cover_profile}>
        <Letter3d title={'<Eri'} classNameProps={style.cover_profile_name_left} />
        <Image
          src={'/asset/Perfil.webp'}
          alt='profile_image'
          height={500}
          width={500}
          className={style.cover_profile_image}
        />
        <Letter3d title={'ck/>'} classNameProps={style.cover_profile_name_rigth} />
        <p className={style.cover_profile_text_background}>
          <span>
            {`Const App = () =>(`}
          </span>
          <span>
            {`<div className ="react-code">`}
          </span>
          <span>
            {`Hello, World!`}
          </span>
          <span>
            {`<div>`}
          </span>
        </p>
      </div>
      <div>

      </div>

    </section>
  );
};

export default Cover;