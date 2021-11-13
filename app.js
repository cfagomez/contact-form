console.log ('funcionando')

const botonSubmit = document.querySelector('#submitButton')

const botonLoading = document.querySelector('#loadingButton')

const form = document.querySelector('#formulario')

const toast = document.querySelector('#toast')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const datos = new FormData(formulario)

    console.log('Campo Email', datos.get('emailCampo'))
    console.log('Campo Contraseña', datos.get('passwordCampo'))
    console.log('Campo Checkbox', datos.get('checkboxCampo'))

    botonSubmit.classList.add('d-none')
    botonLoading.classList.remove('d-none')

    window.setTimeout(() => {

        botonSubmit.classList.remove('d-none')
        botonLoading.classList.add('d-none')

        const eventoToast = new bootstrap.Toast(toast)
        eventoToast.show()
    
    }, 3000)

    form.reset()

})