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

    if (nomor === 9) {
        productBox9.style.display = "flex"
        productBox10.style.display = "none"
        productBox11.style.display = "none"
        productBox12.style.display = "none"
    } else if (nomor === 10) {
        productBox9.style.display = "none"
        productBox10.style.display = "flex"
        productBox11.style.display = "none"
        productBox12.style.display = "none"
    } else if (nomor === 11) {
        productBox9.style.display = "none"
        productBox10.style.display = "none"
        productBox11.style.display = "flex"
        productBox12.style.display = "none"
    } else if (nomor === 12) {
        productBox9.style.display = "none"
        productBox10.style.display = "none"
        productBox11.style.display = "none"
        productBox12.style.display = "flex"
    }
}

function back(wrapper) {
    console.log('test')
    newBox.style.display = "none"
    wrapper.style.display = "block"
    // window.location.reload()
}