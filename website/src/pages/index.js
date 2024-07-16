import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';















const features = [
  {
 
             
    



  
    
   
 
  
  
    title: (

      <Link to="/enerji-veri-toplama">
      <Translate
        id="homepage1.title"
        description="Enerji Veri Toplama">
          
          Enerji Veri Toplama
      </Translate>
      </Link>

    ),
  
    imageUrl: 'img/EVT.jpg',
    description: (
      <Translate
        id="homepage1"
        description="Enerji analizörleri, elektrik sayaçları vb. cihazların enerji parametrelerinin toplandığı, faturalandırıldığı yazılımlar.">
         Enerji analizörleri, elektrik sayaçları vb. cihazların enerji parametrelerinin toplandığı, faturalandırıldığı yazılımlar.
      </Translate>
    ),
  },

 
 
 


  {
    title: (


      <Link to="/proses-veri-toplama">
      <Translate
        id="homepage2.title"
        description="Proses Veri Toplama">
        Proses Veri Toplama
      </Translate>
      </Link>
    ),
    imageUrl: 'img/PVT.jpg',
    description: (
      <Translate
        values={{angularJS: (<code>AngularJS</code>), reactJS: (<code>ReactJS</code>)}}
        id="homepage2"
        description="Sıcaklık,basınç,nem,deb,hava hızı,TOC,iletkenlik,pH,O2,CO,toz vb. proses verilerinin kayıt altına alındığı,raporlandığı ve analiz edildiği veri toplama yazılımları.">
        {`Sıcaklık,basınç,nem,deb,hava hızı,TOC,iletkenlik,pH,O2,CO,toz vb. proses verilerinin kayıt altına alındığı,raporlandığı ve analiz edildiği veri toplama yazılımları.`}
      </Translate>
    ),
  },




  {
    title: (

      <Link to="/uretim-veri-toplama">
      <Translate
        id="homepage3.title"
        description="Üretim Veri Toplama">
        Üretim Veri Toplama
      </Translate>
      </Link>
    ),
    imageUrl: 'img/UVT.jpg',
    description: (
      <Translate
        values={{starters: (<code>starters</code>)}}
        id="homepage3"
        description="Fabrikanızda üretilen ürün miktarlarının anlık veya vardiya bazlı kayıt altına alındığı, raporlandığı ve faturalandığı yazılımlar.">
        {`Fabrikanızda üretilen ürün miktarlarının anlık veya vardiya bazlı kayıt altına alındığı, raporlandığı ve faturalandığı yazılımlar.`}
      </Translate>
    ),
  },


  {
    title: (
      <Link to="/bakim-yonetim-sistemi">
      <Translate
        id="homepage4.title"
        description="Bakım Yönetim Sistemi-MMS">
        Bakım Yönetim Sistemi-MMS
      </Translate>
      </Link>
    ),
    imageUrl: 'img/undraw_switches.svg',
    description: (
      <Translate
        values={{starters: (<code>starters</code>)}}
        id="homepage4"
        description="Endüstriyel tesislerdeki ekipmanların periyodik bakımını yönetmek ve izlemek için kullanılan yazılımlardır.">
        {`Endüstriyel tesislerdeki ekipmanların periyodik bakımını yönetmek ve izlemek için kullanılan yazılımlardır.`}
      </Translate>
    ),
  },



  {
    title: (
      <Translate
        id="homepage5.title"
        description="Maliyet Hesapları">
        Maliyet Hesapları
      </Translate>
    ),
    imageUrl: 'img/MH.jpg',
    description: (
      <Translate
        id="homepage5"
        description="İşletmenizde yer alan enerji, buhar, basınç gibi parametrelerin maliyetlerini hesaplayabilir.">
        İşletmenizde yer alan enerji, buhar, basınç gibi parametrelerin maliyetlerini hesaplayabilir.</Translate>
    ),
  },
  {
    title:  (
      <Link to="/Entegrasyon"> 
      <Translate
        id="homepage6.title"
        description="Entegrasyon">
        Entegrasyon
      </Translate>
      </Link>
    ),
    imageUrl: 'img/undraw_add_color.svg',
    description: (
      <Translate
        id="homepage6"
        description="İçinde barındırdığı açık arabirim web hizmetleri (RESTful API ve SignalR), widget arabirimleri ve WebAccess API'leri aracılığıyla üçüncü taraf yazılımlarla MES ,  ERP ( SAP vb. ) kolayca entegre edilebilir.">
        İçinde barındırdığı açık arabirim web hizmetleri (RESTful API ve SignalR), widget arabirimleri ve WebAccess API'leri aracılığıyla üçüncü taraf yazılımlarla MES ,  ERP ( SAP vb. ) kolayca entegre edilebilir.
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage7.title"
        description="ISO 50001 Enerji Yönetimi">
        
ISO 50001 Enerji Yönetimi
      </Translate>
    ),
    imageUrl: 'img/ISO50001.jpg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="homepage7"
        description="ISO 50001 enerji yönetimi sistemini destekler, kanunen zorunlu enerji etüt raporlarının oluşturulmasına yardımcı olur.">
        {`ISO 50001 enerji yönetimi sistemini destekler, kanunen zorunlu enerji etüt raporlarının oluşturulmasına yardımcı olur.`}
      </Translate>
    ),
  },
  

  {
    title: (
      <Translate
        id="homepage8.title"
        description="Karşılaştırma">
        Karşılaştırma
      </Translate>
    ),
    imageUrl: 'img/undraw_code_review.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="homepage8"
        description="İşletmenizde aynı türde olan makina veya sistemleri vardiya yada dönem bazlı verilerini pasta dilimli grafiklerle karşılatırıp size fikir verir.">
        {`İşletmenizde aynı türde olan makina veya sistemleri vardiya yada dönem bazlı verilerini pasta dilimli grafiklerle karşılatırıp size fikir verir.`}
      </Translate>
    ),
  },




  {
    title: (
      <Translate
        id="homepage9.title"
        description="Faturalandırma">
        Faturalandırma
      </Translate>
    ),
    imageUrl: 'img/fatura.jpg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="homepage9"
        description="İşletmenizin bölüm veya lokasyon bazlı tüketimlerini hesaplayarak iç fatura kesmenize olanak sağlar.">
        {`İşletmenizin bölüm veya lokasyon bazlı tüketimlerini hesaplayarak iç fatura kesmenize olanak sağlar.`}
      </Translate>
    ),
  },


  





  {
    title: (
      <Translate
        id="homepage10.title"
        description="Haberleşme">
        Haberleşme
      </Translate>
    ),
    imageUrl: 'img/comm.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="homepage10"
        description="Modbus TCP/IP ,Modbus RTU, Profinet, Profibus gibi dijital haberleşme protokolleri desteklenirken bunun yanı sıra Pulse, 4-20mA ve 0-10V çıkışlı cihazlarda sistem tarafından desteklenir. Ayrıca OPC, TCP, UDP soket arabirimlerini sisteme entegre edebilirsiniz.">
        {`Modbus TCP/IP ,Modbus RTU, Profinet, Profibus gibi dijital haberleşme protokolleri desteklenirken bunun yanı sıra Pulse, 4-20mA ve 0-10V çıkışlı cihazlarda sistem tarafından desteklenir. Ayrıca OPC, TCP, UDP soket arabirimlerini sisteme entegre edebilirsiniz.`}
      </Translate>
    ),
  },


 



  {
    title: (
      <Translate
        id="homepage11.title"
        description="Yüksek Çözünürlüklü Veri">
        Yüksek Çözünürlüklü Veri
      </Translate>
    ),
    imageUrl: 'img/YuksekCozunurlukluVeri.jpg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="homepage11"
        description="ataRapor®, yüksek hızlı veri işleme kabiliyeti ve entegre sunucu tarafı desteği ile 
        işletmenizdeki yüzlerce sensör, aktüatör ve analizör gibi veri kaynaklarından hiç bir gecikme olmadan tüm verileri alabilir, 
        filtreleyebilir, özel 
        matematiksel hesaplamalara tabi tutabilir.">
        {`DataRapor®, yüksek hızlı veri işleme kabiliyeti ve entegre sunucu tarafı desteği ile 
        işletmenizdeki yüzlerce sensör, aktüatör ve analizör gibi veri kaynaklarından hiç bir gecikme olmadan tüm verileri alabilir, 
        filtreleyebilir, özel 
        matematiksel hesaplamalara tabi tutabilir.`}
      </Translate>
    ),
  },



  {
    title: (
      <Translate
        id="homepage12.title"
        description="Grafiksel Analiz">
        Grafiksel Analiz
      </Translate>
    ),
    imageUrl: 'img/graphicalAnalysis.jpg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="homepage12"
        description="DataRapor®️ ile tüm enerji üretim ve tüketim parametrelerinizin grafiksel analizini geçmişe dönük olarak saatlik, günlük, aylık bazda yapabilir, gelişmiş export seçenekleri ile istediğiniz platformlarda kullanabilirsiniz.">
        {`DataRapor®️ ile tüm enerji üretim ve tüketim parametrelerinizin grafiksel analizini geçmişe dönük olarak saatlik, günlük, aylık bazda yapabilir, gelişmiş export seçenekleri ile istediğiniz platformlarda kullanabilirsiniz.`}
      </Translate>
    ),
  },




  {
    title: (
      <Translate
        id="homepage13.title"
        description="Rapor Ve Fatura">
       Rapor Ve Fatura
      </Translate>
    ),
    imageUrl: 'img/Report.jpg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="homepage13"
        description="DataRapor®️ ile dilediğiniz şekil ve formatta dizayn edilen rapor ve faturalar tek tuşla saatlik, günlük, haftalık yada aylık bazda hizmetinize sunulur veya sizin belirlediğiniz kişilere otomatik olarak mail atılır.">
        {`DataRapor®️ ile dilediğiniz şekil ve formatta dizayn edilen rapor ve faturalar tek tuşla saatlik, günlük, haftalık yada aylık bazda hizmetinize sunulur veya sizin belirlediğiniz kişilere otomatik olarak mail atılır.`}
      </Translate>
    ),
  },

  {
    title: (
      <Translate
        id="homepage14.title"
        description="Alarm Ve Uyarı">
       Alarm Ve Uyarı
      </Translate>
    ),
    imageUrl: 'img/uyari.jpg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="homepage14"
        description="Sistemde tanımlı herhangi bir parametreye alarm tanımlanabilir ve tanımlı her bir alarm için limitler, alarm bekleme süreleri eklenebilir ya da değiştirilebilir.Alarm durumunda DataRapor®️, istenen yetkili gruplarına sms ve mail gönderir.">
        {`Sistemde tanımlı herhangi bir parametreye alarm tanımlanabilir ve tanımlı her bir alarm için limitler, alarm bekleme süreleri eklenebilir ya da değiştirilebilir.Alarm durumunda DataRapor®️, istenen yetkili gruplarına sms ve mail gönderir.`}
      </Translate>
    ),
  },


  {
    title: (
      <Translate
        id="homepage15.title"
        description="Web Tabanlı Scada">
       Web Tabanlı Scada
      </Translate>
    ),
    imageUrl: 'img/erp.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="homepage15"
        description="Dokunmatik Cihazlar ve Geleneksel Masaüstleri için Tasarlanmıs Web Tabanlı Scada Sistemleri">
        {`Dokunmatik Cihazlar ve Geleneksel Masaüstleri için Tasarlanmıs Web Tabanlı Scada Sistemleri`}
      </Translate>
    ),
  },



  {
    title: (
      <Translate
        id="homepage16.title"
        description="Yüksek Güvenlik Seviyesi">
       Yüksek Güvenlik Seviyesi
      </Translate>
    ),
    imageUrl: 'img/undraw_security_on_re_e491.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="homepage15"
        description=" Güvenli web sunucu (HTTPS) altyapısı, kullanıcı erişim ve yetkilerinin sınırlandırılabilmesi, tüm operatör işlemlerinin günlüğe kaydedilmesi ve VPN teknolojilerinin kullanımı ile yüksek güvenlikli bağlantı imkanları sunar.">
         
         {`
          Güvenli web sunucu (HTTPS) altyapısı, kullanıcı erişim ve yetkilerinin sınırlandırılabilmesi, tüm operatör işlemlerinin günlüğe kaydedilmesi ve VPN teknolojilerinin kullanımı ile yüksek güvenlikli bağlantı imkanları sunar.
         `}
      </Translate>
    ),
  },


  {
    title: (
      <Translate
        id="homepage16.title"
        description=" Sınırsız Kullanıcı Kapasitesi">
       Sınırsız Kullanıcı Kapasitesi
      </Translate>
    ),
    imageUrl: 'img/undraw_engineering_team_a7n2.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="homepage15"
        description=" Dataraporda kullanıcı ekleme sınırı yoktur.Dilediğiniz kadar kullanıcıyı sisteme tanımlayabilirsiniz.">
         
         {`
           Dataraporda kullanıcı ekleme sınırı yoktur.Dilediğiniz kadar kullanıcıyı sisteme tanımlayabilirsiniz.
         `}
      </Translate>
    ),
  },


  {
    title: (
      <Translate
        id="homepage16.title"
        description=" Daha Verimli Uretim ">
        Daha Verimli Uretim
      </Translate>
    ),
    imageUrl: 'img/undraw_factory_dy-0-a.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="homepage15"
        description=" Tek noktadan tüm süreci ve üretimi izleyerek, daha az iş gücü ile daha verimli üretim sağlanır. Bu sayede, üretim maliyetleriniz düşer">
         
         {`
           Tek noktadan tüm süreci ve üretimi izleyerek, daha az iş gücü ile daha verimli üretim sağlanır. Bu sayede, üretim maliyetleriniz düşer.
         `}
      </Translate>
    ),
  },











];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title}/>
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig: {customFields = {}, tagline} = {}} = context;
  return (
    <Layout title={tagline} description={customFields.description}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroProjectTagline}>
            <img
              alt="Awe logo"
              className={styles.heroLogo}
              src={useBaseUrl('img/DRImage.png')}
            />
            <span className={styles.heroTitleTextHtml}>
              <Translate id="homepage.hero.title" description="Home page hero title, can contain simple html tags"
                values={{
                  enerji: (<b><Translate>Enerji</Translate></b>),
                  proses: (<b><Translate>Proses</Translate></b>),
                  uretim: (<b><Translate>Üretim</Translate></b>),
                  maint: (<b><Translate>Bakım</Translate></b>),
                  content: (<b className={styles.heroContent}><Translate>Veri Toplama ve Raporlama Sistemi</Translate></b>)
              }}>
                {`DataRapor  {content} `}
              </Translate>
            </span>
          </h1>
          <div className={styles.indexCtas}>
            <Link className={styles.indexCtasGetStartedButton} to={useBaseUrl('/')}>
              <Translate>Docs</Translate>
            </Link>
            <Link className={clsx('margin-left--md', styles.indexTryMeButton)} to="https://demo.datarapor.com/">
              <Translate>Demo</Translate>
            </Link>
          </div>
        </div>
      </div>
   
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
