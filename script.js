(() => {
  const WA_LINK = "https://wa.me/qr/OMDJ2NT2SAGII1";

  const IMAGENS = [
    "https://instagram.fbau3-1.fna.fbcdn.net/v/t51.82787-15/778963953_18081455258392789_7724971733831404883_n.jpg?stp=dst-jpegr_e35_p1080x1080_tt6&_nc_cat=103&ig_cache_key=Mzk2NTgwNzA0MzMyNjYxNzc2OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMzAyNC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=WGroVSKV06sQ7kNvwEMa-Me&_nc_oc=AdrQ0CowkG3zZEZjSIg8OCipoh0LHi1oqbEE8P00DLzMNKJArQ1CGh9Fw_KloSm7_NTNZp5Y0HLjv8rgtQfAGZvB&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbau3-1.fna&_nc_gid=53GW9j0FW9-uRDprthzs5w&_nc_ss=7a22e&oh=00_AQLoHuMOZmmWMADZYOXHZDIUoJhi64v51tiArntq1n55LQ&oe=6AA289DC",
    "https://instagram.fbau3-1.fna.fbcdn.net/v/t51.82787-15/777515976_18081455099392789_4603516293495783568_n.jpg?stp=dst-jpegr_e35_p1080x1080_tt6&_nc_cat=103&ig_cache_key=Mzk2NTgwNjg2NDk2ODEwMTkyNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMjgxNi5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=YaLbI8Zr6jwQ7kNvwGFaiKh&_nc_oc=AdrTAcxswsTM5xMKnImdReZcRbohUhpwnBpE8A1EkwvolHqvDtC_cESVUlviKwnnUJaSzWGO611aUJKxlNFGUXqy&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbau3-1.fna&_nc_gid=53GW9j0FW9-uRDprthzs5w&_nc_ss=7a22e&oh=00_AQICOomeb1qcsIMYRjjV9rF9YkFrjVQ2rVkdrFft7qQVuw&oe=6AA28C1F",
    "https://instagram.fbau3-2.fna.fbcdn.net/v/t51.82787-15/774883641_18080675171392789_9097629547646148254_n.jpg?stp=dst-jpegr_e35_p1080x1080_tt6&_nc_cat=110&ig_cache_key=Mzk2NDQ1ODMyNDQyNjQ1ODExOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMzAyNC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=1UP6FJXyU5cQ7kNvwG2oTtb&_nc_oc=AdrKicAqDTmRzufK1uixEyVEeb6awLuyCBxsvIXdFvUs4HgxetXlXl6MnFsjoT6d9p3chXArRRGN8H7UWOJ12u_j&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbau3-2.fna&_nc_gid=53GW9j0FW9-uRDprthzs5w&_nc_ss=7a22e&oh=00_AQJYAYllUPWEpXKd-KqpP9e_rQl19Ksa3UXrta_nBL7zVA&oe=6AA29870",
    "https://instagram.fbau3-1.fna.fbcdn.net/v/t51.82787-15/776130378_18080675123392789_2941848705456779054_n.jpg?stp=dst-jpegr_e35_p1080x1080_tt6&_nc_cat=103&ig_cache_key=Mzk2NDQ1ODE0MDU2MzgyMTc1NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMzAyNC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=IpBE_YoM75EQ7kNvwGoVMFJ&_nc_oc=AdoG4ByOcFAYihlq4WQRs7h8PnWnajEI297Y8AOtATPCkdTsbZ2ViVs1qqJA2e3NI8kLeRYaPv64l6y3LrxMJx-8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbau3-1.fna&_nc_gid=53GW9j0FW9-uRDprthzs5w&_nc_ss=7a22e&oh=00_AQK3VLGkfnPVssIOQgZ8xzMtjFFWDT6GhsgbuGvY1Y2lCA&oe=6AA29370",
    "https://instagram.fbau3-1.fna.fbcdn.net/v/t51.82787-15/773725129_18080675096392789_1267083550325629131_n.jpg?stp=dst-jpegr_e35_p1080x1080_tt6&_nc_cat=111&ig_cache_key=Mzk2NDQ1ODAwMDk3NzI0MDcwNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMzAyNC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=0FHB37RLP8MQ7kNvwG0BJq-&_nc_oc=AdpZ2e4VKiIgvO70_KJjwVUtzZOo7-MHckqF3YJD4RtJpBjjb0XyvRpSs3ayOaYbSQAWlywZtA_0pdvtFXB3Px-M&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbau3-1.fna&_nc_gid=53GW9j0FW9-uRDprthzs5w&_nc_ss=7a22e&oh=00_AQIsQ_uHyqQAu36KmqvhsrX4n1INwh34vSaf3K8LAtquHA&oe=6AA27D74",
    "https://instagram.fbau3-2.fna.fbcdn.net/v/t51.82787-15/773725130_18080675033392789_6953682210872796477_n.jpg?stp=dst-jpegr_e35_p1080x1080_tt6&_nc_cat=107&ig_cache_key=Mzk2NDQ1NzU2MTg5NDE1Mjk5NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMzAyNC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=lXa0hJ_M4kQQ7kNvwEPZ-PC&_nc_oc=AdrnO-JK1E6WUJnzn78ZkXLVAmw-JYBNtMRvarSuAsdclwzXArXc2NfI2PqVvlWeXSczvqfxRKt7lKZqgwUpkU15&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbau3-2.fna&_nc_gid=53GW9j0FW9-uRDprthzs5w&_nc_ss=7a22e&oh=00_AQLeZAcx623WLucLvyk90J-Py3iufnpyFr7tnk_j_sNF8A&oe=6AA27FFE",
    "https://instagram.fbau3-2.fna.fbcdn.net/v/t51.82787-15/774886569_18080674874392789_3442856482710571623_n.jpg?stp=dst-jpegr_e35_p1080x1080_tt6&_nc_cat=104&ig_cache_key=Mzk2NDQ1NzM4OTM2NTIxMTEwNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMzAyNC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=Pf3_4XHCfIoQ7kNvwGr3xFj&_nc_oc=AdoEO2u7MrQtUuwDlOYLmmXztA3yP45jBLl1R4m3hAe4MtwmY91aUuVpnJYcfYbgEYqZs-6Y-Y_d6aLOltw9umM7&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbau3-2.fna&_nc_gid=53GW9j0FW9-uRDprthzs5w&_nc_ss=7a22e&oh=00_AQL8ejTBd5vxh4cgwEzGObHZ8Nog0nSTYTzvzDIIjk3R-w&oe=6AA29BE3",
    "https://instagram.fbau3-2.fna.fbcdn.net/v/t51.82787-15/776061495_18080674739392789_1970443697449806956_n.jpg?stp=dst-jpegr_e35_p1080x1080_tt6&_nc_cat=106&ig_cache_key=Mzk2NDQ1NzIyMjU5MDQzMDM2Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMzAyNC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=ngcEQ9g-E88Q7kNvwGZB60N&_nc_oc=AdpycWY5oAzsgYgCsujiU5Jlicsa24btbp3S7dSNClFORiuoFXBUkJ44cCWamYAwJSaoRUera9Tf4AqYt2HdUL4O&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbau3-2.fna&_nc_gid=53GW9j0FW9-uRDprthzs5w&_nc_ss=7a22e&oh=00_AQLkXixHA0qcXjL_OSpPmkQrb2LL9pqZqTk8f4PgvBmpUg&oe=6AA27C3D",
    "https://instagram.fbau3-2.fna.fbcdn.net/v/t51.82787-15/775245009_18080674454392789_1834628967847351081_n.jpg?stp=dst-jpegr_e35_p1080x1080_tt6&_nc_cat=105&ig_cache_key=Mzk2NDQ1NjczOTk3ODMxMTI5OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMzAyNC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=kkqDibMggRkQ7kNvwHmGKuR&_nc_oc=AdruBWIzR3qQIavGUOMzREAPSmg3NZMcaKjKcF842dpjvS1hKkPNbqleu_G65_fgmKb1Z8ZmEtAw1jgmYBa6Q29O&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbau3-2.fna&_nc_gid=53GW9j0FW9-uRDprthzs5w&_nc_ss=7a22e&oh=00_AQKMtodts19TLAXDIxEo7sBh8BEhQPEtF9ahhGm5ZyYyQQ&oe=6AA28318",
    "https://instagram.fbau3-1.fna.fbcdn.net/v/t51.82787-15/773687224_18080674256392789_2405046121463688561_n.jpg?stp=dst-jpegr_e35_p1080x1080_tt6&_nc_cat=103&ig_cache_key=Mzk2NDQ1NjMzOTcwNzMzMzkxNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMzAyNC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=ntfaZOIsMgEQ7kNvwHWsZjG&_nc_oc=AdpPzygGZGWjo-JrCbZAs6yuBwnN9uU_ZzcEPD2mI6NwxTn6V_jlMyzA3b6Fn83scYRHL8nJoAZFVw0JjoNjL4Zn&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbau3-1.fna&_nc_gid=FsJ06MSFJcgeVulP5heOWQ&_nc_ss=7a22e&oh=00_AQIGTsSkKQGBW0ANGN5ZRwIAnFtjHkdI2duiHJvINnkBhA&oe=6AA27424",
    "https://instagram.fbau3-1.fna.fbcdn.net/v/t51.82787-15/774314783_18080674151392789_1339615386374518359_n.jpg?stp=dst-jpegr_e35_p1080x1080_tt6&_nc_cat=111&ig_cache_key=Mzk2NDQ1NjE4MTk2Njg4NDE1OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMzAyNC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=NC-bAbfeqeYQ7kNvwHD8OLN&_nc_oc=AdoXh5-CtbIEhbiwzg7VVJRGHpTVuub77DsazMudAvVmaRhuKguIHejjm9-_3hkaJIQnVVBHPEkovF3WbUpHzWMM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbau3-1.fna&_nc_gid=FsJ06MSFJcgeVulP5heOWQ&_nc_ss=7a22e&oh=00_AQKCBXOHZAT5y8NXQels8ZcyDiSwJDWbn7k3PwroVZo38g&oe=6AA27EE6",
    "https://instagram.fbau3-2.fna.fbcdn.net/v/t51.82787-15/774018536_18080631245392789_842717007367875205_n.jpg?stp=dst-jpegr_e35_p1080x1080_tt6&_nc_cat=108&ig_cache_key=Mzk2NDM4Mzg5OTY4ODc4MDMzNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMzc3Ni5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=eXZVcsyJibIQ7kNvwHbdGgc&_nc_oc=AdpX2YCXw1525vulr8m89EEWmHUne5hasopDu27DZUMJst0-N1Di4AFCVFWi4Zaitd9VH2ppmbSoPYX7G21T0MrJ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbau3-2.fna&_nc_gid=FsJ06MSFJcgeVulP5heOWQ&_nc_ss=7a22e&oh=00_AQJM3UdGVAT8316PIzn9MViRhCVnmg2CyNtk_UsXqZGMmw&oe=6AA286A9",
    "https://instagram.fbau3-2.fna.fbcdn.net/v/t51.82787-15/774033791_18080630009392789_3410599915203491004_n.jpg?stp=dst-jpegr_e35_p1080x1080_tt6&_nc_cat=108&ig_cache_key=Mzk2NDM4MDk1OTI2MzY0OTc5Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMzY5Ni5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=OKRA3gGJ9_AQ7kNvwFsSzar&_nc_oc=AdrFeSK3Jc4t5FHC8q-g9rqmyeGtXiplEWuj2xM2vAFhokUCzmzSoJw_LvZ2-4rBO43NfmL4lCH_rlsxLz9RhUYp&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbau3-2.fna&_nc_gid=FsJ06MSFJcgeVulP5heOWQ&_nc_ss=7a22e&oh=00_AQJSvrmh-2kjlctAco6QtULDczfghesYlokPq0TQQNUEBg&oe=6AA2667E"
  ];

  const galeria = document.getElementById("galeria");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");

  IMAGENS.forEach((src, i) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "card";
    card.setAttribute("aria-label", "Ampliar peça " + (i + 1));

    const img = document.createElement("img");
    img.src = src;
    img.alt = "Peça FÉ & ESTILO " + (i + 1);
    img.loading = "lazy";

    const overlay = document.createElement("div");
    overlay.className = "card-overlay";
    const span = document.createElement("span");
    span.textContent = "Ampliar";
    overlay.appendChild(span);

    card.appendChild(img);
    card.appendChild(overlay);
    card.addEventListener("click", () => abrirLightbox(img));
    galeria.appendChild(card);
  });

  function abrirLightbox(img) {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function fecharLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  lightboxClose.addEventListener("click", fecharLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) fecharLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") fecharLightbox();
  });
})();