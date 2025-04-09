# Client Skills Organization

This document explains the organization of skill files in the `skills_client_sorted` directory.

## Overview

The `skills_client_sorted` directory contains JSON files that were split from the main `skills_client.json` file. Each file represents a specific combination of race and class, with the file name indicating which race and class it belongs to.

## File Naming Convention

The file names follow this pattern: `XRRCC.json`

Where:
- `X`: A constant (1)
- `RR`: Two-digit race ID
- `CC`: Two-digit class ID

## Race IDs

Based on the code in `player.js`, race IDs are calculated as:
```javascript
race: Math.floor(event.templateId / 100) % 100 - 1
```

Race IDs are:
- 0: Male Human
- 1: Female Human
- 2: Male High Elf
- 3: Female High Elf
- 4: Male Aman
- 5: Female Aman
- 6: Male Castanic
- 7: Female Castanic
- 8: Popori
- 9: Elin
- 10: Baraka

## Class IDs

Based on the code in `player.js`, `skills.js`, and the files in `config/xml_data_extracted`, class IDs are calculated as:
```javascript
job: event.templateId % 100 - 1
```

Class IDs are:
- 0: Warrior
- 1: Lancer
- 2: Slayer
- 3: Berserker
- 4: Sorcerer
- 5: Archer
- 6: Priest
- 7: Elementalist (Mystic)
- 8: Soulless (Reaper)
- 9: Engineer (Gunner)
- 10: Brawler
- 11: Ninja
- 12: Valkyrie

## Complete File Mapping

Here is a complete mapping of all files in the `skills_client_sorted` directory:

### General Skills
- `9999.json`: General skills for all classes

### Race 0 (Male Human)
- `10101.json`: Male Human Warrior
- `10102.json`: Male Human Lancer
- `10103.json`: Male Human Slayer
- `10104.json`: Male Human Berserker
- `10105.json`: Male Human Sorcerer
- `10106.json`: Male Human Archer
- `10107.json`: Male Human Priest
- `10108.json`: Male Human Elementalist (Mystic)
- `10111.json`: Male Human Brawler

### Race 1 (Female Human)
- `10201.json`: Female Human Warrior
- `10202.json`: Female Human Lancer
- `10203.json`: Female Human Slayer
- `10204.json`: Female Human Berserker
- `10205.json`: Female Human Sorcerer
- `10206.json`: Female Human Archer
- `10207.json`: Female Human Priest
- `10208.json`: Female Human Elementalist (Mystic)
- `10211.json`: Female Human Brawler

### Race 2 (Male High Elf)
- `10301.json`: Male High Elf Warrior
- `10302.json`: Male High Elf Lancer
- `10303.json`: Male High Elf Slayer
- `10304.json`: Male High Elf Berserker
- `10305.json`: Male High Elf Sorcerer
- `10306.json`: Male High Elf Archer
- `10307.json`: Male High Elf Priest
- `10308.json`: Male High Elf Elementalist (Mystic)

### Race 3 (Female High Elf)
- `10401.json`: Female High Elf Warrior
- `10402.json`: Female High Elf Lancer
- `10403.json`: Female High Elf Slayer
- `10404.json`: Female High Elf Berserker
- `10405.json`: Female High Elf Sorcerer
- `10406.json`: Female High Elf Archer
- `10407.json`: Female High Elf Priest
- `10408.json`: Female High Elf Elementalist (Mystic)
- `10410.json`: Female High Elf Engineer (Gunner)

### Race 4 (Male Aman)
- `10501.json`: Male Aman Warrior
- `10502.json`: Male Aman Lancer
- `10503.json`: Male Aman Slayer
- `10504.json`: Male Aman Berserker
- `10505.json`: Male Aman Sorcerer
- `10506.json`: Male Aman Archer
- `10507.json`: Male Aman Priest
- `10508.json`: Male Aman Elementalist (Mystic)

### Race 5 (Female Aman)
- `10601.json`: Female Aman Warrior
- `10602.json`: Female Aman Lancer
- `10603.json`: Female Aman Slayer
- `10604.json`: Female Aman Berserker
- `10605.json`: Female Aman Sorcerer
- `10606.json`: Female Aman Archer
- `10607.json`: Female Aman Priest
- `10608.json`: Female Aman Elementalist (Mystic)

### Race 6 (Male Castanic)
- `10701.json`: Male Castanic Warrior
- `10702.json`: Male Castanic Lancer
- `10703.json`: Male Castanic Slayer
- `10704.json`: Male Castanic Berserker
- `10705.json`: Male Castanic Sorcerer
- `10706.json`: Male Castanic Archer
- `10707.json`: Male Castanic Priest
- `10708.json`: Male Castanic Elementalist (Mystic)

### Race 7 (Female Castanic)
- `10801.json`: Female Castanic Warrior
- `10802.json`: Female Castanic Lancer
- `10803.json`: Female Castanic Slayer
- `10804.json`: Female Castanic Berserker
- `10805.json`: Female Castanic Sorcerer
- `10806.json`: Female Castanic Archer
- `10807.json`: Female Castanic Priest
- `10808.json`: Female Castanic Elementalist (Mystic)
- `10810.json`: Female Castanic Engineer (Gunner)
- `10813.json`: Female Castanic Valkyrie

### Race 8 (Popori)
- `10901.json`: Popori Warrior
- `10902.json`: Popori Lancer
- `10903.json`: Popori Slayer
- `10904.json`: Popori Berserker
- `10905.json`: Popori Sorcerer
- `10906.json`: Popori Archer
- `10907.json`: Popori Priest
- `10908.json`: Popori Elementalist (Mystic)

### Race 9 (Elin)
- `11001.json`: Elin Warrior
- `11002.json`: Elin Lancer
- `11003.json`: Elin Slayer
- `11004.json`: Elin Berserker
- `11005.json`: Elin Sorcerer
- `11006.json`: Elin Archer
- `11007.json`: Elin Priest
- `11008.json`: Elin Elementalist (Mystic)
- `11009.json`: Elin Soulless (Reaper)
- `11010.json`: Elin Engineer (Gunner)
- `11011.json`: Elin Brawler
- `11012.json`: Elin Ninja

### Race 10 (Baraka)
- `11101.json`: Baraka Warrior
- `11102.json`: Baraka Lancer
- `11103.json`: Baraka Slayer
- `11104.json`: Baraka Berserker
- `11105.json`: Baraka Sorcerer
- `11106.json`: Baraka Archer
- `11107.json`: Baraka Priest
- `11108.json`: Baraka Elementalist (Mystic)

## Special File: 9999.json

The file `9999.json` contains general skills that are available to all classes. These are not race or class specific and include basic actions and common abilities such as:
- Basic movement skills
- Common combat actions
- Universal abilities

## How the Files are Used

The skill prediction module loads these files to predict skill behavior for different race/class combinations. When a player logs in, the module determines their race and class from the `templateId` and loads the appropriate skill file.

The calculation works as follows:
```javascript
// From player.js
race: Math.floor(event.templateId / 100) % 100 - 1
job: event.templateId % 100 - 1
```

For example, if a player's templateId is 10101, the calculation would be:
- Race: Math.floor(10101 / 100) % 100 - 1 = Math.floor(101.01) % 100 - 1 = 101 % 100 - 1 = 0
- Job: 10101 % 100 - 1 = 1 - 1 = 0

This would load the skills for a Male Human Warrior (10101.json).

Conversely, to determine the filename for a specific race/class combination, the formula is:
```
templateId = 10000 + (race + 1) * 100 + (job + 1)
```

For example, for an Elin Archer (race ID 9, class ID 5):
```
templateId = 10000 + (9 + 1) * 100 + (5 + 1) = 10000 + 1000 + 6 = 11006
```
This corresponds to the file `11006.json`.

By splitting the large `skills_client.json` file into smaller files based on race and class, the module can load only the necessary skill data for the current character, improving performance and reducing memory usage.

The split was performed by the `split_skills_client.js` script, which takes each top-level key from the original JSON file and creates a separate file for it.

## File Structure

Each file contains a JSON object with a single top-level key matching the filename (without extension). Under this key are skill IDs with their associated properties such as:
- `category`: Categories the skill belongs to
- `dcType`: Type of skill (combo, normal, etc.)
- `timeRate`: Speed multiplier
- `length`: Duration in milliseconds
- `distance`: Travel distance
- And other skill-specific properties

For example, from 10101.json (Male Human Warrior):
```json
{
  "10101": {
    "10100": {
      "category": [1001, 11, 101, 9011, 10000, 560, 9999],
      "dcType": "combo",
      "timeRate": 1.1,
      "pendingStartTime": 363,
      "length": 566,
      "distance": 47.53
    },
    "10101": {
      "category": [1001, 11, 101, 9011, 10001, 560, 9999],
      "dcType": "combo",
      "timeRate": 1.1,
      "pendingStartTime": 409,
      "length": 657,
      "distance": 42.12
    }
    // More skills...
  }
}
```

Or from 11006.json (Elin Archer):
```json
{
  "11006": {
    "20800": {
      "category": [1001, 11, 101, 9011, 10000, 560, 9999],
      "dcType": "normal",
      "timeRate": 1.0,
      "length": 920,
      "distance": 0
    },
    "20801": {
      "category": [1001, 11, 101, 9011, 10001, 560, 9999],
      "dcType": "normal",
      "timeRate": 1.0,
      "length": 1200,
      "distance": 0
    }
    // More skills...
  }
}
```

These properties are used by the skill prediction module to accurately predict skill behavior and timing. The module uses this data to:

1. Determine the duration of skills
2. Calculate movement distances
3. Handle skill chains and combos
4. Apply appropriate animation speeds
5. Manage skill cooldowns

## Determining Race and Class from Filename

Let's start fresh and determine what file corresponds to what race and class using only the math from player.js:

```javascript
race: Math.floor(event.templateId / 100) % 100 - 1
job: event.templateId % 100 - 1
```

### Understanding the Math

The `%` operator in JavaScript is the modulo operator, which returns the remainder after division. Here's how each part of the calculation works:

**For race calculation:**
1. `event.templateId / 100` - Divides the templateId by 100 to shift the digits right by 2 places
2. `Math.floor(...)` - Rounds down to the nearest integer
3. `% 100` - Takes the remainder after dividing by 100, extracting the middle two digits (RR)
4. `- 1` - Subtracts 1 to get the final race ID

**For job calculation:**
1. `event.templateId % 100` - Takes the remainder after dividing by 100, extracting the last two digits (CC)
2. `- 1` - Subtracts 1 to get the final job ID

The modulo operation is crucial for extracting specific digits from the templateId. If we think of the templateId as having the format 1RRCC:
- The race calculation extracts RR and subtracts 1
- The job calculation extracts CC and subtracts 1

### Step-by-Step Analysis

1. The filename (without .json) is the templateId
2. Apply the math to determine race and job IDs
3. Match these IDs to the known race and class lists

### Examples

**Example 1: 10101.json**
- templateId = 10101
- race = Math.floor(10101 / 100) % 100 - 1 = Math.floor(101.01) % 100 - 1 = 101 % 100 - 1 = 0
- job = 10101 % 100 - 1 = 1 - 1 = 0
- Result: Race ID 0 (Male Human), Job ID 0 (Warrior)

**Example 2: 10201.json**
- templateId = 10201
- race = Math.floor(10201 / 100) % 100 - 1 = Math.floor(102.01) % 100 - 1 = 102 % 100 - 1 = 1
- job = 10201 % 100 - 1 = 1 - 1 = 0
- Result: Race ID 1 (Female Human), Job ID 0 (Warrior)

**Example 3: 10706.json**
- templateId = 10706
- race = Math.floor(10706 / 100) % 100 - 1 = Math.floor(107.06) % 100 - 1 = 107 % 100 - 1 = 6
- job = 10706 % 100 - 1 = 6 - 1 = 5
- Result: Race ID 6 (Male Castanic), Job ID 5 (Archer)

**Example 4: 11006.json**
- templateId = 11006
- race = Math.floor(11006 / 100) % 100 - 1 = Math.floor(110.06) % 100 - 1 = 110 % 100 - 1 = 9
- job = 11006 % 100 - 1 = 6 - 1 = 5
- Result: Race ID 9 (Elin), Job ID 5 (Archer)

**Example 5: 11009.json**
- templateId = 11009
- race = Math.floor(11009 / 100) % 100 - 1 = Math.floor(110.09) % 100 - 1 = 110 % 100 - 1 = 9
- job = 11009 % 100 - 1 = 9 - 1 = 8
- Result: Race ID 9 (Elin), Job ID 8 (Reaper)

**Example 6: 11106.json**
- templateId = 11106
- race = Math.floor(11106 / 100) % 100 - 1 = Math.floor(111.06) % 100 - 1 = 111 % 100 - 1 = 10
- job = 11106 % 100 - 1 = 6 - 1 = 5
- Result: Race ID 10 (Baraka), Job ID 5 (Archer)

### Formula for Filename Generation

To go from race/job IDs to filename, the formula is:
```
templateId = 10000 + (race + 1) * 100 + (job + 1)
```

For example, for an Elin (race ID 9) Archer (job ID 5):
```
templateId = 10000 + (9 + 1) * 100 + (5 + 1) = 10000 + 1000 + 6 = 11006
```

This gives us the filename `11006.json`.

## Player.js Implementation

The actual implementation of the race and job ID calculation in the `player.js` file is as follows:

```javascript
mod.hook('S_LOGIN', 12, HOOK_LAST, event => {
    this.reset()

    Object.assign(this, {
        gameId: event.gameId,
        templateId: event.templateId,
        race: Math.floor(event.templateId / 100) % 100 - 1,
        job: event.templateId % 100 - 1
    })
})
```

This code is executed when a player logs in, and it calculates the race and job IDs from the player's templateId. The calculation is exactly as described throughout this document:

- `race: Math.floor(event.templateId / 100) % 100 - 1`
- `job: event.templateId % 100 - 1`

## Conclusion

The organization of skills into separate files by race and class combinations allows the skill prediction module to efficiently load only the necessary data for the current character. This approach improves performance and reduces memory usage while ensuring accurate prediction of skill behavior.

The file naming convention (XRRCC.json) provides a clear and systematic way to identify which race and class each file belongs to, making it easy to maintain and update the skill data as needed. The formula to determine the filename for a specific race/class combination is:

```
templateId = 10000 + (race + 1) * 100 + (job + 1)
```

Where:
- race is the game's internal race ID (0-10)
- job is the game's internal class ID (0-12)

This creates a unique templateId for each race/class combination, which is then used as the filename (with .json extension).

The conversion process included:

1 general skills file (9999.json)
11 Warrior files
11 Lancer files
11 Slayer files
11 Berserker files
11 Sorcerer files
11 Archer files
11 Priest files
11 Elementalist files
1 Soulless file
2 Engineer files
Total: 81 files converted

## FIN