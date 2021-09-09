# Malayan Arcade website
## Development
To run the website locally, install [Zola](https://www.getzola.org/documentation/getting-started/installation/) first.

Afterwards, open terminal pointing to this folder and execute:
```
# Execute this command only if you are making changes to
# the website and want to see the contents immediately.
zola serve
```

To generate the website, execute:
```
# Execute this command only if you want to upload and publish it. 
# For Github, this is not required. See "Development on Github Pages".
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