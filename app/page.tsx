"use client";

import { useEffect, useState } from "react";

type Language = "en" | "fr";
type Stage = "welcome" | "garden" | "riddle" | "bouquet" | "letter" | "ending";

const copy = {
  en: {
    languageLabel: "Language",
    eyebrow: "A private little world",
    welcomeTitle: "A Little Universe for Hajar",
    welcomeText: "A quiet garden, a few little mysteries, and a letter that has been waiting just for you.",
    enter: "Enter your universe",
    madeFor: "Made with care for",
    gardenTitle: "Follow the little lights",
    gardenText: "Every star in this garden holds a small reminder. Open all three, then follow the path ahead.",
    stars: [
      { title: "Your curiosity", text: "I love that your mind is always exploring, questioning, and finding joy in the little things." },
      { title: "Your courage", text: "May you always have the courage to chase what makes you feel alive, even when the path is new." },
      { title: "Your kind of calm", text: "You do not have to be loud to leave a beautiful mark. Some of the brightest things are gentle." }
    ],
    opened: "Discovered",
    openStar: "Open",
    openStarFr: "Ouvrir",
    gardenProgress: "lights discovered",
    gardenContinue: "Follow the starlight",
    riddleEyebrow: "A little key, made of numbers",
    riddleTitle: "A riddle for that curious mind",
    riddleText: "A tiny equation is guarding the next part of your journey. Find its two roots.",
    equationLabel: "Solve this",
    choices: ["1 and 6", "2 and 3", "3 and 4"],
    wrongAnswer: "Not quite. Take another look; the answer is closer than it seems.",
    correctAnswer: "Exactly. The next little wonder is yours to uncover.",
    unlock: "Unlock the next page",
    bouquetEyebrow: "A little something for you",
    bouquetTitle: "A bouquet that speaks softly",
    bouquetText: "For the gentleness you bring into the world, and for all the beautiful things still waiting to find you.",
    openLetter: "Open your letter",
    letterEyebrow: "A few words from the heart",
    letterTitle: "Dear Hajar,",
    letterParagraphs: [
      "I wanted to make you a small place in the world that feels peaceful, warm, and a little magical. A place that reminds you how much light you carry, even on the days you do not notice it.",
      "I admire your curious mind, your strength, and the way you find your own joy in the things you love. I hope you keep making room for new adventures, big dreams, and all the little moments that make life feel like yours.",
      "Whatever the road brings, I hope you never forget that you deserve gentleness, peace, and beautiful beginnings. I believe in you, and I will be cheering you on, one step at a time."
    ],
    signoff: "With love,",
    sender: "Fahd",
    lastButton: "There is one last secret",
    endingEyebrow: "The universe is yours",
    endingTitle: "Keep finding your wonder",
    endingText: "May there always be a sea to wander beside, water to dive into, open skies to ride beneath, and new challenges that make your eyes light up. This is only one little page in all the beautiful chapters still ahead of you.",
    finalLine: "You deserve a life that feels as lovely as the things you love.",
    restart: "Return to the beginning",
    footer: "A little universe, made with care.",
    progress: ["The garden", "The riddle", "The bouquet", "The letter", "The secret"]
  },
  fr: {
    languageLabel: "Langue",
    eyebrow: "Un petit monde rien qu'à toi",
    welcomeTitle: "Un petit univers pour Hajar",
    welcomeText: "Un jardin tranquille, quelques mystères et une lettre qui attendait simplement d'être découverte.",
    enter: "Entrer dans ton univers",
    madeFor: "Créé avec tendresse pour",
    gardenTitle: "Suis les petites lumières",
    gardenText: "Chaque étoile de ce jardin cache un petit mot. Découvre les trois, puis poursuis ton chemin.",
    stars: [
      { title: "Ta curiosité", text: "J'aime ton esprit curieux, toujours prêt à explorer, à poser des questions et à trouver de la joie dans les petits détails." },
      { title: "Ton courage", text: "J'espère que tu garderas toujours le courage de poursuivre ce qui te fait vibrer, même lorsque le chemin est nouveau." },
      { title: "Ta douceur", text: "Tu n'as pas besoin de faire du bruit pour laisser une belle empreinte. Certaines des plus grandes lumières sont douces." }
    ],
    opened: "Découvert",
    openStar: "Ouvrir",
    openStarFr: "Ouvrir",
    gardenProgress: "lumières découvertes",
    gardenContinue: "Suivre la lumière",
    riddleEyebrow: "Une petite clé faite de nombres",
    riddleTitle: "Une énigme pour ton esprit curieux",
    riddleText: "Une petite équation protège la suite de ton aventure. Trouve ses deux racines.",
    equationLabel: "À résoudre",
    choices: ["1 et 6", "2 et 3", "3 et 4"],
    wrongAnswer: "Pas tout à fait. Regarde encore ; la réponse est plus proche qu'il n'y paraît.",
    correctAnswer: "Exactement. La prochaine petite merveille n'attend que toi.",
    unlock: "Découvrir la suite",
    bouquetEyebrow: "Une petite attention pour toi",
    bouquetTitle: "Un bouquet tout en douceur",
    bouquetText: "Pour la douceur que tu apportes au monde et pour toutes les belles choses qui attendent encore de te rencontrer.",
    openLetter: "Ouvrir ta lettre",
    letterEyebrow: "Quelques mots du cœur",
    letterTitle: "Chère Hajar,",
    letterParagraphs: [
      "Je voulais créer pour toi un petit endroit dans ce monde, paisible, chaleureux et un peu magique. Un endroit qui te rappelle toute la lumière que tu portes, même les jours où tu ne la remarques pas.",
      "J'admire ta curiosité, ta force et cette façon bien à toi de trouver de la joie dans les choses que tu aimes. J'espère que tu laisseras toujours de la place aux nouvelles aventures, aux grands rêves et à tous ces petits instants qui rendent la vie unique.",
      "Quel que soit le chemin, n'oublie jamais que tu mérites la douceur, la paix et de magnifiques nouveaux départs. Je crois en toi et je t'encouragerai, un pas après l'autre."
    ],
    signoff: "Avec affection,",
    sender: "Fahd",
    lastButton: "Il reste un dernier secret",
    endingEyebrow: "Cet univers t'appartient",
    endingTitle: "Continue à t'émerveiller",
    endingText: "Je te souhaite toujours une mer près de laquelle rêver, de l'eau dans laquelle plonger, de grands horizons à parcourir à cheval et de nouveaux défis qui feront briller tes yeux. Ceci n'est qu'une petite page parmi tous les beaux chapitres qui t'attendent.",
    finalLine: "Tu mérites une vie aussi belle que les choses que tu aimes.",
    restart: "Revenir au début",
    footer: "Un petit univers, créé avec tendresse.",
    progress: ["Le jardin", "L'énigme", "Le bouquet", "La lettre", "Le secret"]
  }
} as const;

const starSymbols = ["01", "02", "03"];

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [stage, setStage] = useState<Stage>("welcome");
  const [revealedStars, setRevealedStars] = useState<number[]>([]);
  const [answer, setAnswer] = useState<number | null>(null);

  const t = copy[language];
  const stages: Stage[] = ["garden", "riddle", "bouquet", "letter", "ending"];
  const currentProgress = stages.indexOf(stage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  function revealStar(index: number) {
    setRevealedStars((current) => current.includes(index) ? current : [...current, index]);
  }

  function restart() {
    setStage("welcome");
    setRevealedStars([]);
    setAnswer(null);
  }

  return (
    <main className="universe-page">
      <div className="universe-sky" aria-hidden="true">
        <span className="sky-glow sky-glow-one" />
        <span className="sky-glow sky-glow-two" />
        <span className="sky-moon" />
        <span className="sky-star sky-star-one" />
        <span className="sky-star sky-star-two" />
        <span className="sky-star sky-star-three" />
        <span className="sky-star sky-star-four" />
        <span className="sky-star sky-star-five" />
        <span className="sky-star sky-star-six" />
        <span className="sky-star sky-star-seven" />
        <span className="sky-star sky-star-eight" />
      </div>

      <header className="universe-header">
        <a className="universe-mark" href="#top" onClick={(event) => { event.preventDefault(); restart(); }}>
          <span className="mark-orbit" aria-hidden="true">✦</span>
          <span>HAJAR&apos;S UNIVERSE</span>
        </a>
        <div className="language-switch" aria-label={t.languageLabel}>
          <button className={language === "en" ? "language-active" : ""} onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
          <span aria-hidden="true">/</span>
          <button className={language === "fr" ? "language-active" : ""} onClick={() => setLanguage("fr")} aria-pressed={language === "fr"}>FR</button>
        </div>
      </header>

      {stage !== "welcome" && (
        <nav className="journey-progress" aria-label="Journey progress">
          {t.progress.map((label, index) => (
            <span key={label} className={"progress-step " + (currentProgress >= index ? "progress-complete" : "")}>
              <i aria-hidden="true" />
              <span>{label}</span>
            </span>
          ))}
        </nav>
      )}

      <section className={"story-stage stage-" + stage} id="top">
        {stage === "welcome" && (
          <div className="welcome-content">
            <p className="eyebrow"><span className="eyebrow-line" />{t.eyebrow}<span className="eyebrow-line" /></p>
            <div className="welcome-orb" aria-hidden="true">
              <span className="orb-halo" />
              <span className="orb-ring orb-ring-one" />
              <span className="orb-ring orb-ring-two" />
              <span className="orb-light" />
              <span className="orb-shine" />
            </div>
            <p className="dedication">{t.madeFor} <strong>Hajar</strong></p>
            <h1>{t.welcomeTitle}</h1>
            <p className="stage-description welcome-description">{t.welcomeText}</p>
            <button className="primary-button" onClick={() => setStage("garden")}>
              {t.enter}<span aria-hidden="true">→</span>
            </button>
            <p className="soft-caption">F A H D <span>·</span> A LITTLE WORLD FOR YOU</p>
          </div>
        )}

        {stage === "garden" && (
          <div className="stage-card garden-content">
            <p className="eyebrow"><span className="eyebrow-line" />01 — THE GARDEN<span className="eyebrow-line" /></p>
            <h1>{t.gardenTitle}</h1>
            <p className="stage-description">{t.gardenText}</p>
            <div className="constellation-grid">
              {t.stars.map((star, index) => (
                <button
                  key={star.title}
                  className={"constellation-card " + (revealedStars.includes(index) ? "constellation-open" : "")}
                  onClick={() => revealStar(index)}
                  aria-expanded={revealedStars.includes(index)}
                >
                  <span className="constellation-number">{starSymbols[index]}</span>
                  <span className="constellation-star" aria-hidden="true">✦</span>
                  <span className="constellation-title">{star.title}</span>
                  <span className="constellation-copy">{revealedStars.includes(index) ? star.text : t.opened + " " + starSymbols[index]}</span>
                  <span className="constellation-hint">{revealedStars.includes(index) ? "—" : t.openStar}</span>
                </button>
              ))}
            </div>
            <p className="progress-note">{revealedStars.length} / 3 {t.gardenProgress}</p>
            <button className="primary-button" disabled={revealedStars.length !== 3} onClick={() => setStage("riddle")}>
              {t.gardenContinue}<span aria-hidden="true">→</span>
            </button>
          </div>
        )}

        {stage === "riddle" && (
          <div className="stage-card riddle-content">
            <p className="eyebrow"><span className="eyebrow-line" />02 — THE LITTLE RIDDLE<span className="eyebrow-line" /></p>
            <div className="riddle-orbit" aria-hidden="true"><span>x</span><i>²</i></div>
            <h1>{t.riddleTitle}</h1>
            <p className="stage-description">{t.riddleText}</p>
            <div className="equation-panel">
              <span>{t.equationLabel}</span>
              <strong>x<sup>2</sup> − 5x + 6 = 0</strong>
            </div>
            <div className="answer-grid">
              {t.choices.map((choice, index) => (
                <button key={choice} className={"answer-choice " + (answer === index ? "answer-selected" : "") + (answer === 1 && index === 1 ? " answer-correct" : "")} onClick={() => setAnswer(index)} aria-pressed={answer === index}>
                  <span className="choice-letter">{String.fromCharCode(65 + index)}</span>
                  {choice}
                </button>
              ))}
            </div>
            {answer !== null && (
              <p className={"answer-feedback " + (answer === 1 ? "feedback-correct" : "feedback-wrong")} role="status">
                {answer === 1 ? t.correctAnswer : t.wrongAnswer}
              </p>
            )}
            <button className="primary-button" disabled={answer !== 1} onClick={() => setStage("bouquet")}>
              {t.unlock}<span aria-hidden="true">→</span>
            </button>
          </div>
        )}

        {stage === "bouquet" && (
          <div className="stage-card bouquet-content">
            <p className="eyebrow"><span className="eyebrow-line" />03 — A GIFT FOR YOU<span className="eyebrow-line" /></p>
            <div className="bouquet-frame">
              <span className="bouquet-glow" />
              <span className="floating-petal petal-one" />
              <span className="floating-petal petal-two" />
              <span className="floating-petal petal-three" />
              <img src="/Quiet Love Bouquet.png" alt="A soft pink bouquet of flowers" className="bouquet-art" />
            </div>
            <h1>{t.bouquetTitle}</h1>
            <p className="stage-description">{t.bouquetText}</p>
            <button className="primary-button" onClick={() => setStage("letter")}>
              {t.openLetter}<span aria-hidden="true">→</span>
            </button>
          </div>
        )}

        {stage === "letter" && (
          <div className="letter-content">
            <p className="eyebrow"><span className="eyebrow-line" />04 — THE LETTER<span className="eyebrow-line" /></p>
            <div className="letter-card">
              <div className="letter-top-rule"><span>✦</span></div>
              <p className="letter-kicker">{t.letterEyebrow}</p>
              <h1>{t.letterTitle}</h1>
              {t.letterParagraphs.map((paragraph) => <p className="letter-paragraph" key={paragraph}>{paragraph}</p>)}
              <div className="letter-signoff">
                <span>{t.signoff}</span>
                <strong>{t.sender}</strong>
              </div>
              <div className="letter-seal" aria-hidden="true">F</div>
            </div>
            <button className="primary-button" onClick={() => setStage("ending")}>
              {t.lastButton}<span aria-hidden="true">→</span>
            </button>
          </div>
        )}

        {stage === "ending" && (
          <div className="ending-content">
            <div className="ending-orbit" aria-hidden="true">
              <span className="ending-star ending-star-a">✦</span>
              <span className="ending-star ending-star-b">✧</span>
              <span className="ending-star ending-star-c">✦</span>
              <span className="ending-center">H</span>
            </div>
            <p className="eyebrow"><span className="eyebrow-line" />05 — THE SECRET<span className="eyebrow-line" /></p>
            <h1>{t.endingTitle}</h1>
            <p className="stage-description ending-description">{t.endingText}</p>
            <p className="ending-final-line">{t.finalLine}</p>
            <button className="quiet-button" onClick={restart}>{t.restart}</button>
          </div>
        )}
      </section>

      <footer className="universe-footer">
        <span>{t.footer}</span>
        <span className="footer-star" aria-hidden="true">✦</span>
        <span>F.</span>
      </footer>
    </main>
  );
}
