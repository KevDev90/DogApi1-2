
function retrieveImages(numOfDogImages) {
    if (numOfDogImages < 3){
        fetch(`https://dog.ceo/api/breeds/image/random/3`)
        .then(response => response.json())
        .then(responseJson => showImages(responseJson))
        .catch(error => alert('Something went wrong.Please try again.'));
        
    }
    else if (numOfDogImages > 50){
        return alert('Please select a number less than 50');
        }
        else {
            fetch(`https://dog.ceo/api/breeds/image/random/${numOfDogImages}`)
        .then(response => response.json())
        .then(responseJson => showImages(responseJson));
        
 }
    }

    function showImages(responseJson){
        console.log(responseJson);
        $('.results').html('');
        responseJson.message.forEach(fetchedImg => {
            $('.results').append(`<img src="${fetchedImg}" class= "results">`);
        });
        $('.results').removeClass('hidden');

    }

function watchForm(){
    $('.submitButton').submit( event => {
        event.preventDefault();
        let enteredNumber = $('#numDogs').val();
        retrieveImages(enteredNumber);
    })
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });