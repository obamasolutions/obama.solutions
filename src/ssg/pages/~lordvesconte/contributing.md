---
title="kris' contributing guidelines"
description="A set of guidelines used on all my projects, which you can use too!"
---

# kris' personal contributing guidelines

---

I had this idea a while ago (about a year), of making my own little set of guidelines for when it comes to me committing/opening PRs or issues/etc, not because I needed them or anything, but because I wanted to provide something for others to see how I like contributing and stuff. Also because I'd like to give some kind of "baseline" that others can then inspire their own contributing guidelines and stuff from.

## setup
First of all, what I refer to as my "setup", is just a pretty simple description of my dev environment. Second, I put this out just for others to see how I do stuff, not as a "hey roast my stuff". I don't care what distro you use, what editor you use, what compiler do you prefer; this is my setup:
- laptop: Huawei Matebook D 15 2020 (AMD)
- distro: Nobara 37
- browser: Ungoogled Chromium
- editor: Visual Studio Code
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

Pull Requests with changes pending, who have not had any activity in the past 90 days will be closed, only exception to this rule is when the PR is tagged as a draft or when the PR author has given a genuine reason to keep the PR open (ex, busy with personal life, waiting for another PR/Issue to get resolved, waiting for an update for libXXX implementing feature YYY, etc.)

And as far as issue/PR etiquette goes, just try to pack as much info into one message/comment, nobody likes having 4 emails from Github because you can't edit a message or attach a video. Also, all issues/PRs (and commits) have to end with "I hope you explode", regardless of context.

## repositories
Repositories (with code, although this practically applies to all) have to follow the following 3-character-long directory structure:

- `ast/` - for media assets (images, audio, video, etc)
- `src/` - source code, the folder containing the actual thing
- `doc/` - documentation, mainly just man pages
- `bld/` - where binaries should be stored after being compiled, short for "build"
- `dbs/` - for databases, may also be called `db/` for compatibility purposes
- `www/` - similar to `src/` but for projects with a website within the repository
- `cfg/` - configuration files
- `plt/` - for platform-specific things
- `lib/` - for storing libraries

With directory structure aside, the "master" branch shall always be called `mistress`, while the "testing"/"indev" branch shall always be called `butler`. All other branches can have whatever funky skiddly skadadly name but as far as branches that are considered "important" like these 2, their name shall always be these.
Archived Repositories must move to an "archival" organization, this is both to have a proper backlog of what projects are maintained and to have things tidy (le epic 142 repositories in this profile).

## licenses
Like the true autist that I am, I tend to use (and recommend) GPL licenses, more specifically the AGPLv3 license. Due to this, I've made a chart/list of what license shall be used depending on the nature of the project:
- *De-facto*: AGPLv3
- <abbr title="System Modules, programs of High-Relevance, Compilers, etc">Hi-Priority Software</abbr>: GPLv2
- Libraries: LGPLv3
- Addons/Extensions: [YMGv2](https://github.com/citizensixtynine/ymg-v2) (or v3 when it comes out)
- Archived Projects and Documentation: BSD-2

If you'd like me to relicense a project or add special terms for your use-case, don't be afraid to <a href="contact.html">reach out</a>, I'm sure something can be arranged!

## codes of conducts
I'm against using any Codes of Conducts (CoC) such as "Contributor's Covenant" among others that prohibit users from any background from contributing to a project, free software is meant to be used, developed and shared by all; regardless of background or behaviour. Due to this CoCs that directly prohibit certain users from contributing for whatever reason are strongly discouraged from being used and I will ***not*** implement a CoC in any of my projects.

Contributing guidelines like these are allowed as they're "guidance points" to understand my personal "point of view" and behaviour when it comes to development, as such they don't directly affect development; and when they do I can adapt to what is needed.

## codenaming (and project management)
***This section is more about my projects, you're free to skip it since it shouldn't matter to you unless you're working with me.***

Projects under Kritterhouse are divided in 2 sections; A "master", and a "slave", this is makes it easier to track our projects per-codebase as issues can be tracked per-program/library/site/etc, rather than per-project.

As an example, Project Chapultepec is what we refer to our all-in-one mobile app for the Mexico City public transport, but we do not call our Android codebase `chapultepec`, we instead call it `juarez`; same goes for our iOS codebase, we call it `zapata`; and as such, we call our Linux codebase `chabacano`.

With this in mind, our project structure looks somewhat like this:
- `kritterhouse/chapultepec` (master)
    - `kritterhouse/chapultepec/zapata` (slave)
    - `kritterhouse/chapultepec/juarez` (slave)
    - `kritterhouse/chapultepec/chabacano` (slave)

While our reverse DNS structure for publishing/building looks like this:
- mx.kritterhouse.zapata (iOS build)
- mx.kritterhouse.juarez (Android build)
- mx.kritterhouse.chabacano (Desktop/Linux build)

It's weird and complicated but it works for us, it helps us track building and doesn't it look nice!?

PS: At Kritterhouse, our codenames are based under areas, landmarks, public transport stations, buildings, etc; located in Mexico City.

## commits (and PRs to some extent)
Look, I don't want my contrib graph looking like [a fucking bathroom](../ast/bathroom.png"), so I might as well just send one big commit with a lot of code at once, I don't care if I'm gonna have to spend 1 hour of my time fixing merge conflicts or doing code review, I'm not spamming commits for every single change I make.

### comments (commits)
Going along with that entire "one commit > 100 small commits" thing, I always try to explain everything that my gigant commit does in detail via a git comment, I know its odd but at least I'm not throwing a PR called "ehkwrjguhlvrgthugtrjlite" and having the maintainers guess what it does by reading the code.

## comments (code)
There should always be a comment header containing the following information:
- Name of file
- Project that the file belongs with
- Purpose of the file
- Licence/Credit
- Journal of issues with the file (ie, how the code was written, known issues that it posesses, link to issue on Github, etc)

With that in mind, this is how a "Hello, World" program written in should be written/published in a repository:
```js
/*
    src/hello.js
    ---
        
    This file corresponds to Project Arquimedes, you can find Project Archimedes' repo on https://github.com/lordvesconte/archimedes.
    
    The code in this file displays "Hello, World" in an alert window when opened/loaded in a browser, it also displays "Hello, World" in the console log which can be seen in both browsers and enviroments like Node and Bun.
    
    This file is licenced unedr the YMGv2 (Your Mum Gay version 2) license, you can learn more about it on https://github.com/citizensixtynine/ymgv2.
    
    Journal:
        - I don't know how to write JS, I have no idea if this works. - /lordvesconte
        - This file was mentioned in pull request #23, with the purpose of bringing up correct coding style for our projects. - /torvalds
    ---
*/
alert("Hello, World");
console.log(Hello, World");
```

Added to this, comments in code should be added in every function, explaining what it does, you're free to be humouristic about it (refer to TF2 source code) but please explain how your code works so that the next person to maintain it doesn't have to scramble their head around it.

## websites
Websites should be made using pure HTML+CSS, I highly recommend against using Javascript, specially Javascript frameworks like React. If you want to make a website for a project and you want to add JS, please try to minimize your use of JS, and if you're using a framework, **please use** Astro.

Added to this, using Google Fonts is a sin and you should abstain from importing them unless you're loading them locally/from your server.

It doesn't matter where you host your site, but please, do not use Cloudflare, and try to minimize as many imports that you can, people with low-speed connections still exist in 2022, and those who use limited data plans shouldn't have to load 2MB of fonts.

Talking about imports, please refrain from using external elements unless they're lightweight enough (under 200kb), if you're looking for CSS stylesheets for a site, try using one of the following stylesheets (or write your own!):
- [Neonette](https://github.com/lordvesconte/neonette) - Lightweight stylesheet based on Nanom's site and SPCSS - You're infact looking at Neonette right now!
- [VanillaCSS](https://github.com/bradleytaunt/vanilla-css) - "Vanilla CSS is a minimal baseline stylesheet for any web project" - Works with literally everything.
- [SPCSS](https://github.com/susam/spcss) - "SPCSS is a simple and plain stylesheet for simple text-based websites." - Really basic, works well with other stylesheets.
- [MVP](https://github.com/andybrewer/mvp) - "Minimalist stylesheet for HTML elements" - Beautiful, simply beautiful.
- [style.css](https://github.com/ungoldman/style.css) - "Classless stylesheet for HTML documents" - Works really well for blogs and guides/wikis.

## signing
I tend to always sign my commits, you can get a hold of my GPG and SSH keys over at [my about page](about.html), with that said, Github signs commits with their pre-generated key thing (you know the one from the Web UI/Desktop Client) but that's fine. 

All my commits are signed, if you see a commit of mine not signed (or it being signed with a different key than mine or Github's), please contact me about it.

---

This should be about it when it comes to my entire "contributing guidelines etiquette" endeavours, I'll update this as time goes on but that should be about it.
