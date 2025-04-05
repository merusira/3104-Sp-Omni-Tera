```json
/*
  silence.json - Abnormality Silencing Configuration

  PURPOSE:
  This file defines a list of abnormality IDs that should prevent skill usage when active.
  When a player has any of these abnormalities, they will be unable to use skills.

  USAGE:
  - Format: An array of abnormality IDs (numbers)
  - Example: [4000, 4001, 4002] would prevent skill usage when any of these abnormalities are active
  - Currently empty, but can be populated as needed

  CODE REFERENCES:
  1. lib/core.js (line ~9):
     The file is loaded and converted to a map for fast lookups:
     ```
     silence = require('../config/silence').reduce((map, value) => {
         map[value] = true
         return map
     }, {})
     ```

  2. lib/core.js (line ~293):
     Used in skill prediction to prevent skills when silenced:
     ```
     if(!alive || abnormality.inMap(silence)) {
         sendCannotStartSkill(event.skill)
         return false
     }
     ```

  3. lib/abnormalities.js (line ~64):
     The inMap function checks if any active abnormalities are in the silence map:
     ```
     inMap(map) {
         for(let id in this.myAbnormals)
             if(map[id]) return true
         return false
     }
     ```

  FUNCTIONALITY:
  - When a player attempts to use a skill, the system checks if they have any abnormalities
    that are listed in this file
  - If they do, the skill is prevented from being used
  - This allows for creating "silence" effects where certain abnormalities prevent skill usage
  - Common use cases include stuns, fears, silences, or other crowd control effects

  NOTE:
  Adding abnormality IDs to this file will affect gameplay by preventing skill usage
  when those abnormalities are active. Use with caution and testing.
*/
[]
```