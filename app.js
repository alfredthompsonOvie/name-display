'use strict';

const printName = function() {
 const fullName = document.querySelector('.name');
 fullName.innerText = "alfred thompson ovie";
 fullName.style.textTransform = "capitalize";
};
printName();