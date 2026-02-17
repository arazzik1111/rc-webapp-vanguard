import { useEffect, useState } from 'react';
import { of } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';

export type DynamicRequestOpts = {
  shouldRequest?: boolean;
};

// Dynamically import all bundled assets (eager: false)
const assets = (import.meta.env.WORDPRESS_BUILD as boolean)
  ? {
      // For WordPress, include only icons and loading assets
      ...import.meta.glob('./assets/icons/**/*.*', { eager: false, query: '?url', import: 'default' }),
      ...import.meta.glob('./assets/**/loading.gif', { eager: false, query: '?url', import: 'default' }),
    }
  : import.meta.glob('./assets/**/*.*', { eager: false, query: '?url', import: 'default' });

// Global cache and observable map
const cache = new Map<string, string>();
const observables = new Map<string, any>();

async function getAssetUrl(assetName: string): Promise<string | undefined> {
  const assetKey = Object.keys(assets).find((key) => key.endsWith(`/assets/${assetName}`));
  if (!assetKey) return undefined;

  // Dynamically load asset
  const assetLoader = assets[assetKey];
  return assetLoader ? ((await assetLoader()) as string) : undefined;
}

function fetchSvgIcon(path: string) {
  if (!observables.has(path)) {
    const observable = of(path).pipe(
      catchError(() => of('')),
      shareReplay(1),
    );
    //console.log("FETCHING PATH:", path);
    observables.set(path, observable);
  }
  return observables.get(path);
}

export type SVGObject = {
  error: Error | null;
  loading: boolean;
  SvgIcon: string | '';
};

export const useDynamicImport = (assetName: string, opts: DynamicRequestOpts = { shouldRequest: true }): SVGObject => {
  const [state, setState] = useState<SVGObject>({
    error: null,
    loading: true,
    SvgIcon: '',
  });

  useEffect(() => {
    if (!opts.shouldRequest) return;
    if (assetName.includes('assets/ads')) {
      // Adjust asset name for ads to avoid errors
      assetName = assetName.replace('assets/ads', 'assets/ads_');
    }

    getAssetUrl(assetName)
      .then((path) => {
        if (!path) {
          console.error(`useDynamicImport: Asset not found: ${assetName}`);
          setState({ error: new Error('Asset not found'), loading: false, SvgIcon: '' });
          return;
        }

        const subscription = fetchSvgIcon(path).subscribe({
          next: (svgUrl: string) => {
            //console.log("SVG URL FETCHED:", svgUrl);
            cache.set(assetName, svgUrl);
            setState({ error: null, loading: false, SvgIcon: svgUrl });
          },
          error: (err) => {
            console.error(`useDynamicImport: Failed to load asset: ${assetName}`, err);
            setState({ error: new Error('Failed to load asset'), loading: false, SvgIcon: '' });
          },
        });

        return () => subscription.unsubscribe();
      })
      .catch((err) => {
        console.error(`useDynamicImport: Failed to get asset URL: ${assetName}`, err);
        setState({ error: new Error('Failed to load asset'), loading: false, SvgIcon: '' });
      });
  }, [assetName, opts.shouldRequest]);

  return state;
};
