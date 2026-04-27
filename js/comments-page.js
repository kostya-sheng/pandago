/**
 * Comments Page Initialization & Animations
 */

function initializeCommentsPage() {
  populateFloatingQuotes();
  populateCommentCards();
  initializeScrollAnimations();
}

/**
 * Populate floating quotes section
 */
function populateFloatingQuotes() {
  const quotesContainer = document.querySelector('.quotes-container');
  const comments = getAllComments();
  
  const quotesHTML = comments.map((comment, index) => {
    return `
      <div class="quote-item">
        <img src="${comment.avatar}" alt="${comment.author}" class="quote-avatar">
        <p class="quote-text">&ldquo;${comment.quote}&rdquo;</p>
        <p class="quote-author">&mdash; ${comment.author}</p>
      </div>
    `;
  }).join('');
  
  quotesContainer.innerHTML = quotesHTML;
}

/**
 * Populate comment cards section
 */
function populateCommentCards() {
  const commentsGrid = document.querySelector('.comments-grid');
  const comments = getAllComments();
  
  const cardsHTML = comments.map(comment => {
    const starsHTML = Array(comment.rating).fill('&#9733;').join('');
    return `
      <div class="comment-card">
        <div class="comment-stars">${starsHTML}</div>
        <p class="comment-full-text">${comment.fullText.split('\n').join('</p><p class="comment-full-text">')}</p>
        <div class="comment-footer">
          <div class="comment-author">${comment.author}</div>
          <div class="comment-nationality">${comment.nationality}</div>
        </div>
      </div>
    `;
  }).join('');
  
  commentsGrid.innerHTML = cardsHTML;
}

/**
 * Initialize scroll animations using Intersection Observer
 */
function initializeScrollAnimations() {
  // Set up Intersection Observer for quote items (reveal and hide on scroll)
  const quoteObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      } else {
        e.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.4 }); // Higher threshold so it only fades in when somewhat centered

  // Animate quote items - they'll fade in and out as they scroll
  document.querySelectorAll('.quote-item').forEach(el => {
    quoteObserver.observe(el);
  });

  // Set up Intersection Observer for comment cards
  const cardObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  // Animate comment cards
  document.querySelectorAll('.comment-card').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(22px)';
    el.style.transition = `opacity 0.55s ease ${index * 0.05}s, transform 0.55s ease ${index * 0.05}s, border-color 0.3s, box-shadow 0.3s`;
    cardObserver.observe(el);
  });

  // Set up scroll-based nav padding (matching homepage behavior)
  window.addEventListener('scroll', () => {
    document.querySelector('nav').style.padding =
      window.scrollY > 60 ? '0.9rem 4rem' : '1.4rem 4rem';
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeCommentsPage);
} else {
  initializeCommentsPage();
}
