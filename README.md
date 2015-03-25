# gmarena.github.io
Secret Project for GA using HarpJS

### <a href="http://www.gracemarie.xyz" target="_blank">gracemarie.xyz</a>

`dev` is the default branch for this repository.
`master` is the production branch.

### Development

**Work Flow**

```shell
git pull
git checkout -b <new_branch_name>
```

```shell
harp server _public
```
- This starts the auto-compile and regeneration of partials etc

When you're happy with the updates you've made, `commit` the changes.

Next: `merge` the feature branch with dev.

### Production

```shell
git checkout master
git merge dev
```

```shell
harp compile _public/ ./
```
- **This will remove** `README.md`
- **NEVER** compile on `dev`