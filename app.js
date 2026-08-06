import { db } from "./firebase.js";

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const productsBox = document.getElementById("products");

async function loadCollection(collectionName){

const snap = await getDocs(collection(db, collectionName));

return snap;

}

function getValue(data,en,ar){

return data[en] || data[ar] || "";

}
