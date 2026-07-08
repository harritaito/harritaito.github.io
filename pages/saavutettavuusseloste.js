import React from "react";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Row from "../components/Row";
import HighlightUnderline from "../components/design-system/HighlightUnderline";
import { colors } from "../components/design-system/tokens";

const colStyle = "col-xs-12 col-sm-10 col-md-9 col-lg-8 col-xl-7";

const Saavutettavuusseloste = () => (
  <div className="Accessibility container">
    <Navbar nextProjectLink={null} nextProjectName={null} color={"grey"} />

    <Row
      content={
        <div className={`${colStyle} accessibility-intro`} lang="fi">
          <h1>Saavutettavuusseloste</h1>
          <p>
            Tämä saavutettavuusseloste koskee <strong>harritaito.com</strong>
            -sivustoa. Henkilökohtaisena portfoliona sivusto ei kuulu
            digitaalisten palvelujen tarjoamisesta annetun lain (306/2019)
            soveltamisalaan — seloste julkaistaan vapaaehtoisesti lain
            edellyttämää mallia noudattaen, koska saavutettavuudella on väliä
            joka tapauksessa.
          </p>
          <p>
            Seloste on laadittu 8.7.2026, ja se perustuu omaan arviooni
            sivustosta.
          </p>
          <p className="accessibility-language-link">
            <Link href="/accessibility" legacyBehavior>
              <a>
                Read this statement in English
                <HighlightUnderline />
              </a>
            </Link>
          </p>
        </div>
      }
    />

    <Row
      content={
        <section className={`${colStyle} accessibility-section`} lang="fi">
          <h2>Vaatimustenmukaisuustilanne</h2>
          <p>
            Sivusto täyttää suurelta osin WCAG 2.1 -ohjeistuksen A- ja AA-tason
            vaatimukset. Tiedossa olevat puutteet on lueteltu alla.
          </p>
        </section>
      }
    />

    <Row
      content={
        <section className={`${colStyle} accessibility-section`} lang="fi">
          <h2>Ei-saavutettava sisältö</h2>
          <p>Seuraava sisältö ei vielä täytä vaatimuksia kaikilta osin:</p>
          <ul>
            <li>
              Osa ulkoisista linkeistä avautuu uuteen välilehteen ilman
              ennakkovaroitusta.
            </li>
            <li>
              Projektisivut ovat kuvapainotteisia, ja joidenkin vanhempien
              kuvien tekstivastineet ovat ohuempia kuin pitäisi. (WCAG 1.1.1
              Ei-tekstuaalinen sisältö)
            </li>
          </ul>
          <p>
            Muilta osin sivusto tähtää vahvaan perustasoon: semanttiset otsikot
            ja maamerkit, näkyvä näppäimistökohdistus, luotettavat kontrastit
            sekä vaaleassa että tummassa teemassa, ja animaatiot kunnioittavat
            laitteesi liikkeen vähentämisen asetusta.
          </p>
        </section>
      }
    />

    <Row
      content={
        <section className={`${colStyle} accessibility-section`} lang="fi">
          <h2>Palaute ja yhteystiedot</h2>
          <p>
            Jos huomaat sivustolla saavutettavuusongelman tai et pääse käsiksi
            tarvitsemaasi sisältöön, haluan kuulla siitä. Minut tavoittaa{" "}
            <a
              href={"https://linkedin.com/in/harrihalonen"}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedInissä
              <HighlightUnderline />
            </a>{" "}
            tai sähköpostilla — etunimeni, tässä verkkotunnuksessa. Pyrin
            vastaamaan 14 päivän kuluessa.
          </p>
        </section>
      }
    />

    <Row
      content={
        <section className={`${colStyle} accessibility-section`} lang="fi">
          <h2>Valvontaviranomainen</h2>
          <p>
            Suomessa digipalvelulain soveltamisalaan kuuluvia verkkosivustoja
            valvoo Liikenne- ja viestintävirasto Traficom. Koska tämä
            henkilökohtainen sivusto ei kuulu lain soveltamisalaan,
            valvontamenettely ei koske sitä — palaute tulee suoraan minulle,
            ja korjaan löydetyt puutteet. Traficomin ohjeistus vaatimuksista
            löytyy osoitteesta{" "}
            <a
              href={"https://www.saavutettavuusvaatimukset.fi"}
              target="_blank"
              rel="noopener noreferrer"
            >
              saavutettavuusvaatimukset.fi
              <HighlightUnderline />
            </a>
            .
          </p>
        </section>
      }
    />

    <Footer />
    <style jsx>{`
      .Accessibility {
        padding-top: 5rem;
        padding-bottom: 2rem;
      }
      @media only screen and (max-width: 45rem) {
        .Accessibility {
          padding-top: 2rem;
        }
      }

      .accessibility-intro {
        margin-top: 1.5rem;
      }

      .accessibility-intro h1 {
        margin-bottom: 0.5rem;
      }

      .accessibility-intro p,
      .accessibility-section p,
      .accessibility-section li {
        line-height: 1.7;
      }

      .accessibility-language-link {
        margin-top: 0.5rem;
        font-size: 0.85rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .accessibility-language-link a {
        color: ${colors.textMuted};
      }

      .accessibility-section {
        margin-top: 2.5rem;
      }

      .accessibility-section h2 {
        margin: 0 0 0.5rem;
      }

      .accessibility-section ul {
        margin: 0.5rem 0 1rem;
        padding-left: 1.25rem;
      }

      .accessibility-section li {
        margin-bottom: 0.5rem;
        color: ${colors.textMuted};
      }
    `}</style>
  </div>
);

export default Saavutettavuusseloste;
