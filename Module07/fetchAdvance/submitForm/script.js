const userForm = document.getElementById('userForm')


async function submitForm(e) {
    e.preventDefault()
    const formData = new FormData(this)
    const options = {
        method: 'POST',
        body: formData,
    }

    try {
        const res = await fetch('https://httpbin.org/post ', options)
        const {form} = await res.json()
        console.log(form)

        if(!form) {
            throw new Error('Form Invalid')
        }
    } catch (e) {
        console.warn(e)
    }
}


userForm.addEventListener('submit', submitForm)
