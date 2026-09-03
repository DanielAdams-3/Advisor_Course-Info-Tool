import pandas as pd
import json

#https://stackoverflow.com/questions/64746066/how-to-access-google-sheets-without-authentication

sheet_id="11YBH99TtZ-5n22z8hDVdbpa43s2aK7L7crpLpRsKXeo"
r="https://docs.google.com/spreadsheets/export?id={}&exportFormat=csv".format(sheet_id)
df= pd.read_csv(r)
df.head()


#

js_file = "courseCatalog.js"
js2_file = "topicsCourseCatalog.js"
# Read spreadsheet

# Replace blanks
df = df.fillna("")

def clean(value):
    """
    Convert to string,
    remove trailing asterisks,
    remove extra whitespace.
    """

    return str(value).strip()

with open(js_file, "w", encoding="utf-8") as f:
    f.write("const courseCatalog = [\n")
    for _, row in df.iterrows():
        f.write(" {\n")
        f.write(f' id: {json.dumps(clean(row["id"]))},\n')
        f.write(f' courseSubject: {json.dumps(clean(row["courseSubject"]))},\n')
        f.write(f' title: {json.dumps(clean(row["title"]))},\n')
        f.write(f' description: {json.dumps(clean(row["description"]))},\n')
        f.write(f' credits: {json.dumps(clean(row["credits"]))},\n')
        f.write(f' notes: {json.dumps(clean(row["notes"]))},\n')
        f.write(f' restrictions: {json.dumps(clean(row["restrictions"]))},\n')
        f.write(f' offerings: {json.dumps(clean(row["offerings"]))},\n')
        f.write(f' skills: {json.dumps(clean(row["skills"]))},\n')
        f.write(f' reqCSENPHD: {json.dumps(clean(row["reqCSENPHD"]))},\n')
        f.write(f' reqCSENMS: {json.dumps(clean(row["reqCSENMS"]))},\n')
        f.write(f' reqCSENMSCPS: {json.dumps(clean(row["reqCSENMSCPS"]))},\n')
        f.write(f' reqNTENMSNE: {json.dumps(clean(row["reqNTENMSNE"]))},\n')
        f.write(f' reqAINTMSAI: {json.dumps(str(row["reqAINTMSAI"]))},\n')
        f.write(f' reqNote: {json.dumps(str(row["reqNote"]))},\n')
        f.write(" },\n")
    f.write("];\n")

f.close()

df2 = pd.read_excel(xlsx_file,sheet_name="topics")
# Replace blank cells, if needed
df2 = df2.fillna("")

with open(js2_file, "w", encoding="utf-8") as g:
    g.write("const topicsCourseCatalog = [\n")
    for _, row in df2.iterrows():
        g.write(" {\n")
        g.write(f' id: {json.dumps(clean(row["id"]))},\n')
        g.write(f' courseSubject: {json.dumps(clean(row["courseSubject"]))},\n')
        g.write(f' term: {json.dumps(clean(row["term"]))},\n')
        g.write(f' section: {json.dumps(str(row["section"]).strip().zfill(3))},\n')
        g.write(f' title: {json.dumps(clean(row["title"]))},\n')
        g.write(f' description: {json.dumps(clean(row["description"]))},\n')
        g.write(f' credits: {json.dumps(clean(row["credits"]))},\n')
        g.write(f' notes: {json.dumps(clean(row["notes"]))},\n')
        g.write(f' offerings: {json.dumps(clean(row["offerings"]))},\n')
        g.write(f' restrictions: {json.dumps(clean(row["restrictions"]))},\n')
        g.write(f' skills: {json.dumps(clean(row["skills"]))},\n')
        g.write(f' reqCSENPHD: {json.dumps(clean(row["reqCSENPHD"]))},\n')
        g.write(f' reqCSENMS: {json.dumps(clean(row["reqCSENMS"]))},\n')
        g.write(f' reqCSENMSCPS: {json.dumps(clean(row["reqCSENMSCPS"]))},\n')
        g.write(f' reqNTENMSNE: {json.dumps(clean(row["reqNTENMSNE"]))},\n')
        g.write(f' reqAINTMSAI: {json.dumps(str(row["reqAINTMSAI"]))},\n')
        g.write(f' reqNote: {json.dumps(str(row["reqNote"]))},\n')
        g.write(" },\n")
    g.write("];\n")
g.close()