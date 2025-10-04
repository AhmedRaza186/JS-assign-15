function submitForm() {
    document.getElementById('signup').style.display = 'none'
    document.getElementById('afterSignup').style.display = 'flex'
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let confirmPassword = document.getElementById('confirmPassword').value
    document.getElementById('p1').innerText = firstName
    document.getElementById('p2').innerText = lastName
    document.getElementById('p3').innerText = email
    document.getElementById('p4').innerText = password
}