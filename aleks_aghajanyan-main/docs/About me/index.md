<style>
/* =========================================================
   ALEKS — ABOUT ME
   INTERACTIVE LUXURY PROFILE
   ========================================================= */

.aleks-about {
    --gold-dark: #5a3905;
    --gold: #b88624;
    --gold-light: #dfbd69;
    --gold-bright: #f7df9b;

    --cream: #faf7ef;
    --cream-2: #f1e7d0;
    --white: #fffdf8;

    --dark: #0c0b09;
    --dark-2: #17140e;
    --dark-3: #211b0d;

    --text: #201a10;
    --muted: #766f63;

    font-family: "Inter", sans-serif;

    max-width: 1200px;
    margin: 0 auto;
}


/* =========================================================
   HERO PROFILE
   ========================================================= */

.about-profile {
    position: relative;

    display: grid;

    grid-template-columns:
        0.85fr 1.15fr;

    min-height: 620px;

    margin: 20px 0 55px;

    overflow: hidden;

    border-radius: 34px;

    background:
        linear-gradient(
            135deg,
            #fffdf8 0%,
            #f4ead5 48%,
            #e8d2a2 100%
        );

    border:
        1px solid rgba(184,134,36,0.25);

    box-shadow:
        0 30px 80px rgba(74,52,9,0.11);
}

[data-md-color-scheme="slate"] .about-profile {
    background:
        linear-gradient(
            135deg,
            #19160f 0%,
            #12110d 52%,
            #251c08 100%
        );

    border-color:
        rgba(223,189,105,0.18);

    box-shadow:
        0 30px 80px rgba(0,0,0,0.38);
}


/* =========================================================
   LEFT SIDE
   ========================================================= */

.about-profile-copy {
    position: relative;

    z-index: 4;

    display: flex;

    flex-direction: column;

    justify-content: center;

    padding:
        65px 45px 65px 60px;
}


/* small label */

.about-kicker {
    display: inline-flex;

    align-items: center;

    gap: 10px;

    font-size: 0.72rem;

    font-weight: 900;

    letter-spacing: 0.16em;

    color:
        #896216;

    text-transform: uppercase;
}

[data-md-color-scheme="slate"] .about-kicker {
    color:
        #e0c06c;
}


.about-kicker::before {
    content: "";

    width: 38px;

    height: 1px;

    background:
        var(--gold);
}


/* huge title */

.about-profile h1 {
    margin:
        22px 0 16px !important;

    font-size:
        clamp(3.2rem, 6vw, 5.6rem) !important;

    line-height:
        0.98 !important;

    letter-spacing:
        -0.065em;

    font-weight:
        900 !important;

    color:
        #211b10 !important;
}

[data-md-color-scheme="slate"] .about-profile h1 {
    color:
        #f4ead8 !important;
}


/* subtitle */

.about-profile-subtitle {
    max-width:
        580px;

    margin-bottom:
        22px;

    color:
        #8a6317;

    font-size:
        1.2rem;

    font-weight:
        650;

    line-height:
        1.5;
}

[data-md-color-scheme="slate"] .about-profile-subtitle {
    color:
        #dfbd69;
}


/* intro */

.about-profile-text {
    max-width:
        580px;

    margin:
        0;

    color:
        var(--muted);

    font-size:
        1rem;

    line-height:
        1.9;
}


/* =========================================================
   PROFILE TAGS
   ========================================================= */

.about-tags {
    display:
        flex;

    flex-wrap:
        wrap;

    gap:
        9px;

    margin-top:
        27px;
}

.about-tag {
    padding:
        8px 12px;

    border-radius:
        999px;

    font-size:
        0.72rem;

    font-weight:
        700;

    color:
        #76520d;

    background:
        rgba(184,134,36,0.08);

    border:
        1px solid rgba(184,134,36,0.22);
}

[data-md-color-scheme="slate"] .about-tag {
    color:
        #dfc171;

    background:
        rgba(223,189,105,0.06);

    border-color:
        rgba(223,189,105,0.18);
}


/* =========================================================
   RIGHT IMAGE
   ========================================================= */

.about-profile-visual {
    position:
        relative;

    min-height:
        620px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    overflow:
        hidden;

    background:
        linear-gradient(
            145deg,
            #302006,
            #8d6515,
            #c89a3b
        );
}


/* glow */

.about-profile-visual::before {
    content:
        "";

    position:
        absolute;

    width:
        560px;

    height:
        560px;

    border-radius:
        50%;

    background:
        radial-gradient(
            circle,
            rgba(255,224,143,0.35),
            transparent 68%
        );
}


/* circle behind image */

.about-profile-circle {
    position:
        absolute;

    width:
        390px;

    height:
        390px;

    border-radius:
        50%;

    border:
        1px solid rgba(255,241,190,0.36);

    box-shadow:
        0 0 0 20px rgba(255,255,255,0.035),
        0 0 0 42px rgba(255,255,255,0.025);
}


/* image frame */

.about-photo {
    position:
        relative;

    z-index:
        4;

    width:
        min(62%, 390px);

    padding:
        10px;

    transform:
        rotate(-4deg);

    background:
        linear-gradient(
            145deg,
            #fff1b0,
            #d2a246 35%,
            #7b5109 72%,
            #f1d280
        );

    box-shadow:
        0 35px 75px rgba(0,0,0,0.38);

    transition:
        transform 0.4s ease;
}

.about-photo:hover {
    transform:
        rotate(0deg)
        scale(1.02);
}

.about-photo img {
    display:
        block;

    width:
        100%;

    height:
        auto;

    border-radius:
        3px;

    box-shadow:
        none !important;
}


/* =========================================================
   VISUAL LABELS
   ========================================================= */

.about-visual-label {
    position:
        absolute;

    z-index:
        7;

    padding:
        10px 14px;

    border-radius:
        13px;

    background:
        rgba(20,16,8,0.78);

    backdrop-filter:
        blur(12px);

    border:
        1px solid rgba(244,217,143,0.28);

    color:
        #f4d67d;

    font-size:
        0.68rem;

    font-weight:
        800;

    letter-spacing:
        0.12em;
}

.about-visual-label.one {
    top:
        55px;

    right:
        35px;
}

.about-visual-label.two {
    bottom:
        50px;

    left:
        30px;
}


/* =========================================================
   GOLD ROTATING RING
   ========================================================= */

.about-ring {
    position:
        absolute;

    z-index:
        2;

    width:
        455px;

    height:
        455px;

    border-radius:
        50%;

    border:
        1px dashed rgba(255,235,172,0.30);

    animation:
        aboutSpin 22s linear infinite;
}

.about-ring::after {
    content:
        "A · FAB · 2026";

    position:
        absolute;

    top:
        -10px;

    left:
        50%;

    transform:
        translateX(-50%);

    padding:
        5px 11px;

    background:
        #7b530a;

    color:
        #ffe7a1;

    font-size:
        0.62rem;

    letter-spacing:
        0.12em;

    border-radius:
        999px;
}

@keyframes aboutSpin {
    from {
        transform:
            rotate(0deg);
    }

    to {
        transform:
            rotate(360deg);
    }
}


/* =========================================================
   SECTION
   ========================================================= */

.about-section {
    margin:
        80px 0;
}


.about-section-kicker {
    color:
        #956915;

    font-size:
        0.7rem;

    font-weight:
        900;

    letter-spacing:
        0.17em;

    text-transform:
        uppercase;
}

[data-md-color-scheme="slate"] .about-section-kicker {
    color:
        #dcbc69;
}


.about-section-title {
    margin:
        8px 0 28px;

    font-size:
        clamp(2.1rem, 4vw, 3.2rem);

    font-weight:
        900;

    letter-spacing:
        -0.05em;

    color:
        #201a10;
}

[data-md-color-scheme="slate"] .about-section-title {
    color:
        #f3e8d3;
}


/* =========================================================
   PERSONAL STORY
   ========================================================= */

.about-story {
    display:
        grid;

    grid-template-columns:
        1.1fr 0.9fr;

    gap:
        22px;
}


.about-story-main {
    padding:
        35px;

    border-radius:
        25px;

    background:
        linear-gradient(
            145deg,
            #fffefa,
            #f0e5cf
        );

    border:
        1px solid rgba(184,134,36,0.19);

    box-shadow:
        0 18px 45px rgba(64,46,10,0.06);
}


[data-md-color-scheme="slate"] .about-story-main {
    background:
        linear-gradient(
            145deg,
            #1a1710,
            #11100c
        );

    border-color:
        rgba(223,189,105,0.16);
}


.about-story-main p {
    margin:
        0 0 18px;

    color:
        var(--muted);

    line-height:
        1.95;

    font-size:
        0.98rem;
}

[data-md-color-scheme="slate"] .about-story-main p {
    color:
        #aaa296;
}


/* =========================================================
   GOLD PROFILE PANEL
   ========================================================= */

.about-facts {
    display:
        flex;

    flex-direction:
        column;

    gap:
        12px;
}


.about-fact {
    display:
        grid;

    grid-template-columns:
        50px 1fr;

    gap:
        13px;

    align-items:
        center;

    padding:
        16px;

    border-radius:
        18px;

    background:
        linear-gradient(
            135deg,
            #4d3005,
            #9c701c
        );

    box-shadow:
        0 14px 32px rgba(72,48,7,0.17);
}


.about-fact-icon {
    width:
        50px;

    height:
        50px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    border-radius:
        15px;

    background:
        rgba(255,240,187,0.14);

    border:
        1px solid rgba(255,240,187,0.20);

    color:
        #ffe5a0;

    font-size:
        1.2rem;
}


.about-fact strong {
    display:
        block;

    margin-bottom:
        3px;

    color:
        #fff0be;

    font-size:
        0.86rem;
}


.about-fact span {
    color:
        rgba(255,247,221,0.68);

    font-size:
        0.74rem;

    line-height:
        1.4;
}


/* =========================================================
   SKILLS
   ========================================================= */

.about-skills {
    display:
        grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap:
        18px;
}


.about-skill {
    position:
        relative;

    min-height:
        190px;

    padding:
        25px;

    overflow:
        hidden;

    border-radius:
        22px;

    background:
        #fffdf8;

    border:
        1px solid rgba(184,134,36,0.18);

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
}


.about-skill:hover {
    transform:
        translateY(-7px);

    box-shadow:
        0 22px 50px rgba(66,47,9,0.11);
}


[data-md-color-scheme="slate"] .about-skill {
    background:
        linear-gradient(
            145deg,
            #191710,
            #11100c
        );

    border-color:
        rgba(223,189,105,0.16);
}


.about-skill-number {
    color:
        #b98219;

    font-size:
        0.7rem;

    font-weight:
        900;

    letter-spacing:
        0.15em;
}

[data-md-color-scheme="slate"] .about-skill-number {
    color:
        #debc68;
}


.about-skill h3 {
    margin:
        18px 0 8px !important;

    font-size:
        1.25rem !important;

    color:
        #231c10 !important;
}

[data-md-color-scheme="slate"] .about-skill h3 {
    color:
        #f0e5d0 !important;
}


.about-skill p {
    margin:
        0;

    color:
        var(--muted);

    line-height:
        1.65;

    font-size:
        0.86rem;
}


/* =========================================================
   INTERACTIVE TIMELINE
   ========================================================= */

.about-timeline {
    position:
        relative;

    padding-left:
        34px;
}


.about-timeline::before {
    content:
        "";

    position:
        absolute;

    left:
        9px;

    top:
        0;

    bottom:
        0;

    width:
        1px;

    background:
        linear-gradient(
            to bottom,
            transparent,
            var(--gold),
            var(--gold-light),
            transparent
        );
}


.about-timeline-item {
    position:
        relative;

    padding:
        0 0 35px;
}


.about-timeline-item::before {
    content:
        "";

    position:
        absolute;

    left:
        -30px;

    top:
        5px;

    width:
        11px;

    height:
        11px;

    border-radius:
        50%;

    background:
        var(--gold-light);

    border:
        3px solid var(--cream);

    box-shadow:
        0 0 0 1px var(--gold);
}


[data-md-color-scheme="slate"] .about-timeline-item::before {
    border-color:
        var(--dark);
}


.about-timeline-date {
    color:
        #9b6e19;

    font-size:
        0.68rem;

    font-weight:
        900;

    letter-spacing:
        0.15em;
}

[data-md-color-scheme="slate"] .about-timeline-date {
    color:
        #d9b969;
}


.about-timeline-item h3 {
    margin:
        8px 0 7px !important;

    font-size:
        1.25rem !important;

    color:
        #231c10 !important;
}

[data-md-color-scheme="slate"] .about-timeline-item h3 {
    color:
        #f1e6d1 !important;
}


.about-timeline-item p {
    margin:
        0;

    color:
        var(--muted);

    line-height:
        1.7;

    font-size:
        0.88rem;
}


/* =========================================================
   FINAL MESSAGE
   ========================================================= */

.about-final {
    position:
        relative;

    overflow:
        hidden;

    padding:
        48px;

    border-radius:
        28px;

    background:
        linear-gradient(
            120deg,
            #3b2302,
            #73500c,
            #b98927,
            #704d09,
            #3a2404
        );

    background-size:
        220% 100%;

    animation:
        finalGold 12s ease-in-out infinite alternate;

    box-shadow:
        0 25px 65px rgba(76,51,6,0.22);
}

@keyframes finalGold {
    from {
        background-position:
            0% 50%;
    }

    to {
        background-position:
            100% 50%;
    }
}


.about-final h2 {
    position:
        relative;

    z-index:
        2;

    margin:
        0 0 12px !important;

    color:
        #fff1c5 !important;

    font-size:
        clamp(2rem,4vw,3rem) !important;
}


.about-final p {
    position:
        relative;

    z-index:
        2;

    max-width:
        720px;

    margin:
        0;

    color:
        rgba(255,245,216,0.75);

    line-height:
        1.8;
}


/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 950px) {

    .about-profile {
        grid-template-columns:
            1fr;
    }

    .about-profile-visual {
        min-height:
            500px;
    }

    .about-story {
        grid-template-columns:
            1fr;
    }

    .about-skills {
        grid-template-columns:
            repeat(2, 1fr);
    }
}


@media (max-width: 600px) {

    .about-profile {
        border-radius:
            25px;
    }

    .about-profile-copy {
        padding:
            42px 25px;
    }

    .about-profile h1 {
        font-size:
            3.2rem !important;
    }

    .about-profile-visual {
        min-height:
            400px;
    }

    .about-profile-circle {
        width:
            300px;

        height:
            300px;
    }

    .about-ring {
        width:
            350px;

        height:
            350px;
    }

    .about-photo {
        width:
            72%;
    }

    .about-skills {
        grid-template-columns:
            1fr;
    }

    .about-story-main {
        padding:
            25px;
    }

    .about-final {
        padding:
            32px 24px;
    }
}
</style>


<div class="aleks-about">


<!-- =====================================================
     PROFILE HERO
     ===================================================== -->

<div class="about-profile">


    <div class="about-profile-copy">

        <div class="about-kicker">
            ABOUT ME
        </div>


        <h1>
            Ալեքս<br>
            Աղաջանյան
        </h1>


        <div class="about-profile-subtitle">
            Fab School · Digital Maker · Learner
        </div>


        <p class="about-profile-text">
            Բարի գալուստ իմ անձնական էջ։
            Այստեղ կարող եք մի փոքր ավելի լավ ճանաչել ինձ,
            իմ հետաքրքրությունները և այն ճանապարհը,
            որով անցնում եմ Fab School-ում։
        </p>


        <div class="about-tags">

            <span class="about-tag">
                FAB SCHOOL
            </span>

            <span class="about-tag">
                DESIGN
            </span>

            <span class="about-tag">
                TECHNOLOGY
            </span>

            <span class="about-tag">
                CREATIVITY
            </span>

        </div>

    </div>


    <div class="about-profile-visual">

        <div class="about-profile-circle"></div>

        <div class="about-ring"></div>


        <div class="about-photo">

            <img
                src="../images/DCS1.jpg"
                alt="Ալեքս"
            >

        </div>


        <div class="about-visual-label one">
            ALEKS · 2026
        </div>

        <div class="about-visual-label two">
            CREATIVE MIND
        </div>

    </div>

</div>


<!-- =====================================================
     STORY
     ===================================================== -->

<div class="about-section">

    <div class="about-section-kicker">
        MY STORY
    </div>

    <div class="about-section-title">
        Մի փոքր իմ մասին
    </div>


    <div class="about-story">


        <div class="about-story-main">

            <p>
                Ես սիրում եմ սովորել նոր բաներ,
                փորձարկել տարբեր գաղափարներ և
                ստեղծել այնպիսի նախագծեր,
                որոնք միավորում են տեխնոլոգիան
                և ստեղծագործական մտածողությունը։
            </p>

            <p>
                Fab School-ը ինձ համար մի վայր է,
                որտեղ կարելի է ոչ միայն սովորել,
                այլ նաև փորձել, սխալվել, նորից փորձել
                և վերջում ստեղծել ինչ-որ իրական բան։
            </p>

            <p>
                Այս կայքում ես հավաքում եմ իմ աշխատանքի
                ընթացքը, որպեսզի ժամանակի ընթացքում
                կարողանամ տեսնել, թե ինչպես եմ զարգացել։
            </p>

        </div>


        <div class="about-facts">


            <div class="about-fact">

                <div class="about-fact-icon">
                    ✦
                </div>

                <div>

                    <strong>
                        Փորձել
                    </strong>

                    <span>
                        Նոր գաղափարներ և տարբեր լուծումներ։
                    </span>

                </div>

            </div>


            <div class="about-fact">

                <div class="about-fact-icon">
                    ◇
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


            <div class="about-fact">

                <div class="about-fact-icon">
                    ↗
                </div>

                <div>

                    <strong>
                        Զարգանալ
                    </strong>

                    <span>
                        Ամեն նոր աշխատանքից սովորել։
                    </span>

                </div>

            </div>


        </div>

    </div>

</div>


<!-- =====================================================
     SKILLS
     ===================================================== -->

<div class="about-section">

    <div class="about-section-kicker">
        WHAT I LIKE
    </div>

    <div class="about-section-title">
        Ինձ հետաքրքրում են
    </div>


    <div class="about-skills">


        <div class="about-skill">

            <div class="about-skill-number">
                01 · DESIGN
            </div>

            <h3>
                Դիզայն
            </h3>

            <p>
                Վիզուալ գաղափարներ, ինտերֆեյսներ
                և հետաքրքիր ձևավորումներ։
            </p>

        </div>


        <div class="about-skill">

            <div class="about-skill-number">
                02 · TECH
            </div>

            <h3>
                Տեխնոլոգիա
            </h3>

            <p>
                Նոր գործիքներ, կոդ, թվային
                արտադրություն և փորձարկումներ։
            </p>

        </div>


        <div class="about-skill">

            <div class="about-skill-number">
                03 · BUILD
            </div>

            <h3>
                Ստեղծել
            </h3>

            <p>
                Գաղափարները վերածել ֆիզիկական
                կամ թվային նախագծերի։
            </p>

        </div>


    </div>

</div>


<!-- =====================================================
     TIMELINE
     ===================================================== -->

<div class="about-section">

    <div class="about-section-kicker">
        MY PATH
    </div>

    <div class="about-section-title">
        Իմ ճանապարհը
    </div>


    <div class="about-timeline">


        <div class="about-timeline-item">

            <div class="about-timeline-date">
                START
            </div>

            <h3>
                Սկսեցի ուսումնասիրել
            </h3>

            <p>
                Նոր գաղափարներ, գործիքներ և
                ստեղծագործական տեխնոլոգիաներ։
            </p>

        </div>


        <div class="about-timeline-item">

            <div class="about-timeline-date">
                FAB SCHOOL
            </div>

            <h3>
                Սկսվեց Fab School ճանապարհորդությունը
            </h3>

            <p>
                Շաբաթ առ շաբաթ աշխատում եմ,
                փաստագրում և սովորում։
            </p>

        </div>


        <div class="about-timeline-item">

            <div class="about-timeline-date">
                NEXT
            </div>

            <h3>
                Նոր նախագծեր
            </h3>

            <p>
                Հաջորդ քայլը նոր գաղափարներն են,
                նոր փորձերը և ավելի մեծ նախագծերը։
            </p>

        </div>


    </div>

</div>


<!-- =====================================================
     FINAL MESSAGE
     ===================================================== -->

<div class="about-final">

    <h2>
        Սա դեռ սկիզբն է։
    </h2>

    <p>
        Իմ Fab School ճանապարհորդությունը շարունակվում է։
        Յուրաքանչյուր նոր նախագիծ այս պատմության ևս մեկ մասն է։
    </p>

</div>


</div>