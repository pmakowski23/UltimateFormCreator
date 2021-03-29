import { css } from '@emotion/css';
import { FC } from 'react';

interface IParagraph {
  children: string | string[];
}

export const Paragraph: FC<IParagraph> = ({ children }) => {
  return (
    <h1
      className={css({
        textTransform: 'uppercase',
        color: 'white',
        fontFamily: 'Rosario',
        fontWeight: 700,
        fontSize: '18px',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      })}
    >
      {children}
    </h1>
  );
};
