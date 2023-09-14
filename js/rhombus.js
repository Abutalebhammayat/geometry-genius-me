// Rhombus click and input field 
const onbodyrh =document.getElementById('rhombus-body');
onbodyrh.onpointerenter = () =>{
    onbodyrh.style.backgroundColor = `#${Math.floor(Math.random() *0xffffff).toString(16)}`
}
document.getElementById('rhombus-btn').addEventListener('click', function(){
    // Rhombus first input 
    const rhombusFirstInputFiledFunction = getElementByInputField('rhombus-first-input-filed') ;
    if(rhombusFirstInputFiledFunction !== 16){
        alert('⚠️ please provide a right number ⁉️');
        return ;
    }
    // Rhombus Sconed input
    const rhombusSconedInputFiledFunction = getElementByInputField('rhombus-sconed-input-filed');
    if(rhombusSconedInputFiledFunction !== 8){
        alert('⚠️ please provide a right number ⁉️');
        return ;
    }
    // Rhombus first and Sconed input Calculation
    const rhombusInputFiledCalculation = 0.5 * (rhombusFirstInputFiledFunction * rhombusSconedInputFiledFunction) ;
    // Calculation area setup a  Rhombus
    const calculationRhombus = document.getElementById('calculation-rhombus');
    const calculationRhombusstring = calculationRhombus.innerText ;
    const previusCalculationRhombus = parseFloat(calculationRhombusstring);
    // main calculation in area 
    const mainCalculationInRhombus = (rhombusInputFiledCalculation + previusCalculationRhombus).toFixed(2) ;
    calculationRhombus.innerText = mainCalculationInRhombus ;

})