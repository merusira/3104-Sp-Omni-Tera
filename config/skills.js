module.exports = {
  /* Warrior (0) */
  "0": {
    "1": { // Combo Attack
      "0": true,
      "1": true,
      "2": true,
      "3": true
    },
    "2": { // Evasive Roll
      "0": {
        "forceClip": true,
        "stamina": 500,
        "instantStamina": true
      }
    },
    "3": { // Torrent of Blows
      "0": true
    },
    "4": { // Rain of Blows
      "0": {
        "noInterrupt": [
          1,
          2,
          3,
          4,
          5,
          8,
          9,
          10,
          11,
          12,
          13,
          16,
          17,
          19,
          22,
          23,
          28,
          29,
          30,
          31,
          34,
          35,
          36,
          37,
          38,
          39,
          41,
          42
        ],
        "categoryChains": {
          "550": 30
        }
      },
      "30": true
    },
    "5": { // Battle Cry
      "0": true
    },
    "8": { // Assault Stance
      "0": {
        "stamina": 1000,
        "abnormals": {
          "102500": {
            "disableSkill": true
          }
        }
      },
      "50": true
    },
    "9": { // Defensive Stance
      "0": {
        "stamina": 1000
      },
      "50": true
    },
    "10": { // Death From Above
      "0": {
        "noInterrupt": [
          10
        ]
      }
    },
    "11": { // Poison Blade
      "0": true
    },
    "12": { // Leaping Strike
      "0": true
    },
    "13": { // Retaliate
      "0": {
        "noRetry": true
      }
    },
    "16": { // Charging Slash
      "0": {
        "fixedSpeed": true,
        "length": 1100,
        "distance": 467.88,
        "noRetry": true
      },
      "1": true,
      "*": {
        "noInterrupt": [
          2,
          10,
          22,
          29,
          30,
          32,
          37,
          38,
          40,
          41
        ]
      }
    },
    "17": { // Vortex Slash
      "0": true,
      "1": true,
      "2": true
    },
    "18": { // Combative Strike
      "0": true,
      "1": true,
      "2": true,
      "*": {
        "noInterrupt": [
          32
        ]
      }
    },
    "19": { // Rising Fury
      "0": true,
      "1": true
    },
    "20": { // Deadly Gamble
      "0": {
        "fixedSpeed": true,
        "cooldownEnd": 300
      }
    },
    "21": { // Cascade of Stuns
      "0": true
    },
    "22": { // Backstab
      "0": {
        "distance": 0,
        "onlyTarget": true
      }
    },
    "23": { // Spinning Counter
      "0": {
        "requiredBuff": 100700
      }
    },
    "24": { // Smoke Aggressor
      "0": {
        "fixedSpeed": true
      }
    },
    "25": { // Command: Attack
      "0": {
        "fixedSpeed": true,
        "requiredBuff": 102600
      }
    },
    "26": { // Command: Follow
      "0": {
        "fixedSpeed": true,
        "requiredBuff": 102600
      }
    },
    "28": { // Traverse Cut
      "0": {
        "categoryChains": {
          "1011": 30,
          "1012": 30,
          "1018": 30,
          "1040": 30
        }
      },
      "30": true,
      "*": {
        "noInterrupt": [
          1,
          2,
          3,
          4,
          8,
          9,
          10,
          13,
          16,
          17,
          19,
          21,
          22,
          28,
          29,
          30,
          31,
          32,
          34,
          35,
          36,
          37,
          38,
          39,
          41,
          42
        ],
        "hasChains": true
      }
    },
    "29": { // Blade Draw
      "0": {
        "noInterrupt": [
          1,
          2,
          3,
          4,
          5,
          8,
          9,
          10,
          11,
          12,
          13,
          "16-0",
          18,
          "19-0",
          21,
          22,
          23,
          27,
          29,
          30,
          34,
          35,
          36,
          37,
          38,
          41,
          42
        ],
        "interruptibleWithAbnormal": {
          "102010": 3
        },
        "categoryChains": {
          "550": 30,
          "1032": 30
        }
      },
      "30": true,
      "*": {
        "hasChains": true
      }
    },
    "30": { // Scythe
      "0": {
        "noInterrupt": [
          1,
          3,
          5,
          8,
          9,
          10,
          13,
          16,
          17,
          18,
          19,
          21,
          22,
          23,
          27,
          28,
          30,
          31,
          34,
          35,
          38,
          39,
          41,
          42
        ],
        "categoryChains": {
          "1002": 30,
          "1004": 30,
          "1011": 30,
          "1012": 30,
          "1029": 30,
          "1040": 30
        }
      },
      "30": true,
      "*": {
        "hasChains": true
      }
    },
    "31": { // Reaping Slash
      "0": {
        "categoryChains": {
          "550": 30
        }
      },
      "30": true,
      "*": {
        "noInterrupt": [
          1,
          2,
          3,
          5,
          8,
          9,
          10,
          11,
          12,
          13,
          16,
          17,
          19,
          21,
          22,
          23,
          27,
          28,
          29,
          30,
          33,
          34,
          35,
          37,
          38,
          39,
          41,
          42
        ],
        "hasChains": true
      }
    },
    "32": { // Cross Parry
      "0": {
        "fixedSpeed": true,
        "requiredBuff": [
          100200,
          100201
        ],
        "stamina": 50
      }
    },
    "34": { // Binding Sword
      "0": {
        "noInterrupt": [
          1,
          2,
          3,
          4,
          5,
          10,
          11,
          12,
          13,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          28,
          29,
          30,
          31,
          33,
          35,
          36,
          37,
          38,
          39,
          41,
          42
        ]
      }
    },
    "35": { // Infuriate
      "0": {
        "requiredBuff": [
          100200,
          100201
        ]
      }
    },
    "36": { // Rain of Blows (Deadly Gamble)
      "0": {
        "categoryChains": {
          "550": 30
        }
      },
      "30": true,
      "*": {
        "hasChains": true
      }
    },
    "37": { // Blade Draw (Deadly Gamble)
      "0": {
        "categoryChains": {
          "550": 30,
          "1032": 30
        }
      },
      "30": true,
      "*": {
        "hasChains": true
      }
    },
    "38": { // Scythe (Deadly Gamble)
      "0": {
        "categoryChains": {
          "1002": 30,
          "1004": 30,
          "1011": 30,
          "1012": 30,
          "1029": 30,
          "1040": 30
        }
      },
      "30": true,
      "*": {
        "hasChains": true
      }
    },
    "39": { // Traverse Cut (Defensive Stance)
      "0": {
        "categoryChains": {
          "1011": 30,
          "1012": 30,
          "1018": 30,
          "1040": 30
        }
      },
      "30": true,
      "*": {
        "hasChains": true
      }
    },
    "40": { // Blade Waltz
      "10": {
        "triggerAbnormal": {
          "104101": 800
        },
        "categoryChains": {
          "560": 11
        },
        "noRetry": true
      },
      "11": {
        "triggerAbnormal": {
          "104101": 800
        }
      },
      "12": true,
      "20": {
        "triggerAbnormal": {
          "104101": 800
        },
        "categoryChains": {
          "560": 21
        },
        "noRetry": true
      },
      "21": {
        "triggerAbnormal": {
          "104101": 800
        }
      },
      "22": true,
      "*": {
        "noInterrupt": [
          "41-0",
          "41-30",
          42
        ],
        "abnormals": {
          "104101": {
            "disableSkill": true
          }
        },
        "hasChains": true,
        "longRetry": true
      }
    },
    "41": { // Aerial Scythe
      "0": {
        "triggerAbnormal": {
          "105100": 1800
        },
        "categoryChains": {
          "560": 30
        }
      },
      "30": {
        "triggerAbnormal": {
          "105100": 1800
        }
      },
      "31": {
        "consumeAbnormal": 105100
      },
      "*": {
        "noInterrupt": [
          42
        ],
        "hasChains": true,
        "noRetry": true
      }
    },
    "42": { // Blade Frenzy
      "0": {
        "categoryChains": {
          "1002": 30,
          "1030": 30,
          "2041": 30
        }
      },
      "30": true,
      "*": {
        "noInterrupt": [
          1,
          3,
          4,
          5,
          10,
          11,
          12,
          13,
          16,
          17,
          18,
          19,
          21,
          22,
          23,
          28,
          29,
          31,
          33,
          34,
          35,
          36,
          37,
          39,
          "41-0",
          "41-30",
          42
        ],
        "hasChains": true
      }
    }
  },
  /* Lancer (1) */
  "1": {
    "1": { // Combo Attack
      "0": true,
      "1": true,
      "2": true,
      "*": {
        "noInterrupt": [
          1,
          2
        ]
      }
    },
    "2": { // Stand Fast
      "0": {
        "fixedSpeed": true,
        "stamina": 50,
        "level": {
          "1": {
            "stamina": 40
          }
        },
        "noRetry": true
      }
    },
    "3": { // Onslaught
      "0": {
        "length": [
          950,
          500,
          500,
          500,
          400,
          775
        ]
      },
      "30": {
        "length": [
          713,
          375,
          375,
          375,
          300,
          582
        ]
      },
      "*": {
        "distance": [
          0,
          100,
          100,
          100,
          100,
          62.7
        ],
        "abnormals": {
          "22060": {
            "speed": 1.25
          }
        },
        "chains": {
          "5": 30
        }
      }
    },
    "4": { // Challenging Shout
      "0": {
        "chains": {
          "1": 30,
          "3": 30,
          "5": 30,
          "8": 30,
          "10": 30,
          "13": 30,
          "15": 30,
          "18": 30,
          "21": 30,
          "25": 30,
          "28": 30
        }
      },
      "30": true,
      "*": {
        "noInterrupt": [
          4,
          9,
          12,
          23,
          24,
          26
        ]
      }
    },
    "5": { // Shield Bash
      "1": true,
      "2": {
        "chains": {
          "10": 30
        }
      },
      "30": true
    },
    "7": { // Guardian Shout
      "0": true
    },
    "8": { // Shield Counter
      "0": {
        "onlyDefenceSuccess": true
      }
    },
    "9": { // Leash
      "0": true
    },
    "10": { // Debilitate
      "0": {
        "chains": {
          "1": 30
        }
      },
      "30": true,
      "*": {
        "triggerAbnormal": {
          "201830": 2000
        },
        "consumeAbnormalEnd": 201830,
        "noInterrupt": [
          3,
          4,
          5,
          8,
          9,
          10,
          11,
          12,
          13,
          15,
          21,
          23,
          24,
          25,
          26,
          27,
          28,
          29
        ]
      }
    },
    "11": { // Retaliate
      "0": {
        "noRetry": false
      }
    },
    "12": { // Infuriate
      "0": {
        "length": 2400
      }
    },
    "13": { // Spring Attack
      "0": {
        "length": 2775,
        "distance": 85,
        "noInterrupt": [
          3,
          13,
          "18-0",
          21,
          25,
          26
        ],
        "chains": {
          "1": 30,
          "5": 30,
          "8": 30,
          "10": 30,
          "18": 30
        }
      },
      "30": {
        "length": 1850,
        "distance": 85
      }
    },
    "16": { // Second Wind
      "0": {
        "fixedSpeed": 1,
        "length": 700
      }
    },
    "17": { // Adrenaline Rush
      "0": {
        "fixedSpeed": 1,
        "length": 700
      }
    },
    "18": { // Shield Barrage
      "0": {
        "abnormals": {
          "201550": {
            "speed": 1.2
          }
        }
      },
      "1": true,
      "*": {
        "triggerAbnormal": {
          "201831": 2000
        },
        "consumeAbnormalEnd": 201831,
        "noInterrupt": [
          18
        ]
      }
    },
    "19": { // Pledge of Protection
      "0": {
        "fixedSpeed": 1,
        "length": 1000
      }
    },
    "21": { // Lockdown Blow
      "0": {
        "length": 1400,
        "distance": 122.66
      }
    },
    "22": { // Iron Will
      "0": {
        "fixedSpeed": 1,
        "length": 800
      }
    },
    "23": { // Master's Leash
      "0": {
        "requiredBuff": 201000
      }
    },
    "24": { // Chained Leash
      "1": true,
      "2": true
    },
    "25": { // Wallop
      "0": {
        "noInterrupt": [
          1,
          2,
          3,
          4,
          5,
          9,
          23,
          24,
          25,
          26
        ],
        "chains": {
          "8": 30,
          "10": 30,
          "13": 30,
          "15": 30,
          "18": 30,
          "21": 30
        }
      },
      "30": true
    },
    "26": { // Backstep
      "0": {
        "moveDir": 1,
        "forceClip": true,
        "stamina": 800,
        "instantStamina": true,
        "noInterrupt": [
          26
        ]
      }
    },
    "27": { // Rallying Cry
      "0": true
    },
    "29": { // Guardian's Barrier
      "0": {
        "fixedSpeed": true,
        "noRetry": true
      }
    },
    "30": { // Divine Protection
      "0": true
    }
  },
  /* Slayer (2) */
  "2": {
    "1": { // Combo Attack
      "0": true,
      "1": true,
      "2": true,
      "3": true,
      "*": {
        "noRetry": true
      }
    },
    "2": { // Knockdown Strike
      "1": true,
      "2": {
        "chains": {
          "14": 30,
          "27": 30
        }
      },
      "30": true,
      "*": {
        "abnormals": {
          "23070": {
            "speed": 1.25
          }
        }
      }
    },
    "3": { // Whirlwind
      "0": true,
      "1": true,
      "2": {
        "chains": {
          "2": 30,
          "4": 30,
          "8": 30,
          "12": 30,
          "23": 30,
          "24": 30,
          "26": 30,
          "27": 30,
          "28": 30
        }
      },
      "30": true,
      "*": {
        "abnormals": {
          "23080": {
            "speed": 1.25
          }
        }
      }
    },
    "4": { // Evasive Roll
      "0": {
        "abnormalChains": {
          "40300": 30
        }
      },
      "30": true,
      "*": {
        "forceClip": true,
        "hasChains": true
      }
    },
    "5": { // Dash
      "0": {
        "fixedSpeed": true
      }
    },
    "6": { // Backstab
      "0": {
        "distance": 0,
        "onlyTarget": true
      }
    },
    "9": { // Leaping Strike
      "0": true
    },
    "10": { // Retaliate
      "0": {
        "noRetry": true
      }
    },
    "12": { // Heart Thrust
      "0": true,
      "1": true,
      "2": {
        "chains": {
          "2": 30,
          "3": 30,
          "4": 30,
          "8": 30,
          "12": 30,
          "23": 30,
          "24": 30,
          "26": 30,
          "27": 30,
          "28": 30
        }
      },
      "30": true,
      "*": {
        "abnormals": {
          "23060": {
            "speed": 1.25
          },
          "23061": {
            "speed": 1.35
          }
        }
      }
    },
    "13": { // Stunning Backhand
      "0": true
    },
    "14": { // Distant Blade
      "0": true,
      "1": true,
      "2": true,
      "*": {
        "triggerAbnormal": {
          "23220": 2000
        },
        "consumeAbnormalEnd": 23220
      }
    },
    "15": { // Startling Kick
      "0": {
        "moveDir": 1,
        "forceClip": true
      }
    },
    "16": { // Fury Strike
      "0": true
    },
    "17": { // Headlong Rush
      "0": {
        "fixedSpeed": true,
        "length": 1000,
        "distance": 413
      }
    },
    "18": { // Overpower
      "0": true,
      "50": true
    },
    "19": { // Tenacity
      "0": {
        "fixedSpeed": true
      }
    },
    "20": { // In Cold Blood
      "0": {
        "fixedSpeed": true,
        "triggerAbnormal": {
          "23220": 2000
        },
        "consumeAbnormalEnd": 23220
      }
    },
    "23": { // Measured Slice
      "0": {
        "noInterrupt": [
          1,
          2,
          3,
          4,
          6,
          9,
          12,
          13,
          15,
          17,
          22,
          23
        ],
        "categoryChains": {
          "3008": 30,
          "3024": 30,
          "3025": 30,
          "3026": 30,
          "3027": 30
        }
      },
      "30": true,
      "*": {
        "hasChains": true
      }
    },
    "24": { // Eviscerate
      "0": {
        "noInterrupt": [
          "1-0",
          "1-1",
          "1-2",
          4,
          6,
          14,
          16,
          17,
          22,
          24,
          26
        ],
        "chains": {
          "1": 30,
          "2": 30,
          "3": 30,
          "8": 30,
          "9": 30,
          "12": 30,
          "13": 30,
          "15": 30,
          "25": 30
        }
      },
      "30": true,
      "*": {
        "hasChains": true
      }
    },
    "26": { // Punishing Blow
      "0": {
        "categoryChains": {
          "3023": 30,
          "3024": 30,
          "3027": 30,
          "3099": 30
        }
      },
      "30": {
        "consumeAbnormal": 301604
      },
      "*": {
        "noInterrupt": [
          1,
          2,
          3,
          4,
          6,
          9,
          10,
          12,
          13,
          14,
          15,
          16,
          17,
          21,
          22,
          26,
          28
        ],
        "hasChains": true
      }
    },
    "27": { // Savage Strike
      "0": {
        "triggerAbnormal": {
          "301600": 4000,
          "301603": 5000
        },
        "categoryChains": {
          "9999": 30
        }
      },
      "30": {
        "triggerAbnormal": {
          "301603": 5000
        }
      },
      "31": {
        "consumeAbnormal": [
          301600,
          301603
        ],
        "triggerAbnormal": {
          "301601": 4000
        }
      },
      "*": {
        "noInterrupt": [
          "27-31"
        ],
        "hasChains": true,
        "noRetry": true
      }
    },
    "28": { // Unsheathe
      "0": {
        "chargeLevels": [
          1,
          2,
          3
        ],
        "abnormals": {
          "301600": {
            "chargeSpeed": 0.4
          },
          "301601": {
            "chargeSpeed": 0.6
          }
        }
      },
      "1": true,
      "2": true,
      "3": true,
      "*": {
        "noRetry": true
      }
    }
  },
  /* Berserker (3) */
  "3": {
    "1": { // Combo Attack
      "0": true,
      "1": true,
      "2": true,
      "3": true,
      "*": {
        "noRetry": true
      }
    },
    "2": { // Axe Block
      "0": true,
      "30": true,
      "31": {
        "fixedSpeed": true
      },
      "*": {
        "consumeAbnormal": 401701
      }
    },
    "3": { // Thunder Strike
      "0": {
        "abnormals": {
          "24130": {
            "chargeSpeed": 0.3
          },
          "24170": {
            "speed": 1.25
          },
          "400500": {
            "chargeSpeed": 0.2
          },
          "400501": {
            "chargeSpeed": 0.4
          },
          "400508": {
            "chargeSpeed": 0.4
          },
          "401150": {
            "chargeSpeed": 0.2
          }
        }
      },
      "10": {
        "noRetry": true
      },
      "11": {
        "noRetry": true
      },
      "12": {
        "noRetry": true
      },
      "13": {
        "noRetry": true
      },
      "*": {
        "moveDir": 1,
        "abnormals": {
          "24170": {
            "speed": 1.25
          }
        }
      }
    },
    "4": { // Flatten
      "0": {
        "noInterrupt": [
          1,
          2,
          "3-10",
          "3-11",
          "3-12",
          "3-13",
          4,
          "8-30",
          "10-10",
          "10-11",
          "10-12",
          11,
          "10-13",
          13,
          "15-10",
          "15-11",
          "15-12",
          "15-13",
          "15-14",
          18,
          24,
          26,
          28,
          29,
          30,
          "32-0"
        ],
        "chains": {
          "6": 30,
          "25": 30,
          "31": 30,
          "32": 31,
          "34": 30,
          "35": 30,
          "36": 30,
          "37": 30
        }
      },
      "1": {
        "chains": {
          "6": 31,
          "25": 31,
          "31": 31,
          "32": 31
        }
      },
      "30": true,
      "31": true
    },
    "5": { // Dash
      "0": {
        "fixedSpeed": true
      }
    },
    "8": { // Fiery Rage
      "1": {
        "fixedSpeed": true
      },
      "30": true
    },
    "10": { // Cyclone
      "0": {
        "noChargeAbnormalityId": 401701,
        "abnormals": {
          "24190": {
            "chargeSpeed": 0.3
          },
          "400500": {
            "chargeSpeed": 0.2
          },
          "400501": {
            "chargeSpeed": 0.4
          },
          "400508": {
            "chargeSpeed": 0.4
          },
          "401150": {
            "chargeSpeed": 0.2
          }
        },
        "noRetry": true
      },
      "10": {
        "noRetry": true
      },
      "11": {
        "noRetry": true
      },
      "12": {
        "noRetry": true
      },
      "13": true
    },
    "11": { // Leaping Strike
      "0": true
    },
    "15": { // Vampiric Blow
      "0": {
        "noInterrupt": [
          2
        ],
        "releaseChain": {
          "overcharge": true,
          "chain": 14
        }
      },
      "10": {
        "noRetry": true
      },
      "11": {
        "noRetry": true
      },
      "12": {
        "noRetry": true
      },
      "13": {
        "noRetry": true
      },
      "14": true
    },
    "21": { // Bloodlust
      "0": {
        "fixedSpeed": true
      }
    },
    "24": { // Evasive Smash
      "0": true,
      "5": true,
      "10": true,
      "11": true,
      "12": true,
      "13": true
    },
    "25": { // Raze
      "0": {
        "noInterrupt": [
          2,
          "3-10",
          "3-11",
          "3-12",
          "3-13",
          4,
          6,
          "8-30",
          "10-10",
          "10-11",
          "10-12",
          "10-13",
          11,
          12,
          13,
          "15-10",
          "15-11",
          "15-12",
          "15-13",
          "15-14",
          "18-10",
          "18-11",
          "18-12",
          "18-13",
          24,
          25,
          26,
          27,
          28,
          29,
          "32-0"
        ],
        "interruptibleWithAbnormal": {
          "401404": 2
        },
        "abnormals": {
          "401404": {
            "chain": 31
          }
        },
        "chains": {
          "1": 30,
          "30": 31,
          "31": 30,
          "32": 31
        }
      },
      "1": true,
      "30": {
        "length": 965
      },
      "31": {
        "length": 965
      },
      "*": {
        "length": 1205,
        "distance": 96,
        "glyphs": {
          "24078": {
            "speed": 1.25
          }
        }
      }
    },
    "26": { // Tackle
      "0": {
        "length": 1000,
        "distance": 80
      }
    },
    "27": { // Unbreakable
      "0": {
        "noInterrupt": [
          1,
          "3-10",
          "3-11",
          "3-12",
          "3-13",
          4,
          6,
          "8-30",
          "10-10",
          "10-11",
          "10-12",
          "10-13",
          11,
          13,
          "15-10",
          "15-11",
          "15-12",
          "15-13",
          "15-14",
          18,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33
        ],
        "interruptibleWithAbnormal": {
          "401705": 33
        }
      },
      "30": true
    }
  },
  /* Sorcerer (4) */
  "4": {
    "1": { // Fireball
      "0": true
    },
    "2": { // Frost Sphere
      "0": true
    },
    "3": { // Lightning Trap
      "0": {
        "abnormals": {
          "25090": {
            "speed": 1.4
          }
        }
      }
    },
    "4": { // Arcane Pulse
      "0": {
        "abnormals": {
          "25140": {
            "chargeSpeed": 0.3
          }
        }
      },
      "10": {
        "noRetry": true
      },
      "11": {
        "noRetry": true
      },
      "12": {
        "noRetry": true
      }
    },
    "5": { // Mana Infusion
      "0": true
    },
    "6": { // Meteor Strike
      "0": {
        "abnormals": {
          "25100": {
            "speed": 1.25
          }
        }
      }
    },
    "7": { // Backstep
      "0": {
        "moveDir": 1,
        "forceClip": true
      }
    },
    "8": { // Flame Pillar
      "0": {
        "abnormals": {
          "25070": {
            "speed": 1.25
          }
        }
      }
    },
    "10": { // Mana Barrier
      "0": true
    },
    "11": { // Lightning Strike
      "0": {
        "checkReset": true
      }
    },
    "12": { // Void Pulse
      "0": true
    },
    "13": { // Mindblast
      "0": {
        "abnormals": {
          "25110": {
            "speed": 1.4
          }
        }
      }
    },
    "14": { // Retaliate
      "0": {
        "noRetry": true
      }
    },
    "16": { // Painblast
      "0": true
    },
    "17": { // Painful Trap
      "0": true
    },
    "18": { // Glacial Retreat
      "0": {
        "moveDir": 1,
        "forceClip": true
      }
    },
    "19": { // Mana Siphon
      "0": {
        "autoRelease": 0
      },
      "10": {
        "noRetry": true
      },
      "11": {
        "noRetry": true
      },
      "12": {
        "noRetry": true
      }
    },
    "20": { // Flaming Barrage
      "0": {
        "type": "lockon",
        "fixedSpeed": true
      },
      "10": {
        "type": "lockonCast",
        "abnormals": {
          "25060": {
            "speed": 1.25
          }
        }
      },
      "*": {
        "noRetry": true
      }
    },
    "21": { // Nerve Exhaustion
      "0": {
        "type": "lockon",
        "fixedSpeed": true
      },
      "10": {
        "type": "lockonCast",
        "fixedSpeed": true
      },
      "*": {
        "noRetry": true
      }
    },
    "22": { // Burning Breath
      "0": {
        "type": "lockon",
        "fixedSpeed": true
      },
      "10": {
        "type": "lockonCast",
        "fixedSpeed": true
      },
      "*": {
        "noRetry": true
      }
    },
    "23": { // Mana Volley
      "0": {
        "type": "lockon",
        "fixedSpeed": true
      },
      "10": {
        "type": "lockonCast",
        "fixedSpeed": true
      },
      "*": {
        "noRetry": true
      }
    },
    "25": { // Time Gyre
      "0": {
        "type": "lockon",
        "fixedSpeed": true
      },
      "10": {
        "type": "lockonCast",
        "fixedSpeed": true
      },
      "*": {
        "noRetry": true
      }
    },
    "26": { // Teleport Jaunt
      "0": {
        "noInterrupt": [
          26
        ],
        "cooldownEnd": 300,
        "noRetry": true
      }
    },
    "27": { // Hailstorm
      "0": true
    },
    "30": { // Nova
      "0": true
    },
    "31": { // Warp Barrier
      "10": true,
      "20": true
    },
    "32": { // Meteor Strike (Mana Boost)
      "0": true,
      "50": true,
      "*": {
        "noRetry": true
      }
    },
    "33": { // Arcane Pulse (Mana Boost)
      "10": true,
      "11": true,
      "12": true,
      "50": true,
      "*": {
        "noRetry": true
      }
    },
    "34": { // Mana Boost
      "0": true
    },
    "36": { // Fusion
      "0": true,
      "30": true,
      "*": {
        "noInterrupt": [
          6,
          20,
          36,
          30,
          32
        ]
      }
    },
    "39": { // Implosion
      "0": {
        "requiredBuff": 502052,
        "distance": [
          0,
          0,
          -219.55
        ]
      }
    }
  },
  /* Archer (5) */
  "5": {
    "1": { // Arrow
      "0": true
    },
    "2": { // Arrow Volley
      "0": {
        "type": "lockon",
        "fixedSpeed": true
      },
      "10": {
        "type": "lockonCast"
      },
      "*": {
        "noRetry": true
      }
    },
    "3": { // Radiant Arrow
      "0": true,
      "10": {
        "noRetry": true
      },
      "11": {
        "noRetry": true
      },
      "12": {
        "noRetry": true
      },
      "13": {
        "noRetry": true
      },
      "*": {
        "moveDir": 1,
        "abnormals": {
          "26180": {
            "chargeSpeed": 0.3
          },
          "601450": {
            "chargeSpeed": 0.5
          },
          "602108": {
            "speed": 1.3
          }
        }
      }
    },
    "4": { // Penetrating Arrow
      "0": true,
      "10": {
        "noRetry": true
      },
      "11": {
        "noRetry": true
      },
      "12": {
        "noRetry": true
      },
      "13": {
        "noRetry": true
      },
      "*": {
        "moveDir": 1,
        "abnormals": {
          "26160": {
            "chargeSpeed": 0.3
          },
          "26170": {
            "chargeSpeed": 0.3
          },
          "26171": {
            "chargeSpeed": 0.4
          },
          "26190": {
            "chargeSpeed": 0.3
          },
          "601450": {
            "chargeSpeed": 0.5
          },
          "602108": {
            "speed": 1.3
          }
        }
      }
    },
    "5": { // Rain of Arrows
      "0": true
    },
    "6": { // Backstep
      "0": {
        "length": 650,
        "distance": -200
      }
    },
    "7": { // Feign Death
      "0": {
        "fixedSpeed": true,
        "moveDir": 1
      }
    },
    "8": { // Rapid Fire
      "0": {
        "length": 425
      },
      "1": {
        "length": 600
      },
      "2": {
        "length": 700
      },
      "3": {
        "length": 700
      },
      "4": {
        "length": 700
      },
      "5": {
        "length": 700
      },
      "6": {
        "length": 1235
      }
    },
    "9": { // Slow Trap
      "0": true
    },
    "10": { // Stunning Trap
      "0": true
    },
    "15": { // Incendiary Trap
      "0": true
    },
    "16": { // Breakaway Bolt
      "0": {
        "moveDir": 1,
        "forceClip": true
      }
    },
    "17": { // Web Arrow
      "0": true
    },
    "18": { // Close Quarters
      "0": {
        "length": 300,
        "distance": 89.8
      },
      "1": {
        "length": 1200,
        "distance": 87.29
      }
    },
    "19": { // Poison Arrow
      "0": true
    },
    "20": { // Restraining Arrow
      "0": true
    },
    "22": { // Sequential Fire
      "0": {
        "requiredBuff": 600200,
        "noRetry": true
      }
    },
    "25": { // Incendiary Trap Arrow
      "0": true
    },
    "29": { // Thunderbolt
      "0": {
        "length": 3750,
        "glyphs": {
          "26089": {
            "speed": 1.3
          },
          "26102": {
            "speed": 1.3
          }
        }
      }
    }
  },
  /* Priest (6) */
  "6": {
    "1": { // Divine Radiance
      "0": {
        "length": 625
      },
      "1": {
        "length": 650
      },
      "2": {
        "length": 675
      },
      "3": {
        "length": 725
      }
    },
    "2": { // Regeneration Circle
      "0": {
        "length": 3150,
        "abnormals": {
          "902": {
            "speed": 1.15
          },
          "911": {
            "speed": 1.15
          },
          "916": {
            "speed": 1.15
          },
          "920": {
            "speed": 1.225
          }
        }
      }
    },
    "3": { // Healing Circle
      "0": {
        "length": 1750
      }
    },
    "5": { // Blessing of Shakan
      "0": true
    },
    "6": { // Arise
      "0": true
    },
    "8": { // Mana Infusion
      "0": {
        "length": 4600,
        "glyphs": {
          "28044": {
            "speed": 1.25
          }
        }
      }
    },
    "10": { // Purifying Circle
      "0": {
        "length": 1275
      }
    },
    "11": { // Metamorphic Blast
      "0": {
        "length": 830
      }
    },
    "12": { // Resurrect
      "0": {
        "abnormals": {
          "902": {
            "speed": 1.15
          },
          "911": {
            "speed": 1.15
          },
          "912": {
            "speed": 1.15
          },
          "913": {
            "speed": 1.15
          },
          "916": {
            "speed": 1.15
          },
          "917": {
            "speed": 1.15
          },
          "920": {
            "speed": 1.225
          },
          "921": {
            "speed": 1.225
          },
          "922": {
            "speed": 1.225
          },
          "999010000": {
            "speed": 1.15
          }
        }
      }
    },
    "14": { // Summon: Group
      "0": true
    },
    "16": { // Shocking Implosion
      "0": {
        "length": 1700
      }
    },
    "18": { // Heal Thyself
      "0": true
    },
    "19": { // Focus Heal
      "0": {
        "type": "lockon",
        "fixedSpeed": true
      },
      "10": {
        "type": "lockonCast"
      },
      "*": {
        "noRetry": true
      }
    },
    "22": { // Kaia's Shield
      "0": true
    },
    "25": { // Retaliate
      "0": {
        "noRetry": true
      }
    },
    "26": { // Fiery Escape
      "0": {
        "length": 1125,
        "distance": -250.5
      }
    },
    "27": { // Final Reprisal
      "0": {
        "chains": {
          "11": 30,
          "16": 30,
          "29": 30,
          "40": 30
        }
      },
      "10": {
        "chains": {
          "11": 11,
          "16": 11,
          "29": 11,
          "40": 11
        }
      },
      "11": true,
      "20": {
        "chains": {
          "11": 21,
          "16": 21,
          "29": 21,
          "40": 21
        }
      },
      "21": true,
      "30": true,
      "*": {
        "noInterrupt": [
          27
        ]
      }
    },
    "28": { // Mana Charge
      "0": {
        "type": "charging",
        "length": [
          800,
          1600
        ],
        "noInterrupt": [
          26,
          27,
          38
        ],
        "glyphs": {
          "28031": {
            "chargeSpeed": 0.25
          }
        }
      },
      "10": {
        "noInterrupt": [
          26,
          27,
          38
        ]
      },
      "11": {
        "noInterrupt": [
          26,
          27,
          38
        ]
      },
      "12": {
        "noInterrupt": [
          26,
          27,
          38
        ]
      },
      "*": {
        "type": "chargeCast",
        "length": 825
      }
    },
    "29": { // Triple Nemesis
      "0": {
        "length": 800
      },
      "1": {
        "length": 800
      },
      "2": {
        "length": 1250
      }
    },
    "30": { // Plague of Exhaustion
      "0": {
        "type": "lockon"
      },
      "10": {
        "type": "lockonCast"
      },
      "*": {
        "fixedSpeed": true,
        "noRetry": true
      }
    },
    "31": { // Guardian Sanctuary
      "0": {
        "fixedSpeed": true
      }
    },
    "32": { // Divine Prayer
      "0": {
        "fixedSpeed": true
      }
    },
    "33": { // Ishara's Lulliby
      "0": {
        "type": "lockon"
      },
      "10": {
        "type": "lockonCast"
      },
      "*": {
        "fixedSpeed": true,
        "noRetry": true
      }
    },
    "34": { // Restorative Burst
      "0": {
        "length": 1430
      }
    },
    "35": { // Energy Stars
      "0": {
        "fixedSpeed": 1,
        "length": 4900,
        "canCancel": true
      },
      "10": {
        "fixedSpeed": 1,
        "length": 1430,
        "chainType": 36
      }
    },
    "37": { // Healing Immersion
      "0": {
        "type": "lockon",
        "noInterrupt": [
          37
        ],
        "partyOnly": true
      },
      "10": {
        "type": "lockonCast",
        "noInterrupt": [
          "37-10"
        ]
      },
      "*": {
        "fixedSpeed": true,
        "noRetry": true
      }
    },
    "38": { // Backstep
      "0": {
        "moveDir": 1,
        "forceClip": true
      }
    },
    "39": { // Grace of Resurrection
      "0": true
    },
    "40": { // Zenobia's Vortex
      "0": true,
      "10": true,
      "20": true,
      "*": {
        "triggerAbnormal": {
          "806140": 1480
        }
      }
    },
    "41": { // Divine Intervention / Mass Divine Intervention
      "0": {
        "type": "lockon",
        "fixedSpeed": true,
        "partyOnly": true
      },
      "10": {
        "type": "lockonCast"
      },
      "*": {
        "noRetry": true
      }
    },
    "42": { // Holy Burst
      "20": true,
      "30": true
    },
    "43": { // Edict of Judgement
      "0": true,
      "50": true
    }
  },
  /* Mystic (7) */
  "7": {
    "1": { // Sharan Bolt
      "0": true,
      "1": true,
      "2": true,
      "3": true
    },
    "2": { // Corruption Ring
      "0": {
        "cancelChain": 11
      },
      "11": true,
      "12": true
    },
    "5": { // Titanic Favor
      "0": {
        "type": "lockon",
        "fixedSpeed": true
      },
      "10": {
        "type": "lockonCast"
      },
      "*": {
        "noRetry": true
      }
    },
    "6": { // Shara's Lash
      "0": true
    },
    "8": { // Metamorphic Blast
      "0": {
        "noInterrupt": [
          1,
          2,
          6,
          17
        ],
        "checkReset": true,
        "chains": {
          "8": 30,
          "23": 30
        }
      },
      "30": true
    },
    "9": { // Arun's Cleansing
      "0": {
        "type": "lockon",
        "fixedSpeed": true
      },
      "10": {
        "type": "lockonCast"
      },
      "*": {
        "noRetry": true
      }
    },
    "10": { // Resurrect
      "0": {
        "abnormals": {
          "902": {
            "speed": 1.25
          },
          "911": {
            "speed": 1.25
          },
          "912": {
            "speed": 1.25
          },
          "913": {
            "speed": 1.25
          },
          "916": {
            "speed": 1.25
          },
          "917": {
            "speed": 1.25
          },
          "920": {
            "speed": 1.375
          },
          "921": {
            "speed": 1.375
          },
          "922": {
            "speed": 1.375
          },
          "999010000": {
            "speed": 1.25
          }
        }
      }
    },
    "11": { // Summon: Group
      "0": true
    },
    "12": { // Vow of Rebirth
      "0": {
        "type": "lockon",
        "fixedSpeed": true,
        "partyOnly": true
      },
      "10": {
        "type": "lockonCast"
      },
      "*": {
        "noRetry": true
      }
    },
    "13": { // Aura of the Merciless
      "0": true,
      "50": true
    },
    "14": { // Aura of the Swift
      "0": true,
      "50": true
    },
    "15": { // Aura of the Unyielding
      "0": true,
      "50": true
    },
    "16": { // Aura of the Tenacious
      "0": true,
      "50": true
    },
    "17": { // Teleport Jaunt
      "0": {
        "noInterrupt": [
          17
        ],
        "cooldownEnd": 300,
        "noRetry": true
      }
    },
    "18": { // Arun's Vitae
      "0": {
        "chargeLevels": [
          10,
          10
        ],
        "autoRelease": 0,
        "abnormals": {
          "27070": {
            "chargeSpeed": 0.25
          },
          "27080": {
            "chargeSpeed": 0.25
          }
        }
      },
      "10": {
        "noRetry": true
      }
    },
    "21": { // Retaliate
      "0": {
        "noRetry": true
      }
    },
    "22": { // Arun's Tears
      "0": {
        "chargeLevels": [
          10,
          10
        ],
        "autoRelease": 0,
        "abnormals": {
          "27100": {
            "chargeSpeed": 0.25
          }
        }
      },
      "10": {
        "noRetry": true
      }
    },
    "23": { // Metmorphic Smite
      "0": {
        "noInterrupt": [
          1,
          2,
          6,
          17,
          23
        ],
        "chains": {
          "8": 30
        }
      },
      "30": true
    },
    "24": { // Volley of Curses
      "0": {
        "type": "lockon"
      },
      "10": {
        "type": "lockonCast"
      },
      "*": {
        "fixedSpeed": true,
        "noRetry": true
      }
    },
    "25": { // Thrall of Protection
      "0": true,
      "10": true,
      "30": true,
      "*": {
        "fixedSpeed": true,
        "cooldownEnd": 300
      }
    },
    "27": { // Thrall of Life
      "0": true,
      "10": true,
      "30": true,
      "*": {
        "fixedSpeed": true,
        "cooldownEnd": 300
      }
    },
    "28": { // Sonorous Dreams
      "0": {
        "type": "lockon"
      },
      "10": {
        "type": "lockonCast"
      },
      "*": {
        "fixedSpeed": true,
        "noRetry": true
      }
    },
    "29": { // Regression
      "0": {
        "fixedSpeed": true
      }
    },
    "30": { // Curse of Exhaustion
      "0": {
        "type": "lockon"
      },
      "10": {
        "type": "lockonCast"
      },
      "*": {
        "fixedSpeed": true,
        "noRetry": true
      }
    },
    "31": { // Curse of Confusion
      "0": {
        "type": "lockon"
      },
      "10": {
        "type": "lockonCast"
      },
      "*": {
        "fixedSpeed": true,
        "noRetry": true
      }
    },
    "32": { // Mire
      "0": {
        "type": "lockon"
      },
      "10": {
        "type": "lockonCast"
      },
      "*": {
        "fixedSpeed": true,
        "noRetry": true
      }
    },
    "33": { // Thrall of Vengeance
      "0": true,
      "10": true,
      "30": true,
      "*": {
        "fixedSpeed": true,
        "cooldownEnd": 300
      }
    },
    "34": { // Thrall of Wrath
      "0": true,
      "10": true,
      "30": true,
      "*": {
        "fixedSpeed": true,
        "cooldownEnd": 300
      }
    },
    "35": { // Command: Attack
      "0": {
        "fixedSpeed": true
      }
    },
    "36": { // Command: Follow
      "0": {
        "fixedSpeed": true
      }
    },
    "37": { // Warding Totem
      "0": true
    },
    "41": { // Contagion
      "0": {
        "type": "lockon",
        "fixedSpeed": true
      },
      "10": {
        "type": "lockonCast"
      },
      "*": {
        "noRetry": true
      }
    },
    "42": { // Boomerang Pulse
      "0": {
        "noInterrupt": [
          42
        ],
        "cooldownEnd": 300
      }
    },
    "43": { // Unsummon Thrall
      "0": true
    },
    "44": { // Mass Teleport
      "0": {
        "noInterrupt": [
          17
        ],
        "cooldownEnd": 300,
        "noRetry": true
      }
    },
    "45": { // Thrall Augmentation
      "0": true,
      "50": true
    },
    "47": { // Arunic Release
      "0": true
    },
    "48": { // Thrall Lord
      "0": {
        "fixedSpeed": true
      }
    }
  },
  /* Reaper (8) */
  "8": {
    "1": { // Spiral Barrage
      "0": {
        "triggerAbnormal": {
          "10151020": 2000
        },
        "categoryChains": {
          "90001": 1
        }
      },
      "1": {
        "triggerAbnormal": {
          "10151020": 2000
        }
      },
      "2": {
        "inPlace": {
          "movement": [
            {
              "duration": 950,
              "speed": 1,
              "unk": 1,
              "distance": 0
            },
            {
              "duration": 346,
              "speed": 1,
              "unk": 1,
              "distance": 0
            }
          ],
          "distance": 0
        },
        "triggerAbnormal": {
          "10151021": 2000
        }
      },
      "3": {
        "inPlace": {
          "movement": [
            {
              "duration": 616,
              "speed": 1,
              "unk": 1,
              "distance": 0
            },
            {
              "duration": 346,
              "speed": 1,
              "unk": 1,
              "distance": 0
            }
          ],
          "distance": 0
        },
        "triggerAbnormal": {
          "10151022": 1800
        }
      },
      "4": {
        "inPlace": {
          "movement": [
            {
              "duration": 1150,
              "speed": 1,
              "unk": 1,
              "distance": 0
            },
            {
              "duration": 346,
              "speed": 1,
              "unk": 1,
              "distance": 0
            }
          ],
          "distance": 0
        },
        "triggerAbnormal": {
          "10151023": 2000
        }
      },
      "5": {
        "inPlace": {
          "movement": [
            {
              "duration": 2016,
              "speed": 1,
              "unk": 1,
              "distance": 0
            }
          ],
          "distance": 0
        }
      },
      "*": {
        "noInterrupt": [
          3,
          4,
          12,
          20
        ],
        "inPlace": {
          "movement": [
            {
              "duration": 766,
              "speed": 1,
              "unk": 1,
              "distance": 0
            },
            {
              "duration": 346,
              "speed": 1,
              "unk": 1,
              "distance": 0
            }
          ],
          "distance": 0
        },
        "noRetry": true
      }
    },
    "3": { // Double Shear
      "0": {
        "chains": {
          "1": 30,
          "5": 30,
          "6": 30,
          "8": 30,
          "9": 30,
          "10": 30,
          "11": 30
        }
      },
      "30": true,
      "40": {
        "chains": {
          "1": 41,
          "5": 41,
          "6": 41,
          "8": 41,
          "9": 41,
          "10": 41,
          "11": 41
        }
      },
      "41": true,
      "*": {
        "noInterrupt": [
          "1-0",
          "1-2",
          3,
          4,
          12,
          19,
          20
        ],
        "inPlace": {
          "movement": [
            {
              "duration": 2140,
              "speed": 1,
              "unk": 1,
              "distance": 0
            }
          ],
          "distance": 0
        },
        "abnormals": {
          "29030": {
            "speed": 1.25
          }
        }
      }
    },
    "4": { // Sundering Strike
      "0": {
        "chains": {
          "1": 30,
          "3": 30,
          "4": 30,
          "5": 30,
          "6": 30,
          "8": 30,
          "9": 30,
          "10": 30,
          "11": 30,
          "12": 30
        },
        "inPlace": {
          "movement": [
            [],
            [
              {
                "duration": 1757,
                "speed": 1,
                "unk": 1,
                "distance": 0
              }
            ],
            []
          ],
          "distance": [
            0,
            0,
            0
          ]
        }
      },
      "30": {
        "connectSkillArrow": true,
        "inPlace": {
          "movement": [
            [
              {
                "duration": 1757,
                "speed": 1,
                "unk": 1,
                "distance": 0
              }
            ],
            []
          ],
          "distance": [
            0,
            0
          ]
        },
        "noRetry": true
      },
      "31": {
        "inPlace": {
          "movement": [
            [
              {
                "duration": 1757,
                "speed": 1,
                "unk": 1,
                "distance": 0
              }
            ],
            []
          ],
          "distance": [
            0,
            0
          ]
        }
      },
      "40": {
        "chains": {
          "1": 60,
          "3": 60,
          "4": 60,
          "5": 60,
          "6": 60,
          "8": 60,
          "9": 60,
          "10": 60,
          "11": 60,
          "12": 60
        },
        "inPlace": {
          "movement": [
            [],
            [
              {
                "duration": 1757,
                "speed": 1,
                "unk": 1,
                "distance": 0
              }
            ],
            []
          ],
          "distance": [
            0,
            0,
            0
          ]
        }
      },
      "60": {
        "connectSkillArrow": true,
        "inPlace": {
          "movement": [
            [
              {
                "duration": 1757,
                "speed": 1,
                "unk": 1,
                "distance": 0
              }
            ],
            []
          ],
          "distance": [
            0,
            0
          ]
        },
        "noRetry": true
      },
      "61": {
        "inPlace": {
          "movement": [
            [
              {
                "duration": 1757,
                "speed": 1,
                "unk": 1,
                "distance": 0
              }
            ],
            []
          ],
          "distance": [
            0,
            0
          ]
        }
      },
      "*": {
        "noInterrupt": [
          1,
          4,
          8,
          9,
          10,
          11,
          "12-0",
          "12-1",
          20
        ],
        "noRetry": true
      }
    },
    "5": { // Grim Strike
      "0": {
        "noInterrupt": [
          "1-0",
          "1-2",
          4,
          12,
          20
        ],
        "chains": {
          "1": 30,
          "3": 30,
          "5": 30,
          "6": 30,
          "8": 30,
          "9": 30,
          "10": 30,
          "11": 30,
          "19": 30,
          "21": 30
        }
      },
      "30": true,
      "31": {
        "chains": {
          "1": 32,
          "3": 32,
          "5": 32,
          "6": 32,
          "8": 32,
          "9": 32,
          "10": 32,
          "11": 32,
          "19": 32,
          "21": 32
        }
      },
      "32": true,
      "*": {
        "inPlace": {
          "movement": [
            [
              {
                "duration": 2416,
                "speed": 1,
                "unk": 1,
                "distance": 0
              }
            ],
            [
              {
                "duration": 1065,
                "speed": 1,
                "unk": 1,
                "distance": 0
              }
            ]
          ],
          "distance": [
            0,
            0
          ]
        }
      }
    },
    "6": { // Death Spiral
      "0": {
        "chains": {
          "1": 30,
          "3": 30,
          "4": 30,
          "5": 30,
          "6": 30,
          "8": 30,
          "9": 30,
          "10": 30,
          "11": 30,
          "12": 30
        }
      },
      "30": true,
      "31": true,
      "40": {
        "chains": {
          "1": 41,
          "3": 41,
          "4": 41,
          "5": 41,
          "6": 41,
          "8": 41,
          "9": 41,
          "10": 41,
          "11": 41,
          "12": 41
        }
      },
      "41": true,
      "42": true,
      "*": {
        "noRetry": true
      }
    },
    "8": { // Whipsaw
      "0": {
        "chains": {
          "1": 30,
          "3": 30,
          "10": 30
        }
      },
      "30": true,
      "40": {
        "chains": {
          "1": 41,
          "3": 41,
          "10": 41
        }
      },
      "41": true,
      "*": {
        "noInterrupt": [
          4,
          5,
          6,
          8,
          9,
          11,
          12,
          20
        ]
      }
    },
    "9": { // Smite
      "0": {
        "noInterrupt": [
          1,
          3,
          4,
          5,
          6,
          8,
          9,
          10,
          11,
          12,
          20
        ],
        "distance": 168,
        "inPlace": {
          "movement": [
            {
              "duration": 1832,
              "speed": 1,
              "unk": 1,
              "distance": 0
            }
          ],
          "distance": 0
        }
      }
    },
    "10": { // Pendulum Strike
      "0": {
        "chains": {
          "1": 30,
          "3": 30,
          "4": 30,
          "5": 30,
          "6": 30,
          "8": 30,
          "9": 30,
          "10": 30,
          "11": 30,
          "12": 30
        }
      },
      "30": true,
      "40": {
        "chains": {
          "1": 41,
          "3": 41,
          "4": 41,
          "5": 41,
          "6": 41,
          "8": 41,
          "9": 41,
          "10": 41,
          "11": 41,
          "12": 41
        }
      },
      "41": true,
      "*": {
        "noInterrupt": [
          19
        ],
        "moveDir": 1
      }
    },
    "11": { // Shadow Lash
      "0": {
        "triggerAbnormal": {
          "10151040": 2000
        }
      },
      "1": {
        "triggerAbnormal": {
          "10151041": 2000
        }
      },
      "2": {
        "triggerAbnormal": {
          "10151042": 2000
        }
      },
      "3": true,
      "*": {
        "noInterrupt": [
          19
        ],
        "noRetry": true
      }
    },
    "12": { // Shadow Burst
      "0": {
        "noInterrupt": [
          1,
          3,
          "4-0",
          "4-30",
          "4-40",
          "4-60",
          5,
          6,
          8,
          9,
          10,
          11,
          20
        ],
        "chains": {
          "12": 1
        }
      },
      "1": true,
      "31": true
    },
    "14": { // Retaliate
      "0": {
        "noRetry": true
      }
    },
    "15": { // Retribution
      "30": {
        "fixedSpeed": true
      },
      "81": true
    },
    "16": { // Shadow Reaping
      "0": {
        "fixedSpeed": true
      }
    },
    "19": { // Dark Harvest
      "0": {
        "noInterrupt": [
          21
        ],
        "requiredBuff": 10151220,
        "chains": {
          "1": 30,
          "3": 30,
          "4": 30,
          "5": 30,
          "6": 30,
          "8": 30,
          "9": 30,
          "10": 30,
          "11": 30,
          "12": 30
        }
      },
      "30": true,
      "*": {
        "inPlace": {
          "movement": [
            {
              "duration": 2122,
              "speed": 1,
              "unk": 1,
              "distance": 0
            }
          ],
          "distance": 0
        }
      }
    },
    "21": { // Recall Scythes
      "0": {
        "noInterrupt": [
          21
        ],
        "chains": {
          "1": 30,
          "3": 30,
          "4": 30,
          "5": 30,
          "6": 30,
          "8": 30,
          "9": 30,
          "10": 30,
          "11": 30,
          "12": 30
        }
      },
      "30": true,
      "*": {
        "requiredBuff": 10151221
      }
    },
    "23": { // Binding Scythes
      "31": {
        "fixedSpeed": true
      },
      "33": {
        "onlyTarget": true
      }
    },
    "40": { // Shadow Step
      "0": true,
      "30": true,
      "*": {
        "forceClip": true,
        "abnormalChains": {
          "10151000": 30
        }
      }
    },
    "*": {
      "consumeAbnormal": [
        10151020,
        10151021,
        10151022,
        10151023,
        10151040,
        10151041,
        10151042
      ]
    }
  },
  /* Gunner (9) */
  "9": {
    "1": { // Blast
      "1": true,
      "2": {
        "noRetry": true
      },
      "20": {
        "type": "userProjectile",
        "flyingSpeed": 800,
        "flyingDistance": 500,
        "explodeOnHit": true
      },
      "*": {
        "fixedSpeed": true,
        "noInterrupt": [
          1
        ],
        "projectiles": [
          20
        ],
        "triggerAbnormal": {
          "10152011": 3100
        },
        "hasChains": true
      }
    },
    "2": { // Bombardment
      "0": {
        "type": "lockon",
        "fixedSpeed": true
      },
      "1": {
        "type": "lockonCast"
      },
      "*": {
        "noRetry": true
      }
    },
    "3": { // Scattershot
      "1": {
        "categoryChains": {
          "91002": 30,
          "91003": 30,
          "91004": 30,
          "91005": 30,
          "91009": 30,
          "91010": 30,
          "91011": 30,
          "91013": 30,
          "91015": 30,
          "91018": 30,
          "91019": 30,
          "91040": 30,
          "91041": 30,
          "91043": 30,
          "91047": 30,
          "91007,10001": 30
        }
      },
      "2": {
        "categoryChains": {
          "91002": 30,
          "91003": 30,
          "91004": 30,
          "91005": 30,
          "91009": 30,
          "91010": 30,
          "91011": 30,
          "91013": 30,
          "91015": 30,
          "91018": 30,
          "91019": 30,
          "91040": 30,
          "91041": 30,
          "91043": 30,
          "91047": 30,
          "91007,10001": 30
        }
      },
      "30": true,
      "*": {
        "moveDir": 1,
        "noInterrupt": [
          3,
          20
        ],
        "glyphs": {
          "30007": {
            "movement": [
              {
                "duration": 394,
                "speed": 1,
                "unk": 1,
                "distance": 0
              },
              {
                "duration": 111,
                "speed": 1,
                "unk": 1,
                "distance": 0
              },
              {
                "duration": 1333,
                "speed": 1.8,
                "unk": 1,
                "distance": 64.8
              }
            ],
            "distance": 0.6
          }
        },
        "hasChains": true
      }
    },
    "4": { // Point Blank
      "1": {
        "noInterrupt": [
          4
        ],
        "categoryChains": {
          "91002": 30,
          "91003": 30,
          "91004": 30,
          "91005": 30,
          "91009": 30,
          "91010": 30,
          "91011": 30,
          "91013": 30,
          "91015": 30,
          "91018": 30,
          "91019": 30,
          "91040": 30,
          "91041": 30,
          "91043": 30,
          "91047": 30,
          "91007,10001": 30
        },
        "noRetry": true
      },
      "2": {
        "noInterrupt": [
          4
        ],
        "categoryChains": {
          "91002": 30,
          "91003": 30,
          "91004": 30,
          "91005": 30,
          "91009": 30,
          "91010": 30,
          "91011": 30,
          "91013": 30,
          "91015": 30,
          "91018": 30,
          "91019": 30,
          "91040": 30,
          "91041": 30,
          "91043": 30,
          "91047": 30,
          "91007,10001": 30
        },
        "noRetry": true
      },
      "3": {
        "moveDir": 1,
        "categoryChains": {
          "91004": 4
        }
      },
      "4": {
        "moveDir": 1
      },
      "30": {
        "noRetry": true
      },
      "*": {
        "noInterrupt": [
          "4-3",
          "4-4"
        ],
        "hasChains": true
      }
    },
    "5": { // Burst Fire / Targeted Burst Fire
      "0": {
        "noRetry": true
      },
      "1": {
        "fixedSpeed": true,
        "stamina": 75,
        "instantStamina": true,
        "level": [
          {
            "stamina": 50
          },
          {
            "stamina": 55
          },
          {
            "stamina": 60
          },
          {
            "stamina": 65
          }
        ]
      },
      "10": {
        "noRetry": true
      },
      "11": {
        "fixedSpeed": true,
        "stamina": 75,
        "instantStamina": true
      },
      "20": {
        "noRetry": true
      },
      "21": {
        "fixedSpeed": true,
        "stamina": 90,
        "instantStamina": true
      },
      "*": {
        "noInterrupt": [
          "9-0",
          "9-10",
          "9-20"
        ]
      }
    },
    "6": { // Time Bomb
      "1": true,
      "2": true,
      "20": {
        "type": "userProjectile",
        "flyingSpeed": 800
      },
      "*": {
        "fixedSpeed": true,
        "projectiles": [
          20
        ],
        "triggerAbnormal": {
          "10152010": 3100,
          "10152084": 4100
        }
      }
    },
    "7": { // Arcane Barrage
      "1": {
        "fixedSpeed": true,
        "noInterrupt": [
          7
        ],
        "triggerAbnormal": {
          "10152010": 3100
        },
        "noRetry": true
      },
      "2": {
        "fixedSpeed": true,
        "noInterrupt": [
          7
        ],
        "triggerAbnormal": {
          "10152010": 3100
        },
        "noRetry": true
      },
      "3": true
    },
    "9": { // Mana Missiles
      "0": {
        "autoRelease": 0,
        "level": {
          "9": {
            "releaseChain": {
              "connectSkills": [
                400102,
                400132
              ],
              "chain": 12,
              "grant": true
            }
          }
        }
      },
      "10": {
        "projectiles": [
          21,
          22
        ],
        "noRetry": true
      },
      "11": {
        "projectiles": [
          21,
          22,
          23,
          24,
          25
        ],
        "noRetry": true
      },
      "12": {
        "projectiles": [
          31,
          32,
          33,
          34,
          35
        ],
        "noRetry": true
      },
      "21": {
        "type": "userProjectile",
        "flyingSpeed": 600,
        "flyingDistance": 750
      },
      "22": {
        "type": "userProjectile",
        "flyingSpeed": 500,
        "flyingDistance": 750
      },
      "23": {
        "type": "userProjectile",
        "flyingSpeed": 400,
        "flyingDistance": 750
      },
      "24": {
        "type": "userProjectile",
        "flyingSpeed": 350,
        "flyingDistance": 750
      },
      "25": {
        "type": "userProjectile",
        "flyingSpeed": 300,
        "flyingDistance": 750
      },
      "31": {
        "type": "userProjectile",
        "flyingSpeed": 600,
        "flyingDistance": 750
      },
      "32": {
        "type": "userProjectile",
        "flyingSpeed": 500,
        "flyingDistance": 750
      },
      "33": {
        "type": "userProjectile",
        "flyingSpeed": 400,
        "flyingDistance": 750
      },
      "34": {
        "type": "userProjectile",
        "flyingSpeed": 350,
        "flyingDistance": 750
      },
      "35": {
        "type": "userProjectile",
        "flyingSpeed": 300,
        "flyingDistance": 750
      },
      "*": {
        "moveDir": 1
      }
    },
    "10": { // Arc Bomb
      "1": {
        "projectiles": [
          20
        ],
        "categoryChains": {
          "91002": 30,
          "91003": 30,
          "91004": 30,
          "91005": 30,
          "91009": 30,
          "91010": 30,
          "91011": 30,
          "91013": 30,
          "91015": 30,
          "91018": 30,
          "91019": 30,
          "91040": 30,
          "91041": 30,
          "91043": 30,
          "91047": 30,
          "91007,10001": 30
        }
      },
      "2": {
        "projectiles": [
          20
        ],
        "categoryChains": {
          "91002": 30,
          "91003": 30,
          "91004": 30,
          "91005": 30,
          "91009": 30,
          "91010": 30,
          "91011": 30,
          "91013": 30,
          "91015": 30,
          "91018": 30,
          "91019": 30,
          "91040": 30,
          "91041": 30,
          "91043": 30,
          "91047": 30,
          "91007,10001": 30
        }
      },
      "20": {
        "type": "userProjectile",
        "delay": 450,
        "flyingSpeed": 700,
        "flyingDistance": 350,
        "level": [
          {
            "flyingSpeed": 800
          },
          {
            "flyingSpeed": 800
          },
          {
            "flyingSpeed": 800
          },
          {
            "flyingSpeed": 800
          },
          {
            "flyingSpeed": 800
          },
          {
            "flyingSpeed": 800
          },
          {
            "flyingSpeed": 800
          },
          {
            "flyingSpeed": 800
          }
        ]
      },
      "30": {
        "connectSkillArrow": true,
        "projectiles": [
          20
        ],
        "noRetry": true
      },
      "*": {
        "noRetry": true
      }
    },
    "11": { // Rocket Jump
      "1": {
        "categoryChains": {
          "91002": 30,
          "91003": 30,
          "91004": 30,
          "91005": 30,
          "91009": 30,
          "91010": 30,
          "91011": 30,
          "91013": 30,
          "91015": 30,
          "91018": 30,
          "91019": 30,
          "91040": 31,
          "91041": 30,
          "91043": 30,
          "91047": 30,
          "91007,10001": 30
        }
      },
      "2": {
        "categoryChains": {
          "91002": 30,
          "91003": 30,
          "91004": 30,
          "91005": 30,
          "91009": 30,
          "91010": 30,
          "91011": 30,
          "91013": 30,
          "91015": 30,
          "91018": 30,
          "91019": 30,
          "91040": 31,
          "91041": 30,
          "91043": 30,
          "91047": 30,
          "91007,10001": 30
        }
      },
      "30": true,
      "31": true,
      "*": {
        "noInterrupt": [
          15
        ],
        "hasChains": true
      }
    },
    "13": { // Balder's Vengeance
      "1": {
        "categoryChains": {
          "91002": 30,
          "91003": 30,
          "91004": 30,
          "91005": 30,
          "91009": 30,
          "91010": 30,
          "91011": 30,
          "91013": 30,
          "91015": 30,
          "91018": 30,
          "91019": 30,
          "91040": 30,
          "91041": 30,
          "91043": 30,
          "91047": 30,
          "91007,10001": 30
        }
      },
      "2": {
        "categoryChains": {
          "91002": 30,
          "91003": 30,
          "91004": 30,
          "91005": 30,
          "91009": 30,
          "91010": 30,
          "91011": 30,
          "91013": 30,
          "91015": 30,
          "91018": 30,
          "91019": 30,
          "91040": 30,
          "91041": 30,
          "91043": 30,
          "91047": 30,
          "91007,10001": 30
        }
      },
      "30": {
        "connectSkillArrow": true,
        "noRetry": true
      },
      "*": {
        "noInterrupt": [
          13
        ],
        "moveDir": 1,
        "noRetry": true
      }
    },
    "15": { // Replenishment
      "1": {
        "categoryChains": {
          "91002": 30,
          "91003": 30,
          "91004": 30,
          "91005": 30,
          "91009": 30,
          "91010": 30,
          "91011": 30,
          "91013": 30,
          "91015": 30,
          "91018": 30,
          "91019": 30,
          "91040": 30,
          "91041": 30,
          "91043": 30,
          "91047": 30,
          "91007,10001": 30
        }
      },
      "2": {
        "categoryChains": {
          "91002": 30,
          "91003": 30,
          "91004": 30,
          "91005": 30,
          "91009": 30,
          "91010": 30,
          "91011": 30,
          "91013": 30,
          "91015": 30,
          "91018": 30,
          "91019": 30,
          "91040": 30,
          "91041": 30,
          "91043": 30,
          "91047": 30,
          "91007,10001": 30
        }
      },
      "30": true,
      "*": {
        "fixedSpeed": true,
        "noInterrupt": [
          15
        ]
      }
    },
    "18": { // HB
      "1": true,
      "2": true,
      "*": {
        "fixedSpeed": true
      }
    },
    "19": { // ST
      "1": {
        "projectiles": [
          20
        ],
        "categoryChains": {
          "91002": 30,
          "91003": 30,
          "91004": 30,
          "91005": 30,
          "91009": 30,
          "91010": 30,
          "91011": 30,
          "91013": 30,
          "91015": 30,
          "91018": 30,
          "91019": 30,
          "91040": 30,
          "91041": 30,
          "91043": 30,
          "91047": 30,
          "91007,10001": 30
        }
      },
      "2": {
        "projectiles": [
          20
        ],
        "categoryChains": {
          "91002": 30,
          "91003": 30,
          "91004": 30,
          "91005": 30,
          "91009": 30,
          "91010": 30,
          "91011": 30,
          "91013": 30,
          "91015": 30,
          "91018": 30,
          "91019": 30,
          "91040": 30,
          "91041": 30,
          "91043": 30,
          "91047": 30,
          "91007,10001": 30
        }
      },
      "20": {
        "type": "userProjectile",
        "delay": 350,
        "flyingSpeed": 700,
        "flyingDistance": 450
      },
      "30": {
        "connectSkillArrow": true,
        "projectiles": [
          20
        ],
        "noRetry": true
      },
      "*": {
        "noRetry": true
      }
    },
    "20": { // Retaliate
      "0": {
        "noRetry": true
      }
    },
    "40": { // Rolling Reload / Dashing Reload
      "1": {
        "abnormalChains": {
          "10152354": 31
        }
      },
      "2": {
        "abnormalChains": {
          "10152354": 32
        }
      },
      "31": {
        "consumeAbnormal": 10152354,
        "triggerAbnormal": {
          "10152010": 3100,
          "10152012": 3100
        }
      },
      "32": {
        "consumeAbnormal": 10152354,
        "triggerAbnormal": {
          "10152010": 3100,
          "10152012": 3100
        }
      },
      "*": {
        "fixedSpeed": true,
        "triggerAbnormal": {
          "10152010": 3100,
          "10152012": 3100,
          "10152354": 4000
        },
        "forceClip": true
      }
    },
    "41": { // Modular Weapon System
      "1": {
        "categoryChains": {
          "91002": 30,
          "91003": 30,
          "91004": 30,
          "91005": 30,
          "91009": 30,
          "91010": 30,
          "91011": 30,
          "91013": 30,
          "91015": 30,
          "91018": 30,
          "91019": 30,
          "91040": 30,
          "91041": 30,
          "91043": 30,
          "91047": 30,
          "91007,10001": 30
        }
      },
      "2": {
        "categoryChains": {
          "91002": 30,
          "91003": 30,
          "91004": 30,
          "91005": 30,
          "91009": 30,
          "91010": 30,
          "91011": 30,
          "91013": 30,
          "91015": 30,
          "91018": 30,
          "91019": 30,
          "91040": 30,
          "91041": 30,
          "91043": 30,
          "91047": 30,
          "91007,10001": 30
        }
      },
      "30": true,
      "*": {
        "fixedSpeed": true,
        "hasChains": true
      }
    },
    "42": { // Detonate
      "1": {
        "fixedSpeed": true,
        "triggerAbnormal": {
          "10152011": 3100
        }
      }
    },
    "43": { // Remote Trigger
      "1": {
        "categoryChains": {
          "91002": 30,
          "91003": 30,
          "91004": 30,
          "91005": 30,
          "91009": 30,
          "91010": 30,
          "91011": 30,
          "91013": 30,
          "91015": 30,
          "91018": 30,
          "91019": 30,
          "91040": 30,
          "91041": 30,
          "91043": 30,
          "91047": 30,
          "91007,10001": 30
        }
      },
      "3": {
        "categoryChains": {
          "91002": 50,
          "91003": 50,
          "91004": 50,
          "91005": 50,
          "91009": 50,
          "91010": 50,
          "91011": 50,
          "91013": 50,
          "91015": 50,
          "91018": 50,
          "91019": 50,
          "91040": 50,
          "91041": 50,
          "91043": 50,
          "91047": 50,
          "91007,10001": 50
        }
      },
      "30": {
        "connectSkillArrow": true,
        "noRetry": true
      },
      "31": true,
      "50": {
        "connectSkillArrow": true,
        "noRetry": true
      },
      "51": true,
      "*": {
        "moveDir": 1,
        "hasChains": true,
        "noRetry": true
      }
    },
    "44": { // Balder's Vengeance (Modular Weapon System)
      "1": {
        "categoryChains": {
          "91002": 30,
          "91003": 30,
          "91004": 30,
          "91005": 30,
          "91009": 30,
          "91010": 30,
          "91011": 30,
          "91013": 30,
          "91015": 30,
          "91018": 30,
          "91019": 30,
          "91040": 30,
          "91041": 30,
          "91043": 30,
          "91047": 30,
          "91007,10001": 30
        }
      },
      "30": {
        "connectSkillArrow": true,
        "noRetry": true
      },
      "*": {
        "noInterrupt": [
          44
        ],
        "moveDir": 1,
        "noRetry": true
      }
    },
    "47": { // Obliteration
      "1": {
        "categoryChains": {
          "91002": 30,
          "91003": 30,
          "91004": 30,
          "91005": 30,
          "91009": 30,
          "91010": 30,
          "91011": 30,
          "91013": 30,
          "91015": 30,
          "91018": 30,
          "91019": 30,
          "91040": 30,
          "91041": 30,
          "91043": 30,
          "91047": 30,
          "91007,10001": 30
        }
      },
      "2": {
        "categoryChains": {
          "91002": 30,
          "91003": 30,
          "91004": 30,
          "91005": 30,
          "91009": 30,
          "91010": 30,
          "91011": 30,
          "91013": 30,
          "91015": 30,
          "91018": 30,
          "91019": 30,
          "91040": 30,
          "91041": 30,
          "91043": 30,
          "91047": 30,
          "91007,10001": 30
        }
      },
      "30": true,
      "*": {
        "requiredBuff": 10152340,
        "moveDir": 1,
        "hasChains": true
      }
    },
    "*": {
      "consumeAbnormal": [
        10152010,
        10152011
      ]
    }
  },
  /* Brawler (10) */
  "10": {
    "1": { // Punch
      "0": {
        "categoryChains": {
          "92002": 30,
          "92003": 30,
          "92004": 30,
          "92005": 30,
          "92006": 30,
          "92007": 30,
          "92008": 30,
          "92009": 30,
          "92010": 30,
          "92013": 30,
          "92014": 30,
          "92015": 30,
          "92016": 30,
          "92017": 30,
          "92018": 30,
          "92019": 30,
          "92020": 30,
          "92021": 30,
          "92022": 30,
          "92024": 30,
          "92026": 30,
          "92040": 30,
          "92001,10000": 1,
          "92001,10001": 2,
          "92001,10002": 3,
          "92001,10010": 32
        }
      },
      "1": true,
      "2": true,
      "3": true,
      "30": true,
      "31": true,
      "32": true,
      "*": {
        "noInterrupt": [
          "1-3"
        ],
        "triggerAbnormal": {
          "10153060": 3000
        },
        "consumeAbnormalEnd": 10153060,
        "hasChains": true,
        "noRetry": true
      }
    },
    "2": { // Counter
      "1": {
        "triggerAbnormal": {
          "10153001": 2147483647
        },
        "consumeAbnormalEnd": 10153001
      },
      "2": {
        "triggerAbnormal": {
          "10153002": 2147483647
        },
        "consumeAbnormalEnd": 10153002
      },
      "3": {
        "triggerAbnormal": {
          "10153003": 2147483647
        },
        "consumeAbnormalEnd": 10153003
      },
      "4": {
        "triggerAbnormal": {
          "10153004": 2147483647
        },
        "consumeAbnormalEnd": 10153004
      },
      "10": {
        "fixedSpeed": true,
        "triggerAbnormal": {
          "10153006": 2147483647
        },
        "consumeAbnormalEnd": 10153006
      },
      "11": {
        "fixedSpeed": true,
        "triggerAbnormal": {
          "10153005": 2147483647
        },
        "consumeAbnormalEnd": 10153005
      },
      "12": {
        "categoryChains": {
          "92001,10000": 1,
          "92001,10001": 2,
          "92001,10002": 3,
          "92001,10003": 4,
          "92001,10010": 1
        }
      },
      "*": {
        "hasChains": true,
        "noRetry": true
      }
    },
    "3": { // Divine Wrath
      "0": true,
      "1": {
        "type": "lockonCast",
        "setEndpointStage": 1
      },
      "*": {
        "fixedSpeed": true,
        "noRetry": true
      }
    },
    "4": { // Ground Pound
      "0": {
        "categoryChains": {
          "800": 30
        }
      },
      "30": true,
      "*": {
        "hasChains": true
      }
    },
    "5": { // Bullrush
      "0": {
        "fixedSpeed": true,
        "noRetry": true
      }
    },
    "6": { // Haymaker
      "1": {
        "categoryChains": {
          "800": 30
        }
      },
      "2": {
        "categoryChains": {
          "800": 30
        }
      },
      "30": true,
      "31": true,
      "*": {
        "hasChains": true
      }
    },
    "7": { // Roundhouse Kick
      "0": {
        "categoryChains": {
          "800": 30
        }
      },
      "30": true,
      "*": {
        "noInterrupt": [
          7
        ],
        "hasChains": true
      }
    },
    "8": { // Piledriver
      "1": {
        "categoryChains": {
          "800": 30
        }
      },
      "2": {
        "categoryChains": {
          "800": 30
        }
      },
      "30": true,
      "31": true,
      "*": {
        "hasChains": true
      }
    },
    "9": { // Jackhammer
      "1": {
        "categoryChains": {
          "800": 30
        }
      },
      "2": {
        "categoryChains": {
          "800": 30
        }
      },
      "30": true,
      "31": true,
      "*": {
        "noInterrupt": [
          9
        ],
        "fixedSpeed": true,
        "hasChains": true
      }
    },
    "10": { // Counterpunch
      "0": {
        "categoryChains": {
          "800": 30
        }
      },
      "30": true,
      "*": {
        "requiredBuff": 10153000,
        "hasChains": true
      }
    },
    "12": { // Retaliate
      "0": {
        "noRetry": true
      }
    },
    "13": { // Provoke
      "1": true,
      "2": true,
      "*": {
        "fixedSpeed": true
      }
    },
    "14": { // Infuriate
      "1": {
        "categoryChains": {
          "800": 30
        }
      },
      "2": {
        "categoryChains": {
          "800": 30
        }
      },
      "30": true,
      "*": {
        "hasChains": true
      }
    },
    "15": { // High Kick
      "0": {
        "categoryChains": {
          "800": 30
        }
      },
      "30": true,
      "*": {
        "requiredBuff": 10153503,
        "hasChains": true
      }
    },
    "16": { // Flip Kick
      "1": {
        "categoryChains": {
          "800": 30
        }
      },
      "2": {
        "categoryChains": {
          "800": 30
        }
      },
      "30": true,
      "*": {
        "hasChains": true
      }
    },
    "18": { // Growing Fury
      "1": {
        "categoryChains": {
          "800": 30
        }
      },
      "2": {
        "categoryChains": {
          "800": 30
        }
      },
      "30": true,
      "*": {
        "requiredBuff": 10153050,
        "hasChains": true
      }
    },
    "19": { // Invigorating Rage
      "1": true,
      "2": true,
      "*": {
        "fixedSpeed": true,
        "stamina": 1500,
        "instantStamina": true
      }
    },
    "21": { // Mounting Rage
      "1": true,
      "2": true,
      "*": {
        "fixedSpeed": true
      }
    },
    "22": { // Flying Kick
      "0": {
        "categoryChains": {
          "800": 30
        }
      },
      "30": true,
      "*": {
        "noInterrupt": [
          22
        ],
        "hasChains": true
      }
    },
    "24": { // One-Inch Punch
      "1": {
        "categoryChains": {
          "800": 30
        }
      },
      "2": {
        "categoryChains": {
          "800": 30
        }
      },
      "30": true,
      "31": true,
      "*": {
        "hasChains": true
      }
    },
    "26": { // Rythmic Blows
      "0": {
        "categoryChains": {
          "800": 2
        }
      },
      "1": true,
      "2": true,
      "3": true,
      "4": true,
      "5": true,
      "6": true,
      "7": true,
      "*": {
        "hasChains": true,
        "noRetry": true
      }
    },
    "40": { // Quick Dash
      "0": true,
      "30": true,
      "*": {
        "fixedSpeed": true,
        "forceClip": true,
        "abnormalChains": {
          "10153150": 30
        },
        "noRetry": true
      }
    }
  },
  /* Ninja (11) */
  "11": {
    "1": { // Combo Attack
      "0": {
        "categoryChains": {
          "900": 30
        }
      },
      "1": {
        "triggerAbnormal": {
          "10154001": 1500
        }
      },
      "2": {
        "triggerAbnormal": {
          "10154002": 1400
        }
      },
      "3": {
        "triggerAbnormal": {
          "10154003": 1400
        }
      },
      "4": {
        "triggerAbnormal": {
          "10154004": 1400
        }
      },
      "5": {
        "triggerAbnormal": {
          "10154005": 1600
        }
      },
      "6": {
        "triggerAbnormal": {
          "10154006": 100
        }
      },
      "30": true,
      "40": {
        "categoryChains": {
          "900": 70
        }
      },
      "41": {
        "triggerAbnormal": {
          "10154001": 1500
        }
      },
      "42": {
        "triggerAbnormal": {
          "10154002": 1400
        }
      },
      "43": {
        "triggerAbnormal": {
          "10154003": 1400
        }
      },
      "44": {
        "triggerAbnormal": {
          "10154004": 1400
        }
      },
      "45": {
        "triggerAbnormal": {
          "10154005": 1600
        }
      },
      "46": {
        "triggerAbnormal": {
          "10154006": 100
        }
      },
      "70": true,
      "*": {
        "fixedSpeed": true,
        "triggerAbnormal": {
          "10154000": 1650
        },
        "hasChains": true,
        "noRetry": true
      }
    },
    "2": { // Shadow Jump
      "0": true,
      "30": true,
      "*": {
        "fixedSpeed": true,
        "forceClip": true,
        "abnormalChains": {
          "10154010": 30
        }
      }
    },
    "3": { // Leaves on the Wind
      "0": {
        "categoryChains": {
          "911": 40,
          "9999,900": 30
        }
      },
      "30": {
        "connectSkillArrow": true,
        "noRetry": true
      },
      "40": true,
      "*": {
        "hasChains": true
      }
    },
    "4": { // Jagged Path
      "1": {
        "fixedSpeed": true,
        "length": 665,
        "distance": 469
      },
      "10": true,
      "11": true
    },
    "5": { // Impact Bomb
      "0": {
        "categoryChains": {
          "900": 30
        }
      },
      "30": {
        "connectSkillArrow": true,
        "noRetry": true
      },
      "*": {
        "moveDir": 1,
        "noInterrupt": [
          5
        ],
        "forceClip": true,
        "noRetry": true
      }
    },
    "6": { // One Thousand Cuts
      "0": {
        "categoryChains": {
          "900": 30
        }
      },
      "1": {
        "fixedSpeed": true,
        "length": 300,
        "distance": 246
      },
      "10": true,
      "30": true,
      "*": {
        "hasChains": true
      }
    },
    "7": { // Decoy Jutsu
      "0": {
        "onlyTarget": true
      }
    },
    "8": { // Fire Avalanche
      "0": {
        "categoryChains": {
          "900": 30
        }
      },
      "1": true,
      "2": true,
      "30": true,
      "31": {
        "categoryChains": {
          "900": 30
        }
      },
      "51": {
        "categoryChains": {
          "900": 52
        }
      },
      "52": true,
      "*": {
        "abnormals": {
          "32033": {
            "speed": 1.2
          },
          "32058": {
            "speed": 1.3
          }
        },
        "hasChains": true,
        "noRetry": true
      }
    },
    "9": { // Smoke Bomb
      "0": {
        "categoryChains": {
          "900": 30
        }
      },
      "30": {
        "connectSkillArrow": true,
        "noRetry": true
      }
    },
    "10": { // Retaliate
      "0": {
        "noRetry": true
      }
    },
    "11": { // Focus
      "0": true,
      "50": true,
      "*": {
        "noInterrupt": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23
        ]
      }
    },
    "12": { // Skyfall
      "1": {
        "categoryChains": {
          "900": 30
        }
      },
      "2": {
        "categoryChains": {
          "900": 30
        }
      },
      "30": true,
      "*": {
        "hasChains": true
      }
    },
    "13": { // Circle of Steel
      "1": {
        "categoryChains": {
          "900": 30
        }
      },
      "2": {
        "categoryChains": {
          "900": 30
        }
      },
      "30": true,
      "*": {
        "hasChains": true
      }
    },
    "14": { // Double Cut
      "1": {
        "categoryChains": {
          "900": 30
        }
      },
      "2": {
        "categoryChains": {
          "900": 30
        }
      },
      "30": true,
      "*": {
        "hasChains": true
      }
    },
    "15": { // Burning Heart
      "1": true,
      "2": true,
      "3": true,
      "4": true,
      "5": true,
      "6": true,
      "7": true,
      "8": true,
      "9": true,
      "10": true,
      "31": {
        "categoryChains": {
          "900": 32
        }
      },
      "32": true,
      "*": {
        "stamina": 100,
        "instantStamina": true,
        "abnormals": {
          "32033": {
            "speed": 1.2
          },
          "32058": {
            "speed": 1.3
          }
        }
      }
    },
    "16": { // Death Blossom
      "0": {
        "categoryChains": {
          "900": 30
        }
      },
      "30": true,
      "*": {
        "fixedSpeed": true,
        "hasChains": true
      }
    },
    "17": { // Attunement
      "0": {
        "categoryChains": {
          "900": 30
        }
      },
      "30": true,
      "*": {
        "hasChains": true
      }
    },
    "18": { // Bladestorm
      "0": {
        "categoryChains": {
          "900": 30
        }
      },
      "30": true,
      "*": {
        "hasChains": true
      }
    },
    "19": { // Chakra Thrust
      "0": {
        "categoryChains": {
          "900": 30
        }
      },
      "30": true,
      "*": {
        "hasChains": true
      }
    },
    "20": { // Clone Jutsu
      "0": {
        "fixedSpeed": true
      }
    },
    "21": { // Boomerang Shuriken
      "0": {
        "categoryChains": {
          "93003": 15
        }
      },
      "11": {
        "categoryChains": {
          "93003": 17
        }
      },
      "12": {
        "categoryChains": {
          "93003": 16
        }
      },
      "13": {
        "categoryChains": {
          "93003": 18
        }
      },
      "15": {
        "connectSkillArrow": true,
        "noRetry": true
      },
      "16": {
        "connectSkillArrow": true,
        "noRetry": true
      },
      "17": {
        "connectSkillArrow": true,
        "noRetry": true
      },
      "18": {
        "connectSkillArrow": true,
        "noRetry": true
      },
      "50": true,
      "51": true,
      "*": {
        "hasChains": true,
        "noRetry": true
      }
    },
    "22": { // Quick Attack
      "10": {
        "noInterrupt": [
          22
        ],
        "categoryChains": {
          "93019": 30,
          "9999,900": 20
        }
      },
      "20": true,
      "30": true,
      "40": {
        "categoryChains": {
          "93019": 60,
          "9999,900": 50
        }
      },
      "50": {
        "connectSkillArrow": true,
        "noRetry": true
      },
      "60": {
        "connectSkillArrow": true,
        "noRetry": true
      }
    },
    "23": { // Inner Harmony
      "0": {
        "categoryChains": {
          "900": 30
        }
      },
      "30": true,
      "*": {
        "hasChains": true
      }
    },
    "*": {
      "consumeAbnormal": [
        10154000,
        10154001,
        10154002,
        10154003,
        10154004,
        10154005,
        10154006
      ]
    }
  },
  /* Valkyrie (12) */
  "12": {
    "1": { // Slash
      "0": {
        "triggerAbnormal": {
          "10155006": 4000
        },
        "consumeAbnormalEnd": 10155006,
        "categoryChains": {
          "750": 30
        }
      },
      "1": {
        "triggerAbnormal": {
          "10155007": 4000
        },
        "consumeAbnormalEnd": 10155007
      },
      "2": {
        "triggerAbnormal": {
          "10155008": 4000
        },
        "consumeAbnormalEnd": 10155008
      },
      "3": true,
      "30": {
        "triggerAbnormal": {
          "10155006": 4000
        },
        "consumeAbnormalEnd": 10155006
      },
      "*": {
        "noInterrupt": [
          "1-3"
        ],
        "hasChains": true,
        "noRetry": true
      }
    },
    "2": { // Overhead Slash
      "0": {
        "categoryChains": {
          "750": 30
        }
      },
      "30": true,
      "*": {
        "hasChains": true
      }
    },
    "3": { // Glaive Strike
      "0": {
        "categoryChains": {
          "750": 30
        }
      },
      "30": true,
      "*": {
        "requiredBuff": 10155113,
        "hasChains": true
      }
    },
    "4": { // Charge
      "0": {
        "fixedSpeed": true,
        "length": 1100,
        "distance": 436,
        "noInterrupt": [
          "4-0"
        ]
      },
      "10": true,
      "11": {
        "noInterrupt": [
          1,
          2,
          3,
          "4-11",
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          23,
          24,
          25
        ]
      }
    },
    "5": { // Maelstrom
      "0": {
        "categoryChains": {
          "750": 30
        }
      },
      "30": true,
      "*": {
        "hasChains": true
      }
    },
    "6": { // Leaping Strike
      "0": {
        "categoryChains": {
          "750": 30
        }
      },
      "30": true,
      "*": {
        "hasChains": true
      }
    },
    "7": { // Spinning Death
      "0": {
        "triggerAbnormal": {
          "10155070": 5000
        },
        "categoryChains": {
          "750": 30
        }
      },
      "1": {
        "consumeAbnormal": 10155070,
        "triggerAbnormal": {
          "10155071": 5000
        }
      },
      "2": {
        "consumeAbnormal": 10155071,
        "triggerAbnormal": {
          "10155072": 1
        }
      },
      "30": {
        "triggerAbnormal": {
          "10155070": 5000
        }
      },
      "*": {
        "noInterrupt": [
          "7-2"
        ],
        "hasChains": true,
        "noRetry": true
      }
    },
    "8": { // Titansbane
      "0": {
        "fixedSpeed": true,
        "categoryChains": {
          "750": 30,
          "13008,10000": 1
        }
      },
      "1": true,
      "30": {
        "fixedSpeed": true
      },
      "*": {
        "hasChains": true
      }
    },
    "9": { // Ground Bash
      "0": {
        "categoryChains": {
          "750": 30
        }
      },
      "30": true,
      "*": {
        "requiredBuff": 10155112,
        "hasChains": true
      }
    },
    "10": { // Dream Slash
      "0": {
        "categoryChains": {
          "750": 30
        }
      },
      "30": {
        "connectSkillArrow": true,
        "noRetry": true
      },
      "*": {
        "noInterrupt": [
          10
        ],
        "hasChains": true,
        "noRetry": true
      }
    },
    "11": { // Shining Crescent
      "0": {
        "noInterrupt": [
          11
        ],
        "categoryChains": {
          "750": 30
        }
      },
      "1": {
        "categoryChains": {
          "750": 31
        }
      },
      "30": true,
      "31": true,
      "*": {
        "hasChains": true
      }
    },
    "12": { // Ragnarok
      "0": {
        "categoryChains": {
          "750": 30
        }
      },
      "30": true,
      "*": {
        "hasChains": true
      }
    },
    "13": { // Bloodflower
      "0": {
        "categoryChains": {
          "750": 30
        }
      },
      "30": true,
      "*": {
        "hasChains": true
      }
    },
    "14": { // Evasion
      "0": true,
      "1": true,
      "*": {
        "fixedSpeed": true,
        "forceClip": true
      }
    },
    "15": { // Windslash
      "0": {
        "categoryChains": {
          "750": 30
        }
      },
      "30": true,
      "*": {
        "hasChains": true
      }
    },
    "16": { // Runeburst
      "0": {
        "categoryChains": {
          "750": 30
        }
      },
      "30": true,
      "*": {
        "fixedSpeed": true,
        "hasChains": true
      }
    },
    "17": { // Balder's Tears
      "0": {
        "fixedSpeed": true
      }
    },
    "18": { // Retaliate
      "0": {
        "noRetry": true
      }
    },
    "19": { // Reclamation
      "0": {
        "categoryChains": {
          "750": 30
        }
      },
      "30": true,
      "*": {
        "hasChains": true
      }
    },
    "20": { // Backstab
      "0": {
        "distance": 0,
        "onlyTarget": true
      }
    },
    "21": { // Dark Herald
      "0": {
        "requiredBuff": 10155201,
        "fixedSpeed": true
      }
    },
    "23": { // Gungir's Bite
      "0": {
        "triggerAbnormal": {
          "10155531": 1000
        },
        "categoryChains": {
          "750": 1
        }
      },
      "1": {
        "triggerAbnormal": {
          "10155531": 1000
        }
      },
      "2": true,
      "*": {
        "abnormals": {
          "10155531": {
            "disableSkill": true
          }
        },
        "hasChains": true,
        "noRetry": true
      }
    },
    "24": { // Twilight Waltz
      "0": {
        "triggerAbnormal": {
          "10155543": 1000
        },
        "categoryChains": {
          "750": 1
        }
      },
      "1": {
        "triggerAbnormal": {
          "10155543": 1000
        }
      },
      "2": {
        "triggerAbnormal": {
          "10155543": 1000
        }
      },
      "3": true,
      "4": true,
      "*": {
        "abnormals": {
          "10155543": {
            "disableSkill": true
          }
        },
        "hasChains": true,
        "noRetry": true
      }
    },
    "25": { // Godsfall
      "0": {
        "triggerAbnormal": {
          "10155511": 2000
        },
        "categoryChains": {
          "772": 31,
          "9999,750": 1
        }
      },
      "1": {
        "triggerAbnormal": {
          "10155511": 2000
        }
      },
      "2": {
        "distance": [
          -313.28,
          463.28
        ],
        "categoryChains": {
          "772": 32,
          "9999,750": 3
        }
      },
      "3": {
        "distance": [
          -313.28,
          463.28
        ]
      },
      "31": {
        "triggerAbnormal": {
          "10155511": 2000
        }
      },
      "32": {
        "distance": [
          -313.28,
          463.28
        ]
      },
      "*": {
        "abnormals": {
          "10155511": {
            "disableSkill": true
          }
        },
        "hasChains": true,
        "noRetry": true
      }
    }
  },
  /* All-class (*) */
  "*": {
    "9010100": true, // Racial teleport
    "9020100": { // Racial buff 1
      "fixedSpeed": true
    },
    "9030100": { // Racial buff 2
      "fixedSpeed": true
    },
    "9100100": { // Apex Urgency
      "fixedSpeed": true
    }
  }
};