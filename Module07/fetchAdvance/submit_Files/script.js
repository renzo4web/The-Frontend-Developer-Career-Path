const uploadForm = document.getElementById('upload-form')

const uploadFile = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    const files = uploadForm.querySelector('input[type="file"]').files
    for (let file of files) {
        formData.append(file.name, file)
    }
    const option = {
        method: 'POST',
        body: formData
    }

    try {
        const res = await fetch('https://httpbin.org/post', option)
        const {files} = await res.json()
        console.log(files)
    } catch (e) {
        console.warn(e)
    }


}

uploadForm.addEventListener('submit', uploadFile)