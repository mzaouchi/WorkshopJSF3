console.log("Hello Fourat")

var a = "DALI"
console.log(a)
var b = "FOURAT"
console.log(b)

console.log(typeof (a))

var a = 5.7
console.log(a)
console.log(typeof(a))


var fourat = false
console.log(fourat)
console.log(typeof(fourat))


var t = [3,5,9,10]

console.log(t)
console.log(t[2])

console.log(typeof(t))

var user = {name : "Dali",age : 1,absent : true}

// console.log(user.name)
// console.log(user.age)

// console.log(typeof(user))

// console.log(Object.keys(user))
// console.log(Object.values(user))

console.log(Object.entries(user))


var z

console.log(typeof(z))

z = 5

console.log(typeof(z))

z = "Fourat"

console.log(typeof(z))


var dali = null

console.log(typeof(dali))


function Somme(a,b){
    return a+b
  }
  
  
  console.log(Somme(2,4))
  console.log(Somme(9,10))
  
  var x  = Somme(7,10)
  
  console.log(x)
  
  console.log(typeof(Somme))



  var a = 5
var b = 2

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
console.log(a/b)
console.log(a%b) //MOD
console.log(a)
a = a + 1
console.log(a)
a++
console.log(a)
a = a - 1
console.log(a)
a--
console.log(a)
a = a + 5
console.log(a)
a += 5
console.log(a)


var a = 5
var b = 2

console.log(a**b)

var a = 5
var b = 2
var c = '5'

console.log(a == b)
console.log(a == c) //VALUE
console.log(a === c)// Type and Value
console.log(a != c)//Value
console.log(a !== c)//Type and value


var a = 6
var b = 2

console.log(a>b)
console.log(a<b)
console.log(a>b && a<b)
console.log(a > b || a < b)


var a =   -7


if(a == 0){
  console.log("ZERO")
}else if(a>0){
  console.log("Positif")
}else{
  console.log("Negatif")
}



var a = 10

switch(a){
  case 1 : console.log("Janvier")
           break 
  case 3 : console.log("Mars")
            break
  default : console.log("Mana3rfhech")
}







