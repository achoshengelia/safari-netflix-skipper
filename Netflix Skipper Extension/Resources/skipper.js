//
//  JsScript.js
//  Netflix Skipper
//
//  Created by Achi Shengelia on 17.01.25.
//

(function () {
    setInterval(() => {
        const skipIntroButton = document.querySelector('button[data-uia="player-skip-intro"]');
        const nextEpisodeButton = document.querySelector('button[data-uia="next-episode-seamless-button"]');
        
        browser.storage.local.get(['skipIntros', 'skipCredits']).then((result) => {
            const isSkipIntrosEnabled = result.skipIntros || false;
            const isSkipCreditsEnabled = result.skipCredits || false;
            
            if (isSkipIntrosEnabled && skipIntroButton) skipIntroButton.click();
            if (isSkipCreditsEnabled && nextEpisodeButton) nextEpisodeButton.click();
        });
    } , 500)
})();
