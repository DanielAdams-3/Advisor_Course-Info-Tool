# CIRT - Course Info Retrieval Tool
## About the Project
Create a course information retrieval tool (CIRT), based on a prefix tree data structure.
#### (1) User Function: Search by Course Number
The first function that the user will be able to use is searching for course information by providing a 9-digit string representing a course subject code (e.g., CSCI-5202). If the course is in the trie, it will output all the stored course information with headers for each section (e.g., CREDIT HOURS, 3). The function provides error messages based on various scenarios (e.g., if server is inactive, if the input is too short, if the course subject code does not match anything in the trie). Multiple requests can be made in a single session.
#### (2) Speical Topics Search
#### (3) AutoComplete - get suggestions of available courses


## Future Work
### Search-by-Partial-Course-Title Option
The first option should be modified to allow for Then when the user provided the course title, I would search the map for a key, and if it existed, then call the search and output functions based on the associated value, the course subject code.

### References & Resources
    ##### zyBook CSPB 2270: Data Structures - 7.12 Tries
    ##### zyBook CSPB 2270: C++ Refresher - 9.5, 9.6, 9.7 File input and output
    ##### Wikipedia – Trie
    ##### Geeks4Geeks – Trie Data Structures
    ###### geeksforgeeks.org/cpp/traversing-a-map-or-unordered_map-in-cpp-stl/
    ###### geeksforgeeks.org/cpp/how-to-access-value-in-a-map-using-key-in-cpp/
    ###### learn.zybooks.com/zybook/COLORADOCSPB2270DataStructuresGuinnFall2025/chapter/14/section/1
    ###### geeksforgeeks.org/cpp/map-insert-in-c-stl/
    ###### geeksforgeeks.org/cpp/stringstream-c-applications/
    ###### geeksforgeeks.org/cpp/how-to-read-data-from-csv-file-to-a-2d-array-in-cpp/
    ###### geeksforgeeks.org/cpp/getline-string-c/
    ###### geeksforgeeks.org/cpp/file-handling-c-classes/
    ###### geeksforgeeks.org/cpp/vector-erase-in-cpp-stl/
    ###### cppreference.com/w/cpp/string/basic_string/begin
    ###### geeksforgeeks.org/cpp/string-concatenation-in-cpp/
    ###### cplusplus.com/reference/string/string/end/
    ###### geeksforgeeks.org/cpp/stdstringinsert-in-c/
    ###### en.cppreference.com/w/cpp/string/basic_string/insert
    ###### geeksforgeeks.org/cpp/traversing-a-map-or-unordered_map-in-cpp-stl/
    ###### en.cppreference.com/w/cpp/container/map/begin.html
    ###### geeksforgeeks.org/dsa/auto-complete-feature-using-trie/
    ###### geeksforgeeks.org/javascript/where-to-put-javascript-in-an-html-document/

### HTML, CSS, Javascript and related resources consulted after initial project
    #### Microsoft Copilot
    ##### Used in the final stages to debug and add featuers when I converted the C++ structure to .js

    #### GeeksforGeeks (geeksforgeeks.org)
    ##### ../css/how-to-design-a-modern-sidebar-menu-using-html-and-css/
    ##### ../html/how-to-set-the-default-value-for-an-html-select-element/
    ##### ../javascript/convert-a-string-to-an-integer-in-javascript/
    ##### ../css/how-to-create-toggle-switch-by-using-html-and-css/
    ##### ../css/how-to-make-right-align-div-elements-in-css/
    ##### ../html/html-dropdown
    ##### ../python/javascript-equivalent-to-python-dictionary/
    ##### ../javascript/javascript-string-search-methods/#using-the-search-method
    ##### ../javascript/how-to-create-dictionary-and-add-key-value-pairs-dynamically/
    ##### ../javascript/how-to-create-dictionary-and-add-key-value-pairs-dynamically/
    ##### ../javascript/how-to-iterate-over-a-javascript-object/
    ##### ..//html/how-to-style-the-option-of-an-html-select-element/
    ##### ../css/text-truncate-in-css/
    ##### ../python/how-to-fix-no-module-named-pandas/
    
    #### GitHub (github.com)
    ##### ../yokoffing/Betterfox/discussions/261 - fixed font visibility issue in Firefox

    #### Inclusive Components Design (inclusive-components.design)
    ##### ../collapsible-sections/

    #### Mozilla documentation (developer.mozilla.org/en-US/docs)
    ##### ../Web/CSS/Reference/Properties/background-image
    ##### ../Web/CSS/Reference/Properties/position
    ##### ../Learn_web_development/Core/CSS_layout/Positioning
    ##### ../Web/CSS/Guides/Animations/Using

    #### Medium (medium.com)
    ##### ../@ryan_forrester_/dictionaries-in-javascript-how-to-guide-05457a0c581b
    ##### ../@ryan_forrester_/dictionaries-in-javascript-how-to-guide-05457a0c581b

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
    ##### ../jsref/jsref_filter.asp
    ##### ../jsref/jsref_sort.asp
    ##### ../jsref/jsref_trim_string.asp
    ##### ../jsref/jsref_search.asp /
    ##### ../howto/howto_js_tabs.asp
    ##### ../howto/howto_js_accordion.asp
    ##### ../howto/tryit.asp?filename=tryhow_css_menu_icon_js 
    ##### ../howto/tryit.asp?filename=tryhow_js_accordion_symbol
    ##### ../howto/tryit.asp?filename=tryhow_js_sidenav_dropdown

