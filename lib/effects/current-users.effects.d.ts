import { Actions } from '@ngrx/effects';
import { UsersService } from '../services/users.service';
import { ICurrentUser } from '../models/CurrentUser';
export declare class CurrentUserEffects {
    private actions$;
    private usersSvc;
    logoutUser$: import("rxjs").Observable<import("@ngrx/store/src/models").TypedAction<"[App] Clear Error Message"> | import("@ngrx/store/src/models").TypedAction<"[UserLib] Clear Current User">> & import("@ngrx/effects").CreateEffectMetadata;
    loginUser$: import("rxjs").Observable<import("@ngrx/store/src/models").TypedAction<"[App] Clear Error Message"> | import("@ngrx/store/src/models").TypedAction<"[UserLib] Clear Current User"> | ({
        currentUser: ICurrentUser;
    } & import("@ngrx/store/src/models").TypedAction<"[UserLib] Set Current User">) | ({
        errorMessage: string;
    } & import("@ngrx/store/src/models").TypedAction<"[App] Set Error Message">)> & import("@ngrx/effects").CreateEffectMetadata;
    constructor(actions$: Actions, usersSvc: UsersService);
}
