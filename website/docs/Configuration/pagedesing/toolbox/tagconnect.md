---
title: Tag Ayarları
description: Streamline your app development with the Build Module in Appcircle, offering automated builds for iOS and Android platforms.
tags:
  [build module, app development, automation, iOS builds, Android builds, CI/CD]
---

import Screenshot from '@site/src/components/Screenshot';

<Screenshot url='/img/tagconnect2.png' />

 TagConnect sekmesi, Datarapor Web SCADA sisteminde cihazların verilerini izlemek ve kontrol etmek için kullanılan bir bağlantı ve yapılandırma aracıdır. Aşağıda TagConnect sekmesinin detaylı açıklamaları bulunmaktadır.


### Connect Tag
Konfigürasyonu yapılan cihazların gerçek zamanlı verilerini izlemek için kullanılır.


<Screenshot url='/img/tagconnect.png' />

Sağ üst taraftaki araç çubuğundan bir metin (text) oluşturun. Oluşturulan metne sağ tıklayınca açılan menüden TagConnect sekmesine gidin. Burada, "Connect Tag" seçeneğine tıklayın. Konfigürasyonu yapılan cihazlardan real olanlar listelenecektir. Bu listeden seçim yapıp kaydet yaptığınızda veri anlık olarak izlenebilir.

<Screenshot url='/img/tagconnect3.png' />

### Connect Bool Tag
Cihazların boolean (doğru/yanlış) durumlarını izlemek ve göstermek için kullanılır.
Sağ üstteki araç çubuğundan image sekmesine tıklayarak yeni bir image ekleyin. Eklenen image'e sağ tıklayın ve TagConnect sekmesinden "Connect Bool Tag" seçeneğini seçin. Konfigürasyonu yapılan cihazlardan uygun olanı seçerek, 1 konumundaki ve 0 konumundaki görüntüleri belirleyin. Bu şekilde, bool tag eklenmiş olur ve cihazın durumu görüntülenir.

<Screenshot url='/img/tagconnect4.png' />

### Connect String Tag
Cihazlardan gelen string verilerini izlemek için kullanılır.
TagConnect sekmesinden "Connect String Tag" seçeneğine tıklayın. Konfigürasyonu yapılan cihazlardan string veri gönderenleri seçerek bağlantıyı gerçekleştirin.
### Break Tag
Mevcut bir tag bağlantısını kesmek için kullanılır.
Bağlantıyı kesmek istediğiniz öğeye sağ tıklayın ve TagConnect sekmesinden "Break Tag" seçeneğini seçin.
### SetReal
Cihazlara gerçek sayı (real) değeri göndermek için kullanılır.
TagConnect sekmesinden "SetReal" seçeneğine tıklayın. Değeri göndermek istediğiniz cihazı seçin ve gönderilecek değeri girin.
### SetBit
Cihazlara bit değeri (0 veya 1) göndermek için kullanılır.
TagConnect sekmesinden "SetBit" seçeneğine tıklayın. Değeri göndermek istediğiniz cihazı seçin ve gönderilecek bit değerini girin.
### SetFormSubmit
Form verilerini göndermek için kullanılır.
TagConnect sekmesinden "SetFormSubmit" seçeneğine tıklayın. Gönderilecek form verilerini belirleyin ve cihazı seçin.
### GetFormData
Form verilerini almak için kullanılır.
TagConnect sekmesinden "GetFormData" seçeneğine tıklayın. Veri almak istediğiniz cihazı seçin ve form verilerini alın.
### ChangeUnit
Cihazların birimlerini değiştirmek için kullanılır.
TagConnect sekmesinden "ChangeUnit" seçeneğine tıklayın. Birimi değiştirmek istediğiniz cihazı seçin ve yeni birimi belirleyin.

<Screenshot url='/img/tagconnect5.png' />

### ChangeDisplayName
Cihazların görüntülenen isimlerini değiştirmek için kullanılır.
TagConnect sekmesinden "ChangeDisplayName" seçeneğine tıklayın. İsmini değiştirmek istediğiniz cihazı seçin ve yeni görüntüleme adını girin.

<Screenshot url='/img/tagconnect6.png' />