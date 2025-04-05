```
/*
  passivity.json - Skill Modification Configuration

  PURPOSE:
  This file defines passive effects that modify skill behavior based on the player's
  equipment (item passives) and crests. These passives can alter various aspects of skills
  such as speed, stamina consumption, charge time, and effect scaling.

  STRUCTURE:
  The file is structured as a mapping of passive IDs to their effect configurations:
  {
    "passiveId": {
      "conditionCategory": number,  // Skill category this passive applies to
      "type": number,               // Type of modification (e.g., 77, 82, 218, 220)
      "method": number,             // Method of application (1-4)
      "value": number               // Value to apply
    },
    ...
  }

  EFFECT TYPES:
  - Type 77: Modifies effect scale
  - Type 82: Modifies stamina (method 1: set value, method 2: add value, method 3: multiply)
  - Type 218: Modifies passive speed
  - Type 220: Modifies charge speed
  - Many other types for various effects

  CODE REFERENCES:
  1. lib/core.js (line ~8):
     The file is loaded:
     ```
     passivity = require('../config/passivity'),
     ```

  2. lib/core.js (lines ~478-493):
     The runPassive function applies effects based on passive type and method:
     ```
     function runPassive(passive) {
       if(!passive || !currentSkillCategory.includes(passive.conditionCategory)) return

       switch(passive.type) {
         case 77: if(passive.method === 3) effectScale += Math.max(0, passive.value - 1); break
         case 82:
           switch(passive.method) {
             case 1: bStamina = passive.value; break
             case 2: aStamina += passive.value; break
             case 3: mStamina += passive.value - 1; break
           }
           break
         case 218: passiveSpeed += passive.value - 1; break
         case 220: chargeSpeed += passive.value - 1; break
       }
     }
     ```

  3. lib/core.js (lines ~495-497):
     Passives are applied from crests and item passives:
     ```
     if(currentSkillCategory) {
       for(let id of player.crests) runPassive(passivity[id])
       for(let id of player.itemPassives) runPassive(passivity[id])
     }
     ```

  4. lib/player.js (lines ~90-94):
     Item passives are collected from equipment:
     ```
     if(item.slot < 40 && item.passivitySets) { // Equipment
       for(let {id: passive} of item.passivitySets.find(s => s.index === item.passivitySet).passivities)
         if(passive) this.itemPassives.push(passive)
     }
     ```

  FUNCTIONALITY:
  - When a player uses a skill, the system checks if they have any crests or item passives
    that affect that skill category
  - If they do, the passive effects are applied to modify the skill's behavior
  - This allows for accurate prediction of how skills will behave with different equipment and crests
  - The modifications can affect skill speed, stamina consumption, and other properties

  NOTE:
  This file is essential for accurate skill prediction. Modifying it can significantly
  affect how skills behave in the game. Changes should be made with caution and testing.
*/
```