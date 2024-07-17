battleshipsApp.factory('dictionaryService', function () {
  var verbDictionary = [
    {
      verb: 'ser',
      present: ['soy', 'eres', 'es', 'somos', 'sois', 'son'],
      imperfect: ['yo era', 'eras', 'era', 'éramos', 'érais', 'eran'],
      preterite: ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron']
    },
    {
      verb: 'estar',
      present: ['estoy', 'estás', 'está', 'estamos', 'estáis', 'estan'],
      imperfect: ['yo estaba', 'estabas', 'estaba', 'estábamos', 'estabais', 'estaban'],
      preterite: ['estuve', 'estuviste', 'estuvo', 'estuvimos', 'estuvisteis', 'estuvieron']
    },
    {
      verb: 'cantar',
      present: ['canto', 'cantas', 'canta', 'cantamos', 'cantáis', 'cantan'],
      imperfect: ['yo cantaba', 'cantabas', 'cantaba', 'cantábamos', 'cantabais', 'cantaban'],
      preterite: ['canté', 'cantaste', 'cantó', 'cantamos', 'cantasteis', 'cantaron']
    },
    {
      verb: 'leer',
      present: ['leo', 'lees', 'lee', 'leemos', 'leéis', 'leen'],
      imperfect: ['yo leía', 'leías', 'leía', 'leíamos', 'leíais', 'leían'],
      preterite: ['leí', 'leiste', 'leyó', 'leímos', 'leisteis', 'leyeron']
    },
    {
      verb: 'poder',
      present: ['puedo', 'puedes', 'puede', 'podemos', 'podéis', 'pueden'],
      imperfect: ['yo podía', 'podías', 'podía', 'podíamos', 'podíais', 'podían'],
      preterite: ['pude', 'pudiste', 'pudo', 'pudimos', 'pudisteis', 'pudieron']
    },
    {
      verb: 'nadar',
      present: ['nado', 'nadas', 'nada', 'nadamos', 'nadáis', 'nadan'],
      imperfect: ['yo nadaba', 'nadabas', 'nadaba', 'nadábamos', 'nadabais', 'nadaban'],
      preterite: ['nadé', 'nadaste', 'nadó', 'nadamos', 'nadasteis', 'nadaron']
    },
    {
      verb: 'estudiar',
      present: ['estudio', 'estudias', 'estudia', 'estudiamos', 'estudiáis', 'estudian'],
      imperfect: ['yo estudiaba', 'estudiabas', 'estudiaba', 'estudiábamos', 'estudiabais', 'estudiaban'],
      preterite: ['estudié', 'estudiaste', 'estudió', 'estudiamos', 'estudiasteis', 'estudiaron']
    },
    {
      verb: 'lavar',
      present: ['lavo', 'lavas', 'lava', 'lavamos', 'laváis', 'lavan'],
      imperfect: ['yo lavaba', 'lavabas', 'lavaba', 'lavábamos', 'lavabais', 'lavaban'],
      preterite: ['lavé', 'lavaste', 'lavó', 'lavamos', 'lavasteis', 'lavaron']
    },
    {
      verb: 'limpiar',
      present: ['limpio', 'limpias', 'limpia', 'limpiamos', 'limpiáis', 'limpian'],
      imperfect: ['yo limpiaba', 'limpiabas', 'limpiaba', 'limpiábamos', 'limpiabais', 'limpiaban'],
      preterite: ['limpié', 'limpiaste', 'limpió', 'limpiamos', 'limpiasteis', 'limpiaron']
    },
    {
      verb: 'jugar',
      present: ['juego', 'juegas', 'juega', 'jugamos', 'jugáis', 'juegan'],
      imperfect: ['yo jugaba', 'jugabas', 'jugaba', 'jugábamos', 'jugabais', 'jugaban'],
      preterite: ['jugué', 'jugaste', 'jugó', 'jugamos', 'jugasteis', 'jugaron']
    },
    {
      verb: 'tocar',
      present: ['toco', 'tocas', 'toca', 'tocamos', 'tocáis', 'tocan'],
      imperfect: ['yo tocaba', 'tocabas', 'tocaba', 'tocábamos', 'tocabais', 'tocaban'],
      preterite: ['toqué', 'tocaste', 'tocó', 'tocamos', 'tocasteis', 'tocaron']
    },
    {
      verb: 'trabajar',
      present: ['trabajo', 'trabajas', 'trabaja', 'trabajamos', 'trabajáis', 'trabajan'],
      imperfect: ['yo trabajaba', 'trabajabas', 'trabajaba', 'trabajábamos', 'trabajabais', 'trabajaban'],
      preterite: ['trabajé', 'trabajaste', 'trabajó', 'trabajamos', 'trabajasteis', 'trabajaron']
    },
    {
      verb: 'tratar',
      meaning: 'to try',
      present: ['trato', 'tratas', 'trata', 'tratamos', 'tratáis', 'tratan'],
      imperfect: ['trataba', 'tratabas', 'trataba', 'tratábamos', 'tratabais', 'trataban'],
      preterite: ['traté', 'trataste', 'trató', 'tratamos', 'tratasteis', 'trataron']
    },
    {
      verb: 'caer',
      meaning: 'to fall',
      present: ['caigo', 'caes', 'cae', 'caemos', 'caéis', 'caen'],
      imperfect: ['caía', 'caías', 'caía', 'caíamos', 'caíais', 'caían'],
      preterite: ['caí', 'caíste', 'cayó', 'caímos', 'caísteis', 'cayeron']
    },
    {
      verb: 'pasear',
      meaning: 'to go for a walk/ride/drive',
      present: ['paseo', 'paseas', 'pasea', 'paseamos', 'paseáis', 'pasean'],
      imperfect: ['paseaba', 'paseabas', 'paseaba', 'paseábamos', 'paseabais', 'paseaban'],
      preterite: ['paseé', 'paseaste', 'paseó', 'paseamos', 'paseasteis', 'pasearon']
    },
    {
      verb: 'pasar',
      meaning: 'to pass',
      present: ['paso', 'pasas', 'pasa', 'pasamos', 'pasáis', 'pasan'],
      imperfect: ['pasaba', 'pasabas', 'pasaba', 'pasábamos', 'pasabais', 'pasaban'],
      preterite: ['pasé', 'pasaste', 'pasó', 'pasamos', 'pasasteis', 'pasaron']
    },
    {
      verb: 'ver',
      meaning: 'to see, to look at, to watch',
      present: ['veo', 'ves', 've', 'vemos', 'veis', 'ven'],
      imperfect: ['veía', 'veías', 'veía', 'veíamos', 'veíais', 'veían'],
      preterite: ['vi', 'viste', 'vio', 'vimos', 'visteis', 'vieron']
    }
  ];

  var providedVerbs = [],
    randomDictionarySet = [];

  makeAllVerbs: async function makeAllVerbs(filename, dictionary) {
      const response = await fetch(filename);
      const csvText = await response.text();
      const rows = csvText.trim().split('\n').map(row => row.split(','));
      
      const headers = rows.shift();  // First row is the header

      // Fill dictionary with rows using the 3D format 
      rows.forEach(row => {
          const type = row.shift();
          const stem = row.shift();
          if (!dictionary[type]) { 
              dictionary[type] = {};
          }
          // Add (stem, dict of valid forms) pairs to dictionary based on the stem's type
          dictionary[type][stem] = [];

          // Add valid forms for the stem based on the remaining information in row
          row.forEach((value, index) => {
              if (value === "TRUE") {
                  dictionary[type][stem].push(headers[index + 2].trim());  // +2 to account for shifted type and stem
              }
          });
      });
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
      const filename = `Syriac Battleships/app/js/services/src copy/${type}Paradigm/${stem}.csv`;  // csv paradigm chart for provided verb
      const response = await fetch(filename);
      const csvText = await response.text();
      const rows = csvText.trim().split('\n').map(row => row.split(','));
      
      const paradigm = [];

      // Format each row as an array of (form, conjugation) pairs given a tense and pgn
      const header = rows.shift();  // First row is the header
      const formsHeader = header.slice(2);  // an array of the verb forms in the chart
      rows.forEach(row => {
          const rowTense = row.shift();  // get current row's tense parameter
          if (rowTense != tense) {
            return;
          }
          const rowPGN = row.shift();    // get current row's PGN parameter
          formsHeader.forEach((currForm, idx) => {
            if (currForm != form) {
              return;
            }
            const conjugation = row[idx + 2];
            // paradigm[rowPGN] = conjugation;
            paradigm.push(conjugation);
            // include alt conjugations
          });

      // // Label each row's conjugations using the corresponding verb forms
      // Object.keys(paradigm).forEach(rowKey => {
      //     paradigm[rowKey] = formsHeader.reduce((acc, form, idx) => {
      //         acc[form] = paradigm[rowKey][idx];
      //         return acc;
      //     }, {});
      });
      return paradigm;
    },

    getVerbs: function getVerbs (tense, form, type, number) {
      var verbsToReturn = [];
      providedVerbs = [];
      // var slicedVerbsFromDiciionary = verbDictionary.slice(-number);
      // randomDictionarySet = getRandomSubarray(verbDictionary, number);

      const stems = Object.keys(allVerbs[type]).filter(stem => {
        return allVerbs[type][stem].includes(form);
      });

      // make sure enough stems !!!

      // const shuffled = stems.sort(() => 0.5 - Math.random());
      // randomDictionarySet = shuffled.slice(0, number);
      randomDictionarySet = getRandomSubarray(stems, number);

      angular.forEach(randomDictionarySet, function (stem) {
        paradigm = getParadigm(type, form, tense, stem);
        verbsToReturn.push({ verb: stem, verbs: paradigm })
        providedVerbs.push.apply(providedVerbs, paradigm);
      });
      // todo: getRandom 12 verbs
      return verbsToReturn;
    },
    getProvidedVerbs: function () {
      return providedVerbs;
    },
    getSwitchedVerbs: function getVerbs (tense, form, type, number) {
      var verbsToReturn = [];
      providedVerbs = [];
      // var slicedVerbsFromDiciionary = verbDictionary.slice(-number);
      // randomDictionarySet = getRandomSubarray(verbDictionary, number);

      const stems = Object.keys(allVerbs[type]).filter(stem => {
        return allVerbs[type][stem].includes(form);
      });

      // make sure enough stems !!!

      // const shuffled = stems.sort(() => 0.5 - Math.random());
      // randomDictionarySet = shuffled.slice(0, number);
      randomDictionarySet = getRandomSubarray(stems, number);

      angular.forEach(randomDictionarySet, function (stem) {
        paradigm = getParadigm(type, form, tense, stem);
        verbsToReturn.push({ verb: stem, verbs: paradigm })
        providedVerbs.push.apply(providedVerbs, paradigm);
      });
      // todo: getRandom 12 verbs
      return verbsToReturn;
    },
    getVerbData: function (verb, tense, form, type) {
      var returnVerbData = {};

      // angular.forEach(verbDictionary, function (entry) {
      //   if (entry.verb === verb) {
      //     // returnVerbData.meaning = entry.meaning;
      returnVerbData.conjugations = getParadigm(type, form, tense, verb);
      //   }
      // });
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