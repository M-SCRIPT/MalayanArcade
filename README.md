# Malayan Arcade website
## Add a Club
1. Make a folder inside the `content/clubs` directory. The folder name should not contain spaces. Use a hyphen/dash (`-`) to separate the words. If your club's name is "Club XYZ", your folder name should be "club-xyz" (without the quotes).
2. Inside the folder, add the club's logo. Rename it to `logo.png` for PNG files or `logo.jpg` for JPEG files. If your logo has a different format or want to keep the name, see step 3.
3. In the same folder, create a `index.md` file with the following format:
```md
+++
title = "Club XYZ"

[extra]
logo = "logo.png"
slogan = "Hello World!"
moderators = ["Juan de la Cruz"]
poster = "poster.jpg"

[extra.links]
"Another Link" = "google.com"

[extra.social_links]
facebook = "https://facebook.com/malayanmindanao"
+++

Club description goes here!
```
- `title` is the where you put the club name.
### `[extra]` Section
- `slogan` is the club tagline/slogan.
- `moderators` is an array in which where you will specify the names of the club moderators.
- `logo` is where you will specify the file name of your logo. This is optional.
- `poster` is where you will specify the file name of your poster. This is optional.
- The `[extra.links]` section is where you will put your links. Link entries should be `"<link name>" = "<url>"`.
- The `[extra.social_links]` is where you will put your clubs social media links. Link entries should be `<social media site> = "<url>"`

## Development
To run the website locally, install [Zola](https://www.getzola.org/documentation/getting-started/installation/) first.

Afterwards, open the terminal pointing to this folder and execute:
```
# Execute this command only if you are making changes to
# the website and want to see the contents immediately.
zola serve
```

To generate the website, execute:
```
# Execute this command only if you want to upload and publish it. 
# For Github, this is not required. See "Deployment on Github Pages".
zola build
```

## Deployment on Github Pages
The repo includes a [script](.github/workflows/ci.yml) that instructs Github to generate and publish the build on every change. No manual intervention is required.

### Setup
If you deploy it on Github for the first time, you need to do the following:
1. Generate a personal token at https://github.com/settings/tokens. Make sure "repo" is checked. Click "Generate Token" and Copy the contents of the token afterwards.
2. Create a secret by going to repo settings and select "Secrets". Click "New Repository Secret" on the upper corner and you'll be presented a form. The name should be "TOKEN" (without quotes) and the value should be the token you have copied earlier. Press "Add Secret" to save the secret.
3. Go back again to repo settings and select "Pages". In the branch dropdown of the source section, select "gh-pages" and press "Save". Wait for a few seconds to see the changes.

These steps are only done once. Once you make changes to the site/repo, Github will automatically build and publish the website.
