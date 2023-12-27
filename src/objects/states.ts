import {IUser} from '../interfaces/index';

export enum Pages {
    Login = "Login",
    Home = "Home",
}

export class State {

    constructor(){
        this.userState = new UserState()
        this.navigation = new NavigationState()
    }

    userState : UserState;
    navigation : NavigationState;
}


export class UserState {

    token! : string;
    currentUser?: IUser;
}


export class NavigationState {
    currentPage! : Pages;
}