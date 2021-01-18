let emailCollectorForm = document.getElementById("Email-collector");

emailCollectorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let ourFormData = new FormData(event.target);
  let userFirstName = ourFormData.get("firstName");
  let updatedHtmlContent = `
     <h2>Congratulations, ${userFirstName}</h2>           
    <p>You're on your way to becoming a BBQ Master!</p>                    
    <p class="fine-print">We'll never share your information without your permission</p>
                `;
  let outMainContent = document.getElementById("Main-content");
  outMainContent.innerHTML = updatedHtmlContent;
});
