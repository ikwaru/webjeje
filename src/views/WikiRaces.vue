<template>
  <div class="guide" aria-label="Guide section">
    <div class="container">
      <section class="galeria_clases" v-if="cards.length > 0" aria-live="polite">
        <h1 aria-label="Races heading">Races</h1>
        <div class="row g-4">
          <div
            v-for="(card, cardIndex) in cards"
            :key="'card-' + cardIndex"
            :class="['col-lg-3 col-md-4 col-sm-6', { 'last-card': cardIndex === cards.length - 1 }]"
            role="region"
            :aria-labelledby="'card-title-' + cardIndex"
          >
            <div class="card h-100">
              <img
                :src="card.image"
                class="card-img-top"
                :alt="`Image of ${card.title}`"
              />
              <div class="card-body">
                <h5 :id="'card-title-' + cardIndex" class="card-title">
                  {{ card.title }}
                </h5>
                <p class="card-text">{{ card.description }}</p>
                <a
                  :href="card.link"
                  class="btn btn-primary"
                  :aria-label="`Learn more about ${card.title}`"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

<!-- Botones atajo -->
<section class="botones-atajo">
  <div class="btn-group btn-group-lg" role="group" aria-label="shortcut buttons">
    <button type="button" class="btn btn-primary" aria-label="Sign language button" onclick="location.href='#video'">Sign language</button>
    <button type="button" class="btn btn-primary" aria-label="Selective Narrator button" onclick="location.href='#narrador'">Selective Narrator</button>
  </div>
</section>

      <section class="clase-selec">

        <div class="row">

          <!-- Aside  Dwarf-->
          <aside class="col-12 col-md-3">
            <div class="img-container">
              <img src="../assets/races/Dwarf_personaje.png" alt="Dwarf" class="img-fluid" aria-label="Dwarf Features">
            </div>
            <h5>Species Details</h5>
            <ul class="links-raza">
              <li><a href="#short-and-stout" aria-label="Link Short and Stout">Short and Stout</a></li>
              <li><a href="#long-memory" aria-label="Link Long Memory, Long Grudges">Long Memory, Long Grudges</a></li>
              <li><a href="#clans-and-kingdoms" aria-label="Link Clans and Kingdoms">Clans and Kingdoms</a></li>
              <li><a href="#gods-and-clan" aria-label="Link Gods, Gold, and Clan">Gods, Gold, and Clan</a></li>
              <li><a href="#dwarf-names" aria-label="Link Dwarf Names">Dwarf Names</a></li>
            </ul>
            <h5>Traits</h5>
            <ul>
              <li>Ability Score Increase</li>
              <p>Your Constitution score increases by 2.</p>
              <li>Age</li>
              <p>Dwarves mature at the same rate as humans, but they’re considered young until they reach the age of 50.
                On average, they live about 350 years</p>
              <li>Size</li>
              <p>Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.</p>
              <li>Speed</li>
              <p>Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor.</p>
              <li>Darkvision</li>
              <p>Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim
                light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You
                can’t discern color in darkness, only shades of gray.</p>
              <li>Dwarven Resilience</li>
              <p>You have advantage on saving throws against poison, and you have resistance against poison damage</p>
              <li>Tool Proficiency</li>
              <p>You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or
                mason’s tools.</p>
              <li>Stonecunning</li>
              <p>Whenever you make an Intelligence (History) check related to the origin of stonework, you are
                considered proficient in the History skill and add double your proficiency bonus to the check, instead
                of your normal proficiency bonus.</p>
              <li>Languages</li>
              <p>You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural
                sounds, and those characteristics spill over into whatever other language a dwarf might speak.</p>
            </ul>

            <!-- Aside  Elf-->
            <div class="img-container elf-aside">
              <img src="../assets/races/Elfo_personaje.png" alt="Elfo" class="img-fluid" aria-label="Elf Features">
            </div>
            <h5>Species Details</h5>
            <ul class="links-raza">
              <li><a href="#slender-and-graceful" aria-label="Link Slender and Graceful">Slender and Graceful</a></li>
              <li><a href="#a-timeless-perspective" aria-label="Link A Timeless Perspective">A Timeless Perspective</a>
              </li>
              <li><a href="#hidden-woodland-realms" aria-label="Link Hidden Woodland Realms">Hidden Woodland Realms</a>
              </li>
              <li><a href="#exploration-and-adventure" aria-label="Link Exploration and Adventure">Exploration and
                  Adventure</a></li>
              <li><a href="#elf-names" aria-label="Link Elf Names">Elf Names</a></li>
            </ul>
            <h5>Traits</h5>
            <ul>
              <li>Ability Score Increase</li>
              <p>Your Dexterity score increases by 2.</p>
              <li>Age</li>
              <p>Although elves reach physical maturity at about the same age as humans, the elven understanding of
                adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood
                and an adult name around the age of 100 and can live to be 750 years old.</p>
              <li>Size</li>
              <p>Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.</p>
              <li>Speed</li>
              <p>Your base walking speed is 30 feet.</p>
              <li>Darkvision</li>
              <p>Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions.
                You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were
                dim light. You can’t discern color in darkness, only shades of gray.</p>
              <li>Keen Senses</li>
              <p>You have proficiency in the Perception skill.</p>
              <li>Fey Ancestry</li>
              <p>You have advantage on saving throws against being charmed, and magic can’t put you to sleep.</p>
              <li>Trance</li>
              <p>Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day.
                (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such
                dreams are actually mental exercises that have become reflexive through years of practice. After resting
                in this way, you gain the same benefit that a human does from 8 hours of sleep.</p>
              <li>Languages</li>
              <p>You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and
                intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other
                races. Many bards learn their language so they can add Elvish ballads to their repertoires.</p>
            </ul>

            <!-- Aside  Halfling-->
            <div class="img-container halfling-aside">
              <img src="../assets/races/Halfling_personaje.png" alt="Halfling" class="img-fluid" aria-label="Halfling Features">
            </div>
            <h5>Species Details</h5>
            <ul class="links-raza">
              <li><a href="#small-and-practical" aria-label="Link Small and Practical">Small and Practical</a></li>
              <li><a href="#kind-and-curious" aria-label="Link Kind and Curious">Kind and Curious</a></li>
              <li><a href="#blend-into-the-crowd" aria-label="Link Blend Into the Crowd">Blend Into the Crowd</a></li>
              <li><a href="#pastoral-pleasantries" aria-label="Link Pastoral Pleasantries">Pastoral Pleasantries</a></li>
              <li><a href="#exploring-opportunities" aria-label="Link Exploring Opportunities">Exploring Opportunities</a></li>
              <li><a href="#halfling-names" aria-label="Link Halfing Names">Halfing Names</a></li>
            </ul>
            <h5>Traits</h5>
            <ul>
              <li>Ability Score Increase</li>
              <p>Your Dexterity score increases by 2.</p>
              <li>Age</li>
              <p>Although elves reach physical maturity at about the same age as humans, the elven understanding of
                adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood
                and an adult name around the age of 100 and can live to be 750 years old.</p>
              <li>Size</li>
              <p>Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.</p>
              <li>Speed</li>
              <p>Your base walking speed is 30 feet.</p>
              <li>Darkvision</li>
              <p>Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions.
                You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were
                dim light. You can’t discern color in darkness, only shades of gray.</p>
              <li>Keen Senses</li>
              <p>You have proficiency in the Perception skill.</p>
              <li>Fey Ancestry</li>
              <p>You have advantage on saving throws against being charmed, and magic can’t put you to sleep.</p>
              <li>Trance</li>
              <p>Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day.
                (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such
                dreams are actually mental exercises that have become reflexive through years of practice. After resting
                in this way, you gain the same benefit that a human does from 8 hours of sleep.</p>
              <li>Languages</li>
              <p>You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and
                intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other
                races. Many bards learn their language so they can add Elvish ballads to their repertoires.</p>
            </ul>

             <!-- Aside Human -->
            <div class="img-container human-aside" aria-label="Human Features">
              <img src="../assets/races/Human.png" alt="Human" class="img-fluid">
            </div>
            <h5>Species Details</h5>
            <ul class="links-raza">
              <li><a href="#a-broad-spectrum" aria-label="Link A Broad Spectrum">A Broad Spectrum</a></li>
              <li><a href="#variety-in-all-things" aria-label="Link Variety in All Things">Variety in All Things</a></li>
              <li><a href="#exemplars-of-ambition" aria-label="Link Exemplars of Ambition">Exemplars of Ambition</a></li>
              <li><a href="#human-names-and-ethnicities" aria-label="Link Human Names and Ethnicities">Human Names and Ethnicities</a></li>
              <li><a href="#human-names" aria-label="Link Human Names">Human Names</a></li>
            </ul>
            <h5>Traits</h5>
            <ul>
              <li>Ability Score Increase</li>
              <p>Your Dexterity score increases by 2.</p>
              <li>Age</li>
              <p>Although elves reach physical maturity at about the same age as humans, the elven understanding of
                adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood
                and an adult name around the age of 100 and can live to be 750 years old.</p>
              <li>Size</li>
              <p>Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.</p>
              <li>Speed</li>
              <p>Your base walking speed is 30 feet.</p>
              <li>Darkvision</li>
              <p>Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions.
                You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were
                dim light. You can’t discern color in darkness, only shades of gray.</p>
              <li>Keen Senses</li>
              <p>You have proficiency in the Perception skill.</p>
              <li>Fey Ancestry</li>
              <p>You have advantage on saving throws against being charmed, and magic can’t put you to sleep.</p>
              <li>Trance</li>
              <p>Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day.
                (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such
                dreams are actually mental exercises that have become reflexive through years of practice. After resting
                in this way, you gain the same benefit that a human does from 8 hours of sleep.</p>
              <li>Languages</li>
              <p>You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and
                intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other
                races. Many bards learn their language so they can add Elvish ballads to their repertoires.</p>
            </ul>
          <!-- Aside Dragonborn -->
          <div class="img-container dragonborn-aside">
            <img src="../assets/races/Dragonborn.png" alt="Dragonborn" class="img-fluid" aria-label="Dragonborn Features">
          </div>
          <h5>Species Details</h5>
          <ul class="links-raza">
            <li><a href="#proud-dragon-kin" aria-label="Link Proud Dragon Kin">Proud Dragon Kin</a></li>
            <li><a href="#self-sufficient-clans" aria-label="Link Self Sufficient Clans">Self Sufficient Clans</a></li>
            <li><a href="#dragonborn-names" aria-label="Link Dragonborn Names">Dragonborn Names</a></li>
          </ul>
          <h5>Traits</h5>
            <ul>
              <li>Ability Score Increase</li>
              <p>Your Dexterity score increases by 2.</p>
              <li>Age</li>
              <p>Although elves reach physical maturity at about the same age as humans, the elven understanding of
                adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood
                and an adult name around the age of 100 and can live to be 750 years old.</p>
              <li>Size</li>
              <p>Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.</p>
              <li>Speed</li>
              <p>Your base walking speed is 30 feet.</p>
              <li>Darkvision</li>
              <p>Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions.
                You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were
                dim light. You can’t discern color in darkness, only shades of gray.</p>
              <li>Keen Senses</li>
              <p>You have proficiency in the Perception skill.</p>
              <li>Fey Ancestry</li>
              <p>You have advantage on saving throws against being charmed, and magic can’t put you to sleep.</p>
              <li>Trance</li>
              <p>Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day.
                (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such
                dreams are actually mental exercises that have become reflexive through years of practice. After resting
                in this way, you gain the same benefit that a human does from 8 hours of sleep.</p>
              <li>Languages</li>
              <p>You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and
                intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other
                races. Many bards learn their language so they can add Elvish ballads to their repertoires.</p>
            </ul>
          <!-- Aside Gnome -->
          <div class="img-container gnome-aside">
            <img src="../assets/races/gnome.png" alt="Gnome" class="img-fluid" aria-label="Gnome Features">
          </div>
          <h5>Species Details</h5>
          <ul class="links-raza">
            <li><a href="#vibrant-expression" aria-label="Link Vibrant Expression">Vibrant Expression</a></li>
            <li><a href="#delighted-dedication" aria-label="Link Delighted Dedication">Delighted Dedication</a></li>
            <li><a href="#bright-burrows" aria-label="Link Bright Burrows">Bright Burrows</a></li>
            <li><a href="#seeing-the-world" aria-label="Link Seeing the World">Seeing the World</a></li>
            <li><a href="#gnome-names" aria-label="Link Gnome Names">Gnome Names</a></li>
          </ul>
          <h5>Traits</h5>
            <ul>
              <li>Ability Score Increase</li>
              <p>Your Dexterity score increases by 2.</p>
              <li>Age</li>
              <p>Although elves reach physical maturity at about the same age as humans, the elven understanding of
                adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood
                and an adult name around the age of 100 and can live to be 750 years old.</p>
              <li>Size</li>
              <p>Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.</p>
              <li>Speed</li>
              <p>Your base walking speed is 30 feet.</p>
              <li>Darkvision</li>
              <p>Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions.
                You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were
                dim light. You can’t discern color in darkness, only shades of gray.</p>
              <li>Keen Senses</li>
              <p>You have proficiency in the Perception skill.</p>
              <li>Fey Ancestry</li>
              <p>You have advantage on saving throws against being charmed, and magic can’t put you to sleep.</p>
              <li>Trance</li>
              <p>Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day.
                (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such
                dreams are actually mental exercises that have become reflexive through years of practice. After resting
                in this way, you gain the same benefit that a human does from 8 hours of sleep.</p>
              <li>Languages</li>
              <p>You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and
                intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other
                races. Many bards learn their language so they can add Elvish ballads to their repertoires.</p>
            </ul>

        <!-- Aside Half-Elf -->
        <div class="img-container halfelf-aside">
          <img src="../assets/races/Half-Elf.png" alt="Half Elf" class="img-fluid" aria-label="Half elf Features">
        </div>
        <h5>Species Details</h5>
        <ul class="links-raza">
          <li><a href="#of-two-worlds" aria-label="Link Of Two Worlds">Of Two Worlds</a></li>
          <li><a href="#diplomats-or-wanderers" aria-label="Link Diplomats or Wanderers">Diplomats or Wanderers</a></li>
          <li><a href="#half-elf-variants" aria-label="Link Half-Elf Variants">Half-Elf Variants</a></li>
          <li><a href="#half-elf-names" aria-label="Link Half-Elf Names">Half-Elf Names</a></li>
        </ul>
        <h5>Traits</h5>
            <ul>
              <li>Ability Score Increase</li>
              <p>Your Dexterity score increases by 2.</p>
              <li>Age</li>
              <p>Although elves reach physical maturity at about the same age as humans, the elven understanding of
                adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood
                and an adult name around the age of 100 and can live to be 750 years old.</p>
              <li>Size</li>
              <p>Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.</p>
              <li>Speed</li>
              <p>Your base walking speed is 30 feet.</p>
              <li>Darkvision</li>
              <p>Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions.
                You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were
                dim light. You can’t discern color in darkness, only shades of gray.</p>
              <li>Keen Senses</li>
              <p>You have proficiency in the Perception skill.</p>
              <li>Fey Ancestry</li>
              <p>You have advantage on saving throws against being charmed, and magic can’t put you to sleep.</p>
              <li>Trance</li>
              <p>Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day.
                (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such
                dreams are actually mental exercises that have become reflexive through years of practice. After resting
                in this way, you gain the same benefit that a human does from 8 hours of sleep.</p>
              <li>Languages</li>
              <p>You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and
                intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other
                races. Many bards learn their language so they can add Elvish ballads to their repertoires.</p>
            </ul>

          <!-- Aside Half-Orc -->
          <div class="img-container halforc-aside">
            <img src="../assets/races/Half-Orc.png" alt="Half Orc" class="img-fluid" aria-label="Half Orc Features">
          </div>
          <h5>Species Details</h5>
          <ul class="links-raza">
            <li><a href="#scarred-and-strong" aria-label="Link Scarred and Strong">Scarred and Strong</a></li>
            <li><a href="#the-mark-of-gruumsh" aria-label="Link The Mark of Gruumsh">The Mark of Gruumsh</a></li>
            <li><a href="#half-orc-names" aria-label="Link Half-Orc Names">Half-Orc Names</a></li>
          </ul>
          <h5>Traits</h5>
            <ul>
              <li>Ability Score Increase</li>
              <p>Your Dexterity score increases by 2.</p>
              <li>Age</li>
              <p>Although elves reach physical maturity at about the same age as humans, the elven understanding of
                adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood
                and an adult name around the age of 100 and can live to be 750 years old.</p>
              <li>Size</li>
              <p>Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.</p>
              <li>Speed</li>
              <p>Your base walking speed is 30 feet.</p>
              <li>Darkvision</li>
              <p>Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions.
                You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were
                dim light. You can’t discern color in darkness, only shades of gray.</p>
              <li>Keen Senses</li>
              <p>You have proficiency in the Perception skill.</p>
              <li>Fey Ancestry</li>
              <p>You have advantage on saving throws against being charmed, and magic can’t put you to sleep.</p>
              <li>Trance</li>
              <p>Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day.
                (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such
                dreams are actually mental exercises that have become reflexive through years of practice. After resting
                in this way, you gain the same benefit that a human does from 8 hours of sleep.</p>
              <li>Languages</li>
              <p>You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and
                intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other
                races. Many bards learn their language so they can add Elvish ballads to their repertoires.</p>
            </ul>

        <!-- Aside Tiefling -->
        <div class="img-container tiefling-aside">
          <img src="../assets/races/Tiefling.png" alt="Tiefling" class="img-fluid" aria-label="Tiefling Features">
        </div>
        <h5>Species Details</h5>
        <ul class="links-raza">
          <li><a href="#fiendish-heritage" aria-label="Link Fiendish Heritage">Fiendish Heritage</a></li>
          <li><a href="#a-devil’s-deal" aria-label="Link A Devil’s Deal">A Devil's Deal</a></li>
          <li><a href="#tiefling-names" aria-label="Link Tiefling Names">Tiefling Names</a></li>
        </ul>
        <h5>Traits</h5>
            <ul>
              <li>Ability Score Increase</li>
              <p>Your Dexterity score increases by 2.</p>
              <li>Age</li>
              <p>Although elves reach physical maturity at about the same age as humans, the elven understanding of
                adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood
                and an adult name around the age of 100 and can live to be 750 years old.</p>
              <li>Size</li>
              <p>Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.</p>
              <li>Speed</li>
              <p>Your base walking speed is 30 feet.</p>
              <li>Darkvision</li>
              <p>Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions.
                You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were
                dim light. You can’t discern color in darkness, only shades of gray.</p>
              <li>Keen Senses</li>
              <p>You have proficiency in the Perception skill.</p>
              <li>Fey Ancestry</li>
              <p>You have advantage on saving throws against being charmed, and magic can’t put you to sleep.</p>
              <li>Trance</li>
              <p>Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day.
                (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such
                dreams are actually mental exercises that have become reflexive through years of practice. After resting
                in this way, you gain the same benefit that a human does from 8 hours of sleep.</p>
              <li>Languages</li>
              <p>You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and
                intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other
                races. Many bards learn their language so they can add Elvish ballads to their repertoires.</p>
            </ul>

          </aside>

          <!-- Texto Dwarf -->
          <div class="col-12 col-md-9">
            <div class="raza-dwarf">
              <div class="apartados" id="raza-dwarf">
                <h2 class="races-title">Dwarf</h2>
                <p>
                  Kingdoms rich in ancient grandeur, halls carved into the roots of mountains, the echoing of picks and
                  hammers in deep mines and blazing forges, a commitment to clan and tradition, and a burning hatred of
                  goblins and orcs—these common threads unite all dwarves.
                </p>

                <div class="apartado-1">
                  <h3 id="short-and-stout">Short and Stout</h3>
                  <p>Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.
                    Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh as
                    much as a human standing nearly two feet taller. Their courage and endurance are also easily a match
                    for any of the larger folk.

                    Dwarven skin ranges from deep brown to a paler hue tinged with red, but the most common shades are
                    light brown or deep tan, like certain tones of earth. Their hair, worn long but in simple styles, is
                    usually black, gray, or brown, though paler dwarves often have red hair. Male dwarves value their
                    beards highly and groom them carefully.</p>
                </div>
                <div class="apartado-2">
                  <h3 id="long-memory">Long Memory, Long Grudges</h3>
                  <p>Dwarves can live to be more than 400 years old, so the oldest living dwarves often remember a very
                    different world. For example, some of the oldest dwarves living in Citadel Felbarr (in the world of
                    the Forgotten Realms) can recall the day, more than three centuries ago, when orcs conquered the
                    fortress and drove them into an exile that lasted over 250 years. This longevity grants them a
                    perspective on the world that shorter-lived races such as humans and halflings lack.

                    Dwarves are solid and enduring like the mountains they love, weathering the passage of centuries
                    with stoic endurance and little change. They respect the traditions of their clans, tracing their
                    ancestry back to the founding of their most ancient strongholds in the youth of the world, and don’t
                    abandon those traditions lightly.
                    <br> Part of those traditions is devotion to the gods of the dwarves, who uphold the dwarven ideals
                    of industrious labor, skill in battle, and devotion to the forge.

                    Individual dwarves are determined and loyal, true to their word and decisive in action, sometimes to
                    the point of stubbornness. Many dwarves have a strong sense of justice, and they are slow to forget
                    wrongs they have suffered. A wrong done to one dwarf is a wrong done to the dwarf’s entire clan, so
                    what begins as one dwarf’s hunt for vengeance can become a full-blown clan feud.
                  </p>
                </div>
                <div class="apartado-3">
                  <h3 id="clans-and-kingdoms">Clans and Kingdoms</h3>
                  <p>Dwarven kingdoms stretch deep beneath the mountains where the dwarves mine gems and precious metals
                    and forge items of wonder. They love the beauty and artistry of precious metals and fine jewelry,
                    and in some dwarves this love festers into avarice. Whatever wealth they can’t find in their
                    mountains, they gain through trade. They dislike boats, so enterprising humans and halflings
                    frequently handle trade in dwarven goods along water routes. Trustworthy members of other races are
                    welcome in dwarf settlements, though some areas are off limits even to them.

                    The chief unit of dwarven society is the clan, and dwarves highly value social standing. Even
                    dwarves who live far from their own kingdoms cherish their clan identities and affiliations,
                    recognize related dwarves, and invoke their ancestors’ names in oaths and curses. To be clanless is
                    the worst fate that can befall a dwarf.

                    Dwarves in other lands are typically artisans, especially weaponsmiths, armorers, and jewelers. Some
                    become mercenaries or bodyguards, highly sought after for their courage and loyalty.</p>
                </div>
                <div class="apartado-4">
                  <h3 id="gods-and-clan">Gods, Gold, and Clan</h3>
                  <p>Dwarves who take up the adventuring life might be motivated by a desire for treasure—for its own
                    sake, for a specific purpose, or even out of an altruistic desire to help others. Other dwarves are
                    driven by the command or inspiration of a deity, a direct calling or simply a desire to bring glory
                    to one of the dwarf gods. Clan and ancestry are also important motivators. A dwarf might seek to
                    restore a clan’s lost honor, avenge an ancient wrong the clan suffered, or earn a new place within
                    the clan after having been exiled. Or a dwarf might search for the axe wielded by a mighty ancestor,
                    lost on the field of battle centuries ago.</p>
                </div>
                <div class="apartado-5">
                  <h3 id="dwarf-names">Dwarf Names</h3>
                  <p>A dwarf’s name is granted by a clan elder, in accordance with tradition. Every proper dwarven name
                    has been used and reused down through the generations. A dwarf’s name belongs to the clan, not to
                    the individual. A dwarf who misuses or brings shame to a clan name is stripped of the name and
                    forbidden by law to use any dwarven name in its place.

                    <br><br>Male Names: Adrik, Alberich, Baern, Barendd, Brottor, Bruenor, Dain, Darrak, Delg, Eberk,
                    Einkil, Fargrim, Flint, Gardain, Harbek, Kildrak, Morgran, Orsik, Oskar, Rangrim, Rurik, Taklinn,
                    Thoradin, Thorin, Tordek, Traubon, Travok, Ulfgar, Veit, Vondal

                    <br><br>Female Names: Amber, Artin, Audhild, Bardryn, Dagnal, Diesa, Eldeth, Falkrunn, Finellen,
                    Gunnloda, Gurdis, Helja, Hlin, Kathra, Kristryd, Ilde, Liftrasa, Mardred, Riswynn, Sannl, Torbera,
                    Torgga, Vistra

                    <br><br>Clan Names: Balderk, Battlehammer, Brawnanvil, Dankil, Fireforge, Frostbeard, Gorunn,
                    Holderhek, Ironfist, Loderr, Lutgehr, Rumnaheim, Strakeln, Torunn, Ungart
                  </p>
                </div>
              </div>

              <!--Elf-->
              <!-- Texto -->

              <div class="raza-elf">
                <div class="apartados" id="raza-elf">
                  <h2 class="races-title">Elf</h2>
                  <p>Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.
                    They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires
                    glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on
                    the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of
                    the world.</p>

                  <div class="apartado-1">
                    <h3 id="slender-and-graceful">Slender and Graceful</h3>
                    <p>With their unearthly grace and fine features, elves appear hauntingly beautiful to humans and
                      members of many other races. They are slightly shorter than humans on average, ranging from well
                      under 5 feet tall to just over 6 feet. They are more slender than humans, weighing only 100 to 145
                      pounds. Males and females are about the same height, and males are only marginally heavier than
                      females.

                      Elves’ coloration encompasses the normal human range and also includes skin in shades of copper,
                      bronze, and almost bluish-white, hair of green or blue, and eyes like pools of liquid gold or
                      silver. Elves have no facial and little body hair. They favor elegant clothing in bright colors,
                      and they enjoy simple yet lovely jewelry.</p>
                  </div>
                  <div class="apartado-2">
                    <h3 id="a-timeless-perspective">A Timeless Perspective</h3>
                    <p>Elves can live well over 700 years, giving them a broad perspective on events that might trouble
                      the shorter-lived races more deeply. They are more often amused than excited, and more likely to
                      be curious than greedy. They tend to remain aloof and unfazed by petty happenstance. When pursuing
                      a goal, however, whether adventuring on a mission or learning a new skill or art, elves can be
                      focused and relentless. They are slow to make friends and enemies, and even slower to forget them.
                      They reply to petty insults with disdain and to serious insults with vengeance.

                      <br><br>Like the branches of a young tree, elves are flexible in the face of danger. They trust in
                      diplomacy and compromise to resolve differences before they escalate to violence. They have been
                      known to retreat from intrusions into their woodland homes, confident that they can simply wait
                      the invaders out. But when the need arises, elves reveal a stern martial side, demonstrating skill
                      with sword, bow, and strategy.
                    </p>
                  </div>
                  <div class="apartado-3">
                    <h3 id="hidden-woodland-realms">Hidden Woodland Realms</h3>
                    <p>Most elves dwell in small forest villages hidden among the trees. Elves hunt game, gather food,
                      and grow vegetables, and their skill and magic allow them to support themselves without the need
                      for clearing and plowing land. They are talented artisans, crafting finely worked clothes and art
                      objects. Their contact with outsiders is usually limited, though a few elves make a good living by
                      trading crafted items for metals (which they have no interest in mining).

                      <br><br>Elves encountered outside their own lands are commonly traveling minstrels, artists, or
                      sages. Human nobles compete for the services of elf instructors to teach swordplay or magic to
                      their children.
                    </p>
                  </div>
                  <div class="apartado-4">
                    <h3 id="exploration-and-adventure">Exploration and Adventure</h3>
                    <p>Elves take up adventuring out of wanderlust. Since they are so long-lived, they can enjoy
                      centuries of exploration and discovery. They dislike the pace of human society, which is
                      regimented from day to day but constantly changing over decades, so they find careers that let
                      them travel freely and set their own pace. Elves also enjoy exercising their martial prowess or
                      gaining greater magical power, and adventuring allows them to do so. Some might join with rebels
                      fighting against oppression, and others might become champions of moral causes.</p>
                  </div>
                  <div class="apartado-5">
                    <h3 id="elf-names">Elf Names</h3>
                    <p>
                      Elves are considered children until they declare themselves adults, some time after the hundredth
                      birthday, and before this period they are called by child names.

                      On declaring adulthood, an elf selects an adult name, although those who knew him or her as a
                      youngster might continue to use the child name. Each elf’s adult name is a unique creation, though
                      it might reflect the names of respected individuals or other family members. Little distinction
                      exists between male names and female names; the groupings here reflect only general tendencies. In
                      addition, every elf bears a family name, typically a combination of other Elvish words. Some elves
                      traveling among humans translate their family names into Common, but others retain the Elvish
                      version.
                      <br><br>Child Names: Ara, Bryn, Del, Eryn, Faen, Innil, Lael, Mella, Naill, Naeris, Phann, Rael,
                      Rinn, Sai, Syllin, Thia, Vall

                      <br><br>Male Adult Names: Adran, Aelar, Aramil, Arannis, Aust, Beiro, Berrian, Carric, Enialis,
                      Erdan, Erevan, Galinndan, Hadarai, Heian, Himo, Immeral, Ivellios, Laucian, Mindartis, Paelias,
                      Peren, Quarion, Riardon, Rolen, Soveliss, Thamior, Tharivol, Theren, Varis

                      <br><br>Female Adult Names: Adrie, Althaea, Anastrianna, Andraste, Antinua, Bethrynna, Birel,
                      Caelynn, Drusilia, Enna, Felosial, Ielenia, Jelenneth, Keyleth, Leshanna, Lia, Meriele, Mialee,
                      Naivara, Quelenna, Quillathe, Sariel, Shanairra, Shava, Silaqui, Theirastra, Thia, Vadania,
                      Valanthe, Xanaphia

                      <br><br>Clan Names: Amakiir (Gemflower), Amastacia (Starflower), Galanodel (Moonwhisper), Holimion
                      (Diamonddew), Ilphelkiir (Gemblossom), Liadon (Silverfrond), Meliamne (Oakenheel), Naïlo
                      (Nightbreeze), Siannodel (Moonbrook), Xiloscient (Goldpetal)
                    </p>
                  </div>
                </div>
              </div>

              <!--Halfling-->
              <!-- Texto -->

              <div class="raza-halfling">
                <div class="apartados" id="raza-halfling">
                  <h2 class="races-title">Halfling</h2>
                  <p>The comforts of home are the goals of most halflings’ lives: a place to settle in peace and quiet,
                    far from marauding monsters and clashing armies; a blazing fire and a generous meal; fine drink and
                    fine conversation. Though some halflings live out their days in remote agricultural communities,
                    others form nomadic bands that travel constantly, lured by the open road and the wide horizon to
                    discover the wonders of new lands and peoples. But even these wanderers love peace, food, hearth,
                    and home, though home might be a wagon jostling along a dirt road or a raft floating downriver.</p>

                  <div class="apartado-1">
                    <h3 id="small-and-practical">Small and Practical</h3>
                    <p>The diminutive halflings survive in a world full of larger creatures by avoiding notice or,
                      barring that, avoiding offense. Standing about 3 feet tall, they appear relatively harmless and so
                      have managed to survive for centuries in the shadow of empires and on the edges of wars and
                      political strife. They are inclined to be stout, weighing between 40 and 45 pounds.

                      <br><br>Halflings’ skin ranges from tan to pale with a ruddy cast, and their hair is usually brown
                      or sandy brown and wavy. They have brown or hazel eyes. Halfling men often sport long sideburns,
                      but beards are rare among them and mustaches even more so. They like to wear simple, comfortable,
                      and practical clothes, favoring bright colors.

                      <br><br>Halfling practicality extends beyond their clothing. They’re concerned with basic needs
                      and simple pleasures and have little use for ostentation. Even the wealthiest of halflings keep
                      their treasures locked in a cellar rather than on display for all to see. They have a knack for
                      finding the most straightforward solution to a problem, and have little patience for dithering.
                    </p>
                  </div>
                  <div class="apartado-2">
                    <h3 id="kind-and-curious">Kind and Curious</h3>
                    <p>Halflings are an affable and cheerful people. They cherish the bonds of family and friendship as
                      well as the comforts of hearth and home, harboring few dreams of gold or glory. Even adventurers
                      among them usually venture into the world for reasons of community, friendship, wanderlust, or
                      curiosity. They love discovering new things, even simple things, such as an exotic food or an
                      unfamiliar style of clothing.

                      <br><br>Halflings are easily moved to pity and hate to see any living thing suffer. They are
                      generous, happily sharing what they have even in lean times.
                    </p>
                  </div>
                  <div class="apartado-3">
                    <h3 id="blend-into-the-crowd">Blend into the Crowd</h3>
                    <p>Halflings are adept at fitting into a community of humans, dwarves, or elves, making themselves
                      valuable and welcome. The combination of their inherent stealth and their unassuming nature helps
                      halflings to avoid unwanted attention.
                      <br><br>Halflings work readily with others, and they are loyal to their friends, whether halfling
                      or otherwise. They can display remarkable ferocity when their friends, families, or communities
                      are threatened.
                    </p>
                  </div>
                  <div class="apartado-4">
                    <h3 id="pastoral-pleasantries">Pastoral Pleasantries</h3>
                    <p>Most halflings live in small, peaceful communities with large farms and well-kept groves. They
                      rarely build kingdoms of their own or even hold much land beyond their quiet shires. They
                      typically don’t recognize any sort of halfling nobility or royalty, instead looking to family
                      elders to guide them. Families preserve their traditional ways despite the rise and fall of
                      empires.
                      <br><br>Many halflings live among other races, where the halflings’ hard work and loyal outlook
                      offer them abundant rewards and creature comforts. Some halfling communities travel as a way of
                      life, driving wagons or guiding boats from place to place and maintaining no permanent home.
                    </p>
                  </div>
                  <div class="apartado-5">
                    <h3 id="exploring-opportunities">Exploring Opportunities</h3>
                    <p>Halflings usually set out on the adventurer’s path to defend their communities, support their
                      friends, or explore a wide and wonder-filled world. For them, adventuring is less a career than an
                      opportunity or sometimes a necessity.
                    </p>
                  </div>
                  <div class="apartado-6">
                    <h3 id="halfling-names">Halfling Names</h3>
                    <p>A halfling has a given name, a family name, and possibly a nickname. Family names are often
                      nicknames that stuck so tenaciously they have been passed down through the generations.

                      <br><br>Male Names: Alton, Ander, Cade, Corrin, Eldon, Errich, Finnan, Garret, Lindal, Lyle,
                      Merric, Milo, Osborn, Perrin, Reed, Roscoe, Wellby

                      <br><br>Female Names: Andry, Bree, Callie, Cora, Euphemia, Jillian, Kithri, Lavinia, Lidda, Merla,
                      Nedda, Paela, Portia, Seraphina, Shaena, Trym, Vani, Verna

                      <br><br>Clan Names: Brushgather, Goodbarrel, Greenbottle, High-hill, Hilltopple, Leagallow,
                      Tealeaf, Thorngage, Tosscobble, Underbough
                    </p>
                  </div>
                </div>
              </div>

              <!--Human-->
              <!-- Texto -->

              <div class="raza-human">
                <div class="apartados" id="raza-human">
                  <h2 class="races-title">Human</h2>
                  <p>In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on
                    the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because
                    of their shorter lives that they strive to achieve as much as they can in the years they are given.
                    Or maybe they feel they have something to prove to the elder races, and that’s why they build their
                    mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the
                    innovators, the achievers, and the pioneers of the worlds.</p>

                  <div class="apartado-1">
                    <h3 id="a-broad-spectrum">A Broad Spectrum</h3>
                    <p>With their penchant for migration and conquest, humans are more physically diverse than other
                      common races. There is no typical human. An individual can stand from 5 feet to a little over 6
                      feet tall and weigh from 125 to 250 pounds. Human skin shades range from nearly black to very
                      pale, and hair colors from black to blond (curly, kinky, or straight); males might sport facial
                      hair that is sparse or thick. A lot of humans have a dash of nonhuman blood, revealing hints of
                      elf, orc, or other lineages. Humans reach adulthood in their late teens and rarely live even a
                      single century.</p>
                  </div>
                  <div class="apartado-2">
                    <h3 id="variety-in-all-things">Variety in All Things</h3>
                    <p>Humans are the most adaptable and ambitious people among the common races. They have widely
                      varying tastes, morals, and customs in the many different lands where they have settled. When they
                      settle, though, they stay: they build cities to last for the ages, and great kingdoms that can
                      persist for long centuries. An individual human might have a relatively short life span, but a
                      human nation or culture preserves traditions with origins far beyond the reach of any single
                      human’s memory. They live fully in the present—making them well suited to the adventuring life—but
                      also plan for the future, striving to leave a lasting legacy. Individually and as a group, humans
                      are adaptable opportunists, and they stay alert to changing political and social dynamics.</p>
                  </div>
                  <div class="apartado-3">
                    <h3 id="lasting-institutions">Lasting Institutions</h3>
                    <p>Where a single elf or dwarf might take on the responsibility of guarding a special location or a
                      powerful secret, humans found sacred orders and institutions for such purposes. While dwarf clans
                      and halfling elders pass on the ancient traditions to each new generation, human temples,
                      governments, libraries, and codes of law fix their traditions in the bedrock of history. Humans
                      dream of immortality, but (except for those few who seek undeath or divine ascension to escape
                      death’s clutches) they achieve it by ensuring that they will be remembered when they are gone.
                      <br><br>Although some humans can be xenophobic, in general their societies are inclusive. Human
                      lands welcome large numbers of nonhumans compared to the proportion of humans who live in nonhuman
                      lands.
                    </p>
                  </div>
                  <div class="apartado-4">
                    <h3 id="exemplars-of-ambition">Exemplars of Ambition</h3>
                    <p>Humans who seek adventure are the most daring and ambitious members of a daring and ambitious
                      race. They seek to earn glory in the eyes of their fellows by amassing power, wealth, and fame.
                      More than other people, humans champion causes rather than territories or groups.</p>
                  </div>
                  <div class="apartado-5">
                    <h3 id="human-names-and-ethnicities">Human Names and Ethnicities</h3>
                    <p>Having so much more variety than other cultures, humans as a whole have no typical names. Some
                      human parents give their children names from other languages, such as Dwarvish or Elvish
                      (pronounced more or less correctly), but most parents give names that are linked to their region’s
                      culture or to the naming traditions of their ancestors.
                      <br><br>The material culture and physical characteristics of humans can change wildly from region
                      to region. In the Forgotten Realms, for example, the clothing, architecture, cuisine, music, and
                      literature are different in the northwestern lands of the Silver Marches than in distant Turmish
                      or Impiltur to the east—and even more distinctive in far-off Kara-Tur. Human physical
                      characteristics, though, vary according to the ancient migrations of the earliest humans, so that
                      the humans of the Silver Marches have every possible variation of coloration and features.
                      <br><br>In the Forgotten Realms, nine human ethnic groups are widely recognized, though over a
                      dozen others are found in more localized areas of Faerûn. These groups, and the typical names of
                      their members, can be used as inspiration no matter which world your human is in.
                    </p>
                  </div>
                  <div class="apartado-6">
                    <h3 id="human-names">Human Names</h3>
                    <p>

                      <br><br>Male Names: Aseir, Bardeid, Haseid, Khemed, Mehmen, Sudeiman, Zasheir; Darvin, Dorn,
                      Evendur, Gorstag, Grim, Helm, Malark, Morn, Randal, Stedd; Bor, Fodel, Glar, Grigor, Igan, Ivor,
                      Kosef, Mival, Orel, Pavel, Sergor; Ander, Blath, Bran, Frath, Geth, Lander, Luth, Malcer, Stor,
                      Taman, Urth; Aoth, Bareris, Ehput-Ki, Kethoth, Mumed, Ramas, So-Kehur, Thazar-De, Urhur;

                      <br><br>Female Names: Atala, Ceidil, Hama, Jasmal, Meilil, Seipora, Yasheira, Zasheida; (surnames)
                      Basha, Dumein, Jassan, Khalid, Mostana, Pashar, Rein; Arveene, Esvele, Jhessail, Kerri, Lureene,
                      Miri, Rowan, Shandri, Tessele; Alethra, Kara, Katernin, Mara, Natali, Olma, Tana, Zora;Amafrey,
                      Betha, Cefrey, Kethra, Mara, Olga, Silifrey, Westra; rizima, Chathi, Nephis, Nulara, Murithi,
                      Sefris, Thola, Umara, Zolis;

                      <br><br>Clan Names: Turami, Tethyrian, Shou, Rashemi, Mulan, Illuskan, Damaran, Chondathan,
                      Calishite.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Dragonborn-->
              <!-- Texto -->

              <div class="raza-dragonborn">
                <div class="apartados" id="raza-dragonborn">
                  <h2 class="races-title">Dragonborn</h2>
                  <p>Born of dragons, as their name proclaims, the dragonborn walk proudly through a world that greets
                    them with fearful incomprehension. Shaped by draconic gods or the dragons themselves, dragonborn
                    originally hatched from dragon eggs as a unique race, combining the best attributes of dragons and
                    humanoids. Some dragonborn are faithful servants to true dragons, others form the ranks of soldiers
                    in great wars, and still others find themselves adrift, with no clear calling in life.</p>

                  <div class="apartado-1">
                    <h3 id="proud-dragon-kin">Proud Dragon Kin</h3>
                    <p>Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or
                      a tail. The first dragonborn had scales of vibrant hues matching the colors of their dragon kin,
                      but generations of interbreeding have created a more uniform appearance. Their small, fine scales
                      are usually brass or bronze in color, sometimes ranging to scarlet, rust, gold, or copper-green.
                      They are tall and strongly built, often standing close to 6½ feet tall and weighing 300 pounds or
                      more. Their hands and feet are strong, talonlike claws with three fingers and a thumb on each
                      hand.
                      <br><br>The blood of a particular type of dragon runs very strong through some dragonborn clans.
                      These dragonborn often boast scales that more closely match those of their dragon ancestor—bright
                      red, green, blue, or white, lustrous black, or gleaming metallic gold, silver, brass, copper, or
                      bronze.
                    </p>
                  </div>
                  <div class="apartado-2">
                    <h3 id="self-sufficient-clans">Self-Sufficient Clans</h3>
                    <p>To any dragonborn, the clan is more important than life itself. Dragonborn owe their devotion and
                      respect to their clan above all else, even the gods. Each dragonborn’s conduct reflects on the
                      honor of his or her clan, and bringing dishonor to the clan can result in expulsion and exile.
                      Each dragonborn knows his or her station and duties within the clan, and honor demands maintaining
                      the bounds of that position.
                      <br><br>A continual drive for self-improvement reflects the self-sufficiency of the race as a
                      whole. Dragonborn value skill and excellence in all endeavors. They hate to fail, and they push
                      themselves to extreme efforts before they give up on something. A dragonborn holds mastery of a
                      particular skill as a lifetime goal. Members of other races who share the same commitment find it
                      easy to earn the respect of a dragonborn.
                      <br><br>Though all dragonborn strive to be self-sufficient, they recognize that help is sometimes
                      needed in difficult situations. But the best source for such help is the clan, and when a clan
                      needs help, it turns to another dragonborn clan before seeking aid from other races—or even from
                      the gods.
                    </p>
                  </div>
                  <div class="apartado-3">
                    <h3 id="dragonborn-names">Dragonborn Names</h3>
                    <p>
                      Dragonborn have personal names given at birth, but they put their clan names first as a mark of
                      honor. A childhood name or nickname is often used among clutchmates as a descriptive term or a
                      term of endearment. The name might recall an event or center on a habit.
                      <br><br>Male Names: Arjhan, Balasar, Bharash, Donaar, Ghesh, Heskan, Kriv, Medrash, Mehen, Nadarr,
                      Pandjed, Patrin, Rhogar, Shamash, Shedinn, Tarhun, Torinn

                      <br><br>Female Names: Akra, Biri, Daar, Farideh, Harann, Havilar, Jheri, Kava, Korinn, Mishann,
                      Nala, Perra, Raiann, Sora, Surina, Thava, Uadjit

                      <br><br>Clan Names: Clethtinthiallor, Daardendrian, Delmirev, Drachedandion, Fenkenkabradon,
                      Kepeshkmolik, Kerrhylon, Kimbatuul, Linxakasendalor, Myastan, Nemmonis, Norixius, Ophinshtalajiir,
                      Prexijandilin, Shestendeliath, Turnuroth, Verthisathurgiesh, Yarjerit
                    </p>
                  </div>
                </div>
              </div>

              <!--Gnome-->
              <!-- Texto -->

              <div class="raza-gnome">
                <div class="apartados" id="raza-gnome">
                  <h2 class="races-title">Gnome</h2>
                  <p>A constant hum of busy activity pervades the warrens and neighborhoods where gnomes form their close-knit communities. Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, a yelp of surprise or triumph, and especially bursts of laughter. Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play.</p>

                  <div class="apartado-1">
                    <h3 id="vibrant-expression">Vibrant Expression</h3>
                    <p>A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body.
                      Gnomes average slightly over 3 feet tall and weigh 40 to 45 pounds. Their tan or brown faces are
                      usually adorned with broad smiles (beneath their prodigious noses), and their bright eyes shine
                      with excitement. Their fair hair has a tendency to stick out in every direction, as if expressing
                      the gnome’s insatiable interest in everything around.
                      <br><br> A gnome’s personality is writ large in his or her appearance. A male gnome’s beard, in
                      contrast to his wild hair, is kept carefully trimmed but often styled into curious forks or neat
                      points. A gnome’s clothing, though usually made in modest earth tones, is elaborately decorated
                      with embroidery, embossing, or gleaming jewels.
                    </p>
                  </div>
                  <div class="apartado-2">
                    <h3 id="delighted-dedication">Delighted Dedication</h3>
                    <p>As far as gnomes are concerned, being alive is a wonderful thing, and they squeeze every ounce of
                      enjoyment out of their three to five centuries of life. Humans might wonder about getting bored
                      over the course of such a long life, and elves take plenty of time to savor the beauties of the
                      world in their long years, but gnomes seem to worry that even with all that time, they can’t get
                      in enough of the things they want to do and see.
                      <br><br>Gnomes speak as if they can’t get the thoughts out of their heads fast enough. Even as
                      they offer ideas and opinions on a range of subjects, they still manage to listen carefully to
                      others, adding the appropriate exclamations of surprise and appreciation along the way.
                      <br><br>Though gnomes love jokes of all kinds, particularly puns and pranks, they’re just as
                      dedicated to the more serious tasks they undertake. Many gnomes are skilled engineers, alchemists,
                      tinkers, and inventors. They’re willing to make mistakes and laugh at themselves in the process of
                      perfecting what they do, taking bold (sometimes foolhardy) risks and dreaming large.
                    </p>
                  </div>
                  <div class="apartado-3">
                    <h3 id="bright-burrows">Bright Burrows</h3>
                    <p>Gnomes make their homes in hilly, wooded lands. They live underground but get more fresh air than
                      dwarves do, enjoying the natural, living world on the surface whenever they can. Their homes are
                      well hidden by both clever construction and simple illusions. Welcome visitors are quickly ushered
                      into the bright, warm burrows. Those who are not welcome are unlikely to find the burrows in the
                      first place.
                      <br><br>Gnomes who settle in human lands are commonly gemcutters, engineers, sages, or tinkers.
                      Some human families retain gnome tutors, ensuring that their pupils enjoy a mix of serious
                      learning and delighted enjoyment. A gnome might tutor several generations of a single human family
                      over the course of his or her long life.
                    </p>
                  </div>
                  <div class="apartado-4">
                    <h3 id="seeing-the-world">Seeing the World</h3>
                    <p>Curious and impulsive, gnomes might take up adventuring as a way to see the world or for the love
                      of exploring. As lovers of gems and other fine items, some gnomes take to adventuring as a quick,
                      if dangerous, path to wealth. Regardless of what spurs them to adventure, gnomes who adopt this
                      way of life eke as much enjoyment out of it as they do out of any other activity they undertake,
                      sometimes to the great annoyance of their adventuring companions.</p>
                  </div>
                  <div class="apartado-5">
                    <h3 id="gnome-names">Gnome Names</h3>
                    <p>Gnomes love names, and most have half a dozen or so. A gnome’s mother, father, clan elder, aunts,
                      and uncles each give the gnome a name, and various nicknames from just about everyone else might
                      or might not stick over time. Gnome names are typically variants on the names of ancestors or
                      distant relatives, though some are purely new inventions. When dealing with humans and others who
                      are “stuffy” about names, a gnome learns to use no more than three names: a personal name, a clan
                      name, and a nickname, choosing the one in each category that’s the most fun to say.

                      <br><br>Male Names: Alston, Alvyn, Boddynock, Brocc, Burgell, Dimble, Eldon, Erky, Fonkin, Frug,
                      Gerbo, Gimble, Glim, Jebeddo, Kellen, Namfoodle, Orryn, Roondar, Seebo, Sindri, Warryn, Wrenn,
                      Zook

                      <br><br>Female Names: Bimpnottin, Breena, Caramip, Carlin, Donella, Duvamil, Ella, Ellyjobell,
                      Ellywick, Lilli, Loopmottin, Lorilla, Mardnab, Nissa, Nyx, Oda, Orla, Roywyn, Shamil, Tana,
                      Waywocket, Zanna

                      <br><br>Clan Names:Beren, Daergel, Folkor, Garrick, Nackle, Murnig, Ningel, Raulnor, Scheppen,
                      Timbers, Turen
                    </p>
                  </div>
                </div>
              </div>

              <!--Half-Elf-->
              <!-- Texto -->

              <div class="raza-halfelf">
                <div class="apartados" id="raza-halfelf">
                  <h2 class="races-title">Half-Elf</h2>
                  <p>To humans, half-elves look like elves, and to elves, they look human. In height, they’re on par
                    with both parents, though they’re neither as slender as elves nor as broad as humans. They range
                    from under 5 feet to about 6 feet tall, and from 100 to 180 pounds, with men only slightly taller
                    and heavier than women. Half-elf men do have facial hair, and sometimes grow beards to mask their
                    elven ancestry. Half-elven coloration and features lie somewhere between their human and elf
                    parents, and thus show a variety even more pronounced than that found among either race. They tend
                    to have the eyes of their elven parents.</p>

                  <div class="apartado-1">
                    <h3 id="of-two-worlds">Of Two Worlds</h3>
                    <p>To humans, half-elves look like elves, and to elves, they look human. In height, they’re on par
                      with both parents, though they’re neither as slender as elves nor as broad as humans. They range
                      from under 5 feet to about 6 feet tall, and from 100 to 180 pounds, with men only slightly taller
                      and heavier than women. Half-elf men do have facial hair, and sometimes grow beards to mask their
                      elven ancestry. Half-elven coloration and features lie somewhere between their human and elf
                      parents, and thus show a variety even more pronounced than that found among either race. They tend
                      to have the eyes of their elven parents.
                    </p>
                  </div>
                  <div class="apartado-2">
                    <h3 id="diplomats-or-wanderers">Diplomats or Wanderers</h3>
                    <p>Half-elves have no lands of their own, though they are welcome in human cities and somewhat less
                      welcome in elven forests. In large cities in regions where elves and humans interact often,
                      half-elves are sometimes numerous enough to form small communities of their own. They enjoy the
                      company of other half-elves, the only people who truly understand what it is to live between these
                      two worlds.
                      <br><br>In most parts of the world, though, half-elves are uncommon enough that one might live for
                      years without meeting another. Some half-elves prefer to avoid company altogether, wandering the
                      wilds as trappers, foresters, hunters, or adventurers and visiting civilization only rarely. Like
                      elves, they are driven by the wanderlust that comes of their longevity. Others, in contrast, throw
                      themselves into the thick of society, putting their charisma and social skills to great use in
                      diplomatic roles or as swindlers.
                    </p>
                  </div>
                  <div class="apartado-3">
                    <h3 id="half-elf-variants">Half-Elf Variants</h3>
                    <p>Some half-elves in Faerûn have a racial trait in place of the Skill Versatility trait. If your DM
                      allows it, your half-elf character can forgo Skill Versatility and instead take the elf trait Keen
                      Senses or a trait based on your elf parentage</p>
                  </div>
                  <div class="apartado-4">
                    <h3 id="half-elf-names">Half-Elf Names</h3>
                    <p>Half-elves use either human or elven naming conventions. As if to emphasize that they don’t
                      really fit in to either society, half-elves raised among humans are often given elven names, and
                      those raised among elves often take human names.</p>
                  </div>
                </div>
              </div>

              <!--Half-Orc-->
              <!-- Texto -->

              <div class="raza-halforc" id="raza-halforc">
                <div class="apartados">
                  <h2 class="races-title">Half Orc</h2>
                  <p>Whether united under the leadership of a mighty warlock or having fought to a standstill after
                    years of conflict, orc and human communities, sometimes form alliances. When these alliances are
                    sealed by marriages, half-orcs are born. Some half-orcs rise to become proud leaders of orc
                    communities. Some venture into the world to prove their worth. Many of these become adventurers,
                    achieving greatness for their mighty deeds.</p>

                  <div class="apartado-1">
                    <h3 id="scarred-and-strong">Scarred and Strong</h3>
                    <p>Half-orcs exhibit a blend of orcish and human characteristics, and their appearance varies
                      widely. Grayish skin tones and prominent teeth are the most common shared elements among these
                      folk.
                      <br><br>Orcs regard battle scars as tokens of pride and ornamental scars as things of beauty.
                      Other scars, though, mark an orc or half-orc as a former prisoner or a disgraced exile. Any
                      half-orc who has lived among or near orcs has scars, whether they are marks of humiliation or of
                      pride, recounting their past exploits and injuries.
                    </p>
                  </div>
                  <div class="apartado-2">
                    <h3 id="the-mark-of-gruumsh">The Mark of Gruumsh</h3>
                    <p>The one-eyed god Gruumsh—lord of war and fury—created the first orcs, and even those orcs who
                      turn away from his worship carry his blessings of might and endurance. The same is true of
                      half-orcs. Some half-orcs hear the whispers of Gruumsh in their dreams, calling them to unleash
                      the rage that simmers within them. Others feel Gruumsh’s exultation when they join in melee combat
                      — and either exult along with him or shiver with fear and loathing.
                      <br><br>Beyond the rage of Gruumsh, half-orcs feel emotion powerfully. Rage doesn’t just quicken
                      their pulse, it makes their bodies burn. An insult stings like acid, and sadness saps their
                      strength. But they laugh loudly and heartily, and simple pleasures — feasting, drinking,
                      wrestling, drumming, and wild dancing — fill their hearts with joy. They tend to be short-tempered
                      and sometimes sullen, more inclined to action than contemplation and to fighting than arguing. And
                      when their hearts swell with love, they leap to perform acts of great kindness and compassion.
                    </p>
                  </div>
                  <div class="apartado-3">
                    <h3 id="half-orc-names">Half-Orc Names</h3>
                    <p>Half-orcs usually have names appropriate to the culture in which they were raised. A half-orc who
                      wants to fit in among humans might trade an orc name for a human name. Some half-orcs with human
                      names decide to adopt a guttural orc name because they think it makes them more intimidating.

                      <br><br>Male Orc Names: Dench, Feng, Gell, Henk, Holg, Imsh, Keth, Krusk, Mhurren, Ront, Shump,
                      Thokk

                      <br><br>Female Orc Names: Baggi, Emen, Engong, Kansif, Myev, Neega, Ovak, Ownka, Shautha, Sutha,
                      Vola, Volen, Yevelda
                    </p>
                  </div>
                </div>
              </div>

              <!--Tiefling-->
              <!-- Texto -->

              <div class="raza-tiefling">
                <div class="apartados" id="raza-tiefling">
                  <h2 class="races-title">Tiefling</h2>
                  <p>To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling. And to twist the knife, tieflings know that this is because a pact struck generations ago infused the essence of Asmodeus—overlord of the Nine Hells—into their bloodline. Their appearance and their nature are not their fault but the result of an ancient sin, for which they and their children and their children’s children will always be held accountable.</p>

                  <div class="apartado-1">
                    <h3 id="infernal-bloodline">Infernal Bloodline</h3>
                    <p>Tieflings are derived from human bloodlines, and in the broadest possible sense, they still look
                      human. However, their infernal heritage has left a clear imprint on their appearance. Tieflings
                      have large horns that take any of a variety of shapes: some have curling horns like a ram, others
                      have straight and tall horns like a gazelle’s, and some spiral upward like an antelopes’ horns.
                      They have thick tails, four to five feet long, which lash or coil around their legs when they get
                      upset or nervous. Their canine teeth are sharply pointed, and their eyes are solid colors—black,
                      red, white, silver, or gold—with no visible sclera or pupil. Their skin tones cover the full range
                      of human coloration, but also include various shades of red. Their hair, cascading down from
                      behind their horns, is usually dark, from black or brown to dark red, blue, or purple.</p>
                  </div>
                  <div class="apartado-2">
                    <h3 id="self-reliant-and-suspicious">Self-Reliant and Suspicious</h3>
                    <p>Tieflings subsist in small minorities found mostly in human cities or towns, often in the
                      roughest quarters of those places, where they grow up to be swindlers, thieves, or crime lords.
                      Sometimes they live among other minority populations in enclaves where they are treated with more
                      respect.
                      <br><br>Lacking a homeland, tieflings know that they have to make their own way in the world and
                      that they have to be strong to survive. They are not quick to trust anyone who claims to be a
                      friend, but when a tiefling’s companions demonstrate that they trust him or her, the tiefling
                      learns to extend the same trust to them. And once a tiefling gives someone loyalty, the tiefling
                      is a firm friend or ally for life.
                    </p>
                  </div>
                  <div class="apartado-3">
                    <h3 id="tiefling-names">Tiefling Names</h3>
                    <p>Tiefling names fall into three broad categories. Tieflings born into another culture typically
                      have names reflective of that culture. Some have names derived from the Infernal language, passed
                      down through generations, that reflect their fiendish heritage. And some younger tieflings,
                      striving to find a place in the world, adopt a name that signifies a virtue or other concept and
                      then try to embody that concept. For some, the chosen name is a noble quest. For others, it’s a
                      grim destiny.

                      <br><br>Male Infernal Names: Akmenos, Amnon, Barakas, Damakos, Ekemon, Iados, Kairon, Leucis,
                      Melech, Mordai, Morthos, Pelaios, Skamos, Therai

                      <br><br>Female Infernal Names: Akta, Anakis, Bryseis, Criella, Damaia, Ea, Kallista, Lerissa,
                      Makaria, Nemeia, Orianna, Phelaia, Rieta

                      <br><br>“Virtue” Names: Art, Carrion, Chant, Creed, Despair, Excellence, Fear, Glory, Hope, Ideal,
                      Music, Nowhere, Open, Poetry, Quest, Random, Reverence, Sorrow, Temerity, Torment, Weary
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section class="ayudas">
        <div class="narrador-selector" aria-label="Narrator Selector" id="narrador">
    <h2>Selective Narrator</h2>
    <p>To help with reading, we have a section where the user can apply the narration once they select the text they want to listen to. Feel free to use it!</p>

    <!-- Alerta -->
    <PageAlert :isMuted="isMuted" @close="isMuted = false"></PageAlert>


    <!-- Narrador Escuchar Selección -->
    <div id="boton-escucha-selectiva">
      <!-- Control de Velocidad -->
      <label for="speed" aria-label="Speed bar">Speed:</label>
      <input
        type="range"
        id="speed"
        v-model="speed"
        min="0.5"
        max="2"
        step="0.1"
      />

      <!-- Control de Volumen -->
      <label for="volume" aria-label="Volume bar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-volume-up-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"
          />
          <path
            d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"
          />
          <path
            d="M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06"
          />
        </svg>
      </label>
      <input
        type="range"
        id="volume"
        v-model="volume"
        min="0"
        max="1"
        step="0.1"
      />

      <!-- boton -->
      <button
        @click="leerSeleccion"
        aria-label="Button to read selected text"
        class="boton-rojo"
      >
        Read Selected Text
      </button>
    </div>
  </div>
  <h2 id="video">Sign language video</h2>
  <div class="video-container" aria-label="Sign language video contenedor">
  <iframe 
    src="https://www.youtube.com/embed/3lagkvYStdo" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>
      </section>
      
    </div>
    <PageFooter aria-label="Footer"></PageFooter>
  </div>
</template>

<style>
body {
  background-color: transparent;
}
p h1 h2 h3 h4 h5 h6 {
  font-family: 'Poppins';
}

.guide h1 {
    font-size: 32px;
    font-weight: 700;
    position: relative;
    padding-top: 8%;
}

.guide h1:before,
.guide h1:after {
    content: "";
    width: 50px;
    height: 2px;
    background: var(--accent-color);
    display: inline-block;
}

.guide .races-title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #09131d;
  font-weight: bold;
  text-align: center;
  position: relative;

  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
}

.guide .races-title::before,
.guide .races-title::after {
  content: '';
  display: block;
  width: 35%;
  height: 2px;
  background-color: #b92929;
  margin: 0 10px;
  position: absolute;
  top: 50%;
}

.guide .races-title::before {
  left: 0;
}

.guide .races-title::after {
  right: 0;
}

.guide h1:before {
    margin: 0 15px 10px 0;
}

.guide h1:after {
    margin: 0 0 10px 15px;
}

/* Galeria */
.row.g-4 {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch; /* Fuerza que las tarjetas tengan la misma altura */
  padding-top: 5%;
}

.row.g-4 > div {
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/fondo_bosque.jpg');
  background-size: cover;
  background-position: center;
  filter: brightness(65%);
  z-index: -1;
}

.galeria_clases {
  z-index: 2;
  padding-bottom: 0;
}

.card {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.card img {
  height: 150px;
  object-fit: cover;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.card:hover img {
  transform: scale(1.1);
  filter: brightness(1.1);
}

.card-title {
  font-size: 1.25rem;
  color: #fff;
  font-weight: bold;
}

.card-text {
  font-size: 1rem;
  color: #fff;
}

.btn-primary {
  background-color: #b92929;
  color: #b92929;
  /* Sin tansicion para que los usus no puedan ver el nombre */
}

.btn-primary:hover {
  background-color: #291d04;
  transform: scale(1.05);
  color: #291d04;
}

/* Centrar la última tarjeta cuando quede sola en pantallas grandes */
@media (min-width: 1200px) {
  .last-card {
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 768px) {
    .guide h1 {
    padding-top: 30%;
    }
}

/* Botones atajos */

.botones-atajo {
  display: flex;
  justify-content: flex-start;
}

.botones-atajo .btn-group .btn {
  background-color: #b92929;
  color: #fff;
  border: none;
  border-radius: 0;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-right: 10px;
}

.botones-atajo .btn-group .btn:hover {
  background-color: #260404;
  transform: scale(1.05);
  color: #fff;
}

/* Aside */
.clase-selec {
  padding: 15px;
  height: 100%;
}

.clase-selec .row {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.clase-selec aside {
  background-color: #f4f4f4;
  padding: 15px;
  height: auto;
  margin-bottom: 20px;
}

.clase-selec .raza-dwarf {
  margin-top: 0;
  padding: 0 15px;
}

.clase-selec ul {
  margin: 0;
  padding: 0;
  padding-top: 3%;
}

.clase-selec li {
  list-style: none;
  text-align: left;
  font-weight: bold;
  margin-bottom: 5%;
  color: #fff;
}

.clase-selec h5 {
  padding-top: 10%;
  color: #fff;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.clase-selec p {
  color: #fff;
  font-size: 0.8rem;
  line-height: 1.7;
  margin-bottom: 10px;
  text-align: left;
}

.img-container img {
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 15px;
}

.links-raza a {
  color: #fff;
}

.raza-dwarf .raza-elf .raza-dragonborn .raza-gnome .raza-halfelf .raza-halfling .raza-human .raza-halforc .raza-tiefling {
  padding: 15px;
  background-color: transparent;
  margin-left: 15px;
}
.raza-gnome {padding-top: 58%;}
.raza-halforc {padding-top: 88%;}
.raza-tiefling {padding-top: 88%;}


.raza-dwarf .raza-elf .raza-dragonborn .raza-gnome .raza-halfelf .raza-halfling .raza-human .raza-halforc .raza-tiefling h3 {
  font-size: 1.5rem;
  color: #fff;
  font-weight: bold;
  margin-top: 20px;
}

.raza-dwarf .raza-elf .raza-dragonborn .raza-gnome .raza-halfelf .raza-halfling .raza-human .raza-halforc .raza-tiefling p {
  font-size: 1rem;
  color: #fff;
  line-height: 1.6;
}

/* Apartados */
.apartados h3 {
  font-size: 1.5rem;
  color: #a51010;
  font-weight: bold;
  margin-top: 8%;
  margin-bottom: 3%;
  border-bottom: 2px solid #000000;
  padding-bottom: 2%;
  margin-bottom: 5%;

}

.apartados p {
  font-size: 1rem;
  color: #fff;
  line-height: 1.6;
}
/* Títulos en la sección ayudas y el video */
.ayudas .narrador-selector,
.ayudas #sign-language-video {
  margin-bottom: 10%;
}
.ayudas #sign-language-video {
  margin-top: 10%;
}
.ayudas h2,
#sign-language-video h2 {
  font-size: 2rem;
  color: #09131d;
  font-weight: bold;
  text-align: center;
  position: relative;
  padding-bottom: 20px;
}

/* Títulos en la sección ayudas y el video */
.ayudas h2,
#sign-language-video h2 {
  font-size: 2rem;
  color: #09131d;
  font-weight: bold;
  text-align: center;
  position: relative;
  padding-bottom: 20px;
  margin-bottom: 5%;
}

/* Primera línea antes del título */
.ayudas h2::before,
#sign-language-video h2::before {
  content: '';
  display: block;
  width: 35%;
  height: 2px;
  background-color: #b92929;
  margin-bottom: 3.2%;
  position: absolute;
  bottom: 0;
  left: 0;
}

/* Segunda línea después del título */
.ayudas h2::after,
#sign-language-video h2::after {
  content: '';
  display: block;
  width: 35%;
  height: 2px;
  background-color: #b92929;
  margin-bottom: 3.2%;
  position: absolute;
  bottom: 0;
  right: 0;
}

/* Apartados de razas */
.raza-dwarf .raza-elf .raza-dragonborn .raza-gnome .raza-halfelf .raza-halfling .raza-human .raza-halforc .raza-tiefling .apartado-1,
.raza-dwarf .raza-elf .raza-dragonborn .raza-gnome .raza-halfelf .raza-halfling .raza-human .raza-halforc .raza-tiefling .apartado-2,
.raza-dwarf .raza-elf .raza-dragonborn .raza-gnome .raza-halfelf .raza-halfling .raza-human .raza-halforc .raza-tiefling .apartado-3,
.raza-dwarf .raza-elf .raza-dragonborn .raza-gnome .raza-halfelf .raza-halfling .raza-human .raza-halforc .raza-tiefling .apartado-4,
.raza-dwarf .raza-elf .raza-dragonborn .raza-gnome .raza-halfelf .raza-halfling .raza-human .raza-halforc .raza-tiefling .apartado-5 {
  margin-bottom: 5%;
  border-bottom: 2px solid #2b1f04;
  padding-bottom: 10px;
}

.elf-aside { padding-top: 150%;}
.dragonborn-aside { padding-top: 125%;}
.gnome-aside { padding-top: 20%;}
.halfelf-aside { padding-top: 70%;}
.halfling-aside { padding-top: 100%;}
.human-aside { padding-top: 80%;}
.halforc-aside { padding-top: 20%;}
.tiefling-aside{ padding-top: 20%;}

:focus {
  outline: 2px solid #b92929;
  outline-offset: 4px;
}

/*video */

.video-container {
  position: relative;
  width: 80%;
  height: 0;
  margin: 0 auto;
  margin-bottom: 3%;
  padding-top: 56.25%;
  background-color: #000;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
.boton-escucha-selectiva {
  display: flex; /* Usar flexbox para organizar los elementos */
  gap: 15px;
  padding: 20px;
}

.boton-escucha-selectiva label {
  margin-bottom: 5px; /* Espacio debajo de las etiquetas */
}

#boton-escucha-selectiva {

  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 15px;
}

#boton-escucha-selectiva label {
  margin-bottom: 5px;
}

.boton-rojo {
  background-color: rgb(151, 0, 0);
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 0.3em;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.boton-rojo:hover {
  background-color: rgb(34, 0, 0);
  transform: scale(1.05);
}

.boton-rojo:focus {
  outline: none;
  box-shadow: 0 0 5px 2px rgba(255, 0, 0, 0.6);
}
</style>

<script>
import PageFooter from '@/components/PageFooter.vue'
import PageAlert from '@/components/PageAlert.vue'
import { readSelection, narratorScript, setVolume } from '@/components/narrador.js'

export default {
  components: {
    PageFooter,
    PageAlert,
  },
  data () {
    return {
      speed: 1,
      volume: 1,
      isMuted: false, // Inicializamos como 'false' para que no esté muteado
      cards: [
        { alt: 'Dwarf', title: 'Dwarf', description: 'Explore the traits of Dwarves.', image: require('@/assets/races/Imagen_negro.jpg'), link: '#raza-dwarf' },
        { alt: 'Elf', title: 'Elf', description: 'Explore the traits of Elves.', image: require('@/assets/races/Imagen_negro.jpg'), link: '#raza-elf' },
        { alt: 'Halfling', title: 'Halfling', description: 'Explore the traits of Halflings.', image: require('@/assets/races/Imagen_negro.jpg'), link: '#raza-halfling' },
        { alt: 'Human', title: 'Human', description: 'Explore the traits of Humans.', image: require('@/assets/races/Imagen_negro.jpg'), link: '#raza-human' },
        { alt: 'Dragonborn', title: 'Dragonborn', description: 'Explore the traits of Dragonborn.', image: require('@/assets/races/Imagen_negro.jpg'), link: '#raza-dragonborn' },
        { alt: 'Gnome', title: 'Gnome', description: 'Explore the traits of Gnomes.', image: require('@/assets/races/Imagen_negro.jpg'), link: '#raza-gnome' },
        { alt: 'Half-Elf', title: 'Half-Elf', description: 'Explore the traits of Half-Elves.', image: require('@/assets/races/Imagen_negro.jpg'), link: '#raza-halfelf' },
        { alt: 'Half-Orc', title: 'Half-Orc', description: 'Explore the traits of Half-Orcs.', image: require('@/assets/races/Imagen_negro.jpg'), link: '#raza-halforc' },
        { alt: 'Tiefling', title: 'Tiefling', description: 'Explore the traits of Tieflings.', image: require('@/assets/races/Imagen_negro.jpg'), link: '#raza-tiefling' }
      ]
    }
  },
  methods: {
    leerSeleccion () {
      const selectedText = window.getSelection().toString()
      if (selectedText) {
        readSelection(selectedText, this.speed, this.volume) // Llamamos a la función importada
      } else {
        alert('Por favor selecciona un texto para leer.')
      }
    },
    // Esta función actualiza el volumen en el componente y en narratorScript
    updateVolume (newVolume) {
      this.volume = newVolume
      this.isMuted = newVolume === 0 // Actualiza el estado de muteado
      setVolume(newVolume) // Actualiza el volumen en narratorScript
    }
  },
  watch: {
    volume (newValue) {
      setVolume(newValue) // Actualiza el volumen en narratorScript

      // Asegúrate de que narratorScript está completamente inicializado
      if (narratorScript && typeof narratorScript.isMuted !== 'undefined') {
        this.isMuted = narratorScript.isMuted // Sincroniza el estado
        console.log('isMuted updated in Vue:', this.isMuted)
      } else {
        console.warn('narratorScript or isMuted is not available.')
      }
    }
  },
  computed: {
    cardRows () {
      const rows = []
      for (let i = 0; i < this.cards.length; i += 4) {
        rows.push(this.cards.slice(i, i + 4))
      }
      return rows
    }
  }
}
</script>
