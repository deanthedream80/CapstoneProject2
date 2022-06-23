function validateForm () {
    let x = document.forms["myForm"]["myInput"].value;
    if (x == "") {
        $("#noName").text("Please Enter Name");
        return false;
    }
    $("#noName").text("");
    getInputValue(),
    getHoliday(),
    hello();
}

function getInputValue() {
    let inputVal = $("#myInput").val();

   $("#here").text("Welcome " + inputVal + ".");
};

function getHoliday() {
    let selected = $('#holidays option:selected').val();
    $("#holiday").text("You have chosen " + selected + ".");
}

function hello() {
    let intVal = $('#holidays option:selected').val();
    let api = "https://date.nager.at/api/v2/publicholidays/" + intVal + "/US";
    if (intVal == 2022) {
        fetch(api).then(res => res.json())
        .then(data => {
            $("#test2").html("<h2>That's this year! List of Holidays and Dates:</h2>");
            data.map(user => {
                let data = $(`
                    <li>
                        <ul>${user.localName}</ul>
                        <ul>${user.date}</ul>
                    </li>
                `);
                $("#test2").append(data);
            });
        })
        return;
    }
    fetch(api).then(res => res.json())
    .then(data => {
        $("#test2").html("<h2>List of Holidays and Dates:</h2>");
        data.map(user => {
            let data = $(`
                <li>
                    <ul>${user.localName}</ul>
                    <ul>${user.date}</ul>
                </li>
            `);
            $("#test2").append(data);
        });
    })
}
