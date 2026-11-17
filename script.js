const CatFactsURL= "https://meowfacts.herokuapp.com/";
counter = 0

function getCatFact() {
    
    if (counter == 0) {
    document.querySelector('.card').className = 'cardActivated'    //Change the card to appear  
    }

    else {

    }

    fetch (CatFactsURL)
        .then(response => response.json())
        .then(data => {
            let fact1 = data.data[0];

            document.querySelector('#cat_fact').textContent = fact1;

        })
        .catch(error => {
            console.error('Error:', error);
        });

        counter++;

        }