import { observable } from 'mobx';


export default class User {

    @observable id = null;
    @observable username = null;
    @observable password = null;
  
    constructor(data : User) {
      if (!data.id) {
        throw Error('User requires Id');
      }
  
      this.id = data.id;
      this.username = data.username;
      this.password = data.password;
    }
  }