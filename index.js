function validateForm () {
    let x = document.forms["myForm"]["myInput"].value;
    if (x == "") {
        document.getElementById("noName").innerHTML = "Please Enter Name";
        return false;
    } else {
        getInputValue(), getHoliday(), hello();
    }
}

function getInputValue() {
    let inputVal = $("#myInput").val();

    document.getElementById("here").innerHTML = "Welcome " + inputVal + ".";
}

function getHoliday() {
    let selected = $('#holidays option:selected').val();
    document.getElementById("holiday").innerHTML = "You have chosen " + selected + ".";
}

function hello() {
    let intVal = $('#holidays option:selected').val();
    let api = "https://date.nager.at/api/v2/publicholidays/" + intVal + "/US";
    let test2 = document.getElementById("test2");
    if (intVal == 2022) {
        fetch(api)
    .then((res) => res.json())
    .then((data) => {
        let output = "<h2>That's this year! List of Holidays and Dates:</h2>";
        data.forEach(function(user) {
            output += `
            <li>
                <ul>${user.localName}</ul>
                <ul>${user.date}</ul>
            </li>
            `;
        });
        test2.innerHTML = output;
    })
    } else fetch(api)
    .then((res) => res.json())
    .then((data) => {
        let output = "<h2>List of Holidays and Dates:</h2>";
        data.forEach(function(user) {
            output += `
            <li>
                <ul>${user.localName}</ul>
                <ul>${user.date}</ul>
            </li>
            `;
        });
        test2.innerHTML = output;
    })

}