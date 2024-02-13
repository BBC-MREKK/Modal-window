function openModal(modalId) {
    const modal = document.getElementById(modalId)
    modal.style.display = 'block';
  }
  
  function closeModal(modalId) {
    const modal = document.getElementById(modalId)
    modal.style.display = 'none';
  }
  
  
  const buttons = document.querySelectorAll('button');
  buttons.forEach(function(button) {
     button.addEventListener('click', function() {
      const modalNumbers = button.textContent.split(3)
     })
  })