/*User data structure
  {
    id: 'somelongstring',
    name: 'display name',
    room: 'room'
  }
*/

//addUser(id, name, room)
//removeUser(id)
//getUser(id)
//getUserList(room)

class Users {
  constructor(){
    this.users = [];
  }
  addUser(id, name, room){
    let user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser(id){
    let user = this.getUser(id);
    if(user){
      this.users = this.users.filter((user)=>user.id !== id);
    }
    return user;
    //return user that was removed
  }
  getUser(id){
    //return user that was found
    return this.users.filter((user) => user.id ===id)[0];
  }
  getUserList(room){
    //return all users in room
    let users = this.users.filter((user) => user.room === room);
    let namesArray = users.map((user) => user.name);
    return namesArray;
  }
}


module.exports = {Users};
//ES6 Classes, new way to make JS classes
// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription(){
//     return `${this.name} is ${this.age} year(s) old.`
//   }
// }
//
// let me = new Person('Liem', 22);
// let description = me.getUserDescription();
// console.log(description);
