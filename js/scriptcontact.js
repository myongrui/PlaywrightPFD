const wrapper = document.querySelector('.formsection')
const form = wrapper.querySelectorAll('form')
const submitb = form[0].querySelector('input[type="submit"]')

function getData(e){

    let formdata = new FormData(form[0]);
    let name = formdata.get('name')
    let email = formdata.get('email')
    let subject = formdata.get('subject')
    let message = formdata.get('message')

    if ((email.includes('@') && email.includes('.') && name.length>0 && subject.length>0 && message.length>0 )){
        alert("Submission Successful")
    }
    else if(name.length == 0 || subject.length == 0 || message.length == 0 || email.length == 0){
        alert("Submission unsuccessful. Fill out all fields")
        e.preventDefault()
    }
    else if(!email.includes('@') || !email.includes('.')){
        alert("Submission unsuccessful. Email must include '@' and '.")
        e.preventDefault()
    }
    
}

document.addEventListener('DOMContentLoaded', function(){
    submitb.addEventListener('click',getData, false);
}, false )