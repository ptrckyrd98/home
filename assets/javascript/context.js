var data = {
  "english": {
    "welcome":
      'Welcome to my portfolio ! To display the available commands type <code>help</code>. To validate each command press <em>Enter</em>, you can use the <em>Tab</em> key to help you complete a command. Note: This project still on progress!',

    "help": `<li><code>about-me</code>: Display information about me</li>
    <li><code>clear</code>: Clean the terminal</li>
    <li><code>experiences</code>: Displays the list of my experiences</li>
    <li><code>get cv</code>: Download my CV</li>
    <li><code>get linkedin</code>: Link to my Linkedin</li>
    <li><code>get github</code>: Link to my Github</li>
    <li><code>get meta</code>: Link to my Meta</li>
    <li><code>get instagram</code>: Link to my Instagram</li>
    <li><code>help</code>: Displays the list of commands</li>
    <li><code>passions</code>: Displays the list of my hobbies</li>
    <li><code>my-projects</code>: Displays the list of my personal projects</li>
    <li><code>themes</code>: Change the terminal theme</li>
    <li><em>You can use the TAB key to complete a command line</em></li>
    <li><em>You can find the old commands with the up and down arrows</em></li>`,

    "aboutme": `{<br>
      &nbsp;&nbsp;&nbsp;"name" : "Patrick Heinz Oyardo",<br>
      &nbsp;&nbsp;&nbsp;"profession": "Back-End Dev | Web3 Dev | Web Designer",<br>
      &nbsp;&nbsp;&nbsp;"location" : "Parañaque City, Philippines"<br>
    }`,

    "cv" : `Resume downloading ...`,

    "hobby" : `{<br>
      &nbsp;&nbsp;&nbsp;"Sport": "Cycling",<br>
      &nbsp;&nbsp;&nbsp;"Programming": "JS, Solidity",<br>
      &nbsp;&nbsp;&nbsp;"Other" : "Online Games"<br>
    }`,

    "project" : `<table class="result">
    <tr>
      <th>index</th>
      <th>Name</th>
      <th>Tech</th>
      <th class="description">Description</th>
      <th>As a team?</th>
      <th>Github</th>
    </tr>
    <tr>
      <td class="center">1</td>
      <td class="center">Termfolio</td>
      <td class="center">HTML CSS JS</td>
      <td>Presentation of my portfolio as a terminal. Integration of autocomplete, command history, etc. The latter can be used as a real terminal.</td>
      <td class="center">No</td>
      <td class="center"><a href="https://github.com/ptrckyrd98/home" target="blank">Link</a></td>
    </tr>
    </table><br>
    <p class="result"><em>You can see the site attached to the project using the command</em> <code>my-projects[index].website</code><em>, index being the number associated with the project.</em></p>`,

    "redirectLinkedin" : `You will be redirected to Linkedin.`,

    "redirectGithub" : `You will be redirected to Github.`,

    "redirectMeta" : `You will be redirected to Meta.`,

    "redirectInstagram" : `You will be redirected to Instagram.`,

    "glassmorphismOff" : `<p class="notfound result glassmorphismOffresult">You have just deactivated the glassmorphism design to activate it use the <code>glassmophism</code> command.`,

    "glassmorphismOn" : `<p class="notfound result glassmorphismOnresult">You have just activated the glassmorphism design to deactivate it use the <code>glassmophism</code> command.`,

    "notfound" : `<span class="notfoundlanguage"><br><br>Type the command <code>help</code> to display the list of available commands.</p></span>`,

    "notfoundmenu" : `<span class="notfoundmenu"><br><br>Type the command <code>themes</code> to display the list of available themes.</p><br>
    <p class="result">/!\\ to return to the main menu please use the command <code>exit</code></p></span>`,

    "website" : `<p class="result websiteresult">You will be redirected to the project website.</p>`,

    "ls1" : `
    <div><code>.</code></div>
    <div><code>..</code></div>
    <div>about</div>
    <div>clear</div>
    <div>experiences</div>
    <div>get CV</div>
    <div>get linkedin</div>
    <div>get github</div>
    <div>get meta</div>
    <div>get instagram</div>
    <div>help</div>
    <div>passions</div>
    <div>my-projects</div>
    <div>my-projects[1].website</div>
    <div>my-projects[2].website</div>
    <div>my-projects[3].website</div>
    <div>my-projects[4].website</div>
    <div>my-projects[5].website</div>
    <div>my-projects[6].website</div>
    <div>my-projects[7].website</div>
    <div><code>themes</code></div>
  `,

  "ls2" : `
    <div>about</div>
    <div>clear</div>
    <div>experiences</div>
    <div>get CV</div>
    <div>get linkedin</div>
    <div>get github</div>
    <div>get meta</div>
    <div>get instagram</div>
    <div>help</div>
    <div>passions</div>
    <div>my-projects</div>
    <div>my-projects[1].website</div>
    <div>my-projects[2].website</div>
    <div>my-projects[3].website</div>
    <div>my-projects[4].website</div>
    <div>my-projects[5].website</div>
    <div>my-projects[6].website</div>
    <div>my-projects[7].website</div>
    <div><code>themes</code></div>
  `,

  "listsecretresult" : `
      <li><code>move</code>: Activate background animation</li>
      <li><code>remove</code>: Disables background animation</li>
      <li><code>glassmorphism</code>: Enable/disable the glassmorphism animation on the theme</li>
      <li><code>secrets</code>: Enable secret themes</li>
      <li>/!\\ These commands are not part of the easter egg to find. Good luck, you're almost there!</li>`,

      "congratulation" : `Congratulations you have found the <code>.secret</code> folder.`,

      "bodymail" : `mailto:patrickoyardo98@gmail.com?subject=Your portfolio is amazing, are you open to opportunities?&body=Patrick Oyardo > Hello to you who found my easter egg, I am open to opportunities professionals so do not hesitate to contact me by sending me this email with your proposal. I will contact you to arrange a phone interview. Thank you for your time!`
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
