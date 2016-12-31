myApp.controller("dashboardController", function($scope, questionFactory, $cookies, $sessionStorage, userFactory){

  // getting all questions for dashboard page
  questionFactory.getQuestions(function(data){
    $scope.all_questions = data;
  })

  $scope.name = $cookies._name;
  $scope.email = $cookies._email;

  $scope.logout = function() {
    userFactory.logout()
  }

  $scope.criteriaMatch = function(criteria) {
    return function(item) {
      var stopWords = new Array("blind", "visually", "visual", "impaired", "impairment", "challenged", "challenge", "people", "person", "persons", "disability", "disabilities", "disabled", "a", "about", "above", "above", "across", "after", "afterwards", "again", "against", "all", "almost", "alone", "along", "already", "also","although","always","am","among", "amongst", "amoungst", "amount", "an", "and", "another", "any","anyhow","anyone","anything","anyway", "anywhere", "are", "around", "as", "at", "back","be","became", "because","become","becomes", "becoming", "been", "before", "beforehand", "behind", "being", "below", "beside", "besides", "between", "beyond", "bill", "both", "bottom","but", "by", "call", "can", "cannot", "cant", "co", "con", "could", "couldnt", "cry", "de", "describe", "detail", "do", "done", "down", "due", "during", "each", "eg", "eight", "either", "eleven","else", "elsewhere", "empty", "enough", "etc", "even", "ever", "every", "everyone", "everything", "everywhere", "except", "few", "fifteen", "fify", "fill", "find", "fire", "first", "five", "for", "former", "formerly", "forty", "found", "four", "from", "front", "full", "further", "get", "give", "go", "had", "has", "hasnt", "have", "he", "hence", "her", "here", "hereafter", "hereby", "herein", "hereupon", "hers", "herself", "him", "himself", "his", "how", "however", "hundred", "ie", "if", "in", "inc", "indeed", "interest", "into", "is", "it", "its", "itself", "keep", "last", "latter", "latterly", "least", "less", "ltd", "made", "many", "may", "me", "meanwhile", "might", "mill", "mine", "more", "moreover", "most", "mostly", "move", "much", "must", "my", "myself", "name", "namely", "neither", "never", "nevertheless", "next", "nine", "no", "nobody", "none", "noone", "nor", "not", "nothing", "now", "nowhere", "of", "off", "often", "on", "once", "one", "only", "onto", "or", "other", "others", "otherwise", "our", "ours", "ourselves", "out", "over", "own","part", "per", "perhaps", "please", "put", "rather", "re", "same", "see", "seem", "seemed", "seeming", "seems", "serious", "several", "she", "should", "show", "side", "since", "sincere", "six", "sixty", "so", "some", "somehow", "someone", "something", "sometime", "sometimes", "somewhere", "still", "such", "system", "take", "ten", "than", "that", "the", "their", "them", "themselves", "then", "thence", "there", "thereafter", "thereby", "therefore", "therein", "thereupon", "these", "they", "thickv", "thin", "third", "this", "those", "though", "three", "through", "throughout", "thru", "thus", "to", "together", "too", "top", "toward", "towards", "twelve", "twenty", "two", "un", "under", "until", "up", "upon", "us", "very", "via", "was", "we", "well", "were", "what", "whatever", "when", "whence", "whenever", "where", "whereafter", "whereas", "whereby", "wherein", "whereupon", "wherever", "whether", "which", "while", "whither", "who", "whoever", "whole", "whom", "whose", "why", "will", "with", "within", "without", "would", "yet", "you", "your", "yours", "yourself", "yourselves", "the","a","about","above","after","again","against","all","am","an","and","any","are","aren't","as","at","be","because","been","before","being","below","between","both","but","by","can't","cannot","could","couldn't","did","didn't","do","does","doesn't","doing","don't","down","during","each","few","for","from","further","had","hadn't","has","hasn't","have","haven't","having","he","he'd","he'll","he's","her","here","here's","hers","herself","him","himself","his","how","how's","i","i'd","i'll","i'm","i've","if","in","into","is","isn't","it","it's","its","itself","let's","me","more","most","mustn't","my","myself","no","nor","not","of","off","on","once","only","or","other","ought","our","ours ourselves","out","over","own","same","shan't","she","she'd","she'll","she's","should","shouldn't","so","some","such","than","that","that's","the","their","theirs","them","themselves","then","there","there's","these","they","they'd","they'll","they're","they've","this","those","through","to","too","under","until","up","very","was","wasn't","we","we'd","we'll","we're","we've","were","weren't","what","what's","when","when's","where","where's","which","while","who","who's","whom","why","why's","with","won't","would","wouldn't","you","you'd","you'll","you're","you've","your","yours","yourself","yourselves");
      var criteriaArray = [];
      var itemArray = [];
      var criteriaArrayTemp = criteria.split(" ");
      var itemArrayTemp = item.question.split(" ");
      var itemArrayTempSecond = [];
      var itemArrayTempThird = [];

      if (item.description) {
        itemArrayTempSecond = item.description.split(" ");
      }
      if (item.keywords) {
        itemArrayTempThird = item.keywords.split(" ");
      }

      if (criteria == "") {
        return false;
      }

      for (var i = 0; i < criteriaArrayTemp.length; i++) {
        var temp = criteriaArrayTemp[i].toLowerCase().replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g,"");
        if (stopWords.indexOf(temp) > -1) {
          continue;
        }
        criteriaArray.push(temp);
      }

      for (var j = 0; j < itemArrayTemp.length; j++) {
        var temp = itemArrayTemp[j].toLowerCase().replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g,"");
        if (stopWords.indexOf(temp) > -1) {
          continue;
        }
        itemArray.push(temp);
      }

      for (var k = 0; k < itemArrayTempSecond.length; k++) {
        var temp = itemArrayTempSecond[k].toLowerCase().replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g,"");
        if (stopWords.indexOf(temp) > -1) {
          continue;
        }
        itemArray.push(temp);
      }

      for (var l = 0; l < itemArrayTempThird.length; l++) {
        var temp = itemArrayTempThird[l].toLowerCase().replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g,"");
        if (stopWords.indexOf(temp) > -1) {
          continue;
        }
        itemArray.push(temp);
      }

      var positive = 0;
      for (var i = 0; i < criteriaArray.length; i++) {
        if (itemArray.indexOf(criteriaArray[i]) > -1) {
          positive = positive + 1;
        }
      }

      if (positive / criteriaArray.length >= 0.5) {
        return true;
      } else {
        return false;
      }
    };
  };
})