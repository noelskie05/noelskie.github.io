// Get the package modal
var packageModal = document.getElementById("myModal");

// Get the button that opens the package modal
var packageBtns = document.getElementsByClassName("btn");

// Get the <span> element that closes the package modal
var packageCloseSpan = document.getElementsByClassName("close")[0];

// When the user clicks the button for package modal, open it 
for (var i = 0; i < packageBtns.length; i++) {
  packageBtns[i].onclick = function() {
    packageModal.style.display = "block";
    var index = this.getAttribute("data-index");
    var title = document.querySelector(`.order__card:nth-child(${index}) h4`).textContent;
    var description = document.querySelector(`.order__card:nth-child(${index}) p`).textContent;
    var inclusionsList = document.querySelector(`.order__card:nth-child(${index}) .package-inclusions`);
    var inclusions = inclusionsList.innerHTML;
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-description").textContent = description;
    document.getElementById("modal-inclusions").innerHTML = inclusions;
  }
}

// When the user clicks on <span> (x) for package modal, close it
packageCloseSpan.onclick = function() {
  packageModal.style.display = "none";
}

// When the user clicks anywhere outside of the package modal, close it
window.onclick = function(event) {
  if (event.target == packageModal) {
    packageModal.style.display = "none";
  }
}

// Get the product preview modal
var productPreviewContainer = document.querySelector('.products-preview');
var productPreviewBoxes = productPreviewContainer.querySelectorAll('.preview');
var productCloseIcons = document.querySelectorAll('.fa-times');

// Toggle product preview modal when product is clicked
document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    productPreviewContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    productPreviewBoxes.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      } else {
        preview.classList.remove('active'); // Remove active class from other previews
      }
    });
  };
});

// Close product preview modal when close icon is clicked
productCloseIcons.forEach(closeIcon =>{
  closeIcon.onclick = () =>{
    productPreviewBoxes.forEach(preview =>{
      preview.classList.remove('active');
    });
    productPreviewContainer.style.display = 'none';
  };
});
// Get all package cards
const packageCards = document.querySelectorAll('.order__card');

// Add event listener to each "View Package" button
packageCards.forEach((card, index) => {
  const viewPackageBtn = card.querySelector('.btn');
  viewPackageBtn.addEventListener('click', () => {
    // Get image source from the clicked package card
    const imageSrc = card.querySelector('img').src;

    // Update modal image container with the clicked image source
    const modalImageContainer = document.getElementById('modal-image-container');
    modalImageContainer.innerHTML = `<img src="${imageSrc}" alt="Package Image" class="modal-package-image">`;

    // You can also update other modal content here like title, description, and inclusions based on the clicked package
    // For demonstration purposes, let's log the index of the clicked package
    console.log(`Clicked Package Index: ${index + 1}`);
  });
});

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});

// JavaScript for responsive navigation sidebar menu
var fb = document.querySelector('.fb');
var fbBtn = document.querySelector('.fb-btn');
var closeBtn = document.querySelector('.close-btn');

fbBtn.addEventListener("click", () => {
  fb.classList.add('active');
});

closeBtn.addEventListener("click", () => {
  fb.classList.remove('active');
});

// Modal functionality
var modal = document.getElementById("myModal");
var modalImageContainer = document.getElementById("modal-image-container");
var modalTitle = document.getElementById("modal-title");
var modalDescription = document.getElementById("modal-description");
var modalInclusions = document.getElementById("modal-inclusions");
var closeSpan = document.getElementsByClassName("close")[0];

var btns = document.querySelectorAll(".btn");
btns.forEach(function (btn) {
  btn.onclick = function () {
    var index = this.getAttribute("data-index");
    var imageSrc = "assets/" + index + ".png"; // Assuming the image names follow the pattern "1.png", "2.png", etc.
    var title = this.previousElementSibling.textContent.trim();
    var description = this.previousElementSibling.nextElementSibling.textContent.trim();
    var inclusions = this.nextElementSibling.innerHTML.trim();
    
    modalImageContainer.innerHTML = "<img src='" + imageSrc + "' alt='" + title + "' />";
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalInclusions.innerHTML = inclusions;

    modal.style.display = "block";
  }
});

closeSpan.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Function to open the modal and insert the image
function openModal(imageUrl, title, description, inclusions) {
  // Get the modal elements
  var modal = document.getElementById("myModal");
  var imageContainer = document.getElementById("modal-image-container");
  var modalTitle = document.getElementById("modal-title");
  var modalDescription = document.getElementById("modal-description");
  var modalInclusions = document.getElementById("modal-inclusions");

  // Create an img element and set its source
  var img = document.createElement("img");
  img.src = imageUrl;
  img.alt = title;

  // Clear any existing content in the image container and append the new image
  imageContainer.innerHTML = "";
  imageContainer.appendChild(img);

  // Set the title and description
  modalTitle.textContent = title;
  modalDescription.textContent = description;

  // Clear existing inclusions and add new ones
  modalInclusions.innerHTML = "";
  inclusions.forEach(function(inclusion) {
      var li = document.createElement("li");
      li.textContent = inclusion;
      modalInclusions.appendChild(li);
  });

  // Display the modal
  modal.style.display = "block";
}

// Function to close the modal
document.querySelector(".close").addEventListener("click", function() {
  document.getElementById("myModal").style.display = "none";
});

// Example usage
// openModal("path/to/your/image.jpg", "Modal Title", "Modal description text.", ["Inclusion 1", "Inclusion 2", "Inclusion 3"]);
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal');
  const modalContent = document.querySelector('.modal-content');
  const closeBtn = document.querySelector('.close');
  const productItems = document.querySelectorAll('.product');

  productItems.forEach(product => {
    product.addEventListener('click', () => {
      modal.style.display = 'block';
      modalContent.classList.add('show-modal');
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalContent.classList.remove('show-modal');
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      modalContent.classList.remove('show-modal');
    }
  });
});
