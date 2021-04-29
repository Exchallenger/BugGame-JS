import {GameBulider,  Reason } from './Game.js';
import Popup from './popup.js';
import * as sound from './sound.js';

const gameFinishBanner = new Popup();

const game = new GameBulider().gameDuration(5).carrotCount(3).bugCount(3).build();

game.setGameStopListener((reason)=>{
    let message;
    switch(reason){
        case Reason.cancel:
            message = 'replay?';
            sound.playAlert();
            break;
        case Reason.win:
            message = 'you win!';
            sound.playWin();
            break;
        case Reason.lose:
            message = 'you lost!';
            sound.playBug();
            break;
        default:
            throw new Error('not vaild reason');
    }
    gameFinishBanner.showWithText(message);
});


gameFinishBanner.setClickListener(()=>{
    game.start();
});
