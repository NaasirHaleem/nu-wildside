const myAPIEndpoint = 'https://wildside-nu.herokuapp.com/merchandise';
const addNewUser = () => {
    // 1. get user-generated data:
    const student_id = document.querySelector('#student_id').value;
    const radioa = document.querySelector('#radioa').value;
    const radiob = document.querySelector('#radiob').value;
    const radioc = document.querySelector('#radioc').value;


    // 2. post it to the endpoint:
    fetch(myAPIEndpoint, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "student_id": student_id,
            "radioa": radioa,
            "radiob": radiob,
            "radioc": radioc,



        })
    })
    .then(response => response.json())
    .then(data => {
        // 3. print the results to the screen
        console.log(data);
    });
};

// 4. attach function to button:
document.querySelector('saveForm').onclick = addNewUser;






function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Votes Database
// fetch('https://wildside-nu.herokuapp.com/votes', {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         "student_id": studentID,
//         "vote": vote,
//     })

    // .then(response => response.json())
    // .then(data => {
    //     // 3. print the results to the screen
    //     console.log(data);
    // });
    // };
