#!/usr/bin/env python3
"""Genera docs/jira.pdf desde jira-resumen.md."""
from pathlib import Path

import markdown
from xhtml2pdf import pisa

ROOT = Path(__file__).resolve().parent
MD_FILE = ROOT / "jira-resumen.md"
PDF_FILE = ROOT.parent / "jira.pdf"

CSS = """
body { font-family: Arial, Helvetica, sans-serif; margin: 2cm; font-size: 11pt; line-height: 1.45; color: #172b4d; }
h1 { font-size: 20pt; } h2 { font-size: 16pt; margin-top: 1.2em; } h3 { font-size: 13pt; }
table { border-collapse: collapse; width: 100%; margin: 1em 0; font-size: 10pt; }
th, td { border: 1px solid #dfe1e6; padding: 6px 8px; text-align: left; }
th { background: #f4f5f7; }
a { color: #0052cc; }
blockquote { border-left: 3px solid #dfe1e6; margin-left: 0; padding-left: 12px; color: #5e6c84; }
"""


def main() -> None:
    text = MD_FILE.read_text(encoding="utf-8")
    body = markdown.markdown(text, extensions=["tables", "fenced_code", "nl2br"])
    html = f"""<!DOCTYPE html><html lang="es"><head><meta charset="utf-8"/>
<title>Jira — Ziryab</title><style>{CSS}</style></head><body>{body}</body></html>"""
    with PDF_FILE.open("wb") as out:
        status = pisa.CreatePDF(html.encode("utf-8"), dest=out, encoding="utf-8")
    if status.err:
        raise SystemExit(f"Error PDF: {status.err}")
    print(f"PDF: {PDF_FILE} ({PDF_FILE.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
