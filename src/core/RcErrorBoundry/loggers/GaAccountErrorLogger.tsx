import { ErrorBoundaryLogger } from '@vanguard/RcErrorBoundry/ErrorBoundaryLogger';

class GaAccountErrorLogger extends ErrorBoundaryLogger {
  constructor() {
    super();
  }

  log(text: string) {
    alert('logging');
  }
}
