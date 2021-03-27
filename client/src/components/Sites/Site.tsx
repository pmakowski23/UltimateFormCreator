import { FC } from 'react';
import { Paragraph } from '../styles/Paragraph';

const requestImageFile = require.context('../../images', true, /^\.\/.*\.svg$/);

interface ISite {
  img: string;
  siteName: string;
}

export const Site: FC<ISite> = ({ img, siteName }) => {
  const imgUrl = `./${img}.svg`;

  return (
    <div className="flex flex-col items-center justify-center h-48 w-48 bg-theme-button rounded-xl shadow-lg">
      <img className="h-36 w-36" src={requestImageFile(imgUrl).default} alt={img}></img>
      <Paragraph>{siteName}</Paragraph>
    </div>
  );
};
