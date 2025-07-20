import os
import pyperclip

def should_include_file(file):
    return file.endswith(('.js', '.mjs', '.json')) and not file.startswith('.')

def get_all_code(directory):
    code_blocks = []

    for root, dirs, files in os.walk(directory):
        # Ignore hidden folders and common junk
        dirs[:] = [d for d in dirs if not d.startswith('.') and d not in ('node_modules', '__pycache__')]
        for file in files:
            if should_include_file(file):
                full_path = os.path.join(root, file)
                try:
                    with open(full_path, 'r', encoding='utf-8') as f:
                        relative_path = os.path.relpath(full_path, start=directory)
                        content = f.read()
                        code_blocks.append(f"\n// -------- {relative_path} --------\n{content}")
                except Exception as e:
                    print(f"⚠️ Error reading {full_path}: {e}")

    return "\n".join(code_blocks)

if __name__ == "__main__":
    target_folder = "src"  # Change if needed
    combined_code = get_all_code(target_folder)
    pyperclip.copy(combined_code)
    print("✅ All source code copied to clipboard.")
