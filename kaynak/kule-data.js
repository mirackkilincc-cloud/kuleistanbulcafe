// KULE İstanbul Cafe — menü verisi (kaynak: 01.04.2026 tarihli basılı menü PDF'i)
// Her ürün: [TR ad, EN ad, AR ad, fiyat, TR içindekiler, EN içindekiler, AR içindekiler, alerjenler, ikon, fotoğraf]
// Alerjen: G gluten · M süt · Y yumurta · B balık · K kabuklu · S soya · SS susam · N sert kabuklu yemiş · F yer fıstığı · H hardal · C kereviz · SO sülfit
const SIDE_TR="közlenmiş biber & domates, pilav ve patates eşliğinde", SIDE_EN="served with roasted pepper & tomato, rice and fries", SIDE_AR="تُقدَّم مع فلفل وطماطم مشوية، أرز وبطاطس";
module.exports = [
{ id:"kahvalti", tr:"Kahvaltı", en:"Breakfast", ar:"الفطور",
  str:"Serpme, omlet, sıcak servisler, tostlar", sen:"Spread, omelettes, hot plates, toasts", sar:"فطور مشكّل، أومليت، أطباق ساخنة، توست",
  g:[
   { tr:"Serpme Kahvaltı", en:"Breakfast Spread", ar:"فطور مشكّل", note:"Sınırsız ekmek sepeti ve sınırsız çay", noteEn:"Unlimited bread basket and unlimited tea", noteAr:"سلة خبز غير محدودة وشاي غير محدود", i:[
    ["Serpme Kahvaltı (Kişi Başı)","Breakfast Spread (per person)","فطور مشكّل (للشخص)",995,
     "Sahanda yumurta, menemen, kalem böreği, patates tabağı, söğüş tabağı, beyaz peynir, taze kaşar, çeçil peyniri, burgu peynir, lor peyniri, jambon, kaymak, tereyağı, siyah–yeşil zeytin, zeytin salatası, acuka, bal, Nutella, reçel, sınırsız ekmek sepeti, sınırsız çay",
     "Fried eggs, menemen, cheese rolls, potato plate, sliced tomato & cucumber, white cheese, fresh kashar, chechil cheese, braided cheese, curd cheese, ham, clotted cream, butter, black & green olives, olive salad, acuka, honey, Nutella, jam, unlimited bread basket, unlimited tea",
     "بيض مقلي، منمن، لفائف جبنة، طبق بطاطس، شرائح طماطم وخيار، جبنة بيضاء، قشقوان طازج، جبنة شيشيل، جبنة مضفورة، جبنة لور، جامبون، قشطة، زبدة، زيتون أسود وأخضر، سلطة زيتون، أجوكا، عسل، نوتيلا، مربى، سلة خبز غير محدودة، شاي غير محدود",
     ["G","M","Y","N"],"plate","serpme"]]},
   { tr:"Omletler", en:"Omelettes", ar:"أومليت", i:[
    ["Sade Omlet","Plain Omelette","أومليت سادة",405,"Yumurta, tereyağı, tuz, ayçiçek yağı","Egg, butter, salt, sunflower oil","بيض، زبدة، ملح، زيت عبّاد الشمس",["Y","M"],"omelette"],
    ["Peynirli Omlet","Cheese Omelette","أومليت بالجبنة",435,"Yumurta, beyaz peynir, tereyağı, tuz, ayçiçek yağı","Egg, white cheese, butter, salt, sunflower oil","بيض، جبنة بيضاء، زبدة، ملح، زيت عبّاد الشمس",["Y","M"],"omelette"],
    ["Kaşarlı Omlet","Kashar Cheese Omelette","أومليت بالقشقوان",435,"Yumurta, kaşar peyniri, tereyağı, tuz, ayçiçek yağı","Egg, kashar cheese, butter, salt, sunflower oil","بيض، قشقوان، زبدة، ملح، زيت عبّاد الشمس",["Y","M"],"omelette"],
    ["Karışık Omlet","Mixed Omelette","أومليت مشكّل",460,"Yumurta, kaşar peyniri, sucuk, sosis, biber, tereyağı, tuz, ayçiçek yağı","Egg, kashar cheese, sucuk, sausage, pepper, butter, salt, sunflower oil","بيض، قشقوان، سجق، نقانق، فلفل، زبدة، ملح، زيت عبّاد الشمس",["Y","M"],"omelette"]]},
   { tr:"Sıcak Servisler", en:"Hot Plates", ar:"أطباق ساخنة", i:[
    ["Kavurmalı Yumurta","Eggs with Roasted Meat","بيض باللحم المحمّر",475,"Yumurta, et kavurma, tereyağı, tuz, ayçiçek yağı","Egg, roasted meat, butter, salt, sunflower oil","بيض، لحم محمّر، زبدة، ملح، زيت عبّاد الشمس",["Y","M"],"egg"],
    ["Sucuklu Yumurta","Eggs with Sucuk","بيض بالسجق",435,"Yumurta, sucuk, tereyağı, tuz, ayçiçek yağı","Egg, sucuk, butter, salt, sunflower oil","بيض، سجق، زبدة، ملح، زيت عبّاد الشمس",["Y","M"],"egg"],
    ["Sahanda Yumurta","Fried Eggs","بيض مقلي",380,"Yumurta, tereyağı, tuz, ayçiçek yağı","Egg, butter, salt, sunflower oil","بيض، زبدة، ملح، زيت عبّاد الشمس",["Y","M"],"egg"],
    ["Sahanda Sucuk","Pan-Fried Sucuk","سجق مقلي",395,"Sucuk, tereyağı, ayçiçek yağı","Sucuk, butter, sunflower oil","سجق، زبدة، زيت عبّاد الشمس",["M"],"egg"],
    ["Menemen","Menemen","منمن",430,"Yumurta, domates, sivri biber, tereyağı, tuz, karabiber, ayçiçek yağı","Egg, tomato, green pepper, butter, salt, black pepper, sunflower oil","بيض، طماطم، فلفل أخضر، زبدة، ملح، فلفل أسود، زيت عبّاد الشمس",["Y","M"],"menemen"],
    ["Kaşarlı Menemen","Menemen with Kashar","منمن بالقشقوان",460,"Yumurta, domates, sivri biber, kaşar peyniri, tereyağı, tuz, karabiber, ayçiçek yağı","Egg, tomato, green pepper, kashar cheese, butter, salt, black pepper, sunflower oil","بيض، طماطم، فلفل أخضر، قشقوان، زبدة، ملح، فلفل أسود، زيت عبّاد الشمس",["Y","M"],"menemen"],
    ["Kuymak","Kuymak (Cheese Fondue)","كويماك (جبنة بالذرة والزبدة)",485,"Mısır unu, tereyağı, kolot / dil peyniri, tuz","Corn flour, butter, kolot cheese, salt","دقيق ذرة، زبدة، جبنة كولوت، ملح",["M"],"menemen"]]},
   { tr:"Tostlar", en:"Toasts", ar:"توست", note:"Domates, salatalık ve parmak patates eşliğinde", noteEn:"Served with tomato, cucumber and french fries", noteAr:"يُقدَّم مع طماطم وخيار وبطاطس مقلية", i:[
    ["Çift Kaşarlı Tost","Double Kashar Toast","توست بقشقوان مضاعف",430,"Tost ekmeği, çift kaşar peyniri, tereyağı; domates, salatalık, parmak patates eşliğinde","Toast bread, double kashar cheese, butter; served with tomato, cucumber and french fries","خبز توست، قشقوان مضاعف، زبدة؛ يُقدَّم مع طماطم وخيار وبطاطس مقلية",["G","M"],"toast"],
    ["Kaşarlı Sucuklu Tost","Kashar & Sucuk Toast","توست بالقشقوان والسجق",450,"Tost ekmeği, kaşar peyniri, sucuk, tereyağı; domates, salatalık, parmak patates eşliğinde","Toast bread, kashar cheese, sucuk, butter; served with tomato, cucumber and french fries","خبز توست، قشقوان، سجق، زبدة؛ يُقدَّم مع طماطم وخيار وبطاطس مقلية",["G","M"],"toast"]]}
  ]},
{ id:"aparatif", tr:"Aparatifler", en:"Starters & Sides", ar:"المقبلات",
  str:"Çorba, çıtırlar, patatesler", sen:"Soup, crispy bites, fries", sar:"شوربة، مقرمشات، بطاطس",
  g:[
   { tr:"Aparatifler", en:"Starters & Sides", ar:"مقبلات", i:[
    ["Günün Çorbası","Soup of the Day","شوربة اليوم",350,"Günlük değişir — servis ekibimize danışınız","Changes daily — please ask our team","تتغيّر يوميًا — اسأل فريق الخدمة",null,"soup"],
    ["Cajun Finger","Cajun Chicken Fingers","أصابع دجاج كاجون",575,"180 g Cajun baharatlı çıtır tavuk parçaları, sos (yumurta, un, süt, Cajun baharatı, tuz, karabiber, soya sosu), elma dilim patates eşliğinde","180 g Cajun-spiced crispy chicken pieces, sauce (egg, flour, milk, Cajun spice, salt, black pepper, soy sauce), served with wedge potatoes","180 غ قطع دجاج مقرمشة بتوابل الكاجون، صوص (بيض، دقيق، حليب، توابل كاجون، ملح، فلفل أسود، صلصة صويا)، تُقدَّم مع بطاطس ودجز",["G","Y","M","S"],"chicken","cajun"],
    ["Big Combo Mix","Big Combo Mix","بيغ كومبو ميكس",605,"2 adet çıtır tavuk (yumurta, un, süt, Cajun baharatı, tuz, karabiber, soya sosu), 2 adet sigara böreği, 2 adet soğan halkası, 2 adet mozzarella stick, 2 adet sosis, elma dilim patates eşliğinde","2 crispy chicken pieces (egg, flour, milk, Cajun spice, salt, black pepper, soy sauce), 2 cheese rolls, 2 onion rings, 2 mozzarella sticks, 2 sausages, served with wedge potatoes","قطعتا دجاج مقرمش (بيض، دقيق، حليب، توابل كاجون، ملح، فلفل أسود، صلصة صويا)، لفافتا جبنة، حلقتا بصل، أصبعا موزاريلا، قطعتا نقانق، تُقدَّم مع بطاطس ودجز",["G","M","Y","S"],"combo","bigcombo"],
    ["Elma Dilim Patates","Wedge Potatoes","بطاطس ودجز",440,"Patates","Potato","بطاطس",[],"fries"],
    ["Parmak Patates","French Fries","بطاطس مقلية",410,"Patates","Potato","بطاطس",[],"fries"],
    ["Sosis Box","Sausage Box","صندوق نقانق",400,"8 adet ızgara sosis, parmak patates eşliğinde","8 grilled sausages, served with french fries","8 قطع نقانق مشوية، تُقدَّم مع بطاطس مقلية",["G"],"combo"],
    ["Soğan Halkası","Onion Rings","حلقات بصل",400,"8 adet soğan halkası (soğan, galeta unu), parmak patates eşliğinde","8 onion rings (onion, breadcrumbs), served with french fries","8 حلقات بصل (بصل، بقسماط)، تُقدَّم مع بطاطس مقلية",["G","Y"],"combo"],
    ["Sigara Böreği","Cheese Rolls (Sigara Böreği)","لفائف الجبنة (سيجارة بوريك)",400,"10 adet sigara böreği (yufka, beyaz peynir, maydanoz, soda, tuz), domates ve salatalık eşliğinde","10 cheese rolls (yufka pastry, white cheese, parsley, sparkling water, salt), served with tomato and cucumber","10 لفائف جبنة (عجينة يوفكا، جبنة بيضاء، بقدونس، مياه غازية، ملح)، تُقدَّم مع طماطم وخيار",["G","M"],"borek"]]}
  ]},
{ id:"salata", tr:"Salatalar & Makarnalar", en:"Salads & Pasta", ar:"السلطات والمعكرونة",
  str:"Taze salatalar, İtalyan makarnalar, noodle", sen:"Fresh salads, Italian pasta, noodles", sar:"سلطات طازجة، معكرونة إيطالية، نودلز",
  g:[
   { tr:"Salatalar", en:"Salads", ar:"سلطات", i:[
    ["Çoban Salata","Shepherd's Salad","سلطة الراعي",475,"Domates, salatalık, soğan, biber, maydanoz, zeytinyağı, limon eşliğinde","Tomato, cucumber, onion, pepper, parsley, olive oil, served with lemon","طماطم، خيار، بصل، فلفل، بقدونس، زيت زيتون، تُقدَّم مع الليمون",[],"salad"],
    ["Mevsim Salata","Seasonal Salad","سلطة الموسم",475,"Karışık yeşillik, domates, salatalık, havuç, zeytinyağı, limon","Mixed greens, tomato, cucumber, carrot, olive oil, lemon","خضار ورقية مشكّلة، طماطم، خيار، جزر، زيت زيتون، ليمون",[],"salad"],
    ["Şişte Köfte Salata","Skewered Meatball Salad","سلطة كفتة بالسيخ",575,"120 g şişte köfte, taze yeşillikler, domates, soğan, zeytinyağı","120 g skewered meatballs, fresh greens, tomato, onion, olive oil","120 غ كفتة بالسيخ، خضار ورقية طازجة، طماطم، بصل، زيت زيتون",["G"],"salad","siste"],
    ["Tavuklu Sezar Salata","Chicken Caesar Salad","سلطة سيزر بالدجاج",560,"160 g tavuk (zeytinyağı, taze kekik, tatlı kırmızı toz biber ile marine edilmiş), göbek salata, kruton ekmek, parmesan, Sezar sos (mayonez, hardal, kapari çiçeği, ançüez)","160 g chicken (marinated in olive oil, fresh thyme and sweet paprika), iceberg lettuce, croutons, parmesan, Caesar dressing (mayonnaise, mustard, capers, anchovy)","160 غ دجاج (متبّل بزيت الزيتون والزعتر الطازج والفلفل الأحمر الحلو)، خس، خبز محمّص، بارميزان، صوص سيزر (مايونيز، خردل، كبر، أنشوجة)",["G","M","Y","B","H"],"salad"],
    ["Cajun Tavuk Salata","Cajun Chicken Salad","سلطة دجاج كاجون",560,"160 g Cajun tavuk (yumurta, süt, un, pane, galeta unu, soya sosu, Cajun baharatı, tuz), taze yeşillikler, ballı hardal sos","160 g Cajun chicken (egg, milk, flour, breading, breadcrumbs, soy sauce, Cajun spice, salt), fresh greens, honey mustard dressing","160 غ دجاج كاجون (بيض، حليب، دقيق، خلطة تغليف، بقسماط، صلصة صويا، توابل كاجون، ملح)، خضار ورقية طازجة، صوص عسل وخردل",["G","M","Y","S","H"],"salad"]]},
   { tr:"Makarnalar", en:"Pasta", ar:"معكرونة", i:[
    ["Spagetti Bolonez","Spaghetti Bolognese","سباغيتي بولونيز",665,"200 g spagetti, dana kıyma, domates sos (domates, salça, tuz, karabiber), fesleğenli pesto sos, parmesan, ayçiçek yağı","200 g spaghetti, minced beef, tomato sauce (tomato, tomato paste, salt, black pepper), basil pesto, parmesan, sunflower oil","200 غ سباغيتي، لحم بقري مفروم، صلصة طماطم (طماطم، معجون طماطم، ملح، فلفل أسود)، بيستو الريحان، بارميزان، زيت عبّاد الشمس",["G","M","N"],"pasta"],
    ["Mac & Cheese","Mac & Cheese","ماك آند تشيز",665,"200 g makarna, cheddar, kaşar, krema, tereyağı, ayçiçek yağı","200 g macaroni, cheddar, kashar cheese, cream, butter, sunflower oil","200 غ معكرونة، شيدر، قشقوان، كريمة، زبدة، زيت عبّاد الشمس",["G","M"],"pasta","mac"],
    ["Penne Arrabbiata","Penne Arrabbiata","بيني أرابياتا",635,"200 g penne, domates sos (domates, salça, tuz, karabiber), fesleğenli pesto sos, acı sos, pul biber, siyah zeytin, zeytinyağı, ayçiçek yağı","200 g penne, tomato sauce (tomato, tomato paste, salt, black pepper), basil pesto, hot sauce, chilli flakes, black olives, olive oil, sunflower oil","200 غ بيني، صلصة طماطم (طماطم، معجون طماطم، ملح، فلفل أسود)، بيستو الريحان، صوص حار، رقائق فلفل حار، زيتون أسود، زيت زيتون، زيت عبّاد الشمس",["G","M","N"],"pasta"],
    ["Fettuccine Alfredo","Fettuccine Alfredo","فيتوتشيني ألفريدو",650,"200 g fettuccine, 80 g tavuk, krema, parmesan, tereyağı, mantar, tuz, karabiber, ayçiçek yağı","200 g fettuccine, 80 g chicken, cream, parmesan, butter, mushroom, salt, black pepper, sunflower oil","200 غ فيتوتشيني، 80 غ دجاج، كريمة، بارميزان، زبدة، فطر، ملح، فلفل أسود، زيت عبّاد الشمس",["G","M","Y"],"pasta"],
    ["Noodle Sebzeli","Vegetable Noodles","نودلز بالخضار",635,"200 g noodle, renkli biber, havuç, kabak, soya filizi, soya sos, susam yağı, susam, ayçiçek yağı","200 g noodles, bell peppers, carrot, courgette, bean sprouts, soy sauce, sesame oil, sesame, sunflower oil","200 غ نودلز، فلفل ملوّن، جزر، كوسا، براعم الصويا، صلصة صويا، زيت سمسم، سمسم، زيت عبّاد الشمس",["G","S","SS","Y"],"pasta","noodle"],
    ["Noodle Tavuklu","Chicken Noodles","نودلز بالدجاج",650,"200 g noodle, 80 g tavuk, renkli biber, havuç, kabak, soya filizi, soya sos, susam yağı, susam, ayçiçek yağı","200 g noodles, 80 g chicken, bell peppers, carrot, courgette, bean sprouts, soy sauce, sesame oil, sesame, sunflower oil","200 غ نودلز، 80 غ دجاج، فلفل ملوّن، جزر، كوسا، براعم الصويا، صلصة صويا، زيت سمسم، سمسم، زيت عبّاد الشمس",["G","S","SS","Y"],"pasta"]]}
  ]},
{ id:"burger", tr:"Burgerler & Wrapler", en:"Burgers & Wraps", ar:"برجر ولفائف",
  str:"Patates ve Sweet Chili sos eşliğinde", sen:"Served with fries and sweet chilli sauce", sar:"تُقدَّم مع البطاطس وصوص سويت تشيلي",
  g:[
   { tr:"Burgerler", en:"Burgers", ar:"برجر", i:[
    ["Kule İstanbul Burger","Kule İstanbul Burger","برجر كوله إسطنبول",820,"180 g burger köftesi, susamlı burger ekmeği, kıvırcık, domates, turşu, mantar sos (mantar, krema, tuz, karabiber), hamburger sosu (mayonez, Sweet Chili sos, az acı, tuz, pul biber), patates ve Sweet Chili sos eşliğinde","180 g beef patty, sesame burger bun, lettuce, tomato, pickles, mushroom sauce (mushroom, cream, salt, black pepper), burger sauce (mayonnaise, sweet chilli sauce, mild chilli, salt, chilli flakes), served with fries and sweet chilli sauce","180 غ لحم برجر، خبز برجر بالسمسم، خس، طماطم، مخلل، صوص فطر (فطر، كريمة، ملح، فلفل أسود)، صوص البرجر (مايونيز، صوص سويت تشيلي، فلفل خفيف، ملح، رقائق فلفل)، تُقدَّم مع البطاطس وصوص سويت تشيلي",["G","M","Y","SS"],"burger","kuleburger"],
    ["Cheese Burger","Cheeseburger","تشيز برجر",815,"180 g burger köftesi, susamlı burger ekmeği, kıvırcık, domates, turşu, cheddar peyniri, hamburger sosu (mayonez, Sweet Chili sos, az acı, tuz, pul biber), patates ve Sweet Chili sos eşliğinde","180 g beef patty, sesame burger bun, lettuce, tomato, pickles, cheddar, burger sauce (mayonnaise, sweet chilli sauce, mild chilli, salt, chilli flakes), served with fries and sweet chilli sauce","180 غ لحم برجر، خبز برجر بالسمسم، خس، طماطم، مخلل، جبنة شيدر، صوص البرجر (مايونيز، صوص سويت تشيلي، فلفل خفيف، ملح، رقائق فلفل)، تُقدَّم مع البطاطس وصوص سويت تشيلي",["G","M","Y","SS"],"burger"],
    ["Jumbo Cheese Burger","Jumbo Cheeseburger","جامبو تشيز برجر",925,"360 g burger köftesi, susamlı burger ekmeği, kıvırcık, domates, turşu, cheddar peyniri, hamburger sosu (mayonez, Sweet Chili sos, az acı, tuz, pul biber), patates ve Sweet Chili sos eşliğinde","360 g beef patty, sesame burger bun, lettuce, tomato, pickles, cheddar, burger sauce (mayonnaise, sweet chilli sauce, mild chilli, salt, chilli flakes), served with fries and sweet chilli sauce","360 غ لحم برجر، خبز برجر بالسمسم، خس، طماطم، مخلل، جبنة شيدر، صوص البرجر (مايونيز، صوص سويت تشيلي، فلفل خفيف، ملح، رقائق فلفل)، تُقدَّم مع البطاطس وصوص سويت تشيلي",["G","M","Y","SS"],"burger","jumbo"],
    ["Tavuk Burger","Chicken Burger","برجر دجاج",745,"180 g özel soslu tavuk (yumurta, un, süt, panko, galeta unu, pane, soya sosu, tuz, karabiber, Cajun baharatı), susamlı burger ekmeği, kıvırcık, domates, turşu, cheddar peyniri, hamburger sosu (mayonez, Sweet Chili sos, az acı, tuz, pul biber), patates ve Sweet Chili sos eşliğinde","180 g chicken in special coating (egg, flour, milk, panko, breadcrumbs, breading, soy sauce, salt, black pepper, Cajun spice), sesame burger bun, lettuce, tomato, pickles, cheddar, burger sauce (mayonnaise, sweet chilli sauce, mild chilli, salt, chilli flakes), served with fries and sweet chilli sauce","180 غ دجاج بخلطة خاصة (بيض، دقيق، حليب، بانكو، بقسماط، خلطة تغليف، صلصة صويا، ملح، فلفل أسود، توابل كاجون)، خبز برجر بالسمسم، خس، طماطم، مخلل، جبنة شيدر، صوص البرجر (مايونيز، صوص سويت تشيلي، فلفل خفيف، ملح، رقائق فلفل)، تُقدَّم مع البطاطس وصوص سويت تشيلي",["G","M","Y","S","SS"],"burger","chickenburger"]]},
   { tr:"Wrapler", en:"Wraps", ar:"لفائف", i:[
    ["Etli Wrap","Beef Wrap","لفافة لحم",810,"170 g jülyen et, lavaş, soğan, renkli biberler, kaşar peyniri, özel sos (soya sosu, Cajun baharatı), patates ve Sweet Chili sos eşliğinde","170 g julienne beef, lavash, onion, bell peppers, kashar cheese, special sauce (soy sauce, Cajun spice), served with fries and sweet chilli sauce","170 غ لحم شرائح، خبز لافاش، بصل، فلفل ملوّن، قشقوان، صوص خاص (صلصة صويا، توابل كاجون)، تُقدَّم مع البطاطس وصوص سويت تشيلي",["G","M","Y","S"],"wrap","wrap"],
    ["Tavuklu Wrap","Chicken Wrap","لفافة دجاج",730,"170 g jülyen tavuk, lavaş, soğan, renkli biberler, kaşar peyniri, özel sos (soya sosu, Cajun baharatı), patates ve Sweet Chili sos eşliğinde","170 g julienne chicken, lavash, onion, bell peppers, kashar cheese, special sauce (soy sauce, Cajun spice), served with fries and sweet chilli sauce","170 غ دجاج شرائح، خبز لافاش، بصل، فلفل ملوّن، قشقوان، صوص خاص (صلصة صويا، توابل كاجون)، تُقدَّم مع البطاطس وصوص سويت تشيلي",["G","M","S"],"wrap"],
    ["Kaşarlı Köfteli Wrap","Meatball & Kashar Wrap","لفافة كفتة بالقشقوان",765,"170 g köfte, lavaş, soğan, renkli biberler, kaşar peyniri, özel sos (soya sosu, Cajun baharatı), patates ve Sweet Chili sos eşliğinde","170 g meatballs, lavash, onion, bell peppers, kashar cheese, special sauce (soy sauce, Cajun spice), served with fries and sweet chilli sauce","170 غ كفتة، خبز لافاش، بصل، فلفل ملوّن، قشقوان، صوص خاص (صلصة صويا، توابل كاجون)، تُقدَّم مع البطاطس وصوص سويت تشيلي",["G","M","S"],"wrap"]]}
  ]},
{ id:"ana", tr:"Ana Yemekler", en:"Main Courses", ar:"الأطباق الرئيسية",
  str:"Köfteler, tavuklar, schnitzel", sen:"Meatballs, chicken, schnitzel", sar:"كفتة، دجاج، شنيتزل",
  g:[
   { tr:"Köfteler", en:"Meatballs", ar:"كفتة", i:[
    ["Izgara Anne Köftesi","Grilled Homestyle Meatballs","كفتة مشوية على طريقة الأم",840,"180 g anne köfte, lavaş, "+SIDE_TR,"180 g homestyle meatballs, lavash, "+SIDE_EN,"180 غ كفتة بيتية، خبز لافاش، "+SIDE_AR,["G"],"meatball"],
    ["Kule İstanbul Kebap","Kule İstanbul Kebab","كباب كوله إسطنبول",870,"180 g köfte, domates sos (domates, salça, tuz, karabiber), süzme yoğurt, közlenmiş biber & domates, patates eşliğinde","180 g meatballs, tomato sauce (tomato, tomato paste, salt, black pepper), strained yoghurt, roasted pepper & tomato, served with fries","180 غ كفتة، صلصة طماطم (طماطم، معجون طماطم، ملح، فلفل أسود)، لبن مصفّى، فلفل وطماطم مشوية، تُقدَّم مع البطاطس",["G","M"],"kebab","kebap"],
    ["Beğendili Köfte","Meatballs on Smoked Aubergine Purée","كفتة مع بيغندي الباذنجان",870,"180 g köfte, patlıcan beğendi (süt, kaşar peyniri, tuz, karabiber), közlenmiş biber & domates, patates eşliğinde","180 g meatballs, smoked aubergine purée (milk, kashar cheese, salt, black pepper), roasted pepper & tomato, served with fries","180 غ كفتة، بيغندي باذنجان (حليب، قشقوان، ملح، فلفل أسود)، فلفل وطماطم مشوية، تُقدَّم مع البطاطس",["G","M"],"meatball"]]},
   { tr:"Tavuklar", en:"Chicken", ar:"دجاج", i:[
    ["Kaymaklı Kule Tavuk","Kule Chicken with Cream Sauce","دجاج كوله بصوص القشطة",840,"180 g tavuk, süzme yoğurt, çıtır yufka, közlenmiş biber & domates, özel kaymak sos (kaymak, tereyağı, barbekü sos), pilav eşliğinde","180 g chicken, strained yoghurt, crispy yufka, roasted pepper & tomato, special cream sauce (clotted cream, butter, BBQ sauce), served with rice","180 غ دجاج، لبن مصفّى، يوفكا مقرمشة، فلفل وطماطم مشوية، صوص قشطة خاص (قشطة، زبدة، صوص باربكيو)، تُقدَّم مع الأرز",["G","M"],"chicken","kaymaklitavuk"],
    ["Köri Soslu Tavuk","Chicken in Curry Sauce","دجاج بصوص الكاري",790,"180 g tavuk, renkli biberler, mantar, köri sos, krema, tuz, karabiber, pilav ve patates eşliğinde","180 g chicken, bell peppers, mushroom, curry sauce, cream, salt, black pepper, served with rice and fries","180 غ دجاج، فلفل ملوّن، فطر، صوص كاري، كريمة، ملح، فلفل أسود، تُقدَّم مع الأرز والبطاطس",["M"],"chicken"],
    ["BBQ Soslu Tavuk","Chicken in BBQ Sauce","دجاج بصوص الباربكيو",790,"180 g tavuk, barbekü sos (barbekü, krema, tuz, karabiber), renkli biberler, mantar, krema, tuz, karabiber, pilav ve patates eşliğinde","180 g chicken, BBQ sauce (BBQ, cream, salt, black pepper), bell peppers, mushroom, cream, salt, black pepper, served with rice and fries","180 غ دجاج، صوص باربكيو (باربكيو، كريمة، ملح، فلفل أسود)، فلفل ملوّن، فطر، كريمة، ملح، فلفل أسود، تُقدَّم مع الأرز والبطاطس",["M"],"chicken"],
    ["Tavuk Sote","Chicken Sauté","دجاج سوتيه",790,"180 g tavuk, renkli biberler, soğan, domates, sarımsak, tuz, karabiber, pilav ve patates eşliğinde","180 g chicken, bell peppers, onion, tomato, garlic, salt, black pepper, served with rice and fries","180 غ دجاج، فلفل ملوّن، بصل، طماطم، ثوم، ملح، فلفل أسود، تُقدَّم مع الأرز والبطاطس",[],"chicken"],
    ["Baharatlı Piliç Izgara","Spiced Grilled Chicken","دجاج مشوي متبّل",805,"180 g tavuk but (taze kekik, kırmızı tatlı toz biber, pul biber ile marine edilmiş), "+SIDE_TR,"180 g chicken thigh (marinated in fresh thyme, sweet paprika and chilli flakes), "+SIDE_EN,"180 غ فخذ دجاج (متبّل بالزعتر الطازج والفلفل الأحمر الحلو ورقائق الفلفل)، "+SIDE_AR,[],"chicken"],
    ["Tavuk Külbastı","Grilled Chicken Külbastı","كولباستي دجاج",820,"180 g marine edilmiş tavuk göğsü (taze kekik, kırmızı tatlı toz biber, pul biber), patlıcan beğendi (süt, kaşar peyniri, tuz, karabiber), közlenmiş biber & domates, patates eşliğinde","180 g marinated chicken breast (fresh thyme, sweet paprika, chilli flakes), smoked aubergine purée (milk, kashar cheese, salt, black pepper), roasted pepper & tomato, served with fries","180 غ صدر دجاج متبّل (زعتر طازج، فلفل أحمر حلو، رقائق فلفل)، بيغندي باذنجان (حليب، قشقوان، ملح، فلفل أسود)، فلفل وطماطم مشوية، تُقدَّم مع البطاطس",["M"],"chicken"]]},
   { tr:"Schnitzel", en:"Schnitzel", ar:"شنيتزل", i:[
    ["Chicken Schnitzel","Chicken Schnitzel","شنيتزل دجاج",775,"180 g panelenmiş tavuk (pane, galeta unu), schnitzel sosu (galeta unu, pane, yumurta, un, soya sosu, tuz, Cajun baharatı), mini salata, patates eşliğinde","180 g breaded chicken (breading, breadcrumbs), schnitzel coating (breadcrumbs, breading, egg, flour, soy sauce, salt, Cajun spice), side salad, served with fries","180 غ دجاج مغلّف (خلطة تغليف، بقسماط)، خلطة الشنيتزل (بقسماط، خلطة تغليف، بيض، دقيق، صلصة صويا، ملح، توابل كاجون)، سلطة صغيرة، تُقدَّم مع البطاطس",["G","Y","S"],"chicken"],
    ["Mantar Soslu Schnitzel","Schnitzel with Mushroom Sauce","شنيتزل بصوص الفطر",795,"180 g panelenmiş tavuk (pane, galeta unu), schnitzel sosu (galeta unu, pane, yumurta, un, soya sosu, tuz, Cajun baharatı), mantar sos, mini salata, patates eşliğinde","180 g breaded chicken (breading, breadcrumbs), schnitzel coating (breadcrumbs, breading, egg, flour, soy sauce, salt, Cajun spice), mushroom sauce, side salad, served with fries","180 غ دجاج مغلّف (خلطة تغليف، بقسماط)، خلطة الشنيتزل (بقسماط، خلطة تغليف، بيض، دقيق، صلصة صويا، ملح، توابل كاجون)، صوص فطر، سلطة صغيرة، تُقدَّم مع البطاطس",["G","Y","M","S"],"chicken"],
    ["Cheddar Soslu Schnitzel","Schnitzel with Cheddar Sauce","شنيتزل بصوص الشيدر",795,"180 g panelenmiş tavuk (pane, galeta unu), schnitzel sosu (galeta unu, pane, yumurta, un, soya sosu, tuz, Cajun baharatı), cheddar sos (cheddar, krema), mini salata, patates eşliğinde","180 g breaded chicken (breading, breadcrumbs), schnitzel coating (breadcrumbs, breading, egg, flour, soy sauce, salt, Cajun spice), cheddar sauce (cheddar, cream), side salad, served with fries","180 غ دجاج مغلّف (خلطة تغليف، بقسماط)، خلطة الشنيتزل (بقسماط، خلطة تغليف، بيض، دقيق، صلصة صويا، ملح، توابل كاجون)، صوص شيدر (شيدر، كريمة)، سلطة صغيرة، تُقدَّم مع البطاطس",["G","Y","M","S"],"chicken"]]},
   { tr:"Tavuk Lokumları", en:"Chicken Bites", ar:"قطع دجاج", i:[
    ["Cafe de Paris Soslu Tavuk Lokum","Chicken Bites in Café de Paris Sauce","قطع دجاج بصوص كافيه دو باري",750,"180 g tavuk parçaları, Cafe de Paris sos, krema","180 g chicken pieces, Café de Paris sauce, cream","180 غ قطع دجاج، صوص كافيه دو باري، كريمة",["M","H"],"chicken"],
    ["Cheddar Soslu Tavuk Lokum","Chicken Bites in Cheddar Sauce","قطع دجاج بصوص الشيدر",750,"180 g tavuk parçaları, cheddar sos, krema","180 g chicken pieces, cheddar sauce, cream","180 غ قطع دجاج، صوص شيدر، كريمة",["M"],"chicken"],
    ["Sweet Chili Kule Topları","Sweet Chilli Kule Balls","كرات كوله بالسويت تشيلي",750,"180 g tavuk parçaları, Sweet Chili sos, maydanoz","180 g chicken pieces, sweet chilli sauce, parsley","180 غ قطع دجاج، صوص سويت تشيلي، بقدونس",["G","Y"],"chicken","sweetchili"]]}
  ]},
{ id:"et", tr:"Kırmızı Etler", en:"Red Meat", ar:"اللحوم الحمراء",
  str:"Izgara, pirzola, bonfile, fajita", sen:"Grills, chops, tenderloin, fajita", sar:"مشاوي، ريش، فيليه، فاهيتا",
  g:[
   { tr:"Izgaralar", en:"Grills", ar:"مشاوي", note:"Közlenmiş biber & domates, pilav ve patates eşliğinde", noteEn:"Served with roasted pepper & tomato, rice and fries", noteAr:"تُقدَّم مع فلفل وطماطم مشوية، أرز وبطاطس", i:[
    ["Karışık Izgara","Mixed Grill","مشاوي مشكّلة",2500,"1 kuzu pirzola, 200 g antrikot, 2 köfte, 2 tavuk kanat, 1 tavuk bonfile (zeytinyağı, kekik ve pul biber ile marine edilmiş), "+SIDE_TR,"1 lamb chop, 200 g ribeye, 2 meatballs, 2 chicken wings, 1 chicken fillet (marinated in olive oil, thyme and chilli flakes), "+SIDE_EN,"ريشة غنم، 200 غ أنتريكوت، كفتتان، جناحا دجاج، فيليه دجاج (متبّل بزيت الزيتون والزعتر ورقائق الفلفل)، "+SIDE_AR,["G"],"steak","karisik"],
    ["Kuzu Pirzola (3 Parça)","Lamb Chops (3 pcs)","ريش غنم (3 قطع)",1320,"3 parça kuzu pirzola (zeytinyağı, kekik ve pul biber ile marine edilmiş), "+SIDE_TR,"3 lamb chops (marinated in olive oil, thyme and chilli flakes), "+SIDE_EN,"3 ريش غنم (متبّل بزيت الزيتون والزعتر ورقائق الفلفل)، "+SIDE_AR,[],"steak","pirzola"],
    ["Kuzu Pirzola (4 Parça)","Lamb Chops (4 pcs)","ريش غنم (4 قطع)",1570,"4 parça kuzu pirzola (zeytinyağı, kekik ve pul biber ile marine edilmiş), "+SIDE_TR,"4 lamb chops (marinated in olive oil, thyme and chilli flakes), "+SIDE_EN,"4 ريش غنم (متبّل بزيت الزيتون والزعتر ورقائق الفلفل)، "+SIDE_AR,[],"steak","pirzola"],
    ["Antrikot","Ribeye Steak","أنتريكوت",1320,"200 g antrikot (zeytinyağı, kekik ve pul biber ile marine edilmiş), "+SIDE_TR,"200 g ribeye (marinated in olive oil, thyme and chilli flakes), "+SIDE_EN,"200 غ أنتريكوت (متبّل بزيت الزيتون والزعتر ورقائق الفلفل)، "+SIDE_AR,[],"steak","antrikot"],
    ["Bonfile","Tenderloin Steak","بونفيليه (فيليه بقري)",1450,"200 g bonfile (zeytinyağı, kekik ve pul biber ile marine edilmiş), "+SIDE_TR,"200 g tenderloin (marinated in olive oil, thyme and chilli flakes), "+SIDE_EN,"200 غ فيليه (متبّل بزيت الزيتون والزعتر ورقائق الفلفل)، "+SIDE_AR,[],"steak","bonfile"],
    ["Mantar Soslu Bonfile","Tenderloin with Mushroom Sauce","فيليه بصوص الفطر",1500,"200 g bonfile (zeytinyağı, kekik ve pul biber ile marine edilmiş), mantar sos (krema, Cafe de Paris sos), "+SIDE_TR,"200 g tenderloin (marinated in olive oil, thyme and chilli flakes), mushroom sauce (cream, Café de Paris sauce), "+SIDE_EN,"200 غ فيليه (متبّل بزيت الزيتون والزعتر ورقائق الفلفل)، صوص فطر (كريمة، صوص كافيه دو باري)، "+SIDE_AR,["M"],"steak","mantarbonfile"],
    ["Cafe de Paris Soslu Bonfile","Tenderloin with Café de Paris Sauce","فيليه بصوص كافيه دو باري",1500,"200 g bonfile, Cafe de Paris sos, "+SIDE_TR,"200 g tenderloin, Café de Paris sauce, "+SIDE_EN,"200 غ فيليه، صوص كافيه دو باري، "+SIDE_AR,["M","H"],"steak","cafedeparis"]]},
   { tr:"Fajitalar", en:"Fajitas", ar:"فاهيتا", note:"Kekik, zeytinyağı ve pul biber ile marine edilir; renkli biberler, soğan, Sweet Chili sos, süzme yoğurt, özel Kule sos ve lavaş eşliğinde", noteEn:"Marinated in thyme, olive oil and chilli flakes; served with bell peppers, onion, sweet chilli sauce, strained yoghurt, special Kule sauce and lavash", noteAr:"متبّلة بالزعتر وزيت الزيتون ورقائق الفلفل؛ تُقدَّم مع فلفل ملوّن، بصل، صوص سويت تشيلي، لبن مصفّى، صوص كوله الخاص وخبز لافاش", i:[
    ["Fajita","Beef Fajita","فاهيتا لحم",1470,"200 g kekik, zeytinyağı ve pul biber ile marine edilmiş et, renkli biberler, soğan, Sweet Chili sos, süzme yoğurt, özel Kule sos (Sweet Chili sos, mayonez, acı sos, pul biber, tuz), lavaş","200 g beef marinated in thyme, olive oil and chilli flakes, bell peppers, onion, sweet chilli sauce, strained yoghurt, special Kule sauce (sweet chilli sauce, mayonnaise, hot sauce, chilli flakes, salt), lavash","200 غ لحم متبّل بالزعتر وزيت الزيتون ورقائق الفلفل، فلفل ملوّن، بصل، صوص سويت تشيلي، لبن مصفّى، صوص كوله الخاص (صوص سويت تشيلي، مايونيز، صوص حار، رقائق فلفل، ملح)، لافاش",["G","M","Y"],"fajita","fajita"],
    ["Combo Fajita","Combo Fajita","فاهيتا كومبو",1520,"150 g et ve 150 g tavuk (kekik, zeytinyağı ve pul biber ile marine edilmiş), renkli biberler, soğan, Sweet Chili sos, süzme yoğurt, özel Kule sos (Sweet Chili sos, mayonez, acı sos, pul biber, tuz), lavaş","150 g beef and 150 g chicken (marinated in thyme, olive oil and chilli flakes), bell peppers, onion, sweet chilli sauce, strained yoghurt, special Kule sauce (sweet chilli sauce, mayonnaise, hot sauce, chilli flakes, salt), lavash","150 غ لحم و150 غ دجاج (متبّل بالزعتر وزيت الزيتون ورقائق الفلفل)، فلفل ملوّن، بصل، صوص سويت تشيلي، لبن مصفّى، صوص كوله الخاص (صوص سويت تشيلي، مايونيز، صوص حار، رقائق فلفل، ملح)، لافاش",["G","M","Y"],"fajita","combofajita"]]}
  ]},
{ id:"tatli", tr:"Tatlılar", en:"Desserts", ar:"الحلويات",
  str:"Cheesecake, pastalar, Cedric Grolet, dondurma", sen:"Cheesecakes, cakes, Cedric Grolet, ice cream", sar:"تشيز كيك، كيك، سيدريك غروليه، آيس كريم",
  g:[
   { tr:"Cheesecake & Pastalar", en:"Cheesecakes & Cakes", ar:"تشيز كيك وكيك", i:[
    ["Frambuazlı Cheesecake","Raspberry Cheesecake","تشيز كيك بالتوت الأحمر",375,"Bisküvi tabanı, krem peynir, krema, frambuaz sos","Biscuit base, cream cheese, cream, raspberry sauce","قاعدة بسكويت، جبنة كريمية، كريمة، صوص توت أحمر",["G","M","Y"],"cake","frambuaz"],
    ["Limonlu Cheesecake","Lemon Cheesecake","تشيز كيك بالليمون",375,"Bisküvi tabanı, krem peynir, krema, limon","Biscuit base, cream cheese, cream, lemon","قاعدة بسكويت، جبنة كريمية، كريمة، ليمون",["G","M","Y"],"cake","limon"],
    ["Süt Reçelli Cheesecake","Dulce de Leche Cheesecake","تشيز كيك بمربى الحليب",385,"Bisküvi tabanı, krem peynir, süt reçeli, fındık","Biscuit base, cream cheese, dulce de leche, hazelnut","قاعدة بسكويت، جبنة كريمية، مربى الحليب، بندق",["G","M","Y","N"],"cake","sutrecel"],
    ["Çikolatalı Vişne Rüyası","Chocolate Sour Cherry Dream","حلم الكرز بالشوكولاتة",395,"Kakaolu kek, çikolata krema, vişne","Cocoa sponge, chocolate cream, sour cherry","كيك كاكاو، كريمة شوكولاتة، كرز حامض",["G","M","Y","S"],"cake","visne"],
    ["Yaban Mersinli Linzer","Blueberry Linzer","لينزر بالتوت الأزرق",385,"Linzer hamuru, yaban mersini dolgusu, krema","Linzer pastry, blueberry filling, cream","عجينة لينزر، حشوة توت أزرق، كريمة",["G","M","Y","N"],"cake","linzer"],
    ["Lotus Cup","Lotus Cup","لوتس كب",385,"Lotus bisküvi, krema, karamelize bisküvi kreması","Lotus biscuit, cream, caramelised biscuit spread","بسكويت لوتس، كريمة، كريمة بسكويت مكرمل",["G","M","S"],"cake","lotus"],
    ["Snickers Pasta","Snickers Cake","كيك سنيكرز",385,"Kakaolu kek, karamel, yer fıstığı, çikolata","Cocoa sponge, caramel, peanuts, chocolate","كيك كاكاو، كراميل، فول سوداني، شوكولاتة",["G","M","Y","F","S"],"cake","snickers"],
    ["Mozaik Pasta","Mosaic Cake","كيك موزاييك",375,"Bisküvi, kakao, tereyağı, süt","Biscuit, cocoa, butter, milk","بسكويت، كاكاو، زبدة، حليب",["G","M","S"],"cake","mozaik"],
    ["Tiramisu Pasta","Tiramisu","تيراميسو",375,"Kedidili bisküvi, mascarpone, kahve, kakao, yumurta","Ladyfingers, mascarpone, coffee, cocoa, egg","بسكويت أصابع، ماسكاربوني، قهوة، كاكاو، بيض",["G","M","Y"],"cake","tiramisu"],
    ["Kule Ballım","Kule Honey Cake","كيك العسل كوله",385,"Kat kat ballı kek, özel krema","Layered honey cake, special cream","طبقات كيك بالعسل، كريمة خاصة",["G","M","Y"],"cake","ballim"],
    ["Sufle","Chocolate Soufflé","سوفليه شوكولاتة",375,"Çikolata, yumurta, un, tereyağı, şeker · sıcak servis edilir","Chocolate, egg, flour, butter, sugar · served warm","شوكولاتة، بيض، دقيق، زبدة، سكر · يُقدَّم ساخنًا",["G","M","Y","S"],"cake","sufle"]]},
   { tr:"Cedric Grolet Tatlıları", en:"Cedric Grolet Desserts", ar:"حلويات سيدريك غروليه", note:"Cedric Grolet'in özel tarifinden ilham alınarak hazırlanır", noteEn:"Inspired by Cedric Grolet's signature recipes", noteAr:"مستوحاة من وصفات سيدريك غروليه الخاصة", i:[
    ["Cedric Fıstık","Cedric Pistachio","سيدريك فستق",395,"Antep fıstığı kreması, beyaz çikolata, yumuşak dokulu iç","Pistachio cream, white chocolate, soft filling","كريمة فستق حلبي، شوكولاتة بيضاء، حشوة طرية",["M","N","Y","S"],"cake","cedricfistik"],
    ["Cedric Limon","Cedric Lemon","سيدريك ليمون",395,"Limon kreması, beyaz çikolata, yumuşak dokulu iç","Lemon cream, white chocolate, soft filling","كريمة ليمون، شوكولاتة بيضاء، حشوة طرية",["M","Y","S"],"cake","cedriclimon"],
    ["Cedric Mango","Cedric Mango","سيدريك مانجو",395,"Mango kreması, beyaz çikolata, yumuşak dokulu iç","Mango cream, white chocolate, soft filling","كريمة مانجو، شوكولاتة بيضاء، حشوة طرية",["M","Y","S"],"cake","cedricmango"],
    ["Cedric Hindistan Cevizi","Cedric Coconut","سيدريك جوز الهند",395,"Hindistan cevizi kreması, çikolata, yumuşak dokulu iç","Coconut cream, chocolate, soft filling","كريمة جوز الهند، شوكولاتة، حشوة طرية",["M","Y","S"],"cake","cedrichindistan"]]},
   { tr:"Meyve & Dondurma", en:"Fruit & Ice Cream", ar:"فواكه وآيس كريم", i:[
    ["Meyve Tabağı","Fruit Platter","طبق فواكه",590,"Mevsim meyveleri","Seasonal fruits","فواكه الموسم",[],"fruit"],
    ["Dondurma (1 Top)","Ice Cream (1 scoop)","آيس كريم (كرة واحدة)",180,"Süt, krema, şeker","Milk, cream, sugar","حليب، كريمة، سكر",["M"],"icecream"],
    ["Dondurma (3 Top)","Ice Cream (3 scoops)","آيس كريم (3 كرات)",480,"Süt, krema, şeker","Milk, cream, sugar","حليب، كريمة، سكر",["M"],"icecream"]]}
  ]},
{ id:"icecek", tr:"İçecekler", en:"Drinks", ar:"المشروبات",
  str:"Kahveler, çaylar, soğuk içecekler, milkshake, frozen, mojito", sen:"Coffee, tea, soft drinks, milkshakes, frozen, mojito", sar:"قهوة، شاي، مشروبات باردة، ميلك شيك، فروزن، موهيتو",
  g:[
   { tr:"Sıcak Kahveler", en:"Hot Coffee", ar:"قهوة ساخنة", i:[
    ["Espresso","Espresso","إسبريسو",240,"Çekirdek kahve","Espresso coffee","قهوة إسبريسو",[],"coffee"],
    ["Duble Espresso","Double Espresso","إسبريسو مضاعف",295,"Çift shot espresso","Double shot espresso","جرعتان إسبريسو",[],"coffee"],
    ["Espresso Macchiato","Espresso Macchiato","إسبريسو ماكياتو",270,"Espresso, az süt köpüğü","Espresso, a touch of milk foam","إسبريسو، لمسة رغوة حليب",["M"],"coffee"],
    ["Americano","Americano","أمريكانو",265,"Espresso, sıcak su","Espresso, hot water","إسبريسو، ماء ساخن",[],"coffee"],
    ["Filtre Kahve","Filter Coffee","قهوة فلتر",265,"Filtre kahve, su","Filter coffee, water","قهوة فلتر، ماء",[],"coffee"],
    ["Cafe Latte","Caffè Latte","كافيه لاتيه",265,"Espresso, süt, süt köpüğü","Espresso, milk, milk foam","إسبريسو، حليب، رغوة حليب",["M"],"coffee"],
    ["Cappuccino","Cappuccino","كابتشينو",265,"Espresso, süt, bol süt köpüğü","Espresso, milk, thick milk foam","إسبريسو، حليب، رغوة حليب كثيفة",["M"],"coffee"],
    ["Hot Chocolate","Hot Chocolate","شوكولاتة ساخنة",285,"Süt, çikolata","Milk, chocolate","حليب، شوكولاتة",["M","S"],"mug"],
    ["White Hot Chocolate","White Hot Chocolate","شوكولاتة بيضاء ساخنة",285,"Süt, beyaz çikolata","Milk, white chocolate","حليب، شوكولاتة بيضاء",["M","S"],"mug"],
    ["Salep","Salep","سحلب",285,"Süt, salep, tarçın","Milk, salep, cinnamon","حليب، سحلب، قرفة",["M"],"mug"],
    ["Caramel Latte","Caramel Latte","لاتيه كراميل",290,"Espresso, süt, karamel şurubu","Espresso, milk, caramel syrup","إسبريسو، حليب، شراب كراميل",["M"],"coffee"],
    ["Vanilya Latte","Vanilla Latte","لاتيه فانيليا",290,"Espresso, süt, vanilya şurubu","Espresso, milk, vanilla syrup","إسبريسو، حليب، شراب فانيليا",["M"],"coffee"],
    ["Tuzlu Karamel Latte","Salted Caramel Latte","لاتيه كراميل مملّح",290,"Espresso, süt, tuzlu karamel şurubu","Espresso, milk, salted caramel syrup","إسبريسو، حليب، شراب كراميل مملّح",["M"],"coffee"],
    ["Chocolate Cookie Latte","Chocolate Cookie Latte","لاتيه كوكيز شوكولاتة",290,"Espresso, süt, çikolatalı kurabiye şurubu","Espresso, milk, chocolate cookie syrup","إسبريسو، حليب، شراب كوكيز شوكولاتة",["M"],"coffee"],
    ["Cinnamon Latte","Cinnamon Latte","لاتيه قرفة",290,"Espresso, süt, tarçın şurubu","Espresso, milk, cinnamon syrup","إسبريسو، حليب، شراب قرفة",["M"],"coffee"],
    ["Caramello Latte","Caramello Latte","لاتيه كاراميلو",290,"Espresso, süt, karamel, çikolata","Espresso, milk, caramel, chocolate","إسبريسو، حليب، كراميل، شوكولاتة",["M","S"],"coffee"],
    ["Chai Tea Latte","Chai Tea Latte","تشاي تي لاتيه",290,"Baharatlı çay konsantresi, süt","Spiced tea concentrate, milk","شاي بالتوابل، حليب",["M"],"coffee"],
    ["Kule Chai Tea Latte","Kule Chai Tea Latte","كوله تشاي تي لاتيه",290,"Baharatlı çay konsantresi, süt, özel Kule karışımı","Spiced tea concentrate, milk, special Kule blend","شاي بالتوابل، حليب، خلطة كوله الخاصة",["M"],"coffee"],
    ["Kule Mocha","Kule Mocha","كوله موكا",290,"Espresso, süt, çikolata sosu, özel Kule karışımı","Espresso, milk, chocolate sauce, special Kule blend","إسبريسو، حليب، صوص شوكولاتة، خلطة كوله الخاصة",["M","S"],"coffee"],
    ["Mocha Caramel Latte","Mocha Caramel Latte","موكا كراميل لاتيه",290,"Espresso, süt, çikolata sosu, karamel","Espresso, milk, chocolate sauce, caramel","إسبريسو، حليب، صوص شوكولاتة، كراميل",["M","S"],"coffee"],
    ["White Mocha","White Mocha","وايت موكا",290,"Espresso, süt, beyaz çikolata","Espresso, milk, white chocolate","إسبريسو، حليب، شوكولاتة بيضاء",["M","S"],"coffee"]]},
   { tr:"Soğuk Kahveler", en:"Iced Coffee", ar:"قهوة مثلجة", i:[
    ["Iced Latte","Iced Latte","آيس لاتيه",335,"Espresso, soğuk süt, buz","Espresso, cold milk, ice","إسبريسو، حليب بارد، ثلج",["M"],"icedcoffee"],
    ["Iced Americano","Iced Americano","آيس أمريكانو",335,"Espresso, soğuk su, buz","Espresso, cold water, ice","إسبريسو، ماء بارد، ثلج",[],"icedcoffee"],
    ["Iced Caramel Latte","Iced Caramel Latte","آيس كراميل لاتيه",335,"Espresso, soğuk süt, karamel, buz","Espresso, cold milk, caramel, ice","إسبريسو، حليب بارد، كراميل، ثلج",["M"],"icedcoffee"],
    ["Iced Kule Coffee Caramel","Iced Kule Coffee Caramel","آيس كوله كوفي كراميل",335,"Espresso, soğuk süt, karamel, özel Kule karışımı, buz","Espresso, cold milk, caramel, special Kule blend, ice","إسبريسو، حليب بارد، كراميل، خلطة كوله الخاصة، ثلج",["M"],"icedcoffee"],
    ["Iced Mocha","Iced Mocha","آيس موكا",335,"Espresso, soğuk süt, çikolata sosu, buz","Espresso, cold milk, chocolate sauce, ice","إسبريسو، حليب بارد، صوص شوكولاتة، ثلج",["M","S"],"icedcoffee"],
    ["Iced White Mocha","Iced White Mocha","آيس وايت موكا",335,"Espresso, soğuk süt, beyaz çikolata, buz","Espresso, cold milk, white chocolate, ice","إسبريسو، حليب بارد، شوكولاتة بيضاء، ثلج",["M","S"],"icedcoffee"],
    ["Iced Vanilya Latte","Iced Vanilla Latte","آيس فانيليا لاتيه",335,"Espresso, soğuk süt, vanilya şurubu, buz","Espresso, cold milk, vanilla syrup, ice","إسبريسو، حليب بارد، شراب فانيليا، ثلج",["M"],"icedcoffee"],
    ["Iced Tuzlu Karamel Latte","Iced Salted Caramel Latte","آيس كراميل مملّح لاتيه",335,"Espresso, soğuk süt, tuzlu karamel, buz","Espresso, cold milk, salted caramel, ice","إسبريسو، حليب بارد، كراميل مملّح، ثلج",["M"],"icedcoffee"],
    ["Iced Chai Tea Latte","Iced Chai Tea Latte","آيس تشاي تي لاتيه",335,"Baharatlı çay konsantresi, soğuk süt, buz","Spiced tea concentrate, cold milk, ice","شاي بالتوابل، حليب بارد، ثلج",["M"],"icedcoffee"],
    ["Iced Kule Chai Tea Latte","Iced Kule Chai Tea Latte","آيس كوله تشاي تي لاتيه",335,"Baharatlı çay konsantresi, soğuk süt, özel Kule karışımı, buz","Spiced tea concentrate, cold milk, special Kule blend, ice","شاي بالتوابل، حليب بارد، خلطة كوله الخاصة، ثلج",["M"],"icedcoffee"]]},
   { tr:"Çay & Türk Kahvesi", en:"Tea & Turkish Coffee", ar:"شاي وقهوة تركية", i:[
    ["Çay","Turkish Tea","شاي",55,"Demlenmiş siyah çay","Brewed black tea","شاي أسود",[],"tea"],
    ["Yeşil Çay","Green Tea","شاي أخضر",260,"Yeşil çay yaprağı","Green tea leaves","أوراق شاي أخضر",[],"tea"],
    ["Ihlamur","Linden Tea","زيزفون",260,"Ihlamur çiçeği","Linden blossom","زهر الزيزفون",[],"tea"],
    ["Ada Çayı","Sage Tea","شاي المريمية",260,"Adaçayı yaprağı","Sage leaves","أوراق المريمية",[],"tea"],
    ["Kuşburnu","Rosehip Tea","شاي ورد بري",260,"Kuşburnu","Rosehip","ورد بري",[],"tea"],
    ["Nane Limon","Mint & Lemon Tea","نعناع وليمون",260,"Taze nane, limon","Fresh mint, lemon","نعناع طازج، ليمون",[],"tea"],
    ["Limon Çayı","Lemon Tea","شاي بالليمون",260,"Limon aroması, sıcak su","Lemon infusion, hot water","نقيع ليمون، ماء ساخن",[],"tea"],
    ["Türk Kahvesi","Turkish Coffee","قهوة تركية",195,"Türk kahvesi, su (şeker tercihe göre)","Turkish coffee, water (sugar to taste)","قهوة تركية، ماء (السكر حسب الرغبة)",[],"turkishcoffee"],
    ["Double Türk Kahvesi","Double Turkish Coffee","قهوة تركية مضاعفة",300,"Çift porsiyon Türk kahvesi, su","Double portion Turkish coffee, water","قهوة تركية مضاعفة، ماء",[],"turkishcoffee"]]},
   { tr:"Soğuk & Gazlı İçecekler", en:"Soft Drinks", ar:"مشروبات باردة وغازية", i:[
    ["Coca Cola","Coca-Cola","كوكاكولا",120,"Gazlı içecek","Carbonated soft drink","مشروب غازي",[],"bottle"],
    ["Cola Zero","Coca-Cola Zero","كوكاكولا زيرو",120,"Şekersiz gazlı içecek","Sugar-free carbonated soft drink","مشروب غازي بدون سكر",[],"bottle"],
    ["Sprite","Sprite","سبرايت",120,"Limon aromalı gazlı içecek","Lemon-lime soft drink","مشروب غازي بنكهة الليمون",[],"bottle"],
    ["Fanta","Fanta","فانتا",120,"Portakal aromalı gazlı içecek","Orange soft drink","مشروب غازي بنكهة البرتقال",[],"bottle"],
    ["Cappy Karışık","Cappy Mixed Fruit","كابي فواكه مشكّلة",120,"Karışık meyve suyu","Mixed fruit juice","عصير فواكه مشكّلة",[],"juice"],
    ["Cappy Vişne","Cappy Sour Cherry","كابي كرز",120,"Vişne suyu","Sour cherry juice","عصير كرز",[],"juice"],
    ["Cappy Şeftali","Cappy Peach","كابي خوخ",120,"Şeftali suyu","Peach juice","عصير خوخ",[],"juice"],
    ["Fuse Tea Şeftali","Fuse Tea Peach","فيوز تي خوخ",120,"Şeftali aromalı soğuk çay","Peach iced tea","شاي مثلج بالخوخ",[],"bottle"],
    ["Fuse Tea Limon","Fuse Tea Lemon","فيوز تي ليمون",120,"Limon aromalı soğuk çay","Lemon iced tea","شاي مثلج بالليمون",[],"bottle"],
    ["Ayran","Ayran","عيران",110,"Yoğurt, su, tuz","Yoghurt, water, salt","لبن، ماء، ملح",["M"],"ayran"],
    ["Sade Soda","Sparkling Water","مياه غازية",90,"Maden suyu","Sparkling mineral water","مياه معدنية غازية",[],"bottle"],
    ["Meyveli Soda","Flavoured Soda","صودا بنكهة الفواكه",110,"Meyve aromalı maden suyu","Fruit-flavoured mineral water","مياه معدنية بنكهة الفواكه",[],"bottle"],
    ["Limonata","Lemonade","ليموناضة",155,"Limon, su, şeker, nane","Lemon, water, sugar, mint","ليمون، ماء، سكر، نعناع",[],"juice"],
    ["Portakal Suyu","Orange Juice","عصير برتقال",205,"Taze sıkılmış portakal","Freshly squeezed orange","برتقال طازج معصور",[],"juice"],
    ["Churchill","Churchill","تشرشل",120,"Maden suyu, limon, tuz","Sparkling water, lemon, salt","مياه غازية، ليمون، ملح",[],"bottle"],
    ["Su","Water","ماء",60,"Doğal kaynak suyu","Natural spring water","مياه طبيعية",[],"water"],
    ["Karadut","Black Mulberry Juice","عصير توت أسود",155,"Karadut suyu","Black mulberry juice","عصير توت أسود",[],"juice"]]},
   { tr:"Milkshake", en:"Milkshakes", ar:"ميلك شيك", i:[
    ["Çilekli Milkshake","Strawberry Milkshake","ميلك شيك فراولة",350,"Süt, dondurma, çilek","Milk, ice cream, strawberry","حليب، آيس كريم، فراولة",["M"],"shake","msred"],
    ["Çikolatalı Milkshake","Chocolate Milkshake","ميلك شيك شوكولاتة",350,"Süt, dondurma, çikolata sosu","Milk, ice cream, chocolate sauce","حليب، آيس كريم، صوص شوكولاتة",["M","S"],"shake","mschoc"],
    ["Vanilyalı Milkshake","Vanilla Milkshake","ميلك شيك فانيليا",350,"Süt, dondurma, vanilya","Milk, ice cream, vanilla","حليب، آيس كريم، فانيليا",["M"],"shake"],
    ["Oreo Milkshake","Oreo Milkshake","ميلك شيك أوريو",350,"Süt, dondurma, Oreo bisküvi","Milk, ice cream, Oreo biscuit","حليب، آيس كريم، بسكويت أوريو",["M","G","S"],"shake"],
    ["Muzlu Milkshake","Banana Milkshake","ميلك شيك موز",350,"Süt, dondurma, muz","Milk, ice cream, banana","حليب، آيس كريم، موز",["M"],"shake"]]},
   { tr:"Frozen", en:"Frozen", ar:"فروزن", note:"Buzla çekilmiş meyve — süt içermez", noteEn:"Blended with ice — dairy-free", noteAr:"مخفوق مع الثلج — بدون حليب", i:[
    ["Kavunlu Frozen","Melon Frozen","فروزن شمام",370,"Kavun, buz, şeker","Melon, ice, sugar","شمام، ثلج، سكر",[],"shake","frozengreen"],
    ["Karpuz Frozen","Watermelon Frozen","فروزن بطيخ",370,"Karpuz, buz, şeker","Watermelon, ice, sugar","بطيخ، ثلج، سكر",[],"shake"],
    ["Elma Frozen","Apple Frozen","فروزن تفاح",370,"Elma, buz, şeker","Apple, ice, sugar","تفاح، ثلج، سكر",[],"shake"],
    ["Çilek Frozen","Strawberry Frozen","فروزن فراولة",370,"Çilek, buz, şeker","Strawberry, ice, sugar","فراولة، ثلج، سكر",[],"shake"],
    ["Böğürtlen Frozen","Blackberry Frozen","فروزن توت العليق",370,"Böğürtlen, buz, şeker","Blackberry, ice, sugar","توت العليق، ثلج، سكر",[],"shake"],
    ["Kivi Frozen","Kiwi Frozen","فروزن كيوي",370,"Kivi, buz, şeker","Kiwi, ice, sugar","كيوي، ثلج، سكر",[],"shake"],
    ["Yaban Mersini Frozen","Blueberry Frozen","فروزن توت أزرق",370,"Yaban mersini, buz, şeker","Blueberry, ice, sugar","توت أزرق، ثلج، سكر",[],"shake"],
    ["Karadut Frozen","Black Mulberry Frozen","فروزن توت أسود",370,"Karadut, buz, şeker","Black mulberry, ice, sugar","توت أسود، ثلج، سكر",[],"shake"],
    ["Frambuazlı Frozen","Raspberry Frozen","فروزن توت أحمر",370,"Frambuaz, buz, şeker","Raspberry, ice, sugar","توت أحمر، ثلج، سكر",[],"shake"],
    ["Orman Meyveli Frozen","Forest Fruits Frozen","فروزن فواكه الغابة",370,"Orman meyveleri, buz, şeker","Forest fruits, ice, sugar","فواكه الغابة، ثلج، سكر",[],"shake"],
    ["Muz Frozen","Banana Frozen","فروزن موز",370,"Muz, buz, şeker","Banana, ice, sugar","موز، ثلج، سكر",[],"shake"]]},
   { tr:"Mojito", en:"Mojito", ar:"موهيتو", note:"Alkolsüz", noteEn:"Non-alcoholic", noteAr:"بدون كحول", i:[
    ["Klasik Mojito","Classic Mojito","موهيتو كلاسيك",360,"Nane, lime, şeker, soda, buz","Mint, lime, sugar, soda, ice","نعناع، ليمون أخضر، سكر، صودا، ثلج",[],"cocktail"],
    ["Çilekli Mojito","Strawberry Mojito","موهيتو فراولة",360,"Çilek, nane, lime, şeker, soda, buz","Strawberry, mint, lime, sugar, soda, ice","فراولة، نعناع، ليمون أخضر، سكر، صودا، ثلج",[],"cocktail"],
    ["Elmalı Mojito","Apple Mojito","موهيتو تفاح",360,"Elma, nane, lime, şeker, soda, buz","Apple, mint, lime, sugar, soda, ice","تفاح، نعناع، ليمون أخضر، سكر، صودا، ثلج",[],"cocktail"]]}
  ]},
{ id:"nargile", tr:"Nargile", en:"Shisha", ar:"الشيشة",
  str:"Meyveli ve özel karışımlar", sen:"Fruit flavours and special blends", sar:"نكهات فواكه وخلطات خاصة",
  g:[
   { tr:"Nargile Çeşitleri", en:"Shisha Flavours", ar:"نكهات الشيشة", i:[
    ["Dejavu","Dejavu","ديجافو",800,"Kavun, karpuz, nane, vanilya","Melon, watermelon, mint, vanilla","شمام، بطيخ، نعناع، فانيليا",null,"shisha"],
    ["Baku Night","Baku Night","باكو نايت",800,"Oryantal meyveler, buz","Oriental fruits, ice","فواكه شرقية، ثلج",null,"shisha"],
    ["Moscow Night","Moscow Night","موسكو نايت",800,"Muz, orman meyveleri, mentol","Banana, forest fruits, menthol","موز، فواكه الغابة، منثول",null,"shisha"],
    ["Love 66","Love 66","لوف 66",800,"Karpuz, passion meyvesi, kavun, çilek, mentol","Watermelon, passion fruit, melon, strawberry, menthol","بطيخ، فاكهة العاطفة، شمام، فراولة، منثول",null,"shisha"],
    ["Lady Killer","Lady Killer","ليدي كيلر",800,"Mango, kavun, çilek, nane","Mango, melon, strawberry, mint","مانجو، شمام، فراولة، نعناع",null,"shisha"],
    ["Ice Bon Bon","Ice Bon Bon","آيس بون بون",800,"Şekerleme, buz","Candy, ice","حلوى، ثلج",null,"shisha"],
    ["Mango Tango","Mango Tango","مانجو تانغو",800,"Mango, tropikal meyveler","Mango, tropical fruits","مانجو، فواكه استوائية",null,"shisha"],
    ["Pişmiş Şeftali","Baked Peach","خوخ مشوي",800,"Fırınlanmış şeftali aroması","Baked peach flavour","نكهة خوخ مشوي",null,"shisha"],
    ["Kule Karışım","Kule Special Blend","خلطة كوله الخاصة",950,"Kule'ye özel karışım — servis ekibimize danışınız","Kule's signature blend — ask our team","خلطة كوله الخاصة — اسأل فريق الخدمة",null,"shisha"],
    ["Çift Elma","Double Apple","تفاحتين",800,"Çift elma aroması","Double apple flavour","نكهة التفاحتين",null,"shisha"],
    ["Cappuccino","Cappuccino","كابتشينو",800,"Cappuccino aroması","Cappuccino flavour","نكهة الكابتشينو",null,"shisha"],
    ["Karpuz","Watermelon","بطيخ",800,"Karpuz aroması","Watermelon flavour","نكهة البطيخ",null,"shisha"],
    ["Çilek","Strawberry","فراولة",800,"Çilek aroması","Strawberry flavour","نكهة الفراولة",null,"shisha"],
    ["Üzüm","Grape","عنب",800,"Üzüm aroması","Grape flavour","نكهة العنب",null,"shisha"],
    ["Nane","Mint","نعناع",800,"Nane aroması","Mint flavour","نكهة النعناع",null,"shisha"]]}
  ]}
];
