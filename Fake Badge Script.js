// ==UserScript==
// @name         BadgeGenius
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Customize your Discord badge with any badge you want, visually only.
// @author       Manny#0001
// @include      https://discord.com/*
// @icon         https://discordtemplates.me/icon.png
// @grant        none
// ==/UserScript==

'use strict';

console.log('BadgeGenius Working.');

const checkForProfileDelay = 100; // Increase if your discord starts to lag
const discordName = 'Manny' // Make sure to only include your name & NOT your discriminator (Case sensitive)
let amountOfBadges = 0; // Used to check if more badges need to be added 

const nitroBadge = true; // https://cdn.discordapp.com/attachments/1094065441703481435/1105984263192596520/ZdDxkf0F3SOh.png
const serverBoosterBadge = true; 
const hypeSquadBadge = true; // https://cdn.discordapp.com/attachments/1094065441703481435/1105986038222041168/21.png
const hypeSquadEventsBadge = true; // https://cdn.discordapp.com/attachments/1094065441703481435/1105986196892569720/latest.png
const bugHunterBadge = true; // https://cdn.discordapp.com/attachments/1094065441703481435/1105985094000312380/21.png
const activeDeveloperBadge = true; // https://cdn.discordapp.com/attachments/1094065441703481435/1105984707029639239/21.png
const partneredServerOwnerBadge = true; // https://cdn.discordapp.com/attachments/1094065441703481435/1105986427122102282/21.png 
const discordStaffBadge = true; // https://cdn.discordapp.com/attachments/1094065441703481435/1105985291396841532/21.png
const moderatorProgramBadge = true; // https://cdn.discordapp.com/attachments/1094065441703481435/1105985868088483890/21.png
const earlySupporterBadge = true; // https://cdn.discordapp.com/attachments/1094065441703481435/1105985413522411520/21.png


console.log(`Nitro Badge Enabled: ${nitroBadge}`);
console.log(`ServerBooster Badge Enabled: ${serverBoosterBadge}`);
console.log(`HypeSquad Badge Enabled: ${hypeSquadBadge}`);
console.log(`HypeSquad Events Badge Enabled: ${hypeSquadEventsBadge}`);
console.log(`Bug Hunter Badge Enabled: ${bugHunterBadge}`);
console.log(`Active Developer Badge Enabled: ${activeDeveloperBadge}`);
console.log(`Partnered Server Owner Badge Enabled: ${partneredServerOwnerBadge}`);
console.log(`Discord Staff Badge Enabled: ${discordStaffBadge}`);
console.log(`Moderator Program Badge Enabled: ${moderatorProgramBadge}`);

if (nitroBadge) {
    amountOfBadges++;
}
if (serverBoosterBadge) {
    amountOfBadges++;
}
if (hypeSquadBadge) {
    amountOfBadges++;
}
if (hypeSquadEventsBadge) {
    amountOfBadges++;
}
if (bugHunterBadge) {
    amountOfBadges++;
}
if (activeDeveloperBadge) {
    amountOfBadges++;
}
if (partneredServerOwnerBadge) {
    amountOfBadges++;
}
if (discordStaffBadge) {
    amountOfBadges++;
}
if (moderatorProgramBadge) {
    amountOfBadges++;
}
if (earlySupporterBadge) {
    amountOfBadges++;
}

console.log(`You've selected: ${amountOfBadges} badges`);

function addBadge(className) {
    if (nitroBadge) {
        document.getElementsByClassName(className)[0].innerHTML += '<a class="anchor-1X4H4q anchorUnderlineOnHover-wiZFZ_" aria-label="Server Booster Badge" href="" rel="noreferrer noopener" target="_blank" role="button" tabindex="0"><img alt=" " aria-hidden="true" src="https://cdn.discordapp.com/attachments/1094065441703481435/1105984263192596520/ZdDxkf0F3SOh.png" class="profileBadge22-3GAYRy profileBadge-12r2Nm desaturate-_Twf3u"></a>';
    }
    if (serverBoosterBadge) {

    }
    if (hypeSquadBadge) {
        document.getElementsByClassName(className)[0].innerHTML += '<a class="anchor-1X4H4q anchorUnderlineOnHover-wiZFZ_" aria-label="HypeSquad Badge" href="" rel="noreferrer noopener" target="_blank" role="button" tabindex="0"><img alt=" " aria-hidden="true" src="https://cdn.discordapp.com/attachments/1094065441703481435/1105986038222041168/21.png" class="profileBadge22-3GAYRy profileBadge-12r2Nm desaturate-_Twf3u"></a>';
    }
    if (hypeSquadEventsBadge) {
        document.getElementsByClassName(className)[0].innerHTML += '<a class="anchor-1X4H4q anchorUnderlineOnHover-wiZFZ_" aria-label="HypeSquad Events Badge" href="" rel="noreferrer noopener" target="_blank" role="button" tabindex="0"><img alt=" " aria-hidden="true" src="https://cdn.discordapp.com/attachments/1094065441703481435/1105986196892569720/latest.png" class="profileBadge22-3GAYRy profileBadge-12r2Nm desaturate-_Twf3u"></a>';
    }
    if (bugHunterBadge) {
        document.getElementsByClassName(className)[0].innerHTML += '<a class="anchor-1X4H4q anchorUnderlineOnHover-wiZFZ_" aria-label="Bug Hunter Badge" href="" rel="noreferrer noopener" target="_blank" role="button" tabindex="0"><img alt=" " aria-hidden="true" src="https://cdn.discordapp.com/attachments/1094065441703481435/1105985094000312380/21.png" class="profileBadge22-3GAYRy profileBadge-12r2Nm desaturate-_Twf3u"></a>';
    }
    if (activeDeveloperBadge) {
        document.getElementsByClassName(className)[0].innerHTML += '<a class="anchor-1X4H4q anchorUnderlineOnHover-wiZFZ_" aria-label="Active Developer Badge" href="" rel="noreferrer noopener" target="_blank" role="button" tabindex="0"><img alt=" " aria-hidden="true" src="https://cdn.discordapp.com/attachments/1094065441703481435/1105984707029639239/21.png" class="profileBadge22-3GAYRy profileBadge-12r2Nm desaturate-_Twf3u"></a>';
    }
    if (partneredServerOwnerBadge) {
        document.getElementsByClassName(className)[0].innerHTML += '<a class="anchor-1X4H4q anchorUnderlineOnHover-wiZFZ_" aria-label="Partnered Server Owner Badge" href="" rel="noreferrer noopener" target="_blank" role="button" tabindex="0"><img alt=" " aria-hidden="true" src="https://cdn.discordapp.com/attachments/1094065441703481435/1105986427122102282/21.png " class="profileBadge22-3GAYRy profileBadge-12r2Nm desaturate-_Twf3u"></a>';
    }
    if (discordStaffBadge) {
        document.getElementsByClassName(className)[0].innerHTML += '<a class="anchor-1X4H4q anchorUnderlineOnHover-wiZFZ_" aria-label="Discord Staff Badge" href="" rel="noreferrer noopener" target="_blank" role="button" tabindex="0"><img alt=" " aria-hidden="true" src="https://cdn.discordapp.com/attachments/1094065441703481435/1105985291396841532/21.png" class="profileBadge22-3GAYRy profileBadge-12r2Nm desaturate-_Twf3u"></a>';
    }
    if (moderatorProgramBadge) {
        document.getElementsByClassName(className)[0].innerHTML += '<a class="anchor-1X4H4q anchorUnderlineOnHover-wiZFZ_" aria-label="Moderator Program Badge" href="" rel="noreferrer noopener" target="_blank" role="button" tabindex="0"><img alt=" " aria-hidden="true" src="https://cdn.discordapp.com/attachments/1094065441703481435/1105985868088483890/21.png" class="profileBadge22-3GAYRy profileBadge-12r2Nm desaturate-_Twf3u"></a>';
    }
    if (earlySupporterBadge) {
        document.getElementsByClassName(className)[0].innerHTML += '<a class="anchor-1X4H4q anchorUnderlineOnHover-wiZFZ_" aria-label="Early Supporter Badge" href="" rel="noreferrer noopener" target="_blank" role="button" tabindex="0"><img alt=" " aria-hidden="true" src="https://cdn.discordapp.com/attachments/1094065441703481435/1105985413522411520/21.png" class="profileBadge22-3GAYRy profileBadge-12r2Nm desaturate-_Twf3u"></a>';
    }
}

// Settings Profile 
// badgeList-b3Ajmk
setInterval(()=> {
    if (document.getElementsByClassName('badgeList-b3Ajmk')[0]) {
        // Check if all the badges that need to be added r added
        if (document.getElementsByClassName('badgeList-b3Ajmk')[0].childElementCount <= amountOfBadges) {
            console.log('Adding Badges');
            document.getElementsByClassName('badgeList-b3Ajmk')[0].innerHTML = '';
            addBadge('badgeList-b3Ajmk');
        }
    }
}, checkForProfileDelay);


// Big Screen Profile
setInterval(()=> {
    if (document.getElementsByClassName('badgeList-2aoHPw')[0]) {
        // Check if all the badges that need to be added r added
        // Check if the user profile is the clients profile
        if (document.getElementsByClassName('username-3JLfHz')[0].innerHTML === discordName) {
            if (document.getElementsByClassName('badgeList-2aoHPw')[0].childElementCount <= amountOfBadges) {
                console.log('Adding Badges');
                document.getElementsByClassName('badgeList-2aoHPw')[0].innerHTML = '';
                addBadge('badgeList-2aoHPw');
            }
        }
    }
}, checkForProfileDelay);


// Small Screen Profile
setInterval(()=> {
    if (document.getElementsByClassName('profileBadges-2pItdR')[0]) {
        // Check if all the badges that need to be added r added
        if (document.getElementsByClassName('username-3JLfHz')[0].innerHTML === discordName) {
            if (document.getElementsByClassName('profileBadges-2pItdR')[0].childElementCount <= amountOfBadges) {
                console.log('Adding Badges');
                document.getElementsByClassName('profileBadges-2pItdR')[0].innerHTML = '';
                addBadge('profileBadges-2pItdR');
            }
        }
    }
}, checkForProfileDelay);
