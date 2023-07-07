const aboutMe = () => {
  terminal.insertAdjacentHTML(
    'beforeend',
    `<p class="result aboutmeresult">${data[language].aboutme}</p>`
  );
};

const clear = () => {
  terminalBody.innerHTML = '';
  terminalBody.insertAdjacentHTML('afterbegin', `<div id="terminal"></div>`);
};

const getCv = () => {
  terminal.insertAdjacentHTML(
    'beforeend',
    `<p class="result cvresult">${data[language].cv}</p>`
  );
  const a = document.createElement('a');
  a.href = 'assets/resources/CV Patrick Oyardo - Not Updated.pdf';
  a.setAttribute('download', 'CV Patrick Oyardo - Not Updated.pdf');
  a.setAttribute('target', 'blank');
  a.click();
};

const experiences = () => {
  terminal.insertAdjacentHTML(
    'beforeend',
    `<p class="result redirectresultExperience">${data[language].redirectExperience}</p>`
  );
  const a = document.createElement('a');
  a.href = 'https://www.linkedin.com/in/patrickoyardo/';
  a.setAttribute('target', 'blank');
  a.click();
};

const getGithub = () => {
  terminal.insertAdjacentHTML(
    'beforeend',
    `<p class="result redirectresultGithub">${data[language].redirectGithub}</p>`
  );
  const a = document.createElement('a');
  a.href = 'https://github.com/ptrckyrd98';
  a.setAttribute('target', 'blank');
  a.click();
};

const getMeta = () => {
  terminal.insertAdjacentHTML(
    'beforeend',
    `<p class="result redirectresultMeta">${data[language].redirectMeta}</p>`
  );
  const a = document.createElement('a');
  a.href = 'https://www.facebook.com/ptrckyrd13/';
  a.setAttribute('target', 'blank');
  a.click();
};

const getInstagram = () => {
  terminal.insertAdjacentHTML(
    'beforeend',
    `<p class="result redirectresultInstagram">${data[language].redirectInstagram}</p>`
  );
  const a = document.createElement('a');
  a.href = 'https://www.instagram.com/ptrckyrd_x/';
  a.setAttribute('target', 'blank');
  a.click();
};

const help = () => {
  terminal.insertAdjacentHTML(
    'beforeend',
    `<p class="result">
        <ul class="helpresult">
            ${data[language].help}
        </ul>
    </p>`
  );
};

const hobby = () => {
  terminal.insertAdjacentHTML(
    'beforeend',
    `<p class="result hobbyresult">${data[language].hobby}</p>`
  );
};

const ls = (y, result, secret) => {
  if (y === 0 && result === 'ls -a') {
    terminal.insertAdjacentHTML(
      'beforeend',
      `<div class="result ls lsresult1">${data[language].ls1}</div>`
    );
  } else if (y === 0 && result === 'ls') {
    terminal.insertAdjacentHTML(
      'beforeend',
      `<div class="result ls lsresult2">${data[language].ls2}</div>`
    );
  } else if (y === 1 && result === 'ls -a' && secret === 1) {
    terminal.insertAdjacentHTML(
      'beforeend',
      `<div class="result ls">
        <div><code>.</code></div>
        <div><code>..</code></div>
        <div>dracula</div>
        <div>dark</div>
        <div>ubuntu</div>
        <div>medallion</div>
        <div>matrix</div>
        <div>hello kitty</div>
      </div>`
    );
  } else if (y === 1 && result === 'ls -a') {
    terminal.insertAdjacentHTML(
      'beforeend',
      `<div class="result ls">
        <div><code>.</code></div>
        <div><code>..</code></div>
        <div>dracula</div>
        <div>dark</div>
        <div>ubuntu</div>
        <div>medallion</div>
      </div>`
    );
  } else if (y === 1 && result === 'ls' && secret === 1) {
    terminal.insertAdjacentHTML(
      'beforeend',
      `<div class="result ls">
        <div>dracula</div>
        <div>dark</div>
        <div>ubuntu</div>
        <div>medallion</div>
        <div>matrix</div>
        <div>hello kitty</div>
      </div>`
    );
  } else if (y === 1 && result === 'ls') {
    terminal.insertAdjacentHTML(
      'beforeend',
      `<div class="result ls">
        <div>dracula</div>
        <div>dark</div>
        <div>ubuntu</div>
        <div>medallion</div>
      </div>`
    );
  } else if (y === -1 && result === 'ls') {
    terminal.insertAdjacentHTML(
      'beforeend',
      `<div class="result ls">
        <div>list-secret</div>
        <div><code>Patrick Oyardo</code></div>
      </div>`
    );
  } else if (y === -1 && result === 'ls -a') {
    terminal.insertAdjacentHTML(
      'beforeend',
      `<div class="result ls">
        <div><code>.</code></div>
        <div><code>.secret</code></div>
        <div>list-secret</div>
        <div><code>Patrick Oyardo</code></div>
      </div>`
    );
  }
};

const listSecret = () => {
  terminal.insertAdjacentHTML(
    'beforeend',
    `<p class="result">
        <ul class="listsecretresult">
            ${data[language].listsecretresult}
        </ul>
    </p>`
  );
};

const mailer = () => {
  terminal.insertAdjacentHTML(
    'beforeend',
    `<p class="result bravo">${data[language].congratulation}</p>`
  );
  const a = document.createElement('a');
  a.href = `${data[language].bodymail}`;
  a.click();
};
