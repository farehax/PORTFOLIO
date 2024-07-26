document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for navigation links
    document.querySelectorAll('navbar ul li a').forEach(anchor => {
        console.log('Adding event listener to:', anchor);
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior
            console.log('Link clicked:', this);

            // Get the target section based on the href attribute (class name)
            const targetClass = this.getAttribute('href').substring(1); // Remove the '#' character
            console.log('Target class:', targetClass);
            const targetSection = document.querySelector(`.${targetClass}`);
            console.log('Target section:', targetSection);

            if (targetSection) {
                // Scroll to the target section
                targetSection.scrollIntoView({
                    behavior: 'smooth' // Smooth scrolling effect
                });
                console.log('Scrolling to:', targetSection);
            }
        });
    });
});

var formData = new FormData(document.querySelector('.contact-form'));
document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        var formData = new FormData(form);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts'); // Change URL as needed

        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log('Success:', xhr.responseText);
                alert('Message sent successfully!');
                form.reset(); // Optionally reset the form
            } else {
                console.error('Error:', xhr.statusText);
                alert('An error occurred. Please try again.');
            }
        };

        xhr.onerror = function() {
            console.error('Network Error');
            alert('A network error occurred. Please check your connection and try again.');
        };

        xhr.send(formData);
    });
});
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        console.log('Success:', xhr.responseText);
        alert('Message sent successfully! Check the console for the response.');
        form.reset(); // Optionally reset the form
    } else {
        console.error('Error:', xhr.statusText);
        alert('An error occurred. Please try again.');
    }
};
