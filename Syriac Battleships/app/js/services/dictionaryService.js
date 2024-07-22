battleshipsApp.factory('dictionaryService', function () {

  var providedVerbs = [],
    randomDictionarySet = [],
    allVerbs = {};

  function makeAllVerbs(filename, dictionary) {
      const fs = require('fs');
      fs.readFileSync(filename, 'utf8', (err, dat) => {
        if(err) {
          console.error("Error while opening file", err);
          return;
        }
        let lines = [];
        lines = dat.split('\n').filter(line => line.trim() !== ''); // String(dat)
        // Skip the header line
        lines.slice(1).forEach(line => {
          let [type, stem, pʿal, ethpʿel, paʿʿel, ethpaʿʿal, aphʿel, ettaphʿal] = line.split(',');
          // Check if the verb form is TRUE
          let verbForms = [];
          if (pʿal == 'TRUE') {
            verbForms.push('pʿal');
          }
          if (ethpʿel == 'TRUE') {
            verbForms.push('ethpʿel');
          }
          if (paʿʿel == 'TRUE') {
            verbForms.push('paʿʿel');
          }
          if (ethpaʿʿal == 'TRUE') {
            verbForms.push('ethpaʿʿal');
          }
          if (aphʿel == 'TRUE') {
            verbForms.push('aphʿel');
          }
          if (ettaphʿal == 'TRUE') {
            verbForms.push('ettaphʿal');
          }
          // Initialize the type and stem entries if they don't exist
          if (!dictionary[type]) {
              dictionary[type] = {};
          }
          if (!dictionary[type][stem]) {
              dictionary[type][stem] = [];
          }
          // Populate the dictionary
          dictionary[type][stem] = verbForms;
        });
        console.log('Dictionary:', dictionary);
      });
  }
  makeAllVerbs("Syriac Battleships/app/js/services/src copy/syriacVerbs.csv", allVerbs);

  return {

    getParadigm: function getParadigm(type, form, tense, stem, conjugations) {
      const fs = require('fs');
      const filename = `Syriac Battleships/app/js/services/src copy/${type}Paradigm/${stem}.csv`;
      // const filename = `Syriac Battleships/app/js/services/src copy/strongParadigm/${stem}.csv`;
      fs.readFileSync(filename, 'utf8', (err, dat) => {
        if(err)
          console.error("Error while opening file");
        let lines = [];
        lines = dat.split('\n');
        const headers = lines[0].split(',');
        const formIndex = headers.indexOf(form);
        // const conjugations = {};
        lines.slice(1).forEach(line => {
          const parts = line.split(',');
          const fileTense = parts[0];
          const filePGN = parts[1];
          if (fileTense === tense) {
            conjugations[filePGN] = parts[formIndex];
          }
        });
      });
    },

      // // Label each row's conjugations using the corresponding verb forms
      // Object.keys(paradigm).forEach(rowKey => {
      //     paradigm[rowKey] = formsHeader.reduce((acc, form, idx) => {
      //         acc[form] = paradigm[rowKey][idx];
      //         return acc;
      //     }, {});

    getVerbs: function getVerbs(tense, form, type, number) {
        var verbsToReturn = [];
        providedVerbs = [];
  
        const stems = Object.keys(allVerbs[type]).filter(stem => {
            return allVerbs[type][stem].includes(form);
        });
  
        randomDictionarySet = getRandomSubarray(stems, number);
  
        for (const stem of randomDictionarySet) {
            let conjugations = {};
            getParadigm(type, form, tense, stem, conjugations);
            verbsToReturn.push({ verb: stem, verbs: Object.values(conjugations) });
            providedVerbs.push(Object.values(conjugations));
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
          let conjugations = {};
            getParadigm(type, form, tense, stem, conjugations);
            verbsToReturn.push({ verb: stem, verbs: Object.values(conjugations) });
            providedVerbs.push(Object.values(conjugations));
        }
  
        return verbsToReturn;
    },
    getVerbData: function (verb, tense, form, type) {
      var returnVerbData = {};
      returnVerbData.conjugations = {};
      getParadigm(type, form, tense, verb, returnVerbData.conjugations);
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