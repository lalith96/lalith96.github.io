function senddetails() {
    if (!validatefirstname())
    {
        $('#inputfname').border="1px solid red";
    }
    //     $('#errorfullname').show();
    //     $('#errorfirstname').show();
}
function senddata() {
    const data = {
        fname: $('#fname').val(),
        fname: $('#fullname').val()
    }
    $.ajax({
        type:'POST',
        url: "https://idcarddetails.firebaseio.com/appplication.json",
        data: JSON.stringify(data),
        success: onSuccess
    });
}
const onSuccess=(data) => {
    console.log("Details inserted successfully");
    console.log(data);
}
function validatefirstname() {
    var fname = $('#fname').val();
    if (fname === '')
        return false;
    else
        return true;
}
function validatefullname() {
    var fullname = $('#fullname').val();
    if (fullname === '')
        return false;
    else
        return true;
}
$(document).ready(function () {
    $('#errorfirstname').hide();
    $('#errorfullname').hide();
});
