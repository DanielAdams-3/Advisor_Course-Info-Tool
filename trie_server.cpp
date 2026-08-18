#include "trie_server.h"
#include "Trie.h"        // trie
#include "httplib.h"    // single-header HTTP library: https://github.com/yhirose/cpp-httplib

#include <string>
#include <vector>

// Adjust these as needed
static const char* HOST = "0.0.0.0";
static const int   PORT = 8080;

// Helper: safely extract a query parameter, or empty string if missing.
static std::string get_param(const httplib::Request& req, const std::string& name) {
    auto val = req.get_param_value(name.c_str());
    return val;
}

void start_trie_server(Trie& dict) {
    httplib::Server svr;
    /*
    svr.Get("/lookupForTopics", [&dict](const httplib::Request& req, httplib::Response& res) {
      std::string prefix = get_param(req, "q");
      if (prefix.empty()) {
          res.status = 400;
          res.set_content("ERROR missing parameter q", "text/plain");
          return;
      }

      std::size_t limit = 450; //limit max number of results
      std::string limit_param = get_param(req, "limit");
      if (!limit_param.empty()) {
          try {
              limit = static_cast<std::size_t>(std::stoul(limit_param));
          } catch (...) {
              // keep default
           }
      }
      auto suggestions = dict.autocompleteTopics(prefix, limit); //returns a vector of string objects, which is converted to a dictionary
      string body="";

      for (const auto& w : suggestions) {
          Course* coursePTR=dict.swapCodeforPtr(w);
          string title=coursePTR->getCourseTitle();
          body += w;
          body += " ";
          body += title;
          body += "*";
      }
       res.set_content(body, "text/plain"); 
    });
    */


      
    svr.Get("/lookupForTopicsTerms", [&dict](const httplib::Request& req, httplib::Response& res) {
      std::string prefix = get_param(req, "q");
      if (prefix.empty()) {
          res.status = 400;
          res.set_content("ERROR missing parameter q", "text/plain");
          return;
      }

      std::size_t limit = 450; //limit max number of results
      std::string limit_param = get_param(req, "limit");
      if (!limit_param.empty()) {
          try {
              limit = static_cast<std::size_t>(std::stoul(limit_param));
          } catch (...) {
              // keep default
           }
      }
      auto suggestions = dict.autocompleteTopics(prefix, limit); //returns a vector of string objects, which is converted to a dictionary
      string body="";

      for (const auto& w : suggestions) {
          Course* coursePTR=dict.swapCodeforPtr(w);
          string title=coursePTR->getCourseTitle();
          body += w;
          body += " ";
          body += title;
          body += "*";
      }
       res.set_content(body, "text/plain"); 
    });

    //same as original lookup function but just retrieves the course title
    // Simple membership lookup: /lookupTitle?q=word
    // Response (plain text):
    //   "FOUND <word>"      if in trie
    //   "NOT_FOUND <word>"  if not in trie
    svr.Get("/lookupForTitle", [&dict](const httplib::Request& req, httplib::Response& res) {
        std::string q = get_param(req, "q");
        if (q.empty()) {
            res.status = 400;
            res.set_content("ERROR missing parameter q", "text/plain");
        }
        for (int i =0;i<q.length();i++)
        {
            if (q.at(i) == ' ')
            {
                q[i]='-';
            }
        }
        /*adds a space when the user provides a shorter title*/
        bool prefix_missing_delimiter=false; //missing delimiter between CSCI and 7000, for example
        prefix_missing_delimiter = ((q.length()>=4) && ((q.find("-") != 4)));
        if (prefix_missing_delimiter==true){
                q.insert(4,"-");
        }

        bool found = dict.contains(q); //TRIE FUNCTION
        std::string body = found ? "FOUND " + q : "NOT_FOUND " + q;

        //OUTPUT COURSE DATA
        if (found == true)
        {
            Course* course_to_print = dict.swapCodeforPtr(q);
            string courseDescription; 
            string courseNotes;
            string courseTitle;
            string regRestricts;
            string courseHours;
            string skillsLearnt; 
            map<string,string> plansNreqs;
            string subject;
            course_to_print->getCourseInfo(courseTitle, courseDescription, courseNotes, subject, regRestricts, plansNreqs, courseHours, skillsLearnt);
            body=courseTitle;
        }
        res.set_content(body, "text/plain");
    });

    //
    svr.Get("/lookupForSubject", [&dict](const httplib::Request& req, httplib::Response& res) {
        std::string q = get_param(req, "q");
        if (q.empty()) {
            res.status = 400;
            res.set_content("ERROR missing parameter q", "text/plain");
        }
        
        for (int i =0;i<q.length();i++)
        {
            if (q.at(i) == ' ')
            {
                q[i]='-';
            }
        }
        
        /*adds a space when the user provides a shorter title*/
        bool prefix_missing_delimiter=false; //missing delimiter between CSCI and 7000, for example
        prefix_missing_delimiter = ((q.length()>=4) && ((q.find("-") != 4)));
        if (prefix_missing_delimiter==true){
                q.insert(4,"-");
        }

        bool found = dict.contains(q); //TRIE FUNCTION
        std::string body = found ? "FOUND " + q : "NOT_FOUND " + q;

        //OUTPUT COURSE DATA
        if (found == true)
        {
            Course* course_to_print = dict.swapCodeforPtr(q);
            string courseDescription; 
            string courseNotes;
            string courseTitle;
            string regRestricts;
            string courseHours; 
            string skillsLearnt;
            map<string,string> plansNreqs;
            string subject;
            course_to_print->getCourseInfo(courseTitle, courseDescription, courseNotes, subject, regRestricts, plansNreqs, courseHours, skillsLearnt);
            body=subject;
        }
        res.set_content(body, "text/plain");
    });


    svr.Get("/lookupForDescription", [&dict](const httplib::Request& req, httplib::Response& res) {
        std::string q = get_param(req, "q");
        if (q.empty()) {
            res.status = 400;
            res.set_content("ERROR missing parameter q", "text/plain");
        }
        else 
        {
            for (int i =0;i<q.length();i++)
            {
                if (q.at(i) == ' ')
                {
                    q[i]='-';
                }
            }
        }
        /*adds a space when the user provides a shorter title*/
        bool prefix_missing_delimiter=false; //missing delimiter between CSCI and 7000, for example
        prefix_missing_delimiter = ((q.length()>=4) && ((q.find("-") != 4)));
        if (prefix_missing_delimiter==true){
                q.insert(4,"-");
        }

        bool found = dict.contains(q); //TRIE FUNCTION
        std::string body = found ? "FOUND " + q : "NOT_FOUND " + q;

        //OUTPUT COURSE DATA
        if (found == true)
        {
            Course* course_to_print = dict.swapCodeforPtr(q);
            string courseDescription;
            string courseNotes;
            string courseTitle;
            string regRestricts; 
            string courseHours;
            string skillsLearnt;
            map<string,string> plansNreqs;
            string subject;
            course_to_print->getCourseInfo(courseTitle, courseDescription, courseNotes, subject, regRestricts, plansNreqs, courseHours, skillsLearnt);
            body=courseDescription;
        }
        res.set_content(body, "text/plain");
    });

    svr.Get("/lookupForNotes", [&dict](const httplib::Request& req, httplib::Response& res) {
        std::string q = get_param(req, "q");
        if (q.empty()) {
            res.status = 400;
            res.set_content("ERROR missing parameter q", "text/plain");
        }
        else 
        {
            for (int i =0;i<q.length();i++)
            {
                if (q.at(i) == ' ')
                {
                    q[i]='-';
                }
            }
        }
        
        /*adds a space when the user provides a shorter title*/
        bool prefix_missing_delimiter=false; //missing delimiter between CSCI and 7000, for example
        prefix_missing_delimiter = ((q.length()>=4) && ((q.find("-") != 4)));
        if (prefix_missing_delimiter==true){
                q.insert(4,"-");
        }
        bool found = dict.contains(q); //TRIE FUNCTION
        std::string body = found ? "FOUND " + q : "NOT_FOUND " + q;

        //OUTPUT COURSE DATA
        if (found == true)
        {
            Course* course_to_print = dict.swapCodeforPtr(q);
            string courseDescription;
            string courseNotes;
            string courseTitle;
            string regRestricts; 
            string courseHours;
            string skillsLearnt;
            map<string,string> plansNreqs;
            string subject;
            course_to_print->getCourseInfo(courseTitle, courseDescription, courseNotes, subject, regRestricts, plansNreqs, courseHours, skillsLearnt);
            body=courseNotes;
        }
        res.set_content(body, "text/plain");
    });

    svr.Get("/lookupForRestrictions", [&dict](const httplib::Request& req, httplib::Response& res) {
        std::string q = get_param(req, "q");
        if (q.empty()) {
            res.status = 400;
            res.set_content("ERROR missing parameter q", "text/plain");
        }
        else 
        {
            for (int i =0;i<q.length();i++)
            {
                if (q.at(i) == ' ')
                {
                    q[i]='-';
                }
            }
        }
        /*adds a space when the user provides a shorter title*/
        bool prefix_missing_delimiter=false; //missing delimiter between CSCI and 7000, for example
        prefix_missing_delimiter = ((q.length()>=4) && ((q.find("-") != 4)));
        if (prefix_missing_delimiter==true){
                q.insert(4,"-");
        }
        bool found = dict.contains(q); //TRIE FUNCTION
        std::string body = found ? "FOUND " + q : "NOT_FOUND " + q;

        //OUTPUT COURSE DATA
        if (found == true)
        {
            Course* course_to_print = dict.swapCodeforPtr(q);
            string courseDescription; 
            string courseNotes;
            string courseTitle;
            string regRestricts;
            string courseHours;
            string skillsLearnt;
            map<string,string> plansNreqs;
            string subject;
            course_to_print->getCourseInfo(courseTitle, courseDescription, courseNotes, subject, regRestricts, plansNreqs, courseHours, skillsLearnt);
            body=regRestricts;
        }
        res.set_content(body, "text/plain");
    });
    svr.Get("/lookupForHours", [&dict](const httplib::Request& req, httplib::Response& res) {
        std::string q = get_param(req, "q");
        if (q.empty()) {
            res.status = 400;
            res.set_content("ERROR missing parameter q", "text/plain");
        }
        else 
        {
            for (int i =0;i<q.length();i++)
            {
                if (q.at(i) == ' ')
                {
                    q[i]='-';
                }
            }
        }
        
        /*adds a space when the user provides a shorter title*/
        bool prefix_missing_delimiter=false; //missing delimiter between CSCI and 7000, for example
        prefix_missing_delimiter = ((q.length()>=4) && ((q.find("-") != 4)));
        if (prefix_missing_delimiter==true){
                q.insert(4,"-");
        }
        
        bool found = dict.contains(q); //TRIE FUNCTION
        std::string body = found ? "FOUND " + q : "NOT_FOUND " + q;

        //OUTPUT COURSE DATA
        if (found == true)
        {
            Course* course_to_print = dict.swapCodeforPtr(q);
            string courseDescription; 
            string courseNotes; 
            string courseTitle; 
            string regRestricts;
            string courseHours;
            string skillsLearnt;
            map<string,string> plansNreqs;
            string subject;
            course_to_print->getCourseInfo(courseTitle, courseDescription, courseNotes, subject, regRestricts, plansNreqs, courseHours, skillsLearnt);
            body=courseHours;
            if (courseHours == "1"){
                body.append(" credit hour");
            }
            else
            {
            body.append(" credit hours");
            }
        }
        res.set_content(body, "text/plain");
    });

    svr.Get("/lookupForSkills", [&dict](const httplib::Request& req, httplib::Response& res) {
        std::string q = get_param(req, "q");
        if (q.empty()) {
            res.status = 400;
            res.set_content("ERROR missing parameter q", "text/plain");
        }
        else 
        {
            for (int i =0;i<q.length();i++)
            {
                if (q.at(i) == ' ')
                {
                    q[i]='-';
                }
            }
        }
        
        /*adds a space when the user provides a shorter title*/
        bool prefix_missing_delimiter=false; //missing delimiter between CSCI and 7000, for example
        prefix_missing_delimiter = ((q.length()>=4) && ((q.find("-") != 4)));
        if (prefix_missing_delimiter==true){
                q.insert(4,"-");
        }

        bool found = dict.contains(q); //TRIE FUNCTION
        std::string body = found ? "FOUND " + q : "NOT_FOUND " + q;

        //OUTPUT COURSE DATA
        if (found == true)
        {
            Course* course_to_print = dict.swapCodeforPtr(q);
            string courseDescription;
            string courseNotes; 
            string courseTitle;
            string regRestricts; 
            string courseHours;
            string skillsLearnt;
            map<string,string> plansNreqs;
            string subject; 
            course_to_print->getCourseInfo(courseTitle, courseDescription, courseNotes, subject, regRestricts, plansNreqs, courseHours, skillsLearnt);
            body=skillsLearnt;
        }
        res.set_content(body, "text/plain");
    });

    svr.Get("/lookupForDegreeReqs", [&dict](const httplib::Request& req, httplib::Response& res) {
        std::string q = get_param(req, "q");
        if (q.empty()) {
            res.status = 400;
            res.set_content("ERROR missing parameter q", "text/plain");
        }
        else 
        {
            for (int i =0;i<q.length();i++)
            {
                if (q.at(i) == ' ')
                {
                    q[i]='-';
                }
            }
        }
        /*adds a space when the user provides a shorter title*/
        bool prefix_missing_delimiter=false; //missing delimiter between CSCI and 7000, for example
        prefix_missing_delimiter = ((q.length()>=4) && ((q.find("-") != 4)));
        if (prefix_missing_delimiter==true){
                q.insert(4,"-");
        }

        bool found = dict.contains(q); //TRIE FUNCTION
        std::string body = found ? "FOUND " + q : "NOT_FOUND " + q;

        //OUTPUT COURSE DATA
        if (found == true)
        {
            Course* course_to_print = dict.swapCodeforPtr(q);
            string courseDescription; 
            string courseNotes;
            string courseTitle; 
            string regRestricts; 
            string courseHours;
            string skillsLearnt;
            map<string,string> plansNreqs;
            string subject; 
            course_to_print->getCourseInfo(courseTitle, courseDescription, courseNotes, subject, regRestricts, plansNreqs, courseHours, skillsLearnt);
            body="";
            for (auto i  = plansNreqs.begin(); i!= plansNreqs.end(); i++)
            {
                body.append(i->first);
                body.append(": ");
                body.append(i->second);
                body.append("\n");
            }
        }
        res.set_content(body, "text/plain");
    });
    // Autocomplete/prefix search endpoint.
    // To enable this, make sure Trie has a suitable method like:
    //   std::vector<std::string> autocomplete(const std::string& prefix,
    //                                         std::size_t max_results) const;
    //
    // Response format (plain text):
    //   - Each suggestion on its own line.
    //   - Empty body if there are no suggestions.
    svr.Get("/autocomplete", [&dict](const httplib::Request& req, httplib::Response& res) {
        std::string prefix = get_param(req, "q");
        if (prefix.empty()) {
            res.status = 400;
            res.set_content("ERROR missing parameter q", "text/plain");
            return;
        }
        else 
        {
            for (int i =0;i<prefix.length();i++)
            {
                if (prefix.at(i) == ' ')
                {
                    prefix[i]='-';
                }
            }
            bool prefix_missing_delimiter=false; //missing delimiter between CSCI and 7000, for example
            prefix_missing_delimiter = ((prefix.length()>=4) && ((prefix.find("-") != 4)));
            if (prefix_missing_delimiter==true){
                    prefix.insert(4,"-");
            }
        }

        std::size_t limit = 450; //limit max number of results
        std::string limit_param = get_param(req, "limit");
        if (!limit_param.empty()) {
            try {
                limit = static_cast<std::size_t>(std::stoul(limit_param));
            } catch (...) {
                // keep default
            }
        }

        auto suggestions = dict.autocomplete(prefix, limit); //returns a vector of string objects, which is converted to a dictionary
        string body="";
        //retrieve course information for no more than 'limit' number of courses that have matching initial characters
        for (const auto& w : suggestions) {
            Course* coursePTR=dict.swapCodeforPtr(w);
            string title=coursePTR->getCourseTitle();
            body += w;
            body += " ";
            body += title;
            body += "\n";
            body += "*";
        }

        res.set_content(body, "text/plain");
    });

    // Serve static files (HTML/JS/CSS) from ./static
    // Place index.html inside a directory named "static" next to the executable.
    svr.set_mount_point("/", "./static");

    // Start blocking server loop
    svr.listen(HOST, PORT);
}