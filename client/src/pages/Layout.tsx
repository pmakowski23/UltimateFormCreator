import { FunctionComponent } from 'react';

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className="bg-theme-main h-screen p-10">
      <div className="bg-theme-secondary h-full">{children}</div>
    </div>
  );
};
