export class Email {
    name: string;
    email: string;
    subject: string;
    message: string;

    constructor(name = '', email = '', subject = '', message = '') {
      this.name = name;
      this.email = email;
      this.subject = subject;
      this.message = message;
    }

  }