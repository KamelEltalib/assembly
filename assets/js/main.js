let loaderBar = document.querySelector('.loaderBar'),
      loaderBarPress = document.querySelector('.loaderBarPress'),
      loaderBarLink = document.querySelector('.loaderBarLink'),
      loaderBarTime = document.querySelector('.loaderBarTime'),
      timer = 60,
      i = 0.9;


window.addEventListener('load', () => {
      let start = setInterval(() => {
            if (timer >= 0) {
                  loaderBarTime.innerHTML = timer;
                  loaderBarPress.style.width = `${i = i + 0.8}%`;
                  loaderBarPress.innerHTML = `${Math.ceil(i = i + 0.8)}%`;
                  timer--;
            }
            if (timer <= 0) {

                  clearInterval(start);
                  let div = document.createElement('div');
                  div.style.marginBottom = '300px';
                  let link = document.createElement('a');
                  link.setAttribute('id', 'link');
                  link.setAttribute('class', 'btn btn-primary d-block w-50 mt-5 mb-5 m-auto');
                  link.setAttribute('href', 'https://drive.google.com/drive/folders/1OuZc6AO7z1CfRd1AEkEMDkwmFxkyd3U7?usp=sharing');
                  link.innerHTML = `تحميل <i class="fa-solid fa-download"></i>`;
                  div.appendChild(link);
                  document.body.appendChild(div);
                  loaderBarLink.innerHTML = `تحميل <i class="fa-solid fa-download"></i>`;
                  loaderBarLink.setAttribute('href', '#link')
                  loaderBarLink.removeAttribute('disabled')
            }

      }, 1000)
})