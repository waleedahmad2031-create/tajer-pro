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

async function loadProducts(){

productsBox.innerHTML="";

let found=false;

const collections=["products","منتجات"];

for(const col of collections){

try{

const snap=await loadCollection(col);

snap.forEach((doc)=>{

found=true;

const p=doc.data();

const name=getValue(p,"name","اسم");
const price=getValue(p,"price","سعر");
const image=getValue(p,"image","صورة");
const category=getValue(p,"category","قسم");

productsBox.innerHTML+=`

<div class="card">

<img src="${image}" alt="${name}">

<h3>${name}</h3>

<p>${price} ريال</p>

</div>

`;

});

}catch(e){

console.log(e);

}

}

if(!found){

productsBox.innerHTML="<h2 style='text-align:center'>لا توجد منتجات</h2>";

}

}

try{

loadProducts();

}catch(error){

console.error(error);

productsBox.innerHTML=`
<div style="
padding:20px;
text-align:center;
color:red;
font-weight:bold;
">
حدث خطأ أثناء تحميل المنتجات
</div>
`;

}

