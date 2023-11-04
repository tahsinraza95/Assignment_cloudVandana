var fname = document.getElementById('firstName');
var lname = document.getElementById('lastName');
var dob = document.getElementById('DOB');
var country = document.getElementById('country');
var gender = document.getElementsByName('gender');
var profession = document.getElementById('profession');
var email = document.getElementById('email');
var mob = document.getElementById('mobNum');

var submit = document.getElementById('sbm');

var reset = document.getElementById('reset');


submit.addEventListener('click', function () {
    var gend;
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked)
            gend = gender[i].value;
    }
    window.alert(`
        First Name : ${fname.value}
        Last Name : ${lname.value}
        Date of Birth : ${dob.value}
        Country : ${country.value}
        Gender : ${gend}
        Profession : ${profession.value}
        Email : ${email.value}
        Mobile Number : ${mob.value}`);

})

reset.addEventListener('click', function () {
    location.reload();
})

