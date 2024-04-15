

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('contextmenu', (mouseEvent) => {
        mouseEvent.preventDefault();
    });

    document.onkeydown = function(keyEvent) {
        if (keyEvent.keyCode == 123) {
            return false;
        }
        if (keyEvent.ctrlKey && keyEvent.shiftKey && (keyEvent.keyCode == 73 || keyEvent.keyCode == 74 || keyEvent.keyCode == 85)) {
            return false;
        }
    };

    document.querySelector('.fade-button').addEventListener('click', function() {
        this.style.opacity = 0;
        this.disabled = true;
        this.style.cursor = 'default';

        var audio = new Audio('assets/audio.mp3');
        audio.loop = true;
        audio.play();

        var namesList = document.querySelector('.names-list');
        namesList.style.display = 'block';
        setTimeout(function() {
            namesList.classList.add('show');
        }, 100);

        const swingingImage = document.querySelector('.swinging-image');
        swingingImage.style.opacity = 1;
    });

    var downloadButtons = document.querySelectorAll('.names-list ul li');
    var isWindowsXPOpen = false;

    downloadButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            var buttonText = button.textContent.toLowerCase();
            var customInfo = getCustomInfo(buttonText);
            createWindowsXPPopup(customInfo);
        });
    });

    function getCustomInfo(buttonText) {
        switch (buttonText) {
            case 'flow':
                return { text: 'true owner of L64..', imageName: 'assets/flow.png' };
            case 'kyro':
                return { text: '<a href="https://t.me/femboynetwork" target="_blank">t.me/femboynetwork</a>', imageName: 'assets/kyro.jpg' };
            case 'trick':
                return { text: '<a href="https://discord.com/users/1097651823650803793" target="_blank">discord</a>', imageName:'assets/trick.png' }; //
            case 'ven':
                return { text: '<a href="https://t.me/x_ox_v" target="_blank">t.me/x_ox_v</a>', imageName: 'assets/ven.png' };
            case 'kevin':
                return { text: '<a href="https://discord.com/users/1211562556171227156" target="_blank">discord</a>', imageName: 'assets/kevin.png' };
            case 'blonded':
                return { text: '<a href="https://t.me/blonded" target="_blank">t.me/blonded</a>', imageName: 'assets/blonded.png' };
            case 'rumor':
                return { text: 'session soldier', imageName: 'assets/rumor.png' };
            case 'dread':
                return { text: 'forgot telegram', imageName: 'assets/dread.png' };
            case 'swag':
                return { text: 'I would rather kill myself then getting fedded again.', imageName: 'assets/swag.png' };           

            default:
                return { text: '', imageName: null };
        }
    }

    function createWindowsXPPopup(info) {
        if (isWindowsXPOpen) {
            return;
        }

        var popupContainer = document.createElement('div');
        popupContainer.className = 'windows-xp-popup';

        var popupWindow = document.createElement('div');
        popupWindow.className = 'windows-xp-window';

        var blueBar = document.createElement('div');
        blueBar.className = 'windows-xp-blue-bar';
        blueBar.style.cursor = 'grab';

        var closeButton = document.createElement('div');
        closeButton.className = 'windows-xp-close-button';
        closeButton.innerHTML = 'X';

        closeButton.addEventListener('click', function () {
            document.body.removeChild(popupContainer);
            isWindowsXPOpen = false; 
        });

        var popupText = document.createElement('div');
        popupText.className = 'windows-xp-text';
        popupText.innerHTML = info.text;

        popupWindow.appendChild(blueBar);
        popupWindow.appendChild(closeButton);
        popupWindow.appendChild(popupText);

        // Check if image name is provided
        if (info.imageName) {
            var profilePicture = document.createElement('img');
            profilePicture.className = 'profile-picture';
            profilePicture.src = info.imageName;
            popupWindow.appendChild(profilePicture);
        }

        popupContainer.appendChild(popupWindow);
        document.body.appendChild(popupContainer);

        var isDragging = false;
        var offsetTop, offsetLeft;

        var top = Math.random() * (window.innerHeight - 200);
        var left = Math.random() * (window.innerWidth - 300);

        popupContainer.style.top = top + 'px';
        popupContainer.style.left = left + 'px';

        popupWindow.addEventListener('mousedown', function (event) {
            if (event.target.tagName.toLowerCase() === 'a') {
                return;
            }
            isDragging = true;
            offsetTop = event.clientY - popupContainer.getBoundingClientRect().top;
            offsetLeft = event.clientX - popupContainer.getBoundingClientRect().left;
        });

        document.addEventListener('mousemove', function (event) {
            if (isDragging) {
                var top = event.clientY - offsetTop;
                var left = event.clientX - offsetLeft;
                popupContainer.style.top = top + 'px';
                popupContainer.style.left = left + 'px';
            }
        });

        document.addEventListener('mouseup', function () {
            isDragging = false;
        });

        isWindowsXPOpen = true; 
    }
});
