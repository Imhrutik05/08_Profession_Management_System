const nameInput = document.getElementById('name');
    const profInput = document.getElementById('profession');
    const ageInput = document.getElementById('age');
    const addUserBtn  = document.getElementById('addUserBtn');
    const zeroCount = document.getElementById('employeeCount')
    const employees = document.querySelector('.employees');


    const arr = [];
    
    function renderArr(){

        // clear the current employees displayed
        employees.innerHTML = '';        

        // if there are employees in the array, display them
        if (arr.length !== 0){
            // loop through each employee and display their information
            /*
            <div class="employee">
                <div class="obj">
                    <p class="userInfo" id="userIndex">1.</p>
                    <p class="userInfo" id="userName">Hrutik Chaudhari</p>
                    <p class="userInfo" id="userProfession">AI Engineer</p>
                    <p class="userInfo" id="userAge">24</p>
                </div>
                <button id="delUserBtn" class="delete" type="submit">Delete User</button>
            </div>
            */
            arr.forEach((item, index) => {
                employees.innerHTML += `
                    <div class="employee" id="employee${index}">
                        <div class="obj">
                            <p class="userInfo" id="empIndex">${index+1}.</p>
                            <p class="userInfo" id="empName">${item.name}</p>
                            <p class="userInfo" id="empProfession">${item.professeion}</p>
                            <p class="userInfo" id="empAge">${item.age}</p>
                        </div>
                        <button class="delete" type="submit" onclick="deleteUser(${index})">Delete User</button>
                    </div>
                `;
            });

            zeroCount.style.display = "none";

        } 

        else {
            zeroCount.style.display = "block";
        }
    }

    addUserBtn.addEventListener('click', function(){
        if (nameInput.value.trim() !== "" && profInput.value.trim() !== "" && ageInput.value.trim() !== ""){
            
            // creating a new employee object and push it to the array
            arr.push({
                name: nameInput.value.trim(),
                professeion: profInput.value.trim(),
                age: ageInput.value.trim()
            });
            
            // clear the input field so that user can add new record
            nameInput.value = '';
            profInput.value = '';
            ageInput.value = '';
            
            document.getElementById('success').style.display = "block";
            document.getElementById('error').style.display = "none";
            renderArr();
        } else {
            document.getElementById('error').style.display = "block";
            document.getElementById('success').style.display = "none";
            // document.getElementById('employeeCount').style.display = "block";
        }
    });

    // Function to delete an employee from the array
    function deleteUser(index) {
        // Remove the employee from the array using splice
        arr.splice(index, 1);
        document.getElementById('success').style.display = "none";
        // Re-render the updated employee list
        renderArr();
    }

    // Initial render call to display the employee count if there are employees
    renderArr();
