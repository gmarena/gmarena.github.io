# gmarena.github.io
Secret Project for GA using HarpJS

#### <a href="http://www.gracemarie.xyz" target="_blank">gracemarie.xyz</a>

##Work Flow

`dev` is the default branch for this repository.
`master` is the production branch.

#### Development

```shell
git pull
git checkout -b <new_branch_name>
```

```shell
harp server _gracemarie
```
- This starts the auto-compile and regeneration of partials etc

When you're happy with the updates you've made, `commit` the changes.

Next: `merge` the feature branch with dev.

#### Production

```shell
git checkout master
git merge dev
```

```shell
harp compile _gracemarie/ ./
```

```shell
git add --all .
git commit -m "[commit message]"
git push
```
- **This will remove** `README.md`
- **NEVER** compile on `dev`
Seriously, only ever compile on master. **ONLY ON MASTER**
