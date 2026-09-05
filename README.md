# CIRT - Course Info Retrieval Tool
## About the Tool
<span>An internal, advisor-facing course information tool. Provides 3 ways to access course information.</span>
### (1) Search by Course Number
<span>Search for course information by providing a 8 or 9 character course subject code in the format of 'CSCI-5000', 'CSCI5000', or 'CSCI 5000'.</span>
### (2) Special Topics Search
<span>Search for course information stored for special topics courses, where each section is treated as its own course. Must use all three dropdown menus that help filter the information. </span> 
### (3) AutoComplete - get suggestions of available courses
<span>Search for suggestions based on what is in the dataset. User must enter the beginning characters, like an autocomplete function. Then select an option from the dropdown and search for the selected suggestion.</span>

## File Structure
### index.html
<span>The website html page the user interfaces with</span>
### cirt_data.xlsx
<span>Excel file that CS uses to store and track course data. Manually updated separately, uploaded here, then run createCatalogFromXLSX.py to populate catalog js files</span>
### script.css
<span>Style sheet for the website</span>
### script.js
<span>Stores the functions for data lookups and navigation</span>
### createCatalogFromXLSX.py
<span>Internal function used to pull data from cirt_data.xlsx and create updated courseCatalog.js and topicsCourseCatalog.js files, which are the website's datasets</span>
### courseCatalog.js
<span>Javascript file that holds the course information for all non-special topics courses</span>
### topicsCourseCatalog.js
<span>Javascript file that holds the course information for all speical topics courses</span>
### sidebar background.jpg
<span>Light grey image file that serves as background for resource sidebar</span>
### sidebarHeader.png
<span>CS department logo to be the header image for resource sidebar</span>
### background.png
<span>Dark grey image file that serves as background </span>

## Future Work
### Search-by-Partial-Course-Title Option
### Search-by-Full-Course-Title Option
### Menu button should be available in the sidebar
### Sidebar should appear below the white main box when screen is smaller than 'y' px, and should not close
### Add new field, Student Reviews from CS-GSA
### Add new field, 'Rigor, according to students' whihc is available for some courses in the Skills Learnt document'

#### HTML, CSS, Javascript and related resources consulted after initial project
    #### Microsoft Copilot
    ##### Used in the final stages to debug and add featuers when I converted the C++ structure to .js

    #### GeeksforGeeks (geeksforgeeks.org)
    ##### ../css/how-to-design-a-modern-sidebar-menu-using-html-and-css/
    ##### ../javascript/convert-a-string-to-an-integer-in-javascript/
    ##### ../css/how-to-create-toggle-switch-by-using-html-and-css/
    ##### ../css/how-to-make-right-align-div-elements-in-css/
    ##### ../html/html-dropdown
    ##### ../html/how-to-set-the-default-value-for-an-html-select-element/
    ##### ../html/how-to-style-the-option-of-an-html-select-element/
    ##### ../html/html-clearing-the-input-field/
    ##### ../python/javascript-equivalent-to-python-dictionary/
    ##### ../javascript/javascript-string-search-methods/#using-the-search-method
    ##### ../javascript/how-to-create-dictionary-and-add-key-value-pairs-dynamically/
    ##### ../javascript/how-to-iterate-over-a-javascript-object/
    ##### ../javascript/how-to-insert-a-string-at-a-specific-index-in-javascript/
    ##### ../javascript/javascript-string-startswith-method/
    ##### ../javascript/javascript-array-sort-method/
    ##### ../javascript/javascript-array-splice-method/
    ##### ../javascript/how-to-include-a-javascript-file-in-another-javascript-file/

    ##### ../css/text-truncate-in-css/
    ##### ../python/how-to-fix-no-module-named-pandas/
    ##### ../javascript/where-to-put-javascript-in-an-html-document/
    
    #### GitHub (github.com)
    ##### ../yokoffing/Betterfox/discussions/261 - fixed font visibility issue in Firefox

    #### Inclusive Components Design (inclusive-components.design)
    ##### ../collapsible-sections/
    
    #### Medium (medium.com)
    ##### ../@ryan_forrester_/dictionaries-in-javascript-how-to-guide-05457a0c581b

    #### Mozilla documentation (developer.mozilla.org/en-US/docs)
    ##### ../Web/CSS/Reference/Properties/background-image
    ##### ../Web/CSS/Reference/Properties/position
    ##### ../Learn_web_development/Core/CSS_layout/Positioning
    ##### ../Web/CSS/Guides/Animations/Using
    ##### ../Learn_web_development/Core/Structuring_content/Table_accessibility

    #### Pandas Module Documentation (pandas.pydata.org)
    ##### ./pandas-docs/stable/reference/api/pandas.read_excel.html

    #### PhP (global.php.cn)
    ##### ../faq/1797066805.html

    #### StackOverflow (stackoverflow.com/questions)
    ##### ../17433557/how-to-save-user-input-into-a-variable-in-html-and-javascript
    ##### ../19690841/positioning-text-inside-a-button
    ##### ../30232146/dynamically-populating-drop-down-list-from-selection-of-another-drop-down-value
    ##### ../17075138/dynamically-update-form-action-based-on-selected-option
    ##### ../17730621/how-to-dynamically-add-options-to-an-existing-select-in-vanilla-javascript
    ##### ../57300885/how-do-i-access-a-specific-element-in-a-dictionary
    ##### ../921384/java-string-array-is-there-a-size-of-method
    ##### ../18578388/html-dropdown-select-with-text-wrap-and-border-after-every-value-option
    ##### ../15487408/buttons-text-vertical-align
    ##### ../799981/document-ready-equivalent-without-jquery

    
    #### Tutorial Republic (tutorialrepublic.com)
    ##### ../css-tutorial/css-layers.php
    ##### ../css-tutorial/css-margin.php
    ##### ../css-tutorial/css-display.php

    #### Unwired Leanring (unwiredlearning.com)
    ##### ../blog/css-sticky-headers-sidebars
    
    #### WebFlow (help.webflow.com)
    ##### ../hc/en-us/articles/33961409134227-Control-text-wrapping-line-breaking-and-truncation#how-to-set-wrapping-behavior
    
    #### W3 Schools (w3schools.com)
    ##### ../html/html_responsive.asp
    ##### ../css/css_rwd_intro.asp
    ##### ../css/tryit.asp?filename=tryresponsive_breakpoints2
    ##### ../html/html_layout.asp
    ##### ../css/css_dropdowns.asp
    ##### ../csS/css3_flexbox.asp
    ##### ../css/css3_animations.asp
    ##### ../css/tryit.asp?filename=trycss_navbar_horizontal_responsive
    ##### ../htmL/html_images_background.asp
    ##### ../howto/tryit.asp?filename=tryhow_css_switch
    ##### ../jsref/met_select_remove.asp
    ##### ../jsref/event_onchange.asp
    ##### ../jsref/dom_obj_option.asp
    ##### ../js/js_loops.asp
    ##### ../jsref/jsref_obj_string.asp
    ##### ../jsref/jsref_filter.asp
    ##### ../jsref/jsref_indexof.asp
    ##### ../jsref/jsref_sort.asp
    ##### ../jsref/jsref_trim_string.asp
    ##### ../jsref/jsref_search.asp /
    ##### ../howto/howto_js_tabs.asp
    ##### ../howto/howto_js_accordion.asp
    ##### ../howto/tryit.asp?filename=tryhow_css_menu_icon_js 
    ##### ../howto/tryit.asp?filename=tryhow_js_accordion_symbol
    ##### ../howto/tryit.asp?filename=tryhow_js_sidenav_dropdown

#### Archived References & Resources
    #### zyBook CSPB 2270: Data Structures - 7.12 Tries
    #### zyBook CSPB 2270: C++ Refresher - 9.5, 9.6, 9.7 File input and output
    #### ZyBook CSPB 2270: 14.1
    #### Wikipedia – Trie
    #### Geeks4Geeks – Trie Data Structures (geeksforgeeks.org)
    ##### ../cpp/traversing-a-map-or-unordered_map-in-cpp-stl/
    ##### ../cpp/traversing-a-map-or-unordered_map-in-cpp-stl/
    ##### ../cpp/how-to-access-value-in-a-map-using-key-in-cpp/
    ##### ../cpp/map-insert-in-c-stl/
    ##### ../cpp/stringstream-c-applications/
    ##### ../cpp/how-to-read-data-from-csv-file-to-a-2d-array-in-cpp/
    ##### ../cpp/getline-string-c/
    ##### ../cpp/file-handling-c-classes/
    ##### ../cpp/vector-erase-in-cpp-stl/
    ##### ../cpp/string-concatenation-in-cpp/
    ##### ../cpp/stdstringinsert-in-c/
    ##### ../dsa/auto-complete-feature-using-trie/
    #### CPP Reference (en.cppreference.com)
    ##### ../w/cpp/string/basic_string/begin
    ##### ../w/cpp/string/basic_string/insert
    ##### ../w/cpp/container/map/begin.html
    #### CPlusPlus (cplusplus.com)
    ##### ../reference/string/string/end/
  