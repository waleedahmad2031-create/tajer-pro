import { db } from "./firebase.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const box = document.getElementById("products");

async function loadProducts() {

  try {

    box.innerHTML = "";

    const collections = ["products", "منتجات"];

    let found = false;

    for (const col of collections) {

      const snap = await getDocs(collection(db, col));

      snap.forEach((doc) => {

        found = true;

        const p = doc.data();

        const name = p.name || p["اسم"] || "";
        const price = p.price || p["سعر"] || "";
        const image = p.image || p["صورة"] || "";

        box.innerHTML += `
          <div style="border:1px solid #ddd;padding:10px;margin:10px;border-radius:10px">
            <img src="${image}" width="150" style="max-width:100%;border-radius:8px"><br><br>
            <h3>${name}</h3>
            <p>${price} ريال</p>
          </div>
        `;

      });

    }

    if (!found) {
      box.innerHTML = "<h3>لا توجد منتجات</h3>";
    }

  } catch (error) {

    console.error(error);
    box.innerHTML = "<h3>حدث خطأ في تحميل المنتجات</h3>";

  }

}

loadProducts();
