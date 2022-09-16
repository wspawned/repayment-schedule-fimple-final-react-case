# Fimple Case - Kredi Ödeme Planı

Projenin AWS Amplify ile deploy edilmiş hali linktedir. Proje kodu componentlere ayrılmış  halde src folderı altında yer almaktadır. Test folderı altında finansal hesap fonksiyonlarının unit testleri bulunmaktadır.

[Deployed project link](https://main.d3c5v7nnj180bc.amplifyapp.com/)

![image](https://user-images.githubusercontent.com/80424496/190708024-2e43c05b-6d4d-4ee1-880b-cae4dc2fe9ed.png)

## Uygulama Yapısı

- [ThemeContext](https://github.com/wspawned/repayment-schedule-fimple-final-react-case/blob/main/src/ThemeContext.js): Temanın context olarak saklanmasından ve erişilmesinden sorumludur. İçerisinde renk değerleri saklar, bu değerleri index.js üzerinden App'e aktarır.

- [App](https://github.com/wspawned/repayment-schedule-fimple-final-react-case/blob/main/src/App.js): Temel parent componenttir. İçerisinde ResultContext ile çevrelenmiş FormInput ve sonuçların yansıtıldığı Payments componentlerini barındırır. Hesaplanmış ödeme bilgisine ResultContext üzerinden erişim sağlanmıştır. Ek olarak içerisinde theme button yer almaktadır.

- [ResultContext](https://github.com/wspawned/repayment-schedule-fimple-final-react-case/blob/main/src/ResultContext.js): Hesaplanmış periodik ve kümülatif ödeme bilgilerini saklar.

- [FormInput](https://github.com/wspawned/repayment-schedule-fimple-final-react-case/blob/main/src/FormInput.js): Anapara, aylık faiz, faiz türü, taksit aralığı, taksit sayısı, KKDF ve BSMV oranlarını kullanıcıdan alan formu içerir. Form submit edildiğinde kullanıcı girdileri ile financial util fonksiyonlarını kullanarak bileşik veya basit faiz ödeme bilgilerinin hesaplanmasını sağlar. ResultContext üzerinden sağlanan set metodu ile ödeme planı için state değişikliği sağlar.

- [Payments](https://github.com/wspawned/repayment-schedule-fimple-final-react-case/blob/main/src/Payments.js): ResultContext üzerinden sağlanan ödeme bilgilerini render eder. Üst kısımda kümülatif değerleri tablo olarak yansıtır ve detaylı ödeme tablosuna scroll eden button içerir. Alt kısımda da detaylı ödeme planını içeren Table compenentını bulundurur.

- [Table](https://github.com/wspawned/repayment-schedule-fimple-final-react-case/blob/main/src/Table.js): Detaylı ödeme planını render eder. Component içerisinde **useImperativeHandle** ve **forwardRef** API'ları ile Table'a ait scroll fonksiyonu parent component(Payments) tarafından erişilebilir hale getirilmiştir.

- [financialUtil.js](https://github.com/wspawned/repayment-schedule-fimple-final-react-case/blob/main/src/financialUtil.js): Finansal hesaplamaları yapan ve geri ödeme bilgilerini geri dönen pure functionları içerir. **rateDerivation** ile verilen aylık faiz bilgisini ödeme periyoduna göre haftalık ve yıllığa çevirir yada aylık faiz olarak korur. Faiz türüne göre basit faiz için **simpleInterestCalculation**, bileşik faiz için **compoundInterestCalculation** fonksiyonları kullanılır.

![image](https://user-images.githubusercontent.com/80424496/190724426-02faf158-8b26-44cc-99be-0d761b6c0103.png)

- [financialUtil.test.js](https://github.com/wspawned/repayment-schedule-fimple-final-react-case/blob/main/src/test/financialUtil.test.js): Finansal hesaplama fonksiyonlarına ait unit testleri barındırır.

![image](https://user-images.githubusercontent.com/80424496/190725108-5f6a5a9d-1c2a-496d-818c-a6e1f611ce13.png)
