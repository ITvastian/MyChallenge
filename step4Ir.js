const button3 = document.querySelectorAll("#btn4");
const description3 = document.querySelector(".suscription");

function step4Ir() {
    button3.forEach((boton) => {
      boton.addEventListener("click", () => {
        description3.innerHTML = `
          <h2 class="subContent-h2" id="select1">Finishing up</h2>
          <p class="p-description4" id="select2">Double-check everything looks OK before confirming</p>
          <form class="container4">
            <div class="group-conteiner">
              <div class="item-container3">
                <div class="item-container1">
                  <h3 class="name-title">Arcade (yearly)</h3>
                  <h3 class="price-title1">$90/yr</h3>
                </div>
                <div class="item-container">
                  <h3 class="name-title1">Online service</h3>
                  <h3 class="price-title">+$10/yr</h3>
                </div>
                <div class="item-container">
                  <h3 class="name-title1">Larger storage</h3>
                  <h3 class="price-title">+$20/yr</h3>
                </div>
              </div>
              <div class="item-container">
                <h3 class="name-title1" id="namePrice">Total (for year)</h3>
                <h3 class="total-price">$120/yr</h3>
              </div>
            </div>
          </form>
          <button class="subs-send4" id="send4" type="submit">Confirm</button>
          <button class="go-back4" id="btn-Goback" type="button" onclick="stepVolver()">Go Back</button>
        `;
        document.querySelector("#send4").addEventListener("click", finish);
      });
    });
  }


function finish() {
    const containerFinish = document.createElement("div");
    containerFinish.classList.add("containerFinish");
  
    const img = document.createElement("img");
    img.src = "./images/icon-thank-you.svg";
    img.alt = "";
  
    const h2 = document.createElement("h2");
    h2.classList.add("subContent-h4");
    h2.id = "select1";
    h2.textContent = "Thank you!";
  
    const p = document.createElement("p");
    p.classList.add("p-description5");
    p.id = "select2";
    p.textContent = "Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com";
  
    containerFinish.appendChild(img);
    containerFinish.appendChild(h2);
    containerFinish.appendChild(p);

    description3.innerHTML = "";
    description3.appendChild(containerFinish);

    function showAlertAndRedirect() {
      setTimeout(function() {
        alert("Han pasado 3 segundos");
        stepVolver();
      }, 3000); 
    }

    showAlertAndRedirect();
  }
  

step4Ir();