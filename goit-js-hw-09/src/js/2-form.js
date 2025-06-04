let formData = {
    email: "",
    message: ""
}

const feedback = document.querySelector('.feedback-form');

const storageKey = 'feedback-form-state';

const savedData = JSON.parse(localStorage.getItem(storageKey));
if (savedData) {
  formData = { ...formData, ...savedData };
  feedback.elements.email.value = formData.email;
  feedback.elements.message.value = formData.message;
}

feedback.addEventListener('input', (event) => {
    const { name, value } = event.target;
    if (name in formData) {
      formData[name] = value;
      localStorage.setItem(storageKey, JSON.stringify(formData));
    }
  });

feedback.addEventListener('submit', (event) => {
    event.preventDefault();
    if (event.target.email.value === '' || event.target.message.value === '') {
        alert("Fill please all fields");
        return;
    }
    console.log(formData);
    localStorage.removeItem(storageKey);
    feedback.reset();
    
})