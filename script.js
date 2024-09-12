
let content = document.getElementById("content");



function home() {
  content.innerHTML = `
        <h2>Hi there...</h2>
        <h1>I'm Semina!</h1>
        <h3>Software Engineering Student</h3>`
    
        ;
}

function projects() {

    content.innerHTML=`<h2>I'm working on it!</h2>`

}

function cv() {
    fetch(data.json)
    .then(r => r.json())
    .then(data => {
        console.log(data);
    })
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
}