// Form and recommendations list
const recommendationForm = document.getElementById('recommendation-form');
const recommendationsList = document.getElementById('recommendations-list');

// Add recommendation on form submission
recommendationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get recommendation text
    const input = recommendationForm.querySelector('input');
    const recommendationText = input.value;

    // Create a new recommendation element
    const newRecommendation = document.createElement('p');
    newRecommendation.textContent = `"${recommendationText}" - New Recommendation`;
    recommendationsList.appendChild(newRecommendation);

    // Clear input
    input.value = '';

    // Show confirmation popup
    alert('Thank you for your recommendation!');
});
