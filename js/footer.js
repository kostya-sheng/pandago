/**
 * Universal Footer Generator
 * Injects a consistent footer across all pages
 */

function createFooter() {
  // Determine the base path for links based on current location
  const pathParts = window.location.pathname.split('/').filter(Boolean);
  const depth = pathParts.length - 1; // -1 because last part is filename
  const isRoot = depth === 0 || window.location.pathname.endsWith('/');
  
  // Calculate relative path prefix
  let prefix = '';
  if (depth > 1) {
    prefix = '../'.repeat(depth - 1);
  } else if (depth === 1) {
    prefix = '../';
  }

  // Determine current section for active link styling
  const currentPath = window.location.pathname;
  
  // Create footer HTML
  const footerHTML = `
    <div class="footer-logo">
      <span class="logo-panda">&#x1F43C;</span>
      <span class="logo-text">Panda<span>Go</span></span>
    </div>
    <ul class="footer-links">
      <li><a href="${prefix}index.html#why">Why Us</a></li>
      <li><a href="${prefix}services/index.html">Services &amp; Pricing</a></li>
      <li><a href="${prefix}index.html#destinations">Destinations</a></li>
      <li><a href="${prefix}index.html#reviews">Reviews</a></li>
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
