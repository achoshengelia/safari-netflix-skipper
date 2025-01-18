document.addEventListener("DOMContentLoaded", (event) => {
    
    browser.storage.local.get(['skipIntros', 'skipCredits']).then((result) => {
        // Set the checkbox states based on saved preferences
        document.getElementById('skipIntros').checked = result.skipIntros || false;
        document.getElementById('skipCredits').checked = result.skipCredits || false;
    }).catch(error => {
        console.error(error)
    });
    
    document.getElementById('savePreferences').addEventListener('click', () => {
        const skipIntrosCheckbox = document.getElementById('skipIntros');
        const skipCreditsCheckbox = document.getElementById('skipCredits');
        
        browser.storage.local.set({
            skipIntros: skipIntrosCheckbox.checked,
            skipCredits: skipCreditsCheckbox.checked
        }).then(() => {
            window.close();
        }).catch(error => {
            console.error(error)
        });
    });
});


