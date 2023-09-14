// Triangle click to input field 
const onbody =document.getElementById('triangle-body');
onbody.onpointerenter = () =>{
    onbody.style.backgroundColor = `#${Math.floor(Math.random() *0xffffff).toString(16)}`
}
document.getElementById('triangle-btn').addEventListener('click', function(){
    // Triangle first input 

    const triangletInputFiled = document.getElementById('triangle-first-input-filed');
    const triangletInputFiledString = triangletInputFiled.value ;
    const previustriangletInputFiled = parseFloat(triangletInputFiledString);
    triangletInputFiled.value = '';

    if(isNaN(previustriangletInputFiled)){
        alert('⚠️ please provide a valid number ⁉️')
        return;
    }

    // Triangle Sconed input
    const triangletInputFiled2 = document.getElementById('triangle-sconed-input-filed');
    const triangletInputFiledString2 = triangletInputFiled2.value ;
    const previustriangletInputFiled2 = parseFloat(triangletInputFiledString2);
    triangletInputFiled2.value = ' ';
    if(isNaN(previustriangletInputFiled2)){
        alert('⚠️ please provide a valid number ⁉️')
        return;
    }
    // Triangle first and Sconed input Calculation
    const triangleInputFiledCalculation = 0.5 * (previustriangletInputFiled * previustriangletInputFiled2) ;
    // Calculation area setup a Triangle  
    const calculationTriangle = document.getElementById('calculation-triangle');
    const calculationTrianglestring = calculationTriangle.innerText ;
    const previusCalculationTriangle = parseFloat(calculationTrianglestring);
    // main calculation in area 
     const mainCalculationInTriangle = (triangleInputFiledCalculation + previusCalculationTriangle).toFixed(2) ;
     calculationTriangle.innerText = mainCalculationInTriangle ;
})