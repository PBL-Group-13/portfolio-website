import faker from "faker";
export class User {
  constructor({
    _id,
    firstName,
    lastName,
    avatar,
    password,
    email,
    birthDate,
    location,
    phoneNumber,
    description,
    slug,
    portfolio,
  }) {
    this._id = _id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
    this.birthDate = birthDate;
    this.location = location;
    this.phoneNumber = phoneNumber;
    this.description = description;
    this.slug = slug;
    this.portfolio = portfolio;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.__v = 0;
  }
}
