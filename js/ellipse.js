// Ellipse click and input field 
const onbodye =document.getElementById('ellipse-body');
onbodye.onpointerenter = () =>{
    onbodye.style.backgroundColor = `#${Math.floor(Math.random() *0xffffff).toString(16)}`
}
document.getElementById('ellipse-btn').addEventListener('click', function(){
    // Ellipse first input 
    const ellipseFirstInputFiledFunction = getElementByInputField('ellipse-first-input-filed') ;
    if(ellipseFirstInputFiledFunction !== 10){
        alert('⚠️ please provide a right number ⁉️');
        return ;
    }
    // Ellipse Sconed input
    const ellipseSconedInputFiledFunction = getElementByInputField('ellipse-sconed-input-filed');
    if(ellipseSconedInputFiledFunction !== 4){
        alert('⚠️ please provide a right number ⁉️');
        return ;
    }
    // Ellipse first and Sconed input Calculation
    const ellipseInputFiledCalculation = 3.1416 * (ellipseFirstInputFiledFunction * ellipseSconedInputFiledFunction) ;
    // Calculation area setup a  Ellipse
    const calculationEllipse = document.getElementById('calculation-ellipse');
    const calculationEllipsestring = calculationEllipse.innerText ;
    const previusCalculationEllipse = parseFloat(calculationEllipsestring);
    // main calculation in area 
    const mainCalculationInEllipse = (ellipseInputFiledCalculation + previusCalculationEllipse).toFixed(2) ;
    calculationEllipse.innerText = mainCalculationInEllipse ;

})