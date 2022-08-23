// Add your code here

//
function submitData(userName, userEmail){
    //Create an object of user info here to make the body easy to read
    let userInfo = {
        name: userName,
        email: userEmail
    };

    // return the fetch() chain
    return (
        // Send Data
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(userInfo) //convert JS object to JSON
        })
        //Handle the Response
        .then( (response) => response.json() ) //parse the response to object
        .then( (result) => { 
            // Grab the body of the DOM
            const body = document.querySelector('body');
            // Create a p element for the user id
            const p = document.createElement('p');
            //p.textContent = `User ID: ${result.id}`;
            p.textContent = result.id;
            // Append this to the body
            body.appendChild(p);
        } )
        // Handle Errors
        .catch( (error) => {
            // Grab the body of the DOM
            const body = document.querySelector('body');
            // Create a p element for any error message
            const p = document.createElement('p');
            //p.textContent = `Error message: ${error.message}`;
            p.textContent = error.message;
            // Append this to the body
            body.appendChild(p);
        } )
        // You can comment out any component of fetch to see the error message
    )
}



// // PATCH REQUEST
// // A patch request would look like this
// // PATCH updates part of an item's properties
// fetch('http://localhost:3000/users/1', {
//     method: 'PATCH',
            
//     headers: {
//                 'Content-Type': 'application/json',
//                 Accept: 'application/json'
//             },
//     body: JSON.stringify({name:'Rusty'}) //convert JSobject to JSON
// })

// // PUT REQUEST 
// // A put request would look like this
// // PUT updates all the properties
// fetch('http://localhost:3000/users/2', {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Accept: 'application/json'
//             },
//             body: JSON.stringify({name:'Ochieng', email: 'ochieng@gmail.com'}) //convert JSobject to JSON
//         })
