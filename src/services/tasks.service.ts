import { getPathId } from '@helpers/get-path-id';
import { rcWindow } from '@stores/window.store';

type TasksServiceOpts = {
  reassignTasks?: boolean;
  initiallyValidated?: boolean;
};

class TasksService {
  assignTasks(opts?: TasksServiceOpts) {
    if (opts?.reassignTasks) {
      rcWindow.Tasks.processTaskReassignment(!opts?.initiallyValidated, getPathId());
    } else {
      if (!opts?.initiallyValidated) {
        rcWindow.Tasks.processInitialValidation(getPathId());
      }
    }
  }
}

export const tasksService = new TasksService();
