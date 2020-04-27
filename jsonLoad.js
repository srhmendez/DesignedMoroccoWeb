  
var jsonObj = {
    "userName": "Aisha Ait Issa",
    "photoLink": "https://res.cloudinary.com/hork5h8x1/image/upload/seller111_ilkartisan_rank8_time1461865172.jpg",
    "description": "I joined the cooperative to support my children so they can succeed in their lives.",
    "userShopLink": "https://www.theanou.com/store/111-coop-ihkf-n-ighir-bougmaz-morocco",
    "icons": [
        {
            "title": "first icon title",
            "icon": "icon link",
            "function": "function code"
        },
        {
            "title": "second icon title",
            "icon": "icon link",
            "function": "function code"
        }
    ],
    "photos": [
        {
            "title": "Photo 1",
            "link": "/images/Placeholder.jpg",
            "description": "Sample description: This is photo 1",
            "shopLink": "https://www.theanou.com"
        },
        {
            "title": "Photo 2",
            "link": "/images/Placeholder.jpg",
            "description": "Sample description: This is photo 2",
            "shopLink": "https://www.theanou.com"
        },
        {
            "title": "Photo 3",
            "link": "/images/Placeholder.jpg",
            "description": "Sample description: This is photo 3",
            "shopLink": "https://www.theanou.com"
        },
        {
            "title": "Photo 4",
            "link": "/images/Placeholder.jpg",
            "description": "Sample description: This is photo 4",
            "shopLink": "https://www.theanou.com"
        },
        {
            "title": "Photo 5",
            "link": "/images/Placeholder.jpg",
            "description": "Sample description: This is photo 5",
            "shopLink": "https://www.theanou.com"
        },
        {
            "title": "Photo 6",
            "link": "/images/Placeholder.jpg",
            "description": "Sample description: This is photo 6",
            "shopLink": "https://www.theanou.com"
        },
        {
            "title": "Photo 7",
            "link": "/images/Placeholder.jpg",
            "description": "Sample description: This is photo 7",
            "shopLink": "https://www.theanou.com"
        },
        {
            "title": "Photo 8",
            "link": "/images/Placeholder.jpg",
            "description": "Sample description: This is photo 8",
            "shopLink": "https://www.theanou.com"
        },
        {
            "title": "Photo 9",
            "link": "/images/Placeholder.jpg",
            "description": "Sample description: This is photo 9",
            "shopLink": "https://www.theanou.com"
        },
        {
            "title": "Photo 10",
            "link": "/images/Placeholder.jpg",
            "description": "Sample description: This is photo 10",
            "shopLink": "https://www.theanou.com"
        },
        {
            "title": "Photo 11",
            "link": "/images/Placeholder.jpg",
            "description": "Sample description: This is photo 11",
            "shopLink": "https://www.theanou.com"
        },
        {
            "title": "Photo 12",
            "link": "/images/Placeholder.jpg",
            "description": "Sample description: This is photo 12",
            "shopLink": "https://www.theanou.com"
        },
        {
            "title": "Photo 13",
            "link": "/images/Placeholder.jpg",
            "description": "Sample description: This is photo 13",
            "shopLink": "https://www.theanou.com"
        },
        {
            "title": "Photo 14",
            "link": "/images/Placeholder.jpg",
            "description": "Sample description: This is photo 14",
            "shopLink": "https://www.theanou.com"
        },
        {
            "title": "Photo 15",
            "link": "/images/Placeholder.jpg",
            "description": "Sample description: This is photo 15",
            "shopLink": "https://www.theanou.com"
        }
    ]
}

window.onload = function main() {
    var numPhotos = jsonObj.photos.length
    var rem = numPhotos % 3
    var rows = Math.floor(numPhotos/3)
    rem > 0 ? rows++ : 0

    //Debug
    //console.log("Photos: " + numPhotos)
    //console.log("Rows: " + rows)

    var photoDiv = document.getElementById("Photos")
    var userImg = document.getElementById("userImg")
    userImg.style.backgroundImage = 'url("' + jsonObj.photoLink + '")'

    var containerStr = ""
    var photoStr = ""
    var id = 0;
    for (let r = 0; r < rows; r++) {
        //for each row, make UP TO 3
        //columns
        containerStr += '<div class="row">'
        for (let c = 0; c < 3; c++) {
            containerStr += '<div class="column">'
            if (numPhotos > 0) {
                photoStr = '<img class="image" id="' + r + c +
                '" img src="' + jsonObj.photos[id].link + 
                '" alt="' + jsonObj.photos[id].title + 
                '" data-content="' + jsonObj.photos[id].description + 
                '" data-shopLink="' + jsonObj.photos[id].shopLink +
                '" style="width:100%;"></div>'
            } else {
                //if empty, add empty 'img' for scaling
                photoStr = '<img src ="/images/empty.png" alt="empty" style="width:100%;"></div>'
            }
            
            containerStr += photoStr
            id++
            numPhotos--
        }
        containerStr += '</div>'
    }
    photoDiv.innerHTML = containerStr

    var allPhotos = document.getElementsByClassName("image")
    
    var modal = document.getElementById("myModal")
    var span = document.getElementsByClassName("close")[0]

    var userText = document.getElementById("userText")
    userText.textContent = jsonObj.description

    var userName = document.getElementById("user_name")
    userName.textContent = jsonObj.userName

    var userLink = document.getElementById("userLink")
    userLink.innerHTML = '<a href="' + jsonObj.userShopLink + '">Link to my store</a>'

    span.addEventListener("click", function() {
        modal.style.display = "none"
        //turn back on scroll bar
        document.documentElement.style.overflow = 'auto';
    })

    Array.from(allPhotos).forEach(photo => {
        photo.addEventListener("click", function() {
            //get clicked photo data
            var element = document.getElementById(photo.id)
            var src = element.src
            var title = element.alt
            var link = element.getAttribute("data-shopLink")
            var content = element.getAttribute("data-content")
            
            //set modal window here!
            modal.style.display = "block"
            
            //set content
            var userStr = '<div id="userDiv">' + 
                '<div id="icon"></div>' +
                 '<div id="userName">' + jsonObj.userName + '</div>' + '</div>'
            var imgStr = '<img id="mImg" src="' + src + '">'
            var titleStr = '<div id="title"><p id="tFormat">' + title + '</p></div>'
            var contentStr = '<div id="content"><div id="cFormat">' +  content + '</div></div>'
            var linkStr = '<div id="link"><div id="lFormat"><a href="' + link + '">Purchase</a></div></div>'

            //Check media sizes
            var modalWin = document.getElementById("mpDiv")
            var small = window.matchMedia("(max-width: 999px")
            var medium;
            var large = window.matchMedia("(min-width: 1000px)")
            if (small.matches) {
                //if medium:
                // [icon] Username
                //   Title
                //  +------+
                //  |      | 
                //  |      | 
                //  +------+ 
                //   Content
                //    Link
                modalWin.innerHTML = userStr + titleStr + imgStr + contentStr + linkStr
            }

            if (large.matches) {
                //if large:
                //+---------+ [icon] Username
                //|         | Title 
                //|         | Content
                //|         | Hashtags (maybe)
                //+---------+  Link
                modalWin.innerHTML = imgStr + '<div id="mContain">' + userStr + titleStr + contentStr + linkStr + '</div>'
            }

            //turn off window scroll bar
            document.documentElement.style.overflow = 'hidden'
        })
    })

}

//Hamburger Menu for small screens

var menuIcon = document.getElementById('hamburgerBtn');
menuIcon.onclick = toggleMenu;



//toggle hamburger menu open & closed

function toggleMenu() {
    document.getElementById("hamburgerBtn").classList.toggle('open')
    document.getElementById("primaryNav").classList.toggle('open');
}







