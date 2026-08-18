# Acro - Advisor Course Retrieval Option
## About the Project
Create a course information retrieval tool (CIRT), based on a prefix tree data structure.
#### (1) User Function: Search by Course Number, Special Topics Course, or 
The first function that the user will be able to use is searching for course information by providing a 9-digit string representing a course subject code (e.g., CSCI-5202). If the course is in the trie, it will output all the stored course information with headers for each section (e.g., CREDIT HOURS, 3). The function provides error messages based on various scenarios (e.g., if server is inactive, if the input is too short, if the course subject code does not match anything in the trie). Multiple requests can be made in a single session.

## Program Overview
### Step 1: Program Reads Data from CSV
To start, the program reads in data. This is done by calling buildTrie which itself calls readData.
  void trie::buildTrie(string filename);
  void trie::readData(string filename);
The buildTrie function reads in data, creates a vector of Course* populated with the course information, creates a new Trie object, then populates the trie with each course until the vector is done iterating.
### Step 2: Program Builds the Trie
A new Trie is initialized, a dynamically allocated root TrieNode is created, and the Trie creates a series of dynamically allocated TrieNodes based on the course subject codes. At the end of each path is a leaf node that represents the final character in each string. Each leaf node stores a pointer to a Course object which will contain the stored course information. 
### Step 3: Program Starts Server
Once the trie is built, the server will be created and is ready to be used. The locally hosted web address that is associated with the server is provided to output. 
### Step 4: Tool Available for Use by User
Once at the web address, the user can use the tool for searches or to get autocomplete suggestions.


## Future Work
### Search-by-Partial-Course-Title Option
I was unable to add a search-by-title option. Instead of remaking a new trie, I would, within the trie structure, contain a 'dictionary' map structure where each course is added to the map, where the keys are the course titles and the values are the subject codes. Then when the user provided the course title, I would search the map for a key, and if it existed, then call the search and output functions based on the associated value, the course subject code.

## References & Resources
  ##### zyBook CSPB 2270: Data Structures - 7.12 Tries
  ##### zyBook CSPB 2270: C++ Refresher - 9.5, 9.6, 9.7 File input and output
  ##### Wikipedia – Trie
  ##### Geeks4Geeks – Trie Data Structures
  ###### https://www.geeksforgeeks.org/cpp/traversing-a-map-or-unordered_map-in-cpp-stl/
  ###### https://www.geeksforgeeks.org/cpp/how-to-access-value-in-a-map-using-key-in-cpp/
  ###### https://learn.zybooks.com/zybook/COLORADOCSPB2270DataStructuresGuinnFall2025/chapter/14/section/1
  ###### https://www.geeksforgeeks.org/cpp/map-insert-in-c-stl/
  ###### https://www.geeksforgeeks.org/cpp/stringstream-c-applications/
  ###### https://www.geeksforgeeks.org/cpp/how-to-read-data-from-csv-file-to-a-2d-array-in-cpp/
  ###### https://www.geeksforgeeks.org/cpp/getline-string-c/
  ###### https://www.geeksforgeeks.org/cpp/file-handling-c-classes/
  ##### https://www.geeksforgeeks.org/cpp/vector-erase-in-cpp-stl/
  ###### https://en.cppreference.com/w/cpp/string/basic_string/begin
  ###### https://www.geeksforgeeks.org/cpp/string-concatenation-in-cpp/
  ###### https://cplusplus.com/reference/string/string/end/
  ###### https://www.geeksforgeeks.org/cpp/stdstringinsert-in-c/
  ###### https://en.cppreference.com/w/cpp/string/basic_string/insert
  ###### https://www.geeksforgeeks.org/cpp/traversing-a-map-or-unordered_map-in-cpp-stl/
  ###### https://en.cppreference.com/w/cpp/container/map/begin.html
  ###### https://www.geeksforgeeks.org/dsa/auto-complete-feature-using-trie/
  ###### https://www.geeksforgeeks.org/javascript/where-to-put-javascript-in-an-html-document/

## HTML, CSS, Javascript Resources consulted after initial project
  #### //FIXED-competing calls was preventing resubmission, happens when onclick is used multiple times for a button and then clicked
  ##### //https://stackoverflow.com/questions/17433557/how-to-save-user-input-into-a-variable-in-html-and-javascript
  ##### https://www.w3schools.com/html/html_responsive.asp
  ##### https://www.w3schools.com/css/css_rwd_intro.asp
  ##### https://www.w3schools.com/css/tryit.asp?filename=tryresponsive_breakpoints2
  ##### https://www.tutorialrepublic.com/css-tutorial/css-layers.php
  ##### https://www.tutorialrepublic.com/css-tutorial/css-margin.php
  ##### https://www.w3schools.com/htmL/html_images_background.asp
  ##### https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-image
  ##### https://www.geeksforgeeks.org/css/how-to-design-a-modern-sidebar-menu-using-html-and-css/
  ##### https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position
  ##### https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Positioning
  ##### https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Using
  ##### https://www.w3schools.com/html/html_layout.asp
  ##### https://www.w3schools.com/css/css_dropdowns.asp
  ##### https://www.w3schools.com/csS/css3_flexbox.asp
  ##### https://www.w3schools.com/css/css3_animations.asp
  ##### https://unwiredlearning.com/blog/css-sticky-headers-sidebars
  ##### https://www.w3schools.com/css/tryit.asp?filename=trycss_navbar_horizontal_responsive
  ##### https://www.tutorialrepublic.com/css-tutorial/css-display.php
  ##### https://www.geeksforgeeks.org/css/how-to-create-toggle-switch-by-using-html-and-css/
  ##### https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_switch
  ##### https://www.geeksforgeeks.org/css/how-to-make-right-align-div-elements-in-css/
  ##### https://stackoverflow.com/questions/19690841/positioning-text-inside-a-button
  ##### https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_icon_js 
  ##### https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion_symbol
  ##### https://www.geeksforgeeks.org/html/html-dropdown
  ##### https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Using
  ##### https://www.w3schools.com/howto/howto_js_accordion.asp
  ##### https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav_dropdown
  ##### https://stackoverflow.com/questions/30232146/dynamically-populating-drop-down-list-from-selection-of-another-drop-down-value
  ##### https://stackoverflow.com/questions/17075138/dynamically-update-form-action-based-on-selected-option
  ##### https://www.w3schools.com/jsref/met_select_remove.asp
  ##### https://stackoverflow.com/questions/17730621/how-to-dynamically-add-options-to-an-existing-select-in-vanilla-javascript
  ##### https://www.w3schools.com/jsref/event_onchange.asp
  ##### https://www.w3schools.com/jsref/dom_obj_option.asp
  ##### https://www.geeksforgeeks.org/javascript/how-to-create-dictionary-and-add-key-value-pairs-dynamically/*/
  ##### https://www.w3schools.com/jsref/jsref_obj_string.asp*/
  ##### https://www.geeksforgeeks.org/python/javascript-equivalent-to-python-dictionary/*/
  ##### https://www.w3schools.com/jsref/jsref_filter.asp

  ##### https://www.w3schools.com/jsref/jsref_indexof.asp
  ##### https://medium.com/@ryan_forrester_/dictionaries-in-javascript-how-to-guide-05457a0c581b
  ##### https://www.geeksforgeeks.org/javascript/javascript-string-search-methods/#using-the-search-method
  ##### https://stackoverflow.com/questions/57300885/how-do-i-access-a-specific-element-in-a-dictionary
  ##### https://www.w3schools.com/jsref/jsref_filter.asp
  ##### https://github.com/yokoffing/Betterfox/discussions/261 - fixed font visibility issue in Firefox
  ##### https://www.geeksforgeeks.org/html/how-to-set-the-default-value-for-an-html-select-element/
  ##### https://www.w3schools.com/js/js_loops.asp
  ##### https://global.php.cn/faq/1797066805.html
  ##### https://www.geeksforgeeks.org/javascript/convert-a-string-to-an-integer-in-javascript/
  ##### https://medium.com/@ryan_forrester_/dictionaries-in-javascript-how-to-guide-05457a0c581b
  ##### https://www.w3schools.com/jsref/jsref_sort.asp
  ##### https://www.w3schools.com/jsref/jsref_trim_string.asp
  ##### https://www.geeksforgeeks.org/javascript/how-to-create-dictionary-and-add-key-value-pairs-dynamically/
  ##### https://www.geeksforgeeks.org/javascript/how-to-iterate-over-a-javascript-object/
  ##### https://www.w3schools.com/jsref/jsref_search.asp /
  ##### https://www.w3schools.com/howto/howto_js_tabs.asp
  ##### https://www.geeksforgeeks.org/html/how-to-style-the-option-of-an-html-select-element/

