function submitForm(event) {
event.preventDefault()
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


let para = 'My name is Ahmed. I am currently a student of 12th class Commerce under Sindh Board. Along with my regular studies, I have a strong passion for technology and coding. This passion encouraged me to join a professional course at Saylani, where I am learning programming and web development. Over time, I developed a deep interest in becoming a Full Stack Developer because I enjoy the creative process of designing the front-end as well as the logical challenges of building the back-end.\n\nI consider myself a hardworking and self-motivated learner who is always curious to explore new fields of technology. I like solving problems, experimenting with different ideas, and improving my knowledge through practice. My goal is not just to become a professional Full Stack Developer, but also to create innovative projects that can bring positive changes and solutions to real-world problems.\n\nIn the future, I want to enhance my skills in advanced frameworks, contribute to open-source projects. I believe that consistency, dedication, and continuous learning are the keys to success in the tech field.'

let halfPara = document.getElementById('para').firstElementChild.innerText = 'My name is Ahmed. I am currently a student of 12th class Commerce under Sindh Board. Along with my regular studies, I have a strong passion for technology and coding. This passion encouraged me to join a professional course at Saylani, where I am learning programming and web development. Over time, I developed a deep interest in becoming a Full Stack Developer because I enjoy the creative process of designing the front-end as well as the logical challenges of building the back-end.\n\nI consider myself a hardworking and self-motivated learner who is always curious to explore new fields of technology ..........'

function more() {
  document.getElementById('para').firstElementChild.innerText = para
  document.getElementById('btn1').style.display = 'none'
  document.getElementById('btn2').style.display = 'inline-block'

}
function less() {
  document.getElementById('para').firstElementChild.innerText = halfPara
  document.getElementById('btn1').style.display = 'inline-block'
  document.getElementById('btn2').style.display = 'none'

}

function delRow(event) {
  const delrow = event.target.closest('tr')
  delrow.remove()
}
function calculateAge() {
  let dob = document.getElementById("age").value
  let birthDate = new Date(dob)
  let today = new Date()

  let age = today.getFullYear() - birthDate.getFullYear()
  let month = today.getMonth() - birthDate.getMonth()
  let day = today.getDate() - birthDate.getDate()

  if (month < 0 || (month === 0 && day < 0)) {
    age--
  }
  return age
}


let i = 0
function studentForm(event) {
  event.preventDefault()
  document.getElementById('studentForm').style.display = 'none'
  document.getElementsByTagName('table')[0].style.marginTop = '30px'
  document.getElementsByTagName('h2')[0].style.paddingTop = '30px'
  ++i

  let studentName = document.getElementById('fullName').value
  let fatherName = document.getElementById('fatherName').value
  let clas = document.getElementById('class').value
  let gender = document.querySelector('input[name="gender"]:checked').value
  let studentAge = calculateAge()

  let table = document.getElementsByTagName('table')[0]
  let row = document.createElement('tr')
  let data1 = document.createElement('td')
  data1.innerText = i
  let data2 = document.createElement('td')
  data2.innerText = studentName
  let data3 = document.createElement('td')
  data3.innerText = fatherName
  let data4 = document.createElement('td')
  data4.innerText = clas
  let data5 = document.createElement('td')
  data5.innerText = gender
  let data6 = document.createElement('td')
  data6.innerText = studentAge

  let data7 = document.createElement("td")
  let delBtn = document.createElement("button")
  delBtn.innerText = "Del"
  delBtn.setAttribute("onclick", "delRow(event)")
  data7.appendChild(delBtn)

  let data8 = document.createElement("td")
  let editBtn = document.createElement("button")
  editBtn.innerText = "Edit"
  editBtn.setAttribute("onclick", "editRow(event)")
  data8.appendChild(editBtn)

  row.appendChild(data1)
  row.appendChild(data2)
  row.appendChild(data3)
  row.appendChild(data4)
  row.appendChild(data5)
  row.appendChild(data6)
  row.appendChild(data7)
  row.appendChild(data8)
  table.appendChild(row)
}

function editRow(event) {
  document.getElementById('studentForm').style.display = 'flex'
  document.getElementById('submitBtn').innerText = 'Update'
  document.getElementById('submitBtn').setAttribute('onclick', 'updateRow(event)')
  editrow = event.target.closest('tr')
  document.getElementById('fullName').value = editrow.children[1].innerText
  document.getElementById('fatherName').value = editrow.children[2].innerText
  document.getElementById('class').value = editrow.children[3].innerText

  let genderValue = editrow.children[4].innerText
  document.querySelector(`input[name="gender"][value="${genderValue}"]`).checked = true
  document.getElementById('age').value = ''
}
function updateRow(event) {
  event.preventDefault()
  let nametd = editrow.children[1]
  let f_nametd = editrow.children[2]
  let classtd = editrow.children[3]
  let gendertd = editrow.children[4]
  let agetd = editrow.children[5]

  let studentName = document.getElementById('fullName').value
  let fatherName = document.getElementById('fatherName').value
  let clas = document.getElementById('class').value
  let gender = document.querySelector('input[name="gender"]:checked').value
  let studentAge = calculateAge()

  nametd.innerText = studentName
  f_nametd.innerText = fatherName
  classtd.innerText = clas
  gendertd.innerText = gender
  agetd.innerText = studentAge

  document.getElementById('studentForm').style.display = 'none'
  document.getElementsByTagName('table')[0].style.marginTop = '30px'
  document.getElementsByTagName('h2')[0].style.paddingTop = '30px'
  document.getElementById('submitBtn').innerText = 'Submit'
  document.getElementById('submitBtn').setAttribute('onclick', 'studentForm(event)')
}

function addStudent() {
  document.getElementById('studentForm').style.display = 'flex'
  document.getElementById('fullName').value = ''
  document.getElementById('fatherName').value = ''
  document.getElementById('class').value = 'I'
  document.getElementById("age").value = ''

  let gender = document.querySelector('input[name="gender"]:checked')
  if (gender) {
    gender.checked = false
  }

}