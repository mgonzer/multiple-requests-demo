$(document).ready(function() {
  console.log("ready to go!");
});

function generateCard(imageUrl, question, answer) {
  let cardTemplate = `
    <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="${imageUrl}">
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">${question}<i class="material-icons right">more_vert</i></span>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">${question}<i class="material-icons right">close</i></span>
        <p>${answer}</p>
      </div>
    </div>
   `
  $('main').append(cardTemplate);
}

