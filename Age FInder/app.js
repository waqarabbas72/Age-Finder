const personName = document.getElementById("name");
const dob = document.getElementById("dob");
const result = document.getElementById("result");
const submit = document.getElementById("submit");
const clear = document.getElementById("clear");

// Listen For Click On Buttons
submit.addEventListener("click", calculate);
clear.addEventListener('click', reload)

// TO calculate  Age 
function calculate(e) {
  // person constructor
  function Person(personName, dob) {
    this.name = personName;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function () {
      const diff = Date.now() - this.birthday.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
  }

  //   Person to find Age
  const person = new Person(personName.value, dob.value);
  console.log(personName.value, person.calculateAge());
  result.innerText = `Hello ${
    personName.value
  }. Your Age Is ${person.calculateAge()}`;

  e.preventDefault();
}

// TO clear Data
function reload(e){
    window.location.reload();
    e.preventDefault();
}