//get list of elements with class name liveToastBtn
const toastTriggers = document.querySelectorAll('.liveToastBtn');
//get list of elements with class name liveToast
const toastLives = document.querySelectorAll('.liveToast');

//console.log(toastTriggers);

//if there are items (buttons) in the list
if (toastTriggers) {
  //for every item (button) in the list
  for (let i = 0; i < toastTriggers.length; i++) {
    //create toast bootstrap instace using item in the toastLives list
    //https://getbootstrap.com/docs/5.3/components/toasts/#methods
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLives[i]);
    //add event listener to button whenever it is clicked
    toastTriggers[i].addEventListener('click', () => {
      //show the toast
      toastBootstrap.show();
    });
  }
}
