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


let para =  'My name is Ahmed. I am currently a student of 12th class Commerce under Sindh Board. Along with my regular studies, I have a strong passion for technology and coding. This passion encouraged me to join a professional course at Saylani, where I am learning programming and web development. Over time, I developed a deep interest in becoming a Full Stack Developer because I enjoy the creative process of designing the front-end as well as the logical challenges of building the back-end.\n\nI consider myself a hardworking and self-motivated learner who is always curious to explore new fields of technology. I like solving problems, experimenting with different ideas, and improving my knowledge through practice. My goal is not just to become a professional Full Stack Developer, but also to create innovative projects that can bring positive changes and solutions to real-world problems.\n\nIn the future, I want to enhance my skills in advanced frameworks, contribute to open-source projects. I believe that consistency, dedication, and continuous learning are the keys to success in the tech field.'

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

function delRow() {
  const row = event.target.closest('tr')
  if (confirm("Are you sure you want to delete this row?")) {
    row.remove()
  }
}
function eyesOpen() {
    document.getElementById('dragon').src = 'opened Eyes.png'
}
function eyesClose() {
    document.getElementById('dragon').src = 'closed Eyes.png'
}
let i = 0
function counterplus(){
i++
   document.getElementById('counterNum').innerText = i
}
function counterminus(){
i--
   document.getElementById('counterNum').innerText = i
}
