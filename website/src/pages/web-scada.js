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
        Kolay Kullanim
      </Translate>
    ),
    imageUrl: 'img/undraw_just_browsing.svg',
    description: (
      <Translate
        id="homepage.features.easy-to-use"
        description="Feature easy to use">
         DataRapor®, web tabalı arayüzü ve mobil uygulamaları ile eş zamanlı olarak bir çok kullanıcıya hizmet verir.
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.modern-ui.title"
        description="Title of feature of Modern UI on the home page">
        Modern UI
      </Translate>
    ),
    imageUrl: 'img/undraw_responsive.svg',
    description: (
      <Translate
        values={{angularJS: (<code>AngularJS</code>), reactJS: (<code>ReactJS</code>)}}
        id="homepage.features.modern-ui"
        description="Modern UI">
        {`All AWE web components let you design modern and responsive user interfaces using a declarative API.
        Works with {angularJS} and {reactJS}.`}
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.pluggable-extensible.title"
        description="Title of feature of pluggable and extensible on the home page">
        Pluggable and Extensible
      </Translate>
    ),
    imageUrl: 'img/undraw_switches.svg',
    description: (
      <Translate
        values={{starters: (<code>starters</code>)}}
        id="homepage.features.pluggable-extensible"
        description="Feature Pluggable and Extensible">
        {`Extend or customize all AWE features. The Spring Boot {starters} design lets you to enable the modules and features that you need.`}
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.connect-information.title"
        description="Title of feature of Connect your information on the home page">
        Connect your information
      </Translate>
    ),
    imageUrl: 'img/undraw_online_connection.svg',
    description: (
      <Translate
        id="homepage.features.connect-information"
        description="Feature Connect your information">
        Bind your data to web forms easily. AWE allows to connect to different data sources
        like SQL and NoSQL databases, Rest APIs, JavaBeans, etc.
      </Translate>
    ),
  },
  {
    title:  (
      <Translate
        id="homepage.features.customize-easy.title"
        description="Title of feature of Customize easy on the home page">
        Easy to customize
      </Translate>
    ),
    imageUrl: 'img/undraw_add_color.svg',
    description: (
      <Translate
        id="homepage.features.customize-easy"
        description="Feature Customize easy">
        AWE has multiple preconfigured themes and multi-language support.
        You can add custom CSS according to your needs.
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.powered-by.title"
        description="Title of feature of Powered By on the home page">
        Powered by Spring Boot with AngularJS
      </Translate>
    ),
    imageUrl: 'img/undraw_code_review.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="homepage.features.powered-by"
        description="Powered by Spring Boot with AngularJS">
        {`Uses Spring 5 and Spring Boot 2. {autowired} is available for AWE components and layouts.`}
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
                  content: (<b className={styles.heroContent}><Translate>Web Scada</Translate></b>)
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
