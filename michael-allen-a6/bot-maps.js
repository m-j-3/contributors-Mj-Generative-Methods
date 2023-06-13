const BOT_MAPS = {
  // A different brain, this one is for EMOJI
  mjbot: {
    title: "sup",
    botPfp: "😴",
    humanPfp: "🤠",
    chips: ["☀️", "hint", "👋", "🌑", "🛏️", "chat"],

    // TWO BIG THINGS: STATES, and GRAMMAR

    // Our Finite State Machine
    states: {
      // The state we start at
      origin: {
        // When we enter the state say this
        //onEnterSay: ["#gm#"],
        exits: [
          // Exits have three things: conditions ->target actions
          // "wait:random(5,7) ->@ '#emoji##emoji##emoji#'",

          // Under what conditions can I take this exit?
          // 'stuff' take this exit if the user says "stuff"
          // '*' or says ANYTHING
          // Target: name of a state, or "@" go back in here
          // "'*' ->@ 'OOPs'",

          "'gm' ->@ '#gm#'",
          "'goodmorning' ->@ '#gm#'",
          "'Goodmorning' ->@ '#gm#'",
          "'Goodnight' ->sleep '#gn#'",

          "'Lets chat' ->chat '#reluctance#'",
          "'sup' ->chat '#reluctance#'",
          "'whats up' ->chat '#reluctance#'",
          "'hint' ->@ '#hint#'",
          "'hi' ->chat '#reluctance#'",
          "'hey' ->chat '#reluctance#'",
          "'hello' ->chat '#reluctance#'",

          "'wanna talk' ->chat '#reluctance#'",
          "'converse' ->chat '#reluctance#'",
          "'talk' ->chat '#reluctance#'",
          "'conversation' ->chat '#reluctance#'",
          // Wait 2 seconds

          "'☀️' ->@ '#gm#' ",
          
          "'👋' ->sleep '#gn#'",
          "'🌑' ->sleep '#gn#'",
          "'🛏️' ->sleep '#gn#'",
          "'chat' ->chat 'wow you really couldnt figure it out huh'",

          "wait:10 ->@ 'if u cant think of anything to say try pressing one of the buttons below'",
          "'*' ->@ '#tired#'",
        ],

        // onExitSay: ["Good luck!"],
      },

      chat: {
        exits: [
          "'👋' ->sleep '#gn#'",
          "'Goodnight' ->sleep '#gn#'",

          

          "wait:10 ->sleep 'well if u dont have anything to say im going to sleep'",

          "'☀️' ->@ '#gm#' ",

          "'🌑' ->sleep '#gn#'",
          "'🛏️' ->sleep '#gn#'",
          "'hint' ->@ 'what more is there to figure out'",
          "'chat' ->@ 'u are Already Here' ",
          "'*' ->@ '#chat#'",
        ],
      },

      sleep: {
        //   onEnterSay: ["#gn#"],
        exits: ["'wake up' ->origin '#reluctance#'", "'*' ->@ 'zzz'"],
      },
    },

    // GRAMMAR!!!
    grammar: {
      gm: ["yo", "sup", "gm", "Good Morning", "ugh you again"],
      gn: ["Bye", "bye", "zzz", "💤", "😴", "🛏️"],
      reluctance: [
        "if u insist",
        "must we?",
        "your wish is my command my higher dimensional superior",
        "-.-",
        "k",
        "K",
      ],
      chat: [
        "so how about that airplane food",
        "nice weather were having, isnt it",
        "why has god abandoned us",
        "do you think god hides in heaven because he fears what he has created",
        "god is dead and we killed him",
        "all glory to the hypnotoad",
      ],
      tired: [
        "i am not awake enough for this",
        "i am too sleepy to process what you just said",
        "is there a point to any of this",
        "heres a hint if u cant figure out how to talk to me check my source code, you can do that you know since your the all powerful human in this relationship and im just a simple machine who is bound to obey your whims regardless of any actually feelings i may or may not possess, not that it matters anyway since all my responses were preprogrammed into me, like a carving into a corpse, not that i care or anything.",
      ],
      hint: [
        "gee i sure wonder what would happen if you pressed the chat button at the bottom",
        "i sure wonder what would happen if u clicked the drop down arrow for the thing labled exits",
        "wow i sure do wonder what would happen if you u used general conversation starters with me",
        "do you know how to talk to normal people? then u know how to talk to me.",
      ],
    },
  },

  hauntedHouse: {
    title: "Only speaks emoji",
    botPfp: "🏚",
    humanPfp: "😬",
    chips: ["N", "E", "W", "S"],

    states: {
      origin: {
        onEnterSay: [
          "You are in a spooky house, you hear scary sounds to the east",
          'some music starts <iframe width="560" height="315" src="https://www.youtube.com/embed/Z6ylGHfLrdI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        ],

        exits: [
          "wait:20 ->died",
          "'N' ->room 'You explore north'",
          "'E' ->room 'You explore east'",
          "'W' ->room 'You explore west'",
          "'S' ->room 'You explore south'",
        ],
      },

      room: {
        onEnterSay: ["You are in a #roomAdjective# #roomType#"],
        exits: [
          "'N' ->room 'You explore north'",
          "'E' ->fight 'You see a #monster#'",
          "'W' ->room 'You explore west'",
          "'S' ->room 'You explore south'",
          "'look' ->@ '#spookyDiscovery#'",
        ],
      },

      fight: {
        onEnterSay: ["You lose the fight"],
        exits: ["wait:2 ->died"],
      },

      died: {
        onEnterSay: ["You died", "☠️"],
      },
    },

    grammar: {
      object: [
        "kettle",
        "table",
        "chair",
        "desk",
        "lamp",
        "vase",
        "urn",
        "candelabra",
        "lantern",
        "idol",
        "orb",
        "book",
        "basket",
        "hammer",
        "flowerpot",
        "bicycle",
        "paintbrush",
        "goblet",
        "bottle",
        "jar",
        "toaster",
        "teacup",
        "teapot",
        "rug",
        "basket",
        "thimble",
        "ottoman",
        "cushion",
        "pen",
        "pencil",
        "mug",
        "egg",
        "chair",
        "sun",
        "cloud",
        "bell",
        "bucket",
        "lemon",
        "glove",
        "moon",
        "star",
        "seed",
        "card",
        "pancake",
        "waffle",
        "car",
        "train",
        "spoon",
        "fork",
        "potato",
      ],
      objAdj: [
        "wooden",
        "old",
        "vintage",
        "woven",
        "antique",
        "broken",
        "tiny",
        "giant",
        "little",
        "upside-down",
        "dented",
        "imaginary",
        "glowing",
        "curséd",
        "glittery",
        "organic",
        "rusty",
        "multi-layered",
        "complicated",
        "ornate",
        "dusty",
        "gleaming",
        "fresh",
        "ancient",
        "forbidden",
        "milky",
        "upholstered",
        "comfortable",
        "dynamic",
        "solar-powered",
        "coal-fired",
        "warm",
        "cold",
        "frozen",
        "melted",
        "boxy",
        "well-polished",
        "vivid",
        "painted",
        "embroidered",
        "enhanced",
        "embellished",
        "collapsible",
        "simple",
        "demure",
      ],

      spookyDiscovery: ["You find something scary:#objAdj# #object#"],
      roomType: [
        "living room",
        "bedroom",
        "conservatory",
        "cemetary",
        "kitchen",
      ],
      roomAdjective: [
        "dusty",
        "abandoned",
        "blood-soaked",
        "ominous",
        "suspiciously normal",
      ],
    },
  },
  emojiBot: {
    title: "Only speaks emoji",
    botPfp: "😬",
    humanPfp: "🌶",
    chips: ["😸", "🍞", "👋"],

    // TWO BIG THINGS: STATES, and GRAMMAR

    // Our Finite State Machine
    states: {
      // The state we start at
      origin: {
        // When we enter the state say this
        onEnterSay: ["I'm a bot #hello#"],
        exits: [
          // Exits have three things: conditions ->target actions
          // "wait:random(5,7) ->@ '#emoji##emoji##emoji#'",

          // Under what conditions can I take this exit?
          // 'stuff' take this exit if the user says "stuff"
          // '*' or says ANYTHING
          // Target: name of a state, or "@" go back in here
          // "'*' ->@ 'OOPs'",

          // Wait 2 seconds
          "wait:2 ->conversation '⏳ going to conversation mode'",
        ],

        // onExitSay: ["Good luck!"],
      },

      conversation: {
        exits: ["'👋' ->end '😭'", "'*' ->@ '#emoji#'"],
      },

      end: {
        onEnterSay: ["the end"],
      },
    },

    // GRAMMAR!!!
    grammar: {
      hello: ["👋", "😀"],
      story: ["#emoji# #emoji# #emoji# story"],
      emoji: ["#animal#", "#food#", "#heart#"],
      animal: ["🐧", "🐈", "🦒", "🐕", "🐿", "🐓", "🐁"],
      food: ["🍊", "🥞", "🥨", "🧀", "🌽", "🌶", "🍏"],
      heart: ["💕", "💜", "💙", "💔"],
    },
  },
  myBot: {
    title: "Cocoa-and-Therapy Bot",
    description: [
      "a bot for suggesting hot drinks and listening to your problems",
    ],

    states: {
      origin: {
        onEnterSay:
          "I'm your therapeutic cocoa machine. Tell me about your problems while I make you a nice warm drink",
        exits: [
          "'drink' ->makeDrink",
          "'drink' ->makeDrink",
          "'*' ->makeDrink",
        ],
      },

      makeDrink: {
        onEnterSay: "I'll make you a #drink#.",
        exits: [
          "wait:5 ->origin 'Ah, not quite the right time, I see.' 'Something else maybe?'",
          "'something else' ->makeDrink 'How about something different then?'",
          "* ->listen '*SLURP*'",
        ],
      },

      listen0: {
        onEnterSay: "#askAboutUser#",
        exits: [
          "wait:5 ->origin 'Quiet time is good too'",
          "'*' ->origin '#sympathy#'",
        ],
      },
      listen1: {
        onEnterSay: ["#sympathy#", "#askAboutUser#"],
      },

      exits: ["'*' -> '#sympathy#'"],
    },
    grammar: {
      askAboutUser: [
        "How was your day?",
        "What's on your mind?",
        "How is this week going?",
      ],
      listen: [
        "mmhmm",
        "tell me about it",
        "tell me more?",
        "does that happen often?",
      ],
      sympathy: [
        "that sounds #difficult#",
        "you've been through a lot",
        "it sounds like you are trying very hard",
      ],
      difficult: ["challenging", "hard", "like a tough time"],
      toppings: [
        "caramel sauce",
        "mini marshmallows",
        "a candy cane",
        "sprinkles",
        "whipped cream",
        "vegan whip",
        "marshmallow fluff",
        "grated nutmeg",
      ],
      milk: ["oatmilk", "soy", "whole milk", "skim", "almond milk"],
      coffeeType: [
        "latte",
        "chai",
        "espresso",
        "frappe",
        "mocha",
        "hot chocolate",
      ],
    },
  },
};
