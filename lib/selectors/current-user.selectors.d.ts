import { UserLibState } from '../models/UserLibState';
export declare const selectCurrentUser: import("@ngrx/store").MemoizedSelector<{
    user: UserLibState;
}, import("../models/CurrentUser").ICurrentUser, import("@ngrx/store").DefaultProjectorFn<import("../models/CurrentUser").ICurrentUser>>;
