// ARRAY WITH MAIN COLOR INPUT VALUES

const arrayMainColors = [
    '--brand-light',
    '--navy',
    '--purple',
    '--fuschia',
    '--pink',
    '--danger',
    '--orange',
    '--yellow',
    '--lime',
    '--green',
    '--cyan'
]

for (color of arrayMainColors) {
    const mainColor = document.getElementById('main-color')
    const newInput = document.createElement('input')
    newInput.type = 'radio'
    newInput.name = 'main-color'
    newInput.value = `var(${color})`
    newInput.style.backgroundColor = `var(${color})`
    newInput.id = color.replace('--', '')

    if (arrayMainColors.indexOf(color) === 0) {
        newInput.checked = true
    }

    mainColor.append(newInput)
}


// SCRIPT TO CHANGE TEXT LABEL WHEN CHOOSING LIGHT/DARK THEME

const darkThemeInput = document.getElementById('light-dark-theme')
let darkThemeLabel = document.getElementById('theme-label')

darkThemeInput.addEventListener('change', () => {
    darkThemeLabel.innerText = darkThemeInput.checked ? 'Claro' : 'Escuro'
})


// CHANGE DATE COLORS IF SELECTED OR NOT

function changeInputDateColor(dateType) {
    const dateValue = document.getElementById(dateType)

    if (dateValue.value) {
        dateValue.style.color = 'var(--text-body)'
    } else {
        dateValue.style.color = 'var(--input-placeholder)'
    }
}