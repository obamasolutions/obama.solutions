---
title="Nikki's Contributing Guidelines"
description="A set of guidelines used on all my projects, which you can use too!"
---

# Nikki's Personal Contributing Guidelines

---

I had this idea a while ago (about a year), of making my own little set of guidelines for when it comes to me committing/opening PRs or issues/etc, not because I needed them or anything, but because I wanted to provide something for others to see how I like contributing and stuff. Also because I'd like to give some kind of "baseline" that others can then inspire their own contributing guidelines and stuff from.

## setup
First of all, what I refer to as my "setup", is just a pretty simple description of my dev environment. Second, I put this out just for others to see how I do stuff, not as a "hey roast my stuff". I don't care what distro you use, what editor you use, what compiler do you prefer; this is my setup:
- laptop: Huawei Matebook D 15 2020 (AMD)
- distro: Fedora
- browser: Ungoogled Chromium
- editor: Sublime Text
- terminal: gnome-terminal
- shell: bash + starship

## issues and PRs
All issues and PRs' titles are labeled at the start with one of the following tags:
- [INFO] - Just information for future issues/PRs to make a reference to, not really reporting a problem or anything.
- [HELP] - Asking for help on something, if on an issue that means the issue is well... an issue; if on a PR this means that help is needed.
- [DISCUSSION] - Starting a discussion on something; only used for issues.
- [SUGGESTION] - For suggestions, similar to discussion but its just for suggestions; only used for issues.
- [FIX] - For submitting patches/commits that fix things; only used for PRs
- [WIP] - For patches/commits that are Work In Progress, PRs tagged with this will always have a "Draft" tag next to them (in Github); only used for PRs
- And more not listed here because I'm writing this while offline...

Pull Requests with changes pending, who have not had any activity in the past 90 days will be closed, only exception to this rule is when the PR is tagged as a draft or when the PR author has given a genuine reason to keep the PR open (ex, busy with personal life, waiting for another PR/Issue to get resolved, waiting for an update for libXXX implementing feature YYY, )

And as far as issue/PR etiquette goes, just try to pack as much info into one message/comment, nobody likes having 4 emails from Github because you can't edit a message or attach a video. Also, all issues/PRs (and commits) have to end with "I hope you explode", regardless of context.

## repositories
Repositories (with code, although this practically applies to all) have to follow the following 3-character-long directory structure:

- `ast/` - for media assets (images, audio, video, etc)
- `src/` - source code, the folder containing the actual thing
- `doc/` - documentation, mainly just man pages
- `bld/` - where binaries should be stored after being compiled, short for "build"
- `dbs/` - for databases
- `www/` - similar to `src/` but for projects with a website within the repository
- `cfg/` - configuration files
- `plt/` - for platform-specific things
- `lib/` - for storing libraries

With directory structure aside, the "master" branch shall always be called `mistress`, while the "testing" branch shall always be called `butler`. All other branches can have whatever funky skiddly skadadly name but as far as branches that are considered "important" like these 2, their name shall always be these.
Archived Repositories must move to an "archival" organization, this is both to have a proper backlog of what projects are maintained and to have things tidy (le epic 142 repositories in this profile).

## licenses
Like the true autist that I am, I tend to use (and recommend) GPL licenses, more specifically the AGPLv3 license. Due to this, I've made a chart/list of what license shall be used depending on the nature of the project:
- *De-facto*: AGPLv3
- <abbr title="System Modules, programs of High-Relevance, Compilers, etc">Hi-Priority Software</abbr>: GPLv2
- Libraries: LGPLv3
- Addons/Extensions: [YMGv2](https://github.com/citizensixtynine/ymg-v2) (or v3 when it comes out)
- Archived Projects and Documentation: BSD-3

If you'd like me to relicense a project or add special terms for your use-case, don't be afraid to <a href="contact.html">reach out</a>, I'm sure something can be arranged!

## codes of conducts
I'm against using any Codes of Conducts (CoC) such as "Contributor's Covenant" among others that prohibit users from any background from contributing to a project, free software is meant to be used, developed and shared by all; regardless of background or behaviour. Due to this CoCs that directly prohibit certain users from contributing for whatever reason are strongly discouraged from being used and I will ***not*** implement a CoC in any of my projects.

Contributing guidelines like these are allowed as they're "guidance points" to understand my personal "point of view" and behaviour when it comes to development, as such they don't directly affect development; and when they do I can adapt to what is needed.

## commits (and PRs to some extent)
Look, I don't want my contrib graph looking like [a fucking bathroom](../ast/bathroom.png"), so I might as well just send one big commit with a lot of code at once, I don't care if I'm gonna have to spend 1 hour of my time fixing merge conflicts or doing code review, I'm not spamming commits for every single change I make.

### comments in commits
Going along with that entire "one commit > 100 small commits" thing, I always try to explain everything that my gigant commit does in detail via a git comment, I know its odd but at least I'm not throwing a PR called "ehkwrjguhlvrgthugtrjlite" and having the maintainers guess what it does by reading the code.

## comments (code)
I try to make comments only when necessary (ex, code is fucking spaghetti), and even when I do, I'm gonna be humourist about it. All I'm gonna say about this is that comments aren't really something I enjoy being formal about as it's one of those things that don't really matter unless I'm trying to make some kind of glossary to look back in the future, which even then, I'm gonna be really informal about. And most developers won't even see them so I honestly don't care about them.

## signing
I tend to always sign my commits, you can get a hold of my GPG and SSH keys over at [my about page](about.html), with that said, Github signs commits with their pre-generated key thing (you know the one from the Web UI/Desktop Client) but that's fine. 

All my commits are signed, if you see a commit of mine not signed (or it being signed with a different key than mine or Github's), please contact me about it.

---

This should be about it when it comes to my entire "contributing guidelines etiquette" endeavours, I'll update this as time goes on but that should be about it.