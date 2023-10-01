  const firstName = document.querySelector(".first_name");
  const lastName = document.querySelector(".last_name");
  const email = document.querySelector(".email");
  const phoneNumber = document.querySelector(".phone_number");
  const form = document.querySelector("#form");
  const selectMenu = document.getElementById("component");
  let component = "";
  let componentPrice = "";
  selectMenu.addEventListener("change", (e) => {
    const checkedOption = document.querySelector("#component option:checked");
    component = checkedOption.text;
    componentPrice = "$" + checkedOption.value;
  });
  form.addEventListener("submit", (e) => {
    const receivedData = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
      component: component,
      price: componentPrice,
    };
    e.preventDefault();
    //Data received from order
    console.log(receivedData);
    if (receivedData !== "") {
      firstName.value = "";
      lastName.value = "";
      email.value = "";
      phoneNumber.value = "";
    }
    alert("Order has been sent!");
  });
