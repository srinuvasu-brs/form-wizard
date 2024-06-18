/** 
Author: Build Rise Shine with Nyros (BRS) 
Created: 2023 
Library / Component: Step 3 form
Description: Logic for step 3 form
(c) Copyright by BRS with Nyros. 
**/

// Date and time picker
let dateToday = new Date();    

$(function () {
  $('#date_picker').dtpicker({minDate: dateToday 
  })
})

