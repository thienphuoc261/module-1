let Apple = function (weight) {
    this.weight = weight;

    this.getWeight = function () {
        return this.weight;
    };

    this.setWeight = function (weight) {
        this.weight = weight;
    };

    this.isEmpty = function () {
        if (this.weight <= 0) {
            return true;
        } else {
            return false;
        }
    };

    this.decreaseApple = function () {
        if (this.isEmpty()) {
            alert("Hết táo mẹ rồi");
        } else {
            this.weight--;
        }
    };
}

let Human = function (name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;

    this.isMale = function () {
        if (this.gender == 1) {
            return true;
        } else {
            return false;
        }
    };

    this.setGender = function () {
        if (this.isMale()) {
            return "Male";
        } else {
            return "Female";
        }
    };

    this.checkApple = function (apple) {
        return apple.isEmpty();
    };

    this.eatApple = function (apple) {
        if (apple.getWeight() > 0) {
            apple.decreaseApple();
            this.weight++;
        } else {
            alert("Táo đã ăn hết");
        }
    };

    this.say = function (string) {
        alert(string);
    };

    this.getName = function () {
        return this.name;
    };

    this.setName = function (name) {
        this.name = name;
    };

    this.getWeight = function () {
        return this.weight;
    };

    this.setWeight = function (weight) {
        this.weight = weight;
    };
}

let applee = new Apple(100);
let adam = new Human("adam", 1, 65);
let eva = new Human("eva", 2, 45);

while (applee.isEmpty() == false) {
    document.write("Adam ăn táo" + "<br>");
    adam.eatApple(applee);

    document.write("Quả táo còn: " + applee.getWeight() + " đơn vị" + "<br>");
    document.write("Adam nhả hột" + "<br>");
    document.write("Cân nặng của Adam là: " + adam.getWeight() + " kg" + "<br>");

    document.write("<br>");

    document.write("Eva ăn táo" + "<br>");
    eva.eatApple(applee);

    document.write("Quả táo còn: " + applee.getWeight() + " đơn vị" + "<br>");
    document.write("Eva nhả hột" + "<br>");
    document.write("Cân nặng của Eva là: " + eva.getWeight() + " kg" + "<br>");

    document.write("<br>");
}