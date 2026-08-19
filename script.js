  const courseCatalog = [
    {
      id: "CSCI-5253",
      courseSubject:"CSCI 5253",
      title: "Datacenter Scale Computing - Methods, Systems and Techniques",
      credits: "3",
      description: "Covers the primary problem solving strategies, methods and tools needed for data-intensive programs using large collections of computers typically called 'warehouse scale' or 'data-center scale' computers. Examines methods and algorithms for processing data-intensive applications, methods for deploying and managing large collections of computers in an on-demand infrastructure and issues of large-scale computer system design. Equivalent - duplicate degree credit not granted for CSCI 4253, CSPB 4253, ECEN 5253.",
      notes: "The waitlist for this class is automatically re-sequenced to allow first priority to CS PhD students and second priority to CS masters students. Until open enrollment date, registration is restricted to Computer Science graduate students only. Non-CS students can waitlist before that date. Student may be dropped from course for non-attendance.",
      restrictions: "Restricted to graduate students only. Recommended: CSCI 5273.",
      reqCSENPHD: "Depth",
      reqCSENMS: "Bin 3, Elective",
      reqCSENMSCPS: "Bin 3, Elective, DSE Subplan, SSC Subplan",
      reqNTENMSNE: "Elective",
      reqAINTMSAI: "Elective",
      className: "course",
    },
  ]


  //copilot wrote this, does this work?
  function autocomplete(prefix) {
    return courses.filter(course =>
    course.subjectCode
      .startsWith(prefix.toUpperCase())
    );
  }
  
  function autoCompleteSearch(){
    const courseSelected=document.getElementById('suggestionSelected').value; 
    let currSearch=courseSelected;
    lookupForSubject(currSearch);
    //lookupForTitle(currSearch);
    //lookupForHours(currSearch);
    //lookupForDescription(currSearch);
    //lookupForNotes(currSearch);
    //lookupForRestrictions(currSearch);
    //lookupForDegreeReqs(currSearch);
    //lookupForSkills(currSearch);
  }


  //UPDATEME
  async function lookupForSubject(x) {
    const word = x;
    
    const resultDiv = document.getElementById('resultSubject');
    const resultMessage = document.getElementById('searchResultMessage');
    
    if (!word) {
      resultMessage.textContent = "Please enter a subject code";
      resultDiv.textContent='';
      return;
    }
    if(word.charAt(4)==='-')
      {
        let first = word.substring(0,4);
        let second= word.substring(5);
        word=first+' '+second;
      }

    let result = findCourse(word);
    if (result === undefined){
      resultMessage.textContent = "Not found";
      resultDiv.textContent='';
      return;
    }

    if (result.length>10)
    {
      result=temp.substring(0,9);
    }
    resultDiv.textContent=result;
  }

  //copilot wrote first draft of this, verify
  function findCourse(requestedSubject) {
    return courseCatalog.find(course =>
    course.subjectCode === requestedSubject
    );
  }

  //UPDATEME
  function TopicsSearch() {
    const courseSelected=document.getElementById('topicsCourseSelected').value; 
    const termSelected = document.getElementById('topicsTermDisplayed').value; 
    let topicsSelected = document.getElementById('topicsDisplayed').value;
    let section = topicsSelected.substring(0,4);
    let currSearch=courseSelected+'-'+termSelected+'-'+section;
    lookupForSubject(currSearch);
    //lookupForDegreeReqs(currSearch);
    //lookupForDescription(currSearch);
    //lookupForHours(currSearch);
    //lookupForNotes(currSearch);
    //lookupForRestrictions(currSearch);
    //lookupForTitle(currSearch);
    //lookupForSkills(currSearch);
  }

  function showHide() {
    const visibleNav = document.getElementById("mySidebar");
    const buttonNav = document.getElementById("openSidebar");
    

    if (visibleNav.style.width === '20%' || visibleNav.style.minWidth === '200px') {
      visibleNav.className="fade-out";
      visibleNav.style.width="0%";
      visibleNav.style.minWidth="0px";
    }
    else {
      visibleNav.className="fade-in";
      visibleNav.style.width="20%";
      visibleNav.style.minWidth="200px";
    }
  
    var accordionR = document.getElementsByClassName("accordion");
    var i;
    var panel = document.getElementsByClassName("panel");
    for (i = 0; i < accordionR.length; i++) {
      accordionR[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var currPanel=this.nextElementSibling;
        currPanel.classList.toggle("show");
      });
    }
  }

  function changeMenu(x) {
    x.classList.toggle("change");
    x.classList.toggle("opened");
  }

  function changeHelpButton(x){
    x.classList.toggle("opened");
  }

  function ShowHideMessage(x,y){
    const messageToDisplay=x;
    const courseSearchMessageHidden=messageToDisplay.style.width ==="0%";

    if (courseSearchMessageHidden === true)
    { 
      messageToDisplay.className="fade-in-messageDisplay";
      messageToDisplay.style.width=y;
      messageToDisplay.style.opacity="1.0";
      messageToDisplay.style.paddingLeft="0.5%";
      messageToDisplay.style.paddingTop="0%";
      messageToDisplay.style.paddingRight="0.5%";
      messageToDisplay.style.paddingBottom="0.5%";
      messageToDisplay.style.display="block";
    }
    else {
      messageToDisplay.className="fade-out-messageDisplay";
      messageToDisplay.style.width="0%";
      messageToDisplay.style.opacity="0.0";
      messageToDisplay.style.paddingLeft="0%";
      messageToDisplay.style.paddingTop="0%";
      messageToDisplay.style.paddingRight="0%";
      messageToDisplay.style.paddingBottom="0%";
      messageToDisplay.style.display="none";
    }    
  }

  function populateTopicTerms(){
    let courseSelected=document.getElementById('topicsCourseSelected').value; //this gets the course  
    var topicsTermDisplayed=document.getElementById('topicsTermDisplayed');
    let y = topicsTermDisplayed.options.length;

    if (y>0){
      while (y>0){
        topicsTermDisplayed.remove(0);
        y = topicsTermDisplayed.options.length;
      }
    } 
    let blankTerm=document.createElement("option");
    blankTerm.text=" ";
    blankTerm.value="blank";
    topicsTermDisplayed.appendChild(blankTerm);


    let topicsSectionsListed = document.getElementById('topicsDisplayed');
    let x = topicsSectionsListed.options.length;
    if (x>0){
      while (x>0){
        topicsSectionsListed.remove(0);
        x=topicsSectionsListed.options.length;
      }
    }

    let blankSection=document.createElement("option");
    blankSection.text=" ";
    blankSection.value="blank";
    topicsSectionsListed.appendChild(blankSection);

    lookupforTopicTerm(courseSelected);
  }

  //dynamically updates topics sections when the user selects a topic course and then picks a semester
  function populateTopics(){
    let courseSelected=document.getElementById('topicsCourseSelected').value;

    let topicsSectionsListed = document.getElementById('topicsDisplayed');
    let x = topicsSectionsListed.options.length;
    if (x>0){
      while (x>0){
        topicsSectionsListed.remove(0);
        x=topicsSectionsListed.options.length;
      }
    }

    let blankSection=document.createElement("option");
    blankSection.text=" ";
    blankSection.value="blank";
    topicsSectionsListed.appendChild(blankSection);

    lookupforTopics(courseSelected);
  }

  //UPDATEME 
  /*
  async function lookupforTopicTerm(x) {
    const prefix = x;

    let topicsTermDisplayed=document.getElementById('topicsTermDisplayed');
    let topicsSuggestionsDiv=document.getElementById('searchResultMessage');

    if (!prefix) {
      topicsSuggestionsDiv.textContent = 'Topic term not able to run because prefix = x is empty';
      return "";
    }
    
    topicsSuggestionsDiv.textContent = 'Searching...';
    try {
      const resp = await fetch('lookupForTopicsTerms?q=' + encodeURIComponent(prefix));
      if (!resp.ok) {
        const text = await resp.text();
        topicsSuggestionsDiv.textContent = 'Error: ' + resp.status + ' ' + resp.statusText + '\\n' + text;
        return "";
      } 

      const text = await resp.text();
      const lines = text.split('*');
      
      if (lines.length === 0) {
        topicsSuggestionsDiv.textContent = 'No suggestions for “' + prefix + '”.';
        return "";
      }

      let myArray =lines;
      let dictTerms = new Map();
      let listSemester = [];
      if (myArray.length>0){
        for (let i=0; i< myArray.length;i++)
        { 
          if (myArray[i].includes('[')===true){
            let semester_code = myArray[i].substring(10,14);
            if (listSemester.includes(semester_code)=== false){
                listSemester.push(semester_code);
            }          
          }
        }

        //sort the list 
        for (let j=0;j<listSemester.length;j++)
        {
          let temp=Number(listSemester[j]);
          if ((j+1) < listSemester.length){ //don't go beyond the end
            if (temp < Number(listSemester[j+1])){ //if curr value is less, put it to the end
            }
          }
        }

        let legible_semester = "";
        let year="";
        let term="";
        for (let i=0;i<listSemester.length;i++){
          currTerm=listSemester[i];        
          if (currTerm.substring(3)==="1"){
            term="Spring";
          }
          else if (currTerm.substring(3)==="4"){
            term="Summer";
          }
          else if (currTerm.substring(3)==="7"){
            term="Fall";
          }
          year="20"+currTerm.substring(1,3);
          legible_semester=term+" "+year;
          
          dictTerms.set(listSemester[i], legible_semester);

          year="";
          legible_semester="";
          term="";
        }

        dictTerms.forEach((value, key) =>{
            let newTerm=document.createElement("option");
            var new_option_text=value;  
            var new_option_value=key; 
            newTerm.text=new_option_text;
            newTerm.value=new_option_value;
            topicsTermDisplayed.appendChild(newTerm);
        });

        topicsSuggestionsDiv.textContent='';
      }
      else {
        topicsSuggestionsDiv.textContent='No topics available in the dataset';
      }
      topicsSuggestionsDiv.textContent='';
    return "";
    }
    
    catch (err) {
      topicsSuggestionsDiv.textContent = 'Topic Term Request failed: ' + err;
    }
  }
  
  /*calls the server lookup based on the course subject passed in*/
  async function lookupforTopics(x) {
    //let prefix = x;
    let q=x.trim();
    let prefix = q.substring(0,q.length);
    let topicsSuggestionsDiv=document.getElementById('searchResultMessage');
    let topicsDisplayed=document.getElementById('topicsDisplayed'); //dropdown #1 - special topics list that we will update
    
    if (!prefix) {
      topicsSuggestionsDiv.textContent = 'Topic course or section not selected.';
      return "";
    }

    topicsSuggestionsDiv.textContent = 'Searching...';

    try {
      const resp = await fetch('lookupForTopicsTerms?q=' + encodeURIComponent(prefix)); //this pulls a dictionary of results
      if (!resp.ok) {
        const text = await resp.text();
        topicsSuggestionsDiv.textContent = 'Error: ' + resp.status + ' ' + resp.statusText + '\\n' + text;
        return "";
      } 
      
      const text = await resp.text();
      const lines = text.split('*');
      
      if (lines.length === 0) {
        topicsSuggestionsDiv.textContent = 'No suggestions for “' + prefix + '”.';
        return "";
      }
      let myArray = lines; //formerly lines[0].split(prefix);
      const topicsList= new Object();
      
      let termSelected=document.getElementById('topicsTermDisplayed').value; //dropdown #2's value

      //now we dynamically create a list of possible topics options based on course and semester
      if (myArray.length>0) { //if any suggestions are there...
        for (let i = 0;i<myArray.length;i++){
          if ((myArray[i].charAt(19) === '[') === true){ 
            let start=20; 
            let end=myArray[i].length-1;
            let topic_name = myArray[i].substring(start,end); 
            let section = myArray[i].substring(15,18);
            let semester=myArray[i].substring(10,14); //issue was here, was doing 10,13 but in JS that doesn't include end index
            if (semester === termSelected){ //not working
              topicsList[section]='('+section+') '+topic_name;//+semester; //remove +semester once debugging done
            }
          }
        }
      }

      var x = topicsDisplayed.options.length;
        if (x > 0){
          while (x>0){
            topicsDisplayed.remove(0);
            x = topicsDisplayed.options.length;
          }
        }
      
      if (topicsCourseSelected.value != 'blank') {
        for (const key in topicsList) {
          let newTopic=document.createElement("option");
          var new_option_text=topicsList[key];     
          var new_option_value=key;  
          newTopic.text=new_option_text;
          newTopic.value=new_option_value;
          topicsDisplayed.appendChild(newTopic);
        }   

        topicsSuggestionsDiv.textContent='';

        let blankSection=document.createElement("option");
        blankSection.text=" ";
        blankSection.value="blank";
        topicsDisplayed.prepend(blankSection);
      }

      else {
        topicsSuggestionsDiv.textContent='';
      }
      return "";
    } catch (err) {
      topicsSuggestionsDiv.textContent = 'Topic section list Request failed: ' + err;
    }
  }



  async function lookupForDescription(x) {
    const word = x;
    //const word = x.value.trim();
    const resultDiv = document.getElementById('resultDescription');
    const resultMessage = document.getElementById('searchResultMessage');

    if (!word) {
      resultDiv.textContent='';
      return;
    }
    resultDiv.textContent = ' ';
    resultMessage.textcontent= 'Checking...';
    try {
      const resp = await fetch('lookupForDescription?q=' + encodeURIComponent(word)); //removed first forward slash from '/lookup?q=' per Prof. Guinn 11.28.2025
      if (!resp.ok) {
        const text = await resp.text();
        return;
      }
      const text = await resp.text();
      if (text.startsWith('FOUND ')) {
        const w = text.substring('FOUND '.length);
        //resultDiv.textContent =w;
      } else if (text.startsWith('NOT_FOUND ')) {
        const w = text.substring('NOT_FOUND '.length);
        //resultMessage.textContent='' + w + '"' + ' was not found.';
        resultMessage.textcontent='No results found';
      }
        else {
        resultDiv.textContent = text;
      }
    }
    catch (err) {
    }
  }

  async function lookupForNotes(x) {
    const word = x;
    //const word = x.value.trim();
    const resultDiv = document.getElementById('resultNotes');
    const resultMessage = document.getElementById('searchResultMessage');

    if (!word) {
      resultDiv.textContent='';
      return;
    }
    resultDiv.textContent = ' ';
    resultMessage.textcontent= 'Checking...';
    try {
      const resp = await fetch('lookupForNotes?q=' + encodeURIComponent(word)); //removed first forward slash from '/lookup?q=' per Prof. Guinn 11.28.2025
      if (!resp.ok) {
        const text = await resp.text();
        return;
      }
      const text = await resp.text();
      if (text.startsWith('FOUND ')) {
        const w = text.substring('FOUND '.length);
        //resultDiv.textContent =w;
      } else if (text.startsWith('NOT_FOUND ')) {
        const w = text.substring('NOT_FOUND '.length);
        //resultMessage.textContent='' + w + '"' + ' was not found.';
        resultMessage.textcontent='No results found';
      }
        else {
        resultDiv.textContent = text;
      }
    }
    catch (err) {
    }
  }

  async function lookupForRestrictions(x) {
    const word = x;
    //const word = x.value.trim();
    const resultDiv = document.getElementById('resultRestrictions');
    const resultMessage = document.getElementById('searchResultMessage');

  }

  async function lookupForHours(x) {
    const word = x;
    //const word = x.value.trim();
    const resultDiv = document.getElementById('resultHours');
    const resultMessage = document.getElementById('searchResultMessage');

    if (!word) {
      resultDiv.textContent='';
      return;
    }
    resultDiv.textContent= ' ';
    resultMessage.textcontent= 'Checking...';
  }

  async function lookupForSkills(x) {
  }

  async function lookupForDegreeReqs(x) {
    const word = x;
    //const word = x.value.trim();
    const resultDiv = document.getElementById('resultReqs');
    const resultMessage = document.getElementById('searchResultMessage');

    if (!word) {
      resultDiv.textContent='';
      return;
    }
    resultDiv.textContent= ' ';
    resultMessage.textcontent= 'Checking...';

  }
  async function autocomplete() {
    const prefix = document.getElementById('prefixInput').value.trim();
    //const resultsCounter=document.getElementById('counter');
    const resultsCounter=document.getElementById('searchResultMessage');

    
    if (!prefix) {
      resultsCounter.textContent = 'Please enter the initial character(s) of a course subject code.';
      return "";
    }
    resultsCounter.textContent = 'Searching...';
    try {
      const resp = await fetch('autocomplete?q=' + encodeURIComponent(prefix));
      if (!resp.ok) {
        const text = await resp.text();
        resultsCounter.textContent = 'Error: ' + resp.status + ' ' + resp.statusText + '\\n' + text;
        return "";
      }
      const text = await resp.text();      
      const lines = text.split('*');

      if (lines.length === 0) {
        resultsCounter.textContent = 'No suggestions for “' + prefix + '”.';
        return "";
      }
      
      let suggestionDisplayed=document.getElementById('suggestionSelected'); /*grab the field we want to update.*/
      var x = suggestionDisplayed.options.length;
        if (x > 0){
          while (x>0){
            suggestionDisplayed.remove(0);
            x = suggestionDisplayed.options.length;
          }
        }

      let myArray=lines;     

      let dictTopics = new Map();
      for (let i=0; i< myArray.length;i++)
      {
        if (myArray[i].length > 8){            
          const currSuggestion=myArray[i].trim();     
          let subject = currSuggestion.substring(0,4) + ' '+currSuggestion.substring(5,9); //this seems to be addressing the ',' issue
          let title=currSuggestion.substring(9);
          dictTopics.set(subject,title);
        }
      }
      
      
      if (suggestionDisplayed.value != 'blank') {
        //resultsCounter.textContent=dictTopics.size;
        resultsCounter.textContent='';
        var x = suggestionDisplayed.options.length;
        if (x > 0){
          while (x>0){
            suggestionDisplayed.remove(0);
            x = suggestionDisplayed.options.length;
          }
        }
      }
      
      else{
        //resultsCounter.textContent='0';
        resultsCounter.textContent='';
      }
     
      dictTopics.forEach((value, key) =>{
        let newSuggestion=document.createElement("option");
        var new_option_text=key+' '+value;     
        var new_option_value=key;  
        newSuggestion.text=new_option_text;
        newSuggestion.value=new_option_value;
        suggestionDisplayed.appendChild(newSuggestion);
      });

      return "";

    } catch (err) {
      resultsCounter.textContent = 'Request failed: ' + err;
    }
  }

  async function goLink(x){
    window.open(x,"_blank");
  }

  function openSearchTab(x,tabName){
    var i, tabContent, tablinks;
    tabContent=document.getElementsByClassName("tabContent");
    for (i=0; i<tabContent.length;i++){
      tabContent[i].style.display="none";
    }
    tablinks=document.getElementsByClassName("tablinks");
    for (i=0;i<tablinks.length;i++){
      tablinks[i].className=tablinks[i].className.replace(" active","");
    }
    document.getElementById(tabName).style.display="block";
    x.className+= " active";
  }

  //https://stackoverflow.com/questions/799981/document-ready-equivalent-without-jquery
  document.addEventListener("DOMContentLoaded", function() { 
    theTab=document.getElementById("defaultOpen");
    openSearchTab(theTab,"searchTraditionalTab");
  });
  
  document.addEventListener("DOMContentLoaded", function() { 
    menuButton=document.getElementById("menuButton");
    showHide();
    changeMenu(menuButton);
  });