import React from 'react';

import { useSelectiveDynamicImport } from '../custom-hooks/use-dynamic-import/use-selective-dynamic-import';
import { classNames } from '../helpers/classNames';

export interface SelectiveImportExampleProps {
  assetName: string;
  className?: string;
}

/**
 * Example component demonstrating vanguard dynamic import functionality
 *
 * This component shows how to:
 * - Use the vanguard dynamic import hook
 * - Handle loading and error states
 * - Display asset content
 */
export const SelectiveImportExample: React.FC<SelectiveImportExampleProps> = ({ assetName, className }) => {
  const { SvgIcon, loading, error } = useSelectiveDynamicImport(assetName, {
    shouldRequest: true,
  });

  const renderContent = () => {
    if (loading) {
      return (
        <div className="loading-state">
          <div className="spinner" />
          <span>Loading asset...</span>
        </div>
      );
    }

    if (error) {
      return (
        <div className="error-state">
          <span className="error-icon">⚠️</span>
          <div>
            <strong>Asset Error:</strong>
            <p>{error.message}</p>
          </div>
        </div>
      );
    }

    if (SvgIcon) {
      return (
        <div className="success-state">
          <img src={SvgIcon} alt={`Asset: ${assetName}`} className="asset-image" />
          <div className="asset-info">
            <strong>Asset loaded successfully</strong>
            <p>Asset: {assetName}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="empty-state">
        <span className="empty-icon">📭</span>
        <p>No asset loaded</p>
      </div>
    );
  };

  return (
    <div className={classNames('vanguard-import-example', className)}>
      <div className="example-header">
        <h3>Selective Dynamic Import Example</h3>
        <p>
          Asset: <code>{assetName}</code>
        </p>
      </div>

      <div className="example-content">{renderContent()}</div>

      <style>{`
        .vanguard-import-example {
          border: 1px solid #e1e5e9;
          border-radius: 8px;
          padding: 16px;
          margin: 16px 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .example-header {
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid #f0f0f0;
        }

        .example-header h3 {
          margin: 0 0 8px 0;
          color: #2c3e50;
        }

        .example-header p {
          margin: 0;
          color: #7f8c8d;
          font-size: 14px;
        }

        .example-header code {
          background: #f8f9fa;
          padding: 2px 6px;
          border-radius: 4px;
          font-family: 'Monaco', 'Consolas', monospace;
        }

        .example-content {
          margin: 16px 0;
        }

        .loading-state {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: #f8f9fa;
          border-radius: 6px;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid #e9ecef;
          border-top: 2px solid #007bff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .error-state {
          display: flex;
          gap: 12px;
          padding: 16px;
          background: #fff5f5;
          border: 1px solid #fed7d7;
          border-radius: 6px;
          color: #c53030;
        }

        .error-icon {
          font-size: 20px;
          flex-shrink: 0;
        }

        .vanguard-mode-hint {
          margin-top: 8px;
          padding: 8px;
          background: #e6f3ff;
          border-radius: 4px;
          color: #0066cc;
          font-size: 13px;
        }

        .disabled-state {
          display: flex;
          gap: 12px;
          padding: 16px;
          background: #fffbf0;
          border: 1px solid #fbd38d;
          border-radius: 6px;
          color: #c05621;
        }

        .info-icon {
          font-size: 20px;
          flex-shrink: 0;
        }

        .success-state {
          display: flex;
          gap: 16px;
          align-items: center;
          padding: 16px;
          background: #f0fff4;
          border: 1px solid #9ae6b4;
          border-radius: 6px;
        }

        .asset-image {
          width: 48px;
          height: 48px;
          object-fit: contain;
          border-radius: 4px;
          background: white;
          padding: 4px;
        }

        .asset-info strong {
          color: #22543d;
        }

        .asset-info p {
          margin: 4px 0 0 0;
          color: #2f855a;
          font-size: 14px;
        }

        .empty-state {
          text-align: center;
          padding: 32px 16px;
          color: #a0aec0;
        }

        .empty-icon {
          font-size: 32px;
          display: block;
          margin-bottom: 8px;
        }

        .config-info {
          margin-top: 16px;
          padding: 12px;
          background: #f7fafc;
          border-radius: 6px;
          border-left: 4px solid #4299e1;
        }

        .config-info h4 {
          margin: 0 0 8px 0;
          color: #2b6cb0;
          font-size: 14px;
        }

        .config-info ul {
          margin: 0;
          padding-left: 16px;
          font-size: 13px;
          color: #4a5568;
        }

        .config-info li {
          margin: 2px 0;
        }
      `}</style>
    </div>
  );
};
