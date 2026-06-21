/**
 * form.js — Validates and handles the join form
 * @module form
 */

export function initForm() {
  const form    = document.getElementById('joinForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  const nameInput    = form.querySelector('#f-name');
  const contactInput = form.querySelector('#f-contact');
  const msgInput     = form.querySelector('#f-message');

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const PHONE_RE = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

  function setError(input, hasError) {
    input.classList.toggle('error', hasError);
  }

  function validateName() {
    const val = nameInput.value.trim();
    const ok  = val.length >= 2;
    setError(nameInput, !ok);
    return ok;
  }

  function validateContact() {
    const val = contactInput.value.trim();
    const ok  = EMAIL_RE.test(val) || PHONE_RE.test(val);
    setError(contactInput, !ok);
    return ok;
  }

  // Live validation on blur
  nameInput.addEventListener('blur', validateName);
  contactInput.addEventListener('blur', validateContact);

  // Clear error on input
  nameInput.addEventListener('input', () => nameInput.classList.remove('error'));
  contactInput.addEventListener('input', () => contactInput.classList.remove('error'));

  form.addEventListener('submit', e => {
    e.preventDefault();
    const nameOk    = validateName();
    const contactOk = validateContact();
    if (!nameOk || !contactOk) return;

    // Show success message (no backend — static demo)
    form.style.display = 'none';
    if (success) {
      success.style.display = 'block';
    }
  });
}
