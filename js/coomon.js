function getElementByInputField(evener){
    const alltInputFiled = document.getElementById(evener);
    const alltInputFiledString = alltInputFiled.value ;
    const previusalltInputFiled = parseFloat(alltInputFiledString);
    alltInputFiled.value = '';
    return previusalltInputFiled ;
}
