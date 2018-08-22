const questions = [
  {
    question: "What year was Episode VI: Return of the Jedi released in North American theatres?",
    options: {
      a: "1980",
      b: "1983",
      c: "1986",
    },
    correctAnswer: "c"
  },

  {
    question: "What (were) the names of Luke's aunt and uncle?",
    options: {
      a: "Padme and Anakin Skywalker",
      b: "Owen and Beru Lars",
      c: "George and Marcia Lucas",
    },
    correctAnswer: "b"
  },

  {
    question: "What is Chewbacca's home planet?",
    options: {
      a: "Dathomir",
      b: "Corellia",
      c: "Kashyyyk",
    },
    correctAnswer: "c"
  },

  {
    question: "How many parsecs did Han Solo complete the Kessel Run in?",
    options: {
      a: "less than 12 parsecss",
      b: "About 14 parsecs",
      c: "Han Solo never made the Kessel Run, it is just a story he made up to kiss princesses",
    },
    correctAnswer: "b"
  },

  {
    question: "What is the species name of the creature in Jabba the Hutt's palace dungeon?",
    options: {
      a: "Sarlac",
      b: "Rancor",
      c: "Oliphaunt",
    },
    correctAnswer: "b"
  },

  {
    question: "Who was Qui-Gon Jinn's direct master when he was as a padawan?",
    options: {
      a: "Count Dooku",
      b: "Self taught",
      c: "Silas Portrun",
    },
    correctAnswer: "a"
  },

  {
    question: "What species is Watto, the junk-dealing slave-owner from Episode I/II",
    options: {
      a: "Cad-Baneian",
      b: "Thrawnian",
      c: "Toydarian",
    },
    correctAnswer: "c"
  },

  {
    question: "What planet does Luke travel to in order to get training from Master Yoda?",
    options: {
      a: "Dagobah",
      b: "Yavin IV",
      c: "Hoth",
    },
    correctAnswer: "a"
  },

  {
    question: "Who is the only member to sit on the Jedi Council and not achieve the rank of Master?",
    options: {
      a: "Anakin Skywalker",
      b: "Luke Skywalker",
      c: "Qui-Gonn Jinn",
    },
    correctAnswer: "a"
  },

  {
    question: "What was the intended title for Episode VI prior to 'Return of the Jedi'?",
    options: {
      a: "Revenge of the Jedi",
      b: "Attack of the Sith",
      c: "A Newer Hope",
    },
    correctAnswer: "a"
  },

  {
    question: "'I think it is time we demonstrated the full power of this station.' Who said this?",
    options: {
      a: "Grand Moff Tarkin",
      b: "The Emperor",
      c: "Admiral Ackbar"
    },
    correctAnswer: "a"
  },

  {
    question: "Who was Anakin Skywalker's father?",
    options: {
      a: "Cade Skywalker",
      b: "Owen Lars",
      c: "He didn't have one"
    },
    correctAnswer: "c"
  },

  {
    question: "What were the two opposing organizations in the Clone Wars?",
    options: {
      a: "The Galactic Republic and The Separatist Army",
      b: "The Rebel Alliance and the Galactic Empire",
      c: "The Gungan Grand Army and the Tusken Raiders"
    },
    correctAnswer: "a"
  },

  {
    question: "Who cut off half of Anakin Skywalker’s right arm with a lightsaber?",
    options: {
      a: "Darth Maul",
      b: "General Greivous",
      c: "Count Dooku"
    },
    correctAnswer: "c"
  },

  {
    question: "What is Count Dooku’s Sith name?",
    options: {
      a: "Darth Tyranus",
      b: "Darth Rex",
      c: "Darth Sidious"
    },
    correctAnswer: "a"
  },

  {
    question: "Name the alien race that incubated the clones used in the clone army?",
    options: {
      a: "Gungans",
      b: "Genosians",
      c: "Kaminoans"
    },
    correctAnswer: "c"
  },

  {
    question: "Who is the only non-Jedi/Sith character to use a lightsaber in the original trilogy?",
    options: {
      a: "Princess Leia",
      b: "Han Solo",
      c: "Boba Fett"
    },
    correctAnswer: "b"
  },

  {
    question: "What game do Chewbacca and R2-D2 play in ‘A New Hope’?",
    options: {
      a: "Jugger",
      b: "Cheops",
      c: "Dejarik"
    },
    correctAnswer: "c"
  },

  {
    question: "What does the “TIE” in TIE Fighter stand for?",
    options: {
      a: "Turbo Induction Encabulator",
      b: "Twin Ion Engine",
      c: "Techno Incantho Envulcanator"
    },
    correctAnswer: "b"
  },

  {
    question: "While filming ‘The Empire Strikes Back,’ which actor wasn’t sure if he/she wanted to return for a third movie?",
    options: {
      a: "Harrison Ford",
      b: "Carrie Fisher",
      c: "Mark Hamill"
    },
    correctAnswer: "a"
  },

  {
    question: "What famous composer has scored all the ‘Star Wars’ films so far?",
    options: {
      a: "John Barry",
      b: "Hans Zimmer",
      c: "John Williams"
    },
    correctAnswer: "c"
  },

  {
    question: "Who was the first Jedi to learn how to return from death as a Force Ghost?",
    options: {
      a: "Yoda",
      b: "Obi-Wan Kenobi",
      c: "Qui-Gon Jinn"
    },
    correctAnswer: "c"
  },

  {
    question: "How old is Padme Amidala when she’s elected to the position of Queen of Naboo?",
    options: {
      a: "22",
      b: "14",
      c: "8"
    },
    correctAnswer: "b"
  },

  {
    question: "Who plays Chewbacca?",
    options: {
      a: "Kenny Baker",
      b: "David Prowse",
      c: "Peter Mayhew"
    },
    correctAnswer: "c"
  },

  {
    question: "Which is the only film of the original six in which desert planet Tatooine doesn’t appear?",
    options: {
      a: "Revenge of the Sith",
      b: "The Empire Strikes Back",
      c: "The Phantom Menace",
    },
    correctAnswer: "b"
  },

  {
    question: "Which 1981 blockbuster features characters from the Original Trilogy carved on to an ancient wall?",
    options: {
      a: "Escape From New York",
      b: "The Evil Dead",
      c: "Raiders of the Lost Ark",
    },
    correctAnswer: "c"
  },

  {
    question: "What’s the name of the green-skinned bounty hunter Han Solo kills in Mos Eisley’s cantina?",
    options: {
      a: "Greedo",
      b: "Boba Fett",
      c: "Jabba The Hutt",
    },
    correctAnswer: "a"
  },

  {
    question: "Who kills Jabba The Hutt?",
    options: {
      a: "Luke Skywalker",
      b: "Princess Leia",
      c: "Lando Calrissian",
    },
    correctAnswer: "b"
  },

  {
    question: "Which of the Original Trilogy films has the most deaths?",
    options: {
      a: "The Empire Strikes Back",
      b: "Return of the Jedi",
      c: "A New Hope",
    },
    correctAnswer: "c"
  },

  {
    question: "Which character does Ewan McGregor’s uncle, Denis Lawson, play in the Original Trilogy?",
    options: {
      a: "Wedge Antilles",
      b: "Biggs Darklighter",
      c: "Grand Moff Tarkin",
    },
    correctAnswer: "a"
  },

  {
    question: "Which is the only film of the original six to be nominated for Best Picture?",
    options: {
      a: "Return of the Jedi",
      b: "A New Hope",
      c: "Attack of the Clones",
    },
    correctAnswer: "b"
  },

  {
    question: "Which prop ended up nicknamed ‘The Porkburger’ by the special-effects crew?",
    options: {
      a: "Luke's Mechanical Hand",
      b: "Darth Vader's Helmet",
      c: "Millennium Falcon",
    },
    correctAnswer: "c"
  },

  {
    question: "What does the term “Blue Harvest” mean in the context of the Original Trilogy?",
    options: {
      a: "It was the fake title Return of the Jedi was filmed under",
      b: "It is the name of the milk that Luke drinks in Episode IV",
      c: "It is the term for the blue lightsaber crystal",
    },
    correctAnswer: "a"
  },

  {
    question: "What was Luke Skywalker’s original surname?",
    options: {
      a: "Starlord",
      b: "Starkiller",
      c: "Darklighter",
    },
    correctAnswer: "b"
  },

  {
    question: "Which actor made lightsaber sounds when he was duelling, which had to be removed in post-production?",
    options: {
      a: "Samuel L. Jackson",
      b: "Hayden Christensen",
      c: "Ewan McGregor",
    },
    correctAnswer: "c"
  },

  {
    question: "Who almost played the role of Jar Jar Binks?",
    options: {
      a: "Michael Jackson",
      b: "Keanu Reeves",
      c: "Eddie Murphy",
    },
    correctAnswer: "a"
  },

  {
    question: "What retail product was sprayed silver to make Qui-Gon’s communicator?",
    options: {
      a: "Sony Voice Recorder",
      b: "Gillette Sensor Excel for Women",
      c: "A Motorolla Beeper",
    },
    correctAnswer: "b"
  },

  {
    question: "What does Luke’s uncle Owen do as a job?",
    options: {
      a: "Death Stick Dealer",
      b: "Trader",
      c: "Moisture farmer",
    },
    correctAnswer: "c"
  },

  {
    question: "How are Figrin D’an & The Modal Nodes better known?",
    options: {
      a: "Cantina band",
      b: "The Gungan Goons",
      c: "501st Legion of Stormtroopers",
    },
    correctAnswer: "a"
  },

  {
    question: "Who trained Luke in The Empire Strikes Back’s first draft?",
    options: {
      a: "Mace Windu",
      b: "Anakin Skywalker",
      c: "Jar Jar Binks, Sith Lord",
    },
    correctAnswer: "b"
  }

]
