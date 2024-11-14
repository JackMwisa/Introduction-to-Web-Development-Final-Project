// Get form and recommendations list elements
const recommendationForm = document.getElementById('recommendation-form');
const recommendationsList = document.getElementById('recommendations-list');

// Add recommendation on form submit
recommendationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page reload

    // Get the recommendation text
    const input = recommendationForm.querySelector('input');
    const recommendationText = input.value;

    // Create a new recommendation element
    const newRecommendation = document.createElement('p');
    newRecommendation.textContent = recommendationText;
    recommendationsList.appendChild(newRecommendation);

    // Clear the input
    input.value = '';

    // Display confirmation popup
    alert('Thank you for your recommendation!');
});
