//Form Elements
const form = document.getElementById("form");
const firstName = getElementById("firstName");
const lastName = getElementById("lastName");
const facilitatorName = getElementById("facilitatorName");
const facilitatorList = ["Josh", "Chris", "Fazil"];
const submit = getElementById("submit");

//Event listener is supposed to prevent submission if inputs are not valid
form.addEventListener("submit", function(e) {
    e.preventDefault();

    validateInputs();
});

//Create error messages
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
};
const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
};
const isValidInput = (name) => {
    const regEx = /^[A-Za-z ]+$/; //RegEx to validate letter input
    return regEx.test(string(name).toLowerCase());
};
const validateInputs = () => {
    //remove white spaces
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    //check first name for no input
    if (firstName === '') {
        setError(firstName, 'First name is required'); 
        //error message for empty string
    } else if (firstNameValue.length < 2) {
        setError(firstName, 'First name must be at least 2 characters.'); 
        //error message for less than 2 characters
    } else if (!isValidInput(firstNameValue)) {
        setError(firstName, 'First name must contain only letters'); 
        //error message for non alpha characters
    } else {
        setSuccess(firstName); //adds green border to valid input
    }
    if (lastName === '') {
        setError(lastName, 'Last name is required');
    } else if (lastNameValue.length < 2) {
        setError(lastName, 'Last name must be at least 2 characters.');
    } else if(!isValidInput(lastNameValue)){
        setError(lastName, 'Last name must contain only letters'); 
        //error message for non alpha characters
    }else {
        setSuccess(lastName); //adds green border to valid input
    }
};
const validateFacilitator = () =>{
    const facilitatorValue = facilitatorName.value.trim(); 
    //removes whitespace
    if (!facilitatorValue.indexOf(facilitatorList)){ 
        //checks against facilitator array
        setError(facilitatorName, 'That facilitator does not exist')
    } else {
        setSuccess(facilitatorName);
    }
}
