function addition(num1, num2) {
    return num1 + num2
}

console.log(addition(5,3))
console.log(addition(-3,-6))
console.log(addition(7,3))

//Convert hours into seconds

function hoursIntoSeconds(hour) {
    return hour * 3600
}

console.log(hoursIntoSeconds(2))
console.log(hoursIntoSeconds(10))
console.log(hoursIntoSeconds(24))

//Calculate perimeter of rectangle (2L + 2W)

function calcPerimeter (length, width) {
return 2 * length + 2 * width
}

console.log(calcPerimeter(6,7))
console.log(calcPerimeter(10,20))

//Calculate area of triangle

function calcTriangleArea (base, height) {
    return 0.5 * base * height
}

console.log(calcTriangleArea(3,2))
console.log(calcTriangleArea(10,10))

//Extend a string

function appendFrontend (string) {
    return string + "Juice"
}

console.log(appendFrontend("Apple"))
console.log(appendFrontend("Orange"))

//Greater than 100?

function sumGreaterThan100(num1, num2) {
    return num1 + num2 >= 100
    
    }

console.log(sumGreaterThan100(20, 10))
console.log(sumGreaterThan100(50, 60))

//Less than or equal to zero

function lessThanOrEqualToZero (num) {
    return num <= 0

}

console.log(lessThanOrEqualToZero(3))
console.log(lessThanOrEqualToZero(0))
console.log(lessThanOrEqualToZero(-2))

// Return opposite boolean

function oppositeBoolean (bool) {
return !bool;
}

console.log(oppositeBoolean(true))

//Return true if it is not 0

function isNotZero (elem) {
    return elem !== 0
}

console.log(isNotZero(5))
console.log(isNotZero(0))
console.log(isNotZero(null))

//Calculate the remainder

function calcRemainder (num1, num2) {
return num1 % num2;
}

console.log(calcRemainder(4, 2))
console.log(calcRemainder(7, 8))

//Is the number odd?

function isOdd (num) {
    return num % 2 === 1
}

console.log(isOdd(1))
console.log(isOdd(2))
console.log(isOdd(5))

