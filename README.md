#### Selim Sefa Kaya

---

### `Tesodev Arama Portalı`

Bu projeyi Tesodev iş mülakatı için tamamladım. Projeyi yaparken HTML, CSS(scss), JS dillerini ve React kütüphanesini kulandım. Ayrıca React'ta fonksiyon bileşenlerini ve Hook'ları kullanarak Context ve Reducer yapısıyla projeyi tamamladım. Ek olarak react-router-dom kütüphanesinden faydalandım. Tasarımı yaparken figma'da verilen tasarımdan faydalandım.

JS'te map, filter, push, includes gibi array metotlarını kullandım.

`Projede neler yapıldı?`

### `Anasayfa`

- Anasayfada bir arama kısmı, slayt geçişleriyle hazırlanan bir Haberler kısmı, adres bilgisinin yer aldığı bir altbilgi kısmı ve yeni kayıt ekleme butonunun yer aldığı bir kısım bulunmaktadır.

#### `Yeni Kayıt Ekle Butonu`

- Yeni kayıt ekle butonuna tıklandığı zaman, yeni kayıt ekleme formunun yer aldığı sayfaya yönlendirir.

#### `Arama Kısmı`

- Arama kısmında, girdi bölgesine en az iki karakter girilmesi durumunda Arama butonu aktif olur, iki karakterden az girdi varsa buton devre dışıdır. Bu kısımda boşluk karakteri dışında herhangi bir karakter sorgusu yapılmamaktadır.

- Arama kelimesi en az 2 karaktere ulaştıktan sonra, kayıtların içinde öncelikle İsim Soyisim araması ve ardından Şirket araması yaparak, eğer varsa en fazla ilk 3 kaydı girdinin altında dinamik olarak listeler.

- Arama butonuna veya 'Show More' butonuna tıklandığı zaman, kullanıcı tüm filtrelenmiş kayıtların listelendiği Arama sayfasına yönlendirilir.

- Kayıtların filtrelenmesi için tam eşleşme değil, arama kelimesinin, arandığı kısmın içinde geçmesi yeterlidir.

#### `Haberler Kısmı`

- Haberlere ait görseller, içerikler, tarih ve kullanıcı bilgileri bir JSON veri içinden alınmaktadır.

- Haber geçişleri, manuel olarak sağ-sol butonları ile yapılmaktadır.

- Listenin sonuna gelindiğinde, listeyi tamamen başa döndürmez, baştan ekleyerek ilerlemeye devam eder. Geriye gitme işleminde de aynı şekilde başa döndürmez ve sondan ekleyerek ilerlemeye devam eder.

#### `Altbilgi Kısmı`

- Harita, Google harita sağlayıcısından alınarak 'iframe' etiketi ile sayfaya yerleştirilmiştir.

### `Arama Sayfası`

- Arama sayfası, Tesodev logosu (anasayfaya yönlendirir ve arama kelimesini temizler), Arama kısmı, Yeni kayıt ekleme butonu, filtrelenmiş kayıtların listelendiği (sıralama seçenekleri ile birlikte) ve sayfalama kısmından oluşmaktadır.

#### `Arama Kısmı`

- Anasayfadan yönlendirilme halinde arama girdisinde, arama kelimesi aktarılmaktadır. Ayrıca sayfanın yenilenmesi halinde query string sayesinde arama kelimesi kaybolmaz. Ek olarak, dinamik bir şekilde bu sayfada arama işlemi gerçekleştirilmektedir.

#### `Kayıtların Listelenmesi`

- Başlangıçta, kayıtlar önce İsim Soyisim filtresinden geçen sonuçları ve ardından Şirket filtresinden geçen sonuçları listeler.

- Bir sayfada en fazla 5 kayıt listelenir, fazlası olması halinde sayfalama işlemi yapılır.

- Arama kelimesi değiştirildiğinde, geçerli sayfa ve sıralama kriteri seçilmiş olsa bile bu ayarlar sıfırlanır.

#### `Sayfalama`

- Sayfalama kısmında sayfa numaraları ve ayrıca önceki ve sonraki sayfalara geçiş için butonlar yer almaktadır.

- Eğer 6'dan fazla sayfa varsa, ilk 3 ve son 3 sayfa arası gizlenir. Geçerli sayfa her zaman farklı renkle belirtilmiş şekilde görünür.

![pagination](https://i.imgur.com/gDHae2j.png)

- Önceki sayfa butonu ilk sayfada devre dışıdır, sonraki sayfa butonu son sayfada devre dışıdır.

- Sayfa bilgisi query string ile Url'de yer almaktadır. Sayfa yenilenmesi halinde geçerli sayfa kaybolmaz.

#### `Sıralama Kısmı`

- Filtrelenmiş kayıtlar seçilen sıralama kriterine göre listelenir.

- Seçilen sıralama kriterinin diğerlerinden farklı bir renk ile aktif olduğu belirginleşmektedir.

- Seçili kriter varken başka bir kritere tıklanması halinde önceki kriter devre dışı olur ve yeni sıralama aktif olur. Aktif kritere ikinci kez tıklanması halinde o kriter de devre dışı kalır ve kayıtlar başlangıçtaki sırasına döner.

- Sıralama kriteri query string ile korunmakta olup sayfa yenilenmesi halinde kaybolmaz.

- Sıralama kriteri seçildiğinde, geçerli sayfa değiştirilmiş olsa bile 1 olarak ayarlanır.

### `Yeni Kayıt Ekleme`

- Bu kısım, Tesodev logosu (anasayfaya yönlendirir ve arama kelimesini temizler), arama listesine dönme, kayıt bilgilerinin girilmesi ve ekle butonu ile çalışan bilgi kutusundan oluşmaktadır.

- Ekle butonu başlangıçta devre dışıdır. Tüm girdi alanlarının doldurulması halinde aktif hale gelir.

- Girdi alanındaki odak kaldırıldığında, uygunluk kontrolüne göre, girdi alanı kırmızı kenarlı olup altında hata mesajı çıkarabilir.

- Bilgi kutusunun da aktif olabilmesi için uygunluk kontrolü, ekle butonuna tıklandığı zaman çalışır. Yani girdiler kırmızı olsa bile ekle butonu aktif olabilir. Ancak kırmızı bir girdi varken kayıt işlemi tamamlanmaz.

- Kayıt işlemi başarılı olması halinde, önceki ve yeni veriler birlikte tarayıcının yerel depolamasına kaydedilir.

- Veritabanında yer alan ancak girişi alınmayan bilgiler:

```
* Şirket bilgisi default olarak 'TESODEV' ayarlandı.
* Tarih bilgisi sistemin tarihine göre, veritabanındaki formata uygun olarak ayarlandı.
```

---

English

---

## `Tesodev Search Portal`

I completed this project for Tesodev job interview. I used HTML, CSS, JS programming languages and React library while doing the project. I also completed the project with Context and Reducer structure using function components and Hooks in React. Additionally, I used the react-router-dom library. While designing, I benefited from the design given in figma.

I used array methods like map, filter, push, includes in JS.

`What was done in the project?`

### `Main Page`

- On the homepage, there is a search section, a Top News section with slide transitions, a footer section with address information, and a section with Add new record button.

#### `Add New Record Button`

- When the add new record button is clicked, it redirects to the page with the new record adding form.

#### `Search Section`

- In the search section, if at least two characters are entered in the input field, the Search button is active, if there are less than two characters, the button is disabled. In this section, no character query is made except for the space character.

- After the search word reaches at least 2 characters, it dynamically lists the first 3 records, if any, under the entry by first searching for Name Surname and then searching for Company.

- When the search button or 'Show More' button is clicked, the user is directed to the Search page where all the filtered records are listed.

- In order to filter the records, it is sufficient to pass the search word within the searched part, not the exact match.

#### `Top News Section`

- Images, content, date and user information of the news are taken from a JSON data.

- News transitions are made manually with the right-left buttons.

- When the end of the list is reached, it does not return the list completely to the beginning, it continues to progress by adding it from the beginning. It does not return to the beginning in the same way in the process of going backwards and continues to progress by adding from the end.

#### `Footer Section`

- The map was taken from the Google map provider and placed on the page with the 'iframe' tag.

### `Search Page`

- The search page consists of Tesodev logo (redirects to the homepage and clears the search word), Search section, Add new record button, filtered records are listed (with sorting options) and pagination.

#### `Search Section`

- In case of redirecting from the homepage, the search word is transferred in the search input. In addition, if the page is refreshed, the search word will not be lost thanks to the query string. Moreover, dynamic search is performed on this page.

#### `Listing of Records`

- Initially, the records first list the results that pass the Name Surname filter and then the results that pass the Company filter.

- A maximum of 5 records are listed on a page, if there are more, paging is done.

- Changing the search word resets these settings even if the current page and sort criteria are selected.

#### `Pagination`

- In the pagination section, there are page numbers and buttons for switching to the previous and next pages.

- If there are more than 6 pages, the first 3 and the last 3 pages are hidden. The current page always appears highlighted in a different color.

![pagination](https://i.imgur.com/gDHae2j.png)

- Previous page button is disabled on first page, next page button is disabled on last page.

- The page information is in the Url with the query string. If the page is refreshed, the current page will not be lost.

#### `Sort Section`

- Filtered records are listed according to the selected sorting criteria.

- It becomes clear that the selected sorting criterion is active with a different color from the others.

- If another criterion is clicked while there is a selected criterion, the previous criterion will be disabled and the new order will be active. If the active criterion is clicked for the second time, that criterion is also deactivated and the records return to their original order.

- The sorting criteria are protected by the query string and are not lost when the page is refreshed.

- When sorting criteria is selected, it is set to 1 even if the current page has been changed.

### `Add New Record`

- This section consists of the Tesodev logo (redirects to the homepage and clears the search word), returning to the call list, entering the registration information and the info box that works with the add button.

- The Add button is initially disabled. It becomes active when all input fields are filled.

- When the unfocus from the input field, according to the conformity check, the input field is bordered in red and may display an error message below it.

- If the registration is successful, the previous and new data are saved together in the local storage of the browser.

- In order for the information box to be entered:

```
* Company information is set to 'TESODEV' by default.
* The date information has been adjusted according to the system's date, in accordance with the format in the database.
```
