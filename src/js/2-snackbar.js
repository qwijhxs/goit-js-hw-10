import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const form = document.querySelector('.form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;
  createPromise(delay, state)
    .then(delay => {
      iziToast.success({
        message: `:white_check_mark: Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        timeout: 3000,
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `:x: Rejected promise in ${delay}ms`,
        position: 'topRight',
        timeout: 3000,
      });
    });
  form.reset();
});
function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}