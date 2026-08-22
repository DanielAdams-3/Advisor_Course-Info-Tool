import pandas as pd
import json
print(pd.__version__)

# Input and output files
xlsx_file = "courses.xlsx"
js_file = "courseCatalog.js"
# Read Excel sheet
df = pd.read_excel(xlsx_file, engine="openpyxl")
# Replace NaN values with empty strings
df = df.fillna("")

with open(js_file, "w", encoding="utf-8") as f:
    f.write("const courseCatalog = [\n")
    for row in df.iterrows():
        f.write(" {\n")
        f.write(f' courseSubject: {json.dumps(str(row["courseSubject"]))},\n')
        f.write(f' title: {json.dumps(str(row["title"]))},\n')
        f.write(f' credits: {json.dumps(str(row["credits"]))},\n')
        f.write(f' description: {json.dumps(str(row["description"]))},\n')
        f.write(f' notes: {json.dumps(str(row["notes"]))},\n')
        f.write(f' restrictions: {json.dumps(str(row["restrictions"]))},\n')
        f.write(f' skills: {json.dumps(str(row["skills"]))},\n')
        f.write(f' reqCSENPHD: {json.dumps(str(row["reqCSENPHD"]))},\n')
        f.write(f' reqCSENMS: {json.dumps(str(row["reqCSENMS"]))},\n')
        f.write(f' reqCSENMSCPS: {json.dumps(str(row["reqCSENMSCPS"]))},\n')
        f.write(f' reqNTENMSNE: {json.dumps(str(row["reqNTENMSNE"]))},\n')
        f.write(f' reqAINTMSAI: {json.dumps(str(row["reqAINTMSAI"]))},\n')
        f.write(f' reqNote: {osn.dumps(str(row["reqNote"]))},\n')
    f.write(""" getCourseObject: function(){
        return this;
    }

""")

f.write(" },\n")
f.write("];\n")
