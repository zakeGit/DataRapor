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
      <Translate
        id="homepage.features.easy-to-use.title"
        description="Title of feature of Easy to use on the home page">
           
        
          Enerji Veri Toplama
      
      </Translate>
    ),


     
    imageUrl: 'img/undraw_just_browsing.svg',
    
    description: (
      <Translate
        id="homepage.features.easy-to-use"
        description="Feature easy to use">
         Enerji analizörleri, elektrik sayaçları vb. cihazların enerji parametrelerinin toplandığı, faturalandırıldığı yazılımlar.
      </Translate>
    ),
  },

 

 


  {
    title: (
      <Translate
        id="homepage.features.modern-ui.title"
        description="Title of feature of Modern UI on the home page">
        Proses Veri Toplama
      </Translate>
    ),
    imageUrl: 'img/undraw_responsive.svg',
    description: (
      <Translate
        values={{angularJS: (<code>AngularJS</code>), reactJS: (<code>ReactJS</code>)}}
        id="homepage.features.modern-ui"
        description="Modern UI">
        {`Sıcaklık,basınç,nem,deb,hava hızı,TOC,iletkenlik,pH,O2,CO,toz vb. proses verilerinin kayıt altına alındığı,raporlandığı ve analiz edildiği veri toplama yazılımları.`}
      </Translate>
    ),
  },




  {
    title: (
      <Translate
        id="homepage.features.pluggable-extensible.title"
        description="Title of feature of pluggable and extensible on the home page">
        Üretim Veri Toplama
      </Translate>
    ),
    imageUrl: 'img/undraw_switches.svg',
    description: (
      <Translate
        values={{starters: (<code>starters</code>)}}
        id="homepage.features.pluggable-extensible"
        description="Feature Pluggable and Extensible">
        {`Fabrikanızda üretilen ürün miktarlarının anlık veya vardiya bazlı kayıt altına alındığı, raporlandığı ve faturalandığı yazılımlar.`}
      </Translate>
    ),
  },


  {
    title: (
      <Translate
        id="homepage.features.pluggable-extensible.title"
        description="Title of feature of pluggable and extensible on the home page">
        Bakım Yönetim Sistemi-MMS
      </Translate>
    ),
    imageUrl: 'img/undraw_switches.svg',
    description: (
      <Translate
        values={{starters: (<code>starters</code>)}}
        id="homepage.features.pluggable-extensible"
        description="Feature Pluggable and Extensible">
        {`Endüstriyel tesislerdeki ekipmanların periyodik bakımını yönetmek ve izlemek için kullanılan yazılımlardır.`}
      </Translate>
    ),
  },



  {
    title: (
      <Translate
        id="homepage.features.connect-information.title"
        description="Title of feature of Connect your information on the home page">
        Maliyet Hesapları
      </Translate>
    ),
    imageUrl: 'img/undraw_online_connection.svg',
    description: (
      <Translate
        id="homepage.features.connect-information"
        description="Feature Connect your information">
        İşletmenizde yer alan enerji, buhar, basınç gibi parametrelerin maliyetlerini hesaplayabilir.</Translate>
    ),
  },
  {
    title:  (
      <Translate
        id="homepage.features.customize-easy.title"
        description="Title of feature of Customize easy on the home page">
        Entegrasyon
      </Translate>
    ),
    imageUrl: 'img/undraw_add_color.svg',
    description: (
      <Translate
        id="homepage.features.customize-easy"
        description="Feature Customize easy">
        Hesaplanan maliyetleri muhasebe programlarınıza yada SIP, ERP gibi kurumsal yönetim sistemlerine entegre edebilir.
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.powered-by.title"
        description="Title of feature of Powered By on the home page">
        
ISO 50001 Enerji Yönetimi
      </Translate>
    ),
    imageUrl: 'img/undraw_code_review.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="homepage.features.powered-by"
        description="Powered by Spring Boot with AngularJS">
        {`ISO 50001 enerji yönetimi sistemini destekler, kanunen zorunlu enerji etüt raporlarının oluşturulmasına yardımcı olur.`}
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.powered-by.title"
        description="Title of feature of Powered By on the home page">
        Uyarı
      </Translate>
    ),
    imageUrl: 'img/undraw_code_review.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="homepage.features.powered-by"
        description="Powered by Spring Boot with AngularJS">
        {`Tüketimleriniz de bir anormallik olma durumunda, sizleri uyarır, SMS veya mail olarak sizleri bilgilendirir.`}
      </Translate>
    ),
  },

  {
    title: (
      <Translate
        id="homepage.features.powered-by.title"
        description="Title of feature of Powered By on the home page">
        Karşılaştırma
      </Translate>
    ),
    imageUrl: 'img/undraw_code_review.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="homepage.features.powered-by"
        description="Powered by Spring Boot with AngularJS">
        {`İşletmenizde aynı türde olan makina veya sistemleri vardiya yada dönem bazlı verilerini pasta dilimli grafiklerle karşılatırıp size fikir verir.`}
      </Translate>
    ),
  },




  {
    title: (
      <Translate
        id="homepage.features.powered-by.title"
        description="Title of feature of Powered By on the home page">
        Faturalandırma
      </Translate>
    ),
    imageUrl: 'img/undraw_code_review.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="homepage.features.powered-by"
        description="Powered by Spring Boot with AngularJS">
        {`İşletmenizin bölüm veya lokasyon bazlı tüketimlerini hesaplayarak iç fatura kesmenize olanak sağlar.`}
      </Translate>
    ),
  },


  





  {
    title: (
      <Translate
        id="homepage.features.powered-by.title"
        description="Title of feature of Powered By on the home page">
        Haberleşme
      </Translate>
    ),
    imageUrl: 'img/undraw_code_review.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="homepage.features.powered-by"
        description="Powered by Spring Boot with AngularJS">
        {`Modbus TCP/IP ,Modbus RTU, Profinet, Profibus gibi dijital haberleşme protokolleri desteklenirken bunun yanı sıra Pulse, 4-20mA ve 0-10V çıkışlı cihazlarda sistem tarafından desteklenir. Ayrıca OPC, TCP, UDP soket arabirimlerini sisteme entegre edebilirsiniz.`}
      </Translate>
    ),
  },



  {
    title: (
      <Translate
        id="homepage.features.powered-by.title"
        description="Title of feature of Powered By on the home page">
        Entegrasyon
      </Translate>
    ),
    imageUrl: 'img/undraw_code_review.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="homepage.features.powered-by"
        description="Powered by Spring Boot with AngularJS">
        {`İşletmenizin kurumsal bilgi yönetim sistemi veya muhasebe programlarına doğrudan yada dolaylı olarak entegre olabilen endüstiri 4.0 yazılımıdır. Web Api desteği, veri tabanı paylaşımı, Excell , MQTT , Modbus Server altyapısına sahiptir.`}
      </Translate>
    ),
  },



  {
    title: (
      <Translate
        id="homepage.features.powered-by.title"
        description="Title of feature of Powered By on the home page">
        Yüksek Çözünürlüklü Veri
      </Translate>
    ),
    imageUrl: 'img/undraw_code_review.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="homepage.features.powered-by"
        description="Powered by Spring Boot with AngularJS">
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
        id="homepage.features.powered-by.title"
        description="Title of feature of Powered By on the home page">
        Grafiksel Analiz
      </Translate>
    ),
    imageUrl: 'img/undraw_code_review.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="homepage.features.powered-by"
        description="Powered by Spring Boot with AngularJS">
        {`DataRapor®️ ile tüm enerji üretim ve tüketim parametrelerinizin grafiksel analizini geçmişe dönük olarak saatlik, günlük, aylık bazda yapabilir, gelişmiş export seçenekleri ile istediğiniz platformlarda kullanabilirsiniz.`}
      </Translate>
    ),
  },




  {
    title: (
      <Translate
        id="homepage.features.powered-by.title"
        description="Title of feature of Powered By on the home page">
       Rapor Ve Fatura
      </Translate>
    ),
    imageUrl: 'img/undraw_code_review.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="homepage.features.powered-by"
        description="Powered by Spring Boot with AngularJS">
        {`DataRapor®️ ile dilediğiniz şekil ve formatta dizayn edilen rapor ve faturalar tek tuşla saatlik, günlük, haftalık yada aylık bazda hizmetinize sunulur veya sizin belirlediğiniz kişilere otomatik olarak mail atılır.`}
      </Translate>
    ),
  },

  {
    title: (
      <Translate
        id="homepage.features.powered-by.title"
        description="Title of feature of Powered By on the home page">
       Alarm Ve Uyarı
      </Translate>
    ),
    imageUrl: 'img/undraw_code_review.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="homepage.features.powered-by"
        description="Powered by Spring Boot with AngularJS">
        {`Sistemde tanımlı herhangi bir parametreye alarm tanımlanabilir ve tanımlı her bir alarm için limitler, alarm bekleme süreleri eklenebilir ya da değiştirilebilir.Alarm durumunda DataRapor®️, istenen yetkili gruplarına sms ve mail gönderir.`}
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
            <Link className={styles.indexCtasGetStartedButton} to={useBaseUrl('docs/')}>
              <Translate>Göz At</Translate>
            </Link>
            <Link className={clsx('margin-left--md', styles.indexTryMeButton)} to="http://demo.aweframework.com">
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
