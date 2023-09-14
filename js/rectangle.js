// Rectangle click and input field
const onbodyr =document.getElementById('rectangle-body');
onbodyr.onpointerenter = () =>{
    onbodyr.style.backgroundColor = `#${Math.floor(Math.random() *0xffffff).toString(16)}`
} 
document.getElementById('rectangle-btn').addEventListener('click', function(){
    // Rectangle first input 

    const rectangleInputFiled = document.getElementById('rectangle-first-input-filed');
    const rectangleInputFiledString = rectangleInputFiled.value ;
    const previusrectangletInputFiled = parseFloat(rectangleInputFiledString);
    rectangleInputFiled.value = '';

    if(isNaN(previusrectangletInputFiled)){
        alert('⚠️ please provide a valid number ⁉️')
        return;
    }

    // Triangle Sconed input
    const rectangleInputFiled2 = document.getElementById('rectangle-sconed-input-filed');
    const rectangleInputFiledString2 = rectangleInputFiled2.value ;
    const previusrectangletInputFiled2 = parseFloat(rectangleInputFiledString2);
    rectangleInputFiled2.value = ' ';
    if(isNaN(previusrectangletInputFiled2)){
        alert('⚠️ please provide a valid number ⁉️')
        return;
    }


    // const rectangleFirstInputFiledFunction = getElementByInputField('rectangle-first-input-filed') ;
    // Rectangle Sconed input
    // const rectangleSconedInputFiledFunction = getElementByInputField('rectangle-sconed-input-filed');
    // Rectangle first and Sconed input Calculation
    const rectangleInputFiledCalculation =previusrectangletInputFiled * previusrectangletInputFiled2 ;
    // Calculation area setup a  Rectangle
    const calculationRectangle = document.getElementById('calculation-rectangle');
    const calculationRectanglestring = calculationRectangle.innerText ;
    const previusCalculationRectangle = parseFloat(calculationRectanglestring);
    // main calculation in area 
    const mainCalculationInRectangle = (rectangleInputFiledCalculation + previusCalculationRectangle).toFixed(2) ;
    calculationRectangle.innerText = mainCalculationInRectangle ;

})