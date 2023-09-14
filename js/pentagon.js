// Pentagon click and input field 
const onbodype =document.getElementById('pentagon-body');
onbodype.onpointerenter = () =>{
    onbodype.style.backgroundColor = `#${Math.floor(Math.random() *0xffffff).toString(16)}`
}
document.getElementById('pentagon-btn').addEventListener('click', function(){
    // Pentagon first input 
    const pentagonFirstInputFiledFunction = getElementByInputField('pentagon-first-input-filed') ;
    if(pentagonFirstInputFiledFunction !== 6){
        alert('⚠️ please provide a right number ⁉️');
        return ;
    }
    // Pentagon Sconed input
    const pentagonSconedInputFiledFunction = getElementByInputField('pentagon-sconed-input-filed');
    if(pentagonSconedInputFiledFunction !== 10){
        alert('⚠️ please provide a right number ⁉️');
        return ;
    }
    // Pentagon first and Sconed input Calculation
    const pentagonInputFiledCalculation = 0.5 * (pentagonFirstInputFiledFunction * pentagonSconedInputFiledFunction) ;
    // Calculation area setup a  Pentagon
    const calculationPentagon = document.getElementById('calculation-pentagon');
    const calculationPentagonstring = calculationPentagon.innerText ;
    const previusCalculationPentagon = parseFloat(calculationPentagonstring);
    // main calculation in area 
    const mainCalculationInPentagon = (pentagonInputFiledCalculation + previusCalculationPentagon).toFixed(2) ;
    calculationPentagon.innerText = mainCalculationInPentagon ;

})