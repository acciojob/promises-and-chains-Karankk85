// Get form elements
const form = document.getElementById('votingForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const submitButton = document.getElementById('btn');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value.trim(), 10);

    // Validate inputs
    if (!name || isNaN(age)) {
        alert('Please enter valid details.');
        return;
    }

    // Create a promise to check voting eligibility
    const checkVotingEligibility = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000); // 4 seconds delay
    });

    // Handle promise resolution or rejection
    checkVotingEligibility
        .then(message => alert(message))
        .catch(message => alert(message));
});
