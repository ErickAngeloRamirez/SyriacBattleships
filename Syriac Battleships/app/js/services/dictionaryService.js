battleshipsApp.factory('dictionaryService', function () {

  var providedVerbs = [],
    randomDictionarySet = [];

  async function makeAllVerbs(filename, dictionary) {
    try {
      const response = await fetch(filename);
      const csvText = await response.text();
      const rows = csvText.trim().split('\n').map(row => row.split(','));
      
      const headers = rows.shift();  // First row is the header

      rows.forEach(row => {
          const type = row.shift();
          const stem = row.shift();
          if (!dictionary[type]) { 
              dictionary[type] = {};
          }
          dictionary[type][stem] = [];

          row.forEach((value, index) => {
              if (value === "TRUE") {
                  dictionary[type][stem].push(headers[index + 2].trim());
              }
          });
      });
    } catch (error) {
        console.error('Error fetching verbs:', error);
    }
  };

  (async function() {
      var allVerbs = {};
      await makeAllVerbs("Syriac Battleships/app/js/services/src copy/syriacVerbs.csv", allVerbs);
      console.log(allVerbs);
  })();

  // // Constant Global Variables
  // const ALL_VERBS = {};   // to be filled by the makeAllVerbs function
  // const ALL_TYPES = ["strong", "I’nun", "I’alaph", "I’yod", "II’alaph", "hollow", "geminate", 
  //                   "III’weak", "irregular"];
  // const ALL_FORMS = ["pʿal", "ethpʿel", "paʿʿel", "ethpaʿʿal", "aphʿel", "ettaphʿal"];  // TODO: add "quadraliteral"?
  // const ALL_TENSES = ["perfect", "imperfect", "imperative", "active-participle", "passive-participle", "infinitive"];
  // const ALL_PGNs = ["1CS", "1CP", "2MS", "2FS", "2MP", "2FP", "3MS", "3FS", "3MP", "3FP", "MS", "FS", "MP", "FP", ""];

  // // Regular Global Variables
  // let QUESTIONS = [];   // array to store the generated practice problems
  // let USER_SOLUTIONS = [];  // array to store user answers to QUESTIONS
  // let CORRECT_SOLUTIONS = [];   // array to store the correct answers to QUESTIONS 
  // let CORRECTIONS = [];   // array to store whether USER_SOLUTIONS are correct, or incorrect
  // let NUM_QUESTIONS = 1;    // number of problems to generate, defaults to 1
  // let FILTERS = [];     // array to store user-picked filters, specifying what problem types to generate
  // let MAX_NUM_QUESTIONS = 0; // maximum possible number of problems given FILTERS
  // let CAN_GENERATE_QUESTIONS = true; // boolean indicating whether any problems can be generated given FILTERS
  // let VERBS = {};    // array to store the usable verbs, given FILTERS
  // let TYPES = [];      // array to store usable verb types, given FILTERS
  // let TYPES_with_PROBS = [];    // similar to TYPES, but each element is also paired to a probability
  // let FORMS = [];       // array to store usable verb forms, given FILTERS
  // let FORMS_with_PROBS = [];    // similar to FORMS, but each element is also paired to a probability
  // let TENSES = [];      // array to store usable verb tenses, given FILTERS
  // let TENSES_with_PROBS = [];   // similar to TENSES, but each element is also paired to a probability
  // let PGN = ALL_PGNs;   // array to store usable number-person-gender combos

  // /**
  //  * class: Prompt
  //  * 
  //  * A Prompt object stores the information needed to generate a problem, which includes a stem, its type, form, 
  //  * tense, and number-gender-person (pgn). By default, all of a Prompt's parameters are set to null. 
  //  */
  // class Prompt {
  //   constructor() {
  //       this.stem = null;
  //       this.type = null;
  //       this.form = null;
  //       this.tense = null;
  //       this.pgn = null;
  //   }
  // }

  return {

    getParadigm: async function getParadigm(type, form, tense, stem) {
      const filename = `Syriac Battleships/app/js/services/src copy/${type}Paradigm/${stem}.csv`;
      try {
          const response = await fetch(filename);
          const csvText = await response.text();
          const rows = csvText.trim().split('\n').map(row => row.split(','));
          
          const paradigm = [];
          const header = rows.shift();
          const formsHeader = header.slice(2);

          for (const row of rows) {
              const rowTense = row.shift();
              if (rowTense !== tense) continue;

              const rowPGN = row.shift();
              for (let idx = 0; idx < formsHeader.length; idx++) {
                  if (formsHeader[idx] === form) {
                      const conjugation = row[idx + 2];
                      paradigm.push(conjugation);
                  }
              }
          }
          return paradigm;
      } catch (error) {
          console.error('Error fetching paradigm:', error);
      }
    },

      // // Label each row's conjugations using the corresponding verb forms
      // Object.keys(paradigm).forEach(rowKey => {
      //     paradigm[rowKey] = formsHeader.reduce((acc, form, idx) => {
      //         acc[form] = paradigm[rowKey][idx];
      //         return acc;
      //     }, {});

    getVerbs: async function getVerbs(tense, form, type, number) {
        var verbsToReturn = [];
        providedVerbs = [];
  
        const stems = Object.keys(allVerbs[type]).filter(stem => {
            return allVerbs[type][stem].includes(form);
        });
  
        randomDictionarySet = getRandomSubarray(stems, number);
  
        for (const stem of randomDictionarySet) {
            const paradigm = await getParadigm(type, form, tense, stem);
            verbsToReturn.push({ verb: stem, verbs: paradigm });
            providedVerbs.push(paradigm);
        }
  
        return verbsToReturn;
    },

    getProvidedVerbs: function () {
      return providedVerbs;
    },
    getSwitchedVerbs: async function getVerbs (tense, form, type, number) {
      var verbsToReturn = [];
        providedVerbs = [];
  
        const stems = Object.keys(allVerbs[type]).filter(stem => {
            return allVerbs[type][stem].includes(form);
        });
  
        randomDictionarySet = getRandomSubarray(stems, number);
  
        for (const stem of randomDictionarySet) {
            const paradigm = await getParadigm(type, form, tense, stem);
            verbsToReturn.push({ verb: stem, verbs: paradigm });
            providedVerbs.push(paradigm);
        }
  
        return verbsToReturn;
    },
    getVerbData: async function (verb, tense, form, type) {
      var returnVerbData = {};
      returnVerbData.conjugations = await getParadigm(type, form, tense, verb);
      return returnVerbData;
    }
  };

  function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
  }
});