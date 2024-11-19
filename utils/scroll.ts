export function smoothScroll(id: string) {
  const targetElement = document.querySelector(id);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
    return;
  }
}
