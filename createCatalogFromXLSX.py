import pandas as pd
import json
xlsx_file = "cirt_data.xlsx"
js_file = "courseCatalog.js"
# Read spreadsheet

df = pd.read_excel(xlsx_file,sheet_name="courses")
# Replace blanks
df = df.fillna("")

def clean(value):
    """
    Convert to string,
    remove trailing asterisks,
    remove extra whitespace.
    """

    return str(value).rstrip("*").strip()

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
        f.write(f' skills: {json.dumps(clean(row["skills"]))},\n')
        f.write(f' reqCSENPHD: {json.dumps(clean(row["reqCSENPHD"]))},\n')
        f.write(f' reqCSENMS: {json.dumps(clean(row["reqCSENMS"]))},\n')
        f.write(f' reqCSENMSCPS: {json.dumps(clean(row["reqCSENMSCPS"]))},\n')
        f.write(f' reqNTENMSNE: {json.dumps(clean(row["reqNTENMSNE"]))},\n')
        f.write(f' reqAINTMSAI: {json.dumps(str(row["reqAINTMSAI"]))},\n')
        f.write(f' reqNote: {json.dumps(str(row["reqNote"]))},\n')
        f.write(" },\n")
    f.write("];\n")

js_file = "topicsCourseCatalog.js"


df = pd.read_excel(xlsx_file,sheet_name="topics")
# Replace blanks
df = df.fillna("")

def clean(value):
    """
    Convert to string,
    remove trailing asterisks,
    remove extra whitespace.
    """

    return str(value).rstrip("*").strip()

with open(js_file, "w", encoding="utf-8") as f:
    f.write("const courseCatalog = [\n")
    for _, row in df.iterrows():
        f.write(" {\n")
        f.write(f' id: {json.dumps(clean(row["id"]))},\n')
        f.write(f' courseSubject: {json.dumps(clean(row["courseSubject"]))},\n')
        f.write(f' term: {json.dumps(clean(row["term"]))},\n')
        section = str(row["section"]).strip().zfill(3)
        f.write(f' section: {json.dumps(section)},\n')
        f.write(f' title: {json.dumps(clean(row["title"]))},\n')
        f.write(f' description: {json.dumps(clean(row["description"]))},\n')
        f.write(f' credits: {json.dumps(clean(row["credits"]))},\n')
        f.write(f' notes: {json.dumps(clean(row["notes"]))},\n')
        f.write(f' restrictions: {json.dumps(clean(row["restrictions"]))},\n')
        f.write(f' skills: {json.dumps(clean(row["skills"]))},\n')
        f.write(f' reqCSENPHD: {json.dumps(clean(row["reqCSENPHD"]))},\n')
        f.write(f' reqCSENMS: {json.dumps(clean(row["reqCSENMS"]))},\n')
        f.write(f' reqCSENMSCPS: {json.dumps(clean(row["reqCSENMSCPS"]))},\n')
        f.write(f' reqNTENMSNE: {json.dumps(clean(row["reqNTENMSNE"]))},\n')
        f.write(f' reqAINTMSAI: {json.dumps(str(row["reqAINTMSAI"]))},\n')
        f.write(f' reqNote: {json.dumps(str(row["reqNote"]))},\n')
        f.write(" },\n")
    f.write("];\n")