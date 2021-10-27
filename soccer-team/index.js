/*********************************************************************** /
 ______     __  __     ______     ______     ______     ______    
/\  ___\   /\ \_\ \   /\  == \   /\  ___\   /\  == \   /\  ___\   
\ \ \____  \ \____ \  \ \  __<   \ \  __\   \ \  __<   \ \___  \  
 \ \_____\  \/\_____\  \ \_____\  \ \_____\  \ \_\ \_\  \/\_____\ 
  \/_____/   \/_____/   \/_____/   \/_____/   \/_/ /_/   \/_____/ 
                                                                  
 ______   ______                                                  
/\  ___\ /\  ___\                   coded by strauss02
\ \  __\ \ \ \____                   for the cyber4s training program         
 \ \_\    \ \_____\                                               
  \/_/     \/_____/                                               
                                                                                      
 /*************************************************************************/

import crypto from 'crypto'

/**
    "...Create a class that represents a Person..."
  */
class Person {
  firstName
  surName
  salary
  age
  #id
  constructor(firstName, surName, salary, age) {
    this.firstName = firstName
    this.surName = surName
    this.salary = salary
    this.age = age
    this.id = crypto.randomBytes(2).toString('hex')
  }

  //GETTERS
  get firstName() {
    return this.firstName
  }
  get surName() {
    return this.surName
  }
  get salary() {
    return this.salary
  }
  get age() {
    return this.age
  }

  //SETTERS
  set salary(val) {
    this.salary = val
  }
  set age(val) {
    this.age = val
  }
}

const baby = new Person('Jimmy', 'Chickpea', `5$`, 2)
console.log(baby)
console.log(baby.salary)

/**
 *
 */
