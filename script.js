const CatFactsURL= "https://meowfacts.herokuapp.com/";
counter = 0

function getCatFact() {
    
    if (counter == 0) {
    document.querySelector('.card').className = 'cardActivated'    //Change the card to appear  
    const imgC = document.createElement('img')     //Create the image element
    imgC.src = ""
    imgC.alt = "image of a cat"
    imgC.id = "cat_image"
    document.body.appendChild(imgC)
    }

    else {
    }

    fetch (CatFactsURL)
        .then(response => response.json())
        .then(data => {
            let fact1 = data.data[0];
            
            document.querySelector('#cat_fact').textContent = fact1;

            //if-elses for cat image depending on starting letter of fact
            if ((fact1[0].toLowerCase() === 'a') ||
                (fact1[0].toLowerCase() === 'b') ||
                (fact1[0].toLowerCase() === 'd') ||
                (fact1[0].toLowerCase() === 'e') ||
                (fact1[0].toLowerCase() === 'f')
                ) 
                {
                document.querySelector('#cat_image').src = "Images/Cat1.jpg"
        }
        else if
            (
                (fact1[0].toLowerCase() === 'g') ||
                (fact1[0].toLowerCase() === 'h') ||
                (fact1[0].toLowerCase() === 'i') ||
                (fact1[0].toLowerCase() === 'j') ||
                (fact1[0].toLowerCase() === 'k') ||
                (fact1[0].toLowerCase() === 'l')) {
                document.querySelector('#cat_image').src = "Images/Cat2.jpg"
        }

        else if ((fact1[0].toLowerCase() === 'm') ||
                (fact1[0].toLowerCase() === 'n') ||
                (fact1[0].toLowerCase() === 'o') ||
                (fact1[0].toLowerCase() === 'p') ||
                (fact1[0].toLowerCase() === 'q') ||
                (fact1[0].toLowerCase() === 'r') ||
                (fact1[0].toLowerCase() === 's'))
        {
                document.querySelector('#cat_image').src = "Images/Cat3.jpg"
        }

        else {
            document.querySelector('#cat_image').src = "Images/Cat4.jpg"
        }
})
        .catch(error => {
            console.error('Error:', error);
        });

        counter++;

        }