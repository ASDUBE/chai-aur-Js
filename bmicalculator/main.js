const form = document.querySelector
('form');

form.addEventListener('submit' , function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const result = document.querySelector('#results');

  if (height === " " || height<0 || isNaN(height)) {
    result.innerHTML = `Bhai yaar sahi height daal ${height}`;
  } else if (weight === " "|| weight<0 || isNaN(weight)){
    result.innerHTML= `please bhai weight ke saaath majak nhi`;

  } else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2);


    // result.innerHTML = `<span> ${bmi}</span>`
    // <br></br>

    if (bmi<19){
      result.innerHTML  = `<span> BMI: ${bmi}</span>
      <br>
      <p> Khana Khao </p>` 
       } else if (bmi>=19 && bmi<25){
        result.innerHTML  = `<span> BMI: ${bmi}</span>
      <br>
      <p> Perfect </p>` 

       } else {
        result.innerHTML  = `<span> BMI: ${bmi}</span>
      <br>
      <p> Its OK , loose some carb </p>` 

       }

    


  }
})