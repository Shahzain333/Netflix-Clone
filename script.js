let faqbox = document.querySelectorAll('.faqbox'); 
const languageButton = document.querySelector('.btn-language');

// when we click on the language button the languages  will be shown
languageButton.addEventListener('click', () => { 
    const icon = document.querySelector('.fa-caret-down')    
    const languages = document.querySelector('.languages');
    console.log(languages);
    
    languages.classList.toggle('languages-active');
    icon.classList.toggle('icon-active');
    
    const languagesOptions = document.querySelectorAll('.language-option');

    languagesOptions.forEach(option => {

        option.addEventListener('click', () => {

            console.log(languages);
            const languageName = option.getAttribute('data-language');
            languageButton.innerHTML = `${languageName} <i class="fa-solid fa-caret-down"></i>`;
            
            if (languages.classList.contains(!'languages-active')) {
                languages.classList.add('languages-active');
            }else {
                languages.classList.remove('languages-active');
            }

        });

    });
 });



faqbox.forEach(element => {   
    
    let answer = element.querySelector('.answer');
    let question = element.querySelector('.question');
    let xcross = question.querySelector('i');

    question.addEventListener('click', () => {
        // when we click on question the active class will be added to the answer and it will be shown
        answer.classList.toggle('active');

        // add and remove icon
        if (answer.classList.contains('active')) {
            // when active class is on the cross icon will appear and plus icon will disappear
            xcross.classList.remove('fa-plus');
            xcross.classList.add('fa-xmark');
        } else {
            // when active class is off the cross icon will disappear and plus icon will appear
            xcross.classList.remove('fa-xmark');
            xcross.classList.add('fa-plus');
        }
    });
});
