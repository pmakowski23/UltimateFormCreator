import { css } from '@emotion/css';
import { FC } from 'react';
import next from '../../images/next.svg';

export const GoButton: FC = () => {
  return (
    <div className={css({ width: '75px', height: '75px', display: 'block' })}>
      <div
        className={css({
          width: '75px',
          height: '75px',
          borderRadius: '50%',
          ':hover': {
            backgroundColor: 'black',
            opacity: '.15',
            cursor: 'pointer',
          },
          position: 'absolute',
          zIndex: 10,
        })}
      ></div>
      <div
        className={css({
          width: '75px',
          height: '75px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <img className={css({ width: '40px', height: '40px', zIndex: 6 })} src={next}></img>
      </div>
      <div
        className={css({
          backgroundColor: '#4CAF50',
          borderRadius: '50%',
          width: '75px',
          height: '75px',
          margin: '-75px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          zIndex: 5,
        })}
      ></div>
    </div>
  );
};
