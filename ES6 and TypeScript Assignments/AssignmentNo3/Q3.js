var MyCircle = /** @class */ (function () {
    function MyCircle() {
        this.myName = 'circle';
    }
    MyCircle.prototype.print = function () { return this.myName; };
    return MyCircle;
}());
var MyEmployee = /** @class */ (function () {
    function MyEmployee() {
        this.myName = 'Reshma';
    }
    MyEmployee.prototype.print = function () { return this.myName; };
    return MyEmployee;
}());
var c2 = new MyCircle();
var emp2 = new MyEmployee();
var printAll = function () {
    var objs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objs[_i] = arguments[_i];
    }
    objs.forEach(function (obj) {
        console.log(obj.print());
    });
};
printAll(c2, emp2);
