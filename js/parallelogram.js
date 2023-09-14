// Parallelogram click and input field 
const onbodypa =document.getElementById('parallelogram-body');
onbodypa.onpointerenter = () =>{
    onbodypa.style.backgroundColor = `#${Math.floor(Math.random() *0xffffff).toString(16)}`
}
document.getElementById('parallelogram-btn').addEventListener('click', function(){
    // Parallelogram first input 
    const parallelogramFirstInputFiledFunction = getElementByInputField('parallelogram-first-input-filed') ;
    if(parallelogramFirstInputFiledFunction !== 10){
        alert('⚠️ please provide a right number ⁉️');
        return ;
    }
    // Parallelogram Sconed input
    const parallelogramSconedInputFiledFunction = getElementByInputField('parallelogram-sconed-input-filed');
    if(parallelogramSconedInputFiledFunction !== 12){
        alert('⚠️ please provide a right number ⁉️');
        return ;
    }

    // Parallelogram first and Sconed input Calculation
    const parallelogramInputFiledCalculation = parallelogramFirstInputFiledFunction * parallelogramSconedInputFiledFunction ;
    // Calculation area setup a  Parallelogram
    const calculationParallelogram = document.getElementById('calculation-parallelogram');
    const calculationParallelogramstring = calculationParallelogram.innerText ;
    const previusCalculationParallelogram = parseFloat(calculationParallelogramstring);
    // main calculation in area 
    const mainCalculationInParallelogram = (parallelogramInputFiledCalculation + previusCalculationParallelogram).toFixed(2) ;
    calculationParallelogram.innerText = mainCalculationInParallelogram ;

})