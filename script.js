
//variables

const content = document.getElementById("content");
let styleTag = document.getElementById("dynamic-style");

// variable that changes background color
let count = 0;

//functions
function home() {
  content.innerHTML = `
        <h2>Hi there...</h2>
        <h1>I'm Semina!</h1>
        <h3>Software Engineering Student</h3>`
    
        ;
        
    count++;
        changeBackground(count) ;

}

function projects() {

    content.innerHTML=`<h2>I'm working on it!</h2>`
    changeBackground(count);
}

function cv() {
    fetch('data.json')
    .then(r => r.json())
    .then(data => {
        console.log(data);
    })
        
    count++;
        changeBackground(count); 
    content.innerHTML = `        <button>Experience</button>
        <button>Volunteering</button>
        <button>Education</button>
        <button>Skills</button>`
    
} 

function about() {
    content.innerHTML=`    <div id="about-me">
        <h3>About me</h3>
    <div id="bio-flex"><div id="bio">  
     <p>
    Hi, I'm Semina Pekmezovic, a Software Engineering student with a passion for problem-solving and creating innovative solutions through code. I thrive on learning new technologies and applying them to real-world challenges, whether it's through building responsive web applications or troubleshooting technical issues. </p>
        <p>
        
            In my internships and projects, I’ve developed a strong foundation in programming languages like JavaScript, HTML, CSS, and SQL, along with practical experience in IT processes. I'm always eager to tackle new challenges and contribute to impactful projects that make a difference.</p></div>
                <img src="headshot1.png" alt="headshot">
    </div></div>`;
    
    count++;
    changeBackground(count);
}

function changeBackground(count) {

    count= count% 4;
    styleTag.innerHTML = `
     body {
animation: background 4s alternate-reverse infinite ease-in-out;
background: var(--color${count});

}
        @keyframes background {
    0% {background: linear-gradient(90deg, var(--color${count+1}) 0%, var(--color${count+2}) 0%);}
    50% {background: linear-gradient(90deg, var(--color${count+1}) 0%, var(--color${count+2}) 50%);}
    100% {background: linear-gradient(90deg, var(--color${count+1}) 0%, var(--color${count+2}) 100%);}
  }`


}