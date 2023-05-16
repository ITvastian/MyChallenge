
const button2 = document.querySelectorAll("#btn3");
const description2 = document.querySelector(".suscription");


function step3Ir() {
  button2.forEach((boton) => {
    boton.addEventListener("click", () => {
      description2.innerHTML = `
      <div class="container3">
        <h2 class="subContent-h2" id="select1">Pick ddd-ons</h2>
        <p class="p-description" id="select2">Add-ons help enhance your gaming experience</p>
      <form id="containerForm">
        <div class="form-group1">
        <div>
        <input type="checkbox" id="web-developer" />
        </div>
          <label for="web-developer" class="checkContainer">
            Online service
            <p class="p-description3">Access to multiplayer games</p>
            </label>
            <p class="current-price">+$10/yr</p>
        </div>
        <div class="form-group2">
        <div>
        <input type="checkbox" id="web-developer" />
        </div>
          <label for="web-developer" class="checkContainer">Larger storage
            <p class="p-description3">Extra 1TB of cloud save</p>
            </label>
            <p class="current-price">+$20/yr</p>
        </div>
        <div class="form-group3">
        <div>
        <input type="checkbox" id="web-developer" />
        </div>
          <label for="web-developer" class="checkContainer">
            Customizable profile
            <p class="p-description3">Custom theme on your profile</p>
            </label>
            <p class="current-price">+$20/yr</p>
            </div>
            </form>
            <button class="subs-send3" id="send3" type="submit">Next Step</button>
            </div>
            <button class="go-back" id="btn-Goback" type="button" id="btn3" onclick="stepVolver()">Go Back</button>
        `;
    });
  });
}  

  