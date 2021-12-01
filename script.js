const wrapper = document.querySelector('.formsection')
const form = wrapper.querySelectorAll('form')
const submitb = form[0].querySelector('input[type="submit"]')

function getData(e){

    let formdata = new FormData(form[0]);
    let name = formdata.get('name')
    let email = formdata.get('email')
    let subject = formdata.get('subject')
    let message = formdata.get('message')

    if ((email.includes('@') && email.includes('.') && name.length>5 && subject.length>5 && message.length>5 )){
        alert("Submission Successful")
    }
    else{
        alert("Submission unsuccessful. Email must include '@' and '.'")
        e.preventDefault()
    }
}

document.addEventListener('DOMContentLoaded', function(){
    submitb.addEventListener('click',getData, false);
}, false )