// This file contains the imports of all functions and styles

import { handleSubmit } from './js/handleSubmit'
import { postRequest } from './js/postRequest'
import { retrieveApiKey } from "./js/retrieveApiKey";
import { checkInputURL } from "./js/checkInputURL";
import { clientResponseUpdateUI } from "./js/clientResponseUpdateUI"

import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import "./styles/resets.scss";

export {
    handleSubmit,
    postRequest,
    retrieveApiKey,
    checkInputURL,
    clientResponseUpdateUI
}

console.log(handleSubmit);
console.log(postRequest);
console.log(retrieveApiKey);
console.log(checkInputURL);
console.log(clientResponseUpdateUI);