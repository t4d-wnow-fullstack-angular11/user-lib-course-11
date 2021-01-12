import { ICurrentUser } from '../models/CurrentUser';
export declare const setCurrentUser: import("@ngrx/store").ActionCreator<"[UserLib] Set Current User", (props: {
    currentUser: ICurrentUser;
}) => {
    currentUser: ICurrentUser;
} & import("@ngrx/store/src/models").TypedAction<"[UserLib] Set Current User">>;
export declare const clearCurrentUser: import("@ngrx/store").ActionCreator<"[UserLib] Clear Current User", () => import("@ngrx/store/src/models").TypedAction<"[UserLib] Clear Current User">>;
export declare const loginUser: import("@ngrx/store").ActionCreator<"[UserLib] Login User", (props: {
    username: string;
    password: string;
}) => {
    username: string;
    password: string;
} & import("@ngrx/store/src/models").TypedAction<"[UserLib] Login User">>;
export declare const logoutUser: import("@ngrx/store").ActionCreator<"[UserLib] Logout User", () => import("@ngrx/store/src/models").TypedAction<"[UserLib] Logout User">>;
