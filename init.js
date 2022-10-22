var x = document.getElementById('login');
var y = document.getElementById('register');
var z = document.getElementById('btn');
function register() {
    x.style.left = '-400px';
    y.style.left = '50px';
    z.style.left = '110px';
}
function login() {
    x.style.left = '50px';
    y.style.left = '450px';
    z.style.left = '0px';
}
var modal = document.getElementById('login-form');
window.onclick = function (event) {
    hero.style.display = "none"
    if (event.target == modal) {
        modal.style.display = "none";
        hero.style.display = "block"
    }
    hero.style.display = "block"
}

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
        productBox5.style.display = "none"
        productBox6.style.display = "none"
        productBox7.style.display = "none"
        productBox8.style.display = "none"
        productBox9.style.display = "none"
        productBox10.style.display = "none"
        productBox11.style.display = "none"
        productBox12.style.display = "none"
    } else if (nomor === 2) {
        productBox1.style.display = "none"
        productBox2.style.display = "flex"
        productBox3.style.display = "none"
        productBox4.style.display = "none"
        productBox5.style.display = "none"
        productBox6.style.display = "none"
        productBox7.style.display = "none"
        productBox8.style.display = "none"
        productBox9.style.display = "none"
        productBox10.style.display = "none"
        productBox11.style.display = "none"
        productBox12.style.display = "none"
    } else if (nomor === 3) {
        productBox1.style.display = "none"
        productBox2.style.display = "none"
        productBox3.style.display = "flex"
        productBox4.style.display = "none"
        productBox5.style.display = "none"
        productBox6.style.display = "none"
        productBox7.style.display = "none"
        productBox8.style.display = "none"
        productBox9.style.display = "none"
        productBox10.style.display = "none"
        productBox11.style.display = "none"
        productBox12.style.display = "none"
    } else if (nomor === 4) {
        productBox1.style.display = "none"
        productBox2.style.display = "none"
        productBox3.style.display = "none"
        productBox4.style.display = "flex"
        productBox5.style.display = "none"
        productBox6.style.display = "none"
        productBox7.style.display = "none"
        productBox8.style.display = "none"
        productBox9.style.display = "none"
        productBox10.style.display = "none"
        productBox11.style.display = "none"
        productBox12.style.display = "none"
    } else if (nomor === 5) {
        productBox1.style.display = "none"
        productBox2.style.display = "none"
        productBox3.style.display = "none"
        productBox4.style.display = "none"
        productBox5.style.display = "flex"
        productBox6.style.display = "none"
        productBox7.style.display = "none"
        productBox8.style.display = "none"
        productBox9.style.display = "none"
        productBox10.style.display = "none"
        productBox11.style.display = "none"
        productBox12.style.display = "none"
    } else if (nomor === 6) {
        productBox1.style.display = "none"
        productBox2.style.display = "none"
        productBox3.style.display = "none"
        productBox4.style.display = "none"
        productBox5.style.display = "none"
        productBox6.style.display = "flex"
        productBox7.style.display = "none"
        productBox8.style.display = "none"
        productBox9.style.display = "none"
        productBox10.style.display = "none"
        productBox11.style.display = "none"
        productBox12.style.display = "none"
    } else if (nomor === 7) {
        productBox1.style.display = "none"
        productBox2.style.display = "none"
        productBox3.style.display = "none"
        productBox4.style.display = "none"
        productBox5.style.display = "none"
        productBox6.style.display = "none"
        productBox7.style.display = "flex"
        productBox8.style.display = "none"
        productBox9.style.display = "none"
        productBox10.style.display = "none"
        productBox11.style.display = "none"
        productBox12.style.display = "none"
    } else if (nomor === 8) {
        productBox1.style.display = "none"
        productBox2.style.display = "none"
        productBox3.style.display = "none"
        productBox4.style.display = "none"
        productBox5.style.display = "none"
        productBox6.style.display = "none"
        productBox7.style.display = "none"
        productBox8.style.display = "flex"
        productBox9.style.display = "none"
        productBox10.style.display = "none"
        productBox11.style.display = "none"
        productBox12.style.display = "none"
    } else if (nomor === 9) {
        productBox1.style.display = "none"
        productBox2.style.display = "none"
        productBox3.style.display = "none"
        productBox4.style.display = "none"
        productBox5.style.display = "none"
        productBox6.style.display = "none"
        productBox7.style.display = "none"
        productBox8.style.display = "none"
        productBox9.style.display = "flex"
        productBox10.style.display = "none"
        productBox11.style.display = "none"
        productBox12.style.display = "none"
    } else if (nomor === 10) {
        productBox1.style.display = "none"
        productBox2.style.display = "none"
        productBox3.style.display = "none"
        productBox4.style.display = "none"
        productBox5.style.display = "none"
        productBox6.style.display = "none"
        productBox7.style.display = "none"
        productBox8.style.display = "none"
        productBox9.style.display = "none"
        productBox10.style.display = "flex"
        productBox11.style.display = "none"
        productBox12.style.display = "none"
    } else if (nomor === 11) {
        productBox1.style.display = "none"
        productBox2.style.display = "none"
        productBox3.style.display = "none"
        productBox4.style.display = "none"
        productBox5.style.display = "none"
        productBox6.style.display = "none"
        productBox7.style.display = "none"
        productBox8.style.display = "none"
        productBox9.style.display = "none"
        productBox10.style.display = "none"
        productBox11.style.display = "flex"
        productBox12.style.display = "none"
    } else if (nomor === 12) {
        productBox1.style.display = "none"
        productBox2.style.display = "none"
        productBox3.style.display = "none"
        productBox4.style.display = "none"
        productBox5.style.display = "none"
        productBox6.style.display = "none"
        productBox7.style.display = "none"
        productBox8.style.display = "none"
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
