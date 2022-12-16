class EntityModel {
  constructor(entity) {
    this.entity = entity;
    this.applyEntity(entity);
  }
  applyEntity(entity) {
    Object.assign(this, entity);
  }
}
class UserModel extends EntityModel {
  constructor(entity) {
    super(entity);
  }
}
const user = new UserModel({ id: 1, email: "abc@abc.com" });
console.log(user.email);
