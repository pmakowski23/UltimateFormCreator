import { css } from '@emotion/css';
import { FC } from 'react';
import next from '../../images/next.svg';

export const GoButton: FC = () => {
  return (
    <div
      className={css({
        backgroundColor: '#4CAF50',
        borderRadius: '50%',
        width: '75px',
        height: '75px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      })}
    >
      <img src={next}></img>
    </div>
  );
};
