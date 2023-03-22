const submitBtn =document.getElementById('submit-btn')
const container =document.getElementById('container')

submitBtn.addEventListener('click', renderRate)

function renderRate() {

    const checkedRadio = document.querySelector('input[type="radio"]:checked').value

    container.innerHTML = `
    <div class="thank-you-container" id="thank-you-container">
        <div class="thank-you-img">
            <img src="images/illustration-thank-you.svg" alt="illustration-icon">
        </div>
        <div class="thank-you-text">
            <div>
                <h5>You selected ${checkedRadio} out of 5</h5>
            </div>
            <div>
                <h1>Thank you!</h1>
                <p>We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!</p>
            </div>
        </div>
    </div>
    `
}



