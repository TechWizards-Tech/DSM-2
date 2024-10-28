import re


input_file = r'C:\Users\gabri\OneDrive\Área de Trabalho\input.sql'
output_file = r'C:\Users\gabri\OneDrive\Área de Trabalho\output.sql'

def convert_commas_to_dots(value):
    if re.match(r"^\d+,\d+$", value):
        return value.replace(",", ".")
    return value

with open(input_file, 'r', encoding='utf-8') as infile, open(output_file, 'w', encoding='utf-8') as outfile:
    for line in infile:
        new_line = re.sub(r"(\d+),(\d+)", r"\1.\2", line)
        outfile.write(new_line)

print(f"Conversão concluída. O arquivo convertido foi salvo como {output_file}.")