        // 1. Grab the input fields
        const inputName  = document.getElementById('inputName');
        const inputRole  = document.getElementById('inputRole');
        const inputBio   = document.getElementById('inputBio');
        const inputEmoji = document.getElementById('inputEmoji');

        // 2. Grab the preview elements
        const cardName   = document.getElementById('cardName');
        const cardRole   = document.getElementById('cardRole');
        const cardBio    = document.getElementById('cardBio');
        const cardAvatar = document.getElementById('cardAvatar');

        // 3. Update the preview whenever the user types
        function updateCard() {
            cardName.textContent   = inputName.value  || 'Ton prénom';
            cardRole.textContent   = inputRole.value  || 'Ton rôle';
            cardBio.textContent    = inputBio.value   || 'Ta bio';
            cardAvatar.textContent = inputEmoji.value || '🙂';
        }

        // 4. Listen for typing in each field
        inputName.addEventListener('input', updateCard);
        inputRole.addEventListener('input', updateCard);
        inputBio.addEventListener('input', updateCard);
        inputEmoji.addEventListener('input', updateCard);

        // 5. Initialize with default values
        updateCard();