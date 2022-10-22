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

    if (nomor === 1) {
        productBox1.style.display = "flex"
        productBox2.style.display = "none"
        productBox3.style.display = "none"
        productBox4.style.display = "none"
    } else if (nomor === 2) {
        productBox1.style.display = "none"
        productBox2.style.display = "flex"
        productBox3.style.display = "none"
        productBox4.style.display = "none"
    } else if (nomor === 3) {
        productBox1.style.display = "none"
        productBox2.style.display = "none"
        productBox3.style.display = "flex"
        productBox4.style.display = "none"
    } else if (nomor === 4) {
        productBox1.style.display = "none"
        productBox2.style.display = "none"
        productBox3.style.display = "none"
        productBox4.style.display = "flex"
    }
}

function back(wrapper) {
    console.log('test')
    newBox.style.display = "none"
    wrapper.style.display = "block"
    // window.location.reload()
}