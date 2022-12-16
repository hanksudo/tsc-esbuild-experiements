var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EntityModel = /** @class */ (function () {
    function EntityModel(entity) {
        this.entity = entity;
        this.applyEntity(entity);
    }
    EntityModel.prototype.applyEntity = function (entity) {
        Object.assign(this, entity);
    };
    return EntityModel;
}());
var UserModel = /** @class */ (function (_super) {
    __extends(UserModel, _super);
    function UserModel(entity) {
        return _super.call(this, entity) || this;
    }
    return UserModel;
}(EntityModel));
var user = new UserModel({ id: 1, email: 'abc@abc.com' });
console.log(user.email);
