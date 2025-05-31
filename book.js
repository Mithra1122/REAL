document.addEventListener("DOMContentLoaded", function () {
    const bookshelf = document.getElementById("bookshelf");
    const main = document.querySelector("main");
    const header = document.querySelector("header");

    const booksData = [
        {
           "author": "Tatsuki ",
            "country": " Japan",
            "imageLink": "image/Goodbye,_Eri_volume_cover.jpg",
            "language": "Japanese",
            "link": "https://en.wikipedia.org/wiki/Goodbye,_Eri",
            "pages": 296,
            "title": "Goodbye, Eri",
            "year": 2022,
            "price": 90.00
        },
        {
           "author": "	Mariko Tamaki",
            "country": "U.S.A",
            "imageLink": "image/Laura_Dean_Keeps_Breaking_Up_with_Me_-_book_cover.jpg",
            "language": "English",
            "link": "https://en.wikipedia.org/wiki/Laura_Dean_Keeps_Breaking_Up_with_Me",
            "pages": 304,
            "title": "Laura Dean Keeps Breaking Up with Me",
            "year": 2019,
            "price": 11.00
        },
        {
            
           "author": "Solo ",
           "country": "South Korea",
           "imageLink":"image/Solo_Leveling_Volume_1_Cover.jpg",
           "language": "Korean",
           "link": "https://en.wikipedia.org/wiki/Solo_Leveling",
           "pages": 200,
           "title": "Solo Leveling",
           "year": 2016,
           "price": 41.00
        },
        {
            "author": "Marcel L'Herbier",
             "country": "France",
             "imageLink": "image/LaRouteImperiale.jpg",
             "language": "French",
             "link": "https://en.wikipedia.org/wiki/La_Route_imp%C3%A9riale",
             "pages": 350,
             "title": "La Route impériale",
             "year": 1935,
             "price": 65.00
         },
         {
            "author": "	Tatsuki Fujimoto",
             "country": "Japan",
             "imageLink": "image/Chainsawman.jpg",
             "language": "Japanese",
             "link": "https://en.wikipedia.org/wiki/Chainsaw_Man#:~:text=Its%20chapters%20have%20been%20collected,volumes%20as%20of%20April%202024.&text=Chainsaw%20Man%20follows%20the%20story,of%20his%20body%20into%20chainsaws.",
             "pages": 296,
             "title": "Chainsaw Man",
             "year": 2018,
             "price": 80.00
         },
         {
            "author": "Akumi Agitogi",
             "country": "Japan",
             "imageLink": "image/My_Happy_Marriage_vol._1_cover.jpg",
             "language": "Japanese",
             "link": "https://en.wikipedia.org/wiki/My_Happy_Marriage",
             "pages": 150,
             "title": "My Happy Marriage",
             "year": 2019,
             "price": 65.35
         },
         {
            "author": "Neil Gaiman",
             "country": "Australia",
             "imageLink": "image/Sandmandringenberg.png",
             "language": "English",
             "link": "https://en.wikipedia.org/wiki/The_Sandman:_The_Doll%27s_House",
             "pages": 159,
             "title": "The Sandman: The Doll's House",
             "year": 1989,
             "price": 165.89
         },
         {
            "author": "	Robert Kirkman",
             "country": "U.K",
             "imageLink": "image/WalkingDead1.jpg",
             "language": "English",
             "link": "https://en.wikipedia.org/wiki/The_Walking_Dead_(comic_book)",
             "pages": 189,
             "title": "The Walking Dead",
             "year": 2003,
             "price": 19.89
         },
         {
            "author": "	Kamome Shirahama",
             "country": "Japan",
             "imageLink": "image/Witch_Hat_Atelier_vol1.jpg",
             "language": "Japanese",
             "link": "https://en.wikipedia.org/wiki/Witch_Hat_Atelier",
             "pages": 234,
             "title": "Witch Hat Atelier",
             "year": 2016,
             "price": 22.89
         },
         {
            "author": "	R. L. Stine",
             "country": "U.S.A",
             "imageLink": "image/Fear_Street_The_New_Girl.jpg",
             "language": "English",
             "link": "https://en.wikipedia.org/wiki/The_New_Girl_(Stine_novel)",
             "pages": 237,
             "title":"The New Girl (Stine novel)",
             "year": 1989,
             "price": 12.89
         },
         {
            "author": "	Eiichiro Oda",
             "country": "Japan",
             "imageLink": "image/One_Piece,_Volume_61_Cover_(Japanese).jpg",
             "language": "Japanese",
             "link": "https://en.wikipedia.org/wiki/One_Piece",
             "pages": 737,
             "title":"One Piece ",
             "year": 1994,
             "price": 34.89
         },
         {
            "author": "Itaru Kinoshita",
             "country": "Japan",
             "imageLink": "image/Dinosaur_Sanctuary_volume_1_cover.jpg",
             "language": "Japanese",
             "link": "https://en.wikipedia.org/wiki/Dinosaur_Sanctuary",
             "pages": 137,
             "title":"Dinosaur Sanctuary",
             "year": 2021,
             "price": 14.09
         },
         {
            "author": " Neil Gaiman",
             "country": "Britain",
             "imageLink": "image/TheGraveyardBook_Hardcover.jpg",
             "language": "English",
             "link": "https://en.wikipedia.org/wiki/The_Graveyard_Book",
             "pages": 457,
             "title":"The Graveyard Book ",
             "year": 2009,
             "price": 17.90
         },
         {
            "author": "	ND Stevenson",
             "country": "Canada",
             "imageLink": "image/Nimona_cover.jpg",
             "language": "English",
             "link": "https://en.wikipedia.org/wiki/Nimona",
             "pages": 677,
             "title":"Nimona",
             "year": 2015,
             "price": 36.90
         },
         {
            "author": "	Joëlle Jones",
             "country": "Canada",
             "imageLink": "image/Lady_Killer.jpg",
             "language": "English",
             "link": "https://en.wikipedia.org/wiki/Lady_Killer_(comic_book)",
             "title":"Lady Killer",
             "year": 1960,
             "price": 45.55
         },
         {
            "author": "	Alan Moore",
             "country": "U.K",
             "imageLink": "image/V_for_vendettax.jpg",
             "language": "English",
             "link": "https://en.wikipedia.org/wiki/V_for_Vendetta#Book_3:_The_Land_of_Do-As-You-Please",
             "pages": 247,
             "title":"V for Vendetta",
             "year": 1982,
             "price": 80.00
         },
  ];
        const colors = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6",
            "#E6B333", "#3366E6", "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC","#66664D", "#991AFF", "#E666FF", "#4DB3FF",];
    

    
            let cart = [];
            let totalCost = 0;
        
            function showBooks() {
                bookshelf.innerHTML = "";
                booksData.forEach((book, index) => {
                    const bookElement = document.createElement("div");
                    bookElement.classList.add("book");
                    bookElement.innerHTML = `
                <img src="${book.imageLink}" alt="${book.title}">
                <h4>${book.title}</h4>
                <p class="price">Price: $${book.price}</p>
                <div class="details">
                  <p>By ${book.author}</p>
                  <p>Year:${book.year}</p>
                  <p>Language:${book.language}</p>
                  <p>Country:${book.country}</p>
                  <p>Pages:${book.pages}</p>
                  <a href=${book.link}>Link</a>
                  <br>
                  <br>
                  <button class="add-to-cart">Add to Cart</button>
                </div>
                `;
                    const style = document.createElement("style");
                    style.textContent = `.book:nth-child(${index + 1}):hover .details { background-color: ${colors[index % colors.length]}; }`;
                    document.head.appendChild(style);
        
                    const addToCartButton = bookElement.querySelector(".add-to-cart");
                    addToCartButton.addEventListener("click", () => {
                        cart.push(book);
                        totalCost += parseFloat(book.price);
                        updateCartDisplay();
                    });
                    bookshelf.appendChild(bookElement);
                });
            }
            showBooks();
        
            function updateCartDisplay() {
                const cartItemsElement = document.getElementById("cart-items");
                const totalPriceElement = document.getElementById("total-price");
                cartItemsElement.innerHTML = "";
                cart.forEach((book) => {
                    const cartItemElement = document.createElement("li");
                    cartItemElement.innerHTML = `
                        <div>
                            <img src="${book.imageLink}" alt="${book.title}" width="150px">
                            <h6>${book.title}</h6>
                            <p>Price: $${book.price}</p>
                        </div>
                    `;
                    cartItemsElement.appendChild(cartItemElement);
                });
            
                totalPriceElement.textContent = `$${totalCost.toFixed(2)}`;
                saveCartToStorage();
            }
        
            const cartLink = document.getElementById("cartLink");
            cartLink.addEventListener("click", (event) => {
                event.preventDefault();
                main.innerHTML = "";
                const cartContainer = document.createElement("div");
                cartContainer.id = "cart";
                cartContainer.innerHTML = `
            <h2>Cart</h2>
            <ul id="cart-items"></ul>
            <p>Total: <span id="total-price">$0</span></p>
          `;
                main.appendChild(cartContainer);
                updateCartDisplay();
            });
        
            booksLink.addEventListener("click", function (event) {
                event.preventDefault();
                main.innerHTML = `
                <div id="bookshelf">
                    <a href="ebook.html">Go to Home Page</a>
                </div>
            `;
                main.appendChild(bookshelf);
                header.style.display = "none";
            });
        });