import { Observable } from "rxjs";

export interface IDeactivatecomponent {
    canExit: () => Observable <boolean> | Promise<boolean> | boolean;
}
