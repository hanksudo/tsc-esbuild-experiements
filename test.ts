class EntityModel<T> {
    entity: T;
    constructor(entity: T) {
        this.entity = entity;
        this.applyEntity(entity);
    }

    public applyEntity(entity: T): void {
        Object.assign(this, entity);
    }
}


interface UserEntity {
    id: number;
    email: string;
}

class UserModel extends EntityModel<UserEntity> {
    id: number;
    email: string;
  
    constructor(entity: UserEntity) {
      super(entity);
    }
}

const user = new UserModel({id: 1, email: 'abc@abc.com'});
console.log(user.email)
