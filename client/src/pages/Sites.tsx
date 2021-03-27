import { FC } from 'react';
import { Layout } from '../components/shared/Layout';
import { Site } from '../components/Sites/Site';
import { Heading } from '../components/styles/Heading';

export const Sites: FC = () => {
  return (
    <Layout>
      <Heading>Your Sites</Heading>
      <Site img="atom" siteName="My new Site" />
    </Layout>
  );
};
