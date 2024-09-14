document.getElementById('resume')?.addEventListener('submit', function (event)
{
    event.preventDefault();

    const nameElement = document.getElementById('name') as HTMLInputElement
    const emailElement = document.getElementById('email') as HTMLInputElement
    const phoneElement = document.getElementById('phone') as HTMLInputElement
    const educationElement = document.getElementById('education') as HTMLTextAreaElement
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement
     
 if(nameElement && emailElement && phoneElement && educationElement && skillsElement && experienceElement ){
    let name = nameElement.value
    let email = emailElement.value
    let phone = phoneElement.value
    let education = educationElement.value
    let skills = skillsElement.value
    let experience = experienceElement.value
   const resumeOutput = `
   <h2>Resume</h2>
   <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>
    
    <h2>Education</h2>
    <p>${education}</p>
    
    <h2>Skills</h2>
    <p>${skills}</p>
    
    <h2>Experience</h2>
    <p>${experience}</P>`;

    const resumeOutputElement = document.getElementById('resume_output')
    if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
    }else{
          console.error(`the resume output elements are missing`)
    }
}else{
    console.error(`one or more output elements are missing`)
}
})