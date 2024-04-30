function loadTopSection(marcyIcon, notifyIcon){

    const icon = new Image();
    icon.src = marcyIcon;
    icon.classList.toggle('icon');

    const iconDiv = document.createElement('div');
    iconDiv.classList.toggle('icon-div')
    const userName = document.createElement('p');
    userName.textContent = 'Marceline';
    iconDiv.appendChild(icon);
    iconDiv.appendChild(userName);


    const notify = new Image();
    notify.src = notifyIcon;
    notify.classList.toggle('icon');
    notify.classList.toggle('notify');


    const topSection = document.querySelector('.top-section');
    topSection.appendChild(iconDiv);
    topSection.appendChild(notify);
}

export default loadTopSection;