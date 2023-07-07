var data = {
  "english": {
    "welcome":
      'Welcome to my portfolio ! To display the available commands type <code>help</code>. To validate each command press <em>Enter</em>, you can use the <em>Tab</em> key to help you complete a command.',

    "help": `<li><code>about-me</code>: Display information about me</li>
    <li><code>clear</code>: Clean the terminal</li>
    <li><code>experiences</code>: Displays the list of my experiences</li>
    <li><code>get cv</code>: Download my CV</li>
    <li><code>get linkedin</code>: Link to my Linkedin</li>
    <li><code>get github</code>: Link to my Github</li>
    <li><code>help</code>: Displays the list of commands</li>
    <li><code>passions</code>: Displays the list of my hobbies</li>
    <li><code>my-projects</code>: Displays the list of my personal projects</li>
    <li><code>themes</code>: Change the terminal theme</li>
    <li><em>You can use the TAB key to complete a command line</em></li>
    <li><em>You can find the old commands with the up and down arrows</em></li>`,

    "aboutme": `{<br>
      &nbsp;&nbsp;&nbsp;"name" : "Patrick Heinz Oyardo",<br>
      &nbsp;&nbsp;&nbsp;"profession": "Back-End Dev | Web3 Dev | Web Designer",<br>
      &nbsp;&nbsp;&nbsp;"email": "patrickoyardo98@gmail.com",<br>
      &nbsp;&nbsp;&nbsp;"location" : "Parañaque City, Philippines"<br>
    }`,
  },
};

let welcome = document.getElementById('welcome');
let english = document.getElementById('english');
let language;

window.addEventListener('load', setLanguage());

function setLanguage() {
  if (localStorage.getItem('language') === null) {
    localStorage.setItem('language', 'english');
  }
  language = localStorage.getItem('language');
  welcome.innerHTML = data[language].welcome;
  document.querySelectorAll('.helpresult').forEach((element) => {
    element.innerHTML = data[language].help;
  });
  document.querySelectorAll('.aboutmeresult').forEach((element) => {
    element.innerHTML = data[language].aboutme;
  });
  document.querySelectorAll('.experienceresult').forEach((element) => {
    element.innerHTML = data[language].experience;
  });
  document.querySelectorAll('.cvresult').forEach((element) => {
    element.innerHTML = data[language].cv;
  });
  document.querySelectorAll('.redirectresultLinkedin').forEach((element) => {
    element.innerHTML = data[language].redirectLinkedin;
  });
  document.querySelectorAll('.redirectresultGithub').forEach((element) => {
    element.innerHTML = data[language].redirectGithub;
  });
  document.querySelectorAll('.hobbyresult').forEach((element) => {
    element.innerHTML = data[language].hobby;
  });
  document.querySelectorAll('.resultproject').forEach((element) => {
    element.innerHTML = data[language].project;
  });
  document.querySelectorAll('.glassmorphismOffresult').forEach((element) => {
    element.innerHTML = data[language].glassmorphismOff;
  });
  document.querySelectorAll('.glassmorphismOnresult').forEach((element) => {
    element.innerHTML = data[language].glassmorphismOn;
  });
  document.querySelectorAll('.notfoundlanguage').forEach((element) => {
    element.innerHTML = data[language].notfound;
  });
  document.querySelectorAll('.notfoundmenu').forEach((element) => {
    element.innerHTML = data[language].notfoundmenu;
  });
  document.querySelectorAll('.websiteresult').forEach((element) => {
    element.innerHTML = data[language].website;
  });
  document.querySelectorAll('.lsresult1').forEach((element) => {
    element.innerHTML = data[language].ls1;
  });
  document.querySelectorAll('.lsresult2').forEach((element) => {
    element.innerHTML = data[language].ls2;
  });
  document.querySelectorAll('.listsecretresult').forEach((element) => {
    element.innerHTML = data[language].listsecretresult;
  });
  document.querySelectorAll('.congratulation').forEach((element) => {
    element.innerHTML = data[language].congratulation;
  });
}
