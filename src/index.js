fetch('http://localhost:3000/pups')
.then(response => response.json())
.then((data) => {
  renderPupName(data)

})

const renderPupName = ((pup) => {   //does this need to be data ugh fml
  const pupName = document.createComment('span')
  const name = document.createElement('h2')
  name.textContent = pup.name

  // Im defeated! I coded along with Ixs vids best I could. ALL of them
  // took me from fri at 3pm till today at 130p
  // it took me 30 min to writw this code and im fkin lost and i have my bookliker code open
  // I no longer enjoy this!


  pupName.append(name)
  document.querySelector('#dog-bar').append(pupName)  // adding my pupCard to the DOM?

})





//function calls
renderPupName(data)





/**CLICK ON DOGS IN THE DOG BAR TO SEE MORE INFO ABOUT PUPPER;
MORE INFO INCLUDES
A DOG PIC
A DOG NAME
AND A DOG BUTTON
THAT INDICATES WHETHER IT IS A GOOD DOG OR A BAD DOG;
CLICK ON GOOD DOG/BAD DOG BUTTON IN ORDER TO TOGGLE PUP GOODNESS;
CLICK ON "FILTER GOOD DOGS" BUTTON IN ORDER TO JUST SEE GOOD DOGS OR SEE ALL DOGS IN DOG BAR. */

// On the page, there is a div with the id of "dog-bar". 
// When the page loads, use fetch to get all of the pup data from your server. 
// When you have this information, 
// you'll need to add a span with the pup's name to the dog bar (ex: <span>Mr. Bonkers</span>).

// STEP 3: SHOW MORE INFO ABOUT EACH PUP
// When a user clicks on a pup's span in the div#dog-bar, that pup's info (image, name, and isGoodDog status) should show up in the div with the id of "dog-info". Display the pup's info in the div with the following elements:

// an img tag with the pup's image url
// an h2 with the pup's name
// a button that says "Good Dog!" or "Bad Dog!" based on whether isGoodDog is true or false. Ex:
// <img src="dog_image_url" />
// <h2>Mr. Bonkers</h2>
// <button>Good Dog!</button>

// .then((data) => {
//   console.log(data)
//   renderHeader(data)
//   renderFooter(data)
// function pupCard(data) {
//   const pup = document.querySelector('#dog-bar')

//   const pupList = document.createElement('span')

//   pupList.textContent = pups.name

//   pup.append(pupList)

// };


// function pupImg(puppy) {
// const img = document.createElement("img")
// img.src = pups.image
// img.addEventListener('click', () => {
//   showMovieDetails(puppy)
// })
//  pupImg.append(img)
// }
