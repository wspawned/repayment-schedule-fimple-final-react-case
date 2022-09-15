# Kullanıcı Girdileri

* Kredi tutarı (Ana para) 
* Taksit sayısı
* Kâr oranı
* Taksit aralığı seçimi → aylık, haftalık, yıllık
* Vergi oranı → bsmv ve kkdf

# Amaçlar

Bir formda kullanıcıdan yukarıdaki bilgilerin girdi olarak alınması  
Bileşik ve basit kâr formulü kullanılarak hesap yapılabilmesi  
Geri ödeme planının bir tabloda gösterilmesi  
React.js kütüphanesi kullanılarak statik bir web sitesi yapılabilmesi  

```
❗Not: Ekranların kullanıcı deneyimi odaklı olması, görsellik ve hizalama konularına dikkat edilmesi beklenmektedir.
```

# Beklenen Özellikler

* Fonksiyonel komponentler kullanılması,
* En az 2 adet React Context oluşturulması,
* Herhangi bir seviyedeki component’in context’e erişim sağlayabilmesi,
* Referans üzerinden componentin dışarıya açtığı özelliklere erişim sağlanabilmesi,
* useRef, useImpretiveHandle, forwardRef kullanılması,
* Kullanıcı gerekli bilgileri girdikten sonra, bir buton aracılığı ile toplam geri ödeme tutarı, aylık taksit tutarı ve toplam vergi tutarları gösterilebilir.
* Girilen periyoda göre hesaplanan geri ödeme planı tablosu, bir buton aracılığı ile popup olarak gösterilebilir.

# Formüller

Kar oranı aylık alınmıştır.

Basit → Kâr = ( Anapara * Kâr oranı * ( gün sayısı / 30 ))

Bileşik → Kâr = ( Anapara * ( ( 1 + kâr oranı) ^ (gün sayısı / 30) ) ) - Anapara  

KKDF = Kâr Tutarı * (1.15)  

BSMV = Kâr Tutarı * (1.10)   

# Örnek Hesaplama

* Kâr Oranı: %2.28 aylık

* Anapara: 100,000.00 TL

* Taksit Sayısı: 12

* Taksit aralığı: Aylık

# Notes

* https://color.adobe.com/tr/create/color-wheel
* 