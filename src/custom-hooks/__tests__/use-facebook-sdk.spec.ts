import { useFacebookSdk } from '@custom-hooks/use-facebook-sdk';
import { wait } from '@test-utils/test-utils';
import { renderHook } from '@testing-library/react';

describe('tests of hook use facebook sdk ', () => {
  it('should not be loaded at initial call', () => {
    const { result } = renderHook(() => useFacebookSdk());
    const { facebookLoaded } = result.current;
    expect(facebookLoaded).toBe(false);
  });

  it('should not be loaded after 200 ms', async () => {
    const { result } = renderHook(() => useFacebookSdk());
    //Mock of hook rendere sets facebook loaded to true after 200 ms
    await wait(200);
    const { facebookLoaded } = result.current;
    expect(facebookLoaded).toBe(true);
  });

  it('should have facebook service', () => {
    const { result } = renderHook(() => useFacebookSdk());
    const { facebookLoaded, facebookService } = result.current;
    expect(facebookService).not.toBe(null);
  });
});
