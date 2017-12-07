import { Observable } from 'rxjs/Observable';

export abstract class UserApi {
    signIn: (username: string, password: string, rememberMe: boolean) => Observable<any>;
    signOut: () => Observable<any>;
    register: (username: string, password: string) => Observable<any>;
    currentUser: () => string;
    // changePassword :
}
