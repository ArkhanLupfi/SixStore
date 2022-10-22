document.getElementById("year").innerHTML = new Date().getFullYear();

function chat(product_name) {
    const message = `Hello, I want to ask if this ${product_name} is still available?`
    const whatsapp = `https://wa.me/6285280136173?text=${message}`
    open(whatsapp, "blank")
}



const product1 = document.getElementById("product1")
const wrapper = document.getElementById("wrapper")
const newBox = document.getElementById("newBox")

function shopDetail(nomor) {
    console.log('produk: ', nomor)
    newBox.style.display = "block"
    wrapper.style.display = "none"

    if (nomor === 5) {
        productBox5.style.display = "flex"
        productBox6.style.display = "none"
        productBox7.style.display = "none"
        productBox8.style.display = "none"
    } else if (nomor === 6) {
        productBox5.style.display = "none"
        productBox6.style.display = "flex"
        productBox7.style.display = "none"
        productBox8.style.display = "none"
    } else if (nomor === 7) {
        productBox5.style.display = "none"
        productBox6.style.display = "none"
        productBox7.style.display = "flex"
        productBox8.style.display = "none"
    } else if (nomor === 8) {
        productBox5.style.display = "none"
        productBox6.style.display = "none"
        productBox7.style.display = "none"
        productBox8.style.display = "flex"
    }
}

function back(wrapper) {
    console.log('test')
    newBox.style.display = "none"
    wrapper.style.display = "block"
    // window.location.reload()
}