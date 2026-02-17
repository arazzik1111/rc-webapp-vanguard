export class AbortControllersManager {
  controllers: Record<string, AbortController> = {};

  _push = (id: string, controller: AbortController) => {
    this.controllers[id] = controller;
    // console.log("PUSH", this.controllers);
  };

  _remove = (id: string) => {
    delete this.controllers[id];
    // console.log("REMOVE", this.controllers);
  };

  abortAll = () => {
    Object.values(this.controllers).forEach((c) => {
      c.abort();
    });
    // console.log("ABORT ALL", this.controllers);
  };
}
