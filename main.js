function Numerolory(birthday, name) {
    this.birthday = birthday;
    this.name = name;
    this.birthday = function () {
        return birthday
    };
    this.name = function () {
        return name
    };
    this.rullingNumber = function() {
        return rullingNumber
    }
    this.getNumberOfBirthday = function () {
        return NumberOfBirthday
    };
    this.getNumberOfName = function () {
        return NumberOfName
    };
}