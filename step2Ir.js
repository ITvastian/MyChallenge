
function step2Ir() {
    botones.forEach((boton) => {
      boton.addEventListener("click", () => {
        description.innerHTML = `
        <h2 class="subContent-h2-step2" id="select1">Select your plan</h2>
        <p class="p-description" id="select2">you have the option of monthly or yearly billing</p>
        <div class="containerCard">
        <div class="card">
        <div class="content">
        <div class="img">
        <img src="./images/icon-arcade.svg" alt="">
        </div>
        <h4 class="product-name">Arcade</h4>
    <p class="current-price">$90/yr</p>
    <p class="current-months">2 months free</p>
    </div>
    </div>
    <div class="card">
    <div class="content">
    <div class="img">
    <img src="./images/icon-advanced.svg" alt="">
    </div>
    <h4 class="product-name">Advance</h4>
    <p class="current-price">$120/yr</p>
    <p class="current-months">2 months free</p>
    </div></div>
    <div class="card ">
    <div class="content">
    <div class="img">
    <img src="./images/icon-pro.svg" alt="">
    </div>
    <h4 class="product-name">Pro</h4>
    <p class="current-price">$150/yr</p>
    <p class="current-months">2 months free</p>
    </div></div></div>
    <button class="subs-send2" id="send2" type="submit">Next Step</button>
    <button class="go-back" id="btn-Goback" type="button" onclick="stepVolver()">Go Back</button>
    </div>
    `;
      });
    });
  }
  

  
  
  