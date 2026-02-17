import { getPathId } from '@helpers/get-path-id';
import { rcWindow } from '@stores/window.store';

class MixPanelEventsService {
  /**
   * "Vayu.Completed" rcEvents & MixPanelEvent implementation
   */
  logVayuCompleted = (userSitesCount: number) => {
    try {
      rcWindow.rcEvents &&
        rcWindow.rcEvents.dispatch(rcWindow.rcEvents.events.vayu_completed, {
          sitesCount: userSitesCount,
          siteId: getPathId(),
          ts: Math.floor(Date.now() / 1000),
        });
    } catch (err) {
      // do nothing, just avoid error
    }
  };

  /**
   * "Project.Added" rcEvents & MixPanelEvent implementation
   */
  logAddNewProject = (userSitesCount: number) => {
    try {
      rcWindow.rcEvents &&
        rcWindow.rcEvents.dispatch(rcWindow.rcEvents.events.add_new_project, {
          sitesCount: userSitesCount,
          siteId: getPathId(),
          ts: Math.floor(Date.now() / 1000),
        });
    } catch (err) {
      // do nothing, just avoid error
    }
  };
}

export const mixPanelEventsService = new MixPanelEventsService();
