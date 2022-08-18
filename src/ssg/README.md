## `ssg/` - the place where we store all our ssg-related shenanigans

---

This directory/repository contains all Markdown-written pages are stored, aswell as SSG-specific files like templates, configuration files, themes, plugins, etc.

In theory this directory could just be spun off into a separate repository that can be submoduled for the sake of consistency and keeping file structure tidy. For now this is how things are going to be stored until we come up with a better solution. At the end all pages (aside `about`, `members` and `projects`) are stored in user-specific directories.

All non-compiled pages (aka, written in Markdown) are stored in `pages`, please *do not move them* as this allows to update the SSG setup later down the line and make use of features and things we implement by re-generating pages in the future.

After pages are compiled, it is expected to **move the resulting HTML to their corresponding directory**, please do not host your shit here, all pages generated here are meant to be stored in ***YOUR*** home directory, `obama`'s or apex/root. If you do not comply, I will personally ship myself to your address in a wooden box so I can break your fucking knees.

As of August 16th '22, we're not completely sure what static site generator we're going to use, see [Nikki's article on Markdown in `obama.solutions`](https://obama.solutions/~nicoleaoki/articles/markdown-in-obama.html) (if it's even up because of this lmfao) for why we have no fucking idea what to use and how much of a pain in the ass it has been to get anything working to begin with.