let Rectengle = function (width, height){
    this.width = width;
    this.height = height;

    this.setWidth = function(width){
        this.width = width;
    }
    this.setHeight = function(height){
        this.height = height;
    }

    this.getSquare = function(){
        return width*height;
    }
    this.getPerimeter = function(){
        return (width + height)* 2
    }
};

let rectengle = new Rectengle(26, 58);

let square = rectengle.getSquare();
let perimeter = rectengle.getPerimeter();

alert(square + " and " + perimeter);