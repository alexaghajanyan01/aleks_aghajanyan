<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Armenian:wght@300;400;500;600;700;800&family=Noto+Serif+Armenian:wght@400;500;600;700;800&display=swap');


/* =========================================================
   ALEKS LUXURY HOMEPAGE
   ========================================================= */

.aleks-home {
    --gold-1: #4a2d03;
    --gold-2: #79500a;
    --gold-3: #b98524;
    --gold-4: #d8af55;
    --gold-5: #f4d98a;
    --gold-6: #fff0bb;

    --cream: #faf7ef;
    --cream-card: #fffdf8;
    --dark: #0b0a08;
    --dark-card: #14120e;

    --text: #211b10;
    --muted: #756f63;

    max-width: 1200px;
    margin: 0 auto;

    font-family:
        "Noto Sans Armenian",
        Inter,
        sans-serif;
}


/* =========================================================
   GLOBAL HOMEPAGE
   ========================================================= */

.aleks-home * {
    box-sizing: border-box;
}

.aleks-home a {
    text-decoration: none !important;
}

[data-md-color-scheme="default"] .aleks-home {
    color: var(--text);
}

[data-md-color-scheme="slate"] .aleks-home {
    color: #f5eddd;
}


/* =========================================================
   LUXURY HERO
   ========================================================= */

.aleks-hero {
    position: relative;

    min-height: 620px;

    display: grid;

    grid-template-columns:
        minmax(0, 1.15fr)
        minmax(320px, 0.85fr);

    gap: 50px;

    align-items: center;

    padding: 65px;

    margin:
        20px 0 35px;

    border-radius: 38px;

    overflow: hidden;

    background:
        linear-gradient(
            135deg,
            #fffdf7 0%,
            #f5ecd7 42%,
            #ead7a9 100%
        );

    border:
        1px solid rgba(184, 135, 36, 0.28);

    box-shadow:
        0 35px 90px rgba(76, 53, 9, 0.12);
}


[data-md-color-scheme="slate"] .aleks-hero {
    background:
        linear-gradient(
            135deg,
            #19160f 0%,
            #100f0c 48%,
            #211907 100%
        );

    border-color:
        rgba(224, 189, 105, 0.20);

    box-shadow:
        0 35px 90px rgba(0,0,0,0.38);
}


/* =========================================================
   HERO GOLD LIGHT
   ========================================================= */

.aleks-hero::before {
    content: "";

    position: absolute;

    width: 520px;
    height: 520px;

    right: -170px;
    top: -190px;

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(239, 205, 125, 0.48) 0%,
            rgba(216, 175, 85, 0.18) 38%,
            transparent 72%
        );

    pointer-events: none;
}


.aleks-hero::after {
    content: "";

    position: absolute;

    width: 380px;
    height: 380px;

    left: -220px;
    bottom: -220px;

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(184, 135, 36, 0.16),
            transparent 68%
        );

    pointer-events: none;
}


/* =========================================================
   HERO CONTENT
   ========================================================= */

.aleks-hero-content {
    position: relative;

    z-index: 5;
}


.aleks-eyebrow {
    display: inline-flex;

    align-items: center;

    gap: 9px;

    padding:
        9px 14px;

    border-radius:
        999px;

    color:
        #805b12;

    background:
        rgba(184,135,36,0.08);

    border:
        1px solid rgba(184,135,36,0.24);

    font-size:
        0.71rem;

    font-weight:
        800;

    letter-spacing:
        0.13em;

    text-transform:
        uppercase;
}


[data-md-color-scheme="slate"] .aleks-eyebrow {
    color:
        #e8c976;

    background:
        rgba(224,189,105,0.07);

    border-color:
        rgba(224,189,105,0.20);
}


.aleks-eyebrow::before {
    content: "";

    width: 7px;
    height: 7px;

    border-radius: 50%;

    background:
        linear-gradient(
            135deg,
            var(--gold-light),
            var(--gold-dark)
        );

    box-shadow:
        0 0 14px rgba(220,180,80,0.55);
}


/* =========================================================
   HERO TITLE
   ========================================================= */

.aleks-hero h1 {
    margin:
        25px 0 12px !important;

    max-width:
        760px;

    font-family:
        "Noto Serif Armenian",
        Georgia,
        serif;

    font-size:
        clamp(3.4rem, 7vw, 6.4rem) !important;

    line-height:
        0.98 !important;

    letter-spacing:
        -0.055em;

    font-weight:
        800 !important;

    color:
        #1f190d !important;
}


[data-md-color-scheme="slate"] .aleks-hero h1 {
    color:
        #f7edd9 !important;
}


/* =========================================================
   HERO SUBTITLE
   ========================================================= */

.aleks-hero h3 {
    margin:
        0 0 20px !important;

    max-width:
        720px;

    font-family:
        "Noto Serif Armenian",
        Georgia,
        serif;

    font-size:
        clamp(1.2rem, 2vw, 1.6rem) !important;

    line-height:
        1.5 !important;

    font-weight:
        600 !important;

    color:
        #7c5a18 !important;
}


[data-md-color-scheme="slate"] .aleks-hero h3 {
    color:
        #dcbc6d !important;
}


.aleks-hero-description {
    max-width:
        650px;

    margin:
        0;

    font-size:
        1.04rem;

    line-height:
        1.95;

    color:
        var(--muted);
}


[data-md-color-scheme="slate"] .aleks-hero-description {
    color:
        #aaa294;
}


/* =========================================================
   BUTTONS
   ========================================================= */

.aleks-buttons {
    display:
        flex;

    flex-wrap:
        wrap;

    gap:
        13px;

    margin-top:
        32px;
}


.aleks-button {
    display:
        inline-flex;

    align-items:
        center;

    justify-content:
        center;

    min-height:
        50px;

    padding:
        0 21px;

    border-radius:
        14px;

    font-family:
        "Noto Sans Armenian",
        Inter,
        sans-serif;

    font-size:
        0.9rem;

    font-weight:
        700;

    color:
        white !important;

    background:
        linear-gradient(
            135deg,
            #76500b,
            #c19432 48%,
            #e2c16f
        );

    box-shadow:
        0 12px 30px rgba(122,82,10,0.22);

    transition:
        transform 0.25s ease,
        box-shadow 0.25s ease;
}


.aleks-button:hover {
    transform:
        translateY(-4px);

    box-shadow:
        0 18px 38px rgba(122,82,10,0.32);
}


.aleks-button.secondary {
    color:
        #805b12 !important;

    background:
        rgba(255,255,255,0.38);

    border:
        1px solid rgba(184,135,36,0.28);

    box-shadow:
        none;
}


[data-md-color-scheme="slate"] .aleks-button.secondary {
    color:
        #e3c474 !important;

    background:
        rgba(255,255,255,0.035);

    border-color:
        rgba(224,189,105,0.20);
}


/* =========================================================
   HERO RIGHT SIDE
   ========================================================= */

.aleks-hero-visual {
    position:
        relative;

    z-index:
        3;

    min-height:
        430px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;
}


/* =========================================================
   GOLD ORBIT
   ========================================================= */

.aleks-orbit {
    position:
        absolute;

    width:
        350px;

    height:
        350px;

    border-radius:
        50%;

    border:
        1px solid rgba(157,112,24,0.35);

    transform:
        rotate(-18deg);

    animation:
        orbitFloat 8s ease-in-out infinite;
}


.aleks-orbit::before {
    content: "";

    position:
        absolute;

    inset:
        24px;

    border-radius:
        50%;

    border:
        1px solid rgba(157,112,24,0.22);
}


.aleks-orbit::after {
    content: "";

    position:
        absolute;

    width:
        10px;

    height:
        10px;

    top:
        8px;

    left:
        50%;

    border-radius:
        50%;

    background:
        var(--gold-light);

    box-shadow:
        0 0 25px rgba(232,190,91,0.85);
}


@keyframes orbitFloat {
    0%, 100% {
        transform:
            rotate(-18deg)
            scale(1);
    }

    50% {
        transform:
            rotate(-10deg)
            scale(1.035);
    }
}


/* =========================================================
   MONOGRAM
   ========================================================= */

.aleks-monogram {
    position:
        relative;

    z-index:
        4;

    width:
        220px;

    height:
        220px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    border-radius:
        50%;

    background:
        linear-gradient(
            145deg,
            #fff4c9,
            #d8b259 35%,
            #a77317 70%,
            #593500
        );

    box-shadow:
        inset 0 2px 2px rgba(255,255,255,0.65),
        0 30px 70px rgba(87,59,9,0.32);
}


.aleks-monogram::before {
    content: "";

    position:
        absolute;

    inset:
        10px;

    border-radius:
        50%;

    border:
        1px solid rgba(255,255,255,0.45);
}


.aleks-monogram span {
    position:
        relative;

    z-index:
        2;

    font-family:
        "Noto Serif Armenian",
        Georgia,
        serif;

    font-size:
        4.6rem;

    font-weight:
        800;

    color:
        #fff9e9;

    text-shadow:
        0 3px 15px rgba(75,45,0,0.32);
}


/* =========================================================
   FLOATING LABELS
   ========================================================= */

.aleks-float {
    position:
        absolute;

    padding:
        11px 15px;

    border-radius:
        14px;

    background:
        rgba(255,253,247,0.78);

    border:
        1px solid rgba(184,135,36,0.22);

    backdrop-filter:
        blur(12px);

    box-shadow:
        0 14px 35px rgba(75,55,14,0.10);

    font-size:
        0.72rem;

    font-weight:
        800;

    letter-spacing:
        0.08em;

    color:
        #76520d;
}


[data-md-color-scheme="slate"] .aleks-float {
    background:
        rgba(25,22,15,0.76);

    border-color:
        rgba(224,189,105,0.18);

    color:
        #e5c773;
}


.aleks-float.one {
    top:
        18px;

    right:
        15px;

    animation:
        floatOne 5s ease-in-out infinite;
}


.aleks-float.two {
    bottom:
        35px;

    left:
        5px;

    animation:
        floatTwo 6s ease-in-out infinite;
}


@keyframes floatOne {
    0%,100% {
        transform:
            translateY(0);
    }

    50% {
        transform:
            translateY(-10px);
    }
}


@keyframes floatTwo {
    0%,100% {
        transform:
            translateY(0);
    }

    50% {
        transform:
            translateY(10px);
    }
}


/* =========================================================
   STATS
   ========================================================= */

.aleks-stats {
    display:
        grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap:
        18px;

    margin:
        0 0 75px;
}


.aleks-stat {
    position:
        relative;

    padding:
        28px;

    border-radius:
        22px;

    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,0.88),
            rgba(245,236,215,0.82)
        );

    border:
        1px solid rgba(184,135,36,0.20);

    box-shadow:
        0 15px 40px rgba(76,54,10,0.06);

    text-align:
        center;

    overflow:
        hidden;
}


[data-md-color-scheme="slate"] .aleks-stat {
    background:
        linear-gradient(
            145deg,
            #18160f,
            #11100d
        );

    border-color:
        rgba(224,189,105,0.17);

    box-shadow:
        0 15px 40px rgba(0,0,0,0.24);
}


.aleks-stat::after {
    content: "";

    position:
        absolute;

    width:
        110px;

    height:
        110px;

    right:
        -55px;

    top:
        -55px;

    border-radius:
        50%;

    background:
        radial-gradient(
            circle,
            rgba(220,180,90,0.20),
            transparent 70%
        );
}


.aleks-stat-number {
    display:
        block;

    margin-bottom:
        7px;

    font-family:
        "Noto Serif Armenian",
        Georgia,
        serif;

    font-size:
        2.7rem;

    font-weight:
        800;

    line-height:
        1;

    color:
        #a87417;
}


[data-md-color-scheme="slate"] .aleks-stat-number {
    color:
        #e0bc68;
}


.aleks-stat-label {
    color:
        var(--muted);

    font-size:
        0.86rem;
}


[data-md-color-scheme="slate"] .aleks-stat-label {
    color:
        #9e978b;
}


/* =========================================================
   SECTION HEADER
   ========================================================= */

.aleks-section {
    margin:
        80px 0;
}


.aleks-section-head {
    display:
        flex;

    align-items:
        flex-end;

    justify-content:
        space-between;

    gap:
        25px;

    margin-bottom:
        28px;
}


.aleks-section-kicker {
    color:
        #9a6b15;

    font-size:
        0.72rem;

    font-weight:
        900;

    letter-spacing:
        0.15em;

    text-transform:
        uppercase;
}


[data-md-color-scheme="slate"] .aleks-section-kicker {
    color:
        #d5b362;
}


.aleks-section h2 {
    margin:
        8px 0 0 !important;

    font-family:
        "Noto Serif Armenian",
        Georgia,
        serif;

    font-size:
        clamp(2rem, 4vw, 3.2rem) !important;

    font-weight:
        800 !important;

    color:
        #211a0d !important;
}


[data-md-color-scheme="slate"] .aleks-section h2 {
    color:
        #f3e8d1 !important;
}


/* =========================================================
   JOURNEY SECTION
   ========================================================= */

.aleks-journey {
    display:
        grid;

    grid-template-columns:
        1fr 1fr;

    gap:
        22px;
}


.aleks-journey-copy {
    padding:
        35px;

    border-radius:
        25px;

    background:
        linear-gradient(
            145deg,
            rgba(184,135,36,0.09),
            rgba(184,135,36,0.025)
        );

    border:
        1px solid rgba(184,135,36,0.20);
}


.aleks-journey-copy p {
    margin:
        0;

    color:
        var(--muted);

    line-height:
        1.95;

    font-size:
        1rem;
}


[data-md-color-scheme="slate"] .aleks-journey-copy p {
    color:
        #aaa294;
}


/* =========================================================
   JOURNEY STEPS
   ========================================================= */

.aleks-steps {
    display:
        flex;

    flex-direction:
        column;

    gap:
        12px;
}


.aleks-step {
    display:
        grid;

    grid-template-columns:
        52px 1fr;

    gap:
        14px;

    align-items:
        center;

    padding:
        16px;

    border-radius:
        17px;

    background:
        rgba(255,255,255,0.60);

    border:
        1px solid rgba(184,135,36,0.15);
}


[data-md-color-scheme="slate"] .aleks-step {
    background:
        rgba(255,255,255,0.025);

    border-color:
        rgba(224,189,105,0.14);
}


.aleks-step-number {
    width:
        52px;

    height:
        52px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    border-radius:
        15px;

    background:
        linear-gradient(
            145deg,
            #f6d889,
            #9a6914
        );

    color:
        white;

    font-weight:
        900;
}


.aleks-step strong {
    display:
        block;

    margin-bottom:
        4px;

    font-size:
        0.95rem;

    color:
        #30250f;
}


[data-md-color-scheme="slate"] .aleks-step strong {
    color:
        #eee3ce;
}


.aleks-step span {
    color:
        var(--muted);

    font-size:
        0.83rem;
}


/* =========================================================
   EXPLORE CARDS
   ========================================================= */

.aleks-explore-grid {
    display:
        grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap:
        20px;
}


.aleks-explore-card {
    position:
        relative;

    min-height:
        260px;

    padding:
        28px;

    display:
        flex;

    flex-direction:
        column;

    justify-content:
        space-between;

    border-radius:
        25px;

    overflow:
        hidden;

    background:
        linear-gradient(
            145deg,
            #fffdf8,
            #f1e6cd
        );

    border:
        1px solid rgba(184,135,36,0.22);

    box-shadow:
        0 15px 40px rgba(71,50,10,0.065);

    transition:
        transform 0.30s ease,
        box-shadow 0.30s ease;
}


[data-md-color-scheme="slate"] .aleks-explore-card {
    background:
        linear-gradient(
            145deg,
            #191711,
            #0f0e0b
        );

    border-color:
        rgba(224,189,105,0.18);
}


.aleks-explore-card:hover {
    transform:
        translateY(-8px);

    box-shadow:
        0 25px 55px rgba(71,50,10,0.14);
}


.aleks-explore-card-number {
    font-size:
        0.72rem;

    font-weight:
        900;

    letter-spacing:
        0.14em;

    color:
        #996b16;
}


[data-md-color-scheme="slate"] .aleks-explore-card-number {
    color:
        #d9b965;
}


.aleks-explore-card h3 {
    margin:
        15px 0 8px !important;

    font-family:
        "Noto Serif Armenian",
        Georgia,
        serif;

    font-size:
        1.45rem !important;

    color:
        #211b0e !important;
}


[data-md-color-scheme="slate"] .aleks-explore-card h3 {
    color:
        #f2e7d2 !important;
}


.aleks-explore-card p {
    margin:
        0;

    color:
        var(--muted);

    font-size:
        0.88rem;

    line-height:
        1.7;
}


.aleks-card-link {
    display:
        inline-flex;

    align-items:
        center;

    gap:
        7px;

    margin-top:
        25px;

    color:
        #906615 !important;

    font-size:
        0.8rem;

    font-weight:
        800;
}


[data-md-color-scheme="slate"] .aleks-card-link {
    color:
        #dfc171 !important;
}


.aleks-card-link:hover {
    text-decoration:
        underline !important;
}


/* =========================================================
   FINAL CTA
   ========================================================= */

.aleks-cta {
    position:
        relative;

    overflow:
        hidden;

    margin:
        85px 0 30px;

    padding:
        48px;

    border-radius:
        30px;

    background:
        linear-gradient(
            120deg,
            #4f3105,
            #936617,
            #d2a94a,
            #8d6115,
            #3d2503
        );

    background-size:
        220% 100%;

    animation:
        ctaGold 12s ease-in-out infinite alternate;

    color:
        white;

    box-shadow:
        0 25px 65px rgba(82,55,6,0.24);
}


@keyframes ctaGold {
    0% {
        background-position:
            0% 50%;
    }

    100% {
        background-position:
            100% 50%;
    }
}


.aleks-cta::after {
    content:
        "";

    position:
        absolute;

    width:
        280px;

    height:
        280px;

    right:
        -130px;

    top:
        -120px;

    border-radius:
        50%;

    background:
        rgba(255,237,171,0.16);
}


.aleks-cta h2 {
    position:
        relative;

    z-index:
        2;

    margin:
        0 0 10px !important;

    font-family:
        "Noto Serif Armenian",
        Georgia,
        serif;

    color:
        white !important;

    font-size:
        clamp(2rem, 4vw, 3.2rem) !important;
}


.aleks-cta p {
    position:
        relative;

    z-index:
        2;

    max-width:
        700px;

    margin:
        0;

    color:
        rgba(255,250,235,0.82);

    line-height:
        1.8;
}


/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 900px) {

    .aleks-hero {
        grid-template-columns:
            1fr;

        padding:
            45px 32px;

        min-height:
            auto;
    }

    .aleks-hero-visual {
        min-height:
            330px;
    }

    .aleks-journey {
        grid-template-columns:
            1fr;
    }

    .aleks-explore-grid {
        grid-template-columns:
            1fr;
    }

    .aleks-orbit {
        width:
            290px;

        height:
            290px;
    }

    .aleks-monogram {
        width:
            180px;

        height:
            180px;
    }

    .aleks-monogram span {
        font-size:
            3.8rem;
    }
}


@media (max-width: 600px) {

    .aleks-hero {
        padding:
            34px 22px;

        border-radius:
            25px;
    }

    .aleks-hero h1 {
        font-size:
            3.15rem !important;
    }

    .aleks-buttons {
        flex-direction:
            column;
    }

    .aleks-button {
        width:
            100%;
    }

    .aleks-stats {
        grid-template-columns:
            1fr;
    }

    .aleks-section {
        margin:
            60px 0;
    }

    .aleks-section-head {
        display:
            block;
    }

    .aleks-journey-copy {
        padding:
            25px;
    }

    .aleks-cta {
        padding:
            34px 25px;
    }
}
</style>


<div class="aleks-home">


<!-- =====================================================
     HERO
     ===================================================== -->

<div class="aleks-hero">


    <div class="aleks-hero-content">

        <span class="aleks-eyebrow">
            FAB SCHOOL · PORTFOLIO
        </span>

        <h1>
            Ես Ալեքսն եմ։
        </h1>

        <h3>
            Բարի գալուստ իմ Fab School ճանապարհորդություն։
        </h3>

        <p class="aleks-hero-description">
            Այստեղ հավաքված են իմ շաբաթական աշխատանքները,
            փորձերը, նախագծերը, սովորած տեխնոլոգիաները և
            այն ամենը, ինչ ստեղծում եմ Fab School-ում։
        </p>


        <div class="aleks-buttons">

            <a
                class="aleks-button"
                href="Exercises/"
            >
                Դիտել առաջադրանքները →
            </a>

            <a
                class="aleks-button secondary"
                href="About%20me/"
            >
                Իմ մասին
            </a>

        </div>

    </div>


    <div class="aleks-hero-visual">

        <div class="aleks-orbit"></div>

        <div class="aleks-monogram">
            <span>A</span>
        </div>

        <div class="aleks-float one">
            20 WEEKS
        </div>

        <div class="aleks-float two">
            DIGITAL MAKER
        </div>

    </div>

</div>


<!-- =====================================================
     STATS
     ===================================================== -->

<div class="aleks-stats">

    <div class="aleks-stat">

        <span class="aleks-stat-number">
            20+
        </span>

        <span class="aleks-stat-label">
            Շաբաթական առաջադրանքներ
        </span>

    </div>


    <div class="aleks-stat">

        <span class="aleks-stat-number">
            01
        </span>

        <span class="aleks-stat-label">
            Final Project
        </span>

    </div>


    <div class="aleks-stat">

        <span class="aleks-stat-number">
            ∞
        </span>

        <span class="aleks-stat-label">
            Գաղափարներ
        </span>

    </div>

</div>


<!-- =====================================================
     JOURNEY
     ===================================================== -->

<div class="aleks-section">

    <div class="aleks-section-head">

        <div>

            <div class="aleks-section-kicker">
                MY JOURNEY
            </div>

            <h2>
                Իմ Fab School ճանապարհորդությունը
            </h2>

        </div>

    </div>


    <div class="aleks-journey">


        <div class="aleks-journey-copy">

            <p>
                Ես սովորում եմ՝ փորձելով, ստեղծելով և
                սխալներից սովորելով։
            </p>

            <br>

            <p>
                Այս կայքը իմ աշխատանքի թվային պորտֆոլիոն է։
            </p>

            <br>

            <p>
                Յուրաքանչյուր շաբաթ այստեղ ավելացնում եմ նոր
                աշխատանքներ, փորձեր, նկարներ, կոդ և նախագծերի
                արդյունքներ։
            </p>

        </div>


        <div class="aleks-steps">


            <div class="aleks-step">

                <div class="aleks-step-number">
                    01
                </div>

                <div>

                    <strong>
                        Փորձել
                    </strong>

                    <span>
                        Նոր գաղափարներ և տեխնոլոգիաներ։
                    </span>

                </div>

            </div>


            <div class="aleks-step">

                <div class="aleks-step-number">
                    02
                </div>

                <div>

                    <strong>
                        Ստեղծել
                    </strong>

                    <span>
                        Գաղափարները դարձնել իրական նախագծեր։
                    </span>

                </div>

            </div>


            <div class="aleks-step">

                <div class="aleks-step-number">
                    03
                </div>

                <div>

                    <strong>
                        Սովորել
                    </strong>

                    <span>
                        Ամեն աշխատանքից վերցնել նոր փորձ։
                    </span>

                </div>

            </div>


        </div>

    </div>

</div>


<!-- =====================================================
     EXPLORE
     ===================================================== -->

<div class="aleks-section">


    <div class="aleks-section-head">

        <div>

            <div class="aleks-section-kicker">
                EXPLORE
            </div>

            <h2>
                Ի՞նչ կարող ես գտնել այստեղ
            </h2>

        </div>

    </div>


    <div class="aleks-explore-grid">


        <div class="aleks-explore-card">

            <div>

                <div class="aleks-explore-card-number">
                    01 · ABOUT
                </div>

                <h3>
                    Իմ մասին
                </h3>

                <p>
                    Իմ պատմությունը և Fab School
                    ճանապարհորդությունը։
                </p>

            </div>

            <a
                class="aleks-card-link"
                href="About%20me/"
            >
                Իմ մասին →
            </a>

        </div>


        <div class="aleks-explore-card">

            <div>

                <div class="aleks-explore-card-number">
                    02 · WORK
                </div>

                <h3>
                    Առաջադրանքներ
                </h3>

                <p>
                    Բոլոր շաբաթական աշխատանքները
                    մեկ վայրում։
                </p>

            </div>

            <a
                class="aleks-card-link"
                href="Exercises/"
            >
                Դիտել աշխատանքները →
            </a>

        </div>


        <div class="aleks-explore-card">

            <div>

                <div class="aleks-explore-card-number">
                    03 · PROJECT
                </div>

                <h3>
                    Final Project
                </h3>

                <p>
                    Իմ գլխավոր նախագծի զարգացումը։
                </p>

            </div>

            <a
                class="aleks-card-link"
                href="Projects/final-project/"
            >
                Դիտել նախագիծը →
            </a>

        </div>


    </div>

</div>


<!-- =====================================================
     FINAL CTA
     ===================================================== -->

<div class="aleks-cta">

    <h2>
        Սկսենք։
    </h2>

    <p>
        Դիտիր իմ աշխատանքները, ուսումնասիրիր իմ նախագծերը
        և հետևիր իմ Fab School ճանապարհորդությանը։
    </p>


    <div class="aleks-buttons">

        <a
            class="aleks-button"
            href="Exercises/"
        >
            📝 Դիտել բոլոր աշխատանքները
        </a>

        <a
            class="aleks-button secondary"
            href="https://github.com/alexaghajanyan01"
            target="_blank"
            rel="noopener"
        >
            GitHub →
        </a>

    </div>

</div>


</div>