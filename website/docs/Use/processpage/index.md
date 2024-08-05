---
title: Enerji Analizörü Kontrol
description: Proses Veri Toplama Modulu kulanım 
tags: [WEB-SCADA,DATARAPOR,PROSES VERI TOPLAMA,PVT,SENSOR IZLEME,VERI TOPLAMA,SICAKLIK TAKIP,SAYAC IZLEME,FABRIKA IZLEME,SCADA KURULUM,WEB SCADA NASIL KURULUR,WEB SCADA NEDIR,TESIS IZLEME]
---

import Screenshot from '@site/src/components/Screenshot';

# Proses İzleme

DataRapor veri toplama sisteminde sıcaklık,basınç,nem,debi gibi  proses verilerinin izlendiği bölümdür.
Bu bölüme sisteme giriş yapıldıktan sonra sag üst köşedeki Utility sekmesinden erişilir.


Utility bölümü ; Visual ve Table olmak üzere iki ana kısımdan olusur.


 
Visual sekmesinde görsel öğeler içeren scada sayfaları  ; table kısımında ise aynı verileri içeren tablo gorunumlu izleme sayfaları gösterilir.

<Screenshot url='/img/Pvt19.png' />

Visual sayfasında ekli enstrumanları canlı olarak izleyebilir.Yetkiye göre cihazları çalıştırıp durdurabilirsiniz.



> [Örnek scada sayfalarımızı görmek için Demo Sayfamızı ziyaret edebilirsiniz.](https://demo.datarapor.com)



Table bölümünden o sayfaya ait taglerin tablo gorunumlu izleme sayfasına ulasılır.


<Screenshot url='/img/Pvt2.png' />


Tablo gorunumundeki cihaz adlarına tıklanarak TagDashboard sayfasına erişilir.
Bu sayfa o tagin canlı grafiğine , gecmiş gunlerin ortalama verilerine, son bir saat için min max degerlerine,son gelen alarmlarına ulaşıldığı özet sayfasıdır.
Range bölümünden alarm limitleri de değiştirilebilir.

<Screenshot url='/img/Pvt7.png' />


Taglerin trendlerine grafiksel bölümünden ulasılır.Sistem çoklu grafiksel analizi destekler.Birden fazla tag seçerek çoklu veriyi tek grafikten inceleyebilirsiniz.


Zaman Esası parametresi Dakikalık,saatlik,günlük olarak seçilebilr.


SaveTags bölümünden tagler öntanımlı grafik listesine kaydedilir.ConfigTags bölümünden de düzenlenir. 

<Screenshot url='/img/Pvt20.png' />
<Screenshot url='/img/Pvt21.png' />

Tag isimleri yanındaki butondan grafik dışa aktarılabilir.

Öntanımlı grafik altyapısı surekli ihtiyac duyulan coklu grafiklerin sisteme kaydedildiği bölümdür.Sonraki kullanımlarda öntanımlı grafik sekmesinden kaydedilen grafik seçilir ve tek seferde istenen tagların grafiği alınmıs olur.




<Screenshot url='/img/Pvt4.png' />


Grafiksel bölümü tablo gorunumu baslıgı altında veriler tablo halinde görüntülenebilir, Sağ üstten Excel(.xlsx) formatında dısa aktarılabilir. 

<Screenshot url='/img/Pvt5.png' />


Endeksler sekmesi altındanda Su,buhar sayacı gibi total veri izlemesi yapılan tagların veri tablolarına ulasılır.
Sağ üstten Excel(.xlsx) formatında dısa aktarılabilir.

<Screenshot url='/img/Pvt22.png' />
 
 