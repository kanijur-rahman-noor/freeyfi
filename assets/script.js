
        function startTimer(duration) {
            let bar = document.getElementById("timerBar");
            let startTime = Date.now();
            function update() {
                let elapsedTime = Date.now() - startTime;
                let progress = Math.min(elapsedTime / duration, 1);
                bar.style.width = (progress * 100) + "%";
                if (progress < 1) {
                    
                    requestAnimationFrame(update);
                }else{
                    let timerContainer = document.getElementsByClassName("timer-container")[0];
            let btn = document.getElementsByClassName("btn")[0];

            if (timerContainer) timerContainer.style.display = "none";
            if (btn) btn.style.display = "block";
                }
            }
            requestAnimationFrame(update);
        }
        startTimer(30000); // 30 seconds


        function validateInput(event) {
            const input = document.getElementById("numb").value.trim();
            const errorMessage = document.getElementById("error-message");
        
            // Patterns
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const bdPhonePattern13 = /^(88017|88018|88013|88014|88015|88019|88016)\d{8}$/;
            const bdPhonePattern11 = /^(017|018|013|014|015|019|016)\d{8}$/;
        
            // Validation
            if (emailPattern.test(input) || bdPhonePattern13.test(input) || bdPhonePattern11.test(input)) {
                errorMessage.style.display = "none"; // Hide error
                form();
                return true; // Allow form to submit
            } else {
                errorMessage.style.display = "block"; // Show error
                event.preventDefault(); // Stop form from submitting
                return false;
            }
        }
        

// function form() {
//     alert("Valid input detected! Form function called.");
// }

   
        function openModal() {
            document.getElementById("termsModal").style.display = "flex";
        }
        
        function closeModal() {
            document.getElementById("termsModal").style.display = "none";
        }
        
        // Open the modal when the page loads
       // window.onload = openModal;
    