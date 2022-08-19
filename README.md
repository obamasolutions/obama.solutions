**DO NOT MAKE THIS REPOSITORY PUBLIC UNTIL AUGUST 24TH/SEPTEMBER 1ST, IF YOU DO I WILL BREAK YOUR FUCKING LEGS**

---

<div align="center">
	<img src="src/ast/branding/readme.gif" alt="Look at this handsome man, how he spins after being painfully tortured and turned into a prism! (also fuck you, let me load a 318k gif of Hi-Res Obama Prism spinning)">
	<h1><a href="https://obama.solutions">obama.solutions</a></h1>
</div>

### about

This repository fosters the source code of the most autistic website on the universe; it is written in pure HTML and CSS with some JS here and there. Some pages here are written in Markdown and have to be compiled using a static site generator (SSG), as of August 18th '22, [we do not have any "set" SSG to use](https://obama.solutions/~nicoleaoki/articles/markdown-in-obama.html).

Every user has their own "home" directory under `~(github username)`, this is where users can develop their own home pages, we also have an `~obama` page available where users can host all sorts of websites for the sake of having them "publicly available" or whatever the fuck that means. In summary, if you're part of obama.solutions you get to make your own page here which you can fill with your junk, and you can also burden `~obama` with your junk.

Also, we practically tried to rip off [uwu.network](https://uwu.network) but it didn't really work out as we wanted it to, specially since we were using Asstro without any proper JS-dev experience, so we just "replicated" it using stock HTML+CSS and called it a day.

### deployment

All source code is stored in `src/`, you kinda just copy over all the things inside onto your `www/` folder on your webserver thing and load that, independent/per-software files like .htaccess and all that bullshit is not included, you're expected to make them yourself for your server, we're currently using `nginx` (@suborbitalrat correct me if i'm wrong) but we just `cp src/* /etc/www` stuff so no config files for you.

As far as Markdown pages stuff goes, We're currently using [REDACTED] to handle SSG stuff, you can read our (well, Nikki's) article on how we deploy SSG software [here](https://obama.solutions/~nicoleaoki/articles/markdown-in-obama.html). But in summary we just have all files setup and stored in `ssg/` and we just run `mkpages.sh` to run commands and shit, automatically regenerating all pages.

### contributing

While we don't really expect you to contribute anything to this repository, you're welcome to come fix our shit for free. Just make sure to follow [our contributing guidelines](http://krisp.sdf.org/contributing.html) and "follow our coding style" or whatever the fuck that means; just try to picture 2 retards trying to make a website while sharing a single neuron and try to code like that.

### license

All source code here is licensed under the [YMGv3](https://github.com/nicoleaoki/ymg-v3) license, while some images are copyrighted and whatever the fuck, we honestly don't give a single shit about all that copyright stuff; if you're mad that we stole your shit, we recommend you to go seethe, cope and mald, then go send us an email over at <hello@obama.solutions> explaining your situation (we'll def not ignore you until you threaten to sue us).

### credits

While we may seem like hypocrites crediting people for their work after saying that if you're mad about us copying your shit, you should go cope, seethe and mald. We want to make it clear that this site was made possible by a lot of things made by a lot of people, and at the end, who doesn't want to be attributed for their work, specially in obama.solutions of all things?!

So with that said, thanks to the following people for making this possible:

- [@nicoleaoki](https://github.com/nicoleaoki) for having the idea, practically writing/developing everything, spamming suborbitalrat's DMs with "please test this setup", among other things.
- [@suborbitalrat](https://github.com/suborbitalrat) for not knowing how to fix merge issues, making the SSG setup work (WIP), hosting the site on her server, owning the obama.solutions domain, letting me spam her dms, among other things.
- [@bradleytaunt](https://github.com/bradleytaunt) for making VanillaCSS, the stylesheet that we use for practically all our sites.
- [@alloca123](https://github.com/alloca123) for making *based-ssg*, the SSG that we originally planned to use but ended up ditching because I like seething about not being able to use all Markdown features. Also because cool friend who profits off underage sex.
- [@idkso](https://github.com/idkso) for being a fucking retard who let the idk.so domain die and having us buy obama.solutions and get suborbitalrat's server up to replace his piss-smelling server which he wouldn't even give us access to. Fuck you dude.
- [@uwu](https://github.com/uwu) members for making uwu.network, the site that inspired us to make this thing.
- [@you](https://github.com/settings), for reading this readme and giving a fuck about us. Just for doing that you deserve some credit.