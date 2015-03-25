# gmarena.github.io
Secret Project for GA using HarpJS

### <a href="http://www.gracemarie.xyz" target="_blank">gracemarie.xyz</a>

### Development

**Work Flow**

```shell
git checkout -b <new_branch_name>
```

```shell
harp server _public
```
- This starts the auto-compile and regeneration of partials etc

### Production

```shell
harp compile _public/ ./
```
- **This will remove** `README.md`
- when you merge the new branch back into master it should still be there...
- **NEVER** compile on master