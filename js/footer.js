/**
 * Universal Footer Generator
 * Injects a consistent footer across all pages
 */

function createFooter() {
  // Determine if we're in a subdirectory by checking the current pathname
  const pathname = window.location.pathname;
  const isInSubdirectory = pathname.includes('/blog/') || 
                          pathname.includes('/destinations/') || 
                          pathname.includes('/services/');
  
  // Set prefix based on location
  const prefix = isInSubdirectory ? '../' : '';
  
  // Create footer HTML with correct relative paths
  const footerHTML = `
    <div class="footer-logo">
      <span class="logo-panda">&#x1F43C;</span>
      <span class="logo-text">Panda<span>Go</span></span>
    </div>
    <ul class="footer-links">
      <li><a href="${prefix}index.html#why">Why Us</a></li>
      <li><a href="${prefix}services/index.html">Services &amp; Pricing</a></li>
      <li><a href="${prefix}index.html#destinations">Destinations</a></li>
      <li><a href="${prefix}comments.html">Comments</a></li>
      <li><a href="${prefix}blog/index.html">Blog</a></li>
      <li><a href="${prefix}index.html#contact">Contact</a></li>
    </ul>
    <p class="footer-copy">&copy; 2026 PandaGo. All rights reserved.</p>
  `;

  // Find or create footer element
  let footer = document.querySelector('footer');
  if (!footer) {
    footer = document.createElement('footer');
    document.body.appendChild(footer);
  }
  
  // Inject footer content
  footer.innerHTML = footerHTML;
}

// Initialize footer when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', createFooter);
} else {
  createFooter();
}
