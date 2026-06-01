#!/usr/bin/env python3
"""Agrega JSON de issues Jira exportados por MCP (varias páginas)."""
import json
import sys
from collections import Counter
from pathlib import Path

def aggregate(files: list[Path]) -> dict:
    issues = []
    for f in files:
        data = json.loads(f.read_text(encoding="utf-8"))
        issues.extend(data.get("issues", []))

    status = Counter()
    types = Counter()
    assignees = Counter()
    epics = []

    for issue in issues:
        f = issue["fields"]
        status[f["status"]["name"]] += 1
        types[f["issuetype"]["name"]] += 1
        a = (f.get("assignee") or {}).get("displayName") or "Sin asignar"
        assignees[a] += 1
        if f["issuetype"]["name"] == "Epic":
            epics.append(
                {
                    "key": issue["key"],
                    "summary": f["summary"],
                    "status": f["status"]["name"],
                    "assignee": a,
                }
            )

    total = len(issues)
    done = sum(
        c
        for name, c in status.items()
        if name in ("Finalizada", "Done", "Listo")
        or "done" in name.lower()
    )
    # status category done
    done_cat = 0
    for issue in issues:
        cat = issue["fields"]["status"].get("statusCategory", {})
        if cat.get("key") == "done":
            done_cat += 1

    return {
        "total": total,
        "done": done_cat,
        "pct": round(100 * done_cat / total, 1) if total else 0,
        "status": dict(status),
        "types": dict(types),
        "assignees": dict(assignees),
        "epics": sorted(epics, key=lambda x: x["key"]),
    }


if __name__ == "__main__":
    stats = aggregate([Path(p) for p in sys.argv[1:]])
    out = Path(__file__).resolve().parent / "stats.json"
    out.write_text(json.dumps(stats, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"OK total={stats['total']} done={stats['done']} pct={stats['pct']}%")
