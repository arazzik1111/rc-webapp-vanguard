import React from "react";
import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { ErrorBoundary, ErrorBoundaryProps } from "@vanguard/RcErrorBoundry/RcErrorBoundry";
import { logStore as swaggerLogStore } from "@stores/swagger/LogStore";

export default SbDecorator({
  title: "vanguard/RcErrorBoundary",
  component: ErrorBoundary,
});

const Child = () => {
  throw new Error();
};
export const RcErrorBoundary = (props: ErrorBoundaryProps) => {
  return (
    <div>
      <ErrorBoundary onError={(error, errorInfo) => {
          swaggerLogStore.putLog(
              {
                  data: [
                      {
                          info: errorInfo,
                          error: error?.name,
                          href: window.location.href,
                          host: window.location.host,
                          pathname: window.location.pathname,
                          state: 'test',
                      } as any,
                  ],
              },
              {
                  type: "reputation_reviews",
              },
          );
      }}>
        <Child />
      </ErrorBoundary>
    </div>
  );
};
