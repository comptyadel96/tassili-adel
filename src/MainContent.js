import React, { useRef } from "react";
import "./main.css";
function MainContent() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);
  window.onscroll = () => {
    if (window.scrollY >= section1Ref.current.offsetTop - 400) {
      section1Ref.current.classList.add("active");
      imgRef1.current.classList.add("active-img");
    } else {
      section1Ref.current.classList.remove("active");
      imgRef1.current.classList.remove("active-img");
    }
    if (window.scrollY >= section2Ref.current.offsetTop - 400) {
      section2Ref.current.classList.add("active2");
      imgRef2.current.classList.add("active-img");
    } else {
      section2Ref.current.classList.remove("active2");
      imgRef2.current.classList.remove("active-img");
    }
    if (window.scrollY >= section3Ref.current.offsetTop - 400) {
      section3Ref.current.classList.add("active3");
      imgRef3.current.classList.add("active-img");
    } else {
      section3Ref.current.classList.remove("active3");
      imgRef3.current.classList.remove("active-img");
    }
  };

  return (
    <div className="main-container">
      {/* section1 geographie */}
      <section className="section" ref={section1Ref}>
        <img
          alt="tassili01"
          src="/images/tassili-grotte.jpg"
          className="main-img"
          ref={imgRef1}
        />
        <h1 className="main-title">Géographie</h1>
        <p className="section-text">
          Ce haut plateau aride se trouve à plus de 1 000 mètres d'altitude et
          s'étend sur 50 à 60 km d'est en ouest et 800 km du nord au sud, soit
          une superficie de près de 120 000 km2. Sur toute sa surface se
          dressent des formations rocheuses créées par l'érosion, émergeant des
          dunes de sable, qui évoquent de loin les ruines de villes antiques. Le
          tassili n’Ajjer culmine à 2 158 mètres d'altitude à l'Adrar Afao et
          émerge en hautes falaises à 1 500 mètres en moyenne au-dessus des ergs
          de Mourzouq et d'Oubari à l'est et d'Admer dans le Ténéré au sud1. Au
          nord, ce haut plateau se perd dans les dunes d'Issaouane et de
          Bourharet. Le relief du tassili n’Ajjer est particulièrement tourmenté
          : les immenses plaines rocheuses qui laissent parfois la place à des «
          forêts » de monolithes sont creusées d’akbas (trous dans les
          escarpements qui ne sont accessibles qu'à pied ou à dos de dromadaire)
          et de multiples failles et canyons recelant parfois une guelta
          alimentée par les rares et violents orages qui ravinent le désert tous
          les deux ou trois ans1. Le massif est habité par les Touaregs du
          groupe Kel Ajjer. Sa ville principale est Djanet, une petite oasis
          située en bordure occidentale de la région.
        </p>
      </section>
      {/* section2 Faune et flore */}
      <section className="section" ref={section2Ref}>
        <img
          alt="tassili01"
          src="/images/tassili-roche.jpg"
          className="main-img"
          ref={imgRef2}
        />
        <h1 className="main-title">Faune et flore</h1>
        <p className="section-text">
          Entre 17 000 et 12 000 ans avant le présent, le tassili n’Ajjer était
          recouvert d'une végétation verdoyante, qui évolua progressivement vers
          la savane, puis la steppe de type sahelien, avant de devenir un désert
          il y a 7 000 ans avant le présent3. Il en demeure quelques
          espèces-reliques comme des myrtes à proximité des trous d'eau et des
          cyprès du Tassili (tarout) dont il subsiste une centaine de spécimens
          près de Tamrit1. De cette époque subsistent également le mouflon à
          manchettes et quelques survivants d'une faune aquatique jadis variée :
          des poissons dans certaines gueltas, des crevettes dans l'oasis de
          Djanet et même des crocodiles, découverts en 1924 : les crocodiles de
          l'Imhirou
        </p>
      </section>
      {/* section3 Histoire */}
      <section className="section" ref={section3Ref}>
        <img alt="tassili01" src="/images/tassili03.jpg" className="main-img" ref={imgRef3} />
        <h1 className="main-title">Histoire</h1>
        <p className="section-text">
          Le parc culturel du Tassili (72 000 km2) est inscrit depuis 1982 sur
          la liste du patrimoine mondial de l'UNESCO4 et classé réserve de
          biosphère depuis 19865. Des animaux en voie de disparition tels que le
          mouflon et des gazelles y ont trouvé refuge. Il est considéré aussi
          comme l'un des plus grands et anciens « musées rupestres à ciel ouvert
          » du monde, au même titre que les fresques des aborigènes d'Australie
          ou des khoïsan de Namibie. Il abrite notamment les gravures rupestres
          de l'Oued Djerat et sur le celles du plateau de Sefar datant d'environ
          9 à 10 000 ans avant le présent6,7, rappelant qu'à l'époque où le
          Sahara était verdoyant et fertile, des populations de chasseurs et de
          pasteurs y vivaient : nombreux sont les dessins représentant des
          troupeaux de bovins menés par des bergers. Leurs œuvres d'art figurent
          des scènes de chasse, de danse et d'affrontements, ainsi que de
          nombreux restes de poteries ou de pierres taillées. Les peintures
          rupestres ont été décrites par Henri Lhote8,9 dont les travaux ont été
          d'une part considérés, depuis l'indépendance de l'Algérie, comme un
          pillage et une dégradation du site10 et d'autre part utilisés par
          l'auteur sensationnaliste Erich von Däniken11, pour étayer sa théorie
          des anciens astronautes qui interprète les masques rituels africains
          (en)11 comme des combinaisons d'extraterrestres12,13
        </p>
      </section>
    </div>
  );
}

export default MainContent;
