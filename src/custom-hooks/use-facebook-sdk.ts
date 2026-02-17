import { initFacebookSdk } from '@helpers/init-facebook-sdk';
import { facebookService } from '@services/facebook.service';
import { useEffect, useState } from 'react';

export const useFacebookSdk = () => {
  const [facebookLoaded, setFacebookLoaded] = useState(false);

  useEffect(() => {
    initFacebookSdk().then(
      () => {
        console.info('Facebook SDK | Initialized Successfully');
        setFacebookLoaded(true);
      },
      (error) => {
        console.error('Facebook SDK | Error on initialization', error);
        setFacebookLoaded(false);
      },
    );
  }, []);

  return {
    facebookLoaded: facebookLoaded,
    facebookService: facebookService,
  };
};
