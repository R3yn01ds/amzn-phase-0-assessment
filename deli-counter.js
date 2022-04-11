// 1. Write your functions here

const katzDeli = []

const line = []

function currentline(katzDeli) {
    for (let i = 0; i < katzDeli.length; i++) {
        line.push(`` + [i + 1] + `.` + katzDeli[i])
    }
    if (katzDeli.length === 0) {
        return "The line is currently empty."
      } else
      return(`The line is currently:` + line)
}

function takeANumber(katzDeli, name) {
    katzDeli.push(`${name}`)
    return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`)
  }


function nowServing(katzDeli) {
    let i = 0;
    while (i < katzDeli.length) {
      i++;
    }
    if (katzDeli.length === 0) {
      return "There is nobody waiting to be served!"
    }
    else
    return (`Currently serving ${katzDeli.shift()}.`)
  }
  
  
// 2. Example Usage

//  takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

// nowServing(katzDeli) //=> "Currently serving Ada."

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

// nowServing(katzDeli) //=> "Currently serving Grace."

// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"