/** 
Author: Build Rise Shine with Nyros (BRS) 
Created: 2023 
Library / Component: Local storage script
Description: logic for storing entered mail in local storage
(c) Copyright by BRS with Nyros. 
**/

//storing the mail in the localstorage
const mailId = localStorage.getItem('email')

const emailId = document.getElementById('email')
emailId.textContent += `${mailId}`