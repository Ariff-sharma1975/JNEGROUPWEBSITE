"""Package the public website for download without including the ZIP itself."""
from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile

root = Path(__file__).resolve().parent.parent
destination = root / "public/downloads/jne-group-website.zip"
destination.parent.mkdir(parents=True, exist_ok=True)
with ZipFile(destination, "w", ZIP_DEFLATED) as archive:
    for path in sorted((root / "public").rglob("*")):
        if path.is_file() and "downloads" not in path.relative_to(root / "public").parts:
            archive.write(path, Path("jne-group-website") / path.relative_to(root))
    for name in ("README.md", "netlify.toml", "scripts/package-website.py"):
        archive.write(root / name, Path("jne-group-website") / name)
print("Created public/downloads/jne-group-website.zip")
