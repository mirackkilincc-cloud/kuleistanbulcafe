// Porsiyon başına besin değerleri — TASLAK / YAKLAŞIK.
// (Tatlılar bölümündeki Lupin Gıda ürünleri hariç: onlar üreticinin 100 g beyanı x ürün gramajı.)  [kcal, protein g, yağ g, karbonhidrat g]
// Standart tarif ve porsiyon büyüklüklerinden (USDA + TürKomp referansları) hesaplanmış tahminlerdir;
// mevzuata uygun beyan için mutfak gramajlarıyla bir gıda mühendisi / diyetisyen tarafından doğrulanmalıdır.
// Anahtar: Türkçe ürün adı (kule-data.js ile birebir). Nargile bölümü için besin beyanı yapılmaz (build.js).
module.exports = {
 // Kahvaltı
 "Serpme Kahvaltı (Kişi Başı)":[1250,48,78,85],
 "Sade Omlet":[330,19,27,2],"Peynirli Omlet":[420,27,33,2],"Kaşarlı Omlet":[430,28,34,2],"Karışık Omlet":[540,34,42,4],
 "Kavurmalı Yumurta":[480,35,37,2],"Sucuklu Yumurta":[450,28,37,2],"Sahanda Yumurta":[300,18,25,1],"Sahanda Sucuk":[380,20,33,1],
 "Menemen":[350,17,27,9],"Kaşarlı Menemen":[440,25,34,9],"Kuymak":[520,20,40,24],
 "Çift Kaşarlı Tost":[720,30,36,68],"Kaşarlı Sucuklu Tost":[780,35,42,66],
 // Aparatifler
 "Günün Çorbası":[180,6,8,20],"Cajun Finger":[680,38,34,56],"Big Combo Mix":[1310,50,76,100],"Elma Dilim Patates":[400,5,18,54],
 "Parmak Patates":[400,5,19,52],"Sosis Box":[900,34,58,56],"Soğan Halkası":[700,9,36,84],"Sigara Böreği":[620,22,38,46],
 // Salatalar & Makarnalar
 "Çoban Salata":[160,3,12,11],"Mevsim Salata":[130,3,9,11],"Şişte Köfte Salata":[420,28,30,10],"Tavuklu Sezar Salata":[540,40,32,22],"Cajun Tavuk Salata":[560,40,30,34],
 "Spagetti Bolonez":[880,42,32,105],"Mac & Cheese":[900,36,44,88],"Penne Arrabbiata":[780,24,30,102],"Fettuccine Alfredo":[960,48,48,84],
 "Noodle Sebzeli":[620,16,18,96],"Noodle Tavuklu":[730,36,20,96],
 // Burgerler & Wrapler (patates dahil)
 "Kule İstanbul Burger":[1130,49,63,90],"Cheese Burger":[1150,51,65,88],"Jumbo Cheese Burger":[1520,83,91,90],"Tavuk Burger":[1090,48,58,94],
 "Etli Wrap":[1000,48,50,88],"Tavuklu Wrap":[930,46,42,92],"Kaşarlı Köfteli Wrap":[1010,48,51,88],
 // Ana Yemekler (garnitür dahil)
 "Izgara Anne Köftesi":[900,47,44,80],"Kule İstanbul Kebap":[800,42,42,62],"Beğendili Köfte":[790,42,44,56],
 "Kaymaklı Kule Tavuk":[880,51,45,66],"Köri Soslu Tavuk":[830,49,40,66],"BBQ Soslu Tavuk":[820,49,36,72],"Tavuk Sote":[700,46,28,64],
 "Baharatlı Piliç Izgara":[720,46,32,60],"Tavuk Külbastı":[620,46,26,48],
 "Chicken Schnitzel":[780,44,36,68],"Mantar Soslu Schnitzel":[880,48,44,70],"Cheddar Soslu Schnitzel":[940,52,50,70],
 "Cafe de Paris Soslu Tavuk Lokum":[600,43,42,10],"Cheddar Soslu Tavuk Lokum":[620,45,44,10],"Sweet Chili Kule Topları":[640,40,30,48],
 // Kırmızı Etler (garnitür dahil)
 "Karışık Izgara":[2100,126,111,130],"Kuzu Pirzola (3 Parça)":[1050,50,57,84],"Kuzu Pirzola (4 Parça)":[1250,64,73,84],"Antrikot":[1150,58,61,84],
 "Bonfile":[1050,56,49,84],"Mantar Soslu Bonfile":[1240,62,58,102],"Cafe de Paris Soslu Bonfile":[980,52,60,46],"Fajita":[1330,58,78,92],"Combo Fajita":[1360,66,76,92],
 // Tatlılar
 "Frambuazlı Cheesecake":[930,14,52,100],"Limonlu Cheesecake":[570,8,32,63],"Süt Reçelli Cheesecake":[435,10,22,53],"Çikolatalı Vişne Rüyası":[730,13,43,71],
 "Yaban Mersinli Linzer":[775,11,45,81],"Lotus Cup":[1215,14,72,140],"Snickers Pasta":[1180,19,77,102],"Mozaik Pasta":[680,10,36,77],"Tiramisu Pasta":[460,8,24,54],
 "Kule Ballım":[420,6,20,56],"Sufle":[295,5,15,32],
 "Cedric Fıstık":[420,8,28,34],"Cedric Limon":[380,5,22,40],"Cedric Mango":[380,5,22,40],"Cedric Hindistan Cevizi":[830,13,32,120],
 "Meyve Tabağı":[220,3,1,52],"Dondurma (1 Top)":[120,2,6,14],"Dondurma (3 Top)":[360,6,18,42],
 // Sıcak kahveler
 "Espresso":[5,0,0,1],"Duble Espresso":[10,0,0,2],"Espresso Macchiato":[20,1,1,1],"Americano":[10,0,0,2],"Filtre Kahve":[5,0,0,1],
 "Cafe Latte":[150,8,6,14],"Cappuccino":[120,7,5,11],"Hot Chocolate":[280,9,10,38],"White Hot Chocolate":[320,9,14,40],"Salep":[220,8,6,34],
 "Caramel Latte":[230,8,6,34],"Vanilya Latte":[220,8,6,32],"Tuzlu Karamel Latte":[240,8,6,36],"Chocolate Cookie Latte":[260,8,8,38],
 "Cinnamon Latte":[220,8,6,32],"Caramello Latte":[260,8,8,38],"Chai Tea Latte":[200,6,5,32],"Kule Chai Tea Latte":[210,6,5,34],
 "Kule Mocha":[290,9,10,40],"Mocha Caramel Latte":[300,9,10,44],"White Mocha":[300,9,12,40],
 // Soğuk kahveler
 "Iced Latte":[130,7,5,12],"Iced Americano":[10,0,0,2],"Iced Caramel Latte":[220,7,5,34],"Iced Kule Coffee Caramel":[240,7,6,36],
 "Iced Mocha":[260,8,9,36],"Iced White Mocha":[280,8,11,38],"Iced Vanilya Latte":[210,7,5,32],"Iced Tuzlu Karamel Latte":[230,7,5,36],
 "Iced Chai Tea Latte":[190,6,4,30],"Iced Kule Chai Tea Latte":[200,6,4,32],
 // Çay & Türk kahvesi
 "Çay":[2,0,0,0],"Yeşil Çay":[2,0,0,0],"Ihlamur":[2,0,0,0],"Ada Çayı":[2,0,0,0],"Kuşburnu":[5,0,0,1],"Nane Limon":[10,0,0,2],"Limon Çayı":[10,0,0,2],
 "Türk Kahvesi":[10,1,0,1],"Double Türk Kahvesi":[20,1,0,2],
 // Soğuk & gazlı
 "Coca Cola":[140,0,0,35],"Cola Zero":[1,0,0,0],"Sprite":[130,0,0,33],"Fanta":[140,0,0,35],"Cappy Karışık":[110,0,0,27],"Cappy Vişne":[120,0,0,29],
 "Cappy Şeftali":[110,0,0,27],"Fuse Tea Şeftali":[90,0,0,22],"Fuse Tea Limon":[80,0,0,20],"Ayran":[90,5,4,7],"Sade Soda":[0,0,0,0],
 "Meyveli Soda":[20,0,0,5],"Limonata":[150,0,0,38],"Portakal Suyu":[180,3,1,40],"Churchill":[5,0,0,1],"Su":[0,0,0,0],"Karadut":[160,1,0,38],
 // Milkshake / Frozen / Mojito  (18.09.2026: milkshake'lerden dondurma, frozen'lardan şeker çıktı — yeniden tahmin edildi)
 "Çilekli Milkshake":[310,10,11,42],"Çikolatalı Milkshake":[340,10,12,48],"Vanilyalı Milkshake":[300,10,11,40],"Oreo Milkshake":[390,11,15,52],"Muzlu Milkshake":[310,10,11,42],
 "Kavunlu Frozen":[110,1,0,26],"Karpuz Frozen":[100,1,0,24],"Elma Frozen":[130,0,0,32],"Çilek Frozen":[110,1,0,26],"Böğürtlen Frozen":[115,1,0,27],
 "Kivi Frozen":[125,1,0,29],"Yaban Mersini Frozen":[130,1,0,31],"Karadut Frozen":[130,1,0,31],"Frambuazlı Frozen":[115,1,0,26],
 "Orman Meyveli Frozen":[125,1,0,29],"Muz Frozen":[165,2,0,40],
 "Klasik Mojito":[160,0,0,40],"Çilekli Mojito":[180,0,0,44],"Elmalı Mojito":[180,0,0,44]
};
