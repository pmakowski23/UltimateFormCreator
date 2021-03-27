import { css } from '@emotion/css';
import { FC } from 'react';
import { Paragraph } from '../styles/Paragraph';

const requestImageFile = require.context('../../images', true, /^\.\/.*\.svg$/);

interface ISite {
  img: string;
  siteName?: string;
}

export const Site: FC<ISite> = ({ img, siteName }) => {
  const imgUrl = `./${img}.svg`;

  return (
    <div
      className={css({
        backgroundColor: '#2B2B34',
        height: '240px',
        width: '240px',
        borderRadius: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      })}
    >
      <img className={css({ height: '170px' })} src={requestImageFile(imgUrl).default} alt={img}></img>
      <Paragraph>{siteName ? siteName : ''}</Paragraph>
    </div>
  );
};
