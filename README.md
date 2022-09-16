# Fimple Case - Kredi Ödeme Planı

Projenin AWS Amplify ile deploy edilmiş hali linktedir. Proje kodu componentlere ayrılmış  halde src folderı altında yer almaktadır. Test folderı altında finansal hesap fonksiyonlarının unit testleri bulunmaktadır.

[Deployed project link](https://main.d3c5v7nnj180bc.amplifyapp.com/)

![image](https://user-images.githubusercontent.com/80424496/190708024-2e43c05b-6d4d-4ee1-880b-cae4dc2fe9ed.png)

## Uygulama Yapısı

[ThemeContext](): Temanın context olarak saklanmasından ve erişilmesinden sorumludur. İçerisinde renk değerleri saklar, bu değerleri index.js üzerinden App'e aktarır.

[App](): Temel parent componenttir. İçerisinde ResultContext ile çevrelenmiş FormInput ve sonuçların yansıtıldığı Payments componentlerini barındırır. Hesaplanmış ödeme bilgisine ResultContext üzerinden erişim sağlanmıştır. Ek olarak içerisinde theme button yer almaktadır.

[ResultContext](): Hesaplanmış periodik ve kümülatif ödeme bilgilerini saklar.

[FormInput](): Anapara, aylık faiz, faiz türü, taksit aralığı, taksit sayısı, KKDF ve BSMV oranlarını kullanıcıdan alan formu içerir. Form submit edildiğinde kullanıcı girdileri ile financial util fonksiyonlarını kullanarak bileşik veya basit faiz ödeme bilgilerinin hesaplanmasını sağlar. ResultContext üzerinden sağlanan set metodu ile ödeme planı için state değişikliği sağlar.

[Payments](): ResultContext üzerinden sağlanan ödeme bilgilerini render eder. Üst kısımda kümülatif değerleri tablo olarak yansıtır ve detaylı ödeme tablosuna scroll eden button içerir. Alt kısımda da detaylı ödeme planını içeren Table compenentını bulundurur.

[Table](): Detaylı ödeme planını render eder. Component içerisinde **useImperativeHandle** ve **forwardRef** API'ları ile Table'a ait scroll fonksiyonu parent component(Payments) tarafından erişilebilir hale getirilmiştir.

[financialUtil.js](): Finansal hesaplamaları yapan ve geri ödeme bilgilerini geri dönen pure functionları içerir. **rateDerivation** ile verilen aylık faiz bilgisini ödeme periyoduna göre haftalık ve yıllığa çevirir yada aylık faiz olarak korur. Faiz türüne göre basit faiz için **simpleInterestCalculation**, bileşik faiz için **compoundInterestCalculation** fonksiyonları kullanılır.






# Notes

* https://color.adobe.com/tr/create/color-wheel
