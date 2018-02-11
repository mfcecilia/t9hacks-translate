function show_result(event){
    var examples = ["Hackathon", "Programmer", "CU Boulder", "Snow day"];
    var translations = ["hackathon translation", "programmer translation", "cu boulder translation", "snow day translation"];
    var input = document.getElementById("input");
    var results = document.getElementById("translation");
    var btn = document.getElementById("btn");
    var x = 0;
    event.preventDefault();

    console.log(input.value);
    for (x = 0; x < examples.length; x++) {
        if (input.value == examples[x]) {
            console.log(examples[x]);
            console.log(translations[x]);
            results.innerHTML = translations[x];
            break;
        }
    }
    input.value = "";
}
