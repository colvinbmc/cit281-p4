const { data } = require("./p4-data")

function getQuestions() {
    const result = [];
    for (i = 0; i < data.length; ++i) {
        result.push(data[i]['question']);
    }
    return result;
}

function getAnswers() {
    const result = [];
    for (i = 0; i < data.length; ++i) {
        result.push(data[i]['answer']);
    }
    return result;
}

function getQuestionsAnswers() {
    let result = Object.assign(data);
    return result;
}

function getQuestion(number = "") {
    let objectToReturn = {
        error: '',
        question: '',
        number: ''
    };
    if (Number.isInteger(number) == false) {
        objectToReturn.error = 'Question number must be an integer';
    }
    else if (number < 1) {
        objectToReturn.error = 'Question number must be >= 1';
    }
    else if (number > data.length) {
        objectToReturn.error = `Question number must be less than or equal to the number of questions (${data.length})`;
    }
    else{
        objectToReturn.question = `${data[number - 1].question}`;
        objectToReturn.Number = number;
    };
    return objectToReturn;
}

function getAnswer(number = "") {
    let objectToReturn = {
        error: '',
        answer: '',
        number: ''
    };
    if (Number.isInteger(number) == false) {
        objectToReturn.error = 'Answer number must be an integer';
    }
    else if (number < 1) {
        objectToReturn.error = 'Answer number must be >= 1';
    }
    else if (number > data.length) {
        objectToReturn.error = `Answer number must be less than the number of questions (${data.length})`;
    }
    else{
        objectToReturn.answer = `${data[number - 1].answer}`;
        objectToReturn.Number = number;
    }
    return objectToReturn;
};

function getQuestionAnswer(number = "") {
    let objectToReturn = {
        error: '',
        answer: '',
        question: '',
        number: ''
    };
    if (Number.isInteger(number) == false) {
        objectToReturn.error = 'Question number must be an integer';
    }
    else if (number < 1) {
        objectToReturn.error = 'Question number must be >= 1';
    }
    else if (number > data.length) {
        objectToReturn.error = `Question number must be less than the number of questions (${data.length})`;
    }
    else{
        objectToReturn.answer = `${data[number - 1].answer}`;
        objectToReturn.question = `${data[number - 1].question}`;
        objectToReturn.Number = number;
    }
    return objectToReturn;
};

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit



// getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }

module.exports = {
getQuestions,
getAnswers,
getQuestionsAnswers,
getQuestion,
getAnswer,
getQuestionAnswer
};