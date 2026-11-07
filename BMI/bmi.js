function getbmi(weight, height) {
    const result = weight / (height * height);
    let category = "";

 
    let bmiRange = result < 18.5 ? "underweight" :
                   result < 25 ? "normal" :
                   result < 30 ? "overweight" :
                   result < 35 ? "obese1" :
                   result < 40 ? "obese2" : "severe";

  
    switch (bmiRange) {
        case "underweight":
            category = "Underweight";
            break;
        case "normal":
            category = "Normal Weight";
            break;
        case "overweight":
            category = "Overweight";
            break;
        case "obese1":
            category = "Obesity (Class 1)";
            break;
        case "obese2":
            category = "Obesity (Class 2)";
            break;
        case "severe":
            category = "Severe Obesity (Class 3)";
            break;
        default:
            category = "Invalid BMI";
    }

    document.getElementById("displaybmi").textContent = result.toFixed(2) + " - " + category;
}