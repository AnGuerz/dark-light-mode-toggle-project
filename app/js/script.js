const setLightMode = () => {
    document.querySelector('body').classList.add('light')
    document.querySelector('body').classList.remove('dark')
}

const setDarkMode = () => {
    document.querySelector('body').classList.add('dark')
    document.querySelector('body').classList.remove('light')
}

const setColorMode = () => {
    if (localStorage.getItem('colorMode') == 'dark') {
        setDarkMode()
        darkBtn.click()
    } else if (localStorage.getItem('colorMode') == 'light'){
        setLightMode()
        lightBtn.click()
    }
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (e.matches) {
        setDarkMode();
        localStorage.setItem('colorMode', 'dark');
        setColorMode()
    } else {
        setLightMode();
        localStorage.setItem('colorMode', 'light');
        setColorMode()
    }
})

const darkBtn = document.getElementById('dark')
const lightBtn = document.getElementById('light')
const radioBtns = document.querySelectorAll('.toggle__wrapper input')

setColorMode()

for (let i = 0; i < radioBtns.length; i++) {
    radioBtns[i].addEventListener('click', function() {
        if (darkBtn.checked) {
            localStorage.setItem('colorMode', 'dark')
            setDarkMode()
        } else {
            localStorage.setItem('colorMode', 'light')
            setLightMode() 
        }
    })
}


