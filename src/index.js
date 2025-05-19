// Anti-circular
window.extend = Object.setPrototypeOf;

// Libs
import wpower from "./libs/wpower/wpower.js";

// Modules
import Phrases from "./modules/phrases.js";

// Components
import home_js from "./modules/screens/home/home.js";

import item_list_js   from "./modules/coms/item-list/item-list.js";
import method_list_js from "./modules/coms/method-list/method-list.js";

// Dialogs
import create_screen_js from "./modules/coms/dialogs/create-screen/create-screen.js";
import create_com_js    from "./modules/coms/dialogs/create-com/create-com.js";

// Check if app is webpacked
function is_webpacked(){
    if (window.onload.toString().indexOf("async function main")==0)
        return false;
    else
        return true;
}

function _____CORE_____(){}

// Main
async function main(){
    const {cvm,lang} = wpower;
    cvm.init();
    lang.set_phrases(Phrases);

    if (is_webpacked()){
        // TO-DO: 
        // window._Screen_Html[...] = (await import(...)).default.toString()
        // window._Screen_Css...
    }
    await cvm.dyn_screens({
        "home": [home_js,"modules/screens/home"]
    });

    if (is_webpacked()){
        // TO-DO: 
        // window._Com_Html[...] = (await import(...)).default.toString()
        // window._Com_Css...
    }
    await cvm.dyn_coms({        
        "item-list":   [item_list_js,"modules/coms/item-list"],
        "method-list": [method_list_js,"modules/coms/method-list"],

        "create-screen": [create_screen_js,"modules/coms/dialogs/create-screen"],
        "create-com":    [create_com_js,"modules/coms/dialogs/create-com"]
    });

    cvm.render_screen("home",{});
}
window.onload = main;
// EOF