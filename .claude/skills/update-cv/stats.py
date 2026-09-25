"""Статистика пет-проектов для сайта: коммиты, строки кода, даты. Запуск: python3 stats.py"""
import subprocess, re, os, json, sys
H=os.path.expanduser('~/projects')
EXT=re.compile(r'\.(js|jsx|ts|tsx|mjs|cjs|css|scss|html|py|sh|swift|kt|vue|svelte|sql)$')
SKIP=re.compile(r'(^|/)(dist|build|vendor|node_modules|coverage)/|\.min\.|lock')
def git(repo,*a): return subprocess.run(['git','-C',os.path.join(H,repo),*a],capture_output=True,text=True).stdout
def stat(repo,p='.'):
    # только мои коммиты — в Twig есть коммит внешнего контрибьютора
    c=int(git(repo,'rev-list','-E','--author=ktarasenko|kitarasenka|Tarasenka|Kirill','--count','HEAD','--',p).strip() or 0)
    dates=git(repo,'log','--format=%cs','--',p).split()
    files=[f for f in git(repo,'ls-files','--',p).splitlines() if EXT.search(f) and not SKIP.search(f)]
    loc=0
    for f in files:
        try: loc+=sum(1 for _ in open(os.path.join(H,repo,f),errors='ignore'))
        except: pass
    authors=set(git(repo,'log','--format=%ae','--',p).split())
    return dict(commits=c,loc=loc,files=len(files),first=dates[-1] if dates else None,last=dates[0] if dates else None,authors=sorted(authors))
out={}
out['BatBus']=stat('nodes-managers','modules/bat_bus')
out['Twig']=stat('twig')
out['Garden']=stat('garden')
out['Nodex-all']=stat('nodes-managers')
for m in ['mafia_club','trip-pay','all_notificator','captcha','searcher','translator','tg-dis-connector','tg_poster','tuna']:
    out[m]=stat('nodes-managers','modules/'+m)
for k,v in out.items(): print(f"{k:18} commits={v['commits']:<5} loc={v['loc']:<7} files={v['files']:<5} {v['first']}..{v['last']} {v['authors']}")
