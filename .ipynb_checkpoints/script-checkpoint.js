  //https://www.geeksforgeeks.org/javascript/how-to-insert-a-string-at-a-specific-index-in-javascript/
  //https://www.geeksforgeeks.org/html/html-clearing-the-input-field/
  //https://stackoverflow.com/questions/799981/document-ready-equivalent-without-jquery
  //https://www.geeksforgeeks.org/javascript/javascript-string-startswith-method/
  //https://www.geeksforgeeks.org/javascript/javascript-array-sort-method/
  //https://www.geeksforgeeks.org/javascript/javascript-array-splice-method/
  //https://www.geeksforgeeks.org/javascript/how-to-include-a-javascript-file-in-another-javascript-file/
  
  
  //helper function for traditional search
  //returns the course object
  function retrieveCourseObject(requestedSubject) {
    let resultMessage = document.getElementById('searchResultMessage');
    for (let i=0; i< courseCatalog.length;i++)
    {
      currCourseSubj=courseCatalog[i].courseSubject;
        if (currCourseSubj === requestedSubject)
        {
          let result=courseCatalog[i];
          resultMessage.textContent=result.courseSubject;
          return result;
        }
    }
    resultMessage.textContent="failed search";
    return;
  }
  //traditional search, validates the inputs, does a traditional search by taking in the course subject code
  async function searchBySubject(x) {
    let requestedCourse = x;
    
    const resultMessage = document.getElementById('searchResultMessage');
    let subject = document.getElementById('resultSubject');
    let title = document.getElementById('resultTitle');
    let hours = document.getElementById('resultHours');
    let description = document.getElementById('resultDescription');
    let notes = document.getElementById('resultNotes');
    let restrictions = document.getElementById('resultRestrictions');
    let requirements = document.getElementById('resultReqs');
    let skills = document.getElementById('resultSkills');


    if (!requestedCourse) {
      resultMessage.textContent = "Please enter a subject code";
      subject.textContent="";
      title.textContent="";
      hours.textContent="";
      description.textContent="";
      notes.textContent="";
      restrictions.textContent="";
      requirements.textContent="";
      skills.textContent="";
      return;
    }

    if (requestedCourse.length <8){
      resultMessage.textContent = "Not found / not available";
      subject.textContent="";
      title.textContent="";
      hours.textContent="";
      description.textContent="";
      notes.textContent="";
      restrictions.textContent="";
      requirements.textContent="";
      skills.textContent="";
      return;
    }

    //input validation
    if (requestedCourse.length === 9 && requestedCourse.charAt(4) != ' ')
    {
      temp = requestedCourse.slice(0,4)+ ' ' + requestedCourse.slice(5);
      requestedCourse = temp;
    }
    if (requestedCourse.length === 8)
    {
      temp = requestedCourse.slice(0,4) + ' ' + requestedCourse.slice(4);
      requestedCourse = temp;
    }

    //call function retrieveCourseObject(x), x is requestedCourse input post-validation
    let result = retrieveCourseObject(requestedCourse);
    
    if (result === undefined || result==="" || result.courseSubject.length === 0){
      resultMessage.textContent = "Not found / not available";
      return;
    }

    //output
    subject.textContent=result.courseSubject;
    title.textContent=result.title;
    hours.textContent=result.credits;
    description.textContent=result.description;
    notes.textContent=result.notes;
    restrictions.textContent=result.restrictions;
    requirements.textContent= "CSEN-PhD: " + result.reqCSENPHD+"\n" + "CSEN-MS: "+result.reqCSENMS+"\n" + "CSEN-MSCPS: "+
    result.reqCSENMSCPS+"\n" + "NTEN-MSNE: "+result.reqNTENMSNE+"\n" +"AINT-MSAI: "+result.reqAINTMSAI+"\n";
    skills.textContent=result.skills;

    resultMessage.textContent="Completed";
  }


  function populateTopicTerms(){
    var termsListed=document.getElementById('topicsTermDisplayed');
    let y = termsListed.options.length;

    if (y>0){
      while (y>0){
        termsListed.remove(0);
        y = termsListed.options.length;
      }
    } 
    let blankTerm=document.createElement("option");
    blankTerm.text=" ";
    blankTerm.value="blank";
    termsListed.appendChild(blankTerm);

    let topicSectionsListed = document.getElementById('topicsDisplayed');
    let x = topicSectionsListed.options.length;
    if (x>0){
      while (x>0){
        topicSectionsListed.remove(0);
        x=topicSectionsListed.options.length;
      }
    }
    let blankSection=document.createElement("option");
    blankSection.text=" ";
    blankSection.value="blank";
    topicSectionsListed.appendChild(blankSection);

    let courseSelected=document.getElementById('topicsCourseSelected').value; //this gets the course  
    let listSemester = [];

    listSemester = lookupforTopicTerm();
    if (listSemester.length===0){
      searchResultMessage.textContent="No data available for the selected topics course";
      return listSemester;
    }

    //sort the list numerically which is distinctive in JS
    if (listSemester.length>1){
      listSemester.sort((a,b)=> a-b);
    }

    //populate the sections
    for (let k=0;k<listSemester.length;k++){
      let newTerm=document.createElement("option");
      var new_option_text=semesterNumToCode(listSemester[k]);  
      var new_option_value=listSemester[k].toString(); 
      newTerm.text=new_option_text;
      newTerm.value=new_option_value;
      termsListed.appendChild(newTerm);
    }

    searchResultMessage.textContent="Available semesters added";
    return;
  }

  //helperfunction to convert text versions of semester codes to ints that can be sorted
  //input must be string, for example: "Spring 2022", not "2022 Spring" or "SP22"
  function semesterCodeToNum(x){
    let termCode=x; //Fall 2026
    let term = "";
    if ((termCode.startsWith("Spring"))){
      term="1";
    }
    else if ((termCode.startsWith("Summer"))){
      term="4";
    }
    else if (termCode.startsWith("Fall")){
      term="7";
    }
    let digit_millenium=termCode.substring(termCode.length-4,termCode.length-3); //first "2" in "2026"
    let digits_year=termCode.substring(termCode.length-2); //should get last 2 digits
    let term_str=digit_millenium+digits_year+term;
    let termNum=parseInt(term_str);
    return termNum;
  }

  //paired helper function to do the opposite 
  //input must be integer, for example: "2267"
  function semesterNumToCode(y){
    let termNumStr=y.toString(); 
    let term = "";
    let year = "";
    let termCode="";
    let millenium="";

    if (termNumStr.substring(3)==="1"){
      term="Spring ";
    }
    else if (termNumStr.substring(3)==="4"){
      term="Summer ";
    }
    else if (termNumStr.substring(3)==="7"){
      term="Fall ";
    }
    
    millenium = termNumStr.substring(0,1);
    if (millenium === "1"){
      year=millenium+"9"+termNumStr.substring(1,3);
    }
    else{
      year=millenium+"0"+termNumStr.substring(1,3);
    }

    termCode=term+year;
    return termCode;
  }

  //helper function for populateTerms() that returns an array of semesters where the speical topics course was offered.
  function lookupforTopicTerm()
  {
    const topicsCourseSelected = document.getElementById('topicsCourseSelected').value;
    let topicsTermDisplayed=document.getElementById('topicsTermDisplayed');
    let searchResultMessage=document.getElementById('searchResultMessage');

    if (!topicsCourseSelected || topicsCourseSelected === "blank") {
      searchResultMessage.textContent = 'Unable to run, topics course not selected';
      return "";
    }

    //search topicsCourseCatalog for all IDs that match what we're looking for and populate the list
    let listSemester=[];
    for (let i=0; i< topicsCourseCatalog.length;i++)
    {
      let currCourse=topicsCourseCatalog[i];
      if (currCourse.id.startsWith(topicsCourseSelected))
      {
        let currCourseTermNum=semesterCodeToNum(currCourse.term);
        if(listSemester.includes(currCourseTermNum)===false)
        {
          listSemester.push(currCourseTermNum);
        }
      }
    }
    return listSemester;
  }
  
  //dynamically updates topics sections when the user selects a topic course and then picks a semester
  function populateTopics(){
    let courseSelected=document.getElementById('topicsCourseSelected').value;
    let termSelected=document.getElementById('topicsTermDisplayed').value;
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

    //call a lookup, we get an array of course objects that we can then use.
    let listCourseObjs=[];

    listCourseObjs = lookupforTopics(courseSelected,termSelected);

    //input validation
    if (listCourseObjs===undefined || listCourseObjs.length===0){
      searchResultMessage.textContent="No data available";
      return;
    }
    
    //sort the list (should be sorted by default)
    /*if (listCourseObjs.length>1){
      let sortedList=[];
      sortedList.push(listCourseObjs[0]); //start by adding the first element to the list
      for (let i=1;i<listCourseObjs.length;i++){
        let newSection=parseInt(listCourseObjs[i].section); //section of the new element we're trying to add
        for (let j=0;j<sortedList.length;j++){
          let sortedSection=parseInt(sortedList[j].section); //section of the sorted list element we're at rn
          if (newSection<sortedSection){
            sortedList.splice(j,0,listCourseObjs[i]);       
          }
        }
      }
      listCourseObjs=sortedList;
    }*/

    //populate the options
    for (let k=0;k<listCourseObjs.length;k++){
      let newTopic=document.createElement("option");
      var new_option_value=(listCourseObjs[k].section);  
      let title_plus_section="("+listCourseObjs[k].section+") "+listCourseObjs[k].title;
      var new_option_text=title_plus_section;
      newTopic.text=new_option_text;
      newTopic.value=new_option_value;
      topicsSectionsListed.appendChild(newTopic);
    }
    searchResultMessage.textContent="Available topics added";
    return;
  }

  function lookupforTopics(x,y) {
    let courseSelected=x;
    let termSelected=y;
    let searchResultMessage=document.getElementById('searchResultMessage');
    searchResultMessage.textContent="";

    let topicsList=[];
    //populate a list of course objects then return it

    if (!courseSelected || courseSelected === "blank") {
      searchResultMessage.textContent = 'No course selected';
      return topicsList;
    }
    if (!termSelected || termSelected === "blank") {
      searchResultMessage.textContent = 'No term selected';
      return topicsList;
    }

    //search topicsCourseCatalog for all IDs that match what we're looking for and populate the list
    let courseObj;
    for (let i=0; i< topicsCourseCatalog.length;i++)
    {
      courseObj=topicsCourseCatalog[i];
      let course_plus_term=courseSelected+"-"+termSelected;
      let currCourse=courseObj.id.substring(0,14);

      if (course_plus_term.startsWith(currCourse))
      {
        topicsList.push(courseObj);
      }
    }
    searchResultMessage.textContent="";
    return topicsList;
  }

  function TopicsSearch() {
    const courseSelected=document.getElementById('topicsCourseSelected').value; 
    const termSelected = document.getElementById('topicsTermDisplayed').value; 
    const topicsSelected = document.getElementById('topicsDisplayed').value;
    
    if (!courseSelected || courseSelected === "blank") {
      searchResultMessage.textContent = 'No course selected';
      return;
    }
    if (!termSelected || termSelected === "blank") {
      searchResultMessage.textContent = 'No term selected';
      return;
    }

    if (!topicsSelected || topicsSelected === "blank"){
      searchResultMessage.textContent = 'No section selected';
      return;
    }

    //search topicsCourseCatalog for all IDs that match what we're looking for and populate the list
    let searchCourse=courseSelected+'-'+termSelected+'-'+topicsSelected;
    for (let i=0; i< topicsCourseCatalog.length;i++)
    {
      let courseObj=topicsCourseCatalog[i];

      if (courseObj.id.startsWith(searchCourse))
      {
        let subject = document.getElementById('resultSubject');
        let title = document.getElementById('resultTitle');
        let hours = document.getElementById('resultHours');
        let description = document.getElementById('resultDescription');
        let notes = document.getElementById('resultNotes');
        let restrictions = document.getElementById('resultRestrictions');
        let requirements = document.getElementById('resultReqs');
        let skills = document.getElementById('resultSkills');
    
        subject.textContent=courseObj.courseSubject;;
        title.textContent=courseObj.title;
        hours.textContent=courseObj.credits;
        description.textContent=courseObj.description;
        notes.textContent=courseObj.notes;
        restrictions.textContent=courseObj.restrictions;
        requirements.textContent="CSEN-PhD: "+courseObj.reqCSENPHD+"\n" + "CSEN-MS: "+courseObj.reqCSENMS+"\n" + "CSEN-MSCPS: "+
        courseObj.reqCSENMSCPS+"\n" + "NTEN-MSNE: "+courseObj.reqNTENMSNE+"\n" +"AINT-MSAI: "+courseObj.reqAINTMSAI+"\n";
        skills.textContent=courseObj.skills;

        searchResultMessage="";
        return;
      }
    }
    searchResultMessage.textContent="Error, search failed";
    return;
  }
  

  function populateAutocompleteSuggestions(){
    //Step 1 - clear out all previous suggestions
    const courseSuggestedList=document.getElementById('suggestionSelected'); 
    let y = courseSuggestedList.options.length;
    if (y>0){
      while (y>0){
        courseSuggestedList.remove(0);
        y = courseSuggestedList.options.length;
      }
    } 

    let blankSuggestion=document.createElement("option");
    blankSuggestion.text=" ";
    blankSuggestion.value="blank";
    courseSuggestedList.appendChild(blankSuggestion);

    //Step 2 - call lookupForSuggestions() to get an array of course objects suggested based on user input
    let user_input=document.getElementById('prefixInput').value;
    let listSuggestions=[];
    if (user_input.length===0){
      searchResultMessage.textContent="No input provided";
      return;
    }
    listSuggestions = lookupForSuggestions(user_input);

    if (listSuggestions.length===0){
      searchResultMessage.textContent="No suggestions available";
      return;
    }

    /*
    //list should be sorted already
    if (listSemester.length>1){
      listSemester.sort((a,b)=> a-b);
    }
    */

    //Step 3 - if any results, populate the suggestions dropdown
    for (let m=0;m<listSuggestions.length;m++){
      let newSuggestion=document.createElement("option");
      var new_option_value=listSuggestions[m].courseSubject;
      var new_option_text=listSuggestions[m].courseSubject+" - "+listSuggestions[m].title;
      newSuggestion.text=new_option_text;
      newSuggestion.value=new_option_value;
      courseSuggestedList.appendChild(newSuggestion);
    }
    searchResultMessage.textContent="Suggestions added";
    return;

  }

  //helper for populateautocompleteusggestions
  function lookupForSuggestions(x){
    let subjectPrefix=x;
    let suggestedCourseObjs=[];

    //input validation
    if (subjectPrefix.length > 4 && subjectPrefix.charAt(4) === '-')
      {
        temp = subjectPrefix.slice(0,4)+ ' ' + subjectPrefix.slice(5);
        subjectPrefix = temp;
      }
    if ((subjectPrefix.length > 4) && ((subjectPrefix.charAt(4) != " ") && (subjectPrefix.charAt(4) != "-")))
    {
      temp = subjectPrefix.slice(0,4) + ' ' + subjectPrefix.slice(4);
      subjectPrefix = temp;
    }

    for (let m=0; m< courseCatalog.length;m++)
    {
      let currCourse=courseCatalog[m];
      console.log(currCourse.courseSubject);
      if (currCourse.courseSubject.startsWith(subjectPrefix))
      {
        suggestedCourseObjs.push(currCourse);
      }
    }
    return suggestedCourseObjs;
  }


  function autoCompleteSearch(){
    //Step 1 - get the course selected from the dropdow
    const courseSelected=document.getElementById('suggestionSelected').value; 
    if (!courseSelected || courseSelected === "blank") {
      searchResultMessage.textContent = "No course selected";
      return;
    }

    //Step 2 - run a traditional search
    let currSearch=courseSelected;
    searchBySubject(currSearch);
    
    searchResultMessage.textContent = "";
    return;
  }
  
  function showHide() {
    const visibleNav = document.getElementById("mySidebar");    

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
    //first, close all other messages
    
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
    //clear out the current course's results and user inputs
    
    let prefixInput = document.getElementById('prefixInput');
    let topicsInput = document.getElementById('topicsCourseSelected');
    let courseInput = document.getElementById('wordInput');

    let subject = document.getElementById('resultSubject');
    let title = document.getElementById('resultTitle');
    let hours = document.getElementById('resultHours');
    let description = document.getElementById('resultDescription');
    let notes = document.getElementById('resultNotes');
    let restrictions = document.getElementById('resultRestrictions');
    let requirements = document.getElementById('resultReqs');
    let skills = document.getElementById('resultSkills');

    let topicsTermSelected=document.getElementById('topicsTermDisplayed');
    let topicsSectionSelected=document.getElementById('topicsDisplayed');
    let autocompletesuggestionSelected=document.getElementById('suggestionSelected');
    autocompletesuggestionSelected.text="";
    autocompletesuggestionSelected.value="blank";

    let y = autocompletesuggestionSelected.options.length;

    if (y>0){
      while (y>0){
        autocompletesuggestionSelected.remove(0);
        y = autocompletesuggestionSelected.options.length;
      } 
    }
    if (y=== 0){
      let blankSuggestion=document.createElement("option");
      blankSuggestion.text=" ";
      blankSuggestion.value="blank";
      autocompletesuggestionSelected.appendChild(blankSuggestion);
    }
    topicsSectionSelected.value="";
    topicsTermSelected.value="";
    prefixInput.value="";
    courseInput.value="";
    topicsInput.value="blank";
    subject.textContent="";
    title.textContent="";
    hours.textContent="";
    description.textContent="";
    notes.textContent="";
    restrictions.textContent="";
    requirements.textContent="";
    skills.textContent="";
    searchResultMessage=document.getElementById('searchResultMessage');
    searchResultMessage.textContent="";

  }

  document.addEventListener("DOMContentLoaded", function() { 
    theTab=document.getElementById("defaultOpen");
    openSearchTab(theTab,"searchTraditionalTab");
  });
  
  document.addEventListener("DOMContentLoaded", function() { 
    menuButton=document.getElementById("menuButton");
    showHide();
    changeMenu(menuButton);
  });