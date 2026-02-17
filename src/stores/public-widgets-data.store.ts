export class PublicWidgetData {
  private token: string;
  private host: string;
  private static instance: PublicWidgetData;
  private locationId: string;
  private widgetId: string;

  public static getInstance(): PublicWidgetData {
    if (!PublicWidgetData.instance) {
      PublicWidgetData.instance = new PublicWidgetData();
    }

    return PublicWidgetData.instance;
  }

  set({ token, locationId, host, widgetId }: { token: string; host: string; locationId: string; widgetId: string }) {
    this.token = token;
    this.host = host;
    this.locationId = locationId;
    if (!this.widgetId) {
      this.widgetId = widgetId;
    } else {
      console.warn('Cannot overwrite widget id !');
    }
  }

  get() {
    const { token, host, locationId, widgetId } = this;
    return { token, host, locationId, widgetId };
  }
}

export const publicWidgetData = new PublicWidgetData();
