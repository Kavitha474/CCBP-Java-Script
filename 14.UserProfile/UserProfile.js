let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
  };
  
  let profileContainerElement = document.getElementById("profileContainer");
  let imgContainerElement = document.getElementById("imgContainer");
  
  let imageElement = document.createElement("img");
  imageElement.src = profileDetails.imgSrc;
  imageElement.classList.add("image-size");
  imgContainerElement.appendChild(imageElement);
  
  let headingElement = document.createElement("h1");
  headingElement.textContent = profileDetails.name;
  headingElement.classList.add("heading-text");
  profileContainerElement.appendChild(headingElement);
  
  let paragraphElement = document.createElement("p");
  paragraphElement.textContent = "Age : " +profileDetails.age;
  paragraphElement.classList.add("paragraph-text");
  profileContainerElement.appendChild(paragraphElement);
  