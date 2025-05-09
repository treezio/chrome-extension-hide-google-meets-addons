function hideAppSuggestions() {
  const suggestions = document.querySelectorAll('[data-addon-id]');
  suggestions.forEach(el => {
    el.style.display = 'none';
  });
}

// Initial run
hideAppSuggestions();

// Observe DOM changes to catch new suggestions
const observer = new MutationObserver(hideAppSuggestions);
observer.observe(document.body, {
  childList: true,
  subtree: true
});
