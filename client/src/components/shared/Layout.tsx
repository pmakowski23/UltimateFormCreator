import { FC } from 'react';

interface ILayout {
  children: React.ReactChild;
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className="bg-theme-main h-screen p-10">
      <div className="bg-theme-secondary h-full">{children}</div>
    </div>
  );
};
