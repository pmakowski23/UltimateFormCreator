import { FC, useEffect, useState } from 'react';
import { Logo } from '../components/shared/Logo';
import { Site } from '../components/Sites/Site';
import { Heading } from '../components/shared/Heading';
import { css } from '@emotion/css';

interface ISite {
  _id: string;
  user: string;
  name: string;
  url: string;
  image: string;
}

export const Sites: FC = () => {
  const InitialState = { image: 'atom' } as ISite;
  const [sites, setSites] = useState([InitialState]);

  const isLastSite = (site: ISite) => site === sites[sites.length - 1];

  useEffect(() => {
    setSites([{ _id: '1', name: 'Your website', user: 'Roman', url: '', image: 'fox' }]);
  }, []);

  return (
    <div
      className={css({
        height: '100%',
        padding: '75px',
      })}
    >
      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: '3fr 1fr',
          gridTemplateRows: 'calc(100vh - 230px)',
        })}
      >
        <div className={css({ borderRight: '1px solid #4CAF50' })}>
          <div className={css({ margin: '15px' })}>
            <Heading>Welcome {sites[0].user}</Heading>
            <Heading>Your Sites</Heading>
          </div>
          <div className={css({ display: 'flex' })}>
            {sites.length
              ? sites.map((site) => {
                  // TODO: Add links with url.
                  return (
                    <>
                      <div className={css({ margin: '15px' })} key={site._id}>
                        <Site img={site.image} siteName={site.name} />
                      </div>
                      {isLastSite(site) && (
                        <div className={css({ margin: '15px' })} key="new">
                          <Site img="plus" />
                        </div>
                      )}
                    </>
                  );
                })
              : null}
          </div>
        </div>
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          })}
        >
          <Logo />
        </div>
      </div>
    </div>
  );
};
