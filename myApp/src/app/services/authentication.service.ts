import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';
import { AngularFirestore } from  "@angular/fire/firestore";
 
@Injectable()
export class AuthenticateService {
 
  firstName: string;

  constructor(private firestore: AngularFirestore){
  }

  ngOnInit(){
    this.getFirstName();
  }
 
  registerUser(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
     .then(
       res => resolve(res),
       err => reject(err))
   })
  }
 
  loginUser(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().signInWithEmailAndPassword(value.email, value.password)
     .then(
       res => resolve(res),
       err => reject(err))
   })
  }

  saveName(value){
    console.log("i got here");
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection("users").doc(value.email).set({
        firstName: value.firstName,
        lastName: value.lastName
      }).then(res => {}, err => reject(err));
    })
  }

  async getFirstName(){
    this.firstName = await this.firestore.collection("/users").doc(this.userDetails().email).ref.get()
      .then(function(doc){
        if (doc.exists){
          let data = doc.data();
          console.log(data.firstName);
          return data.firstName;
        }
        else {
          console.log("not found");
        }
      }).catch(function(error){
        console.log("error", error);
      });
  }
 
  logoutUser(){
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        firebase.auth().signOut()
        .then(() => {
          console.log("LOG Out");
          resolve();
        }).catch((error) => {
          reject();
        });
      }
    })
  }
 
  userDetails(){
    return firebase.auth().currentUser;
  }
}