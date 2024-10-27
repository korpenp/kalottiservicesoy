document.addEventListener('DOMContentLoaded', () => {
    const serviceSelect = document.getElementById('service');
    const timeSelect = document.getElementById('time');

    const tireTimes = `
        <option value="09-10">09 - 10</option>
        <option value="10-11">10 - 11</option>
        <option value="11-12">11 - 12</option>
        <option value="13-14">13 - 14</option>
        <option value="14-15">14 - 15</option>
        <option value="15-16">15 - 16</option>
        <option value="16-17">16 - 17</option>
    `;

    const defaultTimes = `
        <option value="morning">08 - 12</option>
        <option value="afternoon">12 - 17</option>
    `;

    serviceSelect.addEventListener('change', () => {
        if (serviceSelect.value === 'tire') {
            timeSelect.innerHTML = tireTimes;
        } else {
            timeSelect.innerHTML = defaultTimes;
        }
    });

    // Initialize time options based on the default value
    timeSelect.innerHTML = defaultTimes;


    /* maintenance service */

    function toggleText(id) {
        const content = document.getElementById(id);
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    }
    
    /* Nav Bar mobile view 

    document.addEventListener('DOMContentLoaded', function () {
        const menuToggle = document.getElementById('mobile-menu');
        const menu = document.querySelector('.menu');
    
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('open');
            menuToggle.classList.toggle('open');
        });
    }); */
    
});




