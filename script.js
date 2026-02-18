let Them_btn = document.querySelector("#them");
let root = document.documentElement;
let them = true;
let themIcon = document.querySelector("#themIcon");
Them_btn.addEventListener("click", () => {
    if (them === true) {
        themIcon.classList.remove("fa-moon");
        themIcon.classList.add("fa-sun");
    }
    else {
        themIcon.classList.remove("fa-sun");
        themIcon.classList.add("fa-moon");
    }
    them = !them;
    ThemColorChange(them);
});


const btn = document.querySelector("#bars");
const nav = document.querySelector(".slid");
const body = document.querySelector("body");
let c = false;
btn.addEventListener("click", () => {
    if (c === false) {
        body.style.overflow = "hidden"
    }
    else {
        body.style.overflow = "none";
    }
    nav.classList.toggle("active");
});



function iconOfskilles() {
    let brand = "fab fa-";
    let solid = "fa-solid fa-";

    let fontTextArr = [
        "android",
        "java",
        "js",
        "python",
        "node-js",
        "database",
        "figma"
    ];

    let main_content = document.querySelector(".main-content");

    for (let i = 0; i < fontTextArr.length; i++) {
        let box = document.createElement("div");
        let icon = document.createElement("i");
        let p = document.createElement("p");

        box.className = "main-content-box";
        p.className = "main-content-box-p";

        if (i === 5) {
            icon.className = solid + fontTextArr[i];
            p.textContent = "Database";
            icon.id = "database";
        } else {
            icon.className = brand + fontTextArr[i];
            p.textContent = fontTextArr[i];
        }

        box.append(icon);
        box.append(p);
        main_content.append(box);
    }
}

let searchBox = document.querySelector(".search-box");
let searchBnt = document.querySelector("#search");
let cl = false;
searchBnt.addEventListener("click", () => {
    console.log("Enter the seach");

    if (!cl) {   // when hidden
        searchBox.style.display = "flex";
        searchBox.style.top = "8vh";
        cl = true;
    } else {     // when visible
        searchBox.style.top = "-16vh";
        searchBox.style.display = "none";
        cl = false;
    }
});

function ThemColorChange(them) {
    root.style.setProperty("--bg-black", them ? "#000000" : "#ffffff");
    root.style.setProperty("--col-white", them ? "whitesmoke" : "#000000");
    root.style.setProperty("--col-black", them ? "#000000" : "#ffffff");
    root.style.setProperty("--box-shadow", them ? "rgb(214 202 202 / 49%)" : "4px 5px 12px rgb(129 115 115 / 49%)");
    root.style.setProperty("--main-bgcolor", them ? "#28262b" : "#edf4ea")
    root.style.setProperty("--bg-contact", them ? "#1b1a1c" : "ddd7e3");
    root.style.setProperty("--text-contact", them ? "white" : "black");
    root.style.setProperty("--text-p", them ? "#aaa" : "#2d2c2c");
    root.style.setProperty("--bg-contact2", them ? "#2c2a30" : "#cdc6dc");
    root.style.setProperty("--border", them ? "#444" :
        "#d2d1d1");
    root.style.setProperty("--white", them ? "#1b1a1c" : "#e9ecef");
    root.style.setProperty("--card", them ? "#111111" : "#dddddd");
}

function iocnAppair() {
    let icon = document.querySelectorAll(".fab")
    let pera = document.querySelectorAll(".main-content-box-p");
    document.querySelector(".fa-database").style.color = "none"
    console.log(icon.length);
    pera.forEach(p => {

    })
    for (let i = 0; i < icon.length; i++) {
        icon[i].addEventListener("mouseover", () => {
            // (i == 5) ? pera[i + 1].style.display = "block" : pera[i].style.display = "block";
            // console.log(pera[i].textContent);
            (i == 5) ? pera[i + 1].classList.add("main-content-box-p-animation") : pera[i].classList.add("main-content-box-p-animation")
        })
        icon[i].addEventListener("mouseout", () => {
            // (i == 5) ? pera[i + 1].style.display = "none" : pera[i].style.display = "none";
            (i == 5) ? pera[i + 1].classList.remove("main-content-box-p-animation") : pera[i].classList.remove("main-content-box-p-animation")
        })
    }
    document.querySelector(".fa-database").addEventListener("mouseover", () => {
        pera[5].classList.add("main-content-box-p-animation")
    })
    document.querySelector(".fa-database").addEventListener("mouseout", () => {
        pera[5].classList.remove("main-content-box-p-animation")
    })
    // iocn.forEach(item,p => {
    //     item.addEventListener("mouseover", () => {
    //         p.style.display = "block"
    //     })
    //     item.addEventListener("mouseover", () => {
    //         pera.style.display = "block"
    //     })
    // });
}
try {
    iconOfskilles();
    iocnAppair();
}
catch {
    console.log("error");
}
