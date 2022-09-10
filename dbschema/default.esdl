module default {

  type Site {
    required property title -> str;
    required property name -> str;
    required property enabled -> bool;
    multi link users -> User;
  }

  type User {
    required property name -> str;
  }

}