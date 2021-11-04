// console.log($);
// console.log('modal practice app.js is linked to this index.html');

$( () => {
  // Variables =====
  const $openBtn = $('#openModal');
  const $modal = $('#modal');
  const $closeBtn = $('#close');

  // Event Handlers =====
  const openModal = () => {
    // console.log('working');
    $modal.css('display', 'block');
  }

  const closeModal = () => {
    // console.log('working');
    $modal.css('display', 'none');
  }

  // Event Listeners =====
  $openBtn.on('click', openModal);
  $closeBtn.on('click', closeModal);

  // Timing Events =====
  setTimeout(openModal, 5000);

});
