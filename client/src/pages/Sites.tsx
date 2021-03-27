import { FC } from 'react';
import { Layout } from '../components/shared/Layout';
import { Site } from '../components/Sites/Site';

export const Sites: FC = () => {
  return (
    <Layout>
      <p className="font-sans text-white">Your Sites</p>
      <Site img="atom" siteName="My new Site" />
    </Layout>
  );
};
