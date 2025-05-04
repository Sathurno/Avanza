/**
 * Utility function for smooth scrolling to section with proper centering
 * @param elementId - The ID of the element to scroll to
 */
export const scrollToSection = (elementId: string): void => {
  const element = document.getElementById(elementId);
  
  if (element) {
    // Get the height of the header to offset scrolling (assuming it's fixed at top)
    const header = document.querySelector('header');
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    
    // Calculate the vertical center of the viewport
    const viewportHeight = window.innerHeight;
    const elementHeight = element.getBoundingClientRect().height;
    
    // Calculate offset to center the element in the viewport if possible
    // If element is taller than viewport, just align to top with header offset
    let offsetY;
    if (elementHeight < viewportHeight) {
      offsetY = elementHeight / 2 - viewportHeight / 2;
    } else {
      offsetY = -headerHeight;
    }

    // Get the element's position relative to the top of the page
    const elementTop = window.scrollY + element.getBoundingClientRect().top;
    
    // Final scroll position with centering logic
    const scrollToY = elementTop + offsetY;
    
    // Perform the smooth scroll
    window.scrollTo({
      top: scrollToY,
      behavior: 'smooth'
    });
  }
}; 