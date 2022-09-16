# Fimple Case - Kredi Ödeme Planı

Projenin AWS Amplify ile deploy edilmiş hali linktedir. Proje kodu componentlere ayrılmış  halde src folderı altında yer almaktadır. Test folderı altında finansal hesap fonksiyonlarının unit testleri bulunmaktadır.

[Deployed project link](https://main.d3c5v7nnj180bc.amplifyapp.com/)

![image](https://user-images.githubusercontent.com/80424496/190708024-2e43c05b-6d4d-4ee1-880b-cae4dc2fe9ed.png)

## Uygulama Yapısı

[ThemeContext](): Temanın context olarak saklanmasından ve erişilmesinden sorumludur. İçerisinde renk değerleri saklar, bu değerleri index.js üzerinden App'e aktarır.

[App](): Temel parent componenttir. İçerisinde ResultContext ile çevrelenmiş FormInput ve sonuçların yansıtıldığı Payments componentlerini barındırır. Hesaplanmış ödeme bilgisine ResultContext üzerinden erişim sağlanmıştır. Ek olarak içerisinde theme button yer almaktadır.

[ResultContext](): Hesaplanmış periodik ve kümülatif ödeme bilgilerini saklar.

[FormInput]():





# Notes

* https://color.adobe.com/tr/create/color-wheel
