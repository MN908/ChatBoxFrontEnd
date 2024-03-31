
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MessageService } from '../../Services/message.service';
import { Sample } from '../../Data/Entities/Sample';
import { message } from '../../Data/Entities/message';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  display: boolean = false;
  isSelectedUser : boolean = false;
  newMessage: string = '';
  public messageData: message[] = [];

  users: Sample[] = [];
  allMessages: message[] = [];
  selectedUserMessages: string  = '';
  selectedUserId: string = '';
  selectedUserName: string = '';
  loginedUserId: string = '';
  loginedUserName: string = '';
  selectedUserIds: string[] = [];

  constructor(
    private message :MessageService,
    private cookieService: CookieService
    ) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.loginedUserId = this.cookieService.get('LoginedUserId');
    this.loginedUserName = this.cookieService.get('LoginedUserName');
  }

  showDialog() {
    this.display = true;
  }
  sendMessage()
  {

      const messageCreate: message = {
        senderId: this.cookieService.get('LoginedUserId'), 
        receiverId: this.selectedUserId,
        content: this.newMessage,
        Id: '',
        CreatedOn: '',
        ModifiedOn: '',
        IsDeleted: false
      }

      
    this.message.createMessage(messageCreate).subscribe(
      (result) => {
        this.newMessage = '';
      },
      (error) => {
        console.error(error);
      }
    );
  }

  selectUser(user: any) {
    this.isSelectedUser = true;
    const index = this.selectedUserIds.indexOf(user.id);
  if (index !== -1) {
    // User is already selected, remove it
    this.selectedUserIds.splice(index, 1);
  } else {
    // User is not selected, add it
    this.selectedUserIds.push(user.id);
  }
    this.selectedUserMessages = user.messages;
    this.selectedUserId = user.id;
    this.selectedUserName = user.userName;
    this.getMessagesForUser();
  }

  getAllUsers() {
    this.message.getAllUsers().subscribe(
      (result: Sample[]) => {
        this.users = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }


  getMessagesForUser()
  {
    this.message.getMessageForUser(this.cookieService.get('LoginedUserId'), this.selectedUserId).subscribe(

      (result : message[])  => {
        this.allMessages = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}