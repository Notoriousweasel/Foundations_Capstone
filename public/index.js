
const bWEBtn = document.getElementById("bWEBtn")
const cTBWEBtn = document.getElementById("cTBWEBtn")
const bBBWEBtn = document.getElementById("bBBWEBtn")
const wEBtn = document.getElementById("wEBtn")
const cTWEBtn = document.getElementById("cTWEBtn")
const bBWEBtn = document.getElementById("bBWEBtn")
const addexerciseLBtn = document.getElementById("addexerciseLBtn")
//const baseURL = "http://localhost:4002/api/";
const baseURL = "ec2-34-217-64-203.us-west-2.compute.amazonaws.com:4002/api/";
const toggleDropdown = () => {
  let dropdown = document.getElementById('myDropdown');
  
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
};

window.onclick = function (event) {
  if (!event.target.matches('.dropdown-btn')) {
    let dropdown = document.getElementById("myDropdown");

    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    }
  }
};

document.addEventListener('DOMContentLoaded', function () {
  // Hide the dropdown menu on page load
  let dropdown = document.getElementById('myDropdown');
  dropdown.style.display = "none";
});

document.addEventListener('click', function (event) {
  const target = event.target;

  if (target.matches('#menuButton')) {
    toggleDropdown();
  }
});


const displayExerciseList = (endpoint) => {
    axios.get(`${baseURL}${endpoint}`)
        .then(res => {
            const data = res.data;
            const eList = document.getElementById('eList');
            eList.innerHTML = '';

            // Split the string into an array using newline character
            const exercises = data.split('\n');

            // Iterate over the array and append to eLContainer
            exercises.forEach(exercise => {
                const eLContainer = document.createElement('div');
                eLContainer.classList.add('eL-container');

                const eLText = document.createElement('div');
                eLText.classList.add('eL-text');
                eLText.innerText = exercise;

                const eLActions = document.createElement('div');
                eLActions.classList.add('eL-actions');

                const deleteBtn = document.createElement('button');
                deleteBtn.innerText = 'Delete';
                deleteBtn.addEventListener('click', () => deleteEL(exercise));

                const updateBtn = document.createElement('button');
                updateBtn.innerText = 'Update';
                updateBtn.addEventListener('click', () => updateEL(exercise));

                eLContainer.appendChild(eLText);
                eLContainer.appendChild(eLActions);

                eLActions.appendChild(updateBtn);
                eLActions.appendChild(deleteBtn);

                eList.appendChild(eLContainer);
            });
        })
        .catch(error => {
            console.error(error);
        });
};

const getBWE = () => {
    displayExerciseList('BWE');
    //getELAll('BWE');
};

const getWE = () => {
    displayExerciseList('WE');
};

const getCTBWE = () => {
  displayExerciseList('CTBWE');
};

const getCTWE = () => {
  displayExerciseList('CTWE');
};

const getBBBWE = () => {
  displayExerciseList('BBBWE');
};

const getBBWE = () => {
  displayExerciseList('BBWE');
};
//2

const addExercise = () => {
    let newExercise = document.getElementById("add").value;
    const body ={ newExercise };
    
        axios.post(`${baseURL}exercise`, body)
        .then(res => {
          document.getElementById("add").value = "";
            console.log(res.data);
            
            getELAll();
            //displayExerciseList();
    })
    .catch(error => console.log(error))
  };
  //3
  
  const updateEL = (exerciseL) => {
    const updatedEL = prompt('Enter the updated exercise:');
    if (updatedEL) {
        const body = { oldEL: exerciseL, newEL: updatedEL };  // Define body here
        axios.put(`${baseURL}exercise`, body)
            .then(res => {
                console.log(res.data);
                getELAll();
            })
            .catch(error => {
                console.error("Something is wrong " + error);
            });
    }
}
   //4

   const deleteEL = (exerciseL) => {
    console.log("Deleting " + exerciseL);

    // Send the exerciseL property directly in the request body
    axios.delete(`${baseURL}exercise`, { data: { exerciseL } })
        .then(res => {
            console.log("Delete request successful", res);
            getELAll();
        })
        .catch(error => {
            console.error("Delete request failed", error);
        });
}
   //5  

   const getELAll = () => {
    axios.get(`${baseURL}exercise/all`)
      .then(res => {
        const exerciseList = res.data;
        console.log(res.data, "getELAll");
        const eList = document.getElementById('eList');
        console.log("*****"+ exerciseList);
        eList.innerHTML = '';
    
        exerciseList.forEach(exercise => {
          const eLContainer = document.createElement('div');
          eLContainer.classList.add('eL-container');
    
          const eLText = document.createElement('div');
          eLText.classList.add('eL-text');
          eLText.innerText = exercise;
    
          const eLActions = document.createElement('div');
          eLActions.classList.add('eL-actions');
    
          const deleteBtn = document.createElement('button');
          deleteBtn.innerText = 'Delete';
          deleteBtn.addEventListener('click', () => deleteEL(exercise));
    
          const updateBtn = document.createElement('button');
          updateBtn.innerText = 'Update';
          updateBtn.addEventListener('click', () => updateEL(exercise));
          
          eLContainer.appendChild(eLText);
          eLContainer.appendChild(eLActions);
         
          eLActions.appendChild(updateBtn);
          eLActions.appendChild(deleteBtn);
    
          eList.appendChild(eLContainer);
        });
      })
      .catch(error => {
        console.error(error);
      });
    };

  //Event listeners

document.addEventListener("DOMContentLoaded", getELAll);
  
bWEBtn.addEventListener('click', getBWE);
wEBtn.addEventListener('click', getWE);
bBBWEBtn.addEventListener('click', getBBBWE);
bBWEBtn.addEventListener('click', getBBWE);
cTBWEBtn.addEventListener('click', getCTBWE);
cTWEBtn.addEventListener('click', getCTWE);
addexerciseLBtn.addEventListener('click', addExercise);

