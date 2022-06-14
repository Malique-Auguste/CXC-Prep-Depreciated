let email_form_active = false;
let questionnaire_active = false;


let dark = true;
let root = document.querySelector(":root");
let shareButtons = null;
let email_getter, email_state;

document.onload = init();

function init() {
    if(email_form_active) {
        setTimeout(email, 5000)
    }
    else if(questionnaire_active) {
        setTimeout(questionnaire, 5000)
    }
}

function record_new_user() {
    let returning = window.localStorage.getItem("returning")
    if (returning != "true") {
        panelbear("track", "New-User")
        console.log("New User Recorded")
        window.localStorage.setItem("returning", "true")
    }
    else {
        console.log("Returning user")
    }
}

function email() {
    var email_state = window.localStorage.getItem("email-state");
    var email_getter = document.getElementById("email-getter");

    if(email_getter == null) {
        console.log("index page")
        return
    }
    
    if (email_state == "received") {
        console.log(email_state)
    }
    //checks if this is a new session
    else if(window.sessionStorage.getItem("session")) {
        console.log("ongoing")
        return
    }
    else if (email_state == "denied") {
        console.log(email_state)
        denied_counter = parseInt(window.localStorage.getItem("denied-counter"));
        console.log(denied_counter)

        if(denied_counter > 0) {
            window.localStorage.setItem("denied-counter", denied_counter - 1)
        }
        else {
            email_getter.style.setProperty("display", "block");
        
            window.addEventListener('click', 
                function(e){   
                    if (!document.getElementById('email-form').contains(e.target)){
                        email_getter.style.setProperty("display", "none");
                        window.localStorage.setItem("denied-counter", 2)
                    }
                }
            );
        }
    }
    else {
        console.log(email_state)
        email_getter.style.setProperty("display", "block");
        
        window.addEventListener('click', 
            function(e){   
                if (!document.getElementById('email-form').contains(e.target)){
                    email_getter.style.setProperty("display", "none");

                    window.localStorage.setItem("email-state", "denied")
                    window.localStorage.setItem("denied-counter", 2)
                }
            }
        );
    }

    window.sessionStorage.setItem("session", "ongoing")
}

function received_email_state() {
    //commented out because i'm too broke to upgrade panelbear subscription
    //panelbear("track", "Email")
    var email = document.getElementById("Email").value;
    window.localStorage.setItem("email", email)
    window.localStorage.setItem("email-state", "received")
}

function questionnaire() {
    var questionnaire_state = window.localStorage.getItem("questionnaire-state");
    var questionnaire = document.getElementById("questionnaire");

    if(questionnaire == null) {
        console.log("index page")
        return
    }
    
    if (questionnaire_state == "received") {
        console.log(questionnaire_state)
    }
    //checks if this is a new session
    else if(window.sessionStorage.getItem("session")) {
        console.log("ongoing")
        return
    }
    else if (questionnaire_state == "denied") {
        console.log(questionnaire_state)
        denied_counter = parseInt(window.localStorage.getItem("ques-denied-counter"));
        console.log(denied_counter)

        if(denied_counter > 0) {
            window.localStorage.setItem("ques-denied-counter", denied_counter - 1)
        }
        else {
            questionnaire.style.setProperty("display", "block");
        
            window.addEventListener('click', 
                function(e){   
                    if (!document.getElementById('email-form').contains(e.target)){
                        questionnaire.style.setProperty("display", "none");
                        window.localStorage.setItem("ques-denied-counter", 2)
                    }
                }
            );
        }
    }
    else {
        console.log(questionnaire_state)
        questionnaire.style.setProperty("display", "block");
        
        window.addEventListener('click', 
            function(e){   
                if (!document.getElementById('questionnaire-inner').contains(e.target)){
                    questionnaire.style.setProperty("display", "none");

                    window.localStorage.setItem("questionnaire-state", "denied")
                    window.localStorage.setItem("ques-denied-counter", 2)
                }
            }
        );
    }

    window.sessionStorage.setItem("session", "ongoing")
}

function received_questionnaire() {
    //commented out because i'm too broke to upgrade panelbear subscription
    //panelbear("track", "Email")
    document.getElementById("questionnaire").style.setProperty("display", "none")
    window.localStorage.setItem("questionnaire-state", "received")
    window.open("https://forms.gle/6NhQ4ALmMvMELB7SA", "_blank")
}