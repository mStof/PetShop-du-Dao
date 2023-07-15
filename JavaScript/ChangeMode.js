// Modo claro, Modo escuro.

function ChangeMode(){
    if(document.body.dataset.mode == 'Light'){
        ball.style.transform = 'translateX(22px)';
        ball.style.backgroundColor = '#fff';
        mode.style.borderColor = '#fff';
        document.body.dataset.mode = 'Dark';

        filtros.style.backgroundColor = '#2A2A2A';
        filtros.style.border = '1px solid #fff';

        document.documentElement.style.setProperty("--text-color", "#EEE");
        document.documentElement.style.setProperty("--background", "#1E1E1E");
        document.documentElement.style.setProperty("--background-2", "#2A2A2A");
        document.documentElement.style.setProperty("--purple-color", "#D376FF");
        document.documentElement.style.setProperty("--purple-strong", "#C959FF");
        document.documentElement.style.setProperty("--yellow-color", "#FFED46");
        document.documentElement.style.setProperty("--footer-color", "#101010")
        document.querySelector('#menu .search').style.boxShadow = 'rgba(255, 255, 255, 0.51) 0px 0px 7px 2px'
    }
    else{
        ball.style.transform = 'translateX(0px)';
        ball.style.backgroundColor = '#000';
        mode.style.borderColor = '#000';
        document.body.dataset.mode = 'Light';

        filtros.style.backgroundColor = '#fbed71';
        filtros.style.border = '1px solid transparent';

        document.documentElement.style.setProperty("--text-color", "#1F1F1F");
        document.documentElement.style.setProperty("--background", "#fafafa");
        document.documentElement.style.setProperty("--background-2", "#fafafa");
        document.documentElement.style.setProperty("--purple-color", "#E5AFFF");
        document.documentElement.style.setProperty("--purple-strong", "#cb5cff");
        document.documentElement.style.setProperty("--yellow-color", "#fbed71");
        document.documentElement.style.setProperty("--footer-color", "#d0d0d0")
        document.querySelector('#menu .search').style.boxShadow = 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
    }
  }