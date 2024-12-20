export function smoothScroll(href: string) {
  try {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      return;
    }
  } catch (error) {
    console.error('Failed to scroll to target:', error);
    window.location.href = href
  }
}
