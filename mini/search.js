const data = [
    'Pizza',
    'Burger',
    'Sandwich',
    'Dosa'
];

function showSuggestions(query) {
    const suggestionsBox = document.getElementById('suggestions-box');
    const resultsContainer = document.getElementById('results-container');
    suggestionsBox.innerHTML = '';  // Clear previous suggestions
    resultsContainer.innerHTML = '';  // Clear previous results
    
    if (query.length === 0) {
        suggestionsBox.style.display = 'none';
        return;
    }

    const suggestions = data.filter(item => item.toLowerCase().includes(query.toLowerCase()));
    
    if (suggestions.length > 0) {
        suggestionsBox.style.display = 'block';
        suggestions.forEach(suggestion => {
            const suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.textContent = suggestion;
            suggestionItem.onclick = () => displayResult(suggestion);
            suggestionsBox.appendChild(suggestionItem);
        });
    } else {
        suggestionsBox.style.display = 'none';
    }
}

function displayResult(suggestion) {
    const resultsContainer = document.getElementById('results-container');
    const resultItem = document.createElement('div');
    resultItem.classList.add('result-item');
    resultItem.textContent = 'You selected: ' + suggestion;
    resultsContainer.appendChild(resultItem);
    document.getElementById('search-bar').value = ''; // Clear search input
    document.getElementById('suggestions-box').style.display = 'none'; // Hide suggestions box
}
