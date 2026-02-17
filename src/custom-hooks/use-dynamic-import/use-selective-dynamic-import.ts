import { DynamicRequestOpts, useDynamicImport } from './use-dynamic-import';

export type VanguardConfig = {
  mode: 'full' | 'vanguard';
  components?: string[];
  assets?: Record<string, boolean>;
  buildOptions?: {
    treeshaking?: boolean;
    minify?: boolean;
    sourcemap?: boolean;
  };
};

export interface UseSelectiveDynamicImportState {
  error: Error | null;
  loading: boolean;
  SvgIcon: string | '';
  isSelectiveMode: boolean;
  assetEnabled: boolean;
}

export interface SelectiveDynamicRequestOpts extends DynamicRequestOpts {
  fallbackBehavior?: 'error' | 'empty' | 'placeholder';
}

export const useSelectiveDynamicImport = (
  assetName: string,
  opts: SelectiveDynamicRequestOpts = { shouldRequest: true, fallbackBehavior: 'error' },
): UseSelectiveDynamicImportState => {
  // Use the existing useDynamicImport hook
  const { error, loading, SvgIcon } = useDynamicImport(assetName, opts);

  // For backward compatibility, we always return full mode behavior
  // since selective build functionality has been removed
  return {
    error,
    loading,
    SvgIcon,
    isSelectiveMode: false, // Always false since selective mode is removed
    assetEnabled: true, // Always true since all assets are available
  };
};

export { type DynamicRequestOpts } from './use-dynamic-import';
